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
  }), __jsx(ModalFooter, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiQnV0dG9uQ2hlY2tvdXQiLCJjaGFuZ2VNb2RhbCIsIkNvbnRpbnVlU2hvcHBpbmciLCJiYWNrIiwiTW9kYWxIZWFkZXIiLCJjbG9zZSIsIk1vZGFsQm9keSIsImNhcnQiLCJsZW5ndGgiLCJjYXJ0X2l0ZW1zIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCIsImRlbGV0ZUNhcnRJdGVtIiwiY2hhbmdlQ291bnQiLCJNb2RhbEZvb3RlciIsInRvdGFsX3ByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsInByaWNlIiwiY291bnQiLCJWZXJ0aWNhbE1vZGFsIiwibW9kYWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJBY3Rpb24iLCJjaGFuZ2VDb3VudEJ5SWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDMUMsU0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLGFBQVMsRUFBQywyQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFRTtBQUFHLGFBQVMsRUFBQyxxQ0FBYjtBQUFtRCxtQkFBWSxNQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBUEQ7O0tBQU1ELGM7O0FBUU4sTUFBTUUsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFRDtBQUFGLENBQUQsS0FBcUI7QUFDNUMsU0FDRTtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsYUFBUyxFQUFDLG9DQUZaO0FBR0UsV0FBTyxFQUFFLE1BQU1BLFdBQVcs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QVA7QUFFWixTQUFPO0FBQUVBLFNBQUY7QUFBU2hCO0FBQVQsR0FBUDtBQUNELENBSkQ7O0FBTUEsTUFBTWtCLGtCQUFrQixHQUFHO0FBQ3pCeEIsYUFBVyxFQUFFeUIsMERBRFk7QUFFekJaLGdCQUFjLEVBQUVZLHlEQUZTO0FBR3pCWCxhQUFXLEVBQUVXLDhEQUFzQkM7QUFIVixDQUEzQjtBQU1lQywwSEFBTyxDQUFDSixlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q0gsYUFBN0MsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NzcyZTBjNmQ1NWZmZWFiZWI2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBBY3Rpb24gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IENhcnRJdGVtIGZyb20gJy4vQ2FydEl0ZW0nXHJcbmltcG9ydCBDYXJ0RW1wdHkgZnJvbSAnLi9DYXJ0RW1wdHknXHJcbmltcG9ydCBiYWNrIGZyb20gJy4vYmFjay5zdmcnXHJcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnN2ZydcclxuXHJcbmNvbnN0IEJ1dHRvbkNoZWNrb3V0ID0gKHsgY2hhbmdlTW9kYWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiYnRuX2NoZWNrb3V0IG1sLXNtLTMgbWwtMFwiPlxyXG4gICAgICBDaGVja291dFxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBjaGVja291dF9pY29uIGZhLWNyZWRpdC1jYXJkLWFsdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgIDwvQnV0dG9uPlxyXG4gIClcclxufVxyXG5jb25zdCBDb250aW51ZVNob3BwaW5nID0gKHsgY2hhbmdlTW9kYWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPVwiI1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmcgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxpbWcgc3JjPXtiYWNrfSBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nX2ljb25cIiBhbHQ9XCJcIiAvPiBDb250aW51ZSBzaG9wcGluZ1xyXG4gICAgPC9hPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTW9kYWxIZWFkZXIgPSAoeyBjaGFuZ2VNb2RhbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCI+XHJcbiAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfSBjbGFzc05hbWU9XCJjbG9zZV9tb2RhbFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjbG9zZX0gY2xhc3NOYW1lPVwiY2xvc2VfaWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IE1vZGFsQm9keSA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gIGlmIChjYXJ0Lmxlbmd0aCA9PSAwKSByZXR1cm4gPENhcnRFbXB0eSAvPlxyXG5cclxuICBsZXQgY2FydF9pdGVtcyA9IGNhcnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FydEl0ZW1cclxuICAgICAgICBrZXk9e2l0ZW0ubmFtZSArIGl0ZW0uaWR9XHJcbiAgICAgICAgcHJvZHVjdD17aXRlbX1cclxuICAgICAgICByZW1vdmVQcm9kdWN0PXtkZWxldGVDYXJ0SXRlbX1cclxuICAgICAgICBjaGFuZ2VDb3VudD17Y2hhbmdlQ291bnR9XHJcbiAgICAgICAgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj57Y2FydF9pdGVtc308L2Rpdj5cclxufVxyXG5jb25zdCBNb2RhbEZvb3RlciA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gIGxldCB0b3RhbF9wcmljZSA9IGNhcnQucmVkdWNlKChwcmV2aW91c1ZhbHVlLCB7IHByaWNlLCBjb3VudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSArICtwcmljZSAqICtjb3VudFxyXG4gIH0sIDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgIDxDb250aW51ZVNob3BwaW5nIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH0gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcF90b3RhbF9jaGVja291dCBkLWZsZXggYWxpZ24taXRlbXMtc20tY2VudGVyIGZsZXgtc20tcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbFwiPlxyXG4gICAgICAgICAgPHNwYW4+VG90YWw6PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3RhbF9wcmljZVwiPnt0b3RhbF9wcmljZX0kPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Y2FydC5sZW5ndGggPiAwICYmIDxCdXR0b25DaGVja291dCAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFZlcnRpY2FsTW9kYWwgPSAoe1xyXG4gIG1vZGFsLFxyXG4gIGNhcnQsXHJcbiAgY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW0sXHJcbiAgY2hhbmdlQ291bnQsXHJcbn0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4gbnVsbFxyXG5cclxuICBsZXQgdG90YWxfcHJpY2UgPSBjYXJ0LnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgeyBwcmljZSwgY291bnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyArcHJpY2UgKiArY291bnRcclxuICB9LCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17bW9kYWx9XHJcbiAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxIZWFkZXIgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfSAvPlxyXG5cclxuICAgICAgPE1vZGFsQm9keSBjYXJ0PXtjYXJ0fSAvPlxyXG5cclxuICAgICAgPE1vZGFsRm9vdGVyIC8+XHJcbiAgICA8L01vZGFsPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgbW9kYWwsIGNhcnQgfSkgPT4ge1xyXG4gIGlmICghbW9kYWwpIHJldHVybiB7IG1vZGFsIH1cclxuXHJcbiAgcmV0dXJuIHsgbW9kYWwsIGNhcnQgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgY2hhbmdlTW9kYWw6IEFjdGlvbi5jaGFuZ2VNb2RhbCxcclxuICBkZWxldGVDYXJ0SXRlbTogQWN0aW9uLmRlbGV0ZUNhcnQsXHJcbiAgY2hhbmdlQ291bnQ6IEFjdGlvbi5jaGFuZ2VDb3VudEJ5SWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZlcnRpY2FsTW9kYWwpXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsTW9kYWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==