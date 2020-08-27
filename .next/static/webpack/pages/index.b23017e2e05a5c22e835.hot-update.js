webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Card/card.js":
/*!*************************************!*\
  !*** ./src/components/Card/card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.module.css */ "./src/components/Card/card.module.css");
/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Card\\card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Card = ({
  price,
  name,
  previewUrl,
  id,
  store,
  addProduct,
  in_cart
}) => {
  function handleClick() {
    addProduct({
      count: 1,
      id,
      price,
      name,
      previewUrl
    });
  }

  let classnames = _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_add_cart + ' btn btn-primary ';
  if (in_cart) classnames += _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.in_cart;
  return __jsx("div", {
    className: "col-md-4 col-xl-3 col-6 d-flex justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product/[id]`,
    as: `/shop/product/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image_carcass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: previewUrl,
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card_image + ' card-img-top',
    alt: "...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card_title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, name), __jsx("p", {
    className: _card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card_price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "$", price), __jsx("button", {
    className: classnames,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: `fa ${_card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cart_icon} fa-shopping-cart`,
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), "Add to Cart"))));
};

_c = Card;

const mapStateToProps = ({
  cart
}, {
  id
}) => {
  let in_cart = cart.some(item => id === item.id);
  return {
    in_cart
  };
};

const mapDispatchToProps = {
  addProduct: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["addProduct"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Card));

var _c;

$RefreshReg$(_c, "Card");

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

/***/ "./src/components/hoc/withState.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9jYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcmljZSIsIm5hbWUiLCJwcmV2aWV3VXJsIiwiaWQiLCJzdG9yZSIsImFkZFByb2R1Y3QiLCJpbl9jYXJ0IiwiaGFuZGxlQ2xpY2siLCJjb3VudCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJidG5fYWRkX2NhcnQiLCJjYXJkIiwiaW1hZ2VfY2FyY2FzcyIsImNhcmRfaW1hZ2UiLCJjYXJkX3RpdGxlIiwiY2FyZF9wcmljZSIsImNhcnRfaWNvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsImNhcnQiLCJzb21lIiwiaXRlbSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkFjdGlvbiIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxNQUFUO0FBQWVDLFlBQWY7QUFBMkJDLElBQTNCO0FBQStCQyxPQUEvQjtBQUFzQ0MsWUFBdEM7QUFBa0RDO0FBQWxELENBQUQsS0FBaUU7QUFDNUUsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkYsY0FBVSxDQUFDO0FBQUVHLFdBQUssRUFBRSxDQUFUO0FBQVlMLFFBQVo7QUFBZ0JILFdBQWhCO0FBQXVCQyxVQUF2QjtBQUE2QkM7QUFBN0IsS0FBRCxDQUFWO0FBQ0Q7O0FBRUQsTUFBSU8sVUFBVSxHQUFHQyx1REFBTSxDQUFDQyxZQUFQLEdBQXNCLG1CQUF2QztBQUNBLE1BQUlMLE9BQUosRUFBYUcsVUFBVSxJQUFJQyx1REFBTSxDQUFDSixPQUFyQjtBQUViLFNBQ0U7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSSx1REFBTSxDQUFDRSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRyxvQkFBYjtBQUFrQyxNQUFFLEVBQUcsaUJBQWdCVCxFQUFHLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVPLHVEQUFNLENBQUNHLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRVgsVUFEUDtBQUVFLGFBQVMsRUFBRVEsdURBQU0sQ0FBQ0ksVUFBUCxHQUFvQixlQUZqQztBQUdFLE9BQUcsRUFBQyxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFSix1REFBTSxDQUFDSyxVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDZCxJQUFsQyxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVTLHVEQUFNLENBQUNNLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBbUNoQixLQUFuQyxDQUZGLEVBR0U7QUFBUSxhQUFTLEVBQUVTLFVBQW5CO0FBQStCLFdBQU8sRUFBRUYsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFHLE1BQUtHLHVEQUFNLENBQUNPLFNBQVUsbUJBRHBDO0FBRUUsbUJBQVksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsZ0JBSEYsQ0FiRixDQURGLENBREY7QUE2QkQsQ0FyQ0Q7O0tBQU1sQixJOztBQXVDTixNQUFNbUIsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEVBQVc7QUFBRWhCO0FBQUYsQ0FBWCxLQUFzQjtBQUM1QyxNQUFJRyxPQUFPLEdBQUdhLElBQUksQ0FBQ0MsSUFBTCxDQUFXQyxJQUFELElBQVVsQixFQUFFLEtBQUtrQixJQUFJLENBQUNsQixFQUFoQyxDQUFkO0FBRUEsU0FBTztBQUFFRztBQUFGLEdBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1nQixrQkFBa0IsR0FBRztBQUN6QmpCLFlBQVUsRUFBRWtCLHlEQUFpQmxCO0FBREosQ0FBM0I7QUFJZW1CLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JJLGtCQUFsQixDQUFQLENBQTZDdkIsSUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjMwMTdlMmUwNWE1YzIyZTgzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NhcmQubW9kdWxlLmNzcydcclxuaW1wb3J0ICogYXMgQWN0aW9uIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcblxyXG5jb25zdCBDYXJkID0gKHsgcHJpY2UsIG5hbWUsIHByZXZpZXdVcmwsIGlkLCBzdG9yZSwgYWRkUHJvZHVjdCwgaW5fY2FydCB9KSA9PiB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBhZGRQcm9kdWN0KHsgY291bnQ6IDEsIGlkLCBwcmljZSwgbmFtZSwgcHJldmlld1VybCB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGNsYXNzbmFtZXMgPSBzdHlsZXMuYnRuX2FkZF9jYXJ0ICsgJyBidG4gYnRuLXByaW1hcnkgJ1xyXG4gIGlmIChpbl9jYXJ0KSBjbGFzc25hbWVzICs9IHN0eWxlcy5pbl9jYXJ0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC14bC0zIGNvbC02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL3Byb2R1Y3QvW2lkXWB9IGFzPXtgL3Nob3AvcHJvZHVjdC8ke2lkfWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfY2FyY2Fzc30+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3VXJsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9pbWFnZSArICcgY2FyZC1pbWctdG9wJ31cclxuICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF90aXRsZX0+e25hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9wcmljZX0+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NuYW1lc30gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhICR7c3R5bGVzLmNhcnRfaWNvbn0gZmEtc2hvcHBpbmctY2FydGB9XHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY2FydCB9LCB7IGlkIH0pID0+IHtcclxuICBsZXQgaW5fY2FydCA9IGNhcnQuc29tZSgoaXRlbSkgPT4gaWQgPT09IGl0ZW0uaWQpXHJcblxyXG4gIHJldHVybiB7IGluX2NhcnQgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgYWRkUHJvZHVjdDogQWN0aW9uLmFkZFByb2R1Y3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcmQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=