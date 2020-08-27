module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "//R+":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fYhR");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "KgDb":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"single_page": "Product_single_page__3XDEY",
	"product_ceil": "Product_product_ceil__39jQh",
	"carousel_wrap": "Product_carousel_wrap__CkThu",
	"gallery_image": "Product_gallery_image__2SAB0",
	"carousel_arrows": "Product_carousel_arrows__1FiP6",
	"product_description": "Product_product_description__zGti3",
	"product_name": "Product_product_name__1VTwJ",
	"product_price": "Product_product_price__KFY5A",
	"btn_product_group": "Product_btn_product_group__GtOtr",
	"btn_product_attr": "Product_btn_product_attr__e9jTz",
	"btn_active": "Product_btn_active__17Fu8",
	"error_message": "Product_error_message__2U7g-",
	"btn_add_product": "Product_btn_add_product__2MV4k",
	"in_cart": "Product_in_cart__2wFwl"
};


/***/ }),

/***/ "RSWt":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"product_counter": "product-counter_product_counter__AR5AP",
	"btn_minus": "product-counter_btn_minus__1lArT",
	"btn_plus": "product-counter_btn_plus__3vZuv",
	"input_counter": "product-counter_input_counter__3UiaY"
};


/***/ }),

/***/ "Vzqi":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNjcuOTU0LDIxMy41ODhMMTYwLjY3LDUuODcyYy03LjgwNC03LjgxOS0yMC40NjctNy44MzEtMjguMjg0LTAuMDI5Yy03LjgxOSw3LjgwMi03LjgzMiwyMC40NjUtMC4wMywyOC4yODQNCgkJCWwyMDcuMjk5LDIwNy43MzFjNy43OTgsNy43OTgsNy43OTgsMjAuNDg2LTAuMDE1LDI4LjI5OUwxMzIuMzU2LDQ3Ny44NzNjLTcuODAyLDcuODE5LTcuNzg5LDIwLjQ4MiwwLjAzLDI4LjI4NA0KCQkJYzMuOTAzLDMuODk2LDkuMDE2LDUuODQzLDE0LjEyNyw1Ljg0M2M1LjEyNSwwLDEwLjI1LTEuOTU4LDE0LjE1Ny01Ljg3M2wyMDcuMjY5LTIwNy43MDENCgkJCUMzOTEuMzMzLDI3NS4wMzIsMzkxLjMzMywyMzYuOTY3LDM2Ny45NTQsMjEzLjU4OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "aaYy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneService; });
function PhoneService() {
  const _apiBase = 'http://localhost:3000/api/phones';

  const getResource = async url => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  };

  const getPhones = () => {
    return getResource('');
  };

  const getPhone = id => {
    return getResource(`?id=${id}`);
  };

  return {
    getPhones,
    getPhone
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fYhR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap/Carousel"
var Carousel_ = __webpack_require__("//R+");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/ProductCounter/index.js + 1 modules
var ProductCounter = __webpack_require__("yUIA");

// EXTERNAL MODULE: ./src/pages/product/Product.module.css
var Product_module = __webpack_require__("KgDb");
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);

// CONCATENATED MODULE: ./src/pages/product/Attributes.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Attributes_ProductAttr extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      active: this.props.data[0],
      elems: this.props.data
    });

    _defineProperty(this, "clickAttribute", active => {
      this.setState({
        active
      });
      this.props.clickAttr(active);
    });
  }

  componentDidUpdate(prev) {
    if (prev.data !== this.props.data) {
      this.setState({
        elems: this.props.data
      });
    }
  }

  render() {
    let {
      elems,
      active
    } = this.state;
    let attributes = elems.map(elem => {
      let classNames = Product_module_default.a.btn_product_attr + ' btn btn-secondary ';
      if (active === elem) classNames += Product_module_default.a.btn_active;
      return __jsx("button", {
        onClick: () => this.clickAttribute(elem),
        key: elem,
        type: "button",
        className: classNames
      }, elem);
    });
    return __jsx("div", {
      className: Product_module_default.a.btn_product_group + ' btn-group',
      role: "group",
      "aria-label": "Attributes"
    }, attributes);
  }

}

