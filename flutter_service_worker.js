'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a06b9a185568b7050c092abb5190099a",
"version.json": "5d714a138973892b5338237135fe7489",
"index.html": "1a9bf175c1a8b2f6c955c0afa77175df",
"/": "1a9bf175c1a8b2f6c955c0afa77175df",
"main.dart.js": "b00692c99d1fcb5a0ae1f083aad0324b",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd49c0c1bdf698b7aeed8a9fbcb80a25",
".git/ORIG_HEAD": "e84ba6b2059dea660bcb18f81fdf9321",
".git/config": "9153820954f9c7ec3e039ba92067f2b6",
".git/objects/59/201ffd42e2fd9c415e15d074cc219c718aa9f0": "3b91a2c2c9d485a61e367b26e2e181d4",
".git/objects/68/708b18fc35daad6682da7d8dd2d29ac7decaaf": "8d15d0f1ad74574cc6b0d0303b94b410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/dc26c144d66fe64ba5193ecef225e13b5e9d2a": "5e50fdb22521970614312732bcc8754b",
".git/objects/69/764d68aa8b819f651df2fb7bf067833c7b7023": "6f3441fe4a963aa636fd405caadd0a93",
".git/objects/60/23d0b8e31dfab302b86af7f09126db728ab482": "9fc461d76b610e275289d828672ddea7",
".git/objects/5a/18c3429311c29f82f5ca119c3898a42f5df9b1": "05c898a478c5c6c067daca75497f6f38",
".git/objects/a3/7369a23992204040829bf4d5637703a8a5d57c": "b8c2e8cfaa2c3c0c6298604b621bf36d",
".git/objects/d9/ea7fadda51c3b059cd11e0b7a8e7258aa32d88": "bd2f994a59ba78d0d4a01d89088eea37",
".git/objects/b3/c41b1c8d257fa1c7437b36ad3b6a54337208c3": "a4387182e32d68f657b811b026c9bf0f",
".git/objects/a2/4a141f6423c64f89a0fd1182eb9293d3447bea": "dd03351d0b989d4f5aec889eab87b069",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/6cc50514988d9a20a92f367bd1caabaf901c0d": "92d8d64db7c39476148ed831c6ec6b96",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4a0b6e3a4ee72dec029e80968ae267840d90c0": "dae6b4d03fa421f3f1c30720c67a33b2",
".git/objects/bc/77bc90af982c9bee461b47ef53c2f1e28a7a8f": "2e0dd2bda6aab5ed3c37c49ed1d073b0",
".git/objects/ae/efb2c852ff603052b539df92c0e08e5628ad23": "d0bad14e5224820b26a6f3dc1b010ac7",
".git/objects/f4/ca04a1149ff750021d7a667ce759d047af8ce7": "b20769c519ffa6fad6be20fac83eaa76",
".git/objects/f3/0bce25c3dd540670083733bf5ac867cb4e084f": "483f0066d652df7df9d4214fb406ceab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/31e933f4806d531f13d227cf157f50d577d6f9": "c065e9e1339436891d7b3bd98289e837",
".git/objects/fd/3dc2eca23f7275d2c881529f67afab42e3f8e3": "e3243ce9e6e4d11db9823c6be19346d3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cf/5b1f9206bb5e823c6b6a15ac290497e582fb35": "72cb053657e8af233c53cf87ecb98507",
".git/objects/cf/3c814564efeb58fead41686e2115fd06062bc1": "69dbe5c522a9d601535ac74b19e76753",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c1/b7ede115cea4770231b8caf5243d148b3b5add": "74a8f21c12d291b0f918cd034c4a719b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/5620d9b8276927c818a831b2c815b185fdc924": "886d1cf3bebf2165296d20848a2238cd",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/e8f5e5c817e7964e9bf169b43fdb4e6cd4a0c8": "5529629b5ce28f79c2aa49756490a865",
".git/objects/80/113314f47ee7090d2b8d5bd5152985fd21db93": "f05321f66b76d8136e39f2cf92cc1cec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/7786c34a4bfcad0362a86a64acff2f306eb91e": "ecc89112a63a2af4a7d9ec651ac58412",
".git/objects/75/861eb7e4a534325717c11467c9ab6ee044bf43": "6dee00fffcfff097489288cd6ad114e0",
".git/objects/75/9a88534023ff38ed99d386b763929254362876": "72de7d7df7545e84e786f39c8f46f399",
".git/objects/2a/c3bf7baff9ec80a94f484e057e1a1ccd7f1205": "b6ae34b455de9f2f401a3f17c550bae3",
".git/objects/2f/ba2f2df1f2e799b7d86475399dca679c0803ea": "917e46eb52f43b1ac295e5e3c19014a2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/f21989c5072a13c0757af6623756f52d3ca023": "b473d50e3bae41c22b14e3da53064d01",
".git/objects/5c/c004b7e4cb86a5d215f65d92a869e2797dfff2": "deac6e2ed17a0266979dcd200b79c247",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/09cf55c5fc73e89b3e8fee1394e1bab60a5a29": "0d781baca4c786dedae392b627a6743d",
".git/objects/96/47a63e2c70bce59c54f7db9f52d1679d400379": "1951d13ccb793a9b02650609d1cbec7a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/4c761bbdfb1ba759b5c10234c84b09e4d09d9e": "171520f73016e0bb22e3748cb3962f46",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5b/31f6fe5965cb243001227d312de811f1fbca7a": "94a5fa14acc0f18fa9a552b79b9ace42",
".git/objects/6c/c5883d8a30652e9e35c7755ebd7c1d871576a3": "e0d637a3b03882e03ea8d833c0d93bd4",
".git/objects/6c/e31ea4c15194636ffaf59445a111ea5d0730d0": "81b92e0476afd155301241836d1707fd",
".git/objects/39/f862adfde69826295889cc35bc8deefb5272ad": "308041c455dabe57e72100b884d27bff",
".git/objects/64/a9c162b6de9b55ed6105d17bc36ac7bf426f3a": "9a868b4b940e38301fc5b539aaac6319",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/e73f53f5cbf1afd72218d0d59c553f85b0fb68": "0bfcb0cae8c16bc25ed544af1ed42990",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3d8704c846e7f2656d5fe6c08a403d70e28f6a": "b1a59fcad94e4afd9aa3a73257748f91",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8ff354b69deaa2b55f476bc418410a8afefea0": "c3c9c66939e627bcf8b61039a499461f",
".git/objects/f9/f70402387d5ecc69e7f9095fa33277994fc024": "d7e99e458c08e689f7486747d9a1cb5c",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/f8/cc2f7e56f918521214ff4d0ecd380b95950d08": "9d5373649b688574e6273a2d5299b301",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/2da5c029810a2d6731ac12f0bb6472819a953a": "d94e6f572d828e03284baa96ec742b48",
".git/objects/1b/bb9c9d880b0366f9c69240bd40e19d2ef7193a": "9492972cff4391fd41f1497bfbdf84ad",
".git/objects/77/f22811c43240b560f7fb9848a57dad41866d6b": "5a518783a48e8ca2803cf518a4744da1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/940725930e83f9a18b6ab1c3f51f62dabbff15": "1dda4d08a7f836f779ccb2903503c57d",
".git/objects/4f/b84dfb1f8fd5e05f7013278167ef9053e2c8d1": "89dd87d7e8c7138fbec05ec1000ef5fa",
".git/objects/15/d30f941f6727c2af864f7d998435589e5e8114": "97d36c3f1d2ea65b3813ff2b029a01f9",
".git/objects/40/8cbbc3564bb73640e1b9dd87e35714e183b959": "15a9562b8be617e01fb937d9a97c88e3",
".git/objects/25/9c193e69c03e47b489ec4acf91de32a3f52817": "2dba84b55318996fc59ebd153da831e4",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0fd4290c5a88b4c984915c0f982a6cde",
".git/logs/refs/heads/main": "2078c3ee92312d71e1d62eda9f18c9d2",
".git/logs/refs/remotes/origin/main": "242fb2b1ac45fb5d7a9a08d790a6903f",
".git/logs/refs/stash": "5036c2bcd5b4e09e7db27a10238a95ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "77f9a64b92bab24f001129bad8388fc1",
".git/refs/remotes/origin/main": "77f9a64b92bab24f001129bad8388fc1",
".git/refs/stash": "3f21041fb916db7274926cab99ba2665",
".git/index": "cc3622e33b8412e0eccbb7392eb38e70",
".git/COMMIT_EDITMSG": "14f8fa17512ff736c5af97da67beecde",
"assets/AssetManifest.json": "fc51da42bd30b9724621a1cbba894a02",
"assets/NOTICES": "8521f1c819be34653f087ff06f4b1f00",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "43c746c8b36e671124c5e30313770f06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "05c9fe7c64a11b6940ef8ff128f1d535",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "aa347009d199a1f1abc01d0d5242ab59",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/mac_os_bg.jpg": "07d6fdca3f89e008748edd2a794be97c",
"assets/assets/images/windows_11_bg.jpeg": "43a2e2047e5572bcd9be3d9ed60c4e07",
"assets/assets/icons/mac_website_icon.svg": "bbee3718921efb9b3c2354cea6548081",
"assets/assets/icons/mac_chrome_icon.svg": "a0e4c2229e18a5c4048b50322b2c529c",
"assets/assets/icons/mac_github_icon.svg": "0a128df9bfa8c32c0bd7378759ea64ce",
"assets/assets/icons/mac_flappy_bird_icon.svg": "edf5fdf14e88b9eac17ced57380bee49",
"assets/assets/icons/apple_logo.svg": "a31b3d1d6f580113d06d2d320f57cf0c",
"assets/assets/icons/splash_apple_logo.svg": "16c52214451c5ad7941e69c44a9b1761",
"assets/assets/icons/mac_settings_icon.svg": "ec9726b69e27733e93908440b7a3695c",
"assets/assets/icons/mac_resume_icon.svg": "04688be0c005fb62a4030b8af95fe74d",
"assets/assets/icons/mac_flutter_icon.svg": "b3bdeb2ec5269df952ad0910f96c0901",
"assets/assets/icons/mac_dart_icon.svg": "5b3fea8a9efa194593200f0eb7f1553b",
"assets/assets/icons/mac_contact_icon.svg": "3cb6a6a2a60eec290ef2efc06f732a96",
"assets/assets/icons/blank_icon.svg": "1b6a59ad64d79f083aa4b690fed761c8",
"assets/assets/icons/mac_arrow_icon.svg": "cccf8cac8ca9a4f4e83503ba1192d56d",
"assets/assets/icons/mac_weather_icon.svg": "42290be19174a8a0b67f2cae8279774a",
"assets/assets/icons/mac_windows_icon.svg": "320a320120c20cd424aba34e9ec1edf9",
"assets/assets/icons/mac_full_screen_icon.svg": "82d0f16ccab1e0a1de5627a616e9e7f6",
"assets/assets/icons/mac_figma_icon.svg": "58d440d14dd4a5bcf8b7594c8461870b",
"assets/assets/icons/cancel_icon.svg": "7bff0d1938345539d4c517b2daee2acd",
"assets/assets/icons/mac_mail_icon.svg": "c6de82f2d043368df0cd2dee1c4a7b61",
"assets/assets/icons/mac_linked_in_icon.svg": "3da12707e0d3df652b2f5893d7c08b93",
"assets/assets/icons/mac_phone_icon.svg": "3ad865247178b602b42e7de0046523db",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
