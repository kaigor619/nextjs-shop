webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvcGhvbmUtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJQaG9uZVNlcnZpY2UiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsIl9hcGlCYXNlIiwianNvbiIsImdldFJlc291cmNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsTUFBTUEsWUFBTixDQUFtQjtBQUFBO0FBQUEsZ0hBQ3JCLDhCQURxQjtBQUFBOztBQUFBLEMsQ0FzQmxDO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OzBGQTNDcUJBLFksVUFHTCxNOzswRkFIS0EsWSxpQkFLRSxNQUFPQyxHQUFQLElBQWU7QUFDbEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQU5SSCxZQU1VLENBQUtJLFFBQVMsR0FBRUgsR0FBSSxFQUF4QixDQUF2QixDQURrQyxDQUdsQztBQUNBO0FBQ0E7O0FBQ0EsU0FBTyxNQUFNQyxHQUFHLENBQUNHLElBQUosRUFBYjtBQUNELEM7OzBGQVprQkwsWSxlQWNBLE1BQU07QUFDdkIsU0FBT0EsWUFBWSxDQUFDTSxXQUFiLENBQXlCLEVBQXpCLENBQVA7QUFDRCxDOzswRkFoQmtCTixZLGNBa0JELE1BQU9PLEVBQVAsSUFBYztBQUM5QixTQUFPLE1BQU1QLFlBQVksQ0FBQ00sV0FBYixDQUEwQixPQUFNQyxFQUFHLEVBQW5DLENBQWI7QUFDRCxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmYyZjBhZDU0NGUyY2JlMGExMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lU2VydmljZSB7XHJcbiAgX2FwaUJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bob25lcydcclxuXHJcbiAgc3RhdGljIG5hbWUgPSAnSWdvcidcclxuXHJcbiAgc3RhdGljIGdldFJlc291cmNlID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fYXBpQmFzZX0ke3VybH1gKVxyXG5cclxuICAgIC8vIGlmICghcmVzLm9rKSB7XHJcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZldGNoICR7dXJsfWAgKyBgLCByZWNlaXZlZCAke3Jlcy5zdGF0dXN9YClcclxuICAgIC8vIH1cclxuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UGhvbmVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFBob25lU2VydmljZS5nZXRSZXNvdXJjZSgnJylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQaG9uZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IFBob25lU2VydmljZS5nZXRSZXNvdXJjZShgP2lkPSR7aWR9YClcclxuICB9XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmVTZXJ2aWNlIHtcclxuLy8gICBfYXBpQmFzZSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvcGhvbmVzJ1xyXG5cclxuLy8gICBzdGF0aWMgbmFtZSA9ICdJZ29yJ1xyXG5cclxuLy8gICBzdGF0aWMgZ2V0UmVzb3VyY2UgPSBhc3luYyAodXJsKSA9PiB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt0aGlzLl9hcGlCYXNlfSR7dXJsfWApXHJcblxyXG4vLyAgICAgLy8gaWYgKCFyZXMub2spIHtcclxuLy8gICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9YCArIGAsIHJlY2VpdmVkICR7cmVzLnN0YXR1c31gKVxyXG4vLyAgICAgLy8gfVxyXG4vLyAgICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKClcclxuLy8gICB9XHJcblxyXG4vLyAgIHN0YXRpYyBnZXRQaG9uZXMgPSAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4gUGhvbmVTZXJ2aWNlLmdldFJlc291cmNlKCcnKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgc3RhdGljIGdldFBob25lID0gYXN5bmMgKGlkKSA9PiB7XHJcbi8vICAgICByZXR1cm4gYXdhaXQgUGhvbmVTZXJ2aWNlLmdldFJlc291cmNlKGA/aWQ9JHtpZH1gKVxyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9