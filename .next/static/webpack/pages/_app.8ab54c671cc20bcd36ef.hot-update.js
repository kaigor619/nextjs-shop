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

const VerticalModal = ({
  modal,
  cart,
  changeModal,
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
        lineNumber: 34,
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))), cart.length > 0 ? __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, cart_items) : __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  })))));
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

$RefreshReg$(_c, "ModalHeader");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiTW9kYWxIZWFkZXIiLCJjaGFuZ2VNb2RhbCIsImNsb3NlIiwiVmVydGljYWxNb2RhbCIsIm1vZGFsIiwiY2FydCIsImRlbGV0ZUNhcnRJdGVtIiwiY2hhbmdlQ291bnQiLCJjYXJ0X2l0ZW1zIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCIsInRvdGFsX3ByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsInByaWNlIiwiY291bnQiLCJsZW5ndGgiLCJiYWNrIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiQWN0aW9uIiwiY2hhbmdlQ291bnRCeUlkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXFCO0FBQ3ZDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBR0U7QUFBSyxXQUFPLEVBQUUsTUFBTUEsV0FBVyxDQUFDLEtBQUQsQ0FBL0I7QUFBd0MsYUFBUyxFQUFDLGFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUMsaURBQVY7QUFBaUIsYUFBUyxFQUFDLFlBQTNCO0FBQXdDLE9BQUcsRUFBQyxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixDQURGO0FBU0QsQ0FWRDs7S0FBTUYsVzs7QUFZTixNQUFNRyxhQUFhLEdBQUcsQ0FBQztBQUNyQkMsT0FEcUI7QUFFckJD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QUNhLE1BQUwsR0FBYyxDQUFkLElBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFTLEVBQUMsMkJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1csR0FEWCxFQUVFO0FBQ0UsYUFBUyxFQUFDLHFDQURaO0FBRUUsbUJBQVksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FQSixDQVhGLENBckJGLENBREY7QUFvREQsQ0E3RUQ7O01BQU1mLGE7O0FBK0VOLE1BQU1pQixlQUFlLEdBQUcsQ0FBQztBQUFFaEIsT0FBRjtBQUFTQztBQUFULENBQUQsS0FBcUI7QUFDM0MsTUFBSSxDQUFDRCxLQUFMLEVBQVksT0FBTztBQUFFQTtBQUFGLEdBQVA7QUFFWixTQUFPO0FBQUVBLFNBQUY7QUFBU0M7QUFBVCxHQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNZ0Isa0JBQWtCLEdBQUc7QUFDekJwQixhQUFXLEVBQUVxQiwwREFEWTtBQUV6QmhCLGdCQUFjLEVBQUVnQix5REFGUztBQUd6QmYsYUFBVyxFQUFFZSw4REFBc0JDO0FBSFYsQ0FBM0I7QUFNZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNsQixhQUE3QyxDQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhhYjU0YzY3MWNjMjBiY2QzNmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCAqIGFzIEFjdGlvbiBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJ1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9DYXJ0SXRlbSdcclxuaW1wb3J0IENhcnRFbXB0eSBmcm9tICcuL0NhcnRFbXB0eSdcclxuaW1wb3J0IGJhY2sgZnJvbSAnLi9iYWNrLnN2ZydcclxuaW1wb3J0IGNsb3NlIGZyb20gJy4vY2xvc2Uuc3ZnJ1xyXG5cclxuY29uc3QgTW9kYWxIZWFkZXIgPSAoeyBjaGFuZ2VNb2RhbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCI+XHJcbiAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfSBjbGFzc05hbWU9XCJjbG9zZV9tb2RhbFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjbG9zZX0gY2xhc3NOYW1lPVwiY2xvc2VfaWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBWZXJ0aWNhbE1vZGFsID0gKHtcclxuICBtb2RhbCxcclxuICBjYXJ0LFxyXG4gIGNoYW5nZU1vZGFsLFxyXG4gIGRlbGV0ZUNhcnRJdGVtLFxyXG4gIGNoYW5nZUNvdW50LFxyXG59KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgbGV0IGNhcnRfaXRlbXMgPSBjYXJ0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAga2V5PXtpdGVtLm5hbWUgKyBpdGVtLmlkfVxyXG4gICAgICAgIHByb2R1Y3Q9e2l0ZW19XHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdD17ZGVsZXRlQ2FydEl0ZW19XHJcbiAgICAgICAgY2hhbmdlQ291bnQ9e2NoYW5nZUNvdW50fVxyXG4gICAgICAgIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBsZXQgdG90YWxfcHJpY2UgPSBjYXJ0LnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgeyBwcmljZSwgY291bnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyArcHJpY2UgKiArY291bnRcclxuICB9LCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17bW9kYWx9XHJcbiAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2hlYWRlclwiPlxyXG4gICAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cImNsb3NlX21vZGFsXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Y2xvc2V9IGNsYXNzTmFtZT1cImNsb3NlX2ljb25cIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+e2NhcnRfaXRlbXN9PC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPENhcnRFbXB0eSAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgPGltZyBzcmM9e2JhY2t9IGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmdfaWNvblwiIGFsdD1cIlwiIC8+IENvbnRpbnVlXHJcbiAgICAgICAgICBzaG9wcGluZ1xyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwX3RvdGFsX2NoZWNrb3V0IGQtZmxleCBhbGlnbi1pdGVtcy1zbS1jZW50ZXIgZmxleC1zbS1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgPHNwYW4+VG90YWw6PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvdGFsX3ByaWNlXCI+e3RvdGFsX3ByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7Y2FydC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImJ0bl9jaGVja291dCBtbC1zbS0zIG1sLTBcIj5cclxuICAgICAgICAgICAgICBDaGVja291dHsnICd9XHJcbiAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGNoZWNrb3V0X2ljb24gZmEtY3JlZGl0LWNhcmQtYWx0XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBtb2RhbCwgY2FydCB9KSA9PiB7XHJcbiAgaWYgKCFtb2RhbCkgcmV0dXJuIHsgbW9kYWwgfVxyXG5cclxuICByZXR1cm4geyBtb2RhbCwgY2FydCB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBjaGFuZ2VNb2RhbDogQWN0aW9uLmNoYW5nZU1vZGFsLFxyXG4gIGRlbGV0ZUNhcnRJdGVtOiBBY3Rpb24uZGVsZXRlQ2FydCxcclxuICBjaGFuZ2VDb3VudDogQWN0aW9uLmNoYW5nZUNvdW50QnlJZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmVydGljYWxNb2RhbClcclxuLy8gZXhwb3J0IGRlZmF1bHQgVmVydGljYWxNb2RhbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9