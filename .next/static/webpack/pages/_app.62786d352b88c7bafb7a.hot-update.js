webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Modal/CartItem.js":
/*!******************************************!*\
  !*** ./src/components/Modal/CartItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductCounter */ "./src/components/ProductCounter/index.js");
var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Modal\\CartItem.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CartItem = ({
  product,
  removeProduct,
  changeCount,
  changeModal
}) => {
  _s();

  let {
    name,
    price,
    previewUrl,
    id,
    count
  } = product;
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function clickProduct() {
    changeModal(false);
    router.push('/shop/product/[id]', `/shop/product/${id}`);
  }

  return __jsx("div", {
    className: "product_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row flex-nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-sm-2 col-3 px-0 d-flex align-items-center justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image_preview",
    onClick: clickProduct,
    role: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: previewUrl,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-sm-9 col-auto  d-flex align-items-center flex-nowrap flex-fill",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters w-100 flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-sm-4 col-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("span", {
    role: "button",
    className: "text-primary",
    onClick: clickProduct,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, name)), __jsx("div", {
    className: "col-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wrap mt-sm-0 mt-3 d-flex justify-content-sm-around justify-content-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(_ProductCounter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    count: count,
    changeCount: c => changeCount(id, c),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "full_price ml-sm-0 ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, price, "$"))))), __jsx("div", {
    className: "col-1 d-flex align-items-center justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "remove_product",
    onClick: () => removeProduct(id),
    role: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-trash remove_icon",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })))));
};

_s(CartItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = CartItem;
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

var _c;

$RefreshReg$(_c, "CartItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartItem */ "./src/components/Modal/CartItem.js");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./back.svg */ "./src/components/Modal/back.svg");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_back_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./close.svg */ "./src/components/Modal/close.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_close_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const CartEmpty = () => {
  return __jsx("div", {
    className: "cart_empty",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Cart empty"));
};

_c = CartEmpty;

const VerticalModal = ({
  modal,
  changeModal,
  cart,
  deleteCartItem,
  changeCount
}) => {
  if (!modal) return null;
  let cart_items = cart.map(item => {
    return __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.name + item.id,
      product: item,
      removeProduct: deleteCartItem,
      changeCount: changeCount,
      changeModal: changeModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    });
  });
  let total_price = cart.reduce((previousValue, {
    price,
    count
  }) => {
    return previousValue + +price * +count;
  }, 0);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("style", {
    global: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, `

        .cart_empty{
          padding: 100px 0;
          text-align:center;
        }
        .close_modal{
          padding: 10px;
          cursor: pointer;
        }



        .close_modal img{
          width: 15px;
        }
          .modal_header {
            display: flex;
            justify-content: space-between;
            align-items:center;
            padding: 10px 30px;
            border-bottom: 1px solid silver;
          }

          .modal_header h3{
              margin-bottom:0px;
              font-weight:400;
          }

          .modal_body{
            padding: 0 30px;
            flex:1;
          }

          .modal_body .product_item{
              padding: 15px 0;
          }

          .modal_body .image_preview img{
            max-width:70px;
            width:100%;
            height:auto;
          }
          .modal_body .remove_icon{
              font-size:20px;
              color:red;
          }

          .modal_body .full_price{
            font-size:18px;
          }


          .modal_footer{
            padding: 15px 30px;
            border-top:1px solid silver;
          }
          .modal_footer .total_price{
            font-size: 20px;
            margin-left:10px;
            font-weight:700;
          }
          .modal_footer .total{
            font-size: 20px;
          }
          .modal_footer .back_shopping_icon{
            width:10px;
          }

          .modal_footer .checkout_icon{
            font-size:12px;
            margin-left:6px;
          }

          .modal_footer .btn_checkout{
            font-size:16px;
          }

          @media (min-width: 576px){
            .modal-dialog {
                max-width: 700px;
                margin: 1.75rem auto;
            } 
          }

          @media screen and (max-width:576px){
            .modal{
              padding:0;
            }
            .modal_body{
              overflow-y:scroll;
            }
            .modal_body .full_price{
              font-size: 16px;
            }
            .modal-dialog-centered{
              height:100%;
              min-height:100%;
              max-height:100%;
            }
            .modal-content{
              height:100%;
            }
            .modal-dialog{
              margin:0;
            }
            .back_shopping{
              display: none;
            }
            .wrap_total_checkout{
              width:100%;
            }
            .modal_footer .total{
              display: flex;
              align-items:center;
              justify-content:space-between;
              margin-bottom:10px;
              margin-right:0;
            }
            .modal_footer {
              padding: 10px;
              border-top:none;
              box-shadow: 0px 0px 4px 0 #b1b1b1;
            }
            .modal_header {
              padding: 10px 20px;
              border-bottom:none;
              box-shadow: 0px 0px 4px 0 #b1b1b1;
            }
            .modal_footer .total .total_price{
              margin:0;
            }
            .modal_footer .checkout_icon{
              font-size: 14px;
            }
          }
        `), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    show: modal,
    onHide: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }))), cart.length > 0 ? __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, cart_items) : __jsx(CartEmpty, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }))))));
};

