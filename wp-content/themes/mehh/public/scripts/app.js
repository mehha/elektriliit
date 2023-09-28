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
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);

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
        localStorage.removeItem('form-submitted');
      } else {
        localStorage.setItem('form-submitted', 'true');
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
  window.addEventListener("load", function () {
    var submittedUsername = localStorage.getItem('form-submitted');
    var contactModal = new (bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default())('#contactModal');
    if (submittedUsername) {
      contactModal.show();
      localStorage.removeItem('form-submitted');
      setTimeout(function () {
        contactModal.hide();
      }, 2400);
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE1BQU0sSUFBSTRFLFFBQVEsSUFBSSxFQUFFLEVBQUU7TUFDekJPLElBQUksQ0FBQ3hGLFNBQVMsQ0FBQ21CLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQyxNQUFNO01BQ0xxRSxJQUFJLENBQUN4RixTQUFTLENBQUNtQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0FvRSxhQUFhLEdBQUdOLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxRQUFRO0VBQzlDLENBQUM7RUFFRHRILFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFNEgsUUFBUSxDQUFDO0FBQy9DOzs7Ozs7Ozs7Ozs7OztBQ25CTyxJQUFNL0QsZ0JBQWdCLEdBQUcsQ0FBQyx1QkFBdUIsRUFDdEQsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2QiwyQkFBMkIsQ0FDNUI7Ozs7Ozs7Ozs7O0FDVkQ7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVfYmFubmVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2NvdW50dXAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NoZWNrLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NvbnRzdHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3M/MmYzMCIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2Nzcz9mODU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9tb2RhbCc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Njcm9sbHNweSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5cbi8vIEltcG9ydHNcbmltcG9ydCB7aGFuZGxlRmFuY3lib3h9IGZyb20gXCIuL2NvbXBvbmVudHMvZmFuY3lib3hcIjtcbmltcG9ydCB7aGFuZGxlTWVudX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQge2hhbmRsZVRhYmxlc30gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZXNcIjtcbmltcG9ydCB7aGFuZGxlQ2hlY2tTY3JvbGx9IGZyb20gXCIuL3V0aWxpdGllcy9jaGVjay1zY3JvbGxcIjtcbmltcG9ydCB7aGFuZGxlRm9ybXN9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7aGFuZGxlU2VhcmNofSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHtoYW5kbGVDb29raWVCYW5uZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvY29va2llX2Jhbm5lclwiO1xuaW1wb3J0IHtoYW5kbGVTd2lwZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvc3dpcGVyXCI7XG5pbXBvcnQge2hhbmRsZUNvdW50VXB9IGZyb20gXCIuL2NvbXBvbmVudHMvY291bnR1cFwiO1xuaW1wb3J0IHtoYW5kbGVNb2RhbH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG5jb25zdCBtb3VudGVkRm5zID0gW1xuICBoYW5kbGVGYW5jeWJveCxcbiAgaGFuZGxlTWVudSxcbiAgaGFuZGxlVGFibGVzLFxuICBoYW5kbGVDaGVja1Njcm9sbCxcbiAgaGFuZGxlRm9ybXMsXG4gIGhhbmRsZVNlYXJjaCxcbiAgaGFuZGxlQ29va2llQmFubmVyLFxuICBoYW5kbGVTd2lwZXIsXG4gIGhhbmRsZUNvdW50VXAsXG4gIGhhbmRsZU1vZGFsLFxuXVxuXG4vLyBSdW4gZm4tc1xuZm9yIChjb25zdCBkZW1vdW50Rm4gb2YgbW91bnRlZEZucykge1xuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlQ29va2llQmFubmVyKCkge1xuICBjb25zdCBjb29raWVBY2NlcHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpXG5cbiAgaWYgKCFjb29raWVBY2NlcHRCdXR0b24pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvb2tpZUFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgLy8gU2V0IGEgY29va2llIHRvIHJlbWVtYmVyIHRoYXQgdGhlIHVzZXIgaGFzIGFjY2VwdGVkIHRoZSB1c2Ugb2YgY29va2llc1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVzX2FjY2VwdGVkPXRydWU7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMjA5OSAwMDowMDowMCBVVEM7IHBhdGg9L1wiO1xuICB9KTtcbiAgLy8gQ2hlY2sgaWYgdGhlIGNvb2tpZSBoYXMgYWxyZWFkeSBiZWVuIHNldFxuICBpZiAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCJjb29raWVzX2FjY2VwdGVkPXRydWVcIikgIT09IC0xKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG4iLCJpbXBvcnQge0NvdW50VXB9IGZyb20gXCJjb3VudHVwLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb3VudFVwKCkge1xuICBjb25zdCBudW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlcnMtbW9kdWxlIGgxJylcblxuICBpZiAoIW51bWJlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBudW1iZXJzLmZvckVhY2goKG51bWJlcikgPT4ge1xuICAgIG5ldyBDb3VudFVwKG51bWJlciwgcGFyc2VJbnQobnVtYmVyLnRleHRDb250ZW50KSxcbiAgICAgIHtcbiAgICAgICAgZW5hYmxlU2Nyb2xsU3B5OiB0cnVlLFxuICAgICAgICBzY3JvbGxTcHlPbmNlOiB0cnVlLFxuICAgICAgICBzZXBhcmF0b3I6ICcnLFxuICAgICAgfSlcbiAgfSlcbn1cbiIsImltcG9ydCB7IEZhbmN5Ym94IH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcbiAgLy8gU2luZ2xlXG4gIGNvbnN0IHNpbmdsZUZhbmN5SXRlbXMgPSBbJ2FbaHJlZiQ9XCIuanBnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5qcGVnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5wbmdcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi53ZWJwXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIuc3ZnXCJdOm5vdCgubm8tZmFuY3kpJywgJy5mYW5jeWltYWdlJywgJy5mYW5jeXZpZGVvJ107XG5cbiAgaWYgKCFzaW5nbGVGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc2luZ2xlRmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gR2FsbGVyeVxuICBjb25zdCBnYWxsZXJ5RmFuY3lJdGVtcyA9IFsnLmdhbGxlcnktaXRlbSBhOm5vdCgubm8tZmFuY3kpJ107XG5cbiAgaWYgKCFnYWxsZXJ5RmFuY3lJdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgZ3JvdXBBbGw6IHRydWUsXG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgIHJpZ2h0OiBbXCJjbG9zZVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L21vZGFsJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGb3JtcygpIHtcbiAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cbiAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVlZHMtdmFsaWRhdGlvbicpXG5cbiAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxuICBBcnJheS5mcm9tKGZvcm1zKS5mb3JFYWNoKGZvcm0gPT4ge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXG4gICAgICAvLyBSZWNhcHRjaGFcbiAgICAgIGxldCByZUNhcHRjaGE7XG4gICAgICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkcy12YWxpZGF0aW9uJykgJiYgRm9ybUNhcHRjaGEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGlmICggZ3JlY2FwdGNoYS5nZXRSZXNwb25zZShyZW5kZXJGb3JtKSA9PT0gJycgKSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gZmFsc2U7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpLmNsYXNzTGlzdC5hZGQoJ2NhcHRjaGEtZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpIHx8ICFyZUNhcHRjaGEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9ybS1zdWJtaXR0ZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb3JtLXN1Ym1pdHRlZCcsICd0cnVlJylcbiAgICAgIH1cblxuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJylcbiAgICB9LCBmYWxzZSlcbiAgfSlcblxuICAvLyBSZWNhcHRjaGEgY2FsbGJhY2tcbiAgbGV0IHJlbmRlckZvcm07XG4gIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICB3aW5kb3cuQ2FwdGNoYUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCBGb3JtQ2FwdGNoYSApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgcmVuZGVyRm9ybSA9IGdyZWNhcHRjaGEucmVuZGVyKCdnLXJlY2FwdGNoYScsIHsnc2l0ZWtleScgOiBGb3JtQ2FwdGNoYS5kYXRhc2V0LnNpdGVrZXksICdjYWxsYmFjaycgOiBjb3JyZWN0Q2FwdGNoYX0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgY29ycmVjdENhcHRjaGEgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICggcmVzcG9uc2UgIT09ICcnKVxuICAgICAgRm9ybUNhcHRjaGEuY2xhc3NMaXN0LnJlbW92ZSgnY2FwdGNoYS1lcnJvcicpO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHN1Ym1pdHRlZFVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tc3VibWl0dGVkJyk7XG4gICAgICBjb25zdCBjb250YWN0TW9kYWwgPSBuZXcgTW9kYWwoJyNjb250YWN0TW9kYWwnKVxuXG4gICAgICBpZiAoc3VibWl0dGVkVXNlcm5hbWUpIHtcbiAgICAgICAgY29udGFjdE1vZGFsLnNob3coKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9ybS1zdWJtaXR0ZWQnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb250YWN0TW9kYWwuaGlkZSgpXG4gICAgICAgIH0sIDI0MDApXG4gICAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtXcEN1cnJlbnRDbGFzc2VzfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRzdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XG4gIC8vIE1vYmlsZSBtZW51XG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXG4gICAgY29uc3QgYnVyZ2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItMicpXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpXG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhYnVyZ2VyMiB8fCAhbW9iaWxlTWVudSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidXJnZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBoYW5kbGVNb2JpbGVNZW51KClcblxuICAvLyBFeHBhbmRlcnNcbiAgY29uc3QgaGFuZGxlRXhwYW5kZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cGFuZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmRlcicpXG5cbiAgICBpZiAoIWV4cGFuZGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEFycmF5LmZyb20oZXhwYW5kZXJzKS5tYXAoZXhwYW5kZXIgPT4ge1xuICAgICAgbGV0IHBhcmVudCA9IGV4cGFuZGVyLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJykgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZXhwYW5kZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXcEN1cnJlbnRDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShXcEN1cnJlbnRDbGFzc2VzW2ldKTtcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWl0ZW0tb3BlbicpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtLW9wZW4nKSlcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFeHBhbmRlcnMoKVxufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L21vZGFsJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW1vZGFsLWxhcmdlJylcbiAgY29uc3QgY29udGFjdE1vZGFsID0gbmV3IE1vZGFsKCcjY29udGFjdE1vZGFsJylcblxuICBpZiAoIW1vZGFsQnRuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ2UnLCBlLCBjb250YWN0TW9kYWwpXG4gICAgY29udGFjdE1vZGFsLnNob3coKVxuICB9KVxufVxuIiwiaW1wb3J0IENvbGxhcHNlIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyUHJpbWFyeScpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zZWFyY2gtZm9ybScpO1xuXG4gIGlmICghc2VhcmNoRm9ybS5sZW5ndGggfHwgIW5hdmJhclRvZ2dsZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZXJJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShuYXZiYXJUb2dnbGVyLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG5cbiAgQXJyYXkuZnJvbShzZWFyY2hGb3JtKS5tYXAoZm9ybSA9PiB7XG4gICAgbGV0IHNlYXJjaEluc3RhbmNlID0gbmV3IENvbGxhcHNlKGZvcm0sIHsgdG9nZ2xlOiBmYWxzZSB9KTtcbiAgICAvLyBIaWRlIFJXRCBtZW51IHdoZW4gY2xpY2sgc2VhcmNoLCBmb2N1cyBvbiBzZWFyY2hcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVySW5zdGFuY2UuaGlkZSgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZCcpLmZvY3VzKClcbiAgICAgIH0sIDApXG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHNlYXJjaCBvbiBib2R5IGNsaWNrXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBzZWFyY2hJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTd2lwZXIoKSB7XG4gIGNvbnN0IHN3aXBlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJylcblxuICBpZiAoIXN3aXBlcldyYXBwZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG5ldyBTd2lwZXIoc3dpcGVyV3JhcHBlciwge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAzMjA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgLy8gc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgICA1NDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgLy8gc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgICAvLyA3Njg6IHtcbiAgICAgIC8vICAgc2xpZGVzUGVyVmlldzogNC4zLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIDEyMDA6IHtcbiAgICAgIC8vICAgLy9zbGlkZXNQZXJWaWV3OiBzbGlkZXNQZXJWaWV3LFxuICAgICAgLy8gICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICB9KTtcbn1cbiIsImZ1bmN0aW9uIGNoZWNrVGFibGVXaWR0aChlbGVtcywgY2hpbGRFbGVtKSB7XHJcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgQXJyYXkuZnJvbShvdXRlckVsZW0pLm1hcChlbGVtID0+IHtcclxuICAgIGxldCBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XHJcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXdyYXAnO1xyXG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LXJpZ2h0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1yaWdodCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctbGVmdCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctbGVmdCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcclxuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tPdmVyZmxvdygpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGFibGUtd3JhcCcpKSB7XHJcbiAgICAgICAgbGV0IGVsZW1Cb2R5ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSksXHJcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgICAgIGxldCBzY3JvbGxlZCA9IChlbGVtQm9keS5vZmZzZXRXaWR0aCAtIGVsZW1QYXJlbnQub2Zmc2V0V2lkdGggLSBlbGVtLnNjcm9sbExlZnQpO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLnNjcm9sbExlZnQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhYmxlcygpIHtcclxuICAvLyBJbml0IHJ1blxyXG4gIGNvbnN0IGluaXRUYWJsZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgIGlmICghdGFibGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgaW5pdFRhYmxlcygpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrVGFibGVXaWR0aCwgaGFuZGxlVGFibGVzIH1cclxuIiwibGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrU2Nyb2xsKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vdC10b3AnKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XHJcbiAgICB9XHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsZWQgPD0gMCA/IDAgOiBzY3JvbGxlZDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBXcEN1cnJlbnRDbGFzc2VzID0gWydjdXJyZW50LXBvc3QtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LXBhZ2UtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LW1lbnUtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LW1lbnUtcGFyZW50JyxcclxuICAnY3VycmVudC1wYWdlLXBhcmVudCcsXHJcbiAgJ2N1cnJlbnRfcGFnZV9wYXJlbnQnLFxyXG4gICdjdXJyZW50LW1lbnUtaXRlbScsXHJcbiAgJ2N1cnJlbnRfcGFnZV9pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2FuY2VzdG9yJyxcclxuICAnY3VycmVudC1jYXRlZ29yeS1hbmNlc3RvcicsXHJcbl07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJoYW5kbGVGYW5jeWJveCIsImhhbmRsZU1lbnUiLCJoYW5kbGVUYWJsZXMiLCJoYW5kbGVDaGVja1Njcm9sbCIsImhhbmRsZUZvcm1zIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ29va2llQmFubmVyIiwiaGFuZGxlU3dpcGVyIiwiaGFuZGxlQ291bnRVcCIsImhhbmRsZU1vZGFsIiwibW91bnRlZEZucyIsIl9pIiwiX21vdW50ZWRGbnMiLCJsZW5ndGgiLCJkZW1vdW50Rm4iLCJjb29raWVBY2NlcHRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNvb2tpZSIsImluZGV4T2YiLCJDb3VudFVwIiwibnVtYmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibnVtYmVyIiwicGFyc2VJbnQiLCJ0ZXh0Q29udGVudCIsImVuYWJsZVNjcm9sbFNweSIsInNjcm9sbFNweU9uY2UiLCJzZXBhcmF0b3IiLCJGYW5jeWJveCIsInNpbmdsZUZhbmN5SXRlbXMiLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0IiwiZ2FsbGVyeUZhbmN5SXRlbXMiLCJncm91cEFsbCIsIk1vZGFsIiwiZm9ybXMiLCJBcnJheSIsImZyb20iLCJmb3JtIiwiZXZlbnQiLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsInJlbmRlckZvcm0iLCJhZGQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsIndpbmRvdyIsIkNhcHRjaGFDYWxsYmFjayIsInJlbmRlciIsImRhdGFzZXQiLCJzaXRla2V5IiwiY29ycmVjdENhcHRjaGEiLCJyZXNwb25zZSIsInJlbW92ZSIsInN1Ym1pdHRlZFVzZXJuYW1lIiwiZ2V0SXRlbSIsImNvbnRhY3RNb2RhbCIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIldwQ3VycmVudENsYXNzZXMiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiYnVyZ2VyMiIsIm1vYmlsZU1lbnUiLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVFeHBhbmRlcnMiLCJleHBhbmRlcnMiLCJtYXAiLCJleHBhbmRlciIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJzb21lIiwiYWkiLCJpbmNsdWRlcyIsImkiLCJ0b2dnbGUiLCJtb2RhbEJ0biIsImUiLCJjb25zb2xlIiwibG9nIiwiQ29sbGFwc2UiLCJuYXZiYXJUb2dnbGVyIiwic2VhcmNoRm9ybSIsInRvZ2dsZXJJbnN0YW5jZSIsInNlYXJjaEluc3RhbmNlIiwiZm9jdXMiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwic3dpcGVyV3JhcHBlciIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsImVsZW0iLCJlbGVtUGFyZW50IiwiY2xvc2VzdCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2hhZG93V3JhcHBlciIsIl9zaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwiZWxlbUJvZHkiLCJfZWxlbVBhcmVudCIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsImJvZHkiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=