/* harmony default export */ var Attributes = (Attributes_ProductAttr);
// EXTERNAL MODULE: ./src/redux/actions/index.js
var actions = __webpack_require__("pmdI");

// CONCATENATED MODULE: ./src/pages/product/Description.js
var Description_jsx = external_react_default.a.createElement;







const ProductDescription = ({
  product,
  addProduct,
  in_cart
}) => {
  let {
    name,
    price,
    description,
    attr
  } = product;
  let {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  let {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(1);
  let {
    0: attribute,
    1: setAttribute
  } = Object(external_react_["useState"])(attr[0]);

  const clickAttr = attr => {
    setAttribute(attr);
  };

  const changeCount = num => {
    setCount(+parseInt(num));
  };

  const addCart = () => {
    let message = '';

    if (count >= 1 && isFinite(count) && attribute !== '') {
      let obj = Object.assign(product, {
        count
      });
      addProduct(obj);
    } else if (count < 1 || !isFinite(count)) {
      message = 'Неверное количество товара';
    } else if (attribute === '') {
      message = 'Выберете атрибут';
    }

    if (error !== message) setError(message);
  };

  let classNames = Product_module_default.a.btn_add_product + ' btn btn-primary ';
  if (in_cart) classNames += Product_module_default.a.in_cart;
  return Description_jsx("div", {
    className: Product_module_default.a.product_description
  }, Description_jsx("h2", {
    className: Product_module_default.a.product_name
  }, name), Description_jsx("span", {
    className: Product_module_default.a.product_price
  }, "$", price), Description_jsx("p", {
    className: "product_about"
  }, description), Description_jsx(Attributes, {
    data: attr,
    clickAttr: clickAttr
  }), Description_jsx(ProductCounter["a" /* default */], {
    changeCount: changeCount,
    count: 1
  }), Description_jsx("div", {
    className: "product_add_cart"
  }, Description_jsx("button", {
    onClick: addCart,
    type: "button",
    className: classNames
  }, Description_jsx("i", {
    className: "fa fa-shopping-cart mr-1",
    "aria-hidden": "true"
  }), ' ', Description_jsx("span", null, "Add to Cart"))), Description_jsx("p", {
    className: Product_module_default.a.error_message
  }, error));
};

const mapStateToProps = ({
  cart
}, {
  product
}) => {
  let in_cart = cart.some(item => product.id === item.id);
  return {
    in_cart
  };
};

const mapDispatchToProps = {
  addProduct: actions["a" /* addProduct */]
};
/* harmony default export */ var Description = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ProductDescription));
// EXTERNAL MODULE: ./src/components/Spinner/index.js + 1 modules
var Spinner = __webpack_require__("gwpz");

// EXTERNAL MODULE: ./src/service/phone-service.js
var phone_service = __webpack_require__("aaYy");

// EXTERNAL MODULE: ./src/pages/product/images/prev.svg
var prev = __webpack_require__("l2zP");
var prev_default = /*#__PURE__*/__webpack_require__.n(prev);

// EXTERNAL MODULE: ./src/pages/product/images/next.svg
var next = __webpack_require__("Vzqi");
var next_default = /*#__PURE__*/__webpack_require__.n(next);

// CONCATENATED MODULE: ./src/pages/product/Product.js
var Product_jsx = external_react_default.a.createElement;










const carouselProps = {
  indicators: false,
  prevIcon: Product_jsx("img", {
    className: Product_module_default.a.carousel_arrows,
    src: prev_default.a
  }),
  nextIcon: Product_jsx("img", {
    className: Product_module_default.a.carousel_arrows,
    src: next_default.a
  })
};

