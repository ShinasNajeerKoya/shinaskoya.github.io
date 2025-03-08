'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f2cb77f634b010d2981ea8138ff6951",
"version.json": "5d714a138973892b5338237135fe7489",
"favicon.ico": "9f33e39a4b3ccfc0a278294932f8feee",
"index.html": "8c11a40a4b58c7dc0433d4514bc15338",
"/": "8c11a40a4b58c7dc0433d4514bc15338",
"main.dart.js": "31bef2f3e32824e0f24f870f862b2c38",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "b2975db7da647c0cdc00ca833992c4f7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "6b55e1244456901df65c4a2ad93378f7",
"manifest.json": "de7b6e6cae2b3d1b258b855b6e7410a6",
".git/config": "95b1f47cdd1be29b7da43413cb1ee324",
".git/objects/61/38b69b4c9b73dfd013a2e0673fff2ad0393810": "b4ad5f44e68c1ab714ac2904ef706b26",
".git/objects/59/056c045724fdda3a894f4d4fdb3b97bcf1ae13": "021c90dd34e36a9b17e268eda095999d",
".git/objects/50/40833be9a2e02082e702ce4fd3c4c7d025e4cd": "234c7eefb589f23d1193bbc7f73030a2",
".git/objects/57/4484398c735baa000ba55209549aa7f1b03803": "ae4e327e0f3e24cde486aff5186d9144",
".git/objects/3b/9c101fb7af3ad3019474a6e14d03cdb4246f19": "1c42745561f57a36ee155a85a7a470ae",
".git/objects/6f/6c7595ce420613ae55f151416d1199549f1cb6": "7043cd201059c141d096db07c987c134",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/7bdfbf0d8b998c7cacf93647ae4892948c5666": "448c959eecffcce4eb1edba2e56e7830",
".git/objects/35/1940c4843dddc82fbd642f462cf047beae343a": "cbf1fb2dd2f5ef4a01f9b81755fb2404",
".git/objects/69/b5d43c339fe626a6010cfa244370a7228b3674": "48bee2a8eed7d835cf899ad15bbe0f28",
".git/objects/56/c549c718b3d4205d9c8bb451b6fd1c5b56c196": "cb49ce1e1abe3d7568af9139aaa2b0ff",
".git/objects/67/448c45fd8a93dfcd45f1ee651e498517abb54b": "16df874e4f05d9d2bbb95821efeb973c",
".git/objects/67/e2c7c9c3e0b945d91eee15869958c4ddecfe23": "dbee9b175743dddae2c518a4734e1476",
".git/objects/67/107e5f7ef61f41e3818a809b6be17f12dd6adf": "3410a6e34050b42cee312a4875ce3999",
".git/objects/34/c8a86a87042c775b7cfbd79ac0791a907bee21": "95c026b0638a977f4a1d46ecd812edc6",
".git/objects/33/78f3afbd05851ba45260ef3ab694869ad80a48": "d8127ca6f1f2b761590ca2a7d9495541",
".git/objects/33/c1b0843b101f0a4f2359a9eb996a6f4d38df69": "bd8050acebcd7e89ffb9648f082770b8",
".git/objects/d9/97b99669be4b8e4c0c6af06b9ce76acd16769f": "270be46b7e526a530f9ce063e8908a62",
".git/objects/ac/1c791247c2468fca8ba791a1d1ef087a29038a": "387c5b00eedbe47470ef86c7ee61230b",
".git/objects/ac/4137ca78635d68e10b125b6243c2e3afe9a1c0": "8ccdfeaba95b6f259c94dd3711337767",
".git/objects/bb/c90360fd7f58c0f764066a7db146ef86ec9121": "4cbf0ce2a17806c069e27e492995f43a",
".git/objects/d7/f3651bc5fb1c445833db8286ccdece93a261aa": "83bf1c947e1ce20f0a5e7be02c016515",
".git/objects/be/5bb3d56a4af89af98519eb5e2d6268a1af67e1": "b7e86a3a656dcf27534fc739e30c13dc",
".git/objects/b3/c41b1c8d257fa1c7437b36ad3b6a54337208c3": "a4387182e32d68f657b811b026c9bf0f",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/bcc5dde0ab81e8862a195255692a4189d09fc4": "0f05a8315ac9433fac1336966115b7f4",
".git/objects/bd/51b34fac9253260c94764f4249596d445f1ad7": "a661a424f9cb70414299c7b8fbba5c78",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/77bc90af982c9bee461b47ef53c2f1e28a7a8f": "2e0dd2bda6aab5ed3c37c49ed1d073b0",
".git/objects/e2/e4fd96fac3543b1c21ce68b707e59f9546ca34": "f80ae5a27adb48683a57bf9e1a483e2a",
".git/objects/f3/31a1931b41b38930d9a8c923ac3a925d105949": "fab62eef4382ab5f206e6a92acb805fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8ad50cf8b5bfae4328b4ec27cb97eba3d995eb": "4cb10a038b103b7087152f0d1ff235a7",
".git/objects/ee/59c6d46242635b18e4f5679eb2ad5281d8de34": "a98cc4bef5ccc561030f4daf88dd8a17",
".git/objects/c9/2b206674398b33e7286267e6511c1ad2132403": "29b0c4b674c903bd5d35da43fc305108",
".git/objects/fc/276b3c948cc077370e81605d08b26af45d24ea": "1e97066d3863d5c2b06001650abd60db",
".git/objects/fd/81c644426488bce364f7125615142f6543999f": "905ac70a185e5db92d9121a0809d920e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/437b468d23e005af6da87c4e48e0aa2f97107d": "6c99b433b733dd9b8a794ad26b1776ab",
".git/objects/cf/3c814564efeb58fead41686e2115fd06062bc1": "69dbe5c522a9d601535ac74b19e76753",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ed/548a93a04c19dc71b22e0bafbf6716f2453c6b": "605c150bab4606ee674b4400ebeb5772",
".git/objects/4e/6335a73657bcb6a1d5e2e202970ea321daa65f": "90efbe4e90f0ade7b2cc08d7dd30c430",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/a813beda7416a578721abf5148710e1579c883": "3c8e7d32c4c9d2cb19467a280798b2c4",
".git/objects/4b/c8e5e0a313f54c6c6a0fdc953d441e9f20691c": "daf113430c406b219cead75ab01fae69",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/e8f5e5c817e7964e9bf169b43fdb4e6cd4a0c8": "5529629b5ce28f79c2aa49756490a865",
".git/objects/17/3de1b76776b667ef67f0eb2f184375edb12171": "a08e26ab8c85c7ab0d73ae8ee129426c",
".git/objects/7b/f2187ac970fba8a4b052a92204e7b0e6dcd464": "65cc24432fad019c5e9dc9268a9ea390",
".git/objects/10/51b9905726537fd1bc6730bf123e0e77b4ce46": "10b5e804157d827e7bb15830045fd66d",
".git/objects/19/9913587db54676009f783eb79f2976aedfdcf1": "267a4a061c7784c4ab5fbbb1519f42b7",
".git/objects/4c/29677f24c2c6714cb0a052838f6903dfc807f6": "02975449ab8bfe90d53a21960966dc40",
".git/objects/21/a8ba898d18e0d96aec454f66776175430e255f": "90cfea9e5fd04f6f8379016082f52534",
".git/objects/9f/d6c84e60bdf997c2e483fd72715afaaaf4a64c": "31f9cfff9e46f04f3626ccec08e088a4",
".git/objects/9f/258f21532b686b8312ee1d5bf7d00c426ed839": "36148c861ef92f5d7cff2da713bdebeb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/42556c127a652cffdcace1a4900378a1cb455c": "1a452f7608f5a754e02210eded970fb2",
".git/objects/09/074c6d8ee5b0f3770ddfb8cc19f337a5f30035": "884423460471537c9aa6be2bba5fcc31",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/09cf55c5fc73e89b3e8fee1394e1bab60a5a29": "0d781baca4c786dedae392b627a6743d",
".git/objects/62/f0c0b759c82454f500b2b38509b20b73318323": "7d03b69f5c7a47551ccf2c0594d0d75f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/4823b219be0a71e031912bc9d2941e2591bd50": "681319a8164c33a69260ab88467b14fb",
".git/objects/08/8ac591ac237f7540cf1ddaa3c369baa67eaa9c": "2e064c67128965bb19561cd0bd3c764b",
".git/objects/6c/e31ea4c15194636ffaf59445a111ea5d0730d0": "81b92e0476afd155301241836d1707fd",
".git/objects/6c/89623d5601b4776cb0117aadd20ff9eaa86195": "97131d320330b53d53ca0b3783e8051d",
".git/objects/55/d8fd1610f6ce74216fca2af4d97e238ce406f0": "30bca324b1f78eb07ba115659b02f463",
".git/objects/63/29c3386768ca48d3dc4f1efd9d6211692c59e6": "545f7271f61ed2431dea20f5ddd025de",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/44f61967e44284b6a54929a9b64d8917895d57": "ccef310f2f99e1993cda7e8dbd3e82e8",
".git/objects/a9/94442b3c42b7be19cfc52c6a47e71509205fd1": "e675dfed0431a6e88191e4ce9f72855a",
".git/objects/db/d00b71dc22709d6ef6608042d73caa8399a011": "c245dad4206ab74242d37ef05b4fff47",
".git/objects/db/c282993daec07612f4ac7d522a91a9d0d42886": "545c5c6eb2a60743875cbf4130924807",
".git/objects/a8/486aa685d10b60647e5d3696bf3689a9775fe5": "470a4f604088429c78c365207c1d1a27",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/ef/849d0e4aefb012282d9dc369c4481f84c362b8": "216cfbb9923cac8bf737f0e8e63ff03d",
".git/objects/ea/4ccc1ed50487f54dc9097466c0939da5b446e5": "bc13f4b55117778f924572040ff54783",
".git/objects/cd/256cf8c8663e27489a2f53181b79a9c856ec56": "530cef6584e99450e834a2e1c292f9a3",
".git/objects/f0/ab999fa7c8fd47c2643c7d40444fc5b4db0895": "e59f10ebf9a9f00651a472659d3e778b",
".git/objects/c5/b178b65f3c1fd9f1e26cce6874d918c541c0bc": "3ac19d4563888ec4efd3651865c28e15",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/e7/1dc207bbf5f1fa4b722792aeb5343a38895bf5": "310f91d942a5678d8064d179f66f1cd7",
".git/objects/e7/d139f77d2ab2df00b45ff84999d9a49cfd5f10": "e10ca77f7d2943070e89ecd0c4162e01",
".git/objects/cb/3aa74b0b181ea50cecf9aacff0b9d2c1155a2c": "e45e4883e933e7b96adef06f45f59c85",
".git/objects/ce/1eea1d3956a5faf1639322be2bd4c506b0cc66": "d448db60f6e5b008576bb2da908a19e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/6213b79c74ce1b92e7ee5320bf73ce06c69545": "f1e7ee9ff656ea474165152e4f081482",
".git/objects/41/98a7d5a1026db96aa23faa6fbaf0f1ee66f013": "b06f79bd9a64482da72535929acbc03c",
".git/objects/83/3ecb66b50d3b5f906673db9174c413853f90cb": "2e2ceb52bdb98dbf2669756a8980f742",
".git/objects/83/4ca26ae4f74424e70147b3af3c36bd679a7936": "1ddebd263f4ac895c8075033dde9c53f",
".git/objects/1b/f7ee54beef85879ed8f200e2926f4a31abd090": "e114db1de11305831ed503600d4b502d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/e5cb6491894ba6be3e432b9128bca4ace27170": "92a70bf263d49241b50bbeb06a66821c",
".git/objects/24/0ff9758eaf07165f66e8266a0b4261e61b27f8": "f2d1ac0ad1de7ba76d2a774eef00d95c",
".git/objects/8d/d3226e3fd7be0b35882db6860dda6c38c025f4": "0831ae3a41d6d57dac7dcde1f019022e",
".git/objects/82/64291e483663d0ac0e852103c38647210114fd": "3ec853765437e3ffc3e093a6b463caf0",
".git/objects/82/37dd3bee9323baf641a34de4c0977361300197": "6bf84114bfdabea8ac7f14e4abf88ab3",
".git/objects/40/9e7d6628fc0a44551fe0c628a2a6301d6e9066": "e4ac7ded65e524f45da102734f782048",
".git/objects/2e/92a7843cf91e24fc12ad98120495fa2183de6f": "25c0669e3d18d6d8e6cff3849a054a15",
".git/objects/8b/77ef8bef618a594861b91ac2fc0eeb70c994fe": "4bdb5a01ea9cddd58dea42dfba43c213",
".git/objects/8b/1f82057e38764132339e453cf74a40bea44f26": "2f2fb3b3d8bed10f4ba9afd5a1a84533",
".git/objects/8e/afb91f57b57705663f71fd0d82093475b757d4": "322143e6bcabd2686f1b8d9be5edd28f",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfe40de45c2e64eb2907c99b67802180",
".git/logs/refs/heads/main": "cfe40de45c2e64eb2907c99b67802180",
".git/logs/refs/remotes/origin/main": "1256cbcd1babf19fbf8fe139b43c1ef5",
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
".git/refs/heads/main": "7777bc54823d6402808c593a56ba6d2c",
".git/refs/remotes/origin/main": "7777bc54823d6402808c593a56ba6d2c",
".git/index": "abb46b69db380b4c2dafd3bd77f4993f",
".git/COMMIT_EDITMSG": "eb1a3227cdc3fedbaec2fe38bf6c044a",
"assets/AssetManifest.json": "6d5c4a9d469b46f25225d361e7a8f16d",
"assets/NOTICES": "a5932bfbc9d7a8bb143a62d0e5dc98fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e507a5582d69370c56ed50b2620e6609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e005fe8a7d3e7a1dea00c48ef8983e01",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "082b930a0eabd92b799e3d77fddeb2b0",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/mac_os_bg.jpg": "07d6fdca3f89e008748edd2a794be97c",
"assets/assets/images/windows_11_bg.jpeg": "43a2e2047e5572bcd9be3d9ed60c4e07",
"assets/assets/images/windows_11_bg.jpg": "4299dcccfb0fe6130abec9742ca22f51",
"assets/assets/resume/Flutter_Developer_Shinas_Koya.pdf": "eeb7b3917a219d4c5c0cddac472a401e",
"assets/assets/project_images/project_icons/flamingo_app_logo.svg": "4d851d5a6bf722195334af004918e26e",
"assets/assets/project_images/project_icons/savory_safari_app_logo.svg": "8222fd533809444e501057bbf2293856",
"assets/assets/project_images/project_icons/pixa_vista_app_logo.svg": "f0df0b8d774cf682819cf5462640c2ba",
"assets/assets/project_images/project_icons/pepper_train_app_logo.svg": "1afdda4cca8fd842e9e84e54a6dda3af",
"assets/assets/project_images/thumbnails/savory_safari_mockup.jpg": "8f545873955bda6b5dd63ede2a465cbd",
"assets/assets/project_images/thumbnails/savory_safari_thumbnail.jpg": "277947ecde906c463e0ecb50d68a76c3",
"assets/assets/project_images/thumbnails/pepper_train_thumbnail.jpg": "eaf4c380054c9f80330149801a4e635c",
"assets/assets/project_images/thumbnails/pixa_vista_mockup.jpg": "22b2c5b93c2be824b3b250254ffc66db",
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
"assets/assets/projects_data/project_metadata.json": "936290e4a6f0b1bc16039ce362522e14",
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
