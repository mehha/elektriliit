"use strict";
(self["webpackChunksage"] = self["webpackChunksage"] || []).push([["/scripts/app"],{

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/carousel */ "./node_modules/bootstrap/js/dist/carousel.js");
/* harmony import */ var bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/button */ "./node_modules/bootstrap/js/dist/button.js");
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tables */ "./resources/scripts/components/tables.js");
/* harmony import */ var _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/check-scroll */ "./resources/scripts/utilities/check-scroll.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forms */ "./resources/scripts/components/forms.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search */ "./resources/scripts/components/search.js");
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cookie_banner */ "./resources/scripts/components/cookie_banner.js");
// Bootstrap (importing BS scripts individually)




// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports







var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_4__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_5__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_6__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_7__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_8__.handleForms, _components_search__WEBPACK_IMPORTED_MODULE_9__.handleSearch, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_10__.handleCookieBanner];

// Run fn-s
for (var _i = 0, _mountedFns = mountedFns; _i < _mountedFns.length; _i++) {
  var demountFn = _mountedFns[_i];
  typeof demountFn === 'function' && demountFn();
}

/***/ }),

/***/ "./resources/scripts/components/cookie_banner.js":
/*!*******************************************************!*\
  !*** ./resources/scripts/components/cookie_banner.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCookieBanner": function() { return /* binding */ handleCookieBanner; }
/* harmony export */ });
function handleCookieBanner() {
  var cookieAcceptButton = document.getElementById("accept-cookies");
  if (!cookieAcceptButton) {
    return;
  }
  cookieAcceptButton.addEventListener("click", function () {
    document.getElementById("cookie-banner").style.display = "none";
    // Set a cookie to remember that the user has accepted the use of cookies
    document.cookie = "cookies_accepted=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
  });
  // Check if the cookie has already been set
  if (document.cookie.indexOf("cookies_accepted=true") !== -1) {
    document.getElementById("cookie-banner").style.display = "none";
  }
}

/***/ }),

/***/ "./resources/scripts/components/fancybox.js":
/*!**************************************************!*\
  !*** ./resources/scripts/components/fancybox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFancybox": function() { return /* binding */ handleFancybox; }
/* harmony export */ });
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");

function handleFancybox() {
  // Single
  var singleFancyItems = ['a[href$=".jpg"]:not(.no-fancy)', 'a[href$=".jpeg"]:not(.no-fancy)', 'a[href$=".png"]:not(.no-fancy)', 'a[href$=".webp"]:not(.no-fancy)', 'a[href$=".svg"]:not(.no-fancy)', '.fancyimage', '.fancyvideo'];
  if (!singleFancyItems.length) {
    return;
  }
  singleFancyItems.forEach(function (value) {
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind(value, {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"]
        }
      }
    });
  });

  // Gallery
  var galleryFancyItems = ['.gallery-item a:not(.no-fancy)'];
  if (!galleryFancyItems.length) {
    return;
  }
  galleryFancyItems.forEach(function (value) {
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind(value, {
      groupAll: true,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"]
        }
      }
    });
  });
}

/***/ }),

/***/ "./resources/scripts/components/forms.js":
/*!***********************************************!*\
  !*** ./resources/scripts/components/forms.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleForms": function() { return /* binding */ handleForms; }
/* harmony export */ });
function handleForms() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      // Recaptcha
      var reCaptcha;
      var FormCaptcha = document.querySelector('#g-recaptcha');
      if (event.target.classList.contains('needs-validation') && FormCaptcha) {
        // eslint-disable-next-line no-undef
        if (grecaptcha.getResponse(renderForm) === '') {
          reCaptcha = false;
          event.target.querySelector('#g-recaptcha').classList.add('captcha-error');
        } else {
          reCaptcha = true;
        }
      } else {
        reCaptcha = true;
      }
      if (!form.checkValidity() || !reCaptcha) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Recaptcha callback
  var renderForm;
  var FormCaptcha = document.querySelector('#g-recaptcha');
  window.CaptchaCallback = function () {
    if (FormCaptcha) {
      // eslint-disable-next-line no-undef
      renderForm = grecaptcha.render('g-recaptcha', {
        'sitekey': FormCaptcha.dataset.sitekey,
        'callback': correctCaptcha
      });
    }
  };
  var correctCaptcha = function correctCaptcha(response) {
    if (response !== '') FormCaptcha.classList.remove('captcha-error');
  };
}