_c2 = VerticalModal;

const mapStateToProps = ({
  modal,
  cart
}) => {
  if (!modal) return {
    modal
  };
  return {
    modal,
    cart
  };
};

const mapDispatchToProps = {
  changeModal: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeModal"],
  deleteCartItem: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCart"],
  changeCount: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeCountById"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(VerticalModal)); // export default VerticalModal

var _c, _c2;

$RefreshReg$(_c, "CartEmpty");
$RefreshReg$(_c2, "VerticalModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwicHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJjaGFuZ2VDb3VudCIsImNoYW5nZU1vZGFsIiwibmFtZSIsInByaWNlIiwicHJldmlld1VybCIsImlkIiwiY291bnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGlja1Byb2R1Y3QiLCJwdXNoIiwiYyIsIkNhcnRFbXB0eSIsIlZlcnRpY2FsTW9kYWwiLCJtb2RhbCIsImNhcnQiLCJkZWxldGVDYXJ0SXRlbSIsImNhcnRfaXRlbXMiLCJtYXAiLCJpdGVtIiwidG90YWxfcHJpY2UiLCJyZWR1Y2UiLCJwcmV2aW91c1ZhbHVlIiwiY2xvc2UiLCJsZW5ndGgiLCJiYWNrIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiQWN0aW9uIiwiY2hhbmdlQ291bnRCeUlkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUMsU0FBRjtBQUFXQyxlQUFYO0FBQTBCQyxhQUExQjtBQUF1Q0M7QUFBdkMsQ0FBRCxLQUEwRDtBQUFBOztBQUN6RSxNQUFJO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQyxjQUFmO0FBQTJCQyxNQUEzQjtBQUErQkM7QUFBL0IsTUFBeUNSLE9BQTdDO0FBRUEsTUFBSVMsTUFBTSxHQUFHQyw2REFBUyxFQUF0Qjs7QUFFQSxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCUixlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FNLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLG9CQUFaLEVBQW1DLGlCQUFnQkwsRUFBRyxFQUF0RDtBQUNEOztBQUNELFNBQ0U7QUFBSyxh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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUNzQixHQUR0QixFQUVFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JMLFdBQS9CLE1BRkYsQ0FERixFQU1HTCxJQUFJLENBQUNTLE1BQUwsR0FBYyxDQUFkLElBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFTLEVBQUMsMkJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1csR0FEWCxFQUVFO0FBQ0UsYUFBUyxFQUFDLHFDQURaO0FBRUUsbUJBQVksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FQSixDQVhGLENBckJGLENBNUlGLENBREY7QUFpTUQsQ0ExTkQ7O01BQU1YLGE7O0FBNE5OLE1BQU1hLGVBQWUsR0FBRyxDQUFDO0FBQUVaLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQXFCO0FBQzNDLE1BQUksQ0FBQ0QsS0FBTCxFQUFZLE9BQU87QUFBRUE7QUFBRixHQUFQO0FBRVosU0FBTztBQUFFQSxTQUFGO0FBQVNDO0FBQVQsR0FBUDtBQUNELENBSkQ7O0FBTUEsTUFBTVksa0JBQWtCLEdBQUc7QUFDekIxQixhQUFXLEVBQUUyQiwwREFEWTtBQUV6QlosZ0JBQWMsRUFBRVkseURBRlM7QUFHekI1QixhQUFXLEVBQUU0Qiw4REFBc0JDO0FBSFYsQ0FBM0I7QUFNZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNkLGFBQTdDLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjI3ODZkMzUyYjg4YzdiYWZiN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBQcm9kdWN0Q291bnRlciBmcm9tICcuLi9Qcm9kdWN0Q291bnRlcidcclxuXHJcbmNvbnN0IENhcnRJdGVtID0gKHsgcHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCwgY2hhbmdlQ291bnQsIGNoYW5nZU1vZGFsIH0pID0+IHtcclxuICBsZXQgeyBuYW1lLCBwcmljZSwgcHJldmlld1VybCwgaWQsIGNvdW50IH0gPSBwcm9kdWN0XHJcblxyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBjbGlja1Byb2R1Y3QoKSB7XHJcbiAgICBjaGFuZ2VNb2RhbChmYWxzZSlcclxuICAgIHJvdXRlci5wdXNoKCcvc2hvcC9wcm9kdWN0L1tpZF0nLCBgL3Nob3AvcHJvZHVjdC8ke2lkfWApXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfaXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLTMgcHgtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfcHJldmlld1wiIG9uQ2xpY2s9e2NsaWNrUHJvZHVjdH0gcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJldmlld1VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTkgY29sLWF1dG8gIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ub3dyYXAgZmxleC1maWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIHctMTAwIGZsZXgtc20tcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tQcm9kdWN0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIG10LXNtLTAgbXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LXNtLWFyb3VuZCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Q291bnRlclxyXG4gICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNvdW50PXsoYykgPT4gY2hhbmdlQ291bnQoaWQsIGMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ1bGxfcHJpY2UgbWwtc20tMCBtbC0zXCI+e3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZV9wcm9kdWN0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlUHJvZHVjdChpZCl9XHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaCByZW1vdmVfaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBBY3Rpb24gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IENhcnRJdGVtIGZyb20gJy4vQ2FydEl0ZW0nXHJcbmltcG9ydCBiYWNrIGZyb20gJy4vYmFjay5zdmcnXHJcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnN2ZydcclxuXHJcbmNvbnN0IENhcnRFbXB0eSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X2VtcHR5XCI+XHJcbiAgICAgIDxoMj5DYXJ0IGVtcHR5PC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVmVydGljYWxNb2RhbCA9ICh7XHJcbiAgbW9kYWwsXHJcbiAgY2hhbmdlTW9kYWwsXHJcbiAgY2FydCxcclxuICBkZWxldGVDYXJ0SXRlbSxcclxuICBjaGFuZ2VDb3VudCxcclxufSkgPT4ge1xyXG4gIGlmICghbW9kYWwpIHJldHVybiBudWxsXHJcblxyXG4gIGxldCBjYXJ0X2l0ZW1zID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgIGtleT17aXRlbS5uYW1lICsgaXRlbS5pZH1cclxuICAgICAgICBwcm9kdWN0PXtpdGVtfVxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q9e2RlbGV0ZUNhcnRJdGVtfVxyXG4gICAgICAgIGNoYW5nZUNvdW50PXtjaGFuZ2VDb3VudH1cclxuICAgICAgICBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgbGV0IHRvdGFsX3ByaWNlID0gY2FydC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIHsgcHJpY2UsIGNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgK3ByaWNlICogK2NvdW50XHJcbiAgfSwgMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWw9XCJ0cnVlXCI+XHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgLmNhcnRfZW1wdHl7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZV9tb2RhbHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC5jbG9zZV9tb2RhbCBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAubW9kYWxfaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubW9kYWxfaGVhZGVyIGgze1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubW9kYWxfYm9keXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1vZGFsX2JvZHkgLnByb2R1Y3RfaXRlbXtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1vZGFsX2JvZHkgLmltYWdlX3ByZXZpZXcgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6NzBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9kYWxfYm9keSAucmVtb3ZlX2ljb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tb2RhbF9ib2R5IC5mdWxsX3ByaWNle1xyXG4gICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgLm1vZGFsX2Zvb3RlcntcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9kYWxfZm9vdGVyIC50b3RhbF9wcmljZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9kYWxfZm9vdGVyIC50b3RhbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vZGFsX2Zvb3RlciAuYmFja19zaG9wcGluZ19pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDoxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tb2RhbF9mb290ZXIgLmNoZWNrb3V0X2ljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1vZGFsX2Zvb3RlciAuYnRuX2NoZWNrb3V0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgICAgICAgICAgLm1vZGFse1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxfYm9keXtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxfYm9keSAuZnVsbF9wcmljZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsLWRpYWxvZy1jZW50ZXJlZHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbC1kaWFsb2d7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhY2tfc2hvcHBpbmd7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud3JhcF90b3RhbF9jaGVja291dHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbF9mb290ZXIgLnRvdGFse1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxfZm9vdGVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6bm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwICNiMWIxYjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwICNiMWIxYjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsX2Zvb3RlciAudG90YWwgLnRvdGFsX3ByaWNle1xyXG4gICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbF9mb290ZXIgLmNoZWNrb3V0X2ljb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgICBzaG93PXttb2RhbH1cclxuICAgICAgICBvbkhpZGU9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDM+Q2FydDwvaDM+XHJcblxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cImNsb3NlX21vZGFsXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjbG9zZX0gY2xhc3NOYW1lPVwiY2xvc2VfaWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2NhcnQubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPntjYXJ0X2l0ZW1zfTwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2FydEVtcHR5IC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YmFja30gY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZ19pY29uXCIgYWx0PVwiXCIgLz4gQ29udGludWVcclxuICAgICAgICAgICAgc2hvcHBpbmdcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBfdG90YWxfY2hlY2tvdXQgZC1mbGV4IGFsaWduLWl0ZW1zLXNtLWNlbnRlciBmbGV4LXNtLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VG90YWw6PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG90YWxfcHJpY2VcIj57dG90YWxfcHJpY2V9JDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Y2FydC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiYnRuX2NoZWNrb3V0IG1sLXNtLTMgbWwtMFwiPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2tvdXR7JyAnfVxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgY2hlY2tvdXRfaWNvbiBmYS1jcmVkaXQtY2FyZC1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBtb2RhbCwgY2FydCB9KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIHsgbW9kYWwgfVxyXG5cclxuICByZXR1cm4geyBtb2RhbCwgY2FydCB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBjaGFuZ2VNb2RhbDogQWN0aW9uLmNoYW5nZU1vZGFsLFxyXG4gIGRlbGV0ZUNhcnRJdGVtOiBBY3Rpb24uZGVsZXRlQ2FydCxcclxuICBjaGFuZ2VDb3VudDogQWN0aW9uLmNoYW5nZUNvdW50QnlJZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmVydGljYWxNb2RhbClcclxuLy8gZXhwb3J0IGRlZmF1bHQgVmVydGljYWxNb2RhbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9