const CarouselComponents = ({
  product
}) => {
  return Product_jsx(Carousel_default.a, carouselProps, product.gallery.map(item => {
    return Product_jsx(Carousel_default.a.Item, {
      key: item
    }, Product_jsx("div", {
      className: Product_module_default.a.carousel_wrap
    }, Product_jsx("img", {
      className: Product_module_default.a.gallery_image,
      src: item,
      alt: "Gallery"
    })));
  }));
};

const ProductContainer = ({
  serverProduct,
  serverError
}) => {
  let {
    0: product,
    1: setProduct
  } = Object(external_react_["useState"])(serverProduct);
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(!serverProduct);
  let {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(serverError);
  let router = Object(router_["useRouter"])();

  async function load() {
    let product = null;

    try {
      product = await Object(phone_service["a" /* default */])().getPhone(router.query.id);
    } catch (err) {
      setError(err);
    }

    if (product) {
      setProduct(product);
      setLoading(false);
    }
  }

  Object(external_react_["useEffect"])(() => {
    if (!product) {
      load();
    } else if (product.id != router.query.id) {
      setLoading(true);
      load();
    }
  });

  if (error) {
    return Product_jsx(Spinner["a" /* default */], null);
  }

  if (loading) return Product_jsx(Spinner["a" /* default */], null);
  return Product_jsx("div", {
    className: Product_module_default.a.single_page
  }, Product_jsx("div", {
    className: "container"
  }, Product_jsx("div", {
    className: "row"
  }, Product_jsx("div", {
    className: "col-md-6"
  }, Product_jsx("div", {
    className: Product_module_default.a.product_ceil
  }, Product_jsx(CarouselComponents, {
    product: product
  }))), Product_jsx("div", {
    className: "col-md-6"
  }, Product_jsx(Description, {
    product: product
  })))));
};

ProductContainer.getInitialProps = async ({
  req,
  query
}) => {
  let {
    id
  } = query;
  let serverProduct = null;

  if (!req) {
    return {
      serverProduct
    };
  }

  try {
    serverProduct = await Object(phone_service["a" /* default */])().getPhone(id);
  } catch (error) {
    return {
      serverError
    };
  }

  return {
    serverProduct
  };
};

/* harmony default export */ var Product = (ProductContainer);
// CONCATENATED MODULE: ./src/pages/product/index.js

/* harmony default export */ var pages_product = (Product);
// CONCATENATED MODULE: ./pages/shop/product/[id].js

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (pages_product);

/***/ }),

/***/ "gwpz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Spinner/spinner.module.css
var spinner_module = __webpack_require__("i5gi");
var spinner_module_default = /*#__PURE__*/__webpack_require__.n(spinner_module);

// CONCATENATED MODULE: ./src/components/Spinner/spinner.js
var __jsx = external_react_default.a.createElement;



const Spinner = () => {
  return __jsx("div", {
    className: spinner_module_default.a.spinner_canvas
  }, __jsx("div", {
    className: "spinner"
  }, __jsx("div", {
    className: "lds-css ng-scope"
  }, __jsx("div", {
    className: spinner_module_default.a.lds_spinner
  }, __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null)))));
};

/* harmony default export */ var spinner = (Spinner);
// CONCATENATED MODULE: ./src/components/Spinner/index.js

/* harmony default export */ var components_Spinner = __webpack_exports__["a"] = (spinner);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i5gi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"spinner_canvas": "spinner_spinner_canvas__aZP5G",
	"spinner": "spinner_spinner__27soN",
	"lds_spinner": "spinner_lds_spinner__1ZPbt",
	"lds-spinner": "spinner_lds-spinner__2ride"
};


/***/ }),

