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
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/dist/tab */ "./node_modules/bootstrap/js/dist/tab.js");
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tables */ "./resources/scripts/components/tables.js");
/* harmony import */ var _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/check-scroll */ "./resources/scripts/utilities/check-scroll.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forms */ "./resources/scripts/components/forms.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search */ "./resources/scripts/components/search.js");
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cookie_banner */ "./resources/scripts/components/cookie_banner.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/swiper */ "./resources/scripts/components/swiper.js");
/* harmony import */ var _components_countup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/countup */ "./resources/scripts/components/countup.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modal */ "./resources/scripts/components/modal.js");
// Bootstrap (importing BS scripts individually)





// import 'bootstrap/js/dist/scrollspy';


// Imports










var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_6__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_7__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_8__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_9__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_10__.handleForms, _components_search__WEBPACK_IMPORTED_MODULE_11__.handleSearch, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_12__.handleCookieBanner, _components_swiper__WEBPACK_IMPORTED_MODULE_13__.handleSwiper, _components_countup__WEBPACK_IMPORTED_MODULE_14__.handleCountUp, _components_modal__WEBPACK_IMPORTED_MODULE_15__.handleModal];

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

/***/ "./resources/scripts/components/modal.js":
/*!***********************************************!*\
  !*** ./resources/scripts/components/modal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleModal: function() { return /* binding */ handleModal; }
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);

