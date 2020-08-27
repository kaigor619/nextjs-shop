webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartItem */ "./src/components/Modal/CartItem.js");
/* harmony import */ var _CartEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CartEmpty */ "./src/components/Modal/CartEmpty.js");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back.svg */ "./src/components/Modal/back.svg");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_back_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./close.svg */ "./src/components/Modal/close.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_close_svg__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const ButtonCheckout = ({
  changeModal
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Checkout", __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

_c = ButtonCheckout;

const ContinueShopping = ({
  changeModal
}) => {
  return __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), " Continue shopping");
};

_c2 = ContinueShopping;

const ModalHeader = ({
  changeModal
}) => {
  return __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

_c3 = ModalHeader;

const ModalBody = ({
  cart,
  changeModal,
  deleteCartItem,
  changeCount
}) => {
  if (cart.length == 0) return __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 32
    }
  });
  let cart_items = cart.map(item => {
    return __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.name + item.id,
      product: item,
      removeProduct: deleteCartItem,
      changeCount: changeCount,
      changeModal: changeModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    });
  });
  return __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 10
    }
  }, cart_items);
};

_c4 = ModalBody;

const ModalFooter = ({
  cart
}) => {
  let total_price = cart.reduce((previousValue, {
    price,
    count
  }) => {
    return previousValue + +price * +count;
  }, 0);
  return __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(ContinueShopping, {
    changeModal: changeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, total_price, "$")), cart.length > 0 && __jsx(ButtonCheckout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  })));
};

_c5 = ModalFooter;

const VerticalModal = ({
  modal,
  cart,
  changeModal,
  deleteCartItem,
  changeCount
}) => {
  if (!modal) return null;
  let propsBody = {
    changeModal,
    deleteCartItem,
    changeCount
  };
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    show: modal,
    onHide: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(ModalHeader, {
    changeModal: changeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), __jsx(ModalBody, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    cart: cart
  }, propsBody, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  })), __jsx(ModalFooter, {
    cart: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }));
};

_c6 = VerticalModal;

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
  changeModal: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["changeModal"],
  deleteCartItem: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCart"],
  changeCount: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["changeCountById"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(VerticalModal));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ButtonCheckout");
