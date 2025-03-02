'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8104c3b44c2e69561014bb40787cad1e",
"version.json": "5d714a138973892b5338237135fe7489",
"favicon.ico": "9f33e39a4b3ccfc0a278294932f8feee",
"index.html": "39ac20a18d7d1966b82149aaa3a6b6df",
"/": "39ac20a18d7d1966b82149aaa3a6b6df",
"main.dart.js": "64255933a954a35692cd8fb87f5f7d0b",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "b2975db7da647c0cdc00ca833992c4f7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "6b55e1244456901df65c4a2ad93378f7",
"manifest.json": "de7b6e6cae2b3d1b258b855b6e7410a6",
".git/ORIG_HEAD": "e84ba6b2059dea660bcb18f81fdf9321",
".git/config": "9153820954f9c7ec3e039ba92067f2b6",
".git/objects/61/af857788136f46cc64ebbee429d8d3ed1f7cb3": "c12638a250a731a23373596de088c75a",
".git/objects/61/38b69b4c9b73dfd013a2e0673fff2ad0393810": "b4ad5f44e68c1ab714ac2904ef706b26",
".git/objects/59/056c045724fdda3a894f4d4fdb3b97bcf1ae13": "021c90dd34e36a9b17e268eda095999d",
".git/objects/59/201ffd42e2fd9c415e15d074cc219c718aa9f0": "3b91a2c2c9d485a61e367b26e2e181d4",
".git/objects/50/40833be9a2e02082e702ce4fd3c4c7d025e4cd": "234c7eefb589f23d1193bbc7f73030a2",
".git/objects/68/708b18fc35daad6682da7d8dd2d29ac7decaaf": "8d15d0f1ad74574cc6b0d0303b94b410",
".git/objects/6f/6c7595ce420613ae55f151416d1199549f1cb6": "7043cd201059c141d096db07c987c134",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/dc26c144d66fe64ba5193ecef225e13b5e9d2a": "5e50fdb22521970614312732bcc8754b",
".git/objects/35/7bdfbf0d8b998c7cacf93647ae4892948c5666": "448c959eecffcce4eb1edba2e56e7830",
".git/objects/35/1940c4843dddc82fbd642f462cf047beae343a": "cbf1fb2dd2f5ef4a01f9b81755fb2404",
".git/objects/69/764d68aa8b819f651df2fb7bf067833c7b7023": "6f3441fe4a963aa636fd405caadd0a93",
".git/objects/69/b5d43c339fe626a6010cfa244370a7228b3674": "48bee2a8eed7d835cf899ad15bbe0f28",
".git/objects/56/c549c718b3d4205d9c8bb451b6fd1c5b56c196": "cb49ce1e1abe3d7568af9139aaa2b0ff",
".git/objects/3d/89600de8fafc0788e65809acc4a1cb88126b1d": "4f807b3aa616b3f1935501f930a94670",
".git/objects/67/e2c7c9c3e0b945d91eee15869958c4ddecfe23": "dbee9b175743dddae2c518a4734e1476",
".git/objects/60/23d0b8e31dfab302b86af7f09126db728ab482": "9fc461d76b610e275289d828672ddea7",
".git/objects/5a/18c3429311c29f82f5ca119c3898a42f5df9b1": "05c898a478c5c6c067daca75497f6f38",
".git/objects/5f/269eeed7aaed1c69f36b4cb6908c834cbc1613": "64158ce75d7993ec419ca21068c0dfcc",
".git/objects/a3/7369a23992204040829bf4d5637703a8a5d57c": "b8c2e8cfaa2c3c0c6298604b621bf36d",
".git/objects/d9/ea7fadda51c3b059cd11e0b7a8e7258aa32d88": "bd2f994a59ba78d0d4a01d89088eea37",
".git/objects/b3/c41b1c8d257fa1c7437b36ad3b6a54337208c3": "a4387182e32d68f657b811b026c9bf0f",
".git/objects/a2/4a141f6423c64f89a0fd1182eb9293d3447bea": "dd03351d0b989d4f5aec889eab87b069",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/6cc50514988d9a20a92f367bd1caabaf901c0d": "92d8d64db7c39476148ed831c6ec6b96",
".git/objects/a5/0c4df86e53d3c8e348809d740828b04c6cc05c": "4dbfa5957bd06fbf54ae929d5e3e42ff",
".git/objects/bd/51b34fac9253260c94764f4249596d445f1ad7": "a661a424f9cb70414299c7b8fbba5c78",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4a0b6e3a4ee72dec029e80968ae267840d90c0": "dae6b4d03fa421f3f1c30720c67a33b2",
".git/objects/bc/77bc90af982c9bee461b47ef53c2f1e28a7a8f": "2e0dd2bda6aab5ed3c37c49ed1d073b0",
".git/objects/ae/efb2c852ff603052b539df92c0e08e5628ad23": "d0bad14e5224820b26a6f3dc1b010ac7",
".git/objects/f4/ca04a1149ff750021d7a667ce759d047af8ce7": "b20769c519ffa6fad6be20fac83eaa76",
".git/objects/f3/0bce25c3dd540670083733bf5ac867cb4e084f": "483f0066d652df7df9d4214fb406ceab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/59c6d46242635b18e4f5679eb2ad5281d8de34": "a98cc4bef5ccc561030f4daf88dd8a17",
".git/objects/fc/276b3c948cc077370e81605d08b26af45d24ea": "1e97066d3863d5c2b06001650abd60db",
".git/objects/fc/b594ff1801cb6a2caffb6d4d1fba3ca9c49ebe": "7999bf35a19c797358d48221271902b7",
".git/objects/fd/31e933f4806d531f13d227cf157f50d577d6f9": "c065e9e1339436891d7b3bd98289e837",
".git/objects/fd/3dc2eca23f7275d2c881529f67afab42e3f8e3": "e3243ce9e6e4d11db9823c6be19346d3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cf/fbcda923e6c0da8c452a20713a4fffaaf18618": "df1784328ab4993f77aa17b9ff5b31ef",
".git/objects/cf/5b1f9206bb5e823c6b6a15ac290497e582fb35": "72cb053657e8af233c53cf87ecb98507",
".git/objects/cf/3c814564efeb58fead41686e2115fd06062bc1": "69dbe5c522a9d601535ac74b19e76753",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ed/a53dcabc5071b4c95e00654138ab4da3e447fb": "a1062cfb8463e2697752a9a93946a9bc",
".git/objects/c1/b7ede115cea4770231b8caf5243d148b3b5add": "74a8f21c12d291b0f918cd034c4a719b",
".git/objects/4e/fabd06eee9445a2bc4b47287071be88a38a614": "dccb74031d427bc84acec0ed73c058c8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/5620d9b8276927c818a831b2c815b185fdc924": "886d1cf3bebf2165296d20848a2238cd",
".git/objects/11/f0a065022ba3d71fea9928b1ba95f198082778": "ba2c0dcc83f7a2d6544472f03df51738",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/e8f5e5c817e7964e9bf169b43fdb4e6cd4a0c8": "5529629b5ce28f79c2aa49756490a865",
".git/objects/45/803f406694a6bd9bd04160128138fb1f89db09": "2694345976db6612d5935f1fac045172",
".git/objects/1f/4d987a89b8282b612b7d728e3256056441176f": "1fbd364c063c2fc9a4b05200eb6ec100",
".git/objects/1f/5362be41fa2de1da25eaabed19b961d4489243": "0a3dd3dc0469820e22f621fe79a8b463",
".git/objects/80/113314f47ee7090d2b8d5bd5152985fd21db93": "f05321f66b76d8136e39f2cf92cc1cec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/7786c34a4bfcad0362a86a64acff2f306eb91e": "ecc89112a63a2af4a7d9ec651ac58412",
".git/objects/19/2aa042d00fc738d6ad5e8a4a3f2242c2886fcf": "34b6f1ad95bef44eda67c229314aa0a5",
".git/objects/19/c4ed2c2adc3215cd5cefa6928051e612d2933f": "976ea2ba19fbf1d9cb057e55d2b0f490",
".git/objects/4c/29677f24c2c6714cb0a052838f6903dfc807f6": "02975449ab8bfe90d53a21960966dc40",
".git/objects/21/d88aee07211ed3d180602360f6948046f35c8d": "1654fc6d4f73749361f3b29b9414f2cb",
".git/objects/75/861eb7e4a534325717c11467c9ab6ee044bf43": "6dee00fffcfff097489288cd6ad114e0",
".git/objects/75/9a88534023ff38ed99d386b763929254362876": "72de7d7df7545e84e786f39c8f46f399",
".git/objects/2a/c3bf7baff9ec80a94f484e057e1a1ccd7f1205": "b6ae34b455de9f2f401a3f17c550bae3",
".git/objects/2f/ba2f2df1f2e799b7d86475399dca679c0803ea": "917e46eb52f43b1ac295e5e3c19014a2",
".git/objects/43/289f9b00188f0d8cb9162b69a7948befd97879": "1687c82aa37f00ecbd9dcbe9e518aa0d",
".git/objects/43/b09743ee5e3ee127e178e5c43ca122e7624385": "ab2396c24a2f6acadf5d451cac29706c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/258f21532b686b8312ee1d5bf7d00c426ed839": "36148c861ef92f5d7cff2da713bdebeb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/08c08096f2cfe64576e5b6018738a22fad7de7": "f3e78a50839cac906441011925fa637f",
".git/objects/38/f21989c5072a13c0757af6623756f52d3ca023": "b473d50e3bae41c22b14e3da53064d01",
".git/objects/00/42556c127a652cffdcace1a4900378a1cb455c": "1a452f7608f5a754e02210eded970fb2",
".git/objects/5c/c004b7e4cb86a5d215f65d92a869e2797dfff2": "deac6e2ed17a0266979dcd200b79c247",
".git/objects/09/074c6d8ee5b0f3770ddfb8cc19f337a5f30035": "884423460471537c9aa6be2bba5fcc31",
".git/objects/09/38978d622b581139741fbcadea75351c81c314": "4c2668dedf54c67424e92c1cc7ec0688",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/09cf55c5fc73e89b3e8fee1394e1bab60a5a29": "0d781baca4c786dedae392b627a6743d",
".git/objects/96/47a63e2c70bce59c54f7db9f52d1679d400379": "1951d13ccb793a9b02650609d1cbec7a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/4c761bbdfb1ba759b5c10234c84b09e4d09d9e": "171520f73016e0bb22e3748cb3962f46",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/d0e44f33a1dd0b71c473eccc4374e0a4cc233d": "e242094ed0b6ced6a8e0be8c64c449c7",
".git/objects/5b/31f6fe5965cb243001227d312de811f1fbca7a": "94a5fa14acc0f18fa9a552b79b9ace42",
".git/objects/5b/8e76b5ee85bcaddd4ed17fb719adaedd035630": "55c4505d16a8e3ef8a011919a32d911a",
".git/objects/6c/c5883d8a30652e9e35c7755ebd7c1d871576a3": "e0d637a3b03882e03ea8d833c0d93bd4",
".git/objects/6c/e31ea4c15194636ffaf59445a111ea5d0730d0": "81b92e0476afd155301241836d1707fd",
".git/objects/39/f862adfde69826295889cc35bc8deefb5272ad": "308041c455dabe57e72100b884d27bff",
".git/objects/0f/dda4c49fe09ea03bea6c8065ef66d3f6b5e693": "631a4e138648b4a8c8a94a0995b64b04",
".git/objects/64/a9c162b6de9b55ed6105d17bc36ac7bf426f3a": "9a868b4b940e38301fc5b539aaac6319",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/a8cda79f1df4aa7f9c391182c484a5358715eb": "8992f78515dac515a9200343c6ccfc6a",
".git/objects/d3/29dd12b4ea8915a5e97e9502af5d811cd539d6": "784b5d6f821fd37e37e316ec59c92f2f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/44f61967e44284b6a54929a9b64d8917895d57": "ccef310f2f99e1993cda7e8dbd3e82e8",
".git/objects/b6/e73f53f5cbf1afd72218d0d59c553f85b0fb68": "0bfcb0cae8c16bc25ed544af1ed42990",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c282993daec07612f4ac7d522a91a9d0d42886": "545c5c6eb2a60743875cbf4130924807",
".git/objects/a8/3d8704c846e7f2656d5fe6c08a403d70e28f6a": "b1a59fcad94e4afd9aa3a73257748f91",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5a9ac0a6324578ae5d447ec980f05fb88dca1c": "d474aba86ed00ffb101427e9a52d68c6",
".git/objects/b9/8ff354b69deaa2b55f476bc418410a8afefea0": "c3c9c66939e627bcf8b61039a499461f",
".git/objects/ea/4ccc1ed50487f54dc9097466c0939da5b446e5": "bc13f4b55117778f924572040ff54783",
".git/objects/cc/1402bcda7f2e9e5239a471b73eceb6be50d1eb": "ae2def896fc9bc16443c1bce57fd004b",
".git/objects/f9/f70402387d5ecc69e7f9095fa33277994fc024": "d7e99e458c08e689f7486747d9a1cb5c",
".git/objects/f7/302253586aefdafbedd5b5b5e354d8c620cbbf": "8bca43bf8037a07c8e0aa2ab42548f9e",
".git/objects/f7/a0cd3d47b8ba0ad48408f867b07e301e11a247": "d3f11398b6a46c21af6ccbc58cd94926",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/f8/cc2f7e56f918521214ff4d0ecd380b95950d08": "9d5373649b688574e6273a2d5299b301",
".git/objects/f8/0e4f7d3f7c7391ff4a185fa8383fc9776ab4eb": "fc99d19c5705c5ccbb8281f47499ae16",
".git/objects/ce/1eea1d3956a5faf1639322be2bd4c506b0cc66": "d448db60f6e5b008576bb2da908a19e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/876c264d179301d750247171bdd4ee5b0c3800": "e6d21f3ae7b7cf9f80f5bc7553c4e543",
".git/objects/41/98a7d5a1026db96aa23faa6fbaf0f1ee66f013": "b06f79bd9a64482da72535929acbc03c",
".git/objects/1b/2da5c029810a2d6731ac12f0bb6472819a953a": "d94e6f572d828e03284baa96ec742b48",
".git/objects/1b/f7ee54beef85879ed8f200e2926f4a31abd090": "e114db1de11305831ed503600d4b502d",
".git/objects/1b/bb9c9d880b0366f9c69240bd40e19d2ef7193a": "9492972cff4391fd41f1497bfbdf84ad",
".git/objects/77/f22811c43240b560f7fb9848a57dad41866d6b": "5a518783a48e8ca2803cf518a4744da1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/940725930e83f9a18b6ab1c3f51f62dabbff15": "1dda4d08a7f836f779ccb2903503c57d",
".git/objects/4f/b84dfb1f8fd5e05f7013278167ef9053e2c8d1": "89dd87d7e8c7138fbec05ec1000ef5fa",
".git/objects/15/925978148212d063520e11cd78fcba4a088012": "861bd2f51155e29aa5e4538ba9e2d9e5",
".git/objects/15/d30f941f6727c2af864f7d998435589e5e8114": "97d36c3f1d2ea65b3813ff2b029a01f9",
".git/objects/1c/115d645e6d998e60f9799a1c8a99821653dc2b": "2f7ba5074da97cab4d23ae9a23645d3f",
".git/objects/40/9e7d6628fc0a44551fe0c628a2a6301d6e9066": "e4ac7ded65e524f45da102734f782048",
".git/objects/40/8cbbc3564bb73640e1b9dd87e35714e183b959": "15a9562b8be617e01fb937d9a97c88e3",
".git/objects/2e/92a7843cf91e24fc12ad98120495fa2183de6f": "25c0669e3d18d6d8e6cff3849a054a15",
".git/objects/7f/61c91df9e4132e92a77922ea81b76d61848a8d": "bb8b04229f9d8f9c1b87f50166040c02",
".git/objects/7a/5d65c9246134d3d2f1c243cb4c110e3f8fbd19": "7ff0e25e56e04aa68e96e2a202e99f03",
".git/objects/22/baf47ec81cfa5c64203144ccb1013678d1dd59": "66c997e353e6c60d14e22ecc7713cdb6",
".git/objects/25/9c193e69c03e47b489ec4acf91de32a3f52817": "2dba84b55318996fc59ebd153da831e4",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75e2b7439da72921bbb100fd927a2b4a",
".git/logs/refs/heads/main": "94baafd1affed29d1bffbdb2e443c3d9",
".git/logs/refs/remotes/origin/main": "a9600258fd11c8cc7077c450fc3dff79",
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
".git/refs/heads/main": "ff526981165ac3a80dff1be82bf98aa3",
".git/refs/remotes/origin/main": "ff526981165ac3a80dff1be82bf98aa3",
".git/refs/stash": "3f21041fb916db7274926cab99ba2665",
".git/index": "c23a67141f486c225e51ec61750bc82b",
".git/COMMIT_EDITMSG": "5f2559df6d2fa12449849d9dc4f1a678",
"assets/AssetManifest.json": "d891b0a9921be93f5c35b10bf7ff6f4a",
"assets/NOTICES": "3c98fc71cfa4a0e8a95b3acd70df969a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7cf616844454488c637cc369973c945c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "05c9fe7c64a11b6940ef8ff128f1d535",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "78a219bc665d635ae50968b2ff8444ce",
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
"assets/assets/icons/flutter_inside_icon.svg": "6010523e5a6a14cbf49917173724c531",
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
