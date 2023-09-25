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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxlQUFlLENBQUM7SUFDckMsQ0FBQyxNQUFNLElBQUlrRSxRQUFRLElBQUksRUFBRSxFQUFFO01BQ3pCTyxJQUFJLENBQUM5RSxTQUFTLENBQUNnQixNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUMsTUFBTTtNQUNMOEQsSUFBSSxDQUFDOUUsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBNkQsYUFBYSxHQUFHTixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0EsUUFBUTtFQUM5QyxDQUFDO0VBRUQzRyxRQUFRLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRWlILFFBQVEsQ0FBQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7QUNuQk8sSUFBTTlELGdCQUFnQixHQUFHLENBQUMsdUJBQXVCLEVBQ3RELHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsMkJBQTJCLENBQzVCOzs7Ozs7Ozs7OztBQ1ZEOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY29va2llX2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9jb3VudHVwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2ZhbmN5Ym94LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy90YWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jaGVjay1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jb250c3RzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzPzJmMzAiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvZWRpdG9yLnNjc3M/Zjg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgKGltcG9ydGluZyBCUyBzY3JpcHRzIGluZGl2aWR1YWxseSlcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5Jztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHtoYW5kbGVGYW5jeWJveH0gZnJvbSBcIi4vY29tcG9uZW50cy9mYW5jeWJveFwiO1xuaW1wb3J0IHtoYW5kbGVNZW51fSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xuaW1wb3J0IHtoYW5kbGVDaGVja1Njcm9sbH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NoZWNrLXNjcm9sbFwiO1xuaW1wb3J0IHtoYW5kbGVGb3Jtc30gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtc1wiO1xuaW1wb3J0IHtoYW5kbGVTZWFyY2h9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5pbXBvcnQge2hhbmRsZUNvb2tpZUJhbm5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jb29raWVfYmFubmVyXCI7XG5pbXBvcnQge2hhbmRsZVN3aXBlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9zd2lwZXJcIjtcbmltcG9ydCB7aGFuZGxlQ291bnRVcH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb3VudHVwXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICBoYW5kbGVGb3JtcyxcbiAgaGFuZGxlU2VhcmNoLFxuICBoYW5kbGVDb29raWVCYW5uZXIsXG4gIGhhbmRsZVN3aXBlcixcbiAgaGFuZGxlQ291bnRVcCxcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvb2tpZUJhbm5lcigpIHtcbiAgY29uc3QgY29va2llQWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKVxuXG4gIGlmICghY29va2llQWNjZXB0QnV0dG9uKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb29raWVBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGF0IHRoZSB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgdXNlIG9mIGNvb2tpZXNcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llc19hY2NlcHRlZD10cnVlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIwOTkgMDA6MDA6MDAgVVRDOyBwYXRoPS9cIjtcbiAgfSk7XG4gIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiY29va2llc19hY2NlcHRlZD10cnVlXCIpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb3VudFVwfSBmcm9tIFwiY291bnR1cC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ291bnRVcCgpIHtcbiAgY29uc3QgbnVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXJzLW1vZHVsZSBoMScpXG5cbiAgaWYgKCFudW1iZXJzLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbnVtYmVycy5mb3JFYWNoKChudW1iZXIpID0+IHtcbiAgICBuZXcgQ291bnRVcChudW1iZXIsIHBhcnNlSW50KG51bWJlci50ZXh0Q29udGVudCksXG4gICAgICB7XG4gICAgICAgIGVuYWJsZVNjcm9sbFNweTogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsU3B5T25jZTogdHJ1ZSxcbiAgICAgICAgc2VwYXJhdG9yOiAnJyxcbiAgICAgIH0pXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBGYW5jeWJveCB9IGZyb20gJ0BmYW5jeWFwcHMvdWknO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRmFuY3lib3goKSB7XG4gIC8vIFNpbmdsZVxuICBjb25zdCBzaW5nbGVGYW5jeUl0ZW1zID0gWydhW2hyZWYkPVwiLmpwZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIuanBlZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIucG5nXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIud2VicFwiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLnN2Z1wiXTpub3QoLm5vLWZhbmN5KScsICcuZmFuY3lpbWFnZScsICcuZmFuY3l2aWRlbyddO1xuXG4gIGlmICghc2luZ2xlRmFuY3lJdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHNpbmdsZUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgIHJpZ2h0OiBbXCJjbG9zZVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEdhbGxlcnlcbiAgY29uc3QgZ2FsbGVyeUZhbmN5SXRlbXMgPSBbJy5nYWxsZXJ5LWl0ZW0gYTpub3QoLm5vLWZhbmN5KSddO1xuXG4gIGlmICghZ2FsbGVyeUZhbmN5SXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBnYWxsZXJ5RmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIGdyb3VwQWxsOiB0cnVlLFxuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICByaWdodDogW1wiY2xvc2VcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGb3JtcygpIHtcbiAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cbiAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVlZHMtdmFsaWRhdGlvbicpXG5cbiAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxuICBBcnJheS5mcm9tKGZvcm1zKS5mb3JFYWNoKGZvcm0gPT4ge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXG4gICAgICAvLyBSZWNhcHRjaGFcbiAgICAgIGxldCByZUNhcHRjaGE7XG4gICAgICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkcy12YWxpZGF0aW9uJykgJiYgRm9ybUNhcHRjaGEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGlmICggZ3JlY2FwdGNoYS5nZXRSZXNwb25zZShyZW5kZXJGb3JtKSA9PT0gJycgKSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gZmFsc2U7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpLmNsYXNzTGlzdC5hZGQoJ2NhcHRjaGEtZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpIHx8ICFyZUNhcHRjaGEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKVxuICAgIH0sIGZhbHNlKVxuICB9KVxuXG4gIC8vIFJlY2FwdGNoYSBjYWxsYmFja1xuICBsZXQgcmVuZGVyRm9ybTtcbiAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gIHdpbmRvdy5DYXB0Y2hhQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIEZvcm1DYXB0Y2hhICkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICByZW5kZXJGb3JtID0gZ3JlY2FwdGNoYS5yZW5kZXIoJ2ctcmVjYXB0Y2hhJywgeydzaXRla2V5JyA6IEZvcm1DYXB0Y2hhLmRhdGFzZXQuc2l0ZWtleSwgJ2NhbGxiYWNrJyA6IGNvcnJlY3RDYXB0Y2hhfSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBjb3JyZWN0Q2FwdGNoYSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKCByZXNwb25zZSAhPT0gJycpXG4gICAgICBGb3JtQ2FwdGNoYS5jbGFzc0xpc3QucmVtb3ZlKCdjYXB0Y2hhLWVycm9yJyk7XG4gIH07XG59XG4iLCJpbXBvcnQge1dwQ3VycmVudENsYXNzZXN9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udHN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgLy8gTW9iaWxlIG1lbnVcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcbiAgICBjb25zdCBidXJnZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci0yJylcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51JylcblxuICAgIGlmICghYnVyZ2VyIHx8ICFidXJnZXIyIHx8ICFtb2JpbGVNZW51KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJ1cmdlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIW1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGhhbmRsZU1vYmlsZU1lbnUoKVxuXG4gIC8vIEV4cGFuZGVyc1xuICBjb25zdCBoYW5kbGVFeHBhbmRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwYW5kZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZGVyJylcblxuICAgIGlmICghZXhwYW5kZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShleHBhbmRlcnMpLm1hcChleHBhbmRlciA9PiB7XG4gICAgICBsZXQgcGFyZW50ID0gZXhwYW5kZXIucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKSAmJiBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpKSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoV3BDdXJyZW50Q2xhc3Nlcy5zb21lKGFpID0+IEFycmF5LmZyb20ocGFyZW50LmNsYXNzTGlzdCkuaW5jbHVkZXMoYWkpKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBleHBhbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdwQ3VycmVudENsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFdwQ3VycmVudENsYXNzZXNbaV0pO1xuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCduYXYtaXRlbS1vcGVuJyk7XG5cbiAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWl0ZW0tb3BlbicpKVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGhhbmRsZUV4cGFuZGVycygpXG59XG4iLCJpbXBvcnQgQ29sbGFwc2UgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcbiAgY29uc3QgbmF2YmFyVG9nZ2xlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJQcmltYXJ5Jyk7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXNlYXJjaC1mb3JtJyk7XG5cbiAgaWYgKCFzZWFyY2hGb3JtLmxlbmd0aCB8fCAhbmF2YmFyVG9nZ2xlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdG9nZ2xlckluc3RhbmNlID0gbmV3IENvbGxhcHNlKG5hdmJhclRvZ2dsZXIsIHsgdG9nZ2xlOiBmYWxzZSB9KTtcblxuICBBcnJheS5mcm9tKHNlYXJjaEZvcm0pLm1hcChmb3JtID0+IHtcbiAgICBsZXQgc2VhcmNoSW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UoZm9ybSwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuICAgIC8vIEhpZGUgUldEIG1lbnUgd2hlbiBjbGljayBzZWFyY2gsIGZvY3VzIG9uIHNlYXJjaFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZXJJbnN0YW5jZS5oaWRlKCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZpZWxkJykuZm9jdXMoKVxuICAgICAgfSwgMClcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgc2VhcmNoIG9uIGJvZHkgY2xpY2tcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHNlYXJjaEluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN3aXBlcigpIHtcbiAgY29uc3Qgc3dpcGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKVxuXG4gIGlmICghc3dpcGVyV3JhcHBlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbmV3IFN3aXBlcihzd2lwZXJXcmFwcGVyLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDMyMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDU0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIC8vIDc2ODoge1xuICAgICAgLy8gICBzbGlkZXNQZXJWaWV3OiA0LjMsXG4gICAgICAvLyB9LFxuICAgICAgLy8gMTIwMDoge1xuICAgICAgLy8gICAvL3NsaWRlc1BlclZpZXc6IHNsaWRlc1BlclZpZXcsXG4gICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcclxuICBjb25zdCBvdXRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcclxuICBBcnJheS5mcm9tKG91dGVyRWxlbSkubWFwKGVsZW0gPT4ge1xyXG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICBpZiAoIWVsZW1QYXJlbnQpIHtcclxuICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XHJcbiAgICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbSk7XHJcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LXJpZ2h0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1sZWZ0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xyXG4gICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSkub2Zmc2V0V2lkdGggPiBlbGVtUGFyZW50Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja092ZXJmbG93KCk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZS13cmFwJykpIHtcclxuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcclxuICAgICAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gKGVsZW1Cb2R5Lm9mZnNldFdpZHRoIC0gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCAtIGVsZW0uc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xyXG4gIC8vIEluaXQgcnVuXHJcbiAgY29uc3QgaW5pdFRhYmxlcyA9ICgpID0+IHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcblxyXG4gICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBpbml0VGFibGVzKClcclxufVxyXG5cclxuZXhwb3J0IHsgY2hlY2tUYWJsZVdpZHRoLCBoYW5kbGVUYWJsZXMgfVxyXG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tTY3JvbGwoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPj0gNjAgJiYgc2Nyb2xsZWQgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm90LXRvcCcpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPj0gNjApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC10b3AnKTtcclxuICAgIH1cclxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFdwQ3VycmVudENsYXNzZXMgPSBbJ2N1cnJlbnQtcG9zdC1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtcGFnZS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1wYXJlbnQnLFxyXG4gICdjdXJyZW50LXBhZ2UtcGFyZW50JyxcclxuICAnY3VycmVudF9wYWdlX3BhcmVudCcsXHJcbiAgJ2N1cnJlbnQtbWVudS1pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2l0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LWNhdGVnb3J5LWFuY2VzdG9yJyxcclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImhhbmRsZUZhbmN5Ym94IiwiaGFuZGxlTWVudSIsImhhbmRsZVRhYmxlcyIsImhhbmRsZUNoZWNrU2Nyb2xsIiwiaGFuZGxlRm9ybXMiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDb29raWVCYW5uZXIiLCJoYW5kbGVTd2lwZXIiLCJoYW5kbGVDb3VudFVwIiwibW91bnRlZEZucyIsIl9pIiwiX21vdW50ZWRGbnMiLCJsZW5ndGgiLCJkZW1vdW50Rm4iLCJjb29raWVBY2NlcHRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNvb2tpZSIsImluZGV4T2YiLCJDb3VudFVwIiwibnVtYmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibnVtYmVyIiwicGFyc2VJbnQiLCJ0ZXh0Q29udGVudCIsImVuYWJsZVNjcm9sbFNweSIsInNjcm9sbFNweU9uY2UiLCJzZXBhcmF0b3IiLCJGYW5jeWJveCIsInNpbmdsZUZhbmN5SXRlbXMiLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0IiwiZ2FsbGVyeUZhbmN5SXRlbXMiLCJncm91cEFsbCIsImZvcm1zIiwiQXJyYXkiLCJmcm9tIiwiZm9ybSIsImV2ZW50IiwicmVDYXB0Y2hhIiwiRm9ybUNhcHRjaGEiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJyZW5kZXJGb3JtIiwiYWRkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiQ2FwdGNoYUNhbGxiYWNrIiwicmVuZGVyIiwiZGF0YXNldCIsInNpdGVrZXkiLCJjb3JyZWN0Q2FwdGNoYSIsInJlc3BvbnNlIiwicmVtb3ZlIiwiV3BDdXJyZW50Q2xhc3NlcyIsImhhbmRsZU1vYmlsZU1lbnUiLCJidXJnZXIiLCJidXJnZXIyIiwibW9iaWxlTWVudSIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUV4cGFuZGVycyIsImV4cGFuZGVycyIsIm1hcCIsImV4cGFuZGVyIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInNvbWUiLCJhaSIsImluY2x1ZGVzIiwiaSIsInRvZ2dsZSIsIkNvbGxhcHNlIiwibmF2YmFyVG9nZ2xlciIsInNlYXJjaEZvcm0iLCJ0b2dnbGVySW5zdGFuY2UiLCJzZWFyY2hJbnN0YW5jZSIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJlIiwiU3dpcGVyIiwiUGFnaW5hdGlvbiIsInN3aXBlcldyYXBwZXIiLCJtb2R1bGVzIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwiY2hlY2tUYWJsZVdpZHRoIiwiZWxlbXMiLCJjaGlsZEVsZW0iLCJvdXRlckVsZW0iLCJlbGVtIiwiZWxlbVBhcmVudCIsImNsb3Nlc3QiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInNoYWRvd1dyYXBwZXIiLCJfc2hhZG93V3JhcHBlciIsImNoZWNrT3ZlcmZsb3ciLCJvZmZzZXRXaWR0aCIsImVsZW1Cb2R5IiwiX2VsZW1QYXJlbnQiLCJzY3JvbGxlZCIsInNjcm9sbExlZnQiLCJpbml0VGFibGVzIiwidGFibGUiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsImxhc3RTY3JvbGxUb3AiLCJib2R5Iiwib25TY3JvbGwiLCJwYWdlWU9mZnNldCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiXSwic291cmNlUm9vdCI6IiJ9