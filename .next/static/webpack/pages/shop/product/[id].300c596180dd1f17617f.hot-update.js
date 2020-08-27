webpackHotUpdate_N_E("pages/shop/product/[id]",{

/***/ "./src/pages/product/Product.js":
/*!**************************************!*\
  !*** ./src/pages/product/Product.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Description */ "./src/pages/product/Description.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _service_phone_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/phone-service */ "./src/service/phone-service.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Product.module.css */ "./src/pages/product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_prev_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/prev.svg */ "./src/pages/product/images/prev.svg");
/* harmony import */ var _images_prev_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_prev_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_next_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/next.svg */ "./src/pages/product/images/next.svg");
/* harmony import */ var _images_next_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_next_svg__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\pages\\product\\Product.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const carouselProps = {
  indicators: false,
  prevIcon: __jsx("img", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel_arrows,
    src: _images_prev_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }),
  nextIcon: __jsx("img", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel_arrows,
    src: _images_next_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })
};

const CarouselComponents = ({
  product
}) => {
  return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), product.gallery.map(item => {
    return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel_wrap,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.gallery_image,
      src: item,
      alt: "Gallery",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    })));
  }));
};

_c = CarouselComponents;

const ProductContainer = ({
  serverProduct,
  serverError
}) => {
  _s();

  let {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(serverProduct);
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!serverProduct);
  let {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(serverError);
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  async function load() {
    let product = null;

    try {
      product = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_6__["default"])().getPhone(router.query.id);
    } catch (err) {
      setError(err);
    }

    if (product) {
      setProduct(product);
      setLoading(false);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!product) {
      load();
    } else if (product.id != router.query.id) {
      setLoading(true);
      load();
    }
  });

  if (error) {
    return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 12
      }
    });
  }

  if (loading) return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  });
  return __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.single_page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.product_ceil,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(CarouselComponents, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })))));
};

