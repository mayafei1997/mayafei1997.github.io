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
    "url": "404.html",
    "revision": "e41f3d789fc93c98e6dcc9ac840e3f69"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7cc586ae.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.51e1d46f.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.64843a3d.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.2ddbc40a.js",
    "revision": "34daa3004d2519dbf33b84631dcb4446"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.0675c2c4.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.c8f31470.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.e40715a5.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.108a7e30.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.dd47fe1a.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.298f61e3.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.2bffdee6.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.dded6dc4.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.970031bf.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.02b9b8f3.js",
    "revision": "97976591533d9e79da7beaafda7e2c80"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "10d3f71f0baab8be1793e1d5a90640ef"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b7c7d1bd8881ce462c4fea47096c4725"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "819ea5ed585d8dba0f3932a5a8c7e231"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "332d41021738e6310b852f6739b63007"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dc7de4097f0a94beb7a1b78e128031ea"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b29855733ca3898fc7c2d9abe8aeb5a9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a597afc1154b9e58a59f64154409667f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c9a9d025cf250e799698dbb6f83d6a5a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4776b2fbf7067d1ed8c676b69cbcd264"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "36aacc0d4e1129d81f43779168153721"
  },
  {
    "url": "tags/js/index.html",
    "revision": "60c5440da0deab63898f6fa6d8bfc682"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a335bb06138b2731c46a5fb70c6bbfba"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "14daaf12cf23691f2f60d6a459492207"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "747c4f657231f577dd957e08a02eff76"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "abc43515e9b616993ac6540c506cd769"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cfac6f05c439c35a20dc1fb3ae618066"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1d08b7a1817ec66742e58a4cda11b65f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c05f35ece3a909b74185c8a653498fad"
  },
  {
    "url": "timeline/index.html",
    "revision": "372e67040992a4b400dda2e90cc07558"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a4e602c8af67c5e4f1742ed81036b4e6"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ad3f345b8ed8b3f4b7b37c8d31ced574"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "bca2ab3dcffacd1c51bba86381fddc97"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cd2c1468778899ffd56718802e8e8596"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dea6ef2190ba8907c827ccefeb10c835"
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
