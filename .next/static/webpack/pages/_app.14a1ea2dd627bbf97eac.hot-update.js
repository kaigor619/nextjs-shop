webpackHotUpdate_N_E("pages/_app",{

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










const ButtonCheckout = ({
  changeModal
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Checkout", ' ', __jsx("i", {
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
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
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
    src: _close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
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
  cart
}) => {
  if (cart.length == 0) return __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 32
    }
  });
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
  let total_price = cart.reduce((previousValue, {
    price,
    count
  }) => {
    return previousValue + +price * +count;
  }, 0);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    show: modal,
    onHide: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(ModalHeader, {
    changeModal: changeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), __jsx(ModalBody, {
    cart: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })))));
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
  changeModal: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeModal"],
  deleteCartItem: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCart"],
  changeCount: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeCountById"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(VerticalModal)); // export default VerticalModal

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiQnV0dG9uQ2hlY2tvdXQiLCJjaGFuZ2VNb2RhbCIsIkNvbnRpbnVlU2hvcHBpbmciLCJiYWNrIiwiTW9kYWxIZWFkZXIiLCJjbG9zZSIsIk1vZGFsQm9keSIsImNhcnQiLCJsZW5ndGgiLCJjYXJ0X2l0ZW1zIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCIsImRlbGV0ZUNhcnRJdGVtIiwiY2hhbmdlQ291bnQiLCJNb2RhbEZvb3RlciIsInRvdGFsX3ByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsInByaWNlIiwiY291bnQiLCJWZXJ0aWNhbE1vZGFsIiwibW9kYWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJBY3Rpb24iLCJjaGFuZ2VDb3VudEJ5SWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDMUMsU0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLGFBQVMsRUFBQywyQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDVyxHQURYLEVBRUU7QUFBRyxhQUFTLEVBQUMscUNBQWI7QUFBbUQsbUJBQVksTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQVBEOztLQUFNRCxjOztBQVFOLE1BQU1FLGdCQUFnQixHQUFHLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQXFCO0FBQzVDLFNBQ0U7QUFDRSxRQUFJLEVBQUMsR0FEUDtBQUVFLGFBQVMsRUFBQyxvQ0FGWjtBQUdFLFdBQU8sRUFBRSxN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QUFXLEVBQUVXLDhEQUFzQkM7QUFIVixDQUEzQjtBQU1lQywwSEFBTyxDQUFDSixlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q0gsYUFBN0MsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNGExZWEyZGQ2MjdiYmY5N2VhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBBY3Rpb24gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IENhcnRJdGVtIGZyb20gJy4vQ2FydEl0ZW0nXHJcbmltcG9ydCBDYXJ0RW1wdHkgZnJvbSAnLi9DYXJ0RW1wdHknXHJcbmltcG9ydCBiYWNrIGZyb20gJy4vYmFjay5zdmcnXHJcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnN2ZydcclxuXHJcbmNvbnN0IEJ1dHRvbkNoZWNrb3V0ID0gKHsgY2hhbmdlTW9kYWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiYnRuX2NoZWNrb3V0IG1sLXNtLTMgbWwtMFwiPlxyXG4gICAgICBDaGVja291dHsnICd9XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGNoZWNrb3V0X2ljb24gZmEtY3JlZGl0LWNhcmQtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcbmNvbnN0IENvbnRpbnVlU2hvcHBpbmcgPSAoeyBjaGFuZ2VNb2RhbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e2JhY2t9IGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmdfaWNvblwiIGFsdD1cIlwiIC8+IENvbnRpbnVlIHNob3BwaW5nXHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNb2RhbEhlYWRlciA9ICh7IGNoYW5nZU1vZGFsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIj5cclxuICAgICAgPGgzPkNhcnQ8L2gzPlxyXG5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cImNsb3NlX21vZGFsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZV9pY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgTW9kYWxCb2R5ID0gKHsgY2FydCB9KSA9PiB7XHJcbiAgaWYgKGNhcnQubGVuZ3RoID09IDApIHJldHVybiA8Q2FydEVtcHR5IC8+XHJcblxyXG4gIGxldCBjYXJ0X2l0ZW1zID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgIGtleT17aXRlbS5uYW1lICsgaXRlbS5pZH1cclxuICAgICAgICBwcm9kdWN0PXtpdGVtfVxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q9e2RlbGV0ZUNhcnRJdGVtfVxyXG4gICAgICAgIGNoYW5nZUNvdW50PXtjaGFuZ2VDb3VudH1cclxuICAgICAgICBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPntjYXJ0X2l0ZW1zfTwvZGl2PlxyXG59XHJcbmNvbnN0IE1vZGFsRm9vdGVyID0gKHsgY2FydCB9KSA9PiB7XHJcbiAgbGV0IHRvdGFsX3ByaWNlID0gY2FydC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIHsgcHJpY2UsIGNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgK3ByaWNlICogK2NvdW50XHJcbiAgfSwgMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgPENvbnRpbnVlU2hvcHBpbmcgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwX3RvdGFsX2NoZWNrb3V0IGQtZmxleCBhbGlnbi1pdGVtcy1zbS1jZW50ZXIgZmxleC1zbS1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICA8c3Bhbj5Ub3RhbDo8L3NwYW4+eycgJ31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsX3ByaWNlXCI+e3RvdGFsX3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgJiYgPEJ1dHRvbkNoZWNrb3V0IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVmVydGljYWxNb2RhbCA9ICh7XHJcbiAgbW9kYWwsXHJcbiAgY2FydCxcclxuICBjaGFuZ2VNb2RhbCxcclxuICBkZWxldGVDYXJ0SXRlbSxcclxuICBjaGFuZ2VDb3VudCxcclxufSkgPT4ge1xyXG4gIGlmICghbW9kYWwpIHJldHVybiBudWxsXHJcblxyXG4gIGxldCB0b3RhbF9wcmljZSA9IGNhcnQucmVkdWNlKChwcmV2aW91c1ZhbHVlLCB7IHByaWNlLCBjb3VudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSArICtwcmljZSAqICtjb3VudFxyXG4gIH0sIDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXttb2RhbH1cclxuICAgICAgb25IaWRlPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbEhlYWRlciBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9IC8+XHJcblxyXG4gICAgICA8TW9kYWxCb2R5IGNhcnQ9e2NhcnR9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmcgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICA8aW1nIHNyYz17YmFja30gY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZ19pY29uXCIgYWx0PVwiXCIgLz4gQ29udGludWVcclxuICAgICAgICAgIHNob3BwaW5nXHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBfdG90YWxfY2hlY2tvdXQgZC1mbGV4IGFsaWduLWl0ZW1zLXNtLWNlbnRlciBmbGV4LXNtLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Ub3RhbDo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG90YWxfcHJpY2VcIj57dG90YWxfcHJpY2V9JDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiYnRuX2NoZWNrb3V0IG1sLXNtLTMgbWwtMFwiPlxyXG4gICAgICAgICAgICAgIENoZWNrb3V0eycgJ31cclxuICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgY2hlY2tvdXRfaWNvbiBmYS1jcmVkaXQtY2FyZC1hbHRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsLCBjYXJ0IH0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4geyBtb2RhbCB9XHJcblxyXG4gIHJldHVybiB7IG1vZGFsLCBjYXJ0IH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGNoYW5nZU1vZGFsOiBBY3Rpb24uY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW06IEFjdGlvbi5kZWxldGVDYXJ0LFxyXG4gIGNoYW5nZUNvdW50OiBBY3Rpb24uY2hhbmdlQ291bnRCeUlkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWZXJ0aWNhbE1vZGFsKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBWZXJ0aWNhbE1vZGFsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=