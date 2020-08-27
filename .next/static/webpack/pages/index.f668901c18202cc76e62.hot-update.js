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
      phones = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_8__["default"])().getPhoneso();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Nob3AvU2hvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiUGhvbmVTZXJ2aWNlIiwiZ2V0UGhvbmVzIiwiU2hvcCIsInBob25lcyIsImxpc3QiLCJtYXAiLCJpdGVtIiwiaWQiLCJzdHlsZXMiLCJzaG9wX2NvbnRlbnQiLCJTaG9wQ29udGFpbmVyIiwiQ29tcG9uZW50IiwibG9hZGluZyIsInByb3BzIiwiZXJyb3IiLCJzdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsImxvYWQiLCJnZXRQaG9uZXNvIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0VBQVksR0FBR0MsU0FBZixFQUFaOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUMzQixNQUFJQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsR0FBUCxDQUFZQyxJQUFELElBQVU7QUFDOUIsV0FBTyxNQUFDLHdEQUFELHlGQUFVQSxJQUFWO0FBQWdCLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRCxHQUZVLENBQVg7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFFQyx1REFBTSxDQUFDQyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ0wsSUFBakMsQ0FGRixDQURGLENBREY7QUFRRCxDQVpEOztLQUFNRixJOztBQWNOLE1BQU1RLGFBQU4sU0FBNEJDLCtDQUE1QixDQUFzQztBQUFBO0FBQUE7O0FBQUEsNkdBMEI1QjtBQUNOQyxhQUFPLEVBQUUsQ0FBQyxLQUFLQyxLQUFMLENBQVdWLE1BRGY7QUFFTkEsWUFBTSxFQUFFLEtBQUtVLEtBQUwsQ0FBV1YsTUFGYjtBQUdOVyxXQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXQztBQUhaLEtBMUI0Qjs7QUFBQSw4R0FzQzNCLE1BQU07QUFDYixVQUFJO0FBQUVYLGNBQUY7QUFBVVMsZUFBVjtBQUFtQkU7QUFBbkIsVUFBNkIsS0FBS0MsS0FBdEM7O0FBRUEsVUFBSUQsS0FBSixFQUFXO0FBQ1QsZUFBTyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUNELFVBQUlGLE9BQU8sSUFBSSxDQUFDVCxNQUFoQixFQUF3QjtBQUN0QixlQUFPLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsYUFBTyxNQUFDLElBQUQ7QUFBTSxjQUFNLEVBQUVBLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0QsS0FqRG1DO0FBQUE7O0FBQ3BDLGVBQWFhLGVBQWIsQ0FBNkI7QUFBRUM7QUFBRixHQUE3QixFQUFzQztBQUNwQyxRQUFJZCxNQUFNLEdBQUcsSUFBYjs7QUFDQSxRQUFJLENBQUNjLEdBQUwsRUFBVTtBQUNSLGFBQU87QUFBRWQ7QUFBRixPQUFQO0FBQ0Q7O0FBRUQsUUFBSTtBQUNGQSxZQUFNLEdBQUcsTUFBTUgsc0VBQVksR0FBR0MsU0FBZixFQUFmO0FBQ0QsS0FGRCxDQUVFLE9BQU9hLEtBQVAsRUFBYztBQUNkLGFBQU87QUFBRUE7QUFBRixPQUFQO0FBQ0Q7O0FBRUQsV0FBTztBQUFFWDtBQUFGLEtBQVA7QUFDRDs7QUFFRCxRQUFNZSxJQUFOLEdBQWE7QUFDWCxRQUFJZixNQUFNLEdBQUcsRUFBYjs7QUFDQSxRQUFJO0FBQ0ZBLFlBQU0sR0FBRyxNQUFNSCxzRUFBWSxHQUFHbUIsVUFBZixFQUFmO0FBQ0QsS0FGRCxDQUVFLE9BQU9MLEtBQVAsRUFBYztBQUNkLGFBQU8sS0FBS00sUUFBTCxDQUFjO0FBQUVOLGFBQUY7QUFBU0YsZUFBTyxFQUFFO0FBQWxCLE9BQWQsQ0FBUDtBQUNEOztBQUNELFNBQUtRLFFBQUwsQ0FBYztBQUFFUixhQUFPLEVBQUUsS0FBWDtBQUFrQlQ7QUFBbEIsS0FBZDtBQUNEOztBQVFEa0IsbUJBQWlCLEdBQUc7QUFDbEIsUUFBSSxDQUFDLEtBQUtOLEtBQUwsQ0FBV1osTUFBaEIsRUFBd0I7QUFDdEIsV0FBS2UsSUFBTDtBQUNEO0FBQ0Y7O0FBcENtQzs7QUFvRHZCUiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjY4OTAxYzE4MjAyY2M3NmU2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmQnXHJcbmltcG9ydCB7IHdpdGhEYXRhUGhvbmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvYydcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FcnJvcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Nob3AubW9kdWxlLmNzcydcclxuaW1wb3J0IFBob25lU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Bob25lLXNlcnZpY2UnXHJcblxyXG5jb25zb2xlLmxvZyhQaG9uZVNlcnZpY2UoKS5nZXRQaG9uZXMoKSlcclxuXHJcbmNvbnN0IFNob3AgPSAoeyBwaG9uZXMgfSkgPT4ge1xyXG4gIGxldCBsaXN0ID0gcGhvbmVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIDxDYXJkIHsuLi5pdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG9wX2NvbnRlbnR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01IG1iLTVcIj5QaG9uZXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj57bGlzdH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNsYXNzIFNob3BDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gICAgbGV0IHBob25lcyA9IG51bGxcclxuICAgIGlmICghcmVxKSB7XHJcbiAgICAgIHJldHVybiB7IHBob25lcyB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcGhvbmVzID0gYXdhaXQgUGhvbmVTZXJ2aWNlKCkuZ2V0UGhvbmVzKClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwaG9uZXMgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCBwaG9uZXMgPSBbXVxyXG4gICAgdHJ5IHtcclxuICAgICAgcGhvbmVzID0gYXdhaXQgUGhvbmVTZXJ2aWNlKCkuZ2V0UGhvbmVzbygpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwaG9uZXMgfSlcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgbG9hZGluZzogIXRoaXMucHJvcHMucGhvbmVzLFxyXG4gICAgcGhvbmVzOiB0aGlzLnByb3BzLnBob25lcyxcclxuICAgIGVycm9yOiB0aGlzLnByb3BzLmVycm9yLFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGhvbmVzKSB7XHJcbiAgICAgIHRoaXMubG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgeyBwaG9uZXMsIGxvYWRpbmcsIGVycm9yIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8RXJyb3IgLz5cclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nIHx8ICFwaG9uZXMpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxTaG9wIHBob25lcz17cGhvbmVzfSAvPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcENvbnRhaW5lclxyXG4iXSwic291cmNlUm9vdCI6IiJ9