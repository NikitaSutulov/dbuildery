const mysql = require('mysql2/promise');
const {extend} = require("lodash")
const fs = require("fs");
const path = require("path");

const config = JSON.parse(fs.readFileSync(path.resolve('src/js/config.json')).toString())


/**
 * Шаблони  SQL-запитів
 */

const queries = {

    createUser: `INSERT INTO USER(ID, LOGIN, PASSWORD, EMAIL) VALUES (:id, :login, :password, :email)`,

    readUsersList: `SELECT * FROM USER`,
    readUserById: `SELECT * FROM USER WHERE ID= :id`,

    updateUserById: `UPDATE USER SET LOGIN= :login, PASSWORD= :password, EMAIL= :email WHERE ID= :id`,

    deleteUserById: `DELETE FROM USER WHERE ID= :id`

}

const sendNotFound = (res) => res.status(404).send({
    status: 404,
    error: 'Not_Found',
});

const sendMissing = (res) => res.status(422).send({
    status: 422,
    error: 'Missing_Required_Parameters',
});

const validateParams = (required, params) => {
    for (const value of required) {
        if (params[value] === undefined) {
            return false;
        }
    }
    return true;
};

const getUpdateValues = async (req) => {
    const user = await executeSQL(queries.readUserById, req.params);
    const values = {...user[0], ...req.params, ...req.body};
    return values;
};


/**
 * Повертає результат виконання SQL-запиту
 * @param {String} query шаблон SQL-запиту
 * @param {Object} values дані для заповнення шаблону
 * @throws {Error}
 * @return {Array}
 */

const executeSQL = async (query, values) => {
    let connection
    let sqlStatement
    try {
        connection = await mysql.createConnection({
            uri: config.db.uri,
            namedPlaceholders: true,
            password: config.db.password
        });

        sqlStatement = connection.format(query, values)

        const [ results, fields ] = await connection.execute(sqlStatement)
        return results
    } catch (e) {
        throw new Error(`SQL: ${sqlStatement} - ${e.toString()}`)
    } finally {
        if(connection) connection.end()
    }
}


/**
 * Створює запис облікових даних користувача та повертає їх
 */
const createUser = async (req, res) => {
    if (!validateParams(['login', 'password', 'email'], req.body)) {
        return sendMissing(res);
    }
    try {
        const values = extend({}, req.body, req.params)
        let result = await executeSQL(queries.createUser, values)
        result = await executeSQL(queries.readUserById, {
            id: result.insertId,
        });
        res.status(200).send(result);
    } catch (err) {
        console.log(req.body);
        console.log(err.toString());
        return res.status(500).send({
            status: 500,
            error: `${err.toString()}`
        });
    }
}


/**
 * Повертає список користувачів
 */
const readUsersList = async (req, res) => {

    try {
        let result = await executeSQL(queries.readUsersList)
        res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: `${err.toString()}`
        });
    }
}


/**
 * Повертає облікові дані користувача за його id
 */
const readUserById = async (req, res) => {
    if (!validateParams(['id'], req.params)) {
        return sendMissing(res);
    }
    try {
        let result = await executeSQL(queries.readUserById, req.params)
        res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: `${err.toString()}`
        });
    }
}


/**
 * Оновлює облікові дані користувача та повертає оновлену версію
 * облікових даних
 */
const updateUserById = async (req, res) => {
    const values = await getUpdateValues(req)
    if (!validateParams(['id', 'login', 'password', 'email'], values)) {
        if (!values.id) {
            return sendMissing(res);
        } else {
            return sendNotFound(res);
        }
    }
    try {
        let result = await executeSQL(queries.updateUserById, values)
        result = await executeSQL(queries.readUserById, req.params)
        res.status(200).send(result);
    } catch (err) {
        console.log(req.body);
        console.log(err.toString());
        return res.status(500).send({
            status: 500,
            error: `${err.toString()}`
        });
    }
}


/**
 * Видаляє облікові дані користувача та повертає їх
 */
const deleteUserById = async (req, res) => {
    if (!validateParams(['id'], req.params)) {
        return sendMissing(res);
    }
    try {
        let result = await executeSQL(queries.readUserById, req.params)
        await executeSQL(queries.deleteUserById, req.params)
        res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: `${err.toString()}`
        });
    }
}

module.exports = { createUser, readUsersList, readUserById, updateUserById, deleteUserById }