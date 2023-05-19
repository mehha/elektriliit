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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3NjcmlwdHMvZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDYztBQUNpQztBQUU3RUEsMkRBQVEsQ0FBQyxZQUFNO0VBQ2JDLHVFQUFvQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7RUFFOUNDLHFFQUFrQixDQUFDLGFBQWEsRUFBRTtJQUNoQ0MsSUFBSSxFQUFFLFNBQVM7SUFDZkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0VBRUZGLHFFQUFrQixDQUFDLGFBQWEsRUFBRTtJQUNoQ0MsSUFBSSxFQUFFLE9BQU87SUFDYkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDaEJGOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vc2FnZS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9zYWdlL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZG9tUmVhZHlcIl0iLCJ3ZWJwYWNrOi8vc2FnZS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVkaXRQb3N0XCJdIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHdvcmRwcmVzcy9lZGl0LXBvc3QnO1xuaW1wb3J0IGRvbVJlYWR5IGZyb20gJ0B3b3JkcHJlc3MvZG9tLXJlYWR5JztcbmltcG9ydCB7IHVucmVnaXN0ZXJCbG9ja1N0eWxlLCByZWdpc3RlckJsb2NrU3R5bGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmRvbVJlYWR5KCgpID0+IHtcbiAgdW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywgJ291dGxpbmUnKTtcblxuICByZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywge1xuICAgIG5hbWU6ICdvdXRsaW5lJyxcbiAgICBsYWJlbDogJ091dGxpbmUnLFxuICB9KTtcblxuICByZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywge1xuICAgIG5hbWU6ICdhcnJvdycsXG4gICAgbGFiZWw6ICdBcnJvdycsXG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkb21SZWFkeVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWRpdFBvc3RcIl07Il0sIm5hbWVzIjpbImRvbVJlYWR5IiwidW5yZWdpc3RlckJsb2NrU3R5bGUiLCJyZWdpc3RlckJsb2NrU3R5bGUiLCJuYW1lIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9