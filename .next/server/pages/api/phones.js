module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fn5G");


/***/ }),

/***/ "fn5G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oRai");
var _db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("oRai", 1);

/* harmony default export */ __webpack_exports__["default"] = (function (req, res) {
  const {
    query
  } = req;

  if (query.id) {
    let i = _db_json__WEBPACK_IMPORTED_MODULE_0__.findIndex(({
      id
    }) => id == query.id);

    if (i > -1) {
      res.status(200).json(_db_json__WEBPACK_IMPORTED_MODULE_0__[i]);
    } else {
      res.status(404).end();
    }
  } else {
    res.status(200).json(_db_json__WEBPACK_IMPORTED_MODULE_0__);
  }
});

/***/ }),

/***/ "oRai":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Realme C11\",\"price\":2999,\"previewUrl\":\"/image/1/preview.webp\",\"gallery\":[\"/image/1/1.webp\",\"/image/1/2.webp\",\"/image/1/3.webp\"],\"id\":1,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Apple iPhone 11\",\"price\":24499,\"previewUrl\":\"/image/2/preview.webp\",\"gallery\":[\"/image/2/1.webp\",\"/image/2/2.webp\",\"/image/2/3.webp\"],\"id\":2,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Samsung Galaxy S10\",\"price\":17999,\"previewUrl\":\"/image/3/preview.webp\",\"gallery\":[\"/image/3/1.webp\",\"/image/3/2.webp\",\"/image/3/3.webp\"],\"id\":3,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Realme C11\",\"price\":2999,\"previewUrl\":\"/image/1/preview.webp\",\"gallery\":[\"/image/1/1.webp\",\"/image/1/2.webp\",\"/image/1/3.webp\"],\"id\":4,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Apple iPhone 11\",\"price\":24499,\"previewUrl\":\"/image/2/preview.webp\",\"gallery\":[\"/image/2/1.webp\",\"/image/2/2.webp\",\"/image/2/3.webp\"],\"id\":5,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Samsung Galaxy S10\",\"price\":17999,\"previewUrl\":\"/image/3/preview.webp\",\"gallery\":[\"/image/3/1.webp\",\"/image/3/2.webp\",\"/image/3/3.webp\"],\"id\":6,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"}]");

/***/ })

/******/ });