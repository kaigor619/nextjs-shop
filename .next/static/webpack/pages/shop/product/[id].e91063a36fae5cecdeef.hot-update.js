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
        lineNumber: 48,
        columnNumber: 12
      }
    });
  }

  if (loading) return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 23
    }
  });

  let CarouselComponents = __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), product.gallery.map(item => {
    return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel_wrap,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.gallery_image,
      src: item,
      alt: "Gallery",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    })));
  }));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.single_page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.product_ceil,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, CarouselComponents)), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJjYXJvdXNlbFByb3BzIiwiaW5kaWNhdG9ycyIsInByZXZJY29uIiwic3R5bGVzIiwiY2Fyb3VzZWxfYXJyb3dzIiwicHJldkFycm93IiwibmV4dEljb24iLCJuZXh0QXJyb3ciLCJQcm9kdWN0Q29udGFpbmVyIiwic2VydmVyUHJvZHVjdCIsInNlcnZlckVycm9yIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWQiLCJxdWVyeSIsInJlcyIsImZldGNoIiwiaWQiLCJqc29uIiwiZXJyIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxDb21wb25lbnRzIiwiZ2FsbGVyeSIsIm1hcCIsIml0ZW0iLCJjYXJvdXNlbF93cmFwIiwiZ2FsbGVyeV9pbWFnZSIsInNpbmdsZV9wYWdlIiwicHJvZHVjdF9jZWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwiUGhvbmVTZXJ2aWNlIiwiZ2V0UGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUc7QUFDcEJDLFlBQVUsRUFBRSxLQURRO0FBRXBCQyxVQUFRLEVBQUU7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLGVBQXZCO0FBQXdDLE9BQUcsRUFBRUMsdURBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGVTtBQUdwQkMsVUFBUSxFQUFFO0FBQUssYUFBUyxFQUFFSCwwREFBTSxDQUFDQyxlQUF2QjtBQUF3QyxPQUFHLEVBQUVHLHVEQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1Asa0JBQXRDLENBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBYSxXQUFPLEVBQUVqQixPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBREYsQ0FERixDQURGO0FBZ0JELENBdkVEOztHQUFNSCxnQjtVQUtTVyxxRDs7O0tBTFRYLGdCOztBQXlFTkEsZ0JBQWdCLENBQUM0QixlQUFqQixHQUFtQyxPQUFPO0FBQUVDLEtBQUY7QUFBT2hCO0FBQVAsQ0FBUCxLQUEwQjtBQUMzRCxNQUFJO0FBQUVHO0FBQUYsTUFBU0gsS0FBYjtBQUNBLE1BQUlaLGFBQWEsR0FBRyxJQUFwQjs7QUFDQSxNQUFJLENBQUM0QixHQUFMLEVBQVU7QUFDUixXQUFPO0FBQUU1QjtBQUFGLEtBQVA7QUFDRDs7QUFDRCxNQUFJO0FBQ0YsVUFBTWEsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxnQ0FBK0JDLEVBQUcsRUFBcEMsQ0FBdkI7QUFDQWYsaUJBQWEsR0FBRyxNQUFNNkIsc0VBQVksR0FBR0MsUUFBZixDQUF3QmYsRUFBeEIsQ0FBdEI7QUFDRCxHQUhELENBR0UsT0FBT1IsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFTjtBQUFGLEtBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQUVEO0FBQUYsR0FBUDtBQUNELENBZEQ7O0FBZ0JlRCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL3Byb2R1Y3QvW2lkXS5lOTEwNjNhMzZmYWU1Y2VjZGVlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJ1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCBQaG9uZVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9waG9uZS1zZXJ2aWNlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJvZHVjdC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcHJldkFycm93IGZyb20gJy4vaW1hZ2VzL3ByZXYuc3ZnJ1xyXG5pbXBvcnQgbmV4dEFycm93IGZyb20gJy4vaW1hZ2VzL25leHQuc3ZnJ1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQcm9wcyA9IHtcclxuICBpbmRpY2F0b3JzOiBmYWxzZSxcclxuICBwcmV2SWNvbjogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9hcnJvd3N9IHNyYz17cHJldkFycm93fSAvPixcclxuICBuZXh0SWNvbjogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9hcnJvd3N9IHNyYz17bmV4dEFycm93fSAvPixcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9ICh7IHNlcnZlclByb2R1Y3QsIHNlcnZlckVycm9yIH0pID0+IHtcclxuICBsZXQgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoc2VydmVyUHJvZHVjdClcclxuICBsZXQgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoIXNlcnZlclByb2R1Y3QpXHJcbiAgbGV0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoc2VydmVyRXJyb3IpXHJcblxyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xyXG4gICAgbGV0IHsgcXVlcnkgfSA9IHJvdXRlclxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bob25lcy8ke3F1ZXJ5LmlkfWApXHJcbiAgICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBzZXRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBsb2FkKClcclxuICAgIH0gZWxzZSBpZiAocHJvZHVjdC5pZCAhPSByb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBsb2FkKClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3IgLz5cclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz5cclxuXHJcbiAgbGV0IENhcm91c2VsQ29tcG9uZW50cyA9IChcclxuICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQcm9wc30+XHJcbiAgICAgIHtwcm9kdWN0LmdhbGxlcnkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxfd3JhcH0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5X2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdhbGxlcnlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlX3BhZ2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X2NlaWx9PntDYXJvdXNlbENvbXBvbmVudHN9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0Q29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xyXG4gIGxldCB7IGlkIH0gPSBxdWVyeVxyXG4gIGxldCBzZXJ2ZXJQcm9kdWN0ID0gbnVsbFxyXG4gIGlmICghcmVxKSB7XHJcbiAgICByZXR1cm4geyBzZXJ2ZXJQcm9kdWN0IH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGhvbmVzLyR7aWR9YClcclxuICAgIHNlcnZlclByb2R1Y3QgPSBhd2FpdCBQaG9uZVNlcnZpY2UoKS5nZXRQaG9uZShpZClcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc2VydmVyRXJyb3IgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc2VydmVyUHJvZHVjdCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb250YWluZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==