/***/ }),

/***/ "./resources/scripts/components/menu.js":
/*!**********************************************!*\
  !*** ./resources/scripts/components/menu.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleMenu": function() { return /* binding */ handleMenu; }
/* harmony export */ });
/* harmony import */ var _utilities_contsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/contsts */ "./resources/scripts/utilities/contsts.js");

function handleMenu() {
  // Mobile menu
  var handleMobileMenu = function handleMobileMenu() {
    var burger = document.getElementById('burger');
    var burger2 = document.getElementById('burger-2');
    var mobileMenu = document.getElementById('mobile-menu');
    if (!burger || !burger2 || !mobileMenu) {
      return;
    }
    burger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', true);
        mobileMenu.classList.remove('hidden');
      }
    });
    burger2.addEventListener('click', function () {
      if (!mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', false);
        mobileMenu.classList.add('hidden');
      }
    });
  };
  handleMobileMenu();

  // Expanders
  var handleExpanders = function handleExpanders() {
    var expanders = document.querySelectorAll('.expander');
    if (!expanders.length) {
      return;
    }
    Array.from(expanders).map(function (expander) {
      var parent = expander.parentElement;
      if (parent.classList.contains('menu-item-has-children') && parent.querySelector('a')) {
        parent.querySelector('a').setAttribute('aria-expanded', false);
        parent.querySelector('a').setAttribute('aria-haspopup', true);
      }
      if (_utilities_contsts__WEBPACK_IMPORTED_MODULE_0__.WpCurrentClasses.some(function (ai) {
        return Array.from(parent.classList).includes(ai);
      })) {
        parent.querySelector('a').setAttribute('aria-expanded', true);
      }
      expander.addEventListener('click', function () {
        if (_utilities_contsts__WEBPACK_IMPORTED_MODULE_0__.WpCurrentClasses.some(function (ai) {
          return Array.from(parent.classList).includes(ai);
        })) {
          for (var i = 0; i < _utilities_contsts__WEBPACK_IMPORTED_MODULE_0__.WpCurrentClasses.length; i++) {
            parent.classList.remove(_utilities_contsts__WEBPACK_IMPORTED_MODULE_0__.WpCurrentClasses[i]);
            parent.querySelector('a').setAttribute('aria-expanded', false);
          }
        } else {
          parent.classList.toggle('nav-item-open');
          if (parent.classList.contains('nav-item-open')) parent.querySelector('a').setAttribute('aria-expanded', true);else parent.querySelector('a').setAttribute('aria-expanded', false);
        }
      });
    });
  };
  handleExpanders();
}

/***/ }),

/***/ "./resources/scripts/components/search.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/search.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSearch": function() { return /* binding */ handleSearch; }
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__);

function handleSearch() {
  var navbarToggler = document.getElementById('navbarPrimary');
  var searchForm = document.querySelectorAll('.toggle-search-form');
  if (!searchForm.length || !navbarToggler) {
    return;
  }
  var togglerInstance = new (bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default())(navbarToggler, {
    toggle: false
  });
  Array.from(searchForm).map(function (form) {
    var searchInstance = new (bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default())(form, {
      toggle: false
    });
    // Hide RWD menu when click search, focus on search
    form.addEventListener('show.bs.collapse', function () {
      togglerInstance.hide();
      setTimeout(function () {
        form.querySelector('.search-field').focus();
      }, 0);
    });

    // Hide search on body click
    document.addEventListener('click', function (e) {
      if (!form.contains(e.target)) {
        searchInstance.hide();
      }
    });
  });
}

