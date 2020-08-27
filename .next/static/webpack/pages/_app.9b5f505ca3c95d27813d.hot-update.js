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
function PhoneService() {
  const _apiBase = 'http://localhost:4000/phones';

  const getResource = async url => {
    const res = await fetch(`${_apiBase}${url}`); // if (!res.ok) {
    //   throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    // }

    return await res.json();
  };

  const getPhones = () => {
    return getResource('');
  };

  const getPhone = id => {
    return getResource(`/${id}`);
  };

  return {
    getPhones,
    getPhone
  };
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

_c = PhoneService;

var _c;

$RefreshReg$(_c, "PhoneService");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvcGhvbmUtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJQaG9uZVNlcnZpY2UiLCJfYXBpQmFzZSIsImdldFJlc291cmNlIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiZ2V0UGhvbmVzIiwiZ2V0UGhvbmUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZSxTQUFTQSxZQUFULEdBQXdCO0FBQ3JDLFFBQU1DLFFBQVEsR0FBRyw4QkFBakI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUNqQyxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVKLFFBQVMsR0FBRUUsR0FBSSxFQUFuQixDQUF2QixDQURpQyxDQUdqQztBQUNBO0FBQ0E7O0FBQ0EsV0FBTyxNQUFNQyxHQUFHLENBQUNFLElBQUosRUFBYjtBQUNELEdBUEQ7O0FBU0EsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsV0FBT0wsV0FBVyxDQUFDLEVBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFFBQU1NLFFBQVEsR0FBSUMsRUFBRCxJQUFRO0FBQ3ZCLFdBQU9QLFdBQVcsQ0FBRSxJQUFHTyxFQUFHLEVBQVIsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFDTEYsYUFESztBQUVMQztBQUZLLEdBQVA7QUFJRCxDLENBRUQ7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7S0EvQ3dCUixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWI1ZjUwNWNhM2M5NWQyNzgxM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob25lU2VydmljZSgpIHtcclxuICBjb25zdCBfYXBpQmFzZSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvcGhvbmVzJ1xyXG5cclxuICBjb25zdCBnZXRSZXNvdXJjZSA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke19hcGlCYXNlfSR7dXJsfWApXHJcblxyXG4gICAgLy8gaWYgKCFyZXMub2spIHtcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9YCArIGAsIHJlY2VpdmVkICR7cmVzLnN0YXR1c31gKVxyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFBob25lcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBnZXRSZXNvdXJjZSgnJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFBob25lID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0UmVzb3VyY2UoYC8ke2lkfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0UGhvbmVzLFxyXG4gICAgZ2V0UGhvbmUsXHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZVNlcnZpY2Uge1xyXG4vLyAgIF9hcGlCYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9waG9uZXMnXHJcblxyXG4vLyAgIHN0YXRpYyBuYW1lID0gJ0lnb3InXHJcblxyXG4vLyAgIHN0YXRpYyBnZXRSZXNvdXJjZSA9IGFzeW5jICh1cmwpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuX2FwaUJhc2V9JHt1cmx9YClcclxuXHJcbi8vICAgICAvLyBpZiAoIXJlcy5vaykge1xyXG4vLyAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmZXRjaCAke3VybH1gICsgYCwgcmVjZWl2ZWQgJHtyZXMuc3RhdHVzfWApXHJcbi8vICAgICAvLyB9XHJcbi8vICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgc3RhdGljIGdldFBob25lcyA9ICgpID0+IHtcclxuLy8gICAgIHJldHVybiBQaG9uZVNlcnZpY2UuZ2V0UmVzb3VyY2UoJycpXHJcbi8vICAgfVxyXG5cclxuLy8gICBzdGF0aWMgZ2V0UGhvbmUgPSBhc3luYyAoaWQpID0+IHtcclxuLy8gICAgIHJldHVybiBhd2FpdCBQaG9uZVNlcnZpY2UuZ2V0UmVzb3VyY2UoYD9pZD0ke2lkfWApXHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=