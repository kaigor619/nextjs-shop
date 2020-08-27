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
        lineNumber: 51,
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
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(ModalHeader, {
    changeModal: changeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx(ModalBody, {
    cart: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  })))));
};

_c3 = VerticalModal;

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

var _c, _c2, _c3;

$RefreshReg$(_c, "ModalHeader");
$RefreshReg$(_c2, "ModalBody");
$RefreshReg$(_c3, "VerticalModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiTW9kYWxIZWFkZXIiLCJjaGFuZ2VNb2RhbCIsImNsb3NlIiwiTW9kYWxCb2R5IiwiY2FydCIsImxlbmd0aCIsImNhcnRfaXRlbXMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIiwiZGVsZXRlQ2FydEl0ZW0iLCJjaGFuZ2VDb3VudCIsIlZlcnRpY2FsTW9kYWwiLCJtb2RhbCIsInRvdGFsX3ByaWNlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsInByaWNlIiwiY291bnQiLCJiYWNrIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiQWN0aW9uIiwiY2hhbmdlQ291bnRCeUlkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXFCO0FBQ3ZDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBR0U7QUFBSyxXQUFPLEVBQUUsTUFBTUEsV0FBVyxDQUFDLEtBQUQsQ0FBL0I7QUFBd0MsYUFBUyxFQUFDLGFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUMsaURBQVY7QUFBaUIsYUFBUyxFQUFDLFlBQTNCO0FBQXdDLE9BQUcsRUFBQyxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixDQURGO0FBU0QsQ0FWRDs7S0FBTUYsVzs7QUFXTixNQUFNRyxTQUFTLEdBQUcsQ0FBQztBQUFFQztB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QUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUNzQixHQUR0QixFQUVFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JMLFdBQS9CLE1BRkYsQ0FERixFQU1HWCxJQUFJLENBQUNDLE1BQUwsR0FBYyxDQUFkLElBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFTLEVBQUMsMkJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1csR0FEWCxFQUVFO0FBQ0UsYUFBUyxFQUFDLHFDQURaO0FBRUUsbUJBQVksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FQSixDQVhGLENBWEYsQ0FERjtBQTBDRCxDQW5FRDs7TUFBTVEsYTs7QUFxRU4sTUFBTVEsZUFBZSxHQUFHLENBQUM7QUFBRVAsT0FBRjtBQUFTVjtBQUFULENBQUQsS0FBcUI7QUFDM0MsTUFBSSxDQUFDVSxLQUFMLEVBQVksT0FBTztBQUFFQTtBQUFGLEdBQVA7QUFFWixTQUFPO0FBQUVBLFNBQUY7QUFBU1Y7QUFBVCxHQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNa0Isa0JBQWtCLEdBQUc7QUFDekJyQixhQUFXLEVBQUVzQiwwREFEWTtBQUV6QlosZ0JBQWMsRUFBRVkseURBRlM7QUFHekJYLGFBQVcsRUFBRVcsOERBQXNCQztBQUhWLENBQTNCO0FBTWVDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDVCxhQUE3QyxDQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZlZWU3YjdjYzgxNGY4MjA0MGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCAqIGFzIEFjdGlvbiBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJ1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9DYXJ0SXRlbSdcclxuaW1wb3J0IENhcnRFbXB0eSBmcm9tICcuL0NhcnRFbXB0eSdcclxuaW1wb3J0IGJhY2sgZnJvbSAnLi9iYWNrLnN2ZydcclxuaW1wb3J0IGNsb3NlIGZyb20gJy4vY2xvc2Uuc3ZnJ1xyXG5cclxuY29uc3QgTW9kYWxIZWFkZXIgPSAoeyBjaGFuZ2VNb2RhbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfaGVhZGVyXCI+XHJcbiAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfSBjbGFzc05hbWU9XCJjbG9zZV9tb2RhbFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjbG9zZX0gY2xhc3NOYW1lPVwiY2xvc2VfaWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IE1vZGFsQm9keSA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gIGlmIChjYXJ0Lmxlbmd0aCA9PSAwKSByZXR1cm4gPENhcnRFbXB0eSAvPlxyXG5cclxuICBsZXQgY2FydF9pdGVtcyA9IGNhcnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FydEl0ZW1cclxuICAgICAgICBrZXk9e2l0ZW0ubmFtZSArIGl0ZW0uaWR9XHJcbiAgICAgICAgcHJvZHVjdD17aXRlbX1cclxuICAgICAgICByZW1vdmVQcm9kdWN0PXtkZWxldGVDYXJ0SXRlbX1cclxuICAgICAgICBjaGFuZ2VDb3VudD17Y2hhbmdlQ291bnR9XHJcbiAgICAgICAgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2JvZHlcIj57Y2FydF9pdGVtc308L2Rpdj5cclxufVxyXG5cclxuY29uc3QgVmVydGljYWxNb2RhbCA9ICh7XHJcbiAgbW9kYWwsXHJcbiAgY2FydCxcclxuICBjaGFuZ2VNb2RhbCxcclxuICBkZWxldGVDYXJ0SXRlbSxcclxuICBjaGFuZ2VDb3VudCxcclxufSkgPT4ge1xyXG4gIGlmICghbW9kYWwpIHJldHVybiBudWxsXHJcblxyXG4gIGxldCBjYXJ0X2l0ZW1zID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgIGtleT17aXRlbS5uYW1lICsgaXRlbS5pZH1cclxuICAgICAgICBwcm9kdWN0PXtpdGVtfVxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q9e2RlbGV0ZUNhcnRJdGVtfVxyXG4gICAgICAgIGNoYW5nZUNvdW50PXtjaGFuZ2VDb3VudH1cclxuICAgICAgICBjaGFuZ2VNb2RhbD17Y2hhbmdlTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgbGV0IHRvdGFsX3ByaWNlID0gY2FydC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIHsgcHJpY2UsIGNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgK3ByaWNlICogK2NvdW50XHJcbiAgfSwgMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e21vZGFsfVxyXG4gICAgICBvbkhpZGU9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPE1vZGFsSGVhZGVyIGNoYW5nZU1vZGFsPXtjaGFuZ2VNb2RhbH0gLz5cclxuXHJcbiAgICAgIDxNb2RhbEJvZHkgY2FydD17Y2FydH0gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZm9vdGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFja19zaG9wcGluZyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIDxpbWcgc3JjPXtiYWNrfSBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nX2ljb25cIiBhbHQ9XCJcIiAvPiBDb250aW51ZVxyXG4gICAgICAgICAgc2hvcHBpbmdcclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcF90b3RhbF9jaGVja291dCBkLWZsZXggYWxpZ24taXRlbXMtc20tY2VudGVyIGZsZXgtc20tcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlRvdGFsOjwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3RhbF9wcmljZVwiPnt0b3RhbF9wcmljZX0kPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge2NhcnQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJidG5fY2hlY2tvdXQgbWwtc20tMyBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgQ2hlY2tvdXR7JyAnfVxyXG4gICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBjaGVja291dF9pY29uIGZhLWNyZWRpdC1jYXJkLWFsdFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgbW9kYWwsIGNhcnQgfSkgPT4ge1xyXG4gIGlmICghbW9kYWwpIHJldHVybiB7IG1vZGFsIH1cclxuXHJcbiAgcmV0dXJuIHsgbW9kYWwsIGNhcnQgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgY2hhbmdlTW9kYWw6IEFjdGlvbi5jaGFuZ2VNb2RhbCxcclxuICBkZWxldGVDYXJ0SXRlbTogQWN0aW9uLmRlbGV0ZUNhcnQsXHJcbiAgY2hhbmdlQ291bnQ6IEFjdGlvbi5jaGFuZ2VDb3VudEJ5SWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZlcnRpY2FsTW9kYWwpXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsTW9kYWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==