function handleModal() {
  var modalBtn = document.querySelector('#btn-modal-large');
  var contactModal = new (bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default())('#contactModal');
  if (!modalBtn) {
    return;
  }
  modalBtn.addEventListener('click', function (e) {
    // e.preventDefault()
    console.log('e', e, contactModal);
    contactModal.show();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Nvb2tpZV9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY291bnR1cC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mYW5jeWJveC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvdGFibGVzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY2hlY2stc2Nyb2xsLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY29udHN0cy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgKGltcG9ydGluZyBCUyBzY3JpcHRzIGluZGl2aWR1YWxseSlcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90YWInO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQge2hhbmRsZUZhbmN5Ym94fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZhbmN5Ym94XCI7XG5pbXBvcnQge2hhbmRsZU1lbnV9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IHtoYW5kbGVUYWJsZXN9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGVzXCI7XG5pbXBvcnQge2hhbmRsZUNoZWNrU2Nyb2xsfSBmcm9tIFwiLi91dGlsaXRpZXMvY2hlY2stc2Nyb2xsXCI7XG5pbXBvcnQge2hhbmRsZUZvcm1zfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1zXCI7XG5pbXBvcnQge2hhbmRsZVNlYXJjaH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcbmltcG9ydCB7aGFuZGxlQ29va2llQmFubmVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nvb2tpZV9iYW5uZXJcIjtcbmltcG9ydCB7aGFuZGxlU3dpcGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL3N3aXBlclwiO1xuaW1wb3J0IHtoYW5kbGVDb3VudFVwfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvdW50dXBcIjtcbmltcG9ydCB7aGFuZGxlTW9kYWx9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcblxuY29uc3QgbW91bnRlZEZucyA9IFtcbiAgaGFuZGxlRmFuY3lib3gsXG4gIGhhbmRsZU1lbnUsXG4gIGhhbmRsZVRhYmxlcyxcbiAgaGFuZGxlQ2hlY2tTY3JvbGwsXG4gIGhhbmRsZUZvcm1zLFxuICBoYW5kbGVTZWFyY2gsXG4gIGhhbmRsZUNvb2tpZUJhbm5lcixcbiAgaGFuZGxlU3dpcGVyLFxuICBoYW5kbGVDb3VudFVwLFxuICBoYW5kbGVNb2RhbCxcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvb2tpZUJhbm5lcigpIHtcbiAgY29uc3QgY29va2llQWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKVxuXG4gIGlmICghY29va2llQWNjZXB0QnV0dG9uKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb29raWVBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGF0IHRoZSB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgdXNlIG9mIGNvb2tpZXNcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llc19hY2NlcHRlZD10cnVlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIwOTkgMDA6MDA6MDAgVVRDOyBwYXRoPS9cIjtcbiAgfSk7XG4gIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiY29va2llc19hY2NlcHRlZD10cnVlXCIpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb3VudFVwfSBmcm9tIFwiY291bnR1cC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ291bnRVcCgpIHtcbiAgY29uc3QgbnVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXJzLW1vZHVsZSBoMScpXG5cbiAgaWYgKCFudW1iZXJzLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbnVtYmVycy5mb3JFYWNoKChudW1iZXIpID0+IHtcbiAgICBuZXcgQ291bnRVcChudW1iZXIsIHBhcnNlSW50KG51bWJlci50ZXh0Q29udGVudCksXG4gICAgICB7XG4gICAgICAgIGVuYWJsZVNjcm9sbFNweTogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsU3B5T25jZTogdHJ1ZSxcbiAgICAgICAgc2VwYXJhdG9yOiAnJyxcbiAgICAgIH0pXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBGYW5jeWJveCB9IGZyb20gJ0BmYW5jeWFwcHMvdWknO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRmFuY3lib3goKSB7XG4gIC8vIFNpbmdsZVxuICBjb25zdCBzaW5nbGVGYW5jeUl0ZW1zID0gWydhW2hyZWYkPVwiLmpwZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIuanBlZ1wiXTpub3QoLm5vLWZhbmN5KScsJ2FbaHJlZiQ9XCIucG5nXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIud2VicFwiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLnN2Z1wiXTpub3QoLm5vLWZhbmN5KScsICcuZmFuY3lpbWFnZScsICcuZmFuY3l2aWRlbyddO1xuXG4gIGlmICghc2luZ2xlRmFuY3lJdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHNpbmdsZUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgIHJpZ2h0OiBbXCJjbG9zZVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEdhbGxlcnlcbiAgY29uc3QgZ2FsbGVyeUZhbmN5SXRlbXMgPSBbJy5nYWxsZXJ5LWl0ZW0gYTpub3QoLm5vLWZhbmN5KSddO1xuXG4gIGlmICghZ2FsbGVyeUZhbmN5SXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBnYWxsZXJ5RmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIGdyb3VwQWxsOiB0cnVlLFxuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICByaWdodDogW1wiY2xvc2VcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGb3JtcygpIHtcbiAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cbiAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVlZHMtdmFsaWRhdGlvbicpXG5cbiAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxuICBBcnJheS5mcm9tKGZvcm1zKS5mb3JFYWNoKGZvcm0gPT4ge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXG4gICAgICAvLyBSZWNhcHRjaGFcbiAgICAgIGxldCByZUNhcHRjaGE7XG4gICAgICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkcy12YWxpZGF0aW9uJykgJiYgRm9ybUNhcHRjaGEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGlmICggZ3JlY2FwdGNoYS5nZXRSZXNwb25zZShyZW5kZXJGb3JtKSA9PT0gJycgKSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gZmFsc2U7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpLmNsYXNzTGlzdC5hZGQoJ2NhcHRjaGEtZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpIHx8ICFyZUNhcHRjaGEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKVxuICAgIH0sIGZhbHNlKVxuICB9KVxuXG4gIC8vIFJlY2FwdGNoYSBjYWxsYmFja1xuICBsZXQgcmVuZGVyRm9ybTtcbiAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gIHdpbmRvdy5DYXB0Y2hhQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIEZvcm1DYXB0Y2hhICkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICByZW5kZXJGb3JtID0gZ3JlY2FwdGNoYS5yZW5kZXIoJ2ctcmVjYXB0Y2hhJywgeydzaXRla2V5JyA6IEZvcm1DYXB0Y2hhLmRhdGFzZXQuc2l0ZWtleSwgJ2NhbGxiYWNrJyA6IGNvcnJlY3RDYXB0Y2hhfSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBjb3JyZWN0Q2FwdGNoYSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKCByZXNwb25zZSAhPT0gJycpXG4gICAgICBGb3JtQ2FwdGNoYS5jbGFzc0xpc3QucmVtb3ZlKCdjYXB0Y2hhLWVycm9yJyk7XG4gIH07XG59XG4iLCJpbXBvcnQge1dwQ3VycmVudENsYXNzZXN9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udHN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgLy8gTW9iaWxlIG1lbnVcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcbiAgICBjb25zdCBidXJnZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci0yJylcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51JylcblxuICAgIGlmICghYnVyZ2VyIHx8ICFidXJnZXIyIHx8ICFtb2JpbGVNZW51KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJ1cmdlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIW1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGhhbmRsZU1vYmlsZU1lbnUoKVxuXG4gIC8vIEV4cGFuZGVyc1xuICBjb25zdCBoYW5kbGVFeHBhbmRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwYW5kZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZGVyJylcblxuICAgIGlmICghZXhwYW5kZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShleHBhbmRlcnMpLm1hcChleHBhbmRlciA9PiB7XG4gICAgICBsZXQgcGFyZW50ID0gZXhwYW5kZXIucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKSAmJiBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpKSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoV3BDdXJyZW50Q2xhc3Nlcy5zb21lKGFpID0+IEFycmF5LmZyb20ocGFyZW50LmNsYXNzTGlzdCkuaW5jbHVkZXMoYWkpKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBleHBhbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdwQ3VycmVudENsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFdwQ3VycmVudENsYXNzZXNbaV0pO1xuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCduYXYtaXRlbS1vcGVuJyk7XG5cbiAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWl0ZW0tb3BlbicpKVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGhhbmRsZUV4cGFuZGVycygpXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vZGFsKCkge1xuICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbW9kYWwtbGFyZ2UnKVxuICBjb25zdCBjb250YWN0TW9kYWwgPSBuZXcgTW9kYWwoJyNjb250YWN0TW9kYWwnKVxuXG4gIGlmICghbW9kYWxCdG4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZygnZScsIGUsIGNvbnRhY3RNb2RhbClcbiAgICBjb250YWN0TW9kYWwuc2hvdygpXG4gIH0pXG59XG4iLCJpbXBvcnQgQ29sbGFwc2UgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcbiAgY29uc3QgbmF2YmFyVG9nZ2xlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJQcmltYXJ5Jyk7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXNlYXJjaC1mb3JtJyk7XG5cbiAgaWYgKCFzZWFyY2hGb3JtLmxlbmd0aCB8fCAhbmF2YmFyVG9nZ2xlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdG9nZ2xlckluc3RhbmNlID0gbmV3IENvbGxhcHNlKG5hdmJhclRvZ2dsZXIsIHsgdG9nZ2xlOiBmYWxzZSB9KTtcblxuICBBcnJheS5mcm9tKHNlYXJjaEZvcm0pLm1hcChmb3JtID0+IHtcbiAgICBsZXQgc2VhcmNoSW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UoZm9ybSwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuICAgIC8vIEhpZGUgUldEIG1lbnUgd2hlbiBjbGljayBzZWFyY2gsIGZvY3VzIG9uIHNlYXJjaFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZXJJbnN0YW5jZS5oaWRlKCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZpZWxkJykuZm9jdXMoKVxuICAgICAgfSwgMClcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgc2VhcmNoIG9uIGJvZHkgY2xpY2tcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHNlYXJjaEluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN3aXBlcigpIHtcbiAgY29uc3Qgc3dpcGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKVxuXG4gIGlmICghc3dpcGVyV3JhcHBlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbmV3IFN3aXBlcihzd2lwZXJXcmFwcGVyLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDMyMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDU0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIC8vIDc2ODoge1xuICAgICAgLy8gICBzbGlkZXNQZXJWaWV3OiA0LjMsXG4gICAgICAvLyB9LFxuICAgICAgLy8gMTIwMDoge1xuICAgICAgLy8gICAvL3NsaWRlc1BlclZpZXc6IHNsaWRlc1BlclZpZXcsXG4gICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcclxuICBjb25zdCBvdXRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcclxuICBBcnJheS5mcm9tKG91dGVyRWxlbSkubWFwKGVsZW0gPT4ge1xyXG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICBpZiAoIWVsZW1QYXJlbnQpIHtcclxuICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XHJcbiAgICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbSk7XHJcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LXJpZ2h0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1sZWZ0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xyXG4gICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSkub2Zmc2V0V2lkdGggPiBlbGVtUGFyZW50Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja092ZXJmbG93KCk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZS13cmFwJykpIHtcclxuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcclxuICAgICAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gKGVsZW1Cb2R5Lm9mZnNldFdpZHRoIC0gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCAtIGVsZW0uc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xyXG4gIC8vIEluaXQgcnVuXHJcbiAgY29uc3QgaW5pdFRhYmxlcyA9ICgpID0+IHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcblxyXG4gICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBpbml0VGFibGVzKClcclxufVxyXG5cclxuZXhwb3J0IHsgY2hlY2tUYWJsZVdpZHRoLCBoYW5kbGVUYWJsZXMgfVxyXG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tTY3JvbGwoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPj0gNjAgJiYgc2Nyb2xsZWQgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm90LXRvcCcpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPj0gNjApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC10b3AnKTtcclxuICAgIH1cclxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFdwQ3VycmVudENsYXNzZXMgPSBbJ2N1cnJlbnQtcG9zdC1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtcGFnZS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1wYXJlbnQnLFxyXG4gICdjdXJyZW50LXBhZ2UtcGFyZW50JyxcclxuICAnY3VycmVudF9wYWdlX3BhcmVudCcsXHJcbiAgJ2N1cnJlbnQtbWVudS1pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2l0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LWNhdGVnb3J5LWFuY2VzdG9yJyxcclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImhhbmRsZUZhbmN5Ym94IiwiaGFuZGxlTWVudSIsImhhbmRsZVRhYmxlcyIsImhhbmRsZUNoZWNrU2Nyb2xsIiwiaGFuZGxlRm9ybXMiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDb29raWVCYW5uZXIiLCJoYW5kbGVTd2lwZXIiLCJoYW5kbGVDb3VudFVwIiwiaGFuZGxlTW9kYWwiLCJtb3VudGVkRm5zIiwiX2kiLCJfbW91bnRlZEZucyIsImxlbmd0aCIsImRlbW91bnRGbiIsImNvb2tpZUFjY2VwdEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29va2llIiwiaW5kZXhPZiIsIkNvdW50VXAiLCJudW1iZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJudW1iZXIiLCJwYXJzZUludCIsInRleHRDb250ZW50IiwiZW5hYmxlU2Nyb2xsU3B5Iiwic2Nyb2xsU3B5T25jZSIsInNlcGFyYXRvciIsIkZhbmN5Ym94Iiwic2luZ2xlRmFuY3lJdGVtcyIsInZhbHVlIiwiYmluZCIsIlRvb2xiYXIiLCJsZWZ0IiwibWlkZGxlIiwicmlnaHQiLCJnYWxsZXJ5RmFuY3lJdGVtcyIsImdyb3VwQWxsIiwiZm9ybXMiLCJBcnJheSIsImZyb20iLCJmb3JtIiwiZXZlbnQiLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsInJlbmRlckZvcm0iLCJhZGQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJDYXB0Y2hhQ2FsbGJhY2siLCJyZW5kZXIiLCJkYXRhc2V0Iiwic2l0ZWtleSIsImNvcnJlY3RDYXB0Y2hhIiwicmVzcG9uc2UiLCJyZW1vdmUiLCJXcEN1cnJlbnRDbGFzc2VzIiwiaGFuZGxlTW9iaWxlTWVudSIsImJ1cmdlciIsImJ1cmdlcjIiLCJtb2JpbGVNZW51Iiwic2V0QXR0cmlidXRlIiwiaGFuZGxlRXhwYW5kZXJzIiwiZXhwYW5kZXJzIiwibWFwIiwiZXhwYW5kZXIiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic29tZSIsImFpIiwiaW5jbHVkZXMiLCJpIiwidG9nZ2xlIiwiTW9kYWwiLCJtb2RhbEJ0biIsImNvbnRhY3RNb2RhbCIsImUiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsIkNvbGxhcHNlIiwibmF2YmFyVG9nZ2xlciIsInNlYXJjaEZvcm0iLCJ0b2dnbGVySW5zdGFuY2UiLCJzZWFyY2hJbnN0YW5jZSIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwic3dpcGVyV3JhcHBlciIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsImVsZW0iLCJlbGVtUGFyZW50IiwiY2xvc2VzdCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2hhZG93V3JhcHBlciIsIl9zaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwiZWxlbUJvZHkiLCJfZWxlbVBhcmVudCIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsImJvZHkiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=