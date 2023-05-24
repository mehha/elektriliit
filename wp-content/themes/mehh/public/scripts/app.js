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
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tables */ "./resources/scripts/components/tables.js");
/* harmony import */ var _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/check-scroll */ "./resources/scripts/utilities/check-scroll.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forms */ "./resources/scripts/components/forms.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search */ "./resources/scripts/components/search.js");
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cookie_banner */ "./resources/scripts/components/cookie_banner.js");
// Bootstrap (importing BS scripts individually)



// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports







var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_3__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_4__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_5__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_6__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_7__.handleForms, _components_search__WEBPACK_IMPORTED_MODULE_8__.handleSearch, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_9__.handleCookieBanner];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRStGLFFBQVEsQ0FBQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7QUNuQk8sSUFBTW5ELGdCQUFnQixHQUFHLENBQUMsdUJBQXVCLEVBQ3RELHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsMkJBQTJCLENBQzVCOzs7Ozs7Ozs7OztBQ1ZEOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY29va2llX2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mYW5jeWJveC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy90YWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jaGVjay1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jb250c3RzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzPzJmMzAiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvZWRpdG9yLnNjc3M/Zjg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgKGltcG9ydGluZyBCUyBzY3JpcHRzIGluZGl2aWR1YWxseSlcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5Jztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHtoYW5kbGVGYW5jeWJveH0gZnJvbSBcIi4vY29tcG9uZW50cy9mYW5jeWJveFwiO1xuaW1wb3J0IHtoYW5kbGVNZW51fSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xuaW1wb3J0IHtoYW5kbGVDaGVja1Njcm9sbH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NoZWNrLXNjcm9sbFwiO1xuaW1wb3J0IHtoYW5kbGVGb3Jtc30gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtc1wiO1xuaW1wb3J0IHtoYW5kbGVTZWFyY2h9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5pbXBvcnQge2hhbmRsZUNvb2tpZUJhbm5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jb29raWVfYmFubmVyXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICBoYW5kbGVGb3JtcyxcbiAgaGFuZGxlU2VhcmNoLFxuICBoYW5kbGVDb29raWVCYW5uZXIsXG5dXG5cbi8vIFJ1biBmbi1zXG5mb3IgKGNvbnN0IGRlbW91bnRGbiBvZiBtb3VudGVkRm5zKSB7XG4gIHR5cGVvZiBkZW1vdW50Rm4gPT09ICdmdW5jdGlvbicgJiYgZGVtb3VudEZuKClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb29raWVCYW5uZXIoKSB7XG4gIGNvbnN0IGNvb2tpZUFjY2VwdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIilcblxuICBpZiAoIWNvb2tpZUFjY2VwdEJ1dHRvbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29va2llQWNjZXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAvLyBTZXQgYSBjb29raWUgdG8gcmVtZW1iZXIgdGhhdCB0aGUgdXNlciBoYXMgYWNjZXB0ZWQgdGhlIHVzZSBvZiBjb29raWVzXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZXNfYWNjZXB0ZWQ9dHJ1ZTsgZXhwaXJlcz1UaHUsIDAxIEphbiAyMDk5IDAwOjAwOjAwIFVUQzsgcGF0aD0vXCI7XG4gIH0pO1xuICAvLyBDaGVjayBpZiB0aGUgY29va2llIGhhcyBhbHJlYWR5IGJlZW4gc2V0XG4gIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZihcImNvb2tpZXNfYWNjZXB0ZWQ9dHJ1ZVwiKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZhbmN5Ym94IH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcbiAgLy8gU2luZ2xlXG4gIGNvbnN0IHNpbmdsZUZhbmN5SXRlbXMgPSBbJ2FbaHJlZiQ9XCIuanBnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5qcGVnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5wbmdcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi53ZWJwXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIuc3ZnXCJdOm5vdCgubm8tZmFuY3kpJywgJy5mYW5jeWltYWdlJywgJy5mYW5jeXZpZGVvJ107XG5cbiAgaWYgKCFzaW5nbGVGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc2luZ2xlRmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gR2FsbGVyeVxuICBjb25zdCBnYWxsZXJ5RmFuY3lJdGVtcyA9IFsnLmdhbGxlcnktaXRlbSBhOm5vdCgubm8tZmFuY3kpJ107XG5cbiAgaWYgKCFnYWxsZXJ5RmFuY3lJdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgZ3JvdXBBbGw6IHRydWUsXG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgIHJpZ2h0OiBbXCJjbG9zZVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1zKCkge1xuICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcblxuICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cbiAgICAgIC8vIFJlY2FwdGNoYVxuICAgICAgbGV0IHJlQ2FwdGNoYTtcbiAgICAgIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWRzLXZhbGlkYXRpb24nKSAmJiBGb3JtQ2FwdGNoYSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaWYgKCBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHJlbmRlckZvcm0pID09PSAnJyApIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJykuY2xhc3NMaXN0LmFkZCgnY2FwdGNoYS1lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkgfHwgIXJlQ2FwdGNoYSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXG4gICAgfSwgZmFsc2UpXG4gIH0pXG5cbiAgLy8gUmVjYXB0Y2hhIGNhbGxiYWNrXG4gIGxldCByZW5kZXJGb3JtO1xuICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgd2luZG93LkNhcHRjaGFDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggRm9ybUNhcHRjaGEgKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJlbmRlckZvcm0gPSBncmVjYXB0Y2hhLnJlbmRlcignZy1yZWNhcHRjaGEnLCB7J3NpdGVrZXknIDogRm9ybUNhcHRjaGEuZGF0YXNldC5zaXRla2V5LCAnY2FsbGJhY2snIDogY29ycmVjdENhcHRjaGF9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGNvcnJlY3RDYXB0Y2hhID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAoIHJlc3BvbnNlICE9PSAnJylcbiAgICAgIEZvcm1DYXB0Y2hhLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcHRjaGEtZXJyb3InKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7V3BDdXJyZW50Q2xhc3Nlc30gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250c3RzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZW51KCkge1xuICAvLyBNb2JpbGUgbWVudVxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxuICAgIGNvbnN0IGJ1cmdlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLTInKVxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKVxuXG4gICAgaWYgKCFidXJnZXIgfHwgIWJ1cmdlcjIgfHwgIW1vYmlsZU1lbnUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYnVyZ2VyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlTW9iaWxlTWVudSgpXG5cbiAgLy8gRXhwYW5kZXJzXG4gIGNvbnN0IGhhbmRsZUV4cGFuZGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kZXInKVxuXG4gICAgaWYgKCFleHBhbmRlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKGV4cGFuZGVycykubWFwKGV4cGFuZGVyID0+IHtcbiAgICAgIGxldCBwYXJlbnQgPSBleHBhbmRlci5wYXJlbnRFbGVtZW50O1xuXG4gICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGV4cGFuZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoV3BDdXJyZW50Q2xhc3Nlcy5zb21lKGFpID0+IEFycmF5LmZyb20ocGFyZW50LmNsYXNzTGlzdCkuaW5jbHVkZXMoYWkpKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV3BDdXJyZW50Q2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoV3BDdXJyZW50Q2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1pdGVtLW9wZW4nKTtcblxuICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtaXRlbS1vcGVuJykpXG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlRXhwYW5kZXJzKClcbn1cbiIsImltcG9ydCBDb2xsYXBzZSBmcm9tICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhclByaW1hcnknKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc2VhcmNoLWZvcm0nKTtcblxuICBpZiAoIXNlYXJjaEZvcm0ubGVuZ3RoIHx8ICFuYXZiYXJUb2dnbGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0b2dnbGVySW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UobmF2YmFyVG9nZ2xlciwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuXG4gIEFycmF5LmZyb20oc2VhcmNoRm9ybSkubWFwKGZvcm0gPT4ge1xuICAgIGxldCBzZWFyY2hJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShmb3JtLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG4gICAgLy8gSGlkZSBSV0QgbWVudSB3aGVuIGNsaWNrIHNlYXJjaCwgZm9jdXMgb24gc2VhcmNoXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlckluc3RhbmNlLmhpZGUoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZmllbGQnKS5mb2N1cygpXG4gICAgICB9LCAwKVxuICAgIH0pO1xuXG4gICAgLy8gSGlkZSBzZWFyY2ggb24gYm9keSBjbGlja1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZm9ybS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgc2VhcmNoSW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIGNoZWNrVGFibGVXaWR0aChlbGVtcywgY2hpbGRFbGVtKSB7XHJcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgQXJyYXkuZnJvbShvdXRlckVsZW0pLm1hcChlbGVtID0+IHtcclxuICAgIGxldCBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XHJcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXdyYXAnO1xyXG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LXJpZ2h0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1yaWdodCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctbGVmdCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctbGVmdCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcclxuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tPdmVyZmxvdygpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGFibGUtd3JhcCcpKSB7XHJcbiAgICAgICAgbGV0IGVsZW1Cb2R5ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSksXHJcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgICAgIGxldCBzY3JvbGxlZCA9IChlbGVtQm9keS5vZmZzZXRXaWR0aCAtIGVsZW1QYXJlbnQub2Zmc2V0V2lkdGggLSBlbGVtLnNjcm9sbExlZnQpO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLnNjcm9sbExlZnQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhYmxlcygpIHtcclxuICAvLyBJbml0IHJ1blxyXG4gIGNvbnN0IGluaXRUYWJsZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgIGlmICghdGFibGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgaW5pdFRhYmxlcygpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrVGFibGVXaWR0aCwgaGFuZGxlVGFibGVzIH1cclxuIiwibGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrU2Nyb2xsKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vdC10b3AnKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XHJcbiAgICB9XHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsZWQgPD0gMCA/IDAgOiBzY3JvbGxlZDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBXcEN1cnJlbnRDbGFzc2VzID0gWydjdXJyZW50LXBvc3QtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LXBhZ2UtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LW1lbnUtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LW1lbnUtcGFyZW50JyxcclxuICAnY3VycmVudC1wYWdlLXBhcmVudCcsXHJcbiAgJ2N1cnJlbnRfcGFnZV9wYXJlbnQnLFxyXG4gICdjdXJyZW50LW1lbnUtaXRlbScsXHJcbiAgJ2N1cnJlbnRfcGFnZV9pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2FuY2VzdG9yJyxcclxuICAnY3VycmVudC1jYXRlZ29yeS1hbmNlc3RvcicsXHJcbl07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJoYW5kbGVGYW5jeWJveCIsImhhbmRsZU1lbnUiLCJoYW5kbGVUYWJsZXMiLCJoYW5kbGVDaGVja1Njcm9sbCIsImhhbmRsZUZvcm1zIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ29va2llQmFubmVyIiwibW91bnRlZEZucyIsImRlbW91bnRGbiIsImNvb2tpZUFjY2VwdEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29va2llIiwiaW5kZXhPZiIsIkZhbmN5Ym94Iiwic2luZ2xlRmFuY3lJdGVtcyIsImxlbmd0aCIsImZvckVhY2giLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0IiwiZ2FsbGVyeUZhbmN5SXRlbXMiLCJncm91cEFsbCIsImZvcm1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvcm0iLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwicmVuZGVyRm9ybSIsImFkZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIndpbmRvdyIsIkNhcHRjaGFDYWxsYmFjayIsInJlbmRlciIsImRhdGFzZXQiLCJzaXRla2V5IiwiY29ycmVjdENhcHRjaGEiLCJyZXNwb25zZSIsInJlbW92ZSIsIldwQ3VycmVudENsYXNzZXMiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiYnVyZ2VyMiIsIm1vYmlsZU1lbnUiLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVFeHBhbmRlcnMiLCJleHBhbmRlcnMiLCJtYXAiLCJwYXJlbnQiLCJleHBhbmRlciIsInBhcmVudEVsZW1lbnQiLCJzb21lIiwiaW5jbHVkZXMiLCJhaSIsImkiLCJ0b2dnbGUiLCJDb2xsYXBzZSIsIm5hdmJhclRvZ2dsZXIiLCJzZWFyY2hGb3JtIiwidG9nZ2xlckluc3RhbmNlIiwic2VhcmNoSW5zdGFuY2UiLCJoaWRlIiwic2V0VGltZW91dCIsImZvY3VzIiwiZSIsImNoZWNrVGFibGVXaWR0aCIsImVsZW1zIiwiY2hpbGRFbGVtIiwib3V0ZXJFbGVtIiwiZWxlbVBhcmVudCIsImVsZW0iLCJjbG9zZXN0Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwiZWxlbUJvZHkiLCJzY3JvbGxlZCIsInNjcm9sbExlZnQiLCJpbml0VGFibGVzIiwidGFibGUiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsImxhc3RTY3JvbGxUb3AiLCJib2R5Iiwib25TY3JvbGwiLCJwYWdlWU9mZnNldCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiXSwic291cmNlUm9vdCI6IiJ9