$RefreshReg$(_c2, "ContinueShopping");
$RefreshReg$(_c3, "ModalHeader");
$RefreshReg$(_c4, "ModalBody");
$RefreshReg$(_c5, "ModalFooter");
$RefreshReg$(_c6, "VerticalModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiQnV0dG9uQ2hlY2tvdXQiLCJjaGFuZ2VNb2RhbCIsIkNvbnRpbnVlU2hvcHBpbmciLCJiYWNrIiwiTW9kYWxIZWFkZXIiLCJjbG9zZSIsIk1vZGFsQm9keSIsImNhcnQiLCJkZWxldGVDYXJ0SXRlbSIsImNoYW5nZUNvdW50IiwibGVuZ3RoIiwiY2FydF9pdGVtcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiaWQiLCJNb2RhbEZvb3RlciIsInRvdGFsX3ByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsInByaWNlIiwiY291bnQiLCJWZXJ0aWNhbE1vZGFsIiwibW9kYWwiLCJwcm9wc0JvZHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJBY3Rpb24iLCJjaGFuZ2VDb3VudEJ5SWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUMxQyxTQUNFLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsYUFBUyxFQUFDLDJCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVFO0FBQUcsYUFBUyxFQUFDLHFDQUFiO0FBQW1ELG1CQUFZLE1BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FQRDs7S0FBTUQsYzs7QUFRTixNQUFNRSxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUFxQjtBQUM1QyxTQUNFO0FBQ0UsUUFBSSxFQUFDLEdBRFA7QUFFRSxhQUFTLEVBQUMsb0NBRlo7QUFHRSxXQUFPLEVB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U0FBRjtBQUFTaEI7QUFBVCxHQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNbUIsa0JBQWtCLEdBQUc7QUFDekJ6QixhQUFXLEVBQUUwQiwwREFEWTtBQUV6Qm5CLGdCQUFjLEVBQUVtQix5REFGUztBQUd6QmxCLGFBQVcsRUFBRWtCLDhEQUFzQkM7QUFIVixDQUEzQjtBQU1lQywwSEFBTyxDQUFDSixlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q0osYUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIwZGYyNGU1ZjQyNGQxMzAwNjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCAqIGFzIEFjdGlvbiBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJ1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9DYXJ0SXRlbSdcclxuaW1wb3J0IENhcnRFbXB0eSBmcm9tICcuL0NhcnRFbXB0eSdcclxuaW1wb3J0IGJhY2sgZnJvbSAnLi9iYWNrLnN2ZydcclxuaW1wb3J0IGNsb3NlIGZyb20gJy4vY2xvc2Uuc3ZnJ1xyXG5cclxuY29uc3QgQnV0dG9uQ2hlY2tvdXQgPSAoeyBjaGFuZ2VNb2RhbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJidG5fY2hlY2tvdXQgbWwtc20tMyBtbC0wXCI+XHJcbiAgICAgIENoZWNrb3V0XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGNoZWNrb3V0X2ljb24gZmEtY3JlZGl0LWNhcmQtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcbmNvbnN0IENvbnRpbnVlU2hvcHBpbmcgPSAoeyBjaGFuZ2VNb2RhbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e2JhY2t9IGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmdfaWNvblwiIGFsdD1cIlwiIC8+IENvbnRpbnVlIHNob3BwaW5nXHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNb2RhbEhlYWRlciA9ICh7IGNoYW5nZU1vZGFsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIj5cclxuICAgICAgPGgzPkNhcnQ8L2gzPlxyXG5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cImNsb3NlX21vZGFsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZV9pY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgTW9kYWxCb2R5ID0gKHsgY2FydCwgY2hhbmdlTW9kYWwsIGRlbGV0ZUNhcnRJdGVtLCBjaGFuZ2VDb3VudCB9KSA9PiB7XHJcbiAgaWYgKGNhcnQubGVuZ3RoID09IDApIHJldHVybiA8Q2FydEVtcHR5IC8+XHJcblxyXG4gIGxldCBjYXJ0X2l0ZW1zID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgIGtleT17aXRlbS5uYW1lICsgaXRlbS5pZH1cclxuICAgICAgICBwcm9kdWN0PXtpdGVtfVxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q9e2RlbGV0ZUNhcnRJdGVtfVxyXG4gICAgICAgIGNoYW5nZUNvdW50PXtjaGFuZ2VDb3VudH1cclxuICAgICAgICBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPntjYXJ0X2l0ZW1zfTwvZGl2PlxyXG59XHJcbmNvbnN0IE1vZGFsRm9vdGVyID0gKHsgY2FydCB9KSA9PiB7XHJcbiAgbGV0IHRvdGFsX3ByaWNlID0gY2FydC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIHsgcHJpY2UsIGNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgK3ByaWNlICogK2NvdW50XHJcbiAgfSwgMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgPENvbnRpbnVlU2hvcHBpbmcgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwX3RvdGFsX2NoZWNrb3V0IGQtZmxleCBhbGlnbi1pdGVtcy1zbS1jZW50ZXIgZmxleC1zbS1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICA8c3Bhbj5Ub3RhbDo8L3NwYW4+eycgJ31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsX3ByaWNlXCI+e3RvdGFsX3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgJiYgPEJ1dHRvbkNoZWNrb3V0IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVmVydGljYWxNb2RhbCA9ICh7XHJcbiAgbW9kYWwsXHJcbiAgY2FydCxcclxuICBjaGFuZ2VNb2RhbCxcclxuICBkZWxldGVDYXJ0SXRlbSxcclxuICBjaGFuZ2VDb3VudCxcclxufSkgPT4ge1xyXG4gIGlmICghbW9kYWwpIHJldHVybiBudWxsXHJcblxyXG4gIGxldCBwcm9wc0JvZHkgPSB7XHJcbiAgICBjaGFuZ2VNb2RhbCxcclxuICAgIGRlbGV0ZUNhcnRJdGVtLFxyXG4gICAgY2hhbmdlQ291bnQsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17bW9kYWx9XHJcbiAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxIZWFkZXIgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfSAvPlxyXG4gICAgICA8TW9kYWxCb2R5IGNhcnQ9e2NhcnR9IHsuLi5wcm9wc0JvZHl9IC8+XHJcbiAgICAgIDxNb2RhbEZvb3RlciBjYXJ0PXtjYXJ0fSAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsLCBjYXJ0IH0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4geyBtb2RhbCB9XHJcblxyXG4gIHJldHVybiB7IG1vZGFsLCBjYXJ0IH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGNoYW5nZU1vZGFsOiBBY3Rpb24uY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW06IEFjdGlvbi5kZWxldGVDYXJ0LFxyXG4gIGNoYW5nZUNvdW50OiBBY3Rpb24uY2hhbmdlQ291bnRCeUlkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWZXJ0aWNhbE1vZGFsKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9