webpackHotUpdate_N_E("pages/shop/product/[id]",{

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
  const _apiBase = 'http://localhost:3000/api/phones';

  const getResource = async url => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  };

  const getPhones = () => {
    return getResource('');
  };

  const getPhone = id => {
    return getResource(`?id=${id}`);
  };

  return {
    getPhones,
    getPhone
  };
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvcGhvbmUtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJQaG9uZVNlcnZpY2UiLCJfYXBpQmFzZSIsImdldFJlc291cmNlIiwidXJsIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImdldFBob25lcyIsImdldFBob25lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWUsU0FBU0EsWUFBVCxHQUF3QjtBQUNyQyxRQUFNQyxRQUFRLEdBQUcsa0NBQWpCOztBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDakMsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFSixRQUFTLEdBQUVFLEdBQUksRUFBbkIsQ0FBdkI7O0FBRUEsUUFBSSxDQUFDQyxHQUFHLENBQUNFLEVBQVQsRUFBYTtBQUNYLFlBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFrQkosR0FBSSxFQUF2QixHQUE0QixjQUFhQyxHQUFHLENBQUNJLE1BQU8sRUFBOUQsQ0FBTjtBQUNEOztBQUNELFdBQU8sTUFBTUosR0FBRyxDQUFDSyxJQUFKLEVBQWI7QUFDRCxHQVBEOztBQVNBLFFBQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFdBQU9SLFdBQVcsQ0FBQyxFQUFELENBQWxCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNUyxRQUFRLEdBQUlDLEVBQUQsSUFBUTtBQUN2QixXQUFPVixXQUFXLENBQUUsT0FBTVUsRUFBRyxFQUFYLENBQWxCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQ0xGLGFBREs7QUFFTEM7QUFGSyxHQUFQO0FBSUQ7S0F4QnVCWCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvcHJvZHVjdC9baWRdLmRhZDhhMjY2ZDhiNjUwMjg1YzA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG9uZVNlcnZpY2UoKSB7XHJcbiAgY29uc3QgX2FwaUJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9waG9uZXMnXHJcblxyXG4gIGNvbnN0IGdldFJlc291cmNlID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7X2FwaUJhc2V9JHt1cmx9YClcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmZXRjaCAke3VybH1gICsgYCwgcmVjZWl2ZWQgJHtyZXMuc3RhdHVzfWApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UGhvbmVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFJlc291cmNlKCcnKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UGhvbmUgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBnZXRSZXNvdXJjZShgP2lkPSR7aWR9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRQaG9uZXMsXHJcbiAgICBnZXRQaG9uZSxcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==