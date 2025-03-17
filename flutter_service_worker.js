'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "92e1682e27716b709113cef0bfeabb94",
"version.json": "5d714a138973892b5338237135fe7489",
"favicon.ico": "9f33e39a4b3ccfc0a278294932f8feee",
"index.html": "8c11a40a4b58c7dc0433d4514bc15338",
"/": "8c11a40a4b58c7dc0433d4514bc15338",
"main.dart.js": "4612aa709f6655963281e0343723b980",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "b2975db7da647c0cdc00ca833992c4f7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "6b55e1244456901df65c4a2ad93378f7",
"manifest.json": "de7b6e6cae2b3d1b258b855b6e7410a6",
".git/config": "dd510a05703305fc9c37938374343c96",
".git/objects/61/38b69b4c9b73dfd013a2e0673fff2ad0393810": "b4ad5f44e68c1ab714ac2904ef706b26",
".git/objects/59/056c045724fdda3a894f4d4fdb3b97bcf1ae13": "021c90dd34e36a9b17e268eda095999d",
".git/objects/59/ec6b35822594f808deb6278d533c176d340f1b": "7b6d4234c81366ff029a449c876e98d4",
".git/objects/92/8d436a1795dd21812014f8cc0c9132ff35560e": "41701036495dcec1ee291288e8c7201f",
".git/objects/50/40833be9a2e02082e702ce4fd3c4c7d025e4cd": "234c7eefb589f23d1193bbc7f73030a2",
".git/objects/57/4484398c735baa000ba55209549aa7f1b03803": "ae4e327e0f3e24cde486aff5186d9144",
".git/objects/3b/9c101fb7af3ad3019474a6e14d03cdb4246f19": "1c42745561f57a36ee155a85a7a470ae",
".git/objects/6f/6c7595ce420613ae55f151416d1199549f1cb6": "7043cd201059c141d096db07c987c134",
".git/objects/04/5d10aa0d945931f2d1c0724f382906055e5fa5": "b35ebbcd23206d029fbd0addaa3e5670",
".git/objects/6a/a6694bd4a9217762603ae6e392dc7cb5fcf883": "a3c8a001a605c85d31d2d098eab73722",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/7bdfbf0d8b998c7cacf93647ae4892948c5666": "448c959eecffcce4eb1edba2e56e7830",
".git/objects/35/1940c4843dddc82fbd642f462cf047beae343a": "cbf1fb2dd2f5ef4a01f9b81755fb2404",
".git/objects/69/b5d43c339fe626a6010cfa244370a7228b3674": "48bee2a8eed7d835cf899ad15bbe0f28",
".git/objects/3c/91979a19e077d29c724caf12959c120a4a423d": "78ddccc79c7530c8cb98539ec821580a",
".git/objects/3c/baa7c13abbbdb7837c96dd9bb717c12405acc7": "8656e8b9c685f63dab9c03c636608fcd",
".git/objects/3c/997a96c236629c73d23d81f71293d5f362f84c": "ce9ba18a977488b805ccc4de49017044",
".git/objects/56/8d7af74e23b187e69496a7b0b8a9a06123cf2f": "aabf74358c7d6c4df5205dbf5d016e7c",
".git/objects/56/c549c718b3d4205d9c8bb451b6fd1c5b56c196": "cb49ce1e1abe3d7568af9139aaa2b0ff",
".git/objects/56/f6e722020434cd3445bf6ceb4d74eac4a7173b": "4e3dcde3ad54971a73cb27dfa7728b52",
".git/objects/51/605ee6e0c505f651c5b93a411521be4c0a100c": "facd4365ae9d586f6a3c3040e54a3259",
".git/objects/67/448c45fd8a93dfcd45f1ee651e498517abb54b": "16df874e4f05d9d2bbb95821efeb973c",
".git/objects/67/e2c7c9c3e0b945d91eee15869958c4ddecfe23": "dbee9b175743dddae2c518a4734e1476",
".git/objects/67/4971feb419a50f943b2a6cdc706007e294751e": "fc21fb79271a03d3e64e3c41ece18cda",
".git/objects/67/107e5f7ef61f41e3818a809b6be17f12dd6adf": "3410a6e34050b42cee312a4875ce3999",
".git/objects/60/19365b532f155f2629f47abcf132516969d84c": "9a82819e1e4e68a108426eb49a4a33b7",
".git/objects/60/dc66b66c06cfc6241eb9e720b2b4bbb56a3b1f": "b85a154bf4836280e2ce648e46c7f243",
".git/objects/34/a0212d0e85cd926f4097041a07924bb5814515": "f3a2ea4282e68bbbd2cad699ecc493e5",
".git/objects/34/3d94bad6d9685efa328bec34e0ddd5dfb26fe7": "9f31e31cc063c2041a87d878a0c364d7",
".git/objects/34/c8a86a87042c775b7cfbd79ac0791a907bee21": "95c026b0638a977f4a1d46ecd812edc6",
".git/objects/34/e15b30c5d738d3ac314d98613cb873fdf2a0cb": "d116f08f5e1b61f6e897e2e831d8a9de",
".git/objects/5a/a1eb90cfa69518adfc6a35e00b2db08912a7e4": "3d4c97becd132ba210e51b9bf34122e6",
".git/objects/5f/5ea141789038393546d106c3d5106f9c7e839c": "826ca5dc15fe3979ef537dd2a0b1b9e0",
".git/objects/33/78f3afbd05851ba45260ef3ab694869ad80a48": "d8127ca6f1f2b761590ca2a7d9495541",
".git/objects/33/c1b0843b101f0a4f2359a9eb996a6f4d38df69": "bd8050acebcd7e89ffb9648f082770b8",
".git/objects/9d/0106e1ecb2434dc4ad7a9ab0ef9cced6b03480": "914611966ee722bffaf755541ee75b1e",
".git/objects/b5/6fee7e46edab3a87f7bcefaa376c34b2b0469e": "5cb1d77743fc6a1528bc9efd2d99e241",
".git/objects/d9/cb2779bd9d14baa1d8b4cd96e42c23643038e1": "ec57915adbc55805d62534c9b302acce",
".git/objects/d9/97b99669be4b8e4c0c6af06b9ce76acd16769f": "270be46b7e526a530f9ce063e8908a62",
".git/objects/ac/1c791247c2468fca8ba791a1d1ef087a29038a": "387c5b00eedbe47470ef86c7ee61230b",
".git/objects/ac/4137ca78635d68e10b125b6243c2e3afe9a1c0": "8ccdfeaba95b6f259c94dd3711337767",
".git/objects/ad/67f0d7f5d853387d06444ae292bdc7beace0f0": "56d566e3b18b5ea10928c9d77c367f2b",
".git/objects/bb/c90360fd7f58c0f764066a7db146ef86ec9121": "4cbf0ce2a17806c069e27e492995f43a",
".git/objects/d7/f3651bc5fb1c445833db8286ccdece93a261aa": "83bf1c947e1ce20f0a5e7be02c016515",
".git/objects/d7/ee3eb6ecf441f1d13013b6d3227fc34b702552": "6468cf0dd654719bfdb3a27986fd1320",
".git/objects/d0/314de313712cd9eb21413d34313381dd8002de": "8937f91ca022ea8d3bdaebd513a0333f",
".git/objects/be/5bb3d56a4af89af98519eb5e2d6268a1af67e1": "b7e86a3a656dcf27534fc739e30c13dc",
".git/objects/b3/c41b1c8d257fa1c7437b36ad3b6a54337208c3": "a4387182e32d68f657b811b026c9bf0f",
".git/objects/da/bfaf15e4faa7551c81fc2ff1b520677f118f2e": "e3a25665c643c13699af99cc81fb9867",
".git/objects/da/4c95d77b3c6050d07651a884539dbee16cb222": "3d276345f1a9af02f105c240b4f40c36",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/bcc5dde0ab81e8862a195255692a4189d09fc4": "0f05a8315ac9433fac1336966115b7f4",
".git/objects/a5/c398cc332f53e2f7fbb8e41818c997b31f5373": "40e75c01bf9de16706a40997eddd787e",
".git/objects/bd/51b34fac9253260c94764f4249596d445f1ad7": "a661a424f9cb70414299c7b8fbba5c78",
".git/objects/d1/9ae1d1b9096d398a5df4be1ec7890637d52725": "abd97648a761d15d7ac9ce0e564148ee",
".git/objects/d6/3f05ae27579e4e4b2575b30ff35337c90ee2ba": "bcfc42184463e7b9763360555529a4bb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c890969341519c8f2cba803813bf3eb9721024": "b1573bd866dd074960337a7e7033d93c",
".git/objects/bc/77bc90af982c9bee461b47ef53c2f1e28a7a8f": "2e0dd2bda6aab5ed3c37c49ed1d073b0",
".git/objects/e2/645fefe0aa8809a6133b6251ab2243cbe432cd": "db10a9364f6fe02070c0faeb0db7e6fb",
".git/objects/e2/e4fd96fac3543b1c21ce68b707e59f9546ca34": "f80ae5a27adb48683a57bf9e1a483e2a",
".git/objects/f3/31a1931b41b38930d9a8c923ac3a925d105949": "fab62eef4382ab5f206e6a92acb805fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8ad50cf8b5bfae4328b4ec27cb97eba3d995eb": "4cb10a038b103b7087152f0d1ff235a7",
".git/objects/ee/59c6d46242635b18e4f5679eb2ad5281d8de34": "a98cc4bef5ccc561030f4daf88dd8a17",
".git/objects/c9/9bbc87c0e15d481dc92edd7cef87c9ce7132c9": "40848b12323d5ba5b492b3df493fb518",
".git/objects/c9/2b206674398b33e7286267e6511c1ad2132403": "29b0c4b674c903bd5d35da43fc305108",
".git/objects/fc/76bdb78759cd1fee60c9650bfaf033f457c3b3": "16b4570e6ee19ff111ab600a24bb8248",
".git/objects/fc/276b3c948cc077370e81605d08b26af45d24ea": "1e97066d3863d5c2b06001650abd60db",
".git/objects/fd/81c644426488bce364f7125615142f6543999f": "905ac70a185e5db92d9121a0809d920e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/437b468d23e005af6da87c4e48e0aa2f97107d": "6c99b433b733dd9b8a794ad26b1776ab",
".git/objects/cf/3c814564efeb58fead41686e2115fd06062bc1": "69dbe5c522a9d601535ac74b19e76753",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/45f6eed051bafeff8e61b1a8aa8111bc7e5267": "6f27ad3c1aa33828b7c07299ff4092c8",
".git/objects/fb/022aad442379f79220a88d7c88a7bf82b62cec": "721aab1b6a59d76126bd975d9390ba06",
".git/objects/ed/548a93a04c19dc71b22e0bafbf6716f2453c6b": "605c150bab4606ee674b4400ebeb5772",
".git/objects/4e/6335a73657bcb6a1d5e2e202970ea321daa65f": "90efbe4e90f0ade7b2cc08d7dd30c430",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/a813beda7416a578721abf5148710e1579c883": "3c8e7d32c4c9d2cb19467a280798b2c4",
".git/objects/4b/c8e5e0a313f54c6c6a0fdc953d441e9f20691c": "daf113430c406b219cead75ab01fae69",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/e8f5e5c817e7964e9bf169b43fdb4e6cd4a0c8": "5529629b5ce28f79c2aa49756490a865",
".git/objects/1f/a70ab74234536eab1fcd93e3c3ffb6f1ca5a21": "a5d38e4f5695ff73788dd1964782479e",
".git/objects/1a/994c8c103271f42916f4c99ac75f951b19a9b8": "711b4f69d7a648d959f82e10a9a00e92",
".git/objects/1a/6e25b3892216f41a1c534ad66b40b879dfaa9e": "4f44236b9c2d140f0eb1f215d5530e52",
".git/objects/17/3de1b76776b667ef67f0eb2f184375edb12171": "a08e26ab8c85c7ab0d73ae8ee129426c",
".git/objects/7b/f2187ac970fba8a4b052a92204e7b0e6dcd464": "65cc24432fad019c5e9dc9268a9ea390",
".git/objects/10/51b9905726537fd1bc6730bf123e0e77b4ce46": "10b5e804157d827e7bb15830045fd66d",
".git/objects/19/9913587db54676009f783eb79f2976aedfdcf1": "267a4a061c7784c4ab5fbbb1519f42b7",
".git/objects/4c/1a6fdf0d1309c661bc869a2eedcbd3cb355513": "35ff58a53275a18a08ffb5e380c1a5a6",
".git/objects/4c/29677f24c2c6714cb0a052838f6903dfc807f6": "02975449ab8bfe90d53a21960966dc40",
".git/objects/26/07cdbb7331e49419710d59b8d716759275c3b3": "8531563617059e6fe1195b2a037287e9",
".git/objects/21/a8ba898d18e0d96aec454f66776175430e255f": "90cfea9e5fd04f6f8379016082f52534",
".git/objects/81/5183133a9921c61c0c30686ca374d86bda2b34": "7560cbe1eedcf896d94e90f84142cdfe",
".git/objects/2a/dc71e06968cef68539d7eea73c863fc20d413f": "9e5ae4911501a562da34c737402e03f8",
".git/objects/2a/0db576400b6913631786fb555ab84a329653a3": "f9c7cd162845c324a018cb47d7d710af",
".git/objects/88/c6c8712adc384d1bf3f61c2672f2a1d13780c0": "21820c70c8ecf30987a4525c53e3d846",
".git/objects/88/5a1eaa4465f6e367399f072162dccd5945c44a": "c6161d754dd542e33abdf7613b3baff6",
".git/objects/9f/d6c84e60bdf997c2e483fd72715afaaaf4a64c": "31f9cfff9e46f04f3626ccec08e088a4",
".git/objects/9f/258f21532b686b8312ee1d5bf7d00c426ed839": "36148c861ef92f5d7cff2da713bdebeb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/4c0195da5a84a63c809a67083539b0e006dabb": "22ba30e78a0244dbc8a25b7b7e6537a0",
".git/objects/00/42556c127a652cffdcace1a4900378a1cb455c": "1a452f7608f5a754e02210eded970fb2",
".git/objects/00/813a32f10674f0414e3d5139a9ef8f9057caa5": "bb2a280bd7c5a5fd8b36bbc87a0a5edd",
".git/objects/36/9f9f34310fb8ea19794958e3f387a9fd93c3db": "896fcac18da3046dc28a726d4b26589f",
".git/objects/09/074c6d8ee5b0f3770ddfb8cc19f337a5f30035": "884423460471537c9aa6be2bba5fcc31",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/09cf55c5fc73e89b3e8fee1394e1bab60a5a29": "0d781baca4c786dedae392b627a6743d",
".git/objects/91/cf9ea60a597267231a90b1d45cd533b1e143ad": "1005af5507094606fc846d6698380374",
".git/objects/91/b3365ff89cba74d4ed38dd97076bc1909585d4": "4933a70137c34daf57ff83c144dc462d",
".git/objects/65/250db331767b7426a78c7594664a290bcd5624": "cf9491fbbfc86e2c26b1f5ef37167eca",
".git/objects/62/f0c0b759c82454f500b2b38509b20b73318323": "7d03b69f5c7a47551ccf2c0594d0d75f",
".git/objects/62/6120e8493da1f9e90ff52905a672330a34efca": "ef9d8ad8b0f755e8a02e2469014de368",
".git/objects/62/0e6095efa4858699151183c685fc79621d2736": "06a4e7234b0e40d1f478479ab86731b8",
".git/objects/62/a8416d73b078e1cf1f53b857be2ba3c0cdea11": "bafc9bcf2b3c188866c97a9d5df2db06",
".git/objects/62/3e3178efc81056a38b52827f57f8cee7fa058d": "a37c790cb68b6a1e4691458f2542ce14",
".git/objects/96/ff20b2b949692ba6e24d08feacd13f2e3f4da8": "cdfa19d773506f816f681390b1ae8ea9",
".git/objects/96/02466e4a00d5dbbc0b69a6bf85d39afdd57517": "e9a7cd5c0cb26d7fc9d6d063c36c7adb",
".git/objects/3a/c50c3294539fc3fe993614e40dc5ddd25a1860": "4dffec53de93cd89d1ecacd25ddec148",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/ebe3b51101c9637b2692a78469053d0a8d6dfa": "33e52a5f3bee1673c2acc5e1efeaf9ef",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/bd085bb823339527aab311b3e9239f65e48082": "e99643c402a5f1bafe0b24bde2c540c5",
".git/objects/3f/4823b219be0a71e031912bc9d2941e2591bd50": "681319a8164c33a69260ab88467b14fb",
".git/objects/30/f8e775acdd2485ef70bae8c0f3df704cdad7fb": "ab99d74d150fcb7771952cacae136405",
".git/objects/5b/d0332396f3dfeac581749bd940d4b50dac8019": "083be8681607bd36d0ccb5197f8b3e2e",
".git/objects/37/a698308e348103e509e558de2db18bdb52acb9": "7505a14620b94bb8e2aa2066c34af579",
".git/objects/37/310b2025c66c5ece73897a2614107c8af3f105": "08b1578433e250895904443fbb124f15",
".git/objects/08/8ac591ac237f7540cf1ddaa3c369baa67eaa9c": "2e064c67128965bb19561cd0bd3c764b",
".git/objects/08/d7a8195f73a920319e1751b638c409387db083": "446f451ba6ad3e1a394e626ce155e071",
".git/objects/6c/e31ea4c15194636ffaf59445a111ea5d0730d0": "81b92e0476afd155301241836d1707fd",
".git/objects/6c/89623d5601b4776cb0117aadd20ff9eaa86195": "97131d320330b53d53ca0b3783e8051d",
".git/objects/99/78609f3e2a2cb4e6ba448ac8f3fdf6fbdc47a7": "995bc0af5ed38abaca6a38831c9a6b22",
".git/objects/52/101914eb2df60d08d5fb4de9d7ebed0690d779": "58183353669173790a22bad82a8a0004",
".git/objects/55/d8fd1610f6ce74216fca2af4d97e238ce406f0": "30bca324b1f78eb07ba115659b02f463",
".git/objects/63/29c3386768ca48d3dc4f1efd9d6211692c59e6": "545f7271f61ed2431dea20f5ddd025de",
".git/objects/63/7cf0ef93e72db27a2a6894d34d24ec92a21d69": "8929d1cfff66fc72d2b433a9f067b13d",
".git/objects/63/7ec27038e8556cc291c6ffd69681048f3cab9f": "126207e1b3e93bf71ce1ecdca0e3eec0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f36d31e9c08fb8ae1f3a708e48866da650c2b6": "053c5d18b302660bdfe83003f7c41106",
".git/objects/ba/0ee1762bbb8ef84065e7c0f50e0664df7eff14": "0e18c99c069ca095dd430a5b3a2f157b",
".git/objects/a0/44f61967e44284b6a54929a9b64d8917895d57": "ccef310f2f99e1993cda7e8dbd3e82e8",
".git/objects/b8/48d3f924fbb7ef440a12fef7da9af51b971281": "bcfd46ac295781888c821cfc291c1e4a",
".git/objects/dd/8b7daf539e2a2045b616987b9e89d133289986": "3efaee5bcfb95bb969278ea100a488a4",
".git/objects/a9/94442b3c42b7be19cfc52c6a47e71509205fd1": "e675dfed0431a6e88191e4ce9f72855a",
".git/objects/aa/891490888c6174b9dcb5af46fa35fcf7ff3bcd": "6ed5ade9d5f4a02f3db5a21763904b3b",
".git/objects/b7/53c56a896b0c0b6dab54b2b92fc46c37812bed": "c18ebfd8289bcdd82467ab2a9e9fe1f8",
".git/objects/b7/bd6f7e116d4b07e74ce60ad0aaf244e222d8f4": "cf374035ddfa9bb4bc0d2adf89c8591d",
".git/objects/db/d00b71dc22709d6ef6608042d73caa8399a011": "c245dad4206ab74242d37ef05b4fff47",
".git/objects/db/c282993daec07612f4ac7d522a91a9d0d42886": "545c5c6eb2a60743875cbf4130924807",
".git/objects/a8/486aa685d10b60647e5d3696bf3689a9775fe5": "470a4f604088429c78c365207c1d1a27",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b0/a8a8b1660736dc77e85a170847738ff10144d4": "42b5443f4b10e18876dfa3add8cbf6e6",
".git/objects/b0/59d53aca7855bd36cabea317413ca5ad797e6b": "a314eb209bee35cad71498f064b92b7f",
".git/objects/b0/a30c6a779b14a1000ad68bfe6b44a02a5b620c": "2be45378a2cd137a956c5eb15aa8128a",
".git/objects/a1/3c65f0fe0805208b188a63c7c1e17cf5020d75": "3b4f836adbc8c5126c2c0031225077d1",
".git/objects/ef/849d0e4aefb012282d9dc369c4481f84c362b8": "216cfbb9923cac8bf737f0e8e63ff03d",
".git/objects/ef/9991f77f23df2dd91543593feb8b471955181f": "ccdce705047d6ed961e8d1b803e0a62f",
".git/objects/c3/e41cf623779ab2f01c5de4bb2ba956b55b13ad": "e7fbad5f5ce7ce56afd9e6b41cf919e9",
".git/objects/c3/6255d524ba9e4e816cac9dc16777ece9938c13": "c5eb4bdcd0370acbfb348b84a3f6bdaa",
".git/objects/c4/77f2368f376ba718a3504b3aa8c4ed7eaf8c9e": "e76e032b988d5b783c8daf613dc21bf4",
".git/objects/ea/4ccc1ed50487f54dc9097466c0939da5b446e5": "bc13f4b55117778f924572040ff54783",
".git/objects/e1/bb298a769eb13b3afe636efe4a4658dba64010": "a795064b6b6b663387759768dd844132",
".git/objects/cd/256cf8c8663e27489a2f53181b79a9c856ec56": "530cef6584e99450e834a2e1c292f9a3",
".git/objects/cc/809e2321c9cb997ce4a410b10d8346a15850e6": "7eabd6ed77be7c91a3a70491b35ea18b",
".git/objects/cc/1658d4ad5e7ac634ff6f9bc0d63c03887b4759": "2daab5c3a29dbd084c216f84e3e94bbe",
".git/objects/f0/ab999fa7c8fd47c2643c7d40444fc5b4db0895": "e59f10ebf9a9f00651a472659d3e778b",
".git/objects/f0/2f02959cb7363cf098360b3de131210ffaedf3": "80de603eded81f107033df09cfc5ab57",
".git/objects/f7/1d0ff692d96440a1e16cbb332429dde00c325c": "6008b06efa57d8edb47971e4116485f7",
".git/objects/f7/3f5acf59c3e874994c4359849f55323c28b454": "768848ee8225bbc8f0c9dffa20d3b281",
".git/objects/c5/aab16cbc5a4425aaaf9fbd5e6c66db6096d926": "659514cadf7bc0003e72d11f2dc18a01",
".git/objects/c5/b178b65f3c1fd9f1e26cce6874d918c541c0bc": "3ac19d4563888ec4efd3651865c28e15",
".git/objects/c2/43e02dcf33f25888ff4c6b739e1fbba7ec75eb": "cb4c47d04f8e13fb00950ea390a86798",
".git/objects/f6/a1404b270ae36a0c690fc6bcd8284be120d066": "5a6e205627b4dba27bf1ea675699ab2e",
".git/objects/f1/dbd146a376b29ee19098dd9a25a2bb83b2059c": "ebc93921bf464767f1edc2b274dc9158",
".git/objects/f1/01b21a269ff984bbf175d741c12c6e111e9045": "41d6199119e207b7243b2537a2bcde03",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/e7/1dc207bbf5f1fa4b722792aeb5343a38895bf5": "310f91d942a5678d8064d179f66f1cd7",
".git/objects/e7/d139f77d2ab2df00b45ff84999d9a49cfd5f10": "e10ca77f7d2943070e89ecd0c4162e01",
".git/objects/cb/3aa74b0b181ea50cecf9aacff0b9d2c1155a2c": "e45e4883e933e7b96adef06f45f59c85",
".git/objects/ce/1eea1d3956a5faf1639322be2bd4c506b0cc66": "d448db60f6e5b008576bb2da908a19e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/7ec96fac2eb58e22c4199a813a59abe7ab4d80": "0060795b960fa98e531ddde6a641365e",
".git/objects/79/a45d80f80f4a16a69bc69aab11af54118e6f6e": "15046d48d2723e2d5bf9f5a7ce0660d4",
".git/objects/79/e6a6b2ced89d0755467c7b556accebd254b602": "3d89664e932521a5e50213fc2392d9b2",
".git/objects/41/97b8a81cfd82d7aba1cdca7d742d418bdf3105": "897b9d81c9dac1426b9b7b608c69d153",
".git/objects/41/6213b79c74ce1b92e7ee5320bf73ce06c69545": "f1e7ee9ff656ea474165152e4f081482",
".git/objects/41/98a7d5a1026db96aa23faa6fbaf0f1ee66f013": "b06f79bd9a64482da72535929acbc03c",
".git/objects/41/46630e5d21655e22f84d1ef4bcbf6300c2df32": "e97da8800e0e304f08968ecc81d4305b",
".git/objects/83/3ecb66b50d3b5f906673db9174c413853f90cb": "2e2ceb52bdb98dbf2669756a8980f742",
".git/objects/83/4ca26ae4f74424e70147b3af3c36bd679a7936": "1ddebd263f4ac895c8075033dde9c53f",
".git/objects/1b/9f51a6913582c7547d17d42b70bf416fd4e801": "331d286c9db21ce5530ee98e14020063",
".git/objects/1b/f7ee54beef85879ed8f200e2926f4a31abd090": "e114db1de11305831ed503600d4b502d",
".git/objects/70/ec25dd3da1bee298c16b41502e5e409c169f1a": "0c753eb30bf2380b42ec00c6d165a322",
".git/objects/70/815c0f0b05b53aa92add8a37fe566c7b4c05cf": "b1b28b6aadca10514874875027688f70",
".git/objects/1e/33f10307f278b97ef3239c9f77ce0120faa409": "ccde23b129ef1cfdfcb7e39de6d6418f",
".git/objects/84/f4a39aa161805f3a6bcd057bfe14c8702fe721": "caf20b170eb72ccca3f8386607c72fb6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/e5cb6491894ba6be3e432b9128bca4ace27170": "92a70bf263d49241b50bbeb06a66821c",
".git/objects/24/0ff9758eaf07165f66e8266a0b4261e61b27f8": "f2d1ac0ad1de7ba76d2a774eef00d95c",
".git/objects/8d/d3226e3fd7be0b35882db6860dda6c38c025f4": "0831ae3a41d6d57dac7dcde1f019022e",
".git/objects/8d/7e00f4185571547469ac1e3fcd1334edb4779f": "c290995146c42631872721d06376dbbc",
".git/objects/85/6d4a96d8d512a326a1095a017c1f953dc2a131": "026529580a75cc54e33145970581bc6e",
".git/objects/76/c4d29139d07eb628edfa0b45710bcdf71bca0a": "729111d310938d9d4c03043935845bd9",
".git/objects/76/bda3f2a14be424c7e2b8eebd9e54e4981ac7b4": "816a0de8eafce00e740453204a8b18d5",
".git/objects/1c/a4b9c1f02fa96b742182b3ad26a1ef62402cbe": "902556478835ed9631b2b47b7c9305b3",
".git/objects/82/64291e483663d0ac0e852103c38647210114fd": "3ec853765437e3ffc3e093a6b463caf0",
".git/objects/82/37dd3bee9323baf641a34de4c0977361300197": "6bf84114bfdabea8ac7f14e4abf88ab3",
".git/objects/49/d2c7893a06b7f41019c6a4741c6bcc097e4137": "8d6a510b73f9d5d2301812023ab94469",
".git/objects/40/9e7d6628fc0a44551fe0c628a2a6301d6e9066": "e4ac7ded65e524f45da102734f782048",
".git/objects/2e/92a7843cf91e24fc12ad98120495fa2183de6f": "25c0669e3d18d6d8e6cff3849a054a15",
".git/objects/2b/e3016afafac86a08622fd1fb4732984db81707": "4fe4781ab9c18c33b6f0e8ef233d6901",
".git/objects/8b/77ef8bef618a594861b91ac2fc0eeb70c994fe": "4bdb5a01ea9cddd58dea42dfba43c213",
".git/objects/8b/1f82057e38764132339e453cf74a40bea44f26": "2f2fb3b3d8bed10f4ba9afd5a1a84533",
".git/objects/13/7b827fbecde12bc35a0b87ed718f2babcfa1d8": "cbf5e0b84d08bf7c39d880301b2b6248",
".git/objects/14/d2dc3114c7c3dc2c93dd0d61ca709f6bddcd46": "2cdc228f24868db99dfd3ba14361e883",
".git/objects/8e/e058987b387bb0dade4a529c2c8acb9a907d21": "243051eeb6f21aa203373e8067e3272f",
".git/objects/8e/afb91f57b57705663f71fd0d82093475b757d4": "322143e6bcabd2686f1b8d9be5edd28f",
".git/objects/8e/c70f60a2db2bf73a7552ae2baf5f87bf704f72": "921fcb13968bab439be77fafab9276d1",
".git/objects/8e/f660d246c48f626e034827df4cdcab514dbdf5": "eee0bcf80fda37f4a90be11dda3f5b9f",
".git/objects/8e/7b0be51b221dcb6d0a9c720e2513167c414ca4": "5ef18cdd7a286cabfc15b41770321a34",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0dcc55388bc89af064924ada47023f39",
".git/logs/refs/heads/main": "0dcc55388bc89af064924ada47023f39",
".git/logs/refs/remotes/origin/main": "37249027c48b6fa90b1ca9b999d59ad0",
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
".git/refs/heads/main": "cb5b98a250bde8a028787c7df1d7aad9",
".git/refs/remotes/origin/main": "cb5b98a250bde8a028787c7df1d7aad9",
".git/index": "493d90b23f00c0d820d48f4e7cc5865d",
".git/COMMIT_EDITMSG": "8a62ca08602a0fc7252b1501fac3e6d9",
"assets/AssetManifest.json": "1d5b4fdc0b4aa3caf5e4c8d948b57bdb",
"assets/NOTICES": "0b70ac3d9266c832b53e16afa52c0e4a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "58344b55a880e2349f2f40c4f2e3c5f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "71fe990f1a18465bd309b5890cd83dbf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "005c9207b8bb1884a21600c26f51da5a",
"assets/fonts/MaterialIcons-Regular.otf": "5088d18d996d64acb542504fa22f41f0",
"assets/assets/images/mac_os_bg.jpg": "07d6fdca3f89e008748edd2a794be97c",
"assets/assets/images/windows_11_bg.jpeg": "43a2e2047e5572bcd9be3d9ed60c4e07",
"assets/assets/images/windows_11_bg.jpg": "4299dcccfb0fe6130abec9742ca22f51",
"assets/assets/resume/Flutter_Developer_Shinas_Koya.pdf": "eeb7b3917a219d4c5c0cddac472a401e",
"assets/assets/project_images/project_icons/weather.svg": "0f00cd9aeea29ff719bf30037191321b",
"assets/assets/project_images/project_icons/notes.svg": "3e237c14e5679d55064314d0cdf3c51f",
"assets/assets/project_images/project_icons/sports.svg": "7bff706d2037f06fcf37906b268cc5e9",
"assets/assets/project_images/project_icons/flamingo_app_logo.svg": "4d851d5a6bf722195334af004918e26e",
"assets/assets/project_images/project_icons/savory_safari_app_logo.svg": "8222fd533809444e501057bbf2293856",
"assets/assets/project_images/project_icons/shopping_icon.svg": "00fa94be72f8e333eabaae807658786c",
"assets/assets/project_images/project_icons/wallpaper_app.svg": "460c6c7fc02662c75a489da28b1fa2ff",
"assets/assets/project_images/project_icons/culinary_icon.svg": "46cdc6063aacd346230e7dd13fb9f001",
"assets/assets/project_images/project_icons/cric_8_app_logo.svg": "82dd3912807aaac0f35ced2de6e30c64",
"assets/assets/project_images/project_icons/clear_sky_app_logo.svg": "7bfe33729cfb4d3aa44e96b9eecce398",
"assets/assets/project_images/project_icons/document.svg": "9e8ac17c8ce016103a7448f16b7bed03",
"assets/assets/project_images/project_icons/pixa_vista_app_logo.svg": "f0df0b8d774cf682819cf5462640c2ba",
"assets/assets/project_images/project_icons/pepper_train_app_logo.svg": "1afdda4cca8fd842e9e84e54a6dda3af",
"assets/assets/project_images/project_icons/note_trove_app_logo.svg": "b1bdfe19a1270aa27eb4ab908702600b",
"assets/assets/project_images/thumbnails/savory_safari_mockup.jpg": "8f545873955bda6b5dd63ede2a465cbd",
"assets/assets/project_images/thumbnails/savory_safari_thumbnail.jpg": "277947ecde906c463e0ecb50d68a76c3",
"assets/assets/project_images/thumbnails/clear_sky_mockup.jpg": "638c85d511058204b7f6bc39d02ccd14",
"assets/assets/project_images/thumbnails/pepper_train_thumbnail.jpg": "eaf4c380054c9f80330149801a4e635c",
"assets/assets/project_images/thumbnails/pixa_vista_mockup.jpg": "22b2c5b93c2be824b3b250254ffc66db",
"assets/assets/languages/en.json": "7d3f22393dc36ae666d37bff25cb8ba5",
"assets/assets/languages/kn.json": "6e83ca3c223ecb0861f3598cb6cfd99c",
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
"assets/assets/projects_data/project_metadata.json": "0a18d59fe40222251bf156fd5191d558",
"assets/assets/projects_data/project_details.json": "1c8bc2282684bffdb847a8fa3efc0434",
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
