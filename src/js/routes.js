const express = require('express');
const controls = require('./controllers')

const router = new express.Router();

router.post('/', controls.createUser);
router.get('/', controls.readUsersList);
router.get('/:id', controls.readUserById);
router.put('/:id', controls.updateUserById);
router.delete('/:id', controls.deleteUserById);

module.exports = router;