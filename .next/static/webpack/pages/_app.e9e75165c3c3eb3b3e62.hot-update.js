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
  let props = {
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
  }, props, {
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
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(VerticalModal)); // export default VerticalModal

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiQnV0dG9uQ2hlY2tvdXQiLCJjaGFuZ2VNb2RhbCIsIkNvbnRpbnVlU2hvcHBpbmciLCJiYWNrIiwiTW9kYWxIZWFkZXIiLCJjbG9zZSIsIk1vZGFsQm9keSIsImNhcnQiLCJkZWxldGVDYXJ0SXRlbSIsImNoYW5nZUNvdW50IiwibGVuZ3RoIiwiY2FydF9pdGVtcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiaWQiLCJNb2RhbEZvb3RlciIsInRvdGFsX3ByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsInByaWNlIiwiY291bnQiLCJWZXJ0aWNhbE1vZGFsIiwibW9kYWwiLCJwcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkFjdGlvbiIsImNoYW5nZUNvdW50QnlJZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXFCO0FBQzFDLFNBQ0UsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFTLEVBQUMsMkJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBRyxhQUFTLEVBQUMscUNBQWI7QUFBbUQsbUJBQVksTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQVBEOztLQUFNRCxjOztBQVFOLE1BQU1FLGdCQUFnQixHQUFHLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQXFCO0FBQzVDLFNBQ0U7QUFDRSxRQUFJLEVBQUMsR0FEUDtBQUVFLGFBQVMsRUFBQyxvQ0FGWjtBQUdFLFdBQU8sRUFBRSxN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QUFBU2hCO0FBQVQsR0FBUDtBQUNELENBSkQ7O0FBTUEsTUFBTW1CLGtCQUFrQixHQUFHO0FBQ3pCekIsYUFBVyxFQUFFMEIsMERBRFk7QUFFekJuQixnQkFBYyxFQUFFbUIseURBRlM7QUFHekJsQixhQUFXLEVBQUVrQiw4REFBc0JDO0FBSFYsQ0FBM0I7QUFNZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNKLGFBQTdDLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTllNzUxNjVjM2MzZWIzYjNlNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0ICogYXMgQWN0aW9uIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuL0NhcnRJdGVtJ1xyXG5pbXBvcnQgQ2FydEVtcHR5IGZyb20gJy4vQ2FydEVtcHR5J1xyXG5pbXBvcnQgYmFjayBmcm9tICcuL2JhY2suc3ZnJ1xyXG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5zdmcnXHJcblxyXG5jb25zdCBCdXR0b25DaGVja291dCA9ICh7IGNoYW5nZU1vZGFsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImJ0bl9jaGVja291dCBtbC1zbS0zIG1sLTBcIj5cclxuICAgICAgQ2hlY2tvdXRcclxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgY2hlY2tvdXRfaWNvbiBmYS1jcmVkaXQtY2FyZC1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuY29uc3QgQ29udGludWVTaG9wcGluZyA9ICh7IGNoYW5nZU1vZGFsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8aW1nIHNyYz17YmFja30gY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZ19pY29uXCIgYWx0PVwiXCIgLz4gQ29udGludWUgc2hvcHBpbmdcclxuICAgIDwvYT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE1vZGFsSGVhZGVyID0gKHsgY2hhbmdlTW9kYWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiPlxyXG4gICAgICA8aDM+Q2FydDwvaDM+XHJcblxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPVwiY2xvc2VfbW9kYWxcIj5cclxuICAgICAgICA8aW1nIHNyYz17Y2xvc2V9IGNsYXNzTmFtZT1cImNsb3NlX2ljb25cIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5jb25zdCBNb2RhbEJvZHkgPSAoeyBjYXJ0LCBjaGFuZ2VNb2RhbCwgZGVsZXRlQ2FydEl0ZW0sIGNoYW5nZUNvdW50IH0pID0+IHtcclxuICBpZiAoY2FydC5sZW5ndGggPT0gMCkgcmV0dXJuIDxDYXJ0RW1wdHkgLz5cclxuXHJcbiAgbGV0IGNhcnRfaXRlbXMgPSBjYXJ0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAga2V5PXtpdGVtLm5hbWUgKyBpdGVtLmlkfVxyXG4gICAgICAgIHByb2R1Y3Q9e2l0ZW19XHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdD17ZGVsZXRlQ2FydEl0ZW19XHJcbiAgICAgICAgY2hhbmdlQ291bnQ9e2NoYW5nZUNvdW50fVxyXG4gICAgICAgIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9KVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+e2NhcnRfaXRlbXN9PC9kaXY+XHJcbn1cclxuY29uc3QgTW9kYWxGb290ZXIgPSAoeyBjYXJ0IH0pID0+IHtcclxuICBsZXQgdG90YWxfcHJpY2UgPSBjYXJ0LnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgeyBwcmljZSwgY291bnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyArcHJpY2UgKiArY291bnRcclxuICB9LCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICA8Q29udGludWVTaG9wcGluZyBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBfdG90YWxfY2hlY2tvdXQgZC1mbGV4IGFsaWduLWl0ZW1zLXNtLWNlbnRlciBmbGV4LXNtLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgIDxzcGFuPlRvdGFsOjwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG90YWxfcHJpY2VcIj57dG90YWxfcHJpY2V9JDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2NhcnQubGVuZ3RoID4gMCAmJiA8QnV0dG9uQ2hlY2tvdXQgLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBWZXJ0aWNhbE1vZGFsID0gKHtcclxuICBtb2RhbCxcclxuICBjYXJ0LFxyXG4gIGNoYW5nZU1vZGFsLFxyXG4gIGRlbGV0ZUNhcnRJdGVtLFxyXG4gIGNoYW5nZUNvdW50LFxyXG59KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgbGV0IHByb3BzID0ge1xyXG4gICAgY2hhbmdlTW9kYWwsXHJcbiAgICBkZWxldGVDYXJ0SXRlbSxcclxuICAgIGNoYW5nZUNvdW50LFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e21vZGFsfVxyXG4gICAgICBvbkhpZGU9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPE1vZGFsSGVhZGVyIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH0gLz5cclxuICAgICAgPE1vZGFsQm9keSBjYXJ0PXtjYXJ0fSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDxNb2RhbEZvb3RlciBjYXJ0PXtjYXJ0fSAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsLCBjYXJ0IH0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4geyBtb2RhbCB9XHJcblxyXG4gIHJldHVybiB7IG1vZGFsLCBjYXJ0IH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGNoYW5nZU1vZGFsOiBBY3Rpb24uY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW06IEFjdGlvbi5kZWxldGVDYXJ0LFxyXG4gIGNoYW5nZUNvdW50OiBBY3Rpb24uY2hhbmdlQ291bnRCeUlkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWZXJ0aWNhbE1vZGFsKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBWZXJ0aWNhbE1vZGFsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=