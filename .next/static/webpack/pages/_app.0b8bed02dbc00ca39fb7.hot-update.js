webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Modal/CartEmpty.js":
/*!*******************************************!*\
  !*** ./src/components/Modal/CartEmpty.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartEmpty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Modal\\CartEmpty.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function CartEmpty() {
  return __jsx("div", {
    className: "cart_empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "Cart empty"));
}
_c = CartEmpty;

var _c;

$RefreshReg$(_c, "CartEmpty");

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
/* harmony import */ var _CartEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartEmpty */ "./src/components/Modal/CartEmpty.js");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./back.svg */ "./src/components/Modal/back.svg");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_back_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./close.svg */ "./src/components/Modal/close.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_close_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










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
        lineNumber: 22,
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
      lineNumber: 38,
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
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }))), cart.length > 0 ? __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, cart_items) : __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 15
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }))))));
};

_c = VerticalModal;

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

var _c;

$RefreshReg$(_c, "VerticalModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvQ2FydEVtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJDYXJ0RW1wdHkiLCJWZXJ0aWNhbE1vZGFsIiwibW9kYWwiLCJjaGFuZ2VNb2RhbCIsImNhcnQiLCJkZWxldGVDYXJ0SXRlbSIsImNoYW5nZUNvdW50IiwiY2FydF9pdGVtcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiaWQiLCJ0b3RhbF9wcmljZSIsInJlZHVjZSIsInByZXZpb3VzVmFsdWUiLCJwcmljZSIsImNvdW50IiwiY2xvc2UiLCJsZW5ndGgiLCJiYWNrIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiQWN0aW9uIiwiY2hhbmdlQ291bnRCeUlkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGO0FBS0Q7S0FOdUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUNyQkMsT0FEcUI7QUFFckJDLGFBRnFCO0FBR3JCQyxNQUhxQjtBQUlyQkMsZ0JBSnFCO0FBS3JCQztBQUxxQixDQUFELEtBTWhCO0FBQ0osTUFBSSxDQUFDSixLQUFMLEVBQVksT0FBTyxJQUFQO0FBRVosTUFBSUssVUFBVSxHQUFHSCxJQUFJ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RUFFRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCUCxXQUEvQixNQUZGLENBREYsRUFNR1IsSUFBSSxDQUFDYyxNQUFMLEdBQWMsQ0FBZCxJQUNDLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsYUFBUyxFQUFDLDJCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNXLEdBRFgsRUFFRTtBQUNFLGFBQVMsRUFBQyxxQ0FEWjtBQUVFLG1CQUFZLE1BRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBUEosQ0FYRixDQXJCRixDQTVJRixDQURGO0FBaU1ELENBMU5EOztLQUFNakIsYTs7QUE0Tk4sTUFBTW1CLGVBQWUsR0FBRyxDQUFDO0FBQUVsQixPQUFGO0FBQVNFO0FBQVQsQ0FBRCxLQUFxQjtBQUMzQyxNQUFJLENBQUNGLEtBQUwsRUFBWSxPQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUVaLFNBQU87QUFBRUEsU0FBRjtBQUFTRTtBQUFULEdBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1pQixrQkFBa0IsR0FBRztBQUN6QmxCLGFBQVcsRUFBRW1CLDBEQURZO0FBRXpCakIsZ0JBQWMsRUFBRWlCLHlEQUZTO0FBR3pCaEIsYUFBVyxFQUFFZ0IsOERBQXNCQztBQUhWLENBQTNCO0FBTWVDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDcEIsYUFBN0MsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wYjhiZWQwMmRiYzAwY2EzOWZiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydEVtcHR5KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfZW1wdHlcIj5cclxuICAgICAgPGgyPkNhcnQgZW1wdHk8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0ICogYXMgQWN0aW9uIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuL0NhcnRJdGVtJ1xyXG5pbXBvcnQgQ2FydEVtcHR5IGZyb20gJy4vQ2FydEVtcHR5J1xyXG5pbXBvcnQgYmFjayBmcm9tICcuL2JhY2suc3ZnJ1xyXG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5zdmcnXHJcblxyXG5jb25zdCBWZXJ0aWNhbE1vZGFsID0gKHtcclxuICBtb2RhbCxcclxuICBjaGFuZ2VNb2RhbCxcclxuICBjYXJ0LFxyXG4gIGRlbGV0ZUNhcnRJdGVtLFxyXG4gIGNoYW5nZUNvdW50LFxyXG59KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgbGV0IGNhcnRfaXRlbXMgPSBjYXJ0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAga2V5PXtpdGVtLm5hbWUgKyBpdGVtLmlkfVxyXG4gICAgICAgIHByb2R1Y3Q9e2l0ZW19XHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdD17ZGVsZXRlQ2FydEl0ZW19XHJcbiAgICAgICAgY2hhbmdlQ291bnQ9e2NoYW5nZUNvdW50fVxyXG4gICAgICAgIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBsZXQgdG90YWxfcHJpY2UgPSBjYXJ0LnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgeyBwcmljZSwgY291bnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyArcHJpY2UgKiArY291bnRcclxuICB9LCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGdsb2JhbD1cInRydWVcIj5cclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICAuY2FydF9lbXB0eXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsb3NlX21vZGFse1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLmNsb3NlX21vZGFsIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIC5tb2RhbF9oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tb2RhbF9oZWFkZXIgaDN7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tb2RhbF9ib2R5e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubW9kYWxfYm9keSAucHJvZHVjdF9pdGVte1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubW9kYWxfYm9keSAuaW1hZ2VfcHJldmlldyBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDo3MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2RhbF9ib2R5IC5yZW1vdmVfaWNvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1vZGFsX2JvZHkgLmZ1bGxfcHJpY2V7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAubW9kYWxfZm9vdGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2RhbF9mb290ZXIgLnRvdGFsX3ByaWNle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2RhbF9mb290ZXIgLnRvdGFse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9kYWxfZm9vdGVyIC5iYWNrX3Nob3BwaW5nX2ljb257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1vZGFsX2Zvb3RlciAuY2hlY2tvdXRfaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubW9kYWxfZm9vdGVyIC5idG5fY2hlY2tvdXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAgICAgICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgICAgICAubW9kYWx7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbF9ib2R5e1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbF9ib2R5IC5mdWxsX3ByaWNle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWwtZGlhbG9nLWNlbnRlcmVke1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsLWRpYWxvZ3tcclxuICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFja19zaG9wcGluZ3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53cmFwX3RvdGFsX2NoZWNrb3V0e1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsX2Zvb3RlciAudG90YWx7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbF9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDpub25lO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDAgI2IxYjFiMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxfaGVhZGVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDAgI2IxYjFiMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxfZm9vdGVyIC50b3RhbCAudG90YWxfcHJpY2V7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsX2Zvb3RlciAuY2hlY2tvdXRfaWNvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgIHNob3c9e21vZGFsfVxyXG4gICAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPVwiY2xvc2VfbW9kYWxcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZV9pY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Y2FydC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+e2NhcnRfaXRlbXN9PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxDYXJ0RW1wdHkgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmcgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtiYWNrfSBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nX2ljb25cIiBhbHQ9XCJcIiAvPiBDb250aW51ZVxyXG4gICAgICAgICAgICBzaG9wcGluZ1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcF90b3RhbF9jaGVja291dCBkLWZsZXggYWxpZ24taXRlbXMtc20tY2VudGVyIGZsZXgtc20tcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbDo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3RhbF9wcmljZVwiPnt0b3RhbF9wcmljZX0kPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJidG5fY2hlY2tvdXQgbWwtc20tMyBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgICBDaGVja291dHsnICd9XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBjaGVja291dF9pY29uIGZhLWNyZWRpdC1jYXJkLWFsdFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsLCBjYXJ0IH0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4geyBtb2RhbCB9XHJcblxyXG4gIHJldHVybiB7IG1vZGFsLCBjYXJ0IH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGNoYW5nZU1vZGFsOiBBY3Rpb24uY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW06IEFjdGlvbi5kZWxldGVDYXJ0LFxyXG4gIGNoYW5nZUNvdW50OiBBY3Rpb24uY2hhbmdlQ291bnRCeUlkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWZXJ0aWNhbE1vZGFsKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBWZXJ0aWNhbE1vZGFsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=