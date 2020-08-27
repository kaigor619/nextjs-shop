webpackHotUpdate_N_E("pages/shop/product/[id]",{

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: phones, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"phones\":[{\"name\":\"Realme C11\",\"price\":2999,\"previewUrl\":\"/image/1/preview.webp\",\"gallery\":[\"/image/1/1.webp\",\"/image/1/2.webp\",\"/image/1/3.webp\"],\"id\":1,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Apple iPhone 11\",\"price\":24499,\"previewUrl\":\"/image/2/preview.webp\",\"gallery\":[\"/image/2/1.webp\",\"/image/2/2.webp\",\"/image/2/3.webp\"],\"id\":2,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Samsung Galaxy S10\",\"price\":17999,\"previewUrl\":\"/image/3/preview.webp\",\"gallery\":[\"/image/3/1.webp\",\"/image/3/2.webp\",\"/image/3/3.webp\"],\"id\":3,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Realme C11\",\"price\":2999,\"previewUrl\":\"/image/1/preview.webp\",\"gallery\":[\"/image/1/1.webp\",\"/image/1/2.webp\",\"/image/1/3.webp\"],\"id\":4,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Apple iPhone 11\",\"price\":24499,\"previewUrl\":\"/image/2/preview.webp\",\"gallery\":[\"/image/2/1.webp\",\"/image/2/2.webp\",\"/image/2/3.webp\"],\"id\":5,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"},{\"name\":\"Samsung Galaxy S10\",\"price\":17999,\"previewUrl\":\"/image/3/preview.webp\",\"gallery\":[\"/image/3/1.webp\",\"/image/3/2.webp\",\"/image/3/3.webp\"],\"id\":6,\"attr\":[\"Black\",\"Blue\",\"Gold\"],\"description\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos modi adipisci cupiditate culpa distinctio porro ad sit at dolorem.\"}]}");

/***/ }),

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
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../db.json */ "./db.json", 1);


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
      lineNumber: 15,
      columnNumber: 13
    }
  }),
  nextIcon: __jsx("img", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel_arrows,
    src: _images_next_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  })
};

