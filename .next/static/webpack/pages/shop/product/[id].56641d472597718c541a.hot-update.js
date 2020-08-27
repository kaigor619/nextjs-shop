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
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product.module.css */ "./src/pages/product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_prev_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/prev.svg */ "./src/pages/product/images/prev.svg");
/* harmony import */ var _images_prev_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_prev_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_next_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/next.svg */ "./src/pages/product/images/next.svg");
/* harmony import */ var _images_next_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_next_svg__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\pages\\product\\Product.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const carouselProps = {
  indicators: false,
  prevIcon: __jsx("img", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.carousel_arrows,
    src: _images_prev_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }),
  nextIcon: __jsx("img", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.carousel_arrows,
    src: _images_next_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })
};

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
    let {
      query
    } = router;

    try {
      let res = await fetch(`http://localhost:4000/phones/${query.id}`);
      let product = await res.json();
      setProduct(product);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!product) {
      load();
    } else if (product.id != router.query.id) {
      console.log('yee');
    }
  });

  if (error) {
    return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    });
  }

  if (loading) return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  });

  let CarouselComponents = __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), product.gallery.map(item => {
    return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.carousel_wrap,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.gallery_image,
      src: item,
      alt: "Gallery",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    })));
  }));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.single_page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.product_ceil,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, CarouselComponents)), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }))))));
};

_s(ProductContainer, "cLdCpOPTgS3hgwADuHlZndndfFc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = ProductContainer;

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
    const res = await fetch(`http://localhost:4000/phones/${id}`);
    serverProduct = await res.json();
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

var _c;

$RefreshReg$(_c, "ProductContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJjYXJvdXNlbFByb3BzIiwiaW5kaWNhdG9ycyIsInByZXZJY29uIiwic3R5bGVzIiwiY2Fyb3VzZWxfYXJyb3dzIiwicHJldkFycm93IiwibmV4dEljb24iLCJuZXh0QXJyb3ciLCJQcm9kdWN0Q29udGFpbmVyIiwic2VydmVyUHJvZHVjdCIsInNlcnZlckVycm9yIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWQiLCJxdWVyeSIsInJlcyIsImZldGNoIiwiaWQiLCJqc29uIiwiZXJyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIkNhcm91c2VsQ29tcG9uZW50cyIsImdhbGxlcnkiLCJtYXAiLCJpdGVtIiwiY2Fyb3VzZWxfd3JhcCIsImdhbGxlcnlfaW1hZ2UiLCJzaW5nbGVfcGFnZSIsInByb2R1Y3RfY2VpbCIsImdldEluaXRpYWxQcm9wcyIsInJlcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGFBQWEsR0FBRztBQUNwQkMsWUFBVSxFQUFFLEtBRFE7QUFFcEJDLFVBQVEsRUFBRTtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsZUFBdkI7QUFBd0MsT0FBRyxFQUFFQyx1REFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZVO0FBR3BCQyxVQUFRLEVBQUU7QUFBSyxhQUFTLEVBQUVILDBEQUFNLENBQUNDLGVBQXZCO0FBQXdDLE9BQUcsRUFBRUcsdURBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIVSxDQUF0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QUFzQ1Asa0JBQXRDLENBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBYSxXQUFPLEVBQUVuQixPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBREYsQ0FERixDQURGO0FBZ0JELENBdEVEOztHQUFNSCxnQjtVQUtTVyxxRDs7O0tBTFRYLGdCOztBQXdFTkEsZ0JBQWdCLENBQUM4QixlQUFqQixHQUFtQyxPQUFPO0FBQUVDLEtBQUY7QUFBT2xCO0FBQVAsQ0FBUCxLQUEwQjtBQUMzRCxNQUFJO0FBQUVHO0FBQUYsTUFBU0gsS0FBYjtBQUNBLE1BQUlaLGFBQWEsR0FBRyxJQUFwQjs7QUFDQSxNQUFJLENBQUM4QixHQUFMLEVBQVU7QUFDUixXQUFPO0FBQUU5QjtBQUFGLEtBQVA7QUFDRDs7QUFDRCxNQUFJO0FBQ0YsVUFBTWEsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxnQ0FBK0JDLEVBQUcsRUFBcEMsQ0FBdkI7QUFDQWYsaUJBQWEsR0FBRyxNQUFNYSxHQUFHLENBQUNHLElBQUosRUFBdEI7QUFDRCxHQUhELENBR0UsT0FBT1QsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFTjtBQUFGLEtBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQUVEO0FBQUYsR0FBUDtBQUNELENBZEQ7O0FBZ0JlRCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL3Byb2R1Y3QvW2lkXS41NjY0MWQ0NzI1OTc3MThjNTQxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJ1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9kdWN0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBwcmV2QXJyb3cgZnJvbSAnLi9pbWFnZXMvcHJldi5zdmcnXHJcbmltcG9ydCBuZXh0QXJyb3cgZnJvbSAnLi9pbWFnZXMvbmV4dC5zdmcnXHJcblxyXG5jb25zdCBjYXJvdXNlbFByb3BzID0ge1xyXG4gIGluZGljYXRvcnM6IGZhbHNlLFxyXG4gIHByZXZJY29uOiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2Fycm93c30gc3JjPXtwcmV2QXJyb3d9IC8+LFxyXG4gIG5leHRJY29uOiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2Fycm93c30gc3JjPXtuZXh0QXJyb3d9IC8+LFxyXG59XHJcblxyXG5jb25zdCBQcm9kdWN0Q29udGFpbmVyID0gKHsgc2VydmVyUHJvZHVjdCwgc2VydmVyRXJyb3IgfSkgPT4ge1xyXG4gIGxldCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShzZXJ2ZXJQcm9kdWN0KVxyXG4gIGxldCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSghc2VydmVyUHJvZHVjdClcclxuICBsZXQgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShzZXJ2ZXJFcnJvcilcclxuXHJcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgICBsZXQgeyBxdWVyeSB9ID0gcm91dGVyXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGhvbmVzLyR7cXVlcnkuaWR9YClcclxuICAgICAgbGV0IHByb2R1Y3QgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgIGxvYWQoKVxyXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0LmlkICE9IHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygneWVlJylcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3IgLz5cclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz5cclxuXHJcbiAgbGV0IENhcm91c2VsQ29tcG9uZW50cyA9IChcclxuICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQcm9wc30+XHJcbiAgICAgIHtwcm9kdWN0LmdhbGxlcnkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxfd3JhcH0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5X2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdhbGxlcnlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlX3BhZ2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X2NlaWx9PntDYXJvdXNlbENvbXBvbmVudHN9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0Q29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xyXG4gIGxldCB7IGlkIH0gPSBxdWVyeVxyXG4gIGxldCBzZXJ2ZXJQcm9kdWN0ID0gbnVsbFxyXG4gIGlmICghcmVxKSB7XHJcbiAgICByZXR1cm4geyBzZXJ2ZXJQcm9kdWN0IH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGhvbmVzLyR7aWR9YClcclxuICAgIHNlcnZlclByb2R1Y3QgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHNlcnZlckVycm9yIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHNlcnZlclByb2R1Y3QgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=