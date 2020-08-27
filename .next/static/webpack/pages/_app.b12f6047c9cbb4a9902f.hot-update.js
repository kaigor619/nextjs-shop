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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    show: modal,
    onHide: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))), cart.length > 0 ? __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, cart_items) : __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiVmVydGljYWxNb2RhbCIsIm1vZGFsIiwiY2hhbmdlTW9kYWwiLCJjYXJ0IiwiZGVsZXRlQ2FydEl0ZW0iLCJjaGFuZ2VDb3VudCIsImNhcnRfaXRlbXMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIiwidG90YWxfcHJpY2UiLCJyZWR1Y2UiLCJwcmV2aW91c1ZhbHVlIiwicHJpY2UiLCJjb3VudCIsImNsb3NlIiwibGVuZ3RoIiwiYmFjayIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkFjdGlvbiIsImNoYW5nZUNvdW50QnlJZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0FBQ3JCQyxPQURxQjtBQUVyQkMsYUFGcUI7QUFHckJDLE1BSHFCO0FBSXJCQyxnQkFKcUI7QUFLckJDO0FBTHFCLENBQUQsS0FNaEI7QUFDSixNQUFJLENBQUNKLEtBQUwsRUFBWSxPQUFPLElBQVA7QUFFWixNQUFJSyxVQUFVLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFVQyxJQUFELElBQVU7QUFDbEMsV0FDRSxNQUFDLGlEQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQUwsR0FBWUQsSUFBSSxDQUFDRSxFQUR4QjtBQUVFLGFBQU8sRUFBRUYsSUFGWDtBQUdFLG1CQUFhLEVBQUVKLGNBSGpCO0FBSUUsaUJBQVcsRUFBRUMsV0FKZjtBQUtFLGlCQUFXLEVBQUVILFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBU0QsR0FWZ0IsQ0FBakI7QUFZQSxNQUFJUyxXQUFXLEdBQUdSLElBQUksQ0FBQ1MsTUFBTCxDQUFZLENBQUND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aUIsa0JBQWtCLEdBQUc7QUFDekJsQixhQUFXLEVBQUVtQiwwREFEWTtBQUV6QmpCLGdCQUFjLEVBQUVpQix5REFGUztBQUd6QmhCLGFBQVcsRUFBRWdCLDhEQUFzQkM7QUFIVixDQUEzQjtBQU1lQywwSEFBTyxDQUFDSixlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3BCLGFBQTdDLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjEyZjYwNDdjOWNiYjRhOTkwMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0ICogYXMgQWN0aW9uIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuL0NhcnRJdGVtJ1xyXG5pbXBvcnQgQ2FydEVtcHR5IGZyb20gJy4vQ2FydEVtcHR5J1xyXG5pbXBvcnQgYmFjayBmcm9tICcuL2JhY2suc3ZnJ1xyXG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5zdmcnXHJcblxyXG5jb25zdCBWZXJ0aWNhbE1vZGFsID0gKHtcclxuICBtb2RhbCxcclxuICBjaGFuZ2VNb2RhbCxcclxuICBjYXJ0LFxyXG4gIGRlbGV0ZUNhcnRJdGVtLFxyXG4gIGNoYW5nZUNvdW50LFxyXG59KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgbGV0IGNhcnRfaXRlbXMgPSBjYXJ0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAga2V5PXtpdGVtLm5hbWUgKyBpdGVtLmlkfVxyXG4gICAgICAgIHByb2R1Y3Q9e2l0ZW19XHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdD17ZGVsZXRlQ2FydEl0ZW19XHJcbiAgICAgICAgY2hhbmdlQ291bnQ9e2NoYW5nZUNvdW50fVxyXG4gICAgICAgIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBsZXQgdG90YWxfcHJpY2UgPSBjYXJ0LnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgeyBwcmljZSwgY291bnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyArcHJpY2UgKiArY291bnRcclxuICB9LCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17bW9kYWx9XHJcbiAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiPlxyXG4gICAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cImNsb3NlX21vZGFsXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Y2xvc2V9IGNsYXNzTmFtZT1cImNsb3NlX2ljb25cIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+e2NhcnRfaXRlbXN9PC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPENhcnRFbXB0eSAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgPGltZyBzcmM9e2JhY2t9IGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmdfaWNvblwiIGFsdD1cIlwiIC8+IENvbnRpbnVlXHJcbiAgICAgICAgICBzaG9wcGluZ1xyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwX3RvdGFsX2NoZWNrb3V0IGQtZmxleCBhbGlnbi1pdGVtcy1zbS1jZW50ZXIgZmxleC1zbS1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgPHNwYW4+VG90YWw6PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsX3ByaWNlXCI+e3RvdGFsX3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7Y2FydC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImJ0bl9jaGVja291dCBtbC1zbS0zIG1sLTBcIj5cclxuICAgICAgICAgICAgICBDaGVja291dHsnICd9XHJcbiAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGNoZWNrb3V0X2ljb24gZmEtY3JlZGl0LWNhcmQtYWx0XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBtb2RhbCwgY2FydCB9KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIHsgbW9kYWwgfVxyXG5cclxuICByZXR1cm4geyBtb2RhbCwgY2FydCB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBjaGFuZ2VNb2RhbDogQWN0aW9uLmNoYW5nZU1vZGFsLFxyXG4gIGRlbGV0ZUNhcnRJdGVtOiBBY3Rpb24uZGVsZXRlQ2FydCxcclxuICBjaGFuZ2VDb3VudDogQWN0aW9uLmNoYW5nZUNvdW50QnlJZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmVydGljYWxNb2RhbClcclxuLy8gZXhwb3J0IGRlZmF1bHQgVmVydGljYWxNb2RhbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9