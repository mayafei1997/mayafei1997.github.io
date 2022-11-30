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
    "revision": "58184378794b6c14683b280f7d602b5c"
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
    "url": "assets/js/12.0bf718b9.js",
    "revision": "304694a6570ded546a43d37e2111677e"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.68a1a284.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.737ee6f1.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.09a9298a.js",
    "revision": "072b64ec8e2ec3611e91b2ad003707a3"
  },
  {
    "url": "assets/js/18.403ab48a.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.4a9bc5c2.js",
    "revision": "5db34b4f95f9c30893791ac259a576c7"
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
    "revision": "ee779430794a4de03e0d612c363c052a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "36bf9f131609b1a3879e7ddd279a4e43"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1f27f0400af81f39ccb32e1d92a82e04"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "157f31d831976287e2ae797a80501dc0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "88e6c02f12987aec258544cbbecac089"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6f7a918fc8eca41da420063f427769c3"
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
    "revision": "ccfb0bb594e858bbbbae49b2607596d3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b02858daa925c5438ef0f5c96fdbf846"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a1c09d77042c1e06dde48e134e3e640a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "60750255628b2d2cb930d4720c9e5189"
  },
  {
    "url": "tags/js/index.html",
    "revision": "51e9f787959f5225f55d72b3197145e6"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "92dba6d92154516fca4fdffa85359477"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "25044b3d35dfb37cd9f38fd41a35cbd2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7d37d50f54630244109d607717c95a51"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b507bf2e14a56e72501c7a82bec9f599"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7f3540ae8a44cef750230950768ebf05"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1aa0c60c723d1daa761cd1ade0a22615"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "227f4039939097520292f9eb67201ca7"
  },
  {
    "url": "timeline/index.html",
    "revision": "fe966a77d67d78b1fda4311bc032626e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2050afc6e46d8b35843db7f599837968"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "84a49e91ab9960f5208b3ab83d0008b5"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "622bb11b881c30490f00653f2b3c7d73"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a72a1dcfff034da983f433fc226968d9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f36a0ba428ba6677b3ac8d128c4f5023"
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
