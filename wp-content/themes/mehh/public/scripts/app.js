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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE1BQU0sSUFBSTRFLFFBQVEsSUFBSSxFQUFFLEVBQUU7TUFDekJPLElBQUksQ0FBQ3hGLFNBQVMsQ0FBQ21CLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQyxNQUFNO01BQ0xxRSxJQUFJLENBQUN4RixTQUFTLENBQUNtQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0FvRSxhQUFhLEdBQUdOLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxRQUFRO0VBQzlDLENBQUM7RUFFRHRILFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFNEgsUUFBUSxDQUFDO0FBQy9DOzs7Ozs7Ozs7Ozs7OztBQ25CTyxJQUFNL0QsZ0JBQWdCLEdBQUcsQ0FBQyx1QkFBdUIsRUFDdEQsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2QiwyQkFBMkIsQ0FDNUI7Ozs7Ozs7Ozs7O0FDVkQ7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVfYmFubmVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2NvdW50dXAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NoZWNrLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NvbnRzdHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvZWRpdG9yLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQm9vdHN0cmFwIChpbXBvcnRpbmcgQlMgc2NyaXB0cyBpbmRpdmlkdWFsbHkpXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9idXR0b24nO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L21vZGFsJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5JztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHtoYW5kbGVGYW5jeWJveH0gZnJvbSBcIi4vY29tcG9uZW50cy9mYW5jeWJveFwiO1xuaW1wb3J0IHtoYW5kbGVNZW51fSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xuaW1wb3J0IHtoYW5kbGVDaGVja1Njcm9sbH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NoZWNrLXNjcm9sbFwiO1xuaW1wb3J0IHtoYW5kbGVGb3Jtc30gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtc1wiO1xuaW1wb3J0IHtoYW5kbGVTZWFyY2h9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5pbXBvcnQge2hhbmRsZUNvb2tpZUJhbm5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jb29raWVfYmFubmVyXCI7XG5pbXBvcnQge2hhbmRsZVN3aXBlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9zd2lwZXJcIjtcbmltcG9ydCB7aGFuZGxlQ291bnRVcH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb3VudHVwXCI7XG5pbXBvcnQge2hhbmRsZU1vZGFsfSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICBoYW5kbGVGb3JtcyxcbiAgaGFuZGxlU2VhcmNoLFxuICBoYW5kbGVDb29raWVCYW5uZXIsXG4gIGhhbmRsZVN3aXBlcixcbiAgaGFuZGxlQ291bnRVcCxcbiAgaGFuZGxlTW9kYWwsXG5dXG5cbi8vIFJ1biBmbi1zXG5mb3IgKGNvbnN0IGRlbW91bnRGbiBvZiBtb3VudGVkRm5zKSB7XG4gIHR5cGVvZiBkZW1vdW50Rm4gPT09ICdmdW5jdGlvbicgJiYgZGVtb3VudEZuKClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb29raWVCYW5uZXIoKSB7XG4gIGNvbnN0IGNvb2tpZUFjY2VwdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIilcblxuICBpZiAoIWNvb2tpZUFjY2VwdEJ1dHRvbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29va2llQWNjZXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAvLyBTZXQgYSBjb29raWUgdG8gcmVtZW1iZXIgdGhhdCB0aGUgdXNlciBoYXMgYWNjZXB0ZWQgdGhlIHVzZSBvZiBjb29raWVzXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZXNfYWNjZXB0ZWQ9dHJ1ZTsgZXhwaXJlcz1UaHUsIDAxIEphbiAyMDk5IDAwOjAwOjAwIFVUQzsgcGF0aD0vXCI7XG4gIH0pO1xuICAvLyBDaGVjayBpZiB0aGUgY29va2llIGhhcyBhbHJlYWR5IGJlZW4gc2V0XG4gIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZihcImNvb2tpZXNfYWNjZXB0ZWQ9dHJ1ZVwiKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7Q291bnRVcH0gZnJvbSBcImNvdW50dXAuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvdW50VXAoKSB7XG4gIGNvbnN0IG51bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVycy1tb2R1bGUgaDEnKVxuXG4gIGlmICghbnVtYmVycy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG51bWJlcnMuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgbmV3IENvdW50VXAobnVtYmVyLCBwYXJzZUludChudW1iZXIudGV4dENvbnRlbnQpLFxuICAgICAge1xuICAgICAgICBlbmFibGVTY3JvbGxTcHk6IHRydWUsXG4gICAgICAgIHNjcm9sbFNweU9uY2U6IHRydWUsXG4gICAgICAgIHNlcGFyYXRvcjogJycsXG4gICAgICB9KVxuICB9KVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZhbmN5Ym94KCkge1xuICAvLyBTaW5nbGVcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcblxuICBpZiAoIXNpbmdsZUZhbmN5SXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzaW5nbGVGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICByaWdodDogW1wiY2xvc2VcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBHYWxsZXJ5XG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknXTtcblxuICBpZiAoIWdhbGxlcnlGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FsbGVyeUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBncm91cEFsbDogdHJ1ZSxcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1zKCkge1xuICAvLyBGZXRjaCBhbGwgdGhlIGZvcm1zIHdlIHdhbnQgdG8gYXBwbHkgY3VzdG9tIEJvb3RzdHJhcCB2YWxpZGF0aW9uIHN0eWxlcyB0b1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcblxuICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cbiAgICAgIC8vIFJlY2FwdGNoYVxuICAgICAgbGV0IHJlQ2FwdGNoYTtcbiAgICAgIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWRzLXZhbGlkYXRpb24nKSAmJiBGb3JtQ2FwdGNoYSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgaWYgKCBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHJlbmRlckZvcm0pID09PSAnJyApIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJykuY2xhc3NMaXN0LmFkZCgnY2FwdGNoYS1lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlQ2FwdGNoYSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkgfHwgIXJlQ2FwdGNoYSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JtLXN1Ym1pdHRlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm0tc3VibWl0dGVkJywgJ3RydWUnKVxuICAgICAgfVxuXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKVxuICAgIH0sIGZhbHNlKVxuICB9KVxuXG4gIC8vIFJlY2FwdGNoYSBjYWxsYmFja1xuICBsZXQgcmVuZGVyRm9ybTtcbiAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gIHdpbmRvdy5DYXB0Y2hhQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIEZvcm1DYXB0Y2hhICkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICByZW5kZXJGb3JtID0gZ3JlY2FwdGNoYS5yZW5kZXIoJ2ctcmVjYXB0Y2hhJywgeydzaXRla2V5JyA6IEZvcm1DYXB0Y2hhLmRhdGFzZXQuc2l0ZWtleSwgJ2NhbGxiYWNrJyA6IGNvcnJlY3RDYXB0Y2hhfSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBjb3JyZWN0Q2FwdGNoYSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKCByZXNwb25zZSAhPT0gJycpXG4gICAgICBGb3JtQ2FwdGNoYS5jbGFzc0xpc3QucmVtb3ZlKCdjYXB0Y2hhLWVycm9yJyk7XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qgc3VibWl0dGVkVXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9ybS1zdWJtaXR0ZWQnKTtcbiAgICAgIGNvbnN0IGNvbnRhY3RNb2RhbCA9IG5ldyBNb2RhbCgnI2NvbnRhY3RNb2RhbCcpXG5cbiAgICAgIGlmIChzdWJtaXR0ZWRVc2VybmFtZSkge1xuICAgICAgICBjb250YWN0TW9kYWwuc2hvdygpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JtLXN1Ym1pdHRlZCcpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnRhY3RNb2RhbC5oaWRlKClcbiAgICAgICAgfSwgMjQwMClcbiAgICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQge1dwQ3VycmVudENsYXNzZXN9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udHN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgLy8gTW9iaWxlIG1lbnVcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcbiAgICBjb25zdCBidXJnZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci0yJylcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51JylcblxuICAgIGlmICghYnVyZ2VyIHx8ICFidXJnZXIyIHx8ICFtb2JpbGVNZW51KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJ1cmdlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIW1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGhhbmRsZU1vYmlsZU1lbnUoKVxuXG4gIC8vIEV4cGFuZGVyc1xuICBjb25zdCBoYW5kbGVFeHBhbmRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwYW5kZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZGVyJylcblxuICAgIGlmICghZXhwYW5kZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShleHBhbmRlcnMpLm1hcChleHBhbmRlciA9PiB7XG4gICAgICBsZXQgcGFyZW50ID0gZXhwYW5kZXIucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKSAmJiBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpKSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoV3BDdXJyZW50Q2xhc3Nlcy5zb21lKGFpID0+IEFycmF5LmZyb20ocGFyZW50LmNsYXNzTGlzdCkuaW5jbHVkZXMoYWkpKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBleHBhbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdwQ3VycmVudENsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFdwQ3VycmVudENsYXNzZXNbaV0pO1xuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCduYXYtaXRlbS1vcGVuJyk7XG5cbiAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWl0ZW0tb3BlbicpKVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGhhbmRsZUV4cGFuZGVycygpXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vZGFsKCkge1xuICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbW9kYWwtbGFyZ2UnKVxuICBjb25zdCBjb250YWN0TW9kYWwgPSBuZXcgTW9kYWwoJyNjb250YWN0TW9kYWwnKVxuXG4gIGlmICghbW9kYWxCdG4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZygnZScsIGUsIGNvbnRhY3RNb2RhbClcbiAgICBjb250YWN0TW9kYWwuc2hvdygpXG4gIH0pXG59XG4iLCJpbXBvcnQgQ29sbGFwc2UgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcbiAgY29uc3QgbmF2YmFyVG9nZ2xlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJQcmltYXJ5Jyk7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXNlYXJjaC1mb3JtJyk7XG5cbiAgaWYgKCFzZWFyY2hGb3JtLmxlbmd0aCB8fCAhbmF2YmFyVG9nZ2xlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdG9nZ2xlckluc3RhbmNlID0gbmV3IENvbGxhcHNlKG5hdmJhclRvZ2dsZXIsIHsgdG9nZ2xlOiBmYWxzZSB9KTtcblxuICBBcnJheS5mcm9tKHNlYXJjaEZvcm0pLm1hcChmb3JtID0+IHtcbiAgICBsZXQgc2VhcmNoSW5zdGFuY2UgPSBuZXcgQ29sbGFwc2UoZm9ybSwgeyB0b2dnbGU6IGZhbHNlIH0pO1xuICAgIC8vIEhpZGUgUldEIG1lbnUgd2hlbiBjbGljayBzZWFyY2gsIGZvY3VzIG9uIHNlYXJjaFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZXJJbnN0YW5jZS5oaWRlKCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZpZWxkJykuZm9jdXMoKVxuICAgICAgfSwgMClcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgc2VhcmNoIG9uIGJvZHkgY2xpY2tcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHNlYXJjaEluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN3aXBlcigpIHtcbiAgY29uc3Qgc3dpcGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKVxuXG4gIGlmICghc3dpcGVyV3JhcHBlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbmV3IFN3aXBlcihzd2lwZXJXcmFwcGVyLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDMyMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDU0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIC8vIDc2ODoge1xuICAgICAgLy8gICBzbGlkZXNQZXJWaWV3OiA0LjMsXG4gICAgICAvLyB9LFxuICAgICAgLy8gMTIwMDoge1xuICAgICAgLy8gICAvL3NsaWRlc1BlclZpZXc6IHNsaWRlc1BlclZpZXcsXG4gICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcclxuICBjb25zdCBvdXRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcclxuICBBcnJheS5mcm9tKG91dGVyRWxlbSkubWFwKGVsZW0gPT4ge1xyXG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICBpZiAoIWVsZW1QYXJlbnQpIHtcclxuICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XHJcbiAgICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbSk7XHJcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xyXG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LXJpZ2h0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1sZWZ0JztcclxuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xyXG4gICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSkub2Zmc2V0V2lkdGggPiBlbGVtUGFyZW50Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja092ZXJmbG93KCk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZS13cmFwJykpIHtcclxuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcclxuICAgICAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gKGVsZW1Cb2R5Lm9mZnNldFdpZHRoIC0gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCAtIGVsZW0uc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodC1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xyXG4gIC8vIEluaXQgcnVuXHJcbiAgY29uc3QgaW5pdFRhYmxlcyA9ICgpID0+IHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcblxyXG4gICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBpbml0VGFibGVzKClcclxufVxyXG5cclxuZXhwb3J0IHsgY2hlY2tUYWJsZVdpZHRoLCBoYW5kbGVUYWJsZXMgfVxyXG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tTY3JvbGwoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPj0gNjAgJiYgc2Nyb2xsZWQgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm90LXRvcCcpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPj0gNjApIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC10b3AnKTtcclxuICAgIH1cclxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFdwQ3VycmVudENsYXNzZXMgPSBbJ2N1cnJlbnQtcG9zdC1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtcGFnZS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1hbmNlc3RvcicsXHJcbiAgJ2N1cnJlbnQtbWVudS1wYXJlbnQnLFxyXG4gICdjdXJyZW50LXBhZ2UtcGFyZW50JyxcclxuICAnY3VycmVudF9wYWdlX3BhcmVudCcsXHJcbiAgJ2N1cnJlbnQtbWVudS1pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2l0ZW0nLFxyXG4gICdjdXJyZW50X3BhZ2VfYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LWNhdGVnb3J5LWFuY2VzdG9yJyxcclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImhhbmRsZUZhbmN5Ym94IiwiaGFuZGxlTWVudSIsImhhbmRsZVRhYmxlcyIsImhhbmRsZUNoZWNrU2Nyb2xsIiwiaGFuZGxlRm9ybXMiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDb29raWVCYW5uZXIiLCJoYW5kbGVTd2lwZXIiLCJoYW5kbGVDb3VudFVwIiwiaGFuZGxlTW9kYWwiLCJtb3VudGVkRm5zIiwiX2kiLCJfbW91bnRlZEZucyIsImxlbmd0aCIsImRlbW91bnRGbiIsImNvb2tpZUFjY2VwdEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29va2llIiwiaW5kZXhPZiIsIkNvdW50VXAiLCJudW1iZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJudW1iZXIiLCJwYXJzZUludCIsInRleHRDb250ZW50IiwiZW5hYmxlU2Nyb2xsU3B5Iiwic2Nyb2xsU3B5T25jZSIsInNlcGFyYXRvciIsIkZhbmN5Ym94Iiwic2luZ2xlRmFuY3lJdGVtcyIsInZhbHVlIiwiYmluZCIsIlRvb2xiYXIiLCJsZWZ0IiwibWlkZGxlIiwicmlnaHQiLCJnYWxsZXJ5RmFuY3lJdGVtcyIsImdyb3VwQWxsIiwiTW9kYWwiLCJmb3JtcyIsIkFycmF5IiwiZnJvbSIsImZvcm0iLCJldmVudCIsInJlQ2FwdGNoYSIsIkZvcm1DYXB0Y2hhIiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwicmVuZGVyRm9ybSIsImFkZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwid2luZG93IiwiQ2FwdGNoYUNhbGxiYWNrIiwicmVuZGVyIiwiZGF0YXNldCIsInNpdGVrZXkiLCJjb3JyZWN0Q2FwdGNoYSIsInJlc3BvbnNlIiwicmVtb3ZlIiwic3VibWl0dGVkVXNlcm5hbWUiLCJnZXRJdGVtIiwiY29udGFjdE1vZGFsIiwic2hvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwiV3BDdXJyZW50Q2xhc3NlcyIsImhhbmRsZU1vYmlsZU1lbnUiLCJidXJnZXIiLCJidXJnZXIyIiwibW9iaWxlTWVudSIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUV4cGFuZGVycyIsImV4cGFuZGVycyIsIm1hcCIsImV4cGFuZGVyIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInNvbWUiLCJhaSIsImluY2x1ZGVzIiwiaSIsInRvZ2dsZSIsIm1vZGFsQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJDb2xsYXBzZSIsIm5hdmJhclRvZ2dsZXIiLCJzZWFyY2hGb3JtIiwidG9nZ2xlckluc3RhbmNlIiwic2VhcmNoSW5zdGFuY2UiLCJmb2N1cyIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJzd2lwZXJXcmFwcGVyIiwibW9kdWxlcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsImNoZWNrVGFibGVXaWR0aCIsImVsZW1zIiwiY2hpbGRFbGVtIiwib3V0ZXJFbGVtIiwiZWxlbSIsImVsZW1QYXJlbnQiLCJjbG9zZXN0Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzaGFkb3dXcmFwcGVyIiwiX3NoYWRvd1dyYXBwZXIiLCJjaGVja092ZXJmbG93Iiwib2Zmc2V0V2lkdGgiLCJlbGVtQm9keSIsIl9lbGVtUGFyZW50Iiwic2Nyb2xsZWQiLCJzY3JvbGxMZWZ0IiwiaW5pdFRhYmxlcyIsInRhYmxlIiwib25sb2FkIiwib25yZXNpemUiLCJsYXN0U2Nyb2xsVG9wIiwiYm9keSIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==