/***/ }),

/***/ "./resources/scripts/components/tables.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/tables.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTableWidth": function() { return /* binding */ checkTableWidth; },
/* harmony export */   "handleTables": function() { return /* binding */ handleTables; }
/* harmony export */ });
function checkTableWidth(elems, childElem) {
  var outerElem = document.querySelectorAll(elems);
  Array.from(outerElem).map(function (elem) {
    var elemParent = elem.closest('.table-wrap');
    if (!elemParent) {
      var wrapper = document.createElement('div');
      wrapper.className = 'table-wrap';
      elem.parentNode.insertBefore(wrapper, elem);
      wrapper.appendChild(elem);
      elemParent = elem.closest('.table-wrap');
    }
    if (!elem.querySelector('.shadow-right')) {
      var shadowWrapper = document.createElement('span');
      shadowWrapper.className = 'shadow-right';
      elem.appendChild(shadowWrapper);
    }
    if (!elem.querySelector('.shadow-left')) {
      var _shadowWrapper = document.createElement('span');
      _shadowWrapper.className = 'shadow-left';
      elem.appendChild(_shadowWrapper);
    }
    function checkOverflow() {
      if (elem.querySelector(childElem).offsetWidth > elemParent.offsetWidth) {
        elemParent.classList.add('overflow');
        elemParent.classList.add('right-active');
      } else {
        elemParent.classList.remove('overflow');
      }
    }
    checkOverflow();
    elem.addEventListener('scroll', function () {
      if (elem.parentElement.classList.contains('table-wrap')) {
        var elemBody = elem.querySelector(childElem),
          _elemParent = elem.closest('.table-wrap');
        var scrolled = elemBody.offsetWidth - _elemParent.offsetWidth - elem.scrollLeft;
        if (scrolled < 3) {
          _elemParent.classList.add('left-active');
          _elemParent.classList.remove('right-active');
        } else if (elem.scrollLeft < 3) {
          _elemParent.classList.remove('left-active');
          _elemParent.classList.add('right-active');
        } else {
          _elemParent.classList.add('left-active');
          _elemParent.classList.add('right-active');
        }
      }
    });
  });
}
function handleTables() {
  // Init run
  var initTables = function initTables() {
    var table = document.querySelector('table');
    if (!table) {
      return;
    }
    window.onload = function () {
      table && checkTableWidth('table', 'tbody');
    };
    window.onresize = function () {
      table && checkTableWidth('table', 'tbody');
    };
  };
  initTables();
}


/***/ }),

/***/ "./resources/scripts/utilities/check-scroll.js":
/*!*****************************************************!*\
  !*** ./resources/scripts/utilities/check-scroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCheckScroll": function() { return /* binding */ handleCheckScroll; }
/* harmony export */ });
var lastScrollTop = 0;
function handleCheckScroll() {
  var body = document.body;
  var onScroll = function onScroll() {
    var scrolled = window.pageYOffset || document.scrollingElement.scrollTop;
    if (scrolled >= 60 && scrolled > lastScrollTop) {
      body.classList.add('not-top');
      body.classList.add('scrolled-down');
    } else if (scrolled >= 60) {
      body.classList.remove('scrolled-down');
    } else {
      body.classList.remove('not-top');
    }
    lastScrollTop = scrolled <= 0 ? 0 : scrolled;
  };
  document.addEventListener('scroll', onScroll);
}

/***/ }),

/***/ "./resources/scripts/utilities/contsts.js":
/*!************************************************!*\
  !*** ./resources/scripts/utilities/contsts.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WpCurrentClasses": function() { return /* binding */ WpCurrentClasses; }
