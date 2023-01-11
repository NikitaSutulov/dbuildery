/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "223d676db2e75ee086b549a0dfaa29ff"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.cdcd139b.css",
    "revision": "68950cae86c61c120c3b4121d170495d"
  },
  {
    "url": "assets/img/Agile-model1.d7cea002.jpg",
    "revision": "d7cea002c29bd7b3520e9ee4b29fd9ae"
  },
  {
    "url": "assets/img/create_same_user_again_fail.f279d299.jpg",
    "revision": "f279d2994ca670c75109d7fff1dd1e68"
  },
  {
    "url": "assets/img/create_user_missing_parameters.456e30f4.jpg",
    "revision": "456e30f402db6d1319cf0e92b7578ebb"
  },
  {
    "url": "assets/img/create_user.a07a06cd.jpg",
    "revision": "a07a06cd43e404053fd40ab002c0966c"
  },
  {
    "url": "assets/img/delete_user_by_id.22e3b911.jpg",
    "revision": "22e3b911811bfa29255abb299a603be4"
  },
  {
    "url": "assets/img/delete_user_not_found.2c244646.jpg",
    "revision": "2c244646d553b3f2ad40a5dce0463027"
  },
  {
    "url": "assets/img/email_validation_fail_while_updating.62b39061.jpg",
    "revision": "62b390619e193ff49f1c3c864164da4b"
  },
  {
    "url": "assets/img/get_all_users.53768d9c.jpg",
    "revision": "53768d9c1f50ed606837baf1d68cb41b"
  },
  {
    "url": "assets/img/get_created_user.49170d3d.jpg",
    "revision": "49170d3dede1238eb1ac8be568a970bb"
  },
  {
    "url": "assets/img/get_user_by_id.3d66dc1c.jpg",
    "revision": "3d66dc1c6c70b9f4fb79edf0d7d71900"
  },
  {
    "url": "assets/img/get_user_not_found.abbb7ed1.jpg",
    "revision": "abbb7ed19906572201cd1b69a5400598"
  },
  {
    "url": "assets/img/incremental_model.f5d9e8fb.jpg",
    "revision": "f5d9e8fb91535b6d3c0ea1fabfff8de3"
  },
  {
    "url": "assets/img/iteration_model.e0a0d503.png",
    "revision": "e0a0d503d526275a965b85712a403de8"
  },
  {
    "url": "assets/img/kanban.b72f5f24.png",
    "revision": "b72f5f24fff0c7c164d7fd9c58239efd"
  },
  {
    "url": "assets/img/rup.7215ce47.png",
    "revision": "7215ce47c8b371b4efe2dd0229a203da"
  },
  {
    "url": "assets/img/sceme.4c43a144.png",
    "revision": "4c43a1442c9af499a43b753271d55083"
  },
  {
    "url": "assets/img/Scrum1.6cf6e799.jpg",
    "revision": "6cf6e7992ae0a26347624ec09b471af1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Spiral-model.ff8b53fb.jpg",
    "revision": "ff8b53fb3a68d45d8d41595446121981"
  },
  {
    "url": "assets/img/update_user_change_email.abefb685.jpg",
    "revision": "abefb6854c63235c7378003ea0caaa07"
  },
  {
    "url": "assets/img/update_user_change_login.e9af76ec.jpg",
    "revision": "e9af76ec5b6e3c9f2c23a3061f5466a7"
  },
  {
    "url": "assets/img/update_user_change_password.3d1c9cf2.jpg",
    "revision": "3d1c9cf254acd86436c76dcbda29688e"
  },
  {
    "url": "assets/img/update_user_email_exists_fail.d9821db1.jpg",
    "revision": "d9821db15efafcd13c50da658df66efb"
  },
  {
    "url": "assets/img/update_user_not_found.ae3c77d0.jpg",
    "revision": "ae3c77d036fd8282327a5293bb97634c"
  },
  {
    "url": "assets/img/update_user_with_all_fiels_enabled.5b141da8.jpg",
    "revision": "5b141da82c55d08cb8e04da24955e5ae"
  },
  {
    "url": "assets/img/user_deleted.5e34abeb.jpg",
    "revision": "5e34abeb2e74c17a33ea402a40509b9d"
  },
  {
    "url": "assets/img/V-model-1.f7c326d5.jpg",
    "revision": "f7c326d533c04a8c5c68e1344c6ed759"
  },
  {
    "url": "assets/img/Waterfall-model.370b6011.jpg",
    "revision": "370b60114ad9a205c274b630c92f2bab"
  },
  {
    "url": "assets/js/10.22aab0fa.js",
    "revision": "b96c7984d7e2bfa74fccd7452313e355"
  },
  {
    "url": "assets/js/11.f6bc7f4e.js",
    "revision": "3968b5f88a78520142b70cc970eb142d"
  },
  {
    "url": "assets/js/12.4783e5a1.js",
    "revision": "1cfd345534e3359ba97f91e241c79675"
  },
  {
    "url": "assets/js/13.b412290c.js",
    "revision": "ac2da5ed962f7f2cacf7fb0827aa39e6"
  },
  {
    "url": "assets/js/14.95613fdb.js",
    "revision": "3bec9b64a0e8cb73d66f5e927632a65a"
  },
  {
    "url": "assets/js/15.3e6a71e3.js",
    "revision": "d39ff77024c51fb760fe8a64935df4eb"
  },
  {
    "url": "assets/js/16.0f3f823f.js",
    "revision": "57550652abd4d67debc3bcb62d9dca19"
  },
  {
    "url": "assets/js/17.474ae7d9.js",
    "revision": "6dd57c1e3dfa0970d8c8062b70b9e8b7"
  },
  {
    "url": "assets/js/18.2edda514.js",
    "revision": "2525e272b5bd10d83c57db38858d2e95"
  },
  {
    "url": "assets/js/19.b08dca03.js",
    "revision": "adbe9e7af9d91789186779e7ec8e6343"
  },
  {
    "url": "assets/js/2.0e4291ac.js",
    "revision": "2232ff725cf769118456c1710678dd68"
  },
  {
    "url": "assets/js/20.35b0c5ee.js",
    "revision": "9fa7dcf859250aedc6d04ca91bc4bfae"
  },
  {
    "url": "assets/js/21.76ccaa26.js",
    "revision": "589d9499b6609ee2753964a55213c01f"
  },
  {
    "url": "assets/js/22.9b7f8197.js",
    "revision": "9677460d9fcebc39eabd8ca94be2bd20"
  },
  {
    "url": "assets/js/23.99c4e488.js",
    "revision": "b92e1f55736831fbb2b216a12c17a796"
  },
  {
    "url": "assets/js/24.fd42eed0.js",
    "revision": "9b417c2389e1474ad33d3c4d8766f01d"
  },
  {
    "url": "assets/js/26.98ddbdc0.js",
    "revision": "3c7638eeb4bcf69a608b055a1d359556"
  },
  {
    "url": "assets/js/3.4ac02381.js",
    "revision": "4cd5e4a537ed35661905cb050a60fa7c"
  },
  {
    "url": "assets/js/4.d8f2c834.js",
    "revision": "5e5cb576e8a80a0302b911840c2993cc"
  },
  {
    "url": "assets/js/5.f4e2bf80.js",
    "revision": "d3b6667744d0ba61615c969377e8755a"
  },
  {
    "url": "assets/js/6.35bb05ba.js",
    "revision": "e795d7a17a5d9b6d84cc464a134d02a7"
  },
  {
    "url": "assets/js/7.02b763f8.js",
    "revision": "fffdcae59df008e134ffb10b71491caa"
  },
  {
    "url": "assets/js/8.86fd31a0.js",
    "revision": "13d5719cd43753079cba504933c74b8f"
  },
  {
    "url": "assets/js/9.bf1adbab.js",
    "revision": "e59ad2f7975a83bb1d22693c089ca909"
  },
  {
    "url": "assets/js/app.91e5ac1f.js",
    "revision": "1f21a78e7a25a618abd829c1068de871"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b801e03a0852c459377bf20a64af2a43"
  },
  {
    "url": "design/index.html",
    "revision": "775e3f71377b6b9029915ed4bf782cd7"
  },
  {
    "url": "index.html",
    "revision": "9207e231aad973d3946c2948a08a51d6"
  },
  {
    "url": "intro/index.html",
    "revision": "a04d39a4fa6c542d7af5d9a7dd366254"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "271fefe24bbceb172fc0f1c88e031713"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "11e5928c6f7b60a020843fc6fdbca066"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "da423c89d627b0ef0da20dcbffa7c193"
  },
  {
    "url": "software/index.html",
    "revision": "064216afb2183128264f9252e0a34848"
  },
  {
    "url": "test/index.html",
    "revision": "6fd1eb3585a264597df9b4f26022052d"
  },
  {
    "url": "use cases/index.html",
    "revision": "71b34bc01eae7795c328f7804225e06d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
