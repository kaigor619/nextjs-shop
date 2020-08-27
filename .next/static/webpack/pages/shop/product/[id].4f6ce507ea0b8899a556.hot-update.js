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
      setLoading(true);
      load();
    }
  });

  if (error) {
    return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 12
      }
    });
  }

  if (loading) return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  });

  let CarouselComponents = __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), product.gallery.map(item => {
    return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.carousel_wrap,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.gallery_image,
      src: item,
      alt: "Gallery",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    })));
  }));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.single_page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.product_ceil,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, CarouselComponents)), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJjYXJvdXNlbFByb3BzIiwiaW5kaWNhdG9ycyIsInByZXZJY29uIiwic3R5bGVzIiwiY2Fyb3VzZWxfYXJyb3dzIiwicHJldkFycm93IiwibmV4dEljb24iLCJuZXh0QXJyb3ciLCJQcm9kdWN0Q29udGFpbmVyIiwic2VydmVyUHJvZHVjdCIsInNlcnZlckVycm9yIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWQiLCJxdWVyeSIsInJlcyIsImZldGNoIiwiaWQiLCJqc29uIiwiZXJyIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxDb21wb25lbnRzIiwiZ2FsbGVyeSIsIm1hcCIsIml0ZW0iLCJjYXJvdXNlbF93cmFwIiwiZ2FsbGVyeV9pbWFnZSIsInNpbmdsZV9wYWdlIiwicHJvZHVjdF9jZWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxZQUFVLEVBQUUsS0FEUTtBQUVwQkMsVUFBUSxFQUFFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxlQUF2QjtBQUF3QyxPQUFHLEVBQUVDLHVEQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlU7QUFHcEJDLFVBQVEsRUFBRTtBQUFLLGFBQVMsRUFBRUgsMERBQU0sQ0FBQ0MsZUFBdkI7QUFBd0MsT0FBRyxFQUFFRyx1REFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhVLENBQXRCOztBQU1BLE1BQU1DLGdC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QyxDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQWEsV0FBTyxFQUFFakIsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixDQURGLENBREYsQ0FERjtBQWdCRCxDQXZFRDs7R0FBTUgsZ0I7VUFLU1cscUQ7OztLQUxUWCxnQjs7QUF5RU5BLGdCQUFnQixDQUFDNEIsZUFBakIsR0FBbUMsT0FBTztBQUFFQyxLQUFGO0FBQU9oQjtBQUFQLENBQVAsS0FBMEI7QUFDM0QsTUFBSTtBQUFFRztBQUFGLE1BQVNILEtBQWI7QUFDQSxNQUFJWixhQUFhLEdBQUcsSUFBcEI7O0FBQ0EsTUFBSSxDQUFDNEIsR0FBTCxFQUFVO0FBQ1IsV0FBTztBQUFFNUI7QUFBRixLQUFQO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGLFVBQU1hLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsZ0NBQStCQyxFQUFHLEVBQXBDLENBQXZCO0FBQ0FmLGlCQUFhLEdBQUcsTUFBTWEsR0FBRyxDQUFDRyxJQUFKLEVBQXRCO0FBQ0QsR0FIRCxDQUdFLE9BQU9ULEtBQVAsRUFBYztBQUNkLFdBQU87QUFBRU47QUFBRixLQUFQO0FBQ0Q7O0FBRUQsU0FBTztBQUFFRDtBQUFGLEdBQVA7QUFDRCxDQWREOztBQWdCZUQsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9wcm9kdWN0L1tpZF0uNGY2Y2U1MDdlYTBiODg5OWE1NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvbidcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJvZHVjdC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcHJldkFycm93IGZyb20gJy4vaW1hZ2VzL3ByZXYuc3ZnJ1xyXG5pbXBvcnQgbmV4dEFycm93IGZyb20gJy4vaW1hZ2VzL25leHQuc3ZnJ1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQcm9wcyA9IHtcclxuICBpbmRpY2F0b3JzOiBmYWxzZSxcclxuICBwcmV2SWNvbjogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9hcnJvd3N9IHNyYz17cHJldkFycm93fSAvPixcclxuICBuZXh0SWNvbjogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9hcnJvd3N9IHNyYz17bmV4dEFycm93fSAvPixcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9ICh7IHNlcnZlclByb2R1Y3QsIHNlcnZlckVycm9yIH0pID0+IHtcclxuICBsZXQgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoc2VydmVyUHJvZHVjdClcclxuICBsZXQgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoIXNlcnZlclByb2R1Y3QpXHJcbiAgbGV0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoc2VydmVyRXJyb3IpXHJcblxyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xyXG4gICAgbGV0IHsgcXVlcnkgfSA9IHJvdXRlclxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bob25lcy8ke3F1ZXJ5LmlkfWApXHJcbiAgICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBzZXRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBsb2FkKClcclxuICAgIH0gZWxzZSBpZiAocHJvZHVjdC5pZCAhPSByb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBsb2FkKClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3IgLz5cclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz5cclxuXHJcbiAgbGV0IENhcm91c2VsQ29tcG9uZW50cyA9IChcclxuICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQcm9wc30+XHJcbiAgICAgIHtwcm9kdWN0LmdhbGxlcnkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxfd3JhcH0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5X2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdhbGxlcnlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlX3BhZ2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X2NlaWx9PntDYXJvdXNlbENvbXBvbmVudHN9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0Q29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xyXG4gIGxldCB7IGlkIH0gPSBxdWVyeVxyXG4gIGxldCBzZXJ2ZXJQcm9kdWN0ID0gbnVsbFxyXG4gIGlmICghcmVxKSB7XHJcbiAgICByZXR1cm4geyBzZXJ2ZXJQcm9kdWN0IH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGhvbmVzLyR7aWR9YClcclxuICAgIHNlcnZlclByb2R1Y3QgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHNlcnZlckVycm9yIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHNlcnZlclByb2R1Y3QgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=