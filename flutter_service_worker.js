'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "47185cd82bf4f10f5760ed858e36f5ca",
"version.json": "5d714a138973892b5338237135fe7489",
"favicon.ico": "9f33e39a4b3ccfc0a278294932f8feee",
"index.html": "8c11a40a4b58c7dc0433d4514bc15338",
"/": "8c11a40a4b58c7dc0433d4514bc15338",
"main.dart.js": "cbc9a8bb1b2261167d4d0a6010252a6b",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "b2975db7da647c0cdc00ca833992c4f7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "6b55e1244456901df65c4a2ad93378f7",
"manifest.json": "de7b6e6cae2b3d1b258b855b6e7410a6",
"assets/AssetManifest.json": "bc3fe8e5bbd189dac360fc6d7d3c2e06",
"assets/NOTICES": "a5932bfbc9d7a8bb143a62d0e5dc98fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3db01d6d7b30eee7fce882384ba57b57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e005fe8a7d3e7a1dea00c48ef8983e01",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "573a50e41add634f642ab715a3b0090a",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/mac_os_bg.jpg": "07d6fdca3f89e008748edd2a794be97c",
"assets/assets/images/windows_11_bg.jpeg": "43a2e2047e5572bcd9be3d9ed60c4e07",
"assets/assets/images/windows_11_bg.jpg": "4299dcccfb0fe6130abec9742ca22f51",
"assets/assets/resume/Flutter_Developer_Shinas_Koya.pdf": "eeb7b3917a219d4c5c0cddac472a401e",
"assets/assets/project_images/project_icons/flamingo_app_logo.svg": "4d851d5a6bf722195334af004918e26e",
"assets/assets/project_images/project_icons/savory_safari_app_logo.svg": "8222fd533809444e501057bbf2293856",
"assets/assets/project_images/project_icons/pixa_vista_app_logo.svg": "f0df0b8d774cf682819cf5462640c2ba",
"assets/assets/project_images/project_icons/pepper_train_app_logo.svg": "1afdda4cca8fd842e9e84e54a6dda3af",
"assets/assets/project_images/thumbnails/savory_safari_thumbnail.jpg": "277947ecde906c463e0ecb50d68a76c3",
"assets/assets/project_images/thumbnails/pepper_train_thumbnail.jpg": "eaf4c380054c9f80330149801a4e635c",
"assets/assets/languages/en.json": "0468ef1c40415eb5f8b03418846ea27c",
"assets/assets/languages/kn.json": "acd0f8b9d9fd9f33aeff647cb5734c59",
"assets/assets/icons/windows_linked_in_icon.svg": "afeec70fe60f86a7fe238b51f1b4a9a4",
"assets/assets/icons/windows_figma_icon.svg": "443b4293ea42e9c4ae0900f9d991cfc7",
"assets/assets/icons/windows_full_screen_icon.svg": "75d040ad2d96c0c9d4bcd4f0e0487caa",
"assets/assets/icons/windows_chrome_icon.svg": "c541d200bb7f44d2537f1956d46b8728",
"assets/assets/icons/windows_mail_icon.svg": "806721bc9bbd7129233e2ba3ce31dfeb",
"assets/assets/icons/mac_website_icon.svg": "bbee3718921efb9b3c2354cea6548081",
"assets/assets/icons/mac_chrome_icon.svg": "a0e4c2229e18a5c4048b50322b2c529c",
"assets/assets/icons/windows_phone_icon.svg": "78d0f7e56ef799f2048add952eabcbbe",
"assets/assets/icons/mac_github_icon.svg": "0a128df9bfa8c32c0bd7378759ea64ce",
"assets/assets/icons/mac_flappy_bird_icon.svg": "edf5fdf14e88b9eac17ced57380bee49",
"assets/assets/icons/apple_logo.svg": "a31b3d1d6f580113d06d2d320f57cf0c",
"assets/assets/icons/splash_apple_logo.svg": "16c52214451c5ad7941e69c44a9b1761",
"assets/assets/icons/windows_resume_icon.svg": "94b509f492a6b40c007eab3615af4d55",
"assets/assets/icons/mac_settings_icon.svg": "ec9726b69e27733e93908440b7a3695c",
"assets/assets/icons/windows_calculator_icon.svg": "758e8ac3f0752b1c08b6a4b4b6a4f33f",
"assets/assets/icons/windows_calendar_icon.svg": "53a59a906455060d7e371b7ebaa0449f",
"assets/assets/icons/mac_resume_icon.svg": "04688be0c005fb62a4030b8af95fe74d",
"assets/assets/icons/windows_mac_switch_icon.svg": "5edaf29a5a95f23c9f995bd97645d81b",
"assets/assets/icons/windows_flutter_icon.svg": "3148403827f44b9c816c02207cab6014",
"assets/assets/icons/mac_flutter_icon.svg": "b3bdeb2ec5269df952ad0910f96c0901",
"assets/assets/icons/mac_dart_icon.svg": "5b3fea8a9efa194593200f0eb7f1553b",
"assets/assets/icons/mac_contact_icon.svg": "3cb6a6a2a60eec290ef2efc06f732a96",
"assets/assets/icons/windows_microsoft_store_icon.svg": "5a2ba6a1f492c22a6aa519ab86663875",
"assets/assets/icons/windows_github_icon.svg": "1ecb2cd4245bb315ecfe4a5fe8556a88",
"assets/assets/icons/blank_icon.svg": "1b6a59ad64d79f083aa4b690fed761c8",
"assets/assets/icons/windows_arrow_mark.svg": "792d92d3704e8bab941f53fa0dae5606",
"assets/assets/icons/windows_flappy_bird_icon.svg": "f8a1fcfe42cd4148b12048a2964a60b5",
"assets/assets/icons/mac_arrow_icon.svg": "cccf8cac8ca9a4f4e83503ba1192d56d",
"assets/assets/icons/windows_settings_icon.svg": "4077f2305baa54fcdeeea16046080412",
"assets/assets/icons/windows_dart_icon.svg": "d61630896224d1893635340557c6f8d1",
"assets/assets/icons/windows_bottombar_lighthouse.svg": "d75225681db81904db4b0a99a7feabb3",
"assets/assets/icons/flutter_inside_icon.svg": "6010523e5a6a14cbf49917173724c531",
"assets/assets/icons/windows_menu_icon.svg": "e2d67f7b540bcc24bc2d503852f2376b",
"assets/assets/icons/mac_weather_icon.svg": "42290be19174a8a0b67f2cae8279774a",
"assets/assets/icons/windows_weather_icon.svg": "d678cebea8bdbaec58ab0990d7bae258",
"assets/assets/icons/mac_windows_icon.svg": "320a320120c20cd424aba34e9ec1edf9",
"assets/assets/icons/mac_full_screen_icon.svg": "82d0f16ccab1e0a1de5627a616e9e7f6",
"assets/assets/icons/mac_figma_icon.svg": "58d440d14dd4a5bcf8b7594c8461870b",
"assets/assets/icons/cancel_icon.svg": "7bff0d1938345539d4c517b2daee2acd",
"assets/assets/icons/windows_edge_icon.svg": "9995a5c829efe15ffb64bffc7e651d3b",
"assets/assets/icons/mac_mail_icon.svg": "c6de82f2d043368df0cd2dee1c4a7b61",
"assets/assets/icons/mac_linked_in_icon.svg": "3da12707e0d3df652b2f5893d7c08b93",
"assets/assets/icons/mac_phone_icon.svg": "3ad865247178b602b42e7de0046523db",
"assets/assets/projects_data/project_metadata.json": "c11efa4a72dabe46d5833fb93caf1e2f",
"assets/assets/projects_data/project_details.json": "f1ce91542b86d1bf2c69b2ca714720cd",
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