_s(ProductContainer, "cLdCpOPTgS3hgwADuHlZndndfFc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c2 = ProductContainer;

ProductContainer.getInitialProps = async ({
  req,
  query
}) => {
  let {
    id
  } = query;
  let serverProduct = null;

  if (!req) {
    return {
      serverProduct
    };
  }

  try {
    serverProduct = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_6__["default"])().getPhone(id);
  } catch (error) {
    return {
      serverError
    };
  }

  return {
    serverProduct
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ProductContainer);

var _c, _c2;

$RefreshReg$(_c, "CarouselComponents");
$RefreshReg$(_c2, "ProductContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJjYXJvdXNlbFByb3BzIiwiaW5kaWNhdG9ycyIsInByZXZJY29uIiwic3R5bGVzIiwiY2Fyb3VzZWxfYXJyb3dzIiwicHJldkFycm93IiwibmV4dEljb24iLCJuZXh0QXJyb3ciLCJDYXJvdXNlbENvbXBvbmVudHMiLCJwcm9kdWN0IiwiZ2FsbGVyeSIsIm1hcCIsIml0ZW0iLCJjYXJvdXNlbF93cmFwIiwiZ2FsbGVyeV9pbWFnZSIsIlByb2R1Y3RDb250YWluZXIiLCJzZXJ2ZXJQcm9kdWN0Iiwic2VydmVyRXJyb3IiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2FkIiwiUGhvbmVTZXJ2aWNlIiwiZ2V0UGhvbmUiLCJxdWVyeSIsImlkIiwiZXJyIiwidXNlRWZmZWN0Iiwic2luZ2xlX3BhZ2UiLCJwcm9kdWN0X2NlaWwiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUc7QUFDcEJDLFlBQVUsRUFBRSxLQURRO0FBRXBCQyxVQUFRLEVBQUU7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLGVBQXZCO0FBQXdDLE9BQUcsRUFBRUMsdURBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGVTtBQUdwQkMsVUFBUSxFQUFFO0FBQUssYUFBUyxFQUFFSCwwREFBTSxDQUFDQyxlQUF2QjtBQUF3QyxPQUFHLEVBQUVHLHVEQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFUsQ0FBdEI7O0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0JBQUQ7QUFBb0IsV0FBTyxFQUFFekIsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBYSxXQUFPLEVBQUVBLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREYsQ0FERixDQURGO0FBZ0JELENBckREOztHQUFNTSxnQjtVQUtTVSxxRDs7O01BTFRWLGdCOztBQXVETkEsZ0JBQWdCLENBQUNvQixlQUFqQixHQUFtQyxPQUFPO0FBQUVDLEtBQUY7QUFBT1A7QUFBUCxDQUFQLEtBQTBCO0FBQzNELE1BQUk7QUFBRUM7QUFBRixNQUFTRCxLQUFiO0FBQ0EsTUFBSWIsYUFBYSxHQUFHLElBQXBCOztBQUNBLE1BQUksQ0FBQ29CLEdBQUwsRUFBVTtBQUNSLFdBQU87QUFBRXBCO0FBQUYsS0FBUDtBQUNEOztBQUNELE1BQUk7QUFDRkEsaUJBQWEsR0FBRyxNQUFNVyxzRUFBWSxHQUFHQyxRQUFmLENBQXdCRSxFQUF4QixDQUF0QjtBQUNELEdBRkQsQ0FFRSxPQUFPUixLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQUVMO0FBQUYsS0FBUDtBQUNEOztBQUVELFNBQU87QUFBRUQ7QUFBRixHQUFQO0FBQ0QsQ0FiRDs7QUFlZUQsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9wcm9kdWN0L1tpZF0uMzAwYzU5NjE4MGRkMWYxNzYxN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvbidcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgUGhvbmVTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2UvcGhvbmUtc2VydmljZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Byb2R1Y3QubW9kdWxlLmNzcydcclxuaW1wb3J0IHByZXZBcnJvdyBmcm9tICcuL2ltYWdlcy9wcmV2LnN2ZydcclxuaW1wb3J0IG5leHRBcnJvdyBmcm9tICcuL2ltYWdlcy9uZXh0LnN2ZydcclxuXHJcbmNvbnN0IGNhcm91c2VsUHJvcHMgPSB7XHJcbiAgaW5kaWNhdG9yczogZmFsc2UsXHJcbiAgcHJldkljb246IDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxfYXJyb3dzfSBzcmM9e3ByZXZBcnJvd30gLz4sXHJcbiAgbmV4dEljb246IDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxfYXJyb3dzfSBzcmM9e25leHRBcnJvd30gLz4sXHJcbn1cclxuXHJcbmNvbnN0IENhcm91c2VsQ29tcG9uZW50cyA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUHJvcHN9PlxyXG4gICAgICB7cHJvZHVjdC5nYWxsZXJ5Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX3dyYXB9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeV9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHYWxsZXJ5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgPC9DYXJvdXNlbD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFByb2R1Y3RDb250YWluZXIgPSAoeyBzZXJ2ZXJQcm9kdWN0LCBzZXJ2ZXJFcnJvciB9KSA9PiB7XHJcbiAgbGV0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHNlcnZlclByb2R1Y3QpXHJcbiAgbGV0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKCFzZXJ2ZXJQcm9kdWN0KVxyXG4gIGxldCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHNlcnZlckVycm9yKVxyXG5cclxuICBsZXQgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZCgpIHtcclxuICAgIGxldCBwcm9kdWN0ID0gbnVsbFxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3QgPSBhd2FpdCBQaG9uZVNlcnZpY2UoKS5nZXRQaG9uZShyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgbG9hZCgpXHJcbiAgICB9IGVsc2UgaWYgKHByb2R1Y3QuaWQgIT0gcm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgbG9hZCgpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yIC8+XHJcbiAgfVxyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbmdsZV9wYWdlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfY2VpbH0+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsQ29tcG9uZW50cyBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb24gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdENvbnRhaW5lci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEsIHF1ZXJ5IH0pID0+IHtcclxuICBsZXQgeyBpZCB9ID0gcXVlcnlcclxuICBsZXQgc2VydmVyUHJvZHVjdCA9IG51bGxcclxuICBpZiAoIXJlcSkge1xyXG4gICAgcmV0dXJuIHsgc2VydmVyUHJvZHVjdCB9XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBzZXJ2ZXJQcm9kdWN0ID0gYXdhaXQgUGhvbmVTZXJ2aWNlKCkuZ2V0UGhvbmUoaWQpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHNlcnZlckVycm9yIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHNlcnZlclByb2R1Y3QgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=