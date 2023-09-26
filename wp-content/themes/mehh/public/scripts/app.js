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
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tables */ "./resources/scripts/components/tables.js");
/* harmony import */ var _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/check-scroll */ "./resources/scripts/utilities/check-scroll.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forms */ "./resources/scripts/components/forms.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search */ "./resources/scripts/components/search.js");
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cookie_banner */ "./resources/scripts/components/cookie_banner.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/swiper */ "./resources/scripts/components/swiper.js");
/* harmony import */ var _components_countup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/countup */ "./resources/scripts/components/countup.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modal */ "./resources/scripts/components/modal.js");
// Bootstrap (importing BS scripts individually)





// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports










var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_5__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_6__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_7__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_8__.handleCheckScroll, _components_forms__WEBPACK_IMPORTED_MODULE_9__.handleForms, _components_search__WEBPACK_IMPORTED_MODULE_10__.handleSearch, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_11__.handleCookieBanner, _components_swiper__WEBPACK_IMPORTED_MODULE_12__.handleSwiper, _components_countup__WEBPACK_IMPORTED_MODULE_13__.handleCountUp, _components_modal__WEBPACK_IMPORTED_MODULE_14__.handleModal];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvY29va2llX2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9jb3VudHVwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2ZhbmN5Ym94LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy90YWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jaGVjay1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jb250c3RzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2VkaXRvci5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9tb2RhbCc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Njcm9sbHNweSc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5cbi8vIEltcG9ydHNcbmltcG9ydCB7aGFuZGxlRmFuY3lib3h9IGZyb20gXCIuL2NvbXBvbmVudHMvZmFuY3lib3hcIjtcbmltcG9ydCB7aGFuZGxlTWVudX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQge2hhbmRsZVRhYmxlc30gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZXNcIjtcbmltcG9ydCB7aGFuZGxlQ2hlY2tTY3JvbGx9IGZyb20gXCIuL3V0aWxpdGllcy9jaGVjay1zY3JvbGxcIjtcbmltcG9ydCB7aGFuZGxlRm9ybXN9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7aGFuZGxlU2VhcmNofSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHtoYW5kbGVDb29raWVCYW5uZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvY29va2llX2Jhbm5lclwiO1xuaW1wb3J0IHtoYW5kbGVTd2lwZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvc3dpcGVyXCI7XG5pbXBvcnQge2hhbmRsZUNvdW50VXB9IGZyb20gXCIuL2NvbXBvbmVudHMvY291bnR1cFwiO1xuaW1wb3J0IHtoYW5kbGVNb2RhbH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG5jb25zdCBtb3VudGVkRm5zID0gW1xuICBoYW5kbGVGYW5jeWJveCxcbiAgaGFuZGxlTWVudSxcbiAgaGFuZGxlVGFibGVzLFxuICBoYW5kbGVDaGVja1Njcm9sbCxcbiAgaGFuZGxlRm9ybXMsXG4gIGhhbmRsZVNlYXJjaCxcbiAgaGFuZGxlQ29va2llQmFubmVyLFxuICBoYW5kbGVTd2lwZXIsXG4gIGhhbmRsZUNvdW50VXAsXG4gIGhhbmRsZU1vZGFsLFxuXVxuXG4vLyBSdW4gZm4tc1xuZm9yIChjb25zdCBkZW1vdW50Rm4gb2YgbW91bnRlZEZucykge1xuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlQ29va2llQmFubmVyKCkge1xuICBjb25zdCBjb29raWVBY2NlcHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpXG5cbiAgaWYgKCFjb29raWVBY2NlcHRCdXR0b24pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvb2tpZUFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgLy8gU2V0IGEgY29va2llIHRvIHJlbWVtYmVyIHRoYXQgdGhlIHVzZXIgaGFzIGFjY2VwdGVkIHRoZSB1c2Ugb2YgY29va2llc1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVzX2FjY2VwdGVkPXRydWU7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMjA5OSAwMDowMDowMCBVVEM7IHBhdGg9L1wiO1xuICB9KTtcbiAgLy8gQ2hlY2sgaWYgdGhlIGNvb2tpZSBoYXMgYWxyZWFkeSBiZWVuIHNldFxuICBpZiAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCJjb29raWVzX2FjY2VwdGVkPXRydWVcIikgIT09IC0xKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG4iLCJpbXBvcnQge0NvdW50VXB9IGZyb20gXCJjb3VudHVwLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb3VudFVwKCkge1xuICBjb25zdCBudW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlcnMtbW9kdWxlIGgxJylcblxuICBpZiAoIW51bWJlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBudW1iZXJzLmZvckVhY2goKG51bWJlcikgPT4ge1xuICAgIG5ldyBDb3VudFVwKG51bWJlciwgcGFyc2VJbnQobnVtYmVyLnRleHRDb250ZW50KSxcbiAgICAgIHtcbiAgICAgICAgZW5hYmxlU2Nyb2xsU3B5OiB0cnVlLFxuICAgICAgICBzY3JvbGxTcHlPbmNlOiB0cnVlLFxuICAgICAgICBzZXBhcmF0b3I6ICcnLFxuICAgICAgfSlcbiAgfSlcbn1cbiIsImltcG9ydCB7IEZhbmN5Ym94IH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcbiAgLy8gU2luZ2xlXG4gIGNvbnN0IHNpbmdsZUZhbmN5SXRlbXMgPSBbJ2FbaHJlZiQ9XCIuanBnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5qcGVnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5wbmdcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi53ZWJwXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIuc3ZnXCJdOm5vdCgubm8tZmFuY3kpJywgJy5mYW5jeWltYWdlJywgJy5mYW5jeXZpZGVvJ107XG5cbiAgaWYgKCFzaW5nbGVGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc2luZ2xlRmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gR2FsbGVyeVxuICBjb25zdCBnYWxsZXJ5RmFuY3lJdGVtcyA9IFsnLmdhbGxlcnktaXRlbSBhOm5vdCgubm8tZmFuY3kpJ107XG5cbiAgaWYgKCFnYWxsZXJ5RmFuY3lJdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgZ3JvdXBBbGw6IHRydWUsXG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgIHJpZ2h0OiBbXCJjbG9zZVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1zKCkge1xuICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcblxuICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cbiAgICAgIC8vIFJlY2FwdGNoYVxuICAgICAgbGV0IHJlQ2FwdGNoYTtcbiAgICAgIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWRzLXZhbGlkYXRpb24nKSAmJiBGb3JtQ2FwdGNoYSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaWYgKCBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHJlbmRlckZvcm0pID09PSAnJyApIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJykuY2xhc3NMaXN0LmFkZCgnY2FwdGNoYS1lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkgfHwgIXJlQ2FwdGNoYSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXG4gICAgfSwgZmFsc2UpXG4gIH0pXG5cbiAgLy8gUmVjYXB0Y2hhIGNhbGxiYWNrXG4gIGxldCByZW5kZXJGb3JtO1xuICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgd2luZG93LkNhcHRjaGFDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggRm9ybUNhcHRjaGEgKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJlbmRlckZvcm0gPSBncmVjYXB0Y2hhLnJlbmRlcignZy1yZWNhcHRjaGEnLCB7J3NpdGVrZXknIDogRm9ybUNhcHRjaGEuZGF0YXNldC5zaXRla2V5LCAnY2FsbGJhY2snIDogY29ycmVjdENhcHRjaGF9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGNvcnJlY3RDYXB0Y2hhID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAoIHJlc3BvbnNlICE9PSAnJylcbiAgICAgIEZvcm1DYXB0Y2hhLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcHRjaGEtZXJyb3InKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7V3BDdXJyZW50Q2xhc3Nlc30gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250c3RzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZW51KCkge1xuICAvLyBNb2JpbGUgbWVudVxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxuICAgIGNvbnN0IGJ1cmdlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLTInKVxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKVxuXG4gICAgaWYgKCFidXJnZXIgfHwgIWJ1cmdlcjIgfHwgIW1vYmlsZU1lbnUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYnVyZ2VyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlTW9iaWxlTWVudSgpXG5cbiAgLy8gRXhwYW5kZXJzXG4gIGNvbnN0IGhhbmRsZUV4cGFuZGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kZXInKVxuXG4gICAgaWYgKCFleHBhbmRlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKGV4cGFuZGVycykubWFwKGV4cGFuZGVyID0+IHtcbiAgICAgIGxldCBwYXJlbnQgPSBleHBhbmRlci5wYXJlbnRFbGVtZW50O1xuXG4gICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGV4cGFuZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoV3BDdXJyZW50Q2xhc3Nlcy5zb21lKGFpID0+IEFycmF5LmZyb20ocGFyZW50LmNsYXNzTGlzdCkuaW5jbHVkZXMoYWkpKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV3BDdXJyZW50Q2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoV3BDdXJyZW50Q2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1pdGVtLW9wZW4nKTtcblxuICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtaXRlbS1vcGVuJykpXG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlRXhwYW5kZXJzKClcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tICdib290c3RyYXAvanMvZGlzdC9tb2RhbCc7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1tb2RhbC1sYXJnZScpXG4gIGNvbnN0IGNvbnRhY3RNb2RhbCA9IG5ldyBNb2RhbCgnI2NvbnRhY3RNb2RhbCcpXG5cbiAgaWYgKCFtb2RhbEJ0bikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCdlJywgZSwgY29udGFjdE1vZGFsKVxuICAgIGNvbnRhY3RNb2RhbC5zaG93KClcbiAgfSlcbn1cbiIsImltcG9ydCBDb2xsYXBzZSBmcm9tICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhclByaW1hcnknKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc2VhcmNoLWZvcm0nKTtcblxuICBpZiAoIXNlYXJjaEZvcm0ubGVuZ3RoIHx8ICFuYXZiYXJUb2dnbGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0b2dnbGVySW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UobmF2YmFyVG9nZ2xlciwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuXG4gIEFycmF5LmZyb20oc2VhcmNoRm9ybSkubWFwKGZvcm0gPT4ge1xuICAgIGxldCBzZWFyY2hJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShmb3JtLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG4gICAgLy8gSGlkZSBSV0QgbWVudSB3aGVuIGNsaWNrIHNlYXJjaCwgZm9jdXMgb24gc2VhcmNoXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlckluc3RhbmNlLmhpZGUoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZmllbGQnKS5mb2N1cygpXG4gICAgICB9LCAwKVxuICAgIH0pO1xuXG4gICAgLy8gSGlkZSBzZWFyY2ggb24gYm9keSBjbGlja1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZm9ybS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgc2VhcmNoSW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3dpcGVyKCkge1xuICBjb25zdCBzd2lwZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpXG5cbiAgaWYgKCFzd2lwZXJXcmFwcGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBuZXcgU3dpcGVyKHN3aXBlcldyYXBwZXIsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMzIwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgNTQwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgLy8gNzY4OiB7XG4gICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDQuMyxcbiAgICAgIC8vIH0sXG4gICAgICAvLyAxMjAwOiB7XG4gICAgICAvLyAgIC8vc2xpZGVzUGVyVmlldzogc2xpZGVzUGVyVmlldyxcbiAgICAgIC8vICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIC8vIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBjaGVja1RhYmxlV2lkdGgoZWxlbXMsIGNoaWxkRWxlbSkge1xyXG4gIGNvbnN0IG91dGVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xyXG4gIEFycmF5LmZyb20ob3V0ZXJFbGVtKS5tYXAoZWxlbSA9PiB7XHJcbiAgICBsZXQgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgIGlmICghZWxlbVBhcmVudCkge1xyXG4gICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0YWJsZS13cmFwJztcclxuICAgICAgZWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtKTtcclxuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1yaWdodCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctcmlnaHQnO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LWxlZnQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LWxlZnQnO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XHJcbiAgICAgIGlmIChlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKS5vZmZzZXRXaWR0aCA+IGVsZW1QYXJlbnQub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrT3ZlcmZsb3coKTtcclxuXHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYmxlLXdyYXAnKSkge1xyXG4gICAgICAgIGxldCBlbGVtQm9keSA9IGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLFxyXG4gICAgICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcclxuICAgICAgICBsZXQgc2Nyb2xsZWQgPSAoZWxlbUJvZHkub2Zmc2V0V2lkdGggLSBlbGVtUGFyZW50Lm9mZnNldFdpZHRoIC0gZWxlbS5zY3JvbGxMZWZ0KTtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbS5zY3JvbGxMZWZ0IDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXMoKSB7XHJcbiAgLy8gSW5pdCBydW5cclxuICBjb25zdCBpbml0VGFibGVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuXHJcbiAgICBpZiAoIXRhYmxlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGluaXRUYWJsZXMoKVxyXG59XHJcblxyXG5leHBvcnQgeyBjaGVja1RhYmxlV2lkdGgsIGhhbmRsZVRhYmxlcyB9XHJcbiIsImxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDaGVja1Njcm9sbCgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChzY3JvbGxlZCA+PSA2MCAmJiBzY3JvbGxlZCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3QtdG9wJyk7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxlZCA+PSA2MCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXRvcCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbGVkIDw9IDAgPyAwIDogc2Nyb2xsZWQ7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgV3BDdXJyZW50Q2xhc3NlcyA9IFsnY3VycmVudC1wb3N0LWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1wYWdlLWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1tZW51LWFuY2VzdG9yJyxcclxuICAnY3VycmVudC1tZW51LXBhcmVudCcsXHJcbiAgJ2N1cnJlbnQtcGFnZS1wYXJlbnQnLFxyXG4gICdjdXJyZW50X3BhZ2VfcGFyZW50JyxcclxuICAnY3VycmVudC1tZW51LWl0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfaXRlbScsXHJcbiAgJ2N1cnJlbnRfcGFnZV9hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtY2F0ZWdvcnktYW5jZXN0b3InLFxyXG5dO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaGFuZGxlRmFuY3lib3giLCJoYW5kbGVNZW51IiwiaGFuZGxlVGFibGVzIiwiaGFuZGxlQ2hlY2tTY3JvbGwiLCJoYW5kbGVGb3JtcyIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNvb2tpZUJhbm5lciIsImhhbmRsZVN3aXBlciIsImhhbmRsZUNvdW50VXAiLCJoYW5kbGVNb2RhbCIsIm1vdW50ZWRGbnMiLCJfaSIsIl9tb3VudGVkRm5zIiwibGVuZ3RoIiwiZGVtb3VudEZuIiwiY29va2llQWNjZXB0QnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjb29raWUiLCJpbmRleE9mIiwiQ291bnRVcCIsIm51bWJlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm51bWJlciIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJlbmFibGVTY3JvbGxTcHkiLCJzY3JvbGxTcHlPbmNlIiwic2VwYXJhdG9yIiwiRmFuY3lib3giLCJzaW5nbGVGYW5jeUl0ZW1zIiwidmFsdWUiLCJiaW5kIiwiVG9vbGJhciIsImxlZnQiLCJtaWRkbGUiLCJyaWdodCIsImdhbGxlcnlGYW5jeUl0ZW1zIiwiZ3JvdXBBbGwiLCJmb3JtcyIsIkFycmF5IiwiZnJvbSIsImZvcm0iLCJldmVudCIsInJlQ2FwdGNoYSIsIkZvcm1DYXB0Y2hhIiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwicmVuZGVyRm9ybSIsImFkZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIndpbmRvdyIsIkNhcHRjaGFDYWxsYmFjayIsInJlbmRlciIsImRhdGFzZXQiLCJzaXRla2V5IiwiY29ycmVjdENhcHRjaGEiLCJyZXNwb25zZSIsInJlbW92ZSIsIldwQ3VycmVudENsYXNzZXMiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiYnVyZ2VyMiIsIm1vYmlsZU1lbnUiLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVFeHBhbmRlcnMiLCJleHBhbmRlcnMiLCJtYXAiLCJleHBhbmRlciIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJzb21lIiwiYWkiLCJpbmNsdWRlcyIsImkiLCJ0b2dnbGUiLCJNb2RhbCIsIm1vZGFsQnRuIiwiY29udGFjdE1vZGFsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93IiwiQ29sbGFwc2UiLCJuYXZiYXJUb2dnbGVyIiwic2VhcmNoRm9ybSIsInRvZ2dsZXJJbnN0YW5jZSIsInNlYXJjaEluc3RhbmNlIiwiaGlkZSIsInNldFRpbWVvdXQiLCJmb2N1cyIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJzd2lwZXJXcmFwcGVyIiwibW9kdWxlcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsImNoZWNrVGFibGVXaWR0aCIsImVsZW1zIiwiY2hpbGRFbGVtIiwib3V0ZXJFbGVtIiwiZWxlbSIsImVsZW1QYXJlbnQiLCJjbG9zZXN0Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzaGFkb3dXcmFwcGVyIiwiX3NoYWRvd1dyYXBwZXIiLCJjaGVja092ZXJmbG93Iiwib2Zmc2V0V2lkdGgiLCJlbGVtQm9keSIsIl9lbGVtUGFyZW50Iiwic2Nyb2xsZWQiLCJzY3JvbGxMZWZ0IiwiaW5pdFRhYmxlcyIsInRhYmxlIiwib25sb2FkIiwib25yZXNpemUiLCJsYXN0U2Nyb2xsVG9wIiwiYm9keSIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==