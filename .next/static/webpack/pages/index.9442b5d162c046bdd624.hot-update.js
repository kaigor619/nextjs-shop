webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/shop/Shop.js":
/*!********************************!*\
  !*** ./src/pages/shop/Shop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _components_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hoc */ "./src/components/hoc/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Error */ "./src/components/Error/index.js");
/* harmony import */ var _Shop_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shop.module.css */ "./src/pages/shop/Shop.module.css");
/* harmony import */ var _Shop_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Shop_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_phone_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/phone-service */ "./src/service/phone-service.js");


var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\pages\\shop\\Shop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







console.log(Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_8__["default"])().getPhones());

const Shop = ({
  phones
}) => {
  let list = phones.map(item => {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item, {
      key: item.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }
    }));
  });
  return __jsx("div", {
    className: _Shop_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.shop_content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-center mt-5 mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Phones"), __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, list)));
};

_c = Shop;

class ShopContainer extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      loading: !this.props.phones,
      phones: this.props.phones,
      error: this.props.error
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "render", () => {
      let {
        phones,
        loading,
        error
      } = this.state;

      if (error) {
        return __jsx(_components_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 14
          }
        });
      }

      if (loading || !phones) {
        return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 14
          }
        });
      }

      return __jsx(Shop, {
        phones: phones,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 12
        }
      });
    });
  }

  static async getInitialProps({
    req
  }) {
    let phones = null;

    if (!req) {
      return {
        phones
      };
    }

    try {
      phones = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_8__["default"])().getPhones(); // phones = await res.json()
    } catch (error) {
      return {
        error
      };
    }

    return {
      phones
    };
  }

  async load() {
    try {
      const res = await fetch('http://localhost:4000/phones');
      let phones = await res.json();
      this.setState({
        loading: false,
        phones
      });
    } catch (error) {
      return this.setState({
        error,
        loading: false
      });
    }
  }

  componentDidMount() {
    if (!this.state.phones) {
      this.load();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShopContainer);

var _c;

$RefreshReg$(_c, "Shop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Nob3AvU2hvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiUGhvbmVTZXJ2aWNlIiwiZ2V0UGhvbmVzIiwiU2hvcCIsInBob25lcyIsImxpc3QiLCJtYXAiLCJpdGVtIiwiaWQiLCJzdHlsZXMiLCJzaG9wX2NvbnRlbnQiLCJTaG9wQ29udGFpbmVyIiwiQ29tcG9uZW50IiwibG9hZGluZyIsInByb3BzIiwiZXJyb3IiLCJzdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsImxvYWQiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxzRUFBWSxHQUFHQyxTQUFmLEVBQVo7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQzNCLE1BQUlDLElBQUksR0FBR0QsTUFBTSxDQUFDRSxHQUFQLENBQVlDLElBQUQsSUFBVTtBQUM5QixXQUFPLE1BQUMsd0RBQUQseUZBQVVBLElBQVY7QUFBZ0IsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBRlUsQ0FBWDtBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHVEQUFNLENBQUNDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDTCxJQUFqQyxDQUZGLENBREYsQ0FERjtBQVFELENBWkQ7O0tBQU1GLEk7O0FBY04sTUFBTVEsYUFBTixTQUE0QkMsK0NBQTVCLENBQXNDO0FBQUE7QUFBQTs7QUFBQSw2R0EyQjVCO0FBQ05DLGFBQU8sRUFBRSxDQUFDLEtBQUtDLEtBQUwsQ0FBV1YsTUFEZjtBQUVOQSxZQUFNLEVBQUUsS0FBS1UsS0FBTCxDQUFXVixNQUZiO0FBR05XLFdBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBSFosS0EzQjRCOztBQUFBLDhHQXVDM0IsTUFBTTtBQUNiLFVBQUk7QUFBRVgsY0FBRjtBQUFVUyxlQUFWO0FBQW1CRTtBQUFuQixVQUE2QixLQUFLQyxLQUF0Qzs7QUFFQSxVQUFJRCxLQUFKLEVBQVc7QUFDVCxlQUFPLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBQ0QsVUFBSUYsT0FBTyxJQUFJLENBQUNULE1BQWhCLEVBQXdCO0FBQ3RCLGVBQU8sTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQUMsSUFBRDtBQUFNLGNBQU0sRUFBRUEsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDRCxLQWxEbUM7QUFBQTs7QUFDcEMsZUFBYWEsZUFBYixDQUE2QjtBQUFFQztBQUFGLEdBQTdCLEVBQXNDO0FBQ3BDLFFBQUlkLE1BQU0sR0FBRyxJQUFiOztBQUNBLFFBQUksQ0FBQ2MsR0FBTCxFQUFVO0FBQ1IsYUFBTztBQUFFZDtBQUFGLE9BQVA7QUFDRDs7QUFFRCxRQUFJO0FBQ0ZBLFlBQU0sR0FBRyxNQUFNSCxzRUFBWSxHQUFHQyxTQUFmLEVBQWYsQ0FERSxDQUVGO0FBQ0QsS0FIRCxDQUdFLE9BQU9hLEtBQVAsRUFBYztBQUNkLGFBQU87QUFBRUE7QUFBRixPQUFQO0FBQ0Q7O0FBRUQsV0FBTztBQUFFWDtBQUFGLEtBQVA7QUFDRDs7QUFFRCxRQUFNZSxJQUFOLEdBQWE7QUFDWCxRQUFJO0FBQ0YsWUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw4QkFBRCxDQUF2QjtBQUNBLFVBQUlqQixNQUFNLEdBQUcsTUFBTWdCLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFVixlQUFPLEVBQUUsS0FBWDtBQUFrQlQ7QUFBbEIsT0FBZDtBQUNELEtBSkQsQ0FJRSxPQUFPVyxLQUFQLEVBQWM7QUFDZCxhQUFPLEtBQUtRLFFBQUwsQ0FBYztBQUFFUixhQUFGO0FBQVNGLGVBQU8sRUFBRTtBQUFsQixPQUFkLENBQVA7QUFDRDtBQUNGOztBQVFEVyxtQkFBaUIsR0FBRztBQUNsQixRQUFJLENBQUMsS0FBS1IsS0FBTCxDQUFXWixNQUFoQixFQUF3QjtBQUN0QixXQUFLZSxJQUFMO0FBQ0Q7QUFDRjs7QUFyQ21DOztBQXFEdkJSLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk0NDJiNWQxNjJjMDQ2YmRkNjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZCdcclxuaW1wb3J0IHsgd2l0aERhdGFQaG9uZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9jJ1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Vycm9yJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2hvcC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgUGhvbmVTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2UvcGhvbmUtc2VydmljZSdcclxuXHJcbmNvbnNvbGUubG9nKFBob25lU2VydmljZSgpLmdldFBob25lcygpKVxyXG5cclxuY29uc3QgU2hvcCA9ICh7IHBob25lcyB9KSA9PiB7XHJcbiAgbGV0IGxpc3QgPSBwaG9uZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gPENhcmQgey4uLml0ZW19IGtleT17aXRlbS5pZH0gLz5cclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3BfY29udGVudH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTUgbWItNVwiPlBob25lczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPntsaXN0fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY2xhc3MgU2hvcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XHJcbiAgICBsZXQgcGhvbmVzID0gbnVsbFxyXG4gICAgaWYgKCFyZXEpIHtcclxuICAgICAgcmV0dXJuIHsgcGhvbmVzIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwaG9uZXMgPSBhd2FpdCBQaG9uZVNlcnZpY2UoKS5nZXRQaG9uZXMoKVxyXG4gICAgICAvLyBwaG9uZXMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvciB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcGhvbmVzIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bob25lcycpXHJcbiAgICAgIGxldCBwaG9uZXMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgcGhvbmVzIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiAhdGhpcy5wcm9wcy5waG9uZXMsXHJcbiAgICBwaG9uZXM6IHRoaXMucHJvcHMucGhvbmVzLFxyXG4gICAgZXJyb3I6IHRoaXMucHJvcHMuZXJyb3IsXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5waG9uZXMpIHtcclxuICAgICAgdGhpcy5sb2FkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciA9ICgpID0+IHtcclxuICAgIGxldCB7IHBob25lcywgbG9hZGluZywgZXJyb3IgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxFcnJvciAvPlxyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmcgfHwgIXBob25lcykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFNob3AgcGhvbmVzPXtwaG9uZXN9IC8+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wQ29udGFpbmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=