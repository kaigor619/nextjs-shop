webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartItem */ "./src/components/Modal/CartItem.js");
/* harmony import */ var _CartEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartEmpty */ "./src/components/Modal/CartEmpty.js");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./back.svg */ "./src/components/Modal/back.svg");
/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_back_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./close.svg */ "./src/components/Modal/close.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_close_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Programming languages\\Next.js\\re-store\\src\\components\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const VerticalModal = ({
  modal,
  changeModal,
  cart,
  deleteCartItem,
  changeCount
}) => {
  if (!modal) return null;
  let cart_items = cart.map(item => {
    return __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.name + item.id,
      product: item,
      removeProduct: deleteCartItem,
      changeCount: changeCount,
      changeModal: changeModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    });
  });
  let total_price = cart.reduce((previousValue, {
    price,
    count
  }) => {
    return previousValue + +price * +count;
  }, 0);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("style", {
    global: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, `

        .modal .cart_empty{
          padding: 100px 0;
          text-align:center;
        }
        .modal .close_modal{
          padding: 10px;
          cursor: pointer;
        }

        .modal .close_modal img{
          width: 15px;
        }
        .modal .modal_header {
            display: flex;
            justify-content: space-between;
            align-items:center;
            padding: 10px 30px;
            border-bottom: 1px solid silver;
          }

        .modal .modal_header h3{
              margin-bottom:0px;
              font-weight:400;
          }

        .modal .modal_body{
            padding: 0 30px;
            flex:1;
          }

        .modal  .modal_body .product_item{
              padding: 15px 0;
          }

          .modal  .modal_body .image_preview img{
            max-width:70px;
            width:100%;
            height:auto;
          }
          .modal  .modal_body .remove_icon{
              font-size:20px;
              color:red;
          }

          .modal  .modal_body .full_price{
            font-size:18px;
          }


        .modal  .modal_footer{
            padding: 15px 30px;
            border-top:1px solid silver;
          }
        .modal  .modal_footer .total_price{
            font-size: 20px;
            margin-left:10px;
            font-weight:700;
          }
        .modal  .modal_footer .total{
            font-size: 20px;
          }
        .modal  .modal_footer .back_shopping_icon{
            width:10px;
          }

        .modal  .modal_footer .checkout_icon{
            font-size:12px;
            margin-left:6px;
          }

        .modal  .modal_footer .btn_checkout{
            font-size:16px;
          }

          @media (min-width: 576px){
            .modal-dialog {
                max-width: 700px;
                margin: 1.75rem auto;
            } 
          }

          @media screen and (max-width:576px){
            .modal{
              padding:0;
            }
            .modal .modal_body{
              overflow-y:scroll;
            }
            .modal .modal_body .full_price{
              font-size: 16px;
            }
            .modal .modal-dialog-centered{
              height:100%;
              min-height:100%;
              max-height:100%;
            }
            .modal .modal-content{
              height:100%;
            }
            .modal .modal-dialog{
              margin:0;
            }
            .modal .back_shopping{
              display: none;
            }
            .modal .wrap_total_checkout{
              width:100%;
            }
            .modal .modal_footer .total{
              display: flex;
              align-items:center;
              justify-content:space-between;
              margin-bottom:10px;
              margin-right:0;
            }
            .modal .modal_footer {
              padding: 10px;
              border-top:none;
              box-shadow: 0px 0px 4px 0 #b1b1b1;
            }
            .modal .modal_header {
              padding: 10px 20px;
              border-bottom:none;
              box-shadow: 0px 0px 4px 0 #b1b1b1;
            }
            .modal .modal_footer .total .total_price{
              margin:0;
            }
            .modal .modal_footer .checkout_icon{
              font-size: 14px;
            }
          }
        `), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    show: modal,
    onHide: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, "Cart"), __jsx("div", {
    onClick: () => changeModal(false),
    className: "close_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "close_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }))), cart.length > 0 ? __jsx("div", {
    className: "modal_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, cart_items) : __jsx(_CartEmpty__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "modal_footer d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "back_shopping text-decoration-none",
    onClick: () => changeModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, ' ', __jsx("img", {
    src: _back_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "back_shopping_icon",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }), " Continue shopping"), __jsx("div", {
    className: "wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, "Total:"), ' ', __jsx("span", {
    className: "total_price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, total_price, "$")), cart.length > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "btn_checkout ml-sm-3 ml-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, "Checkout", ' ', __jsx("i", {
    className: "fa checkout_icon fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }))))));
};

_c = VerticalModal;

const mapStateToProps = ({
  modal,
  cart
}) => {
  if (!modal) return {
    modal
  };
  return {
    modal,
    cart
  };
};

const mapDispatchToProps = {
  changeModal: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeModal"],
  deleteCartItem: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCart"],
  changeCount: _redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeCountById"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(VerticalModal)); // export default VerticalModal

var _c;

$RefreshReg$(_c, "VerticalModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiXSwibmFtZXMiOlsiVmVydGljYWxNb2RhbCIsIm1vZGFsIiwiY2hhbmdlTW9kYWwiLCJjYXJ0IiwiZGVsZXRlQ2FydEl0ZW0iLCJjaGFuZ2VDb3VudCIsImNhcnRfaXRlbXMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIiwidG90YWxfcHJpY2UiLCJyZWR1Y2UiLCJwcmV2aW91c1ZhbHVlIiwicHJpY2UiLCJjb3VudCIsImNsb3NlIiwibGVuZ3RoIiwiYmFjayIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkFjdGlvbiIsImNoYW5nZUNvdW50QnlJZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0FBQ3JCQyxPQURxQjtBQUVyQkMsYUFGcUI7QUFHckJDLE1BSHFCO0FBSXJCQyxnQkFKcUI7QUFLckJDO0FBTHFCLENBQUQsS0FNaEI7QUFDSixNQUFJLENBQUNKLEtBQUwsRUFBWSxPQUFPLElBQVA7QUFFWixNQUFJSyxVQUFVLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFVQyxJQUFELElBQVU7QUFDbEMsV0FDRSxNQUFDLGlEQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQUwsR0FBWUQsSUFBSSxDQUFDRSxFQUR4QjtBQUVFLGFBQU8sRUFBRUYsSUFGWDtBQUdFLG1CQUFhLEVBQUVKLGNBSGpCO0FBSUUsaUJBQVcsRUFBRUMsV0FKZjtBQUtFLGlCQUFXLEVBQUVILFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBU0QsR0FWZ0IsQ0FBakI7QUFZQSxNQUFJUyxXQUFXLEdBQUdSLElBQUksQ0FBQ1MsTUFBTCxDQUFZLENBQUND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QUZGLENBUEosQ0FYRixDQXJCRixDQTFJRixDQURGO0FBK0xELENBeE5EOztLQUFNakIsYTs7QUEwTk4sTUFBTW1CLGVBQWUsR0FBRyxDQUFDO0FBQUVsQixPQUFGO0FBQVNFO0FBQVQsQ0FBRCxLQUFxQjtBQUMzQyxNQUFJLENBQUNGLEtBQUwsRUFBWSxPQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUVaLFNBQU87QUFBRUEsU0FBRjtBQUFTRTtBQUFULEdBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1pQixrQkFBa0IsR0FBRztBQUN6QmxCLGFBQVcsRUFBRW1CLDBEQURZO0FBRXpCakIsZ0JBQWMsRUFBRWlCLHlEQUZTO0FBR3pCaEIsYUFBVyxFQUFFZ0IsOERBQXNCQztBQUhWLENBQTNCO0FBTWVDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDcEIsYUFBN0MsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NjBkOTM1Njk4OTcwMWIwMmRhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBBY3Rpb24gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IENhcnRJdGVtIGZyb20gJy4vQ2FydEl0ZW0nXHJcbmltcG9ydCBDYXJ0RW1wdHkgZnJvbSAnLi9DYXJ0RW1wdHknXHJcbmltcG9ydCBiYWNrIGZyb20gJy4vYmFjay5zdmcnXHJcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnN2ZydcclxuXHJcbmNvbnN0IFZlcnRpY2FsTW9kYWwgPSAoe1xyXG4gIG1vZGFsLFxyXG4gIGNoYW5nZU1vZGFsLFxyXG4gIGNhcnQsXHJcbiAgZGVsZXRlQ2FydEl0ZW0sXHJcbiAgY2hhbmdlQ291bnQsXHJcbn0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4gbnVsbFxyXG5cclxuICBsZXQgY2FydF9pdGVtcyA9IGNhcnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FydEl0ZW1cclxuICAgICAgICBrZXk9e2l0ZW0ubmFtZSArIGl0ZW0uaWR9XHJcbiAgICAgICAgcHJvZHVjdD17aXRlbX1cclxuICAgICAgICByZW1vdmVQcm9kdWN0PXtkZWxldGVDYXJ0SXRlbX1cclxuICAgICAgICBjaGFuZ2VDb3VudD17Y2hhbmdlQ291bnR9XHJcbiAgICAgICAgY2hhbmdlTW9kYWw9e2NoYW5nZU1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIGxldCB0b3RhbF9wcmljZSA9IGNhcnQucmVkdWNlKChwcmV2aW91c1ZhbHVlLCB7IHByaWNlLCBjb3VudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSArICtwcmljZSAqICtjb3VudFxyXG4gIH0sIDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsPVwidHJ1ZVwiPlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgIC5tb2RhbCAuY2FydF9lbXB0eXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIC5jbG9zZV9tb2RhbHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9kYWwgLmNsb3NlX21vZGFsIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwgLm1vZGFsX2hlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbCAubW9kYWxfaGVhZGVyIGgze1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsIC5tb2RhbF9ib2R5e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsICAubW9kYWxfYm9keSAucHJvZHVjdF9pdGVte1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubW9kYWwgIC5tb2RhbF9ib2R5IC5pbWFnZV9wcmV2aWV3IGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjcwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vZGFsICAubW9kYWxfYm9keSAucmVtb3ZlX2ljb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tb2RhbCAgLm1vZGFsX2JvZHkgLmZ1bGxfcHJpY2V7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLm1vZGFsICAubW9kYWxfZm9vdGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAubW9kYWwgIC5tb2RhbF9mb290ZXIgLnRvdGFsX3ByaWNle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAubW9kYWwgIC5tb2RhbF9mb290ZXIgLnRvdGFse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsICAubW9kYWxfZm9vdGVyIC5iYWNrX3Nob3BwaW5nX2ljb257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbCAgLm1vZGFsX2Zvb3RlciAuY2hlY2tvdXRfaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsICAubW9kYWxfZm9vdGVyIC5idG5fY2hlY2tvdXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAgICAgICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgICAgICAubW9kYWx7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbCAubW9kYWxfYm9keXtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWwgLm1vZGFsX2JvZHkgLmZ1bGxfcHJpY2V7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbCAubW9kYWwtZGlhbG9nLWNlbnRlcmVke1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbCAubW9kYWwtZGlhbG9ne1xyXG4gICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbCAuYmFja19zaG9wcGluZ3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbCAud3JhcF90b3RhbF9jaGVja291dHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbCAubW9kYWxfZm9vdGVyIC50b3RhbHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsIC5tb2RhbF9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDpub25lO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDAgI2IxYjFiMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWwgLm1vZGFsX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwICNiMWIxYjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsIC5tb2RhbF9mb290ZXIgLnRvdGFsIC50b3RhbF9wcmljZXtcclxuICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWwgLm1vZGFsX2Zvb3RlciAuY2hlY2tvdXRfaWNvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgIHNob3c9e21vZGFsfVxyXG4gICAgICAgIG9uSGlkZT17KCkgPT4gY2hhbmdlTW9kYWwoZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMz5DYXJ0PC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPVwiY2xvc2VfbW9kYWxcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZV9pY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Y2FydC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+e2NhcnRfaXRlbXN9PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxDYXJ0RW1wdHkgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2Zvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tfc2hvcHBpbmcgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtiYWNrfSBjbGFzc05hbWU9XCJiYWNrX3Nob3BwaW5nX2ljb25cIiBhbHQ9XCJcIiAvPiBDb250aW51ZVxyXG4gICAgICAgICAgICBzaG9wcGluZ1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcF90b3RhbF9jaGVja291dCBkLWZsZXggYWxpZ24taXRlbXMtc20tY2VudGVyIGZsZXgtc20tcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbDo8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3RhbF9wcmljZVwiPnt0b3RhbF9wcmljZX0kPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJidG5fY2hlY2tvdXQgbWwtc20tMyBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgICBDaGVja291dHsnICd9XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBjaGVja291dF9pY29uIGZhLWNyZWRpdC1jYXJkLWFsdFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsLCBjYXJ0IH0pID0+IHtcclxuICBpZiAoIW1vZGFsKSByZXR1cm4geyBtb2RhbCB9XHJcblxyXG4gIHJldHVybiB7IG1vZGFsLCBjYXJ0IH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGNoYW5nZU1vZGFsOiBBY3Rpb24uY2hhbmdlTW9kYWwsXHJcbiAgZGVsZXRlQ2FydEl0ZW06IEFjdGlvbi5kZWxldGVDYXJ0LFxyXG4gIGNoYW5nZUNvdW50OiBBY3Rpb24uY2hhbmdlQ291bnRCeUlkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWZXJ0aWNhbE1vZGFsKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBWZXJ0aWNhbE1vZGFsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=