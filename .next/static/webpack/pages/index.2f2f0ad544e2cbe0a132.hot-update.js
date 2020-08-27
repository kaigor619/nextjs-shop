webpackHotUpdate_N_E("pages/index",{

/***/ "./src/service/phone-service.js":
/*!**************************************!*\
  !*** ./src/service/phone-service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneService; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class PhoneService {
  constructor() {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_apiBase", 'http://localhost:4000/phones');
  }

} // export default class PhoneService {
//   _apiBase = 'http://localhost:4000/phones'
//   static name = 'Igor'
//   static getResource = async (url) => {
//     const res = await fetch(`${this._apiBase}${url}`)
//     // if (!res.ok) {
//     //   throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
//     // }
//     return await res.json()
//   }
//   static getPhones = () => {
//     return PhoneService.getResource('')
//   }
//   static getPhone = async (id) => {
//     return await PhoneService.getResource(`?id=${id}`)
//   }
// }

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(PhoneService, "name", 'Igor');

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(PhoneService, "getResource", async url => {
  const res = await fetch(`${PhoneService._apiBase}${url}`); // if (!res.ok) {
  //   throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  // }

  return await res.json();
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(PhoneService, "getPhones", () => {
  return PhoneService.getResource('');
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(PhoneService, "getPhone", async id => {
  return await PhoneService.getResource(`?id=${id}`);
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvcGhvbmUtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJQaG9uZVNlcnZpY2UiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsIl9hcGlCYXNlIiwianNvbiIsImdldFJlc291cmNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsTUFBTUEsWUFBTixDQUFtQjtBQUFBO0FBQUEsZ0hBQ3JCLDhCQURxQjtBQUFBOztBQUFBLEMsQ0FzQmxDO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OzBGQTNDcUJBLFksVUFHTCxNOzswRkFIS0EsWSxpQkFLRSxNQUFPQyxHQUFQLElBQWU7QUFDbEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQU5SSCxZQU1VLENBQUtJLFFBQVMsR0FBRUgsR0FBSSxFQUF4QixDQUF2QixDQURrQyxDQUdsQztBQUNBO0FBQ0E7O0FBQ0EsU0FBTyxNQUFNQyxHQUFHLENBQUNHLElBQUosRUFBYjtBQUNELEM7OzBGQVprQkwsWSxlQWNBLE1BQU07QUFDdkIsU0FBT0EsWUFBWSxDQUFDTSxXQUFiLENBQXlCLEVBQXpCLENBQVA7QUFDRCxDOzswRkFoQmtCTixZLGNBa0JELE1BQU9PLEVBQVAsSUFBYztBQUM5QixTQUFPLE1BQU1QLFlBQVksQ0FBQ00sV0FBYixDQUEwQixPQUFNQyxFQUFHLEVBQW5DLENBQWI7QUFDRCxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmMmYwYWQ1NDRlMmNiZTBhMTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZVNlcnZpY2Uge1xyXG4gIF9hcGlCYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9waG9uZXMnXHJcblxyXG4gIHN0YXRpYyBuYW1lID0gJ0lnb3InXHJcblxyXG4gIHN0YXRpYyBnZXRSZXNvdXJjZSA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuX2FwaUJhc2V9JHt1cmx9YClcclxuXHJcbiAgICAvLyBpZiAoIXJlcy5vaykge1xyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmZXRjaCAke3VybH1gICsgYCwgcmVjZWl2ZWQgJHtyZXMuc3RhdHVzfWApXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFBob25lcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBQaG9uZVNlcnZpY2UuZ2V0UmVzb3VyY2UoJycpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UGhvbmUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBQaG9uZVNlcnZpY2UuZ2V0UmVzb3VyY2UoYD9pZD0ke2lkfWApXHJcbiAgfVxyXG59XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lU2VydmljZSB7XHJcbi8vICAgX2FwaUJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bob25lcydcclxuXHJcbi8vICAgc3RhdGljIG5hbWUgPSAnSWdvcidcclxuXHJcbi8vICAgc3RhdGljIGdldFJlc291cmNlID0gYXN5bmMgKHVybCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fYXBpQmFzZX0ke3VybH1gKVxyXG5cclxuLy8gICAgIC8vIGlmICghcmVzLm9rKSB7XHJcbi8vICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZldGNoICR7dXJsfWAgKyBgLCByZWNlaXZlZCAke3Jlcy5zdGF0dXN9YClcclxuLy8gICAgIC8vIH1cclxuLy8gICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgfVxyXG5cclxuLy8gICBzdGF0aWMgZ2V0UGhvbmVzID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIFBob25lU2VydmljZS5nZXRSZXNvdXJjZSgnJylcclxuLy8gICB9XHJcblxyXG4vLyAgIHN0YXRpYyBnZXRQaG9uZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IFBob25lU2VydmljZS5nZXRSZXNvdXJjZShgP2lkPSR7aWR9YClcclxuLy8gICB9XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==