/* harmony export */ });
var WpCurrentClasses = ['current-post-ancestor', 'current-page-ancestor', 'current-menu-ancestor', 'current-menu-parent', 'current-page-parent', 'current_page_parent', 'current-menu-item', 'current_page_item', 'current_page_ancestor', 'current-category-ancestor'];

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/styles/editor.scss":
/*!**************************************!*\
  !*** ./resources/styles/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["styles/app","styles/editor","/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/app.js"), __webpack_exec__("./resources/styles/app.scss"), __webpack_exec__("./resources/styles/editor.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFFK0YsUUFBUSxDQUFDO0FBQy9DOzs7Ozs7Ozs7Ozs7OztBQ25CTyxJQUFNbkQsZ0JBQWdCLEdBQUcsQ0FBQyx1QkFBdUIsRUFDdEQsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2QiwyQkFBMkIsQ0FDNUI7Ozs7Ozs7Ozs7O0FDVkQ7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVfYmFubmVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2ZhbmN5Ym94LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NoZWNrLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NvbnRzdHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3M/MmYzMCIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2Nzcz9mODU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90YWInO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQge2hhbmRsZUZhbmN5Ym94fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZhbmN5Ym94XCI7XG5pbXBvcnQge2hhbmRsZU1lbnV9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IHtoYW5kbGVUYWJsZXN9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGVzXCI7XG5pbXBvcnQge2hhbmRsZUNoZWNrU2Nyb2xsfSBmcm9tIFwiLi91dGlsaXRpZXMvY2hlY2stc2Nyb2xsXCI7XG5pbXBvcnQge2hhbmRsZUZvcm1zfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1zXCI7XG5pbXBvcnQge2hhbmRsZVNlYXJjaH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcbmltcG9ydCB7aGFuZGxlQ29va2llQmFubmVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nvb2tpZV9iYW5uZXJcIjtcblxuY29uc3QgbW91bnRlZEZucyA9IFtcbiAgaGFuZGxlRmFuY3lib3gsXG4gIGhhbmRsZU1lbnUsXG4gIGhhbmRsZVRhYmxlcyxcbiAgaGFuZGxlQ2hlY2tTY3JvbGwsXG4gIGhhbmRsZUZvcm1zLFxuICBoYW5kbGVTZWFyY2gsXG4gIGhhbmRsZUNvb2tpZUJhbm5lcixcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvb2tpZUJhbm5lcigpIHtcbiAgY29uc3QgY29va2llQWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKVxuXG4gIGlmICghY29va2llQWNjZXB0QnV0dG9uKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb29raWVBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGF0IHRoZSB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgdXNlIG9mIGNvb2tpZXNcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llc19hY2NlcHRlZD10cnVlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIwOTkgMDA6MDA6MDAgVVRDOyBwYXRoPS9cIjtcbiAgfSk7XG4gIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiY29va2llc19hY2NlcHRlZD10cnVlXCIpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZhbmN5Ym94KCkge1xuICAvLyBTaW5nbGVcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcblxuICBpZiAoIXNpbmdsZUZhbmN5SXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzaW5nbGVGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICByaWdodDogW1wiY2xvc2VcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBHYWxsZXJ5XG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknXTtcblxuICBpZiAoIWdhbGxlcnlGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FsbGVyeUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBncm91cEFsbDogdHJ1ZSxcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybXMoKSB7XG4gIC8vIEZldGNoIGFsbCB0aGUgZm9ybXMgd2Ugd2FudCB0byBhcHBseSBjdXN0b20gQm9vdHN0cmFwIHZhbGlkYXRpb24gc3R5bGVzIHRvXG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5lZWRzLXZhbGlkYXRpb24nKVxuXG4gIC8vIExvb3Agb3ZlciB0aGVtIGFuZCBwcmV2ZW50IHN1Ym1pc3Npb25cbiAgQXJyYXkuZnJvbShmb3JtcykuZm9yRWFjaChmb3JtID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcblxuICAgICAgLy8gUmVjYXB0Y2hhXG4gICAgICBsZXQgcmVDYXB0Y2hhO1xuICAgICAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmVlZHMtdmFsaWRhdGlvbicpICYmIEZvcm1DYXB0Y2hhKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpZiAoIGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UocmVuZGVyRm9ybSkgPT09ICcnICkge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IGZhbHNlO1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKS5jbGFzc0xpc3QuYWRkKCdjYXB0Y2hhLWVycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVDYXB0Y2hhID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSB8fCAhcmVDYXB0Y2hhKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJylcbiAgICB9LCBmYWxzZSlcbiAgfSlcblxuICAvLyBSZWNhcHRjaGEgY2FsbGJhY2tcbiAgbGV0IHJlbmRlckZvcm07XG4gIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICB3aW5kb3cuQ2FwdGNoYUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCBGb3JtQ2FwdGNoYSApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgcmVuZGVyRm9ybSA9IGdyZWNhcHRjaGEucmVuZGVyKCdnLXJlY2FwdGNoYScsIHsnc2l0ZWtleScgOiBGb3JtQ2FwdGNoYS5kYXRhc2V0LnNpdGVrZXksICdjYWxsYmFjaycgOiBjb3JyZWN0Q2FwdGNoYX0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgY29ycmVjdENhcHRjaGEgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICggcmVzcG9uc2UgIT09ICcnKVxuICAgICAgRm9ybUNhcHRjaGEuY2xhc3NMaXN0LnJlbW92ZSgnY2FwdGNoYS1lcnJvcicpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtXcEN1cnJlbnRDbGFzc2VzfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRzdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XG4gIC8vIE1vYmlsZSBtZW51XG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXG4gICAgY29uc3QgYnVyZ2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItMicpXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpXG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhYnVyZ2VyMiB8fCAhbW9iaWxlTWVudSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidXJnZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBoYW5kbGVNb2JpbGVNZW51KClcblxuICAvLyBFeHBhbmRlcnNcbiAgY29uc3QgaGFuZGxlRXhwYW5kZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cGFuZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmRlcicpXG5cbiAgICBpZiAoIWV4cGFuZGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEFycmF5LmZyb20oZXhwYW5kZXJzKS5tYXAoZXhwYW5kZXIgPT4ge1xuICAgICAgbGV0IHBhcmVudCA9IGV4cGFuZGVyLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJykgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZXhwYW5kZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXcEN1cnJlbnRDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShXcEN1cnJlbnRDbGFzc2VzW2ldKTtcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWl0ZW0tb3BlbicpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtLW9wZW4nKSlcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFeHBhbmRlcnMoKVxufVxuIiwiaW1wb3J0IENvbGxhcHNlIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyUHJpbWFyeScpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zZWFyY2gtZm9ybScpO1xuXG4gIGlmICghc2VhcmNoRm9ybS5sZW5ndGggfHwgIW5hdmJhclRvZ2dsZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZXJJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShuYXZiYXJUb2dnbGVyLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG5cbiAgQXJyYXkuZnJvbShzZWFyY2hGb3JtKS5tYXAoZm9ybSA9PiB7XG4gICAgbGV0IHNlYXJjaEluc3RhbmNlID0gbmV3IENvbGxhcHNlKGZvcm0sIHsgdG9nZ2xlOiBmYWxzZSB9KTtcbiAgICAvLyBIaWRlIFJXRCBtZW51IHdoZW4gY2xpY2sgc2VhcmNoLCBmb2N1cyBvbiBzZWFyY2hcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVySW5zdGFuY2UuaGlkZSgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZCcpLmZvY3VzKClcbiAgICAgIH0sIDApXG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHNlYXJjaCBvbiBib2R5IGNsaWNrXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBzZWFyY2hJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcclxuICBjb25zdCBvdXRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcclxuICBBcnJheS5mcm9tKG91dGVyRWxlbSkubWFwKGVsZW0gPT4ge1xyXG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICBpZiAoIWVsZW1QYXJlbnQpIHtcclxuICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XHJcbiAgICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbSk7XHJcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LXJpZ2h0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1sZWZ0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xyXG4gICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSkub2Zmc2V0V2lkdGggPiBlbGVtUGFyZW50Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja092ZXJmbG93KCk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZS13cmFwJykpIHtcclxuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcclxuICAgICAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gKGVsZW1Cb2R5Lm9mZnNldFdpZHRoIC0gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCAtIGVsZW0uc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xyXG4gIC8vIEluaXQgcnVuXHJcbiAgY29uc3QgaW5pdFRhYmxlcyA9ICgpID0+IHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcblxyXG4gICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBpbml0VGFibGVzKClcclxufVxyXG5cclxuZXhwb3J0IHsgY2hlY2tUYWJsZVdpZHRoLCBoYW5kbGVUYWJsZXMgfVxyXG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tTY3JvbGwoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPj0gNjAgJiYgc2Nyb2xsZWQgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm90LXRvcCcpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPj0gNjApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC10b3AnKTtcclxuICAgIH1cclxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFdwQ3VycmVudENsYXNzZXMgPSBbJ2N1cnJlbnQtcG9zdC1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtcGFnZS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1wYXJlbnQnLFxyXG4gICdjdXJyZW50LXBhZ2UtcGFyZW50JyxcclxuICAnY3VycmVudF9wYWdlX3BhcmVudCcsXHJcbiAgJ2N1cnJlbnQtbWVudS1pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2l0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LWNhdGVnb3J5LWFuY2VzdG9yJyxcclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImhhbmRsZUZhbmN5Ym94IiwiaGFuZGxlTWVudSIsImhhbmRsZVRhYmxlcyIsImhhbmRsZUNoZWNrU2Nyb2xsIiwiaGFuZGxlRm9ybXMiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDb29raWVCYW5uZXIiLCJtb3VudGVkRm5zIiwiZGVtb3VudEZuIiwiY29va2llQWNjZXB0QnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjb29raWUiLCJpbmRleE9mIiwiRmFuY3lib3giLCJzaW5nbGVGYW5jeUl0ZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsInZhbHVlIiwiYmluZCIsIlRvb2xiYXIiLCJsZWZ0IiwibWlkZGxlIiwicmlnaHQiLCJnYWxsZXJ5RmFuY3lJdGVtcyIsImdyb3VwQWxsIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9ybSIsInJlQ2FwdGNoYSIsIkZvcm1DYXB0Y2hhIiwicXVlcnlTZWxlY3RvciIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJyZW5kZXJGb3JtIiwiYWRkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiQ2FwdGNoYUNhbGxiYWNrIiwicmVuZGVyIiwiZGF0YXNldCIsInNpdGVrZXkiLCJjb3JyZWN0Q2FwdGNoYSIsInJlc3BvbnNlIiwicmVtb3ZlIiwiV3BDdXJyZW50Q2xhc3NlcyIsImhhbmRsZU1vYmlsZU1lbnUiLCJidXJnZXIiLCJidXJnZXIyIiwibW9iaWxlTWVudSIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUV4cGFuZGVycyIsImV4cGFuZGVycyIsIm1hcCIsInBhcmVudCIsImV4cGFuZGVyIiwicGFyZW50RWxlbWVudCIsInNvbWUiLCJpbmNsdWRlcyIsImFpIiwiaSIsInRvZ2dsZSIsIkNvbGxhcHNlIiwibmF2YmFyVG9nZ2xlciIsInNlYXJjaEZvcm0iLCJ0b2dnbGVySW5zdGFuY2UiLCJzZWFyY2hJbnN0YW5jZSIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJlIiwiY2hlY2tUYWJsZVdpZHRoIiwiZWxlbXMiLCJjaGlsZEVsZW0iLCJvdXRlckVsZW0iLCJlbGVtUGFyZW50IiwiZWxlbSIsImNsb3Nlc3QiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInNoYWRvd1dyYXBwZXIiLCJjaGVja092ZXJmbG93Iiwib2Zmc2V0V2lkdGgiLCJlbGVtQm9keSIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsImJvZHkiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=