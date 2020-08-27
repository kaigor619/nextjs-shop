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
            lineNumber: 67,
            columnNumber: 14
          }
        });
      }

      if (loading || !phones) {
        return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 14
          }
        });
      }

      return __jsx(Shop, {
        phones: phones,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
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
      phones = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_8__["default"])().getPhones();
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
    let phones = [];

    try {
      phones = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_8__["default"])().getPhones();
    } catch (error) {
      return this.setState({
        error,
        loading: false
      });
    }

    this.setState({
      loading: false,
      phones
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Nob3AvU2hvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiUGhvbmVTZXJ2aWNlIiwiZ2V0UGhvbmVzIiwiU2hvcCIsInBob25lcyIsImxpc3QiLCJtYXAiLCJpdGVtIiwiaWQiLCJzdHlsZXMiLCJzaG9wX2NvbnRlbnQiLCJTaG9wQ29udGFpbmVyIiwiQ29tcG9uZW50IiwibG9hZGluZyIsInByb3BzIiwiZXJyb3IiLCJzdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsImxvYWQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxzRUFBWSxHQUFHQyxTQUFmLEVBQVo7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQzNCLE1BQUlDLElBQUksR0FBR0QsTUFBTSxDQUFDRSxHQUFQLENBQVlDLElBQUQsSUFBVTtBQUM5QixXQUFPLE1BQUMsd0RBQUQseUZBQVVBLElBQVY7QUFBZ0IsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBRlUsQ0FBWDtBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHVEQUFNLENBQUNDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDTCxJQUFqQyxDQUZGLENBREYsQ0FERjtBQVFELENBWkQ7O0tBQU1GLEk7O0FBY04sTUFBTVEsYUFBTixTQUE0QkMsK0NBQTVCLENBQXNDO0FBQUE7QUFBQTs7QUFBQSw2R0EwQjVCO0FBQ05DLGFBQU8sRUFBRSxDQUFDLEtBQUtDLEtBQUwsQ0FBV1YsTUFEZjtBQUVOQSxZQUFNLEVBQUUsS0FBS1UsS0FBTCxDQUFXVixNQUZiO0FBR05XLFdBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBSFosS0ExQjRCOztBQUFBLDhHQXNDM0IsTUFBTTtBQUNiLFVBQUk7QUFBRVgsY0FBRjtBQUFVUyxlQUFWO0FBQW1CRTtBQUFuQixVQUE2QixLQUFLQyxLQUF0Qzs7QUFFQSxVQUFJRCxLQUFKLEVBQVc7QUFDVCxlQUFPLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBQ0QsVUFBSUYsT0FBTyxJQUFJLENBQUNULE1BQWhCLEVBQXdCO0FBQ3RCLGVBQU8sTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQUMsSUFBRDtBQUFNLGNBQU0sRUFBRUEsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDRCxLQWpEbUM7QUFBQTs7QUFDcEMsZUFBYWEsZUFBYixDQUE2QjtBQUFFQztBQUFGLEdBQTdCLEVBQXNDO0FBQ3BDLFFBQUlkLE1BQU0sR0FBRyxJQUFiOztBQUNBLFFBQUksQ0FBQ2MsR0FBTCxFQUFVO0FBQ1IsYUFBTztBQUFFZDtBQUFGLE9BQVA7QUFDRDs7QUFFRCxRQUFJO0FBQ0ZBLFlBQU0sR0FBRyxNQUFNSCxzRUFBWSxHQUFHQyxTQUFmLEVBQWY7QUFDRCxLQUZELENBRUUsT0FBT2EsS0FBUCxFQUFjO0FBQ2QsYUFBTztBQUFFQTtBQUFGLE9BQVA7QUFDRDs7QUFFRCxXQUFPO0FBQUVYO0FBQUYsS0FBUDtBQUNEOztBQUVELFFBQU1lLElBQU4sR0FBYTtBQUNYLFFBQUlmLE1BQU0sR0FBRyxFQUFiOztBQUNBLFFBQUk7QUFDRkEsWUFBTSxHQUFHLE1BQU1ILHNFQUFZLEdBQUdDLFNBQWYsRUFBZjtBQUNELEtBRkQsQ0FFRSxPQUFPYSxLQUFQLEVBQWM7QUFDZCxhQUFPLEtBQUtLLFFBQUwsQ0FBYztBQUFFTCxhQUFGO0FBQVNGLGVBQU8sRUFBRTtBQUFsQixPQUFkLENBQVA7QUFDRDs7QUFDRCxTQUFLTyxRQUFMLENBQWM7QUFBRVAsYUFBTyxFQUFFLEtBQVg7QUFBa0JUO0FBQWxCLEtBQWQ7QUFDRDs7QUFRRGlCLG1CQUFpQixHQUFHO0FBQ2xCLFFBQUksQ0FBQyxLQUFLTCxLQUFMLENBQVdaLE1BQWhCLEVBQXdCO0FBQ3RCLFdBQUtlLElBQUw7QUFDRDtBQUNGOztBQXBDbUM7O0FBb0R2QlIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVjOGM2N2MzNmE4NTM2OWU2NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkJ1xyXG5pbXBvcnQgeyB3aXRoRGF0YVBob25lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob2MnXHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRXJyb3InXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaG9wLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBQaG9uZVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9waG9uZS1zZXJ2aWNlJ1xyXG5cclxuY29uc29sZS5sb2coUGhvbmVTZXJ2aWNlKCkuZ2V0UGhvbmVzKCkpXHJcblxyXG5jb25zdCBTaG9wID0gKHsgcGhvbmVzIH0pID0+IHtcclxuICBsZXQgbGlzdCA9IHBob25lcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiA8Q2FyZCB7Li4uaXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvcF9jb250ZW50fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNSBtYi01XCI+UGhvbmVzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+e2xpc3R9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jbGFzcyBTaG9wQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcclxuICAgIGxldCBwaG9uZXMgPSBudWxsXHJcbiAgICBpZiAoIXJlcSkge1xyXG4gICAgICByZXR1cm4geyBwaG9uZXMgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHBob25lcyA9IGF3YWl0IFBob25lU2VydmljZSgpLmdldFBob25lcygpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvciB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcGhvbmVzIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQgcGhvbmVzID0gW11cclxuICAgIHRyeSB7XHJcbiAgICAgIHBob25lcyA9IGF3YWl0IFBob25lU2VydmljZSgpLmdldFBob25lcygpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwaG9uZXMgfSlcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgbG9hZGluZzogIXRoaXMucHJvcHMucGhvbmVzLFxyXG4gICAgcGhvbmVzOiB0aGlzLnByb3BzLnBob25lcyxcclxuICAgIGVycm9yOiB0aGlzLnByb3BzLmVycm9yLFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGhvbmVzKSB7XHJcbiAgICAgIHRoaXMubG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgeyBwaG9uZXMsIGxvYWRpbmcsIGVycm9yIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8RXJyb3IgLz5cclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nIHx8ICFwaG9uZXMpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxTaG9wIHBob25lcz17cGhvbmVzfSAvPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcENvbnRhaW5lclxyXG4iXSwic291cmNlUm9vdCI6IiJ9