const ProductContainer = ({
  serverProduct,
  serverError
}) => {
  _s();

  console.log(_db_json__WEBPACK_IMPORTED_MODULE_10__);
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
      let product = await Object(_service_phone_service__WEBPACK_IMPORTED_MODULE_6__["default"])().getPhone(query.id);
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
        lineNumber: 49,
        columnNumber: 12
      }
    });
  }

  if (loading) return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  });

  let CarouselComponents = __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), product.gallery.map(item => {
    return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel_wrap,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.gallery_image,
      src: item,
      alt: "Gallery",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    })));
  }));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.single_page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.product_ceil,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, CarouselComponents)), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJjYXJvdXNlbFByb3BzIiwiaW5kaWNhdG9ycyIsInByZXZJY29uIiwic3R5bGVzIiwiY2Fyb3VzZWxfYXJyb3dzIiwicHJldkFycm93IiwibmV4dEljb24iLCJuZXh0QXJyb3ciLCJQcm9kdWN0Q29udGFpbmVyIiwic2VydmVyUHJvZHVjdCIsInNlcnZlckVycm9yIiwiY29uc29sZSIsImxvZyIsImRiIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWQiLCJxdWVyeSIsIlBob25lU2VydmljZSIsImdldFBob25lIiwiaWQiLCJlcnIiLCJ1c2VFZmZlY3QiLCJDYXJvdXNlbENvbXBvbmVudHMiLCJnYWxsZXJ5IiwibWFwIiwiaXRlbSIsImNhcm91c2VsX3dyYXAiLCJnYWxsZXJ5X2ltYWdlIiwic2luZ2xlX3BhZ2UiLCJwcm9kdWN0X2NlaWwiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUc7QUFDcEJDLFlBQVUsRUFBRSxLQURRO0FBRXBCQyxVQUFRLEVBQUU7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLGVBQXZCO0FBQXdDLE9BQUcsRUFBRUMsdURBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGVTtBQUdwQkMsVUFBUSxFQUFFO0FBQUssYUFBUyxFQUFFSCwwREFBTSxDQUFDQyxlQUF2QjtBQUF3QyxPQUFHLEVBQUVHLHVEQUE3QztBQUFBO0FBQUE7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1Asa0JBQXRDLENBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBYSxXQUFPLEVBQUVoQixPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBREYsQ0FERixDQURGO0FBZ0JELENBdkVEOztHQUFNTixnQjtVQU1TYyxxRDs7O0tBTlRkLGdCOztBQXlFTkEsZ0JBQWdCLENBQUM4QixlQUFqQixHQUFtQyxPQUFPO0FBQUVDLEtBQUY7QUFBT2Y7QUFBUCxDQUFQLEtBQTBCO0FBQzNELE1BQUk7QUFBRUc7QUFBRixNQUFTSCxLQUFiO0FBQ0EsTUFBSWYsYUFBYSxHQUFHLElBQXBCOztBQUNBLE1BQUksQ0FBQzhCLEdBQUwsRUFBVTtBQUNSLFdBQU87QUFBRTlCO0FBQUYsS0FBUDtBQUNEOztBQUNELE1BQUk7QUFDRkEsaUJBQWEsR0FBRyxNQUFNZ0Isc0VBQVksR0FBR0MsUUFBZixDQUF3QkMsRUFBeEIsQ0FBdEI7QUFDRCxHQUZELENBRUUsT0FBT1IsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFVDtBQUFGLEtBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQUVEO0FBQUYsR0FBUDtBQUNELENBYkQ7O0FBZWVELCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvcHJvZHVjdC9baWRdLmYzMWMyOTkyZWQ5NjllOWMyY2QwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nXHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuaW1wb3J0IFBob25lU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Bob25lLXNlcnZpY2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9kdWN0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBwcmV2QXJyb3cgZnJvbSAnLi9pbWFnZXMvcHJldi5zdmcnXHJcbmltcG9ydCBuZXh0QXJyb3cgZnJvbSAnLi9pbWFnZXMvbmV4dC5zdmcnXHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9kYi5qc29uJ1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQcm9wcyA9IHtcclxuICBpbmRpY2F0b3JzOiBmYWxzZSxcclxuICBwcmV2SWNvbjogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9hcnJvd3N9IHNyYz17cHJldkFycm93fSAvPixcclxuICBuZXh0SWNvbjogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9hcnJvd3N9IHNyYz17bmV4dEFycm93fSAvPixcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9ICh7IHNlcnZlclByb2R1Y3QsIHNlcnZlckVycm9yIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhkYilcclxuICBsZXQgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoc2VydmVyUHJvZHVjdClcclxuICBsZXQgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoIXNlcnZlclByb2R1Y3QpXHJcbiAgbGV0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoc2VydmVyRXJyb3IpXHJcblxyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xyXG4gICAgbGV0IHsgcXVlcnkgfSA9IHJvdXRlclxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgUGhvbmVTZXJ2aWNlKCkuZ2V0UGhvbmUocXVlcnkuaWQpXHJcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgIGxvYWQoKVxyXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0LmlkICE9IHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGxvYWQoKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvciAvPlxyXG4gIH1cclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPlxyXG5cclxuICBsZXQgQ2Fyb3VzZWxDb21wb25lbnRzID0gKFxyXG4gICAgPENhcm91c2VsIHsuLi5jYXJvdXNlbFByb3BzfT5cclxuICAgICAge3Byb2R1Y3QuZ2FsbGVyeS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF93cmFwfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnlfaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiR2FsbGVyeVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW5nbGVfcGFnZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfY2VpbH0+e0Nhcm91c2VsQ29tcG9uZW50c308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RDb250YWluZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxLCBxdWVyeSB9KSA9PiB7XHJcbiAgbGV0IHsgaWQgfSA9IHF1ZXJ5XHJcbiAgbGV0IHNlcnZlclByb2R1Y3QgPSBudWxsXHJcbiAgaWYgKCFyZXEpIHtcclxuICAgIHJldHVybiB7IHNlcnZlclByb2R1Y3QgfVxyXG4gIH1cclxuICB0cnkge1xyXG4gICAgc2VydmVyUHJvZHVjdCA9IGF3YWl0IFBob25lU2VydmljZSgpLmdldFBob25lKGlkKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzZXJ2ZXJFcnJvciB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzZXJ2ZXJQcm9kdWN0IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENvbnRhaW5lclxyXG4iXSwic291cmNlUm9vdCI6IiJ9