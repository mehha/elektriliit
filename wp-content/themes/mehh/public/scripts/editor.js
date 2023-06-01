"use strict";
(self["webpackChunksage"] = self["webpackChunksage"] || []).push([["/scripts/editor"],{

/***/ "./resources/scripts/editor.js":
/*!*************************************!*\
  !*** ./resources/scripts/editor.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.unregisterBlockStyle)('core/button', 'outline');
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockStyle)('core/button', {
    name: 'outline',
    label: 'Outline'
  });
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockStyle)('core/button', {
    name: 'arrow',
    label: 'Arrow'
  });
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockVariation)('core/social-link', {
    name: 'elektriliit',
    title: 'Elektriliit',
    attributes: {
      service: 'elektriliit'
    }
  });
});

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/scripts/editor.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3NjcmlwdHMvZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDYztBQUN5RDtBQUVyR0EsMkRBQVEsQ0FBQyxZQUFNO0VBQ2JDLHVFQUFvQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7RUFFOUNDLHFFQUFrQixDQUFDLGFBQWEsRUFBRTtJQUNoQ0UsSUFBSSxFQUFFLFNBQVM7SUFDZkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0VBRUZILHFFQUFrQixDQUFDLGFBQWEsRUFBRTtJQUNoQ0UsSUFBSSxFQUFFLE9BQU87SUFDYkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0VBRUZGLHlFQUFzQixDQUFDLGtCQUFrQixFQUFFO0lBQ3pDQyxJQUFJLEVBQUUsYUFBYTtJQUNuQkUsS0FBSyxFQUFFLGFBQWE7SUFDcEJDLFVBQVUsRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBYztFQUN2QyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN0QkY7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9zYWdlL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL3NhZ2UvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkb21SZWFkeVwiXSIsIndlYnBhY2s6Ly9zYWdlL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWRpdFBvc3RcIl0iXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAd29yZHByZXNzL2VkaXQtcG9zdCc7XG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xuaW1wb3J0IHsgdW5yZWdpc3RlckJsb2NrU3R5bGUsIHJlZ2lzdGVyQmxvY2tTdHlsZSwgcmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbiB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuZG9tUmVhZHkoKCkgPT4ge1xuICB1bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9idXR0b24nLCAnb3V0bGluZScpO1xuXG4gIHJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9idXR0b24nLCB7XG4gICAgbmFtZTogJ291dGxpbmUnLFxuICAgIGxhYmVsOiAnT3V0bGluZScsXG4gIH0pO1xuXG4gIHJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9idXR0b24nLCB7XG4gICAgbmFtZTogJ2Fycm93JyxcbiAgICBsYWJlbDogJ0Fycm93JyxcbiAgfSk7XG5cbiAgcmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9zb2NpYWwtbGluaycsIHtcbiAgICBuYW1lOiAnZWxla3RyaWxpaXQnLFxuICAgIHRpdGxlOiAnRWxla3RyaWxpaXQnLFxuICAgIGF0dHJpYnV0ZXM6IHsgc2VydmljZTogJ2VsZWt0cmlsaWl0JyB9LFxuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVkaXRQb3N0XCJdOyJdLCJuYW1lcyI6WyJkb21SZWFkeSIsInVucmVnaXN0ZXJCbG9ja1N0eWxlIiwicmVnaXN0ZXJCbG9ja1N0eWxlIiwicmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbiIsIm5hbWUiLCJsYWJlbCIsInRpdGxlIiwiYXR0cmlidXRlcyIsInNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9