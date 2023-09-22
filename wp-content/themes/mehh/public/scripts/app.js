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
/* harmony import */ var _components_countup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/countup */ "./resources/scripts/components/countup.js");
// Bootstrap (importing BS scripts individually)




// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports









var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_4__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_5__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_6__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_7__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_8__.handleForms, _components_search__WEBPACK_IMPORTED_MODULE_9__.handleSearch, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_10__.handleCookieBanner, _components_swiper__WEBPACK_IMPORTED_MODULE_11__.handleSwiper, _components_countup__WEBPACK_IMPORTED_MODULE_12__.handleCountUp];

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
/* harmony export */   handleCookieBanner: function() { return /* binding */ handleCookieBanner; }
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

/***/ "./resources/scripts/components/countup.js":
/*!*************************************************!*\
  !*** ./resources/scripts/components/countup.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCountUp: function() { return /* binding */ handleCountUp; }
/* harmony export */ });
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");

function handleCountUp() {
  var numbers = document.querySelectorAll('.numbers-module h1');
  if (!numbers.length) {
    return;
  }
  numbers.forEach(function (number) {
    new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(number, parseInt(number.textContent), {
      enableScrollSpy: true,
      scrollSpyOnce: true,
      separator: ''
    });
  });
}

/***/ }),

