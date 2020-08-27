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










const ModalHeader = ({
  changeModal
}) => {
  return __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
};

_c = ModalHeader;

const ModalBody = ({
  cart
}) => {
  if (cart.length == 0) return __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
        lineNumber: 27,
        columnNumber: 7
      }
    });
  });
  return __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  }, cart_items);
};

_c2 = ModalBody;

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
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }))));
};

_c3 = ModalFooter;

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
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(ModalHeader, {
    changeModal: changeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx(ModalBody, {
    cart: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  })))));
};

_c4 = VerticalModal;

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

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ModalHeader");
$RefreshReg$(_c2, "ModalBody");
$RefreshReg$(_c3, "ModalFooter");
$RefreshReg$(_c4, "VerticalModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiTW9kYWxIZWFkZXIiLCJjaGFuZ2VNb2RhbCIsImNsb3NlIiwiTW9kYWxCb2R5IiwiY2FydCIsImxlbmd0aCIsImNhcnRfaXRlbXMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIiwiZGVsZXRlQ2FydEl0ZW0iLCJjaGFuZ2VDb3VudCIsIk1vZGFsRm9vdGVyIiwidG90YWxfcHJpY2UiLCJyZWR1Y2UiLCJwcmV2aW91c1ZhbHVlIiwicHJpY2UiLCJjb3VudCIsImJhY2siLCJWZXJ0aWNhbE1vZGFsIiwibW9kYWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJBY3Rpb24iLCJjaGFuZ2VDb3VudEJ5SWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDdkMsU0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFHRTtBQUFLLFdBQU8sRUFBRSxNQUFNQSxXQUFXLENBQUMsS0FBRCxDQUEvQjtBQUF3QyxhQUFTLEVBQUMsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQyxpREFBVjtBQUFpQixhQUFTLEVBQUMsWUFBM0I7QUFBd0MsT0FBRyxFQUFDLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLENBREY7QUFTRCxDQVZEOztLQUFNRixXOztBQVdOLE1BQU1HLFNBQVMsR0FB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QUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQkwsV0FBL0IsTUFGRixDQURGLEVBTUdWLElBQUksQ0FBQ0MsTUFBTCxHQUFjLENBQWQsSUFDQyxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLGFBQVMsRUFBQywyQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDVyxHQURYLEVBRUU7QUFDRSxhQUFTLEVBQUMscUNBRFo7QUFFRSxtQkFBWSxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVBKLENBWEYsQ0FYRixDQURGO0FBMENELENBdkREOztNQUFNZSxhOztBQXlETixNQUFNRSxlQUFlLEdBQUcsQ0FBQztBQUFFRCxPQUFGO0FBQVNqQjtBQUFULENBQUQsS0FBcUI7QUFDM0MsTUFBSSxDQUFDaUIsS0FBTCxFQUFZLE9BQU87QUFBRUE7QUFBRixHQUFQO0FBRVosU0FBTztBQUFFQSxTQUFGO0FBQVNqQjtBQUFULEdBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1tQixrQkFBa0IsR0FBRztBQUN6QnRCLGFBQVcsRUFBRXVCLDBEQURZO0FBRXpCYixnQkFBYyxFQUFFYSx5REFGUztBQUd6QlosYUFBVyxFQUFFWSw4REFBc0JDO0FBSFYsQ0FBM0I7QUFNZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNILGFBQTdDLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjRlY2M0NmJhZmQ4MWM5MWE5NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0ICogYXMgQWN0aW9uIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuL0NhcnRJdGVtJ1xyXG5pbXBvcnQgQ2FydEVtcHR5IGZyb20gJy4vQ2FydEVtcHR5J1xyXG5pbXBvcnQgYmFjayBmcm9tICcuL2JhY2suc3ZnJ1xyXG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5zdmcnXHJcblxyXG5jb25zdCBNb2RhbEhlYWRlciA9ICh7IGNoYW5nZU1vZGFsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIj5cclxuICAgICAgPGgzPkNhcnQ8L2gzPlxyXG5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cImNsb3NlX21vZGFsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZV9pY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgTW9kYWxCb2R5ID0gKHsgY2FydCB9KSA9PiB7XHJcbiAgaWYgKGNhcnQubGVuZ3RoID09IDApIHJldHVybiA8Q2FydEVtcHR5IC8+XHJcblxyXG4gIGxldCBjYXJ0X2l0ZW1zID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgIGtleT17aXRlbS5uYW1lICsgaXRlbS5pZH1cclxuICAgICAgICBwcm9kdWN0PXtpdGVtfVxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q9e2RlbGV0ZUNhcnRJdGVtfVxyXG4gICAgICAgIGNoYW5nZUNvdW50PXtjaGFuZ2VDb3VudH1cclxuICAgICAgICBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPntjYXJ0X2l0ZW1zfTwvZGl2PlxyXG59XHJcbmNvbnN0IE1vZGFsRm9vdGVyID0gKHsgY2FydCB9KSA9PiB7XHJcbiAgbGV0IHRvdGFsX3ByaWNlID0gY2FydC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIHsgcHJpY2UsIGNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgK3ByaWNlICogK2NvdW50XHJcbiAgfSwgMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBzcmM9e2JhY2t9IGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmdfaWNvblwiIGFsdD1cIlwiIC8+IENvbnRpbnVlXHJcbiAgICAgICAgc2hvcHBpbmdcclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwX3RvdGFsX2NoZWNrb3V0IGQtZmxleCBhbGlnbi1pdGVtcy1zbS1jZW50ZXIgZmxleC1zbS1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICA8c3Bhbj5Ub3RhbDo8L3NwYW4+eycgJ31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsX3ByaWNlXCI+e3RvdGFsX3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImJ0bl9jaGVja291dCBtbC1zbS0zIG1sLTBcIj5cclxuICAgICAgICAgICAgQ2hlY2tvdXR7JyAnfVxyXG4gICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGNoZWNrb3V0X2ljb24gZmEtY3JlZGl0LWNhcmQtYWx0XCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFZlcnRpY2FsTW9kYWwgPSAoe1xyXG4gIG1vZGFsLFxyXG4gIGNhcnQsXHJcbiAgY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW0sXHJcbiAgY2hhbmdlQ291bnQsXHJcbn0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4gbnVsbFxyXG5cclxuICBsZXQgdG90YWxfcHJpY2UgPSBjYXJ0LnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgeyBwcmljZSwgY291bnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyArcHJpY2UgKiArY291bnRcclxuICB9LCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17bW9kYWx9XHJcbiAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxIZWFkZXIgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfSAvPlxyXG5cclxuICAgICAgPE1vZGFsQm9keSBjYXJ0PXtjYXJ0fSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgPGltZyBzcmM9e2JhY2t9IGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmdfaWNvblwiIGFsdD1cIlwiIC8+IENvbnRpbnVlXHJcbiAgICAgICAgICBzaG9wcGluZ1xyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwX3RvdGFsX2NoZWNrb3V0IGQtZmxleCBhbGlnbi1pdGVtcy1zbS1jZW50ZXIgZmxleC1zbS1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgPHNwYW4+VG90YWw6PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsX3ByaWNlXCI+e3RvdGFsX3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7Y2FydC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImJ0bl9jaGVja291dCBtbC1zbS0zIG1sLTBcIj5cclxuICAgICAgICAgICAgICBDaGVja291dHsnICd9XHJcbiAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGNoZWNrb3V0X2ljb24gZmEtY3JlZGl0LWNhcmQtYWx0XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBtb2RhbCwgY2FydCB9KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIHsgbW9kYWwgfVxyXG5cclxuICByZXR1cm4geyBtb2RhbCwgY2FydCB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBjaGFuZ2VNb2RhbDogQWN0aW9uLmNoYW5nZU1vZGFsLFxyXG4gIGRlbGV0ZUNhcnRJdGVtOiBBY3Rpb24uZGVsZXRlQ2FydCxcclxuICBjaGFuZ2VDb3VudDogQWN0aW9uLmNoYW5nZUNvdW50QnlJZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmVydGljYWxNb2RhbClcclxuLy8gZXhwb3J0IGRlZmF1bHQgVmVydGljYWxNb2RhbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9