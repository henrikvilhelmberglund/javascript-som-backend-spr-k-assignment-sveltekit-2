# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.0.0](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/compare/v0.0.2...v1.0.0) (2023-05-21)


### Features

* :memo: update README ([fd2c414](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/fd2c414fe017b34976619a14e972a34de08530cd))
* :sparkles: add back Footer component ([5cda6a3](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/5cda6a37ac502d1a517af70e7874447418a678f8))
* :mag: add titles ([0f820f6](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/0f820f68264cf2fa5806b3b862587d32261c576a))
* :sparkles: add loggedIn store which hides some links in the nav when you are not logged in ([a38398f](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/a38398fa7248ca366275982895a8720b335c5365))


### Bug Fixes

* :art: remove Auth page h1 ([b1070e3](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/b1070e3ed14aa49a0262b1ddcd3ac3d605883aeb))
* :bug: edit timer a bit (still bugged when clicking a lot of times fast) ([a30a767](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/a30a767125bbf5fc471e8211d410cda570d51211))
* :art: update console warn message for wrong password ([321bc4f](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/321bc4f0be83580ab3e1989f1a8f4f460bfa6fc8))
* :fire: comment out console log ([f080096](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/f080096f5d29aabdaf773132c0922c4c5da68758))
* :fire: comment out console logs ([606ec67](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/606ec675398981679f1d0f7cf102194ffa6c5f62))
* :fire: cleanup ([d595bf3](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/d595bf309726023a373fdbd0c2f52660ab0249c5))
* :bug: add back locals which I removed by accident ([adf4847](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/adf4847288cde36bb2f09c4c516d690a010acacb))
* :fire: cleanup ([6efaef0](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/6efaef054f80ff4c789e4f5af3777009d58ad5d7))
* :bug: use adapter-auto instead of adapter-static for building to work ([ab7f47c](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/ab7f47c5a2fa4fb9ee9311419fa78ff50a7bd9f3))

## [0.0.2](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/compare/v0.0.1...v0.0.2) (2023-05-20)


### Features

* :sparkles: add try catch for the server connection ([553ddb3](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/553ddb3dcd490cc2c37744399430011402619302))
* :zap: break out connection code outside of hooks.server.js ([89a8b0e](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/89a8b0e4031a8ef87cf13f3145a8e68a2d6ae908))
* :sparkles: add PleaseLogin component that tells you to log in ([d58a5e6](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/d58a5e620835fb140379f9310636e1edacc062f6))
* :sparkles: make the accounts GET and POST endpoints use the ownedBy field ([65e3262](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/65e3262669f6ab4986b9f55525a2a4159cc3ea29))
* :sparkles: return auth as well ([49c2a70](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/49c2a70db6ba5a41caa96abf812fd014765d4091))
* :sparkles: add ownedBy with the user ID to the created account ([56f2e9e](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/56f2e9e5ad3e180aa1baafe5e68f795156960b21))
* :sparkles: add string representation of user _id object id as id in locals ([55c7d2b](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/55c7d2ba430b9e563cf50596b830a37e5f1ca54e))
* :sparkles: only show add account form when you are logged in ([94cbc8e](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/94cbc8e9a92ce1b29cd1334d27201ad639865174))
* :sparkles: add auth load function for add-account route ([2542fe2](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/2542fe29091719ac1c422bc071ce2b1a46272384))
* :sparkles: generate and use jwt token instead of using mongoDB _id directly ([b34cbe8](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/b34cbe8e8d0ed93327430b9231fa90c7bfbf976b))
* :package: add jsonwebtoken ([9f49bdf](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/9f49bdf2901189956f7184d789ab58be4564e3cf))


### Bug Fixes

* :fire: cleanup ([f0863da](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/f0863da083e3939ca2d75036faa631f7702cabf3))
* :zap: import connect function from mongoConnect.js, be sure to set client if it is not set already ([3b8ecda](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/3b8ecda219c82dcb6fef6bfb8c1cd264cc2ebde6))
* :zap: use SvelteKit's fetch function to stop it from complaining in the console ([51d3ad4](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/51d3ad4dccaaf1aa8830b5deffc70d7566cfdb87))
* :bug: transaction limit should be on withdrawals, not deposits ([77a9342](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/77a93423d43b20c507f0754224254c70ffb53bd6))
* :triangular_flag_on_post: disable debug flag, remove pass ([949ee86](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/949ee865e1fc20f2b872c7b96d6b8c2da7afb31e))
* :lipstick: improve styling, add PleaseLogin components ([04152cd](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/04152cd62def061871fd7a94395a038c7c6a510c))
* :art: rename auth route to login in the nav ([9cd773c](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/9cd773c26cb6ae231c59f6781e7108f5750cd84f))
* :truck: change auth route to login ([f671e79](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/f671e794feba3ec86336545e2d405e052404dc1f))
* :bug: use ownedBy in the dynamic GET to make sure we don't display other user's accounts by accident ([a3b8515](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/a3b851555c8cb96e0bfbe68b9727cf51b5bb5168))
* :fire: cleanup ([33c85b0](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/33c85b006f0373de75b0e096e1a7d08d0a15416a))
* :speech_balloon: improve the UI text ([8fefa3e](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/8fefa3ec87af463bb1c250b26592d38cdecae47f))
* :fire: disable ssr ([4b33606](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/4b33606abbe5b7eb76c97bf20ad6e51dbff3ee9a))
* :fire: remove annoying console log ([c30be64](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/c30be64b1cdedfe7ee903e0b22b982aed36a63cf))
* :fire: remove pass ([0f0d3c5](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/0f0d3c5ef876ad5df309aa5f3383fb45ba0c97b9))
* :fire: remove unused import ([362b781](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/362b781944fa35ce9009f44a476126db18cd52df))
* :fire: remove unused imports ([1c5ed2f](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/1c5ed2fe97cce24d3ff83c831e05c0b9c79b2e80))
* :bug: accounts shouldn't have passwords ([5dc7789](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/5dc7789f645a66b8db8197a52950a2a951b59e7c))
* :zap: set maxAge for the cookie to five minutes ([12d6f8c](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/12d6f8ccb5d881b660edbf827a9255d70a3c973f))
* :fire: forgot to remove template changelog before releasing ([e1095de](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/e1095de7d8881f82b7195a5459977b577248cf3f))

## 0.0.1 (2023-05-20)


### Features

* :sparkles: add auth endpoints ([8942519](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/894251912cc3043d232dd6e8495e1a623ffb3377))
* :sparkles: add a beautiful (?) index page ([c6cafe2](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/c6cafe2e23bf027797b3d1b7eb166ecdc7a620d2))
* :sparkles: add login route in nav ([cd2ed2a](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/cd2ed2a46d58dee001c4a430d12f6bcbd0476f67))
* :sparkles: add checkLoginStatus() function ([0feb88e](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/0feb88e4ebe31d1703b323a1a9cd027bbaccf517))
* :sparkles: add getUsersCollection() function ([21bead5](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/21bead5ec66379e247b85d1ccbc346a82c97c9de))
* :package: add bcrypt ([0f264ae](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/0f264aec23cd227cbf0e358d19421d05e0542203))
* :sparkles: add clientFunctions.js file with deleteAccount function ([1f0e8b4](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/1f0e8b42069fa95aeef31174b89bbfbe992c7ec0))
* :sparkles: add DELETE endpoint for account dynamic route ([2e524fe](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/2e524fe64be854a056a4e693c74ba702994342ac))
* :sparkles: add error page for account slug route ([de6f894](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/de6f894de6dd18a225ad713db5c0b4fb48523732))
* :sparkles: add delete account function ([79a3beb](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/79a3bebcb7f023be12316e7df26f49b50ab0c769))
* :art: move frontend code into separate folder ([f9552cc](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/f9552cc483e90c9f62759dca373a515364788394))
* :sparkles: use updated Updated component ([542ad3d](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/542ad3df7d705a16681de5db32e2ce5be86db6dd))
* :sparkles: add withdrawal and deposits of funds, add updates in UI by invalidating data ([b0149a8](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/b0149a876ca3abd772b31651186049885757f286))
* :sparkles: update Updated component ([60a4c99](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/60a4c99ee0df42906157544e0ac87e192fa69d6f))
* :memo: update README ([4421add](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/4421addfc429355e32fc3276a2ad21803ca554b1))
* :zap: add thunder, recommended extension ([29080f4](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/29080f4087b7bfbe6499ac70063cffbe0c27280d))
* :sparkles: add multicssclass() to vite config plugins ([7015594](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/701559460b1eb26e238b8170bb69e15cbe0eabf9))
* :package: add svelte-multicssclass ([582e631](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/582e63195191f977793fc1da9f592602aebe64cf))
* :sparkles: add dynamic account endpoint with GET and PUT (WIP) ([7c06595](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/7c06595fbdf3a1a1499bd9449f609d1dc64da3e5))
* :sparkles: add account dynamic route that shows a single account ([5a83454](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/5a8345492059fd4f022a2611e1aa25c08db0e2b2))
* :zap: add thunder ([564f7c0](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/564f7c034e6e9b679ba7481b8a55707c984bdebe))
* :sparkles: add view-accounts load function ([6281205](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/62812058debfd15000a6f10b5ee20f6e6cd5b90c))
* :sparkles: add accounts endpoint ([22eb626](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/22eb6265872f8af5cecf6aa8ffb67ac3b85bef51))
* :sparkles: add view-accounts route ([cc5c0c6](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/cc5c0c6b4b7b7b1c02a15eda8e202803c8f58196))
* :sparkles: add add-account route ([a04c721](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/a04c721b8c36cb6785cf0d1993aae50c862954b2))
* :sparkles: add +layout.svelte with nav ([34d5949](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/34d5949fc8956795f2ae65d236a85ae13e30f2cd))
* :sparkles: add Account and Updated components ([8ac380a](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/8ac380aee57430a3321a175189b4c4ce580fa1c6))
* :sparkles: add hooks.server.js ([f69bde4](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/f69bde420b8a7bd4af14e1103b75fabf38c70ed7))
* :package: add packages, update package.json info ([e2d39d1](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/e2d39d1d2398afbed2e33a0875d34ff0e4a263dc))
* :memo: add TODO ([12193d7](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/12193d7b87410932c369c5c9c221a74074936f8b))


### Bug Fixes

* :memo: update TODO ([166c1ce](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/166c1ce2504a80e6f0f2d57d7467b1088e3db32c))
* :bug: don't show accounts when data.error is true ([ebbac26](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/ebbac263ba8b12e6fdaa65e9caa34820f7124ffa))
* :bug: use checkLoginStatus(), disable prerendering ([611d8b8](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/611d8b81975d0333f160175dc3cb3c851a20ab36))
* :zap: switch to login state after registering and invalidating data, remove filled in password ([3814bdf](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/3814bdfdff6020f6f7b3f49dbc6819a425ad4263))
* :zap: use checkLoginStatus() function in auth route load function ([3bb2358](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/3bb235859a0d8aaac90dd2feb6591f4ce0ecab99))
* :bug: disable ssr for this route, use checkLoginStatus() function ([c046253](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/c0462535b48f9538ab44cc7c8612ee256eb184e3))
* :zap: return user and state instead ([93ba2d5](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/93ba2d5771138e35af87b51fe4169c175ba1849e))
* :bug: if a session exists, find the user in the database from the session ID ([45af13b](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/45af13b0d42d77063f3baeeade9efa8249fedeb0))
* :package: update hvb-console ([6ac3b2a](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/6ac3b2a83f6f5213ab4a81d626aab78cd2b2bbf1))
* :memo: update TODO ([8ab5a9c](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/8ab5a9c7d9b50410f57b69444c2431c1f6351cb3))
* :art: use deleteAccoutn function, show delete button, invalidate upon deletion to refresh data ([1b2002a](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/1b2002ab7b99c27c7417db10c73ceda2cd5d4439))
* :art: move deleteAccount function, add delete button, show message when deleted ([a94b750](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/a94b7502ad916e3d7a0866464e159e56a4c74c54))
* :fire: remove timer console log ([afa61b4](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/afa61b4c9c2880eaad8a8973573c68541bb68b15))
* :bug: missed funds here ([8060955](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/8060955eac4565ba9e1dd2d841ff891e3b516497))
* :bug: rename money to funds ([a0a9364](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/a0a9364052fa3548d35b6661569e4f42cb54ce76))
* :bug: remove if (browser) code which caused issues, export const prerender = false does the same thing ([9801197](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/980119775266c321845f3a7a745b11f5e2f0de96))
* :art: move some files I forgot to move ([6ec3b55](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/6ec3b55d5c52665b42e03e311e8f2bf4ae022abd))
* :memo: update TODO ([d1e35b7](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/d1e35b73524633a181d957b053030be9c189d8fb))
* :lipstick: improve styling ([e047c0e](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/e047c0e5b4937f10b8883c9124dfdda47b08f19f))
* :art: data.accounts is an array now ([39f0317](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/39f03172e8db4edf7995a78515db06e291287f65))
* :white_check_mark: update TODO ([28d307f](https://github.com/henrikvilhelmberglund/javascript-som-backend-spr-k-assignment-sveltekit-2/commit/28d307fff1fa1515334d8386623078bb939cd37c))
