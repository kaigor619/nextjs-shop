webpackHotUpdate_N_E("pages/shop/product/[id]",{

/***/ "./src/pages/product/Attributes.js":
/*!*****************************************!*\
  !*** ./src/pages/product/Attributes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.module.css */ "./src/pages/product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\pages\\product\\Attributes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class ProductAttr extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      active: this.props.data[0],
      elems: this.props.data
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clickAttribute", active => {
      this.setState({
        active
      });
      this.props.clickAttr(active);
    });
  }

  componentDidUpdate(prev) {
    if (prev.data !== this.props.data) {
      this.setState({
        elems: this.props.data
      });
    }
  }

  render() {
    let {
      elems,
      active
    } = this.state;
    let attributes = elems.map(elem => {
      let classNames = _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn_product_attr + ' btn btn-secondary ';
      if (active === elem) classNames += _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn_active;
      return __jsx("button", {
        onClick: () => this.clickAttribute(elem),
        key: elem,
        type: "button",
        className: classNames,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, elem);
    });
    return __jsx("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn_product_group + ' btn-group',
      role: "group",
      "aria-label": "Attributes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, attributes);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductAttr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvQXR0cmlidXRlcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0QXR0ciIsIkNvbXBvbmVudCIsImFjdGl2ZSIsInByb3BzIiwiZGF0YSIsImVsZW1zIiwic2V0U3RhdGUiLCJjbGlja0F0dHIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2IiwicmVuZGVyIiwic3RhdGUiLCJhdHRyaWJ1dGVzIiwibWFwIiwiZWxlbSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJidG5fcHJvZHVjdF9hdHRyIiwiYnRuX2FjdGl2ZSIsImNsaWNrQXR0cmlidXRlIiwiYnRuX3Byb2R1Y3RfZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFdBQU4sU0FBMEJDLCtDQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsNkdBQzFCO0FBQ05DLFlBQU0sRUFBRSxLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsQ0FBaEIsQ0FERjtBQUVOQyxXQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXQztBQUZaLEtBRDBCOztBQUFBLHNIQVloQkYsTUFBRCxJQUFZO0FBQzNCLFdBQUtJLFFBQUwsQ0FBYztBQUFFSjtBQUFGLE9BQWQ7QUFDQSxXQUFLQyxLQUFMLENBQVdJLFNBQVgsQ0FBcUJMLE1BQXJCO0FBQ0QsS0FmaUM7QUFBQTs7QUFNbENNLG9CQUFrQixDQUFDQyxJQUFELEVBQU87QUFDdkIsUUFBSUEsSUFBSSxDQUFDTCxJQUFMLEtBQWMsS0FBS0QsS0FBTCxDQUFXQyxJQUE3QixFQUFtQztBQUNqQyxXQUFLRSxRQUFMLENBQWM7QUFBRUQsYUFBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0M7QUFBcEIsT0FBZDtBQUNEO0FBQ0Y7O0FBTURNLFFBQU0sR0FBRztBQUNQLFFBQUk7QUFBRUwsV0FBRjtBQUFTSDtBQUFULFFBQW9CLEtBQUtTLEtBQTdCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHUCxLQUFLLENBQUNRLEdBQU4sQ0FBV0MsSUFBRCxJQUFVO0FBQ25DLFVBQUlDLFVBQVUsR0FBR0MsMERBQU0sQ0FBQ0MsZ0JBQVAsR0FBMEIscUJBQTNDO0FBQ0EsVUFBSWYsTUFBTSxLQUFLWSxJQUFmLEVBQXFCQyxVQUFVLElBQUlDLDBEQUFNLENBQUNFLFVBQXJCO0FBRXJCLGFBQ0U7QUFDRSxlQUFPLEVBQUUsTUFBTSxLQUFLQyxjQUFMLENBQW9CTCxJQUFwQixDQURqQjtBQUVFLFdBQUcsRUFBRUEsSUFGUDtBQUdFLFlBQUksRUFBQyxRQUhQO0FBSUUsaUJBQVMsRUFBRUMsVUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUdELElBTkgsQ0FERjtBQVVELEtBZGdCLENBQWpCO0FBZUEsV0FDRTtBQUNFLGVBQVMsRUFBRUUsMERBQU0sQ0FBQ0ksaUJBQVAsR0FBMkIsWUFEeEM7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLG9CQUFXLFlBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHUixVQUxILENBREY7QUFTRDs7QUExQ2lDOztBQTZDckJaLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvcHJvZHVjdC9baWRdLjUyZDE2NWJiMGZmNzQ1ZDhlM2M4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9kdWN0Lm1vZHVsZS5jc3MnXHJcblxyXG5jbGFzcyBQcm9kdWN0QXR0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY3RpdmU6IHRoaXMucHJvcHMuZGF0YVswXSxcclxuICAgIGVsZW1zOiB0aGlzLnByb3BzLmRhdGEsXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldikge1xyXG4gICAgaWYgKHByZXYuZGF0YSAhPT0gdGhpcy5wcm9wcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbGVtczogdGhpcy5wcm9wcy5kYXRhIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja0F0dHJpYnV0ZSA9IChhY3RpdmUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmUgfSlcclxuICAgIHRoaXMucHJvcHMuY2xpY2tBdHRyKGFjdGl2ZSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgZWxlbXMsIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBlbGVtcy5tYXAoKGVsZW0pID0+IHtcclxuICAgICAgbGV0IGNsYXNzTmFtZXMgPSBzdHlsZXMuYnRuX3Byb2R1Y3RfYXR0ciArICcgYnRuIGJ0bi1zZWNvbmRhcnkgJ1xyXG4gICAgICBpZiAoYWN0aXZlID09PSBlbGVtKSBjbGFzc05hbWVzICs9IHN0eWxlcy5idG5fYWN0aXZlXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xpY2tBdHRyaWJ1dGUoZWxlbSl9XHJcbiAgICAgICAgICBrZXk9e2VsZW19XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5fcHJvZHVjdF9ncm91cCArICcgYnRuLWdyb3VwJ31cclxuICAgICAgICByb2xlPVwiZ3JvdXBcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJBdHRyaWJ1dGVzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHthdHRyaWJ1dGVzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RBdHRyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=