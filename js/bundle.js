/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIREEMBLEM = exports.FIREEMBLEM = {
  1: ["azura"],
  2: ["eirika"],
  3: ["ike"]
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var POKEMON = exports.POKEMON = {
  1: ["bulbasaur"],
  2: ["ivysaur"],
  3: ["venusaur"],
  4: ["charmander"],
  5: ["charmeleon"],
  6: ["charizard"],
  7: ["squirtle"],
  8: ["wartortle"],
  9: ["blastoise"],
  10: ["caterpie"],
  11: ["metapod"],
  12: ["butterfree"],
  13: ["weedle"],
  14: ["kakuna"],
  15: ["beedrill"],
  16: ["pidgey"],
  17: ["pidgeotto"],
  18: ["pidgeot"],
  19: ["rattata"],
  20: ["raticate"],
  21: ["spearow"],
  22: ["fearow"],
  23: ["ekans"],
  24: ["arbok"],
  25: ["pikachu"],
  26: ["raichu"],
  27: ["sandshrew"],
  28: ["sandslash"],
  29: ["nidoranf"],
  30: ["nidorina"],
  31: ["nidoqueen"],
  32: ["nidoranm"],
  33: ["nidorino"],
  34: ["nidoking"],
  35: ["clefairy"],
  36: ["clefable"],
  37: ["vulpix"],
  38: ["ninetales"],
  39: ["jigglypuff"],
  40: ["wigglytuff"],
  41: ["zubat"],
  42: ["golbat"],
  43: ["oddish"],
  44: ["gloom"],
  45: ["vileplume"],
  46: ["paras"],
  47: ["parasect"],
  48: ["venonat"],
  49: ["venomoth"],
  50: ["diglett"],
  51: ["dugtrio"],
  52: ["meowth"],
  53: ["persian"],
  54: ["psyduck"],
  55: ["golduck"],
  56: ["mankey"],
  57: ["primeape"],
  58: ["growlithe"],
  59: ["arcanine"],
  60: ["poliwag"],
  61: ["poliwhirl"],
  62: ["poliwrath"],
  63: ["abra"],
  64: ["kadabra"],
  65: ["alakazam"],
  66: ["machop"],
  67: ["machoke"],
  68: ["machamp"],
  69: ["bellsprout"],
  70: ["weepinbell"],
  71: ["victreebel"],
  72: ["tentacool"],
  73: ["tentacruel"],
  74: ["geodude"],
  75: ["graveler"],
  76: ["golem"],
  77: ["ponyta"],
  78: ["rapidash"],
  79: ["slowpoke"],
  80: ["slowbro"],
  81: ["magnemite"],
  82: ["magneton"],
  83: ["farfetchd"],
  84: ["doduo"],
  85: ["dodrio"],
  86: ["seel"],
  87: ["dewgong"],
  88: ["grimer"],
  89: ["muk"],
  90: ["shellder"],
  91: ["cloyster"],
  92: ["gastly"],
  93: ["haunter"],
  94: ["gengar"],
  95: ["onix"],
  96: ["drowzee"],
  97: ["hypno"],
  98: ["krabby"],
  99: ["kingler"],
  100: ["voltorb"],
  101: ["electrode"],
  102: ["exeggcute"],
  103: ["exeggutor"],
  104: ["cubone"],
  105: ["marowak"],
  106: ["hitmonlee"],
  107: ["hitmonchan"],
  108: ["lickitung"],
  109: ["koffing"],
  110: ["weezing"],
  111: ["rhyhorn"],
  112: ["rhydon"],
  113: ["chansey"],
  114: ["tangela"],
  115: ["kangaskhan"],
  116: ["horsea"],
  117: ["seadra"],
  118: ["goldeen"],
  119: ["seaking"],
  120: ["staryu"],
  121: ["starmie"],
  122: ["mr. mine"],
  123: ["scyther"],
  124: ["jynx"],
  125: ["electabuzz"],
  126: ["magmar"],
  127: ["pinsir"],
  128: ["tauros"],
  129: ["magikarp"],
  130: ["gyarados"],
  131: ["lapras"],
  132: ["ditto"],
  133: ["eevee"],
  134: ["vaporeon"],
  135: ["jolteon"],
  136: ["flareon"],
  137: ["porygon"],
  138: ["omanyte"],
  139: ["omastar"],
  140: ["kabuto"],
  141: ["kabutops"],
  142: ["aerodactyl"],
  143: ["snorlax", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg"],
  144: ["articuno"],
  145: ["zapdos"],
  146: ["moltres"],
  147: ["dratini"],
  148: ["dragonair"],
  149: ["dragonite"],
  150: ["mewtwo"],
  151: ["mew"]
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pokemon_list = __webpack_require__(1);

var _pokemon = __webpack_require__(3);

var _fireemblem_list = __webpack_require__(0);

var _fireemblem = __webpack_require__(4);

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('colours-canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // ctx.fillStyle="red";
  // ctx.fillRect(0,0,300,150);
  // ctx.clearRect(20,20,100,50);

  var img = new Image();
  img.src = "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg";
  img.onload = function () {
    // ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, canvas.width / 2.5, canvas.height / 3.5);
  };

  // Testing
  window.pokemon = _pokemon_list.POKEMON;
  window.pokemonNameToId = _pokemon.pokemonNameToId;
  window.fireemblem = _fireemblem_list.FIREEMBLEM;
  window.fireemblemNameToId = _fireemblem.fireemblemNameToId;
  console.log("Hello from inside cartooncolours.js");
});

var logRandomPokemon = function logRandomPokemon() {
  console.log("Snorlax");
};

var randomPokemon = document.getElementsByClassName("random-pokemon");
randomPokemon.addEventListener("click", logRandomPokemon());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pokemonNameToId = exports.pokemonNameToId = function pokemonNameToId(obj, pokeName) {
  for (var prop in obj) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === pokeName) {
      return parseInt(prop);
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fireemblemNameToId = exports.fireemblemNameToId = function fireemblemNameToId(obj, name) {
  for (var prop in obj) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === name) {
      return parseInt(prop);
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map