/***/ "./resources/scripts/components/fancybox.js":
/*!**************************************************!*\
  !*** ./resources/scripts/components/fancybox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleFancybox: function() { return /* binding */ handleFancybox; }
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
/* harmony export */   handleForms: function() { return /* binding */ handleForms; }
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
/* harmony export */   handleMenu: function() { return /* binding */ handleMenu; }
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
/* harmony export */   handleSearch: function() { return /* binding */ handleSearch; }
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
/* harmony export */   handleSwiper: function() { return /* binding */ handleSwiper; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


function handleSwiper() {
  var swiperWrapper = document.querySelector('.swiper');
  if (!swiperWrapper) {
    return;
  }
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiperWrapper, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
        // spaceBetween: 20,
      },

      540: {
        slidesPerView: 2
        // spaceBetween: 20,
      }
      // 768: {
      //   slidesPerView: 4.3,
      // },
      // 1200: {
      //   //slidesPerView: slidesPerView,
      //   slidesPerView: 2,
      // },
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
/* harmony export */   checkTableWidth: function() { return /* binding */ checkTableWidth; },
/* harmony export */   handleTables: function() { return /* binding */ handleTables; }
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
/* harmony export */   handleCheckScroll: function() { return /* binding */ handleCheckScroll; }
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
/* harmony export */   WpCurrentClasses: function() { return /* binding */ WpCurrentClasses; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxlQUFlLENBQUM7SUFDckMsQ0FBQyxNQUFNLElBQUlrRSxRQUFRLElBQUksRUFBRSxFQUFFO01BQ3pCTyxJQUFJLENBQUM5RSxTQUFTLENBQUNnQixNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUMsTUFBTTtNQUNMOEQsSUFBSSxDQUFDOUUsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBNkQsYUFBYSxHQUFHTixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0EsUUFBUTtFQUM5QyxDQUFDO0VBRUQzRyxRQUFRLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRWlILFFBQVEsQ0FBQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7QUNuQk8sSUFBTTlELGdCQUFnQixHQUFHLENBQUMsdUJBQXVCLEVBQ3RELHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsMkJBQTJCLENBQzVCOzs7Ozs7Ozs7OztBQ1ZEOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY29va2llX2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9jb3VudHVwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2ZhbmN5Ym94LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy90YWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jaGVjay1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jb250c3RzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2VkaXRvci5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90YWInO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQge2hhbmRsZUZhbmN5Ym94fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZhbmN5Ym94XCI7XG5pbXBvcnQge2hhbmRsZU1lbnV9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IHtoYW5kbGVUYWJsZXN9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGVzXCI7XG5pbXBvcnQge2hhbmRsZUNoZWNrU2Nyb2xsfSBmcm9tIFwiLi91dGlsaXRpZXMvY2hlY2stc2Nyb2xsXCI7XG5pbXBvcnQge2hhbmRsZUZvcm1zfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1zXCI7XG5pbXBvcnQge2hhbmRsZVNlYXJjaH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcbmltcG9ydCB7aGFuZGxlQ29va2llQmFubmVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nvb2tpZV9iYW5uZXJcIjtcbmltcG9ydCB7aGFuZGxlU3dpcGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL3N3aXBlclwiO1xuaW1wb3J0IHtoYW5kbGVDb3VudFVwfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvdW50dXBcIjtcblxuY29uc3QgbW91bnRlZEZucyA9IFtcbiAgaGFuZGxlRmFuY3lib3gsXG4gIGhhbmRsZU1lbnUsXG4gIGhhbmRsZVRhYmxlcyxcbiAgaGFuZGxlQ2hlY2tTY3JvbGwsXG4gIGhhbmRsZUZvcm1zLFxuICBoYW5kbGVTZWFyY2gsXG4gIGhhbmRsZUNvb2tpZUJhbm5lcixcbiAgaGFuZGxlU3dpcGVyLFxuICBoYW5kbGVDb3VudFVwLFxuXVxuXG4vLyBSdW4gZm4tc1xuZm9yIChjb25zdCBkZW1vdW50Rm4gb2YgbW91bnRlZEZucykge1xuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlQ29va2llQmFubmVyKCkge1xuICBjb25zdCBjb29raWVBY2NlcHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpXG5cbiAgaWYgKCFjb29raWVBY2NlcHRCdXR0b24pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvb2tpZUFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgLy8gU2V0IGEgY29va2llIHRvIHJlbWVtYmVyIHRoYXQgdGhlIHVzZXIgaGFzIGFjY2VwdGVkIHRoZSB1c2Ugb2YgY29va2llc1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVzX2FjY2VwdGVkPXRydWU7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMjA5OSAwMDowMDowMCBVVEM7IHBhdGg9L1wiO1xuICB9KTtcbiAgLy8gQ2hlY2sgaWYgdGhlIGNvb2tpZSBoYXMgYWxyZWFkeSBiZWVuIHNldFxuICBpZiAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCJjb29raWVzX2FjY2VwdGVkPXRydWVcIikgIT09IC0xKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG4iLCJpbXBvcnQge0NvdW50VXB9IGZyb20gXCJjb3VudHVwLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb3VudFVwKCkge1xuICBjb25zdCBudW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlcnMtbW9kdWxlIGgxJylcblxuICBpZiAoIW51bWJlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBudW1iZXJzLmZvckVhY2goKG51bWJlcikgPT4ge1xuICAgIG5ldyBDb3VudFVwKG51bWJlciwgcGFyc2VJbnQobnVtYmVyLnRleHRDb250ZW50KSxcbiAgICAgIHtcbiAgICAgICAgZW5hYmxlU2Nyb2xsU3B5OiB0cnVlLFxuICAgICAgICBzY3JvbGxTcHlPbmNlOiB0cnVlLFxuICAgICAgICBzZXBhcmF0b3I6ICcnLFxuICAgICAgfSlcbiAgfSlcbn1cbiIsImltcG9ydCB7IEZhbmN5Ym94IH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcbiAgLy8gU2luZ2xlXG4gIGNvbnN0IHNpbmdsZUZhbmN5SXRlbXMgPSBbJ2FbaHJlZiQ9XCIuanBnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5qcGVnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5wbmdcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi53ZWJwXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIuc3ZnXCJdOm5vdCgubm8tZmFuY3kpJywgJy5mYW5jeWltYWdlJywgJy5mYW5jeXZpZGVvJ107XG5cbiAgaWYgKCFzaW5nbGVGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc2luZ2xlRmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gR2FsbGVyeVxuICBjb25zdCBnYWxsZXJ5RmFuY3lJdGVtcyA9IFsnLmdhbGxlcnktaXRlbSBhOm5vdCgubm8tZmFuY3kpJ107XG5cbiAgaWYgKCFnYWxsZXJ5RmFuY3lJdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgZ3JvdXBBbGw6IHRydWUsXG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgIHJpZ2h0OiBbXCJjbG9zZVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1zKCkge1xuICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcblxuICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cbiAgICAgIC8vIFJlY2FwdGNoYVxuICAgICAgbGV0IHJlQ2FwdGNoYTtcbiAgICAgIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWRzLXZhbGlkYXRpb24nKSAmJiBGb3JtQ2FwdGNoYSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaWYgKCBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHJlbmRlckZvcm0pID09PSAnJyApIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJykuY2xhc3NMaXN0LmFkZCgnY2FwdGNoYS1lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkgfHwgIXJlQ2FwdGNoYSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXG4gICAgfSwgZmFsc2UpXG4gIH0pXG5cbiAgLy8gUmVjYXB0Y2hhIGNhbGxiYWNrXG4gIGxldCByZW5kZXJGb3JtO1xuICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgd2luZG93LkNhcHRjaGFDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggRm9ybUNhcHRjaGEgKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJlbmRlckZvcm0gPSBncmVjYXB0Y2hhLnJlbmRlcignZy1yZWNhcHRjaGEnLCB7J3NpdGVrZXknIDogRm9ybUNhcHRjaGEuZGF0YXNldC5zaXRla2V5LCAnY2FsbGJhY2snIDogY29ycmVjdENhcHRjaGF9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGNvcnJlY3RDYXB0Y2hhID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAoIHJlc3BvbnNlICE9PSAnJylcbiAgICAgIEZvcm1DYXB0Y2hhLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcHRjaGEtZXJyb3InKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7V3BDdXJyZW50Q2xhc3Nlc30gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250c3RzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZW51KCkge1xuICAvLyBNb2JpbGUgbWVudVxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxuICAgIGNvbnN0IGJ1cmdlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLTInKVxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKVxuXG4gICAgaWYgKCFidXJnZXIgfHwgIWJ1cmdlcjIgfHwgIW1vYmlsZU1lbnUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYnVyZ2VyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlTW9iaWxlTWVudSgpXG5cbiAgLy8gRXhwYW5kZXJzXG4gIGNvbnN0IGhhbmRsZUV4cGFuZGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kZXInKVxuXG4gICAgaWYgKCFleHBhbmRlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKGV4cGFuZGVycykubWFwKGV4cGFuZGVyID0+IHtcbiAgICAgIGxldCBwYXJlbnQgPSBleHBhbmRlci5wYXJlbnRFbGVtZW50O1xuXG4gICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGV4cGFuZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoV3BDdXJyZW50Q2xhc3Nlcy5zb21lKGFpID0+IEFycmF5LmZyb20ocGFyZW50LmNsYXNzTGlzdCkuaW5jbHVkZXMoYWkpKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV3BDdXJyZW50Q2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoV3BDdXJyZW50Q2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1pdGVtLW9wZW4nKTtcblxuICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtaXRlbS1vcGVuJykpXG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlRXhwYW5kZXJzKClcbn1cbiIsImltcG9ydCBDb2xsYXBzZSBmcm9tICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhclByaW1hcnknKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc2VhcmNoLWZvcm0nKTtcblxuICBpZiAoIXNlYXJjaEZvcm0ubGVuZ3RoIHx8ICFuYXZiYXJUb2dnbGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0b2dnbGVySW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UobmF2YmFyVG9nZ2xlciwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuXG4gIEFycmF5LmZyb20oc2VhcmNoRm9ybSkubWFwKGZvcm0gPT4ge1xuICAgIGxldCBzZWFyY2hJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShmb3JtLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG4gICAgLy8gSGlkZSBSV0QgbWVudSB3aGVuIGNsaWNrIHNlYXJjaCwgZm9jdXMgb24gc2VhcmNoXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlckluc3RhbmNlLmhpZGUoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZmllbGQnKS5mb2N1cygpXG4gICAgICB9LCAwKVxuICAgIH0pO1xuXG4gICAgLy8gSGlkZSBzZWFyY2ggb24gYm9keSBjbGlja1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZm9ybS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgc2VhcmNoSW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3dpcGVyKCkge1xuICBjb25zdCBzd2lwZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpXG5cbiAgaWYgKCFzd2lwZXJXcmFwcGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBuZXcgU3dpcGVyKHN3aXBlcldyYXBwZXIsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMzIwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgNTQwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgLy8gNzY4OiB7XG4gICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDQuMyxcbiAgICAgIC8vIH0sXG4gICAgICAvLyAxMjAwOiB7XG4gICAgICAvLyAgIC8vc2xpZGVzUGVyVmlldzogc2xpZGVzUGVyVmlldyxcbiAgICAgIC8vICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIC8vIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBjaGVja1RhYmxlV2lkdGgoZWxlbXMsIGNoaWxkRWxlbSkge1xyXG4gIGNvbnN0IG91dGVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xyXG4gIEFycmF5LmZyb20ob3V0ZXJFbGVtKS5tYXAoZWxlbSA9PiB7XHJcbiAgICBsZXQgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgIGlmICghZWxlbVBhcmVudCkge1xyXG4gICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0YWJsZS13cmFwJztcclxuICAgICAgZWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtKTtcclxuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1yaWdodCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctcmlnaHQnO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LWxlZnQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LWxlZnQnO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XHJcbiAgICAgIGlmIChlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKS5vZmZzZXRXaWR0aCA+IGVsZW1QYXJlbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrT3ZlcmZsb3coKTtcclxuXHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYmxlLXdyYXAnKSkge1xyXG4gICAgICAgIGxldCBlbGVtQm9keSA9IGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLFxyXG4gICAgICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgICAgICBsZXQgc2Nyb2xsZWQgPSAoZWxlbUJvZHkub2Zmc2V0V2lkdGggLSBlbGVtUGFyZW50Lm9mZnNldFdpZHRoIC0gZWxlbS5zY3JvbGxMZWZ0KTtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbS5zY3JvbGxMZWZ0IDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXMoKSB7XHJcbiAgLy8gSW5pdCBydW5cclxuICBjb25zdCBpbml0VGFibGVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuXHJcbiAgICBpZiAoIXRhYmxlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGluaXRUYWJsZXMoKVxyXG59XHJcblxyXG5leHBvcnQgeyBjaGVja1RhYmxlV2lkdGgsIGhhbmRsZVRhYmxlcyB9XHJcbiIsImxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDaGVja1Njcm9sbCgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChzY3JvbGxlZCA+PSA2MCAmJiBzY3JvbGxlZCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3QtdG9wJyk7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxlZCA+PSA2MCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXRvcCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbGVkIDw9IDAgPyAwIDogc2Nyb2xsZWQ7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgV3BDdXJyZW50Q2xhc3NlcyA9IFsnY3VycmVudC1wb3N0LWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1wYWdlLWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1tZW51LWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1tZW51LXBhcmVudCcsXHJcbiAgJ2N1cnJlbnQtcGFnZS1wYXJlbnQnLFxyXG4gICdjdXJyZW50X3BhZ2VfcGFyZW50JyxcclxuICAnY3VycmVudC1tZW51LWl0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfaXRlbScsXHJcbiAgJ2N1cnJlbnRfcGFnZV9hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtY2F0ZWdvcnktYW5jZXN0b3InLFxyXG5dO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaGFuZGxlRmFuY3lib3giLCJoYW5kbGVNZW51IiwiaGFuZGxlVGFibGVzIiwiaGFuZGxlQ2hlY2tTY3JvbGwiLCJoYW5kbGVGb3JtcyIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNvb2tpZUJhbm5lciIsImhhbmRsZVN3aXBlciIsImhhbmRsZUNvdW50VXAiLCJtb3VudGVkRm5zIiwiX2kiLCJfbW91bnRlZEZucyIsImxlbmd0aCIsImRlbW91bnRGbiIsImNvb2tpZUFjY2VwdEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29va2llIiwiaW5kZXhPZiIsIkNvdW50VXAiLCJudW1iZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJudW1iZXIiLCJwYXJzZUludCIsInRleHRDb250ZW50IiwiZW5hYmxlU2Nyb2xsU3B5Iiwic2Nyb2xsU3B5T25jZSIsInNlcGFyYXRvciIsIkZhbmN5Ym94Iiwic2luZ2xlRmFuY3lJdGVtcyIsInZhbHVlIiwiYmluZCIsIlRvb2xiYXIiLCJsZWZ0IiwibWlkZGxlIiwicmlnaHQiLCJnYWxsZXJ5RmFuY3lJdGVtcyIsImdyb3VwQWxsIiwiZm9ybXMiLCJBcnJheSIsImZyb20iLCJmb3JtIiwiZXZlbnQiLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsInJlbmRlckZvcm0iLCJhZGQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJDYXB0Y2hhQ2FsbGJhY2siLCJyZW5kZXIiLCJkYXRhc2V0Iiwic2l0ZWtleSIsImNvcnJlY3RDYXB0Y2hhIiwicmVzcG9uc2UiLCJyZW1vdmUiLCJXcEN1cnJlbnRDbGFzc2VzIiwiaGFuZGxlTW9iaWxlTWVudSIsImJ1cmdlciIsImJ1cmdlcjIiLCJtb2JpbGVNZW51Iiwic2V0QXR0cmlidXRlIiwiaGFuZGxlRXhwYW5kZXJzIiwiZXhwYW5kZXJzIiwibWFwIiwiZXhwYW5kZXIiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic29tZSIsImFpIiwiaW5jbHVkZXMiLCJpIiwidG9nZ2xlIiwiQ29sbGFwc2UiLCJuYXZiYXJUb2dnbGVyIiwic2VhcmNoRm9ybSIsInRvZ2dsZXJJbnN0YW5jZSIsInNlYXJjaEluc3RhbmNlIiwiaGlkZSIsInNldFRpbWVvdXQiLCJmb2N1cyIsImUiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwic3dpcGVyV3JhcHBlciIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsImVsZW0iLCJlbGVtUGFyZW50IiwiY2xvc2VzdCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2hhZG93V3JhcHBlciIsIl9zaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwiZWxlbUJvZHkiLCJfZWxlbVBhcmVudCIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsImJvZHkiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=