/***/ "l2zP":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNzkuNjQ0LDQ3Ny44NzJsLTIwNy4yOTktMjA3LjczYy03Ljc5OC03Ljc5OC03Ljc5OC0yMC40ODYsMC4wMTUtMjguMjk5TDM3OS42NDMsMzQuMTI4DQoJCQljNy44MDMtNy44MTksNy43ODktMjAuNDgyLTAuMDI5LTI4LjI4NGMtNy44MTktNy44MDMtMjAuNDgyLTcuNzktMjguMjg0LDAuMDI5TDE0NC4wNjEsMjEzLjU3NA0KCQkJYy0yMy4zOTQsMjMuMzk0LTIzLjM5NCw2MS40NTktMC4wMTUsODQuODM4TDM1MS4zMyw1MDYuMTI3YzMuOTA3LDMuOTE1LDkuMDMxLDUuODczLDE0LjE1Nyw1Ljg3Mw0KCQkJYzUuMTExLDAsMTAuMjI0LTEuOTQ4LDE0LjEyOC01Ljg0NEMzODcuNDMzLDQ5OC4zNTQsMzg3LjQ0Niw0ODUuNjkxLDM3OS42NDQsNDc3Ljg3MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "pmdI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export phoneLoaded */
/* unused harmony export addPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeCountById; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tMhQ");

const phoneLoaded = newBooks => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* PHONE_LOADED */ "e"],
    payload: newBooks
  };
};
const addPrice = price => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_PRICE */ "a"],
    price: price
  };
};
const addProduct = product => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_PRODUCT */ "b"],
    product: product
  };
};
const deleteCart = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* DELETE_CART_ITEM */ "d"],
    id
  };
};
const changeModal = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_MODAL */ "c"],
    payload
  };
};
const changeCountById = (id, count) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_COUNT */ "f"],
    id,
    count
  };
};

/***/ }),

/***/ "tMhQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PHONE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_PRODUCT; });
/* unused harmony export CHANGE_LOADING */
/* unused harmony export CHANGE_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_CART_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_COUNT; });
const PHONE_LOADED = 'PHONE_LOADED';
const ADD_PRICE = 'ADD_PRICE';
const ADD_PRODUCT = 'ADD_PRODUCT';
const CHANGE_LOADING = 'LOADING';
const CHANGE_ERROR = 'ERROR';
const DELETE_CART_ITEM = 'DELETE_CART';
const CHANGE_MODAL = 'CHANGE_MODAL';
const UPDATE_COUNT = 'UPDATE_COUNT';

/***/ }),

/***/ "yUIA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/ProductCounter/product-counter.module.css
var product_counter_module = __webpack_require__("RSWt");
var product_counter_module_default = /*#__PURE__*/__webpack_require__.n(product_counter_module);

// CONCATENATED MODULE: ./src/components/ProductCounter/product-counter.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class product_counter_ProductCounter extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      count: this.props.count
    });

    _defineProperty(this, "plusClick", () => {
      this.setState(({
        count
      }) => {
        let num = isFinite(count) ? ++count : 1;
        this.update(num);
        return {
          count: num
        };
      });
    });

    _defineProperty(this, "minusClick", () => {
      this.setState(({
        count
      }) => {
        let num = 1;

        if (isFinite(count)) {
          num = count > 1 ? --count : 1;
        }

        this.update(num);
        return {
          count: num
        };
      });
    });

    _defineProperty(this, "counterChange", e => {
      this.setState({
        count: e.target.value
      });
      this.update(e.target.value);
    });

    _defineProperty(this, "update", val => {
      this.props.changeCount(val);
    });
  }

  render() {
    let count = this.state.count;
    return __jsx("div", {
      className: product_counter_module_default.a.product_counter
    }, __jsx("button", {
      onClick: this.minusClick,
      className: product_counter_module_default.a.btn_minus
    }, __jsx("i", {
      className: "fa fa-minus"
    })), __jsx("input", {
      onChange: this.counterChange,
      className: product_counter_module_default.a.input_counter,
      value: count
    }), __jsx("button", {
      onClick: this.plusClick,
      className: product_counter_module_default.a.btn_plus
    }, __jsx("i", {
      className: "fa fa-plus"
    })));
  }

}

/* harmony default export */ var product_counter = (product_counter_ProductCounter);
// CONCATENATED MODULE: ./src/components/ProductCounter/index.js

/* harmony default export */ var components_ProductCounter = __webpack_exports__["a"] = (product_counter);

/***/ })

/******/ });