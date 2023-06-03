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
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/swiper */ "./resources/scripts/components/swiper.js");
// Bootstrap (importing BS scripts individually)




// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports








var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_4__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_5__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_6__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_7__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_8__.handleForms, _components_search__WEBPACK_IMPORTED_MODULE_9__.handleSearch, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_10__.handleCookieBanner, _components_swiper__WEBPACK_IMPORTED_MODULE_11__.handleSwiper];

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

/***/ "./resources/scripts/components/swiper.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/swiper.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSwiper": function() { return /* binding */ handleSwiper; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

function handleSwiper() {
  var swiperWrapper = document.querySelector('.swiper');
  if (!swiperWrapper) {
    return;
  }
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiperWrapper, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3
        // spaceBetween: 20,
      },

      540: {
        slidesPerView: 2.3
        // spaceBetween: 20,
      },

      // 768: {
      //   slidesPerView: 4.3,
      // },
      1200: {
        //slidesPerView: slidesPerView,
        slidesPerView: 4.3
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsR0FBRzVELE1BQU0sQ0FBQ3FFLFdBQVcsSUFBSTNHLFFBQVEsQ0FBQzRHLGdCQUFnQixDQUFDQyxTQUFTO0lBQzFFLElBQUlYLFFBQVEsSUFBSSxFQUFFLElBQUlBLFFBQVEsR0FBR00sYUFBYSxFQUFFO01BQzlDQyxJQUFJLENBQUM1RSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0J1RSxJQUFJLENBQUM1RSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDckMsQ0FBQyxNQUFNLElBQUlnRSxRQUFRLElBQUksRUFBRSxFQUFFO01BQ3pCTyxJQUFJLENBQUM1RSxTQUFTLENBQUNnQixNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUMsTUFBTTtNQUNMNEQsSUFBSSxDQUFDNUUsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBMkQsYUFBYSxHQUFHTixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0EsUUFBUTtFQUM5QyxDQUFDO0VBRURsRyxRQUFRLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRXdHLFFBQVEsQ0FBQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7QUNuQk8sSUFBTTVELGdCQUFnQixHQUFHLENBQUMsdUJBQXVCLEVBQ3RELHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsMkJBQTJCLENBQzVCOzs7Ozs7Ozs7OztBQ1ZEOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY29va2llX2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mYW5jeWJveC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvdGFibGVzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY2hlY2stc2Nyb2xsLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY29udHN0cy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2Nzcz8yZjMwIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2VkaXRvci5zY3NzP2Y4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQm9vdHN0cmFwIChpbXBvcnRpbmcgQlMgc2NyaXB0cyBpbmRpdmlkdWFsbHkpXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9idXR0b24nO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Njcm9sbHNweSc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5cbi8vIEltcG9ydHNcbmltcG9ydCB7aGFuZGxlRmFuY3lib3h9IGZyb20gXCIuL2NvbXBvbmVudHMvZmFuY3lib3hcIjtcbmltcG9ydCB7aGFuZGxlTWVudX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQge2hhbmRsZVRhYmxlc30gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZXNcIjtcbmltcG9ydCB7aGFuZGxlQ2hlY2tTY3JvbGx9IGZyb20gXCIuL3V0aWxpdGllcy9jaGVjay1zY3JvbGxcIjtcbmltcG9ydCB7aGFuZGxlRm9ybXN9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7aGFuZGxlU2VhcmNofSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHtoYW5kbGVDb29raWVCYW5uZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvY29va2llX2Jhbm5lclwiO1xuaW1wb3J0IHtoYW5kbGVTd2lwZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvc3dpcGVyXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICBoYW5kbGVGb3JtcyxcbiAgaGFuZGxlU2VhcmNoLFxuICBoYW5kbGVDb29raWVCYW5uZXIsXG4gIGhhbmRsZVN3aXBlcixcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvb2tpZUJhbm5lcigpIHtcbiAgY29uc3QgY29va2llQWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKVxuXG4gIGlmICghY29va2llQWNjZXB0QnV0dG9uKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb29raWVBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGF0IHRoZSB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgdXNlIG9mIGNvb2tpZXNcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llc19hY2NlcHRlZD10cnVlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIwOTkgMDA6MDA6MDAgVVRDOyBwYXRoPS9cIjtcbiAgfSk7XG4gIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiY29va2llc19hY2NlcHRlZD10cnVlXCIpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZhbmN5Ym94KCkge1xuICAvLyBTaW5nbGVcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcblxuICBpZiAoIXNpbmdsZUZhbmN5SXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzaW5nbGVGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICByaWdodDogW1wiY2xvc2VcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBHYWxsZXJ5XG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknXTtcblxuICBpZiAoIWdhbGxlcnlGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FsbGVyeUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBncm91cEFsbDogdHJ1ZSxcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybXMoKSB7XG4gIC8vIEZldGNoIGFsbCB0aGUgZm9ybXMgd2Ugd2FudCB0byBhcHBseSBjdXN0b20gQm9vdHN0cmFwIHZhbGlkYXRpb24gc3R5bGVzIHRvXG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5lZWRzLXZhbGlkYXRpb24nKVxuXG4gIC8vIExvb3Agb3ZlciB0aGVtIGFuZCBwcmV2ZW50IHN1Ym1pc3Npb25cbiAgQXJyYXkuZnJvbShmb3JtcykuZm9yRWFjaChmb3JtID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcblxuICAgICAgLy8gUmVjYXB0Y2hhXG4gICAgICBsZXQgcmVDYXB0Y2hhO1xuICAgICAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmVlZHMtdmFsaWRhdGlvbicpICYmIEZvcm1DYXB0Y2hhKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpZiAoIGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UocmVuZGVyRm9ybSkgPT09ICcnICkge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IGZhbHNlO1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKS5jbGFzc0xpc3QuYWRkKCdjYXB0Y2hhLWVycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVDYXB0Y2hhID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSB8fCAhcmVDYXB0Y2hhKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJylcbiAgICB9LCBmYWxzZSlcbiAgfSlcblxuICAvLyBSZWNhcHRjaGEgY2FsbGJhY2tcbiAgbGV0IHJlbmRlckZvcm07XG4gIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICB3aW5kb3cuQ2FwdGNoYUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCBGb3JtQ2FwdGNoYSApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgcmVuZGVyRm9ybSA9IGdyZWNhcHRjaGEucmVuZGVyKCdnLXJlY2FwdGNoYScsIHsnc2l0ZWtleScgOiBGb3JtQ2FwdGNoYS5kYXRhc2V0LnNpdGVrZXksICdjYWxsYmFjaycgOiBjb3JyZWN0Q2FwdGNoYX0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgY29ycmVjdENhcHRjaGEgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICggcmVzcG9uc2UgIT09ICcnKVxuICAgICAgRm9ybUNhcHRjaGEuY2xhc3NMaXN0LnJlbW92ZSgnY2FwdGNoYS1lcnJvcicpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtXcEN1cnJlbnRDbGFzc2VzfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRzdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XG4gIC8vIE1vYmlsZSBtZW51XG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXG4gICAgY29uc3QgYnVyZ2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItMicpXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpXG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhYnVyZ2VyMiB8fCAhbW9iaWxlTWVudSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidXJnZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBoYW5kbGVNb2JpbGVNZW51KClcblxuICAvLyBFeHBhbmRlcnNcbiAgY29uc3QgaGFuZGxlRXhwYW5kZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cGFuZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmRlcicpXG5cbiAgICBpZiAoIWV4cGFuZGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEFycmF5LmZyb20oZXhwYW5kZXJzKS5tYXAoZXhwYW5kZXIgPT4ge1xuICAgICAgbGV0IHBhcmVudCA9IGV4cGFuZGVyLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJykgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZXhwYW5kZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXcEN1cnJlbnRDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShXcEN1cnJlbnRDbGFzc2VzW2ldKTtcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWl0ZW0tb3BlbicpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtLW9wZW4nKSlcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFeHBhbmRlcnMoKVxufVxuIiwiaW1wb3J0IENvbGxhcHNlIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyUHJpbWFyeScpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zZWFyY2gtZm9ybScpO1xuXG4gIGlmICghc2VhcmNoRm9ybS5sZW5ndGggfHwgIW5hdmJhclRvZ2dsZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZXJJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShuYXZiYXJUb2dnbGVyLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG5cbiAgQXJyYXkuZnJvbShzZWFyY2hGb3JtKS5tYXAoZm9ybSA9PiB7XG4gICAgbGV0IHNlYXJjaEluc3RhbmNlID0gbmV3IENvbGxhcHNlKGZvcm0sIHsgdG9nZ2xlOiBmYWxzZSB9KTtcbiAgICAvLyBIaWRlIFJXRCBtZW51IHdoZW4gY2xpY2sgc2VhcmNoLCBmb2N1cyBvbiBzZWFyY2hcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVySW5zdGFuY2UuaGlkZSgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZCcpLmZvY3VzKClcbiAgICAgIH0sIDApXG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHNlYXJjaCBvbiBib2R5IGNsaWNrXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBzZWFyY2hJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFN3aXBlciwge1BhZ2luYXRpb259IGZyb20gJ3N3aXBlcic7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3dpcGVyKCkge1xuICBjb25zdCBzd2lwZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpXG5cbiAgaWYgKCFzd2lwZXJXcmFwcGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBuZXcgU3dpcGVyKHN3aXBlcldyYXBwZXIsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMzIwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMyxcbiAgICAgICAgLy8gc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgICA1NDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMi4zLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIC8vIDc2ODoge1xuICAgICAgLy8gICBzbGlkZXNQZXJWaWV3OiA0LjMsXG4gICAgICAvLyB9LFxuICAgICAgMTIwMDoge1xuICAgICAgICAvL3NsaWRlc1BlclZpZXc6IHNsaWRlc1BlclZpZXcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQuMyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBjaGVja1RhYmxlV2lkdGgoZWxlbXMsIGNoaWxkRWxlbSkge1xyXG4gIGNvbnN0IG91dGVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xyXG4gIEFycmF5LmZyb20ob3V0ZXJFbGVtKS5tYXAoZWxlbSA9PiB7XHJcbiAgICBsZXQgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgIGlmICghZWxlbVBhcmVudCkge1xyXG4gICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0YWJsZS13cmFwJztcclxuICAgICAgZWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtKTtcclxuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1yaWdodCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctcmlnaHQnO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LWxlZnQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LWxlZnQnO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XHJcbiAgICAgIGlmIChlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKS5vZmZzZXRXaWR0aCA+IGVsZW1QYXJlbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrT3ZlcmZsb3coKTtcclxuXHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYmxlLXdyYXAnKSkge1xyXG4gICAgICAgIGxldCBlbGVtQm9keSA9IGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLFxyXG4gICAgICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgICAgICBsZXQgc2Nyb2xsZWQgPSAoZWxlbUJvZHkub2Zmc2V0V2lkdGggLSBlbGVtUGFyZW50Lm9mZnNldFdpZHRoIC0gZWxlbS5zY3JvbGxMZWZ0KTtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbS5zY3JvbGxMZWZ0IDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXMoKSB7XHJcbiAgLy8gSW5pdCBydW5cclxuICBjb25zdCBpbml0VGFibGVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuXHJcbiAgICBpZiAoIXRhYmxlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGluaXRUYWJsZXMoKVxyXG59XHJcblxyXG5leHBvcnQgeyBjaGVja1RhYmxlV2lkdGgsIGhhbmRsZVRhYmxlcyB9XHJcbiIsImxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDaGVja1Njcm9sbCgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChzY3JvbGxlZCA+PSA2MCAmJiBzY3JvbGxlZCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3QtdG9wJyk7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxlZCA+PSA2MCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXRvcCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbGVkIDw9IDAgPyAwIDogc2Nyb2xsZWQ7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgV3BDdXJyZW50Q2xhc3NlcyA9IFsnY3VycmVudC1wb3N0LWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1wYWdlLWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1tZW51LWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1tZW51LXBhcmVudCcsXHJcbiAgJ2N1cnJlbnQtcGFnZS1wYXJlbnQnLFxyXG4gICdjdXJyZW50X3BhZ2VfcGFyZW50JyxcclxuICAnY3VycmVudC1tZW51LWl0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfaXRlbScsXHJcbiAgJ2N1cnJlbnRfcGFnZV9hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtY2F0ZWdvcnktYW5jZXN0b3InLFxyXG5dO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaGFuZGxlRmFuY3lib3giLCJoYW5kbGVNZW51IiwiaGFuZGxlVGFibGVzIiwiaGFuZGxlQ2hlY2tTY3JvbGwiLCJoYW5kbGVGb3JtcyIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNvb2tpZUJhbm5lciIsImhhbmRsZVN3aXBlciIsIm1vdW50ZWRGbnMiLCJkZW1vdW50Rm4iLCJjb29raWVBY2NlcHRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNvb2tpZSIsImluZGV4T2YiLCJGYW5jeWJveCIsInNpbmdsZUZhbmN5SXRlbXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwidmFsdWUiLCJiaW5kIiwiVG9vbGJhciIsImxlZnQiLCJtaWRkbGUiLCJyaWdodCIsImdhbGxlcnlGYW5jeUl0ZW1zIiwiZ3JvdXBBbGwiLCJmb3JtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJmb3JtIiwicmVDYXB0Y2hhIiwiRm9ybUNhcHRjaGEiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsInJlbmRlckZvcm0iLCJhZGQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJDYXB0Y2hhQ2FsbGJhY2siLCJyZW5kZXIiLCJkYXRhc2V0Iiwic2l0ZWtleSIsImNvcnJlY3RDYXB0Y2hhIiwicmVzcG9uc2UiLCJyZW1vdmUiLCJXcEN1cnJlbnRDbGFzc2VzIiwiaGFuZGxlTW9iaWxlTWVudSIsImJ1cmdlciIsImJ1cmdlcjIiLCJtb2JpbGVNZW51Iiwic2V0QXR0cmlidXRlIiwiaGFuZGxlRXhwYW5kZXJzIiwiZXhwYW5kZXJzIiwibWFwIiwicGFyZW50IiwiZXhwYW5kZXIiLCJwYXJlbnRFbGVtZW50Iiwic29tZSIsImluY2x1ZGVzIiwiYWkiLCJpIiwidG9nZ2xlIiwiQ29sbGFwc2UiLCJuYXZiYXJUb2dnbGVyIiwic2VhcmNoRm9ybSIsInRvZ2dsZXJJbnN0YW5jZSIsInNlYXJjaEluc3RhbmNlIiwiaGlkZSIsInNldFRpbWVvdXQiLCJmb2N1cyIsImUiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwic3dpcGVyV3JhcHBlciIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsImVsZW1QYXJlbnQiLCJlbGVtIiwiY2xvc2VzdCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2hhZG93V3JhcHBlciIsImNoZWNrT3ZlcmZsb3ciLCJvZmZzZXRXaWR0aCIsImVsZW1Cb2R5Iiwic2Nyb2xsZWQiLCJzY3JvbGxMZWZ0IiwiaW5pdFRhYmxlcyIsInRhYmxlIiwib25sb2FkIiwib25yZXNpemUiLCJsYXN0U2Nyb2xsVG9wIiwiYm9keSIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==