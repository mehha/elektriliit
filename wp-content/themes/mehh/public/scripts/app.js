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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3NjcmlwdHMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0M7QUFDQTtBQUNGO0FBQ0U7QUFDcEM7QUFDQTs7QUFFQTtBQUNxRDtBQUNSO0FBQ0k7QUFDVTtBQUNaO0FBQ0U7QUFDYTtBQUNiO0FBRWpELElBQU1RLFVBQVUsR0FBRyxDQUNqQlIsZ0VBQWMsRUFDZEMsd0RBQVUsRUFDVkMsNERBQVksRUFDWkMsc0VBQWlCLEVBQ2pCQywwREFBVyxFQUNYQyw0REFBWSxFQUNaQywwRUFBa0IsRUFDbEJDLDZEQUFZLENBQ2I7O0FBRUQ7QUFDQSxTQUFBRSxFQUFBLE1BQUFDLFdBQUEsR0FBd0JGLFVBQVUsRUFBQUMsRUFBQSxHQUFBQyxXQUFBLENBQUFDLE1BQUEsRUFBQUYsRUFBQSxJQUFFO0VBQS9CLElBQU1HLFNBQVMsR0FBQUYsV0FBQSxDQUFBRCxFQUFBO0VBQ2xCLE9BQU9HLFNBQVMsS0FBSyxVQUFVLElBQUlBLFNBQVMsQ0FBQyxDQUFDO0FBQ2hEOzs7Ozs7Ozs7Ozs7OztBQ2hDTyxTQUFTTixrQkFBa0JBLENBQUEsRUFBRztFQUNuQyxJQUFNTyxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFFcEUsSUFBSSxDQUFDRixrQkFBa0IsRUFBRTtJQUN2QjtFQUNGO0VBRUFBLGtCQUFrQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUNwREYsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDL0Q7SUFDQUosUUFBUSxDQUFDSyxNQUFNLEdBQUcsc0VBQXNFO0VBQzVGLENBQUMsQ0FBQztFQUNGO0VBQ0EsSUFBSUwsUUFBUSxDQUFDSyxNQUFNLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBQ3pETixRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUNuRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnlDO0FBRWxDLFNBQVNsQixjQUFjQSxDQUFBLEVBQUc7RUFDL0I7RUFDQSxJQUFNc0IsZ0JBQWdCLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBQyxpQ0FBaUMsRUFBQyxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0VBRWpPLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNYLE1BQU0sRUFBRTtJQUM1QjtFQUNGO0VBRUFXLGdCQUFnQixDQUFDQyxPQUFPLENBQUMsVUFBVUMsS0FBSyxFQUFFO0lBQ3hDSCxtREFBUSxDQUFDSSxJQUFJLENBQUNELEtBQUssRUFBRTtNQUNuQkUsT0FBTyxFQUFFO1FBQ1BSLE9BQU8sRUFBRTtVQUNQUyxJQUFJLEVBQUUsRUFBRTtVQUNSQyxNQUFNLEVBQUUsRUFBRTtVQUNWQyxLQUFLLEVBQUUsQ0FBQyxPQUFPO1FBQ2pCO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0VBRTVELElBQUksQ0FBQ0EsaUJBQWlCLENBQUNuQixNQUFNLEVBQUU7SUFDN0I7RUFDRjtFQUVBbUIsaUJBQWlCLENBQUNQLE9BQU8sQ0FBQyxVQUFVQyxLQUFLLEVBQUU7SUFDekNILG1EQUFRLENBQUNJLElBQUksQ0FBQ0QsS0FBSyxFQUFFO01BQ25CTyxRQUFRLEVBQUUsSUFBSTtNQUNkTCxPQUFPLEVBQUU7UUFDUFIsT0FBTyxFQUFFO1VBQ1BTLElBQUksRUFBRSxFQUFFO1VBQ1JDLE1BQU0sRUFBRSxFQUFFO1VBQ1ZDLEtBQUssRUFBRSxDQUFDLE9BQU87UUFDakI7TUFDRjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKOzs7Ozs7Ozs7Ozs7OztBQ3pDTyxTQUFTekIsV0FBV0EsQ0FBQSxFQUFHO0VBQzVCO0VBQ0EsSUFBTTRCLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ21CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDOztFQUU1RDtFQUNBQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUNULE9BQU8sQ0FBQyxVQUFBYSxJQUFJLEVBQUk7SUFDaENBLElBQUksQ0FBQ3BCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFBcUIsS0FBSyxFQUFJO01BRXZDO01BQ0EsSUFBSUMsU0FBUztNQUNiLElBQUlDLFdBQVcsR0FBR3pCLFFBQVEsQ0FBQzBCLGFBQWEsQ0FBQyxjQUFjLENBQUM7TUFDeEQsSUFBSUgsS0FBSyxDQUFDSSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUlKLFdBQVcsRUFBRTtRQUN0RTtRQUNBLElBQUtLLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUc7VUFDL0NSLFNBQVMsR0FBRyxLQUFLO1VBQ2pCRCxLQUFLLENBQUNJLE1BQU0sQ0FBQ0QsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDRSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDM0UsQ0FBQyxNQUFNO1VBQ0xULFNBQVMsR0FBRyxJQUFJO1FBQ2xCO01BQ0YsQ0FBQyxNQUFNO1FBQ0xBLFNBQVMsR0FBRyxJQUFJO01BQ2xCO01BRUEsSUFBSSxDQUFDRixJQUFJLENBQUNZLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQ1YsU0FBUyxFQUFFO1FBQ3ZDRCxLQUFLLENBQUNZLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCWixLQUFLLENBQUNhLGVBQWUsQ0FBQyxDQUFDO01BQ3pCO01BRUFkLElBQUksQ0FBQ00sU0FBUyxDQUFDSyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDWCxDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFJRCxVQUFVO0VBQ2QsSUFBSVAsV0FBVyxHQUFHekIsUUFBUSxDQUFDMEIsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN4RFcsTUFBTSxDQUFDQyxlQUFlLEdBQUcsWUFBVztJQUNsQyxJQUFLYixXQUFXLEVBQUc7TUFDakI7TUFDQU8sVUFBVSxHQUFHRixVQUFVLENBQUNTLE1BQU0sQ0FBQyxhQUFhLEVBQUU7UUFBQyxTQUFTLEVBQUdkLFdBQVcsQ0FBQ2UsT0FBTyxDQUFDQyxPQUFPO1FBQUUsVUFBVSxFQUFHQztNQUFjLENBQUMsQ0FBQztJQUN2SDtFQUNGLENBQUM7RUFFRCxJQUFJQSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQVlDLFFBQVEsRUFBRTtJQUN0QyxJQUFLQSxRQUFRLEtBQUssRUFBRSxFQUNsQmxCLFdBQVcsQ0FBQ0csU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztFQUNqRCxDQUFDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQzlDc0Q7QUFFL0MsU0FBU3pELFVBQVVBLENBQUEsRUFBRztFQUMzQjtFQUNBLElBQU0yRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDN0IsSUFBTUMsTUFBTSxHQUFHL0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2hELElBQU0rQyxPQUFPLEdBQUdoRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDbkQsSUFBTWdELFVBQVUsR0FBR2pELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUV6RCxJQUFJLENBQUM4QyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxJQUFJLENBQUNDLFVBQVUsRUFBRTtNQUN0QztJQUNGO0lBRUFGLE1BQU0sQ0FBQzdDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3JDLElBQUkrQyxVQUFVLENBQUNyQixTQUFTLENBQUNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMzQ2tCLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7UUFDMUNELFVBQVUsQ0FBQ3JCLFNBQVMsQ0FBQ2dCLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdkM7SUFDRixDQUFDLENBQUM7SUFFRkksT0FBTyxDQUFDOUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDdEMsSUFBSSxDQUFDK0MsVUFBVSxDQUFDckIsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDNUNrQixNQUFNLENBQUNHLFlBQVksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO1FBQzNDRCxVQUFVLENBQUNyQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDcEM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0RhLGdCQUFnQixDQUFDLENBQUM7O0VBRWxCO0VBQ0EsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7SUFDNUIsSUFBTUMsU0FBUyxHQUFHcEQsUUFBUSxDQUFDbUIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUksQ0FBQ2lDLFNBQVMsQ0FBQ3ZELE1BQU0sRUFBRTtNQUNyQjtJQUNGO0lBRUF1QixLQUFLLENBQUNDLElBQUksQ0FBQytCLFNBQVMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBQUMsUUFBUSxFQUFJO01BQ3BDLElBQUlDLE1BQU0sR0FBR0QsUUFBUSxDQUFDRSxhQUFhO01BRW5DLElBQUlELE1BQU0sQ0FBQzNCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUkwQixNQUFNLENBQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEY2QixNQUFNLENBQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLENBQUN3QixZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUM5REssTUFBTSxDQUFDN0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDd0IsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7TUFDL0Q7TUFFQSxJQUFJTCxnRUFBZ0IsQ0FBQ1ksSUFBSSxDQUFDLFVBQUFDLEVBQUU7UUFBQSxPQUFJdEMsS0FBSyxDQUFDQyxJQUFJLENBQUNrQyxNQUFNLENBQUMzQixTQUFTLENBQUMsQ0FBQytCLFFBQVEsQ0FBQ0QsRUFBRSxDQUFDO01BQUEsRUFBQyxFQUFFO1FBQzFFSCxNQUFNLENBQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLENBQUN3QixZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztNQUMvRDtNQUVBSSxRQUFRLENBQUNwRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtRQUM3QyxJQUFJMkMsZ0VBQWdCLENBQUNZLElBQUksQ0FBQyxVQUFBQyxFQUFFO1VBQUEsT0FBSXRDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDa0MsTUFBTSxDQUFDM0IsU0FBUyxDQUFDLENBQUMrQixRQUFRLENBQUNELEVBQUUsQ0FBQztRQUFBLEVBQUMsRUFBRTtVQUMxRSxLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2YsZ0VBQWdCLENBQUNoRCxNQUFNLEVBQUUrRCxDQUFDLEVBQUUsRUFBRTtZQUNoREwsTUFBTSxDQUFDM0IsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDQyxnRUFBZ0IsQ0FBQ2UsQ0FBQyxDQUFDLENBQUM7WUFDNUNMLE1BQU0sQ0FBQzdCLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQ3dCLFlBQVksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO1VBQ2hFO1FBQ0YsQ0FBQyxNQUFNO1VBQ0xLLE1BQU0sQ0FBQzNCLFNBQVMsQ0FBQ2lDLE1BQU0sQ0FBQyxlQUFlLENBQUM7VUFFeEMsSUFBSU4sTUFBTSxDQUFDM0IsU0FBUyxDQUFDQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQzVDMEIsTUFBTSxDQUFDN0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDd0IsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUU5REssTUFBTSxDQUFDN0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDd0IsWUFBWSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFDbEU7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0RDLGVBQWUsQ0FBQyxDQUFDO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVrRDtBQUMzQyxTQUFTNUQsWUFBWUEsQ0FBQSxFQUFHO0VBQzdCLElBQU13RSxhQUFhLEdBQUcvRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDOUQsSUFBTStELFVBQVUsR0FBR2hFLFFBQVEsQ0FBQ21CLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO0VBRW5FLElBQUksQ0FBQzZDLFVBQVUsQ0FBQ25FLE1BQU0sSUFBSSxDQUFDa0UsYUFBYSxFQUFFO0lBQ3hDO0VBQ0Y7RUFFQSxJQUFNRSxlQUFlLEdBQUcsSUFBSUgsbUVBQVEsQ0FBQ0MsYUFBYSxFQUFFO0lBQUVGLE1BQU0sRUFBRTtFQUFNLENBQUMsQ0FBQztFQUV0RXpDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDMkMsVUFBVSxDQUFDLENBQUNYLEdBQUcsQ0FBQyxVQUFBL0IsSUFBSSxFQUFJO0lBQ2pDLElBQUk0QyxjQUFjLEdBQUcsSUFBSUosbUVBQVEsQ0FBQ3hDLElBQUksRUFBRTtNQUFFdUMsTUFBTSxFQUFFO0lBQU0sQ0FBQyxDQUFDO0lBQzFEO0lBQ0F2QyxJQUFJLENBQUNwQixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO01BQ3BEK0QsZUFBZSxDQUFDRSxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxDQUFDLFlBQVk7UUFDckI5QyxJQUFJLENBQUNJLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQzJDLEtBQUssQ0FBQyxDQUFDO01BQzdDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7O0lBRUY7SUFDQXJFLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNvRSxDQUFDLEVBQUs7TUFDeEMsSUFBSSxDQUFDaEQsSUFBSSxDQUFDTyxRQUFRLENBQUN5QyxDQUFDLENBQUMzQyxNQUFNLENBQUMsRUFBRTtRQUM1QnVDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFDdkI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQzVCNEI7QUFDZ0I7QUFDckMsU0FBUzFFLFlBQVlBLENBQUEsRUFBRztFQUM3QixJQUFNZ0YsYUFBYSxHQUFHekUsUUFBUSxDQUFDMEIsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUV2RCxJQUFJLENBQUMrQyxhQUFhLEVBQUU7SUFDbEI7RUFDRjtFQUVBLElBQUlGLDhDQUFNLENBQUNFLGFBQWEsRUFBRTtJQUN4QkMsT0FBTyxFQUFFLENBQUNGLHNEQUFVLENBQUM7SUFDckJHLFVBQVUsRUFBRTtNQUNWQyxFQUFFLEVBQUUsb0JBQW9CO01BQ3hCQyxTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0RDLFdBQVcsRUFBRTtNQUNYLEdBQUcsRUFBRTtRQUNIQyxhQUFhLEVBQUU7UUFDZjtNQUNGLENBQUM7O01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtRQUNmO01BQ0YsQ0FBQzs7TUFDRDtNQUNBO01BQ0E7TUFDQSxJQUFJLEVBQUU7UUFDSjtRQUNBQSxhQUFhLEVBQUU7TUFDakI7SUFDRjtFQUNGLENBQUMsQ0FBQztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsU0FBU0MsZUFBZUEsQ0FBQ0MsS0FBSyxFQUFFQyxTQUFTLEVBQUU7RUFDekMsSUFBTUMsU0FBUyxHQUFHbkYsUUFBUSxDQUFDbUIsZ0JBQWdCLENBQUM4RCxLQUFLLENBQUM7RUFDbEQ3RCxLQUFLLENBQUNDLElBQUksQ0FBQzhELFNBQVMsQ0FBQyxDQUFDOUIsR0FBRyxDQUFDLFVBQUErQixJQUFJLEVBQUk7SUFDaEMsSUFBSUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDNUMsSUFBSSxDQUFDRCxVQUFVLEVBQUU7TUFDZixJQUFJRSxPQUFPLEdBQUd2RixRQUFRLENBQUN3RixhQUFhLENBQUMsS0FBSyxDQUFDO01BQzNDRCxPQUFPLENBQUNFLFNBQVMsR0FBRyxZQUFZO01BQ2hDTCxJQUFJLENBQUNNLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDSixPQUFPLEVBQUVILElBQUksQ0FBQztNQUMzQ0csT0FBTyxDQUFDSyxXQUFXLENBQUNSLElBQUksQ0FBQztNQUN6QkMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDMUM7SUFFQSxJQUFJLENBQUNGLElBQUksQ0FBQzFELGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtNQUN4QyxJQUFJbUUsYUFBYSxHQUFHN0YsUUFBUSxDQUFDd0YsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUNsREssYUFBYSxDQUFDSixTQUFTLEdBQUcsY0FBYztNQUN4Q0wsSUFBSSxDQUFDUSxXQUFXLENBQUNDLGFBQWEsQ0FBQztJQUNqQztJQUVBLElBQUksQ0FBQ1QsSUFBSSxDQUFDMUQsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ3ZDLElBQUlvRSxjQUFhLEdBQUc5RixRQUFRLENBQUN3RixhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2xETSxjQUFhLENBQUNMLFNBQVMsR0FBRyxhQUFhO01BQ3ZDTCxJQUFJLENBQUNRLFdBQVcsQ0FBQ0UsY0FBYSxDQUFDO0lBQ2pDO0lBRUEsU0FBU0MsYUFBYUEsQ0FBQSxFQUFHO01BQ3ZCLElBQUlYLElBQUksQ0FBQzFELGFBQWEsQ0FBQ3dELFNBQVMsQ0FBQyxDQUFDYyxXQUFXLEdBQUdYLFVBQVUsQ0FBQ1csV0FBVyxFQUFFO1FBQ3RFWCxVQUFVLENBQUN6RCxTQUFTLENBQUNLLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDcENvRCxVQUFVLENBQUN6RCxTQUFTLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDMUMsQ0FBQyxNQUFNO1FBQ0xvRCxVQUFVLENBQUN6RCxTQUFTLENBQUNnQixNQUFNLENBQUMsVUFBVSxDQUFDO01BQ3pDO0lBQ0Y7SUFDQW1ELGFBQWEsQ0FBQyxDQUFDO0lBRWZYLElBQUksQ0FBQ2xGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZO01BQzFDLElBQUlrRixJQUFJLENBQUM1QixhQUFhLENBQUM1QixTQUFTLENBQUNDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN2RCxJQUFJb0UsUUFBUSxHQUFHYixJQUFJLENBQUMxRCxhQUFhLENBQUN3RCxTQUFTLENBQUM7VUFDMUNnQixXQUFVLEdBQUdkLElBQUksQ0FBQ0UsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJYSxRQUFRLEdBQUlGLFFBQVEsQ0FBQ0QsV0FBVyxHQUFHRSxXQUFVLENBQUNGLFdBQVcsR0FBR1osSUFBSSxDQUFDZ0IsVUFBVztRQUNoRixJQUFJRCxRQUFRLEdBQUcsQ0FBQyxFQUFFO1VBQ2hCRCxXQUFVLENBQUN0RSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxhQUFhLENBQUM7VUFDdkNpRSxXQUFVLENBQUN0RSxTQUFTLENBQUNnQixNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLENBQUMsTUFBTSxJQUFJd0MsSUFBSSxDQUFDZ0IsVUFBVSxHQUFHLENBQUMsRUFBRTtVQUM5QkYsV0FBVSxDQUFDdEUsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLGFBQWEsQ0FBQztVQUMxQ3NELFdBQVUsQ0FBQ3RFLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUMxQyxDQUFDLE1BQU07VUFDTGlFLFdBQVUsQ0FBQ3RFLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLGFBQWEsQ0FBQztVQUN2Q2lFLFdBQVUsQ0FBQ3RFLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUMxQztNQUNGO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTN0MsWUFBWUEsQ0FBQSxFQUFHO0VBQ3RCO0VBQ0EsSUFBTWlILFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDdkIsSUFBSUMsS0FBSyxHQUFHdEcsUUFBUSxDQUFDMEIsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUUzQyxJQUFJLENBQUM0RSxLQUFLLEVBQUU7TUFDVjtJQUNGO0lBRUFqRSxNQUFNLENBQUNrRSxNQUFNLEdBQUcsWUFBVztNQUN6QkQsS0FBSyxJQUFJdEIsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVEM0MsTUFBTSxDQUFDbUUsUUFBUSxHQUFHLFlBQVk7TUFDNUJGLEtBQUssSUFBSXRCLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzVDLENBQUM7RUFDSCxDQUFDO0VBQ0RxQixVQUFVLENBQUMsQ0FBQztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUEsSUFBSUksYUFBYSxHQUFHLENBQUM7QUFFZCxTQUFTcEgsaUJBQWlCQSxDQUFBLEVBQUc7RUFDbEMsSUFBTXFILElBQUksR0FBRzFHLFFBQVEsQ0FBQzBHLElBQUk7RUFFMUIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztJQUNyQixJQUFNUixRQUFRLEdBQUc5RCxNQUFNLENBQUN1RSxXQUFXLElBQUk1RyxRQUFRLENBQUM2RyxnQkFBZ0IsQ0FBQ0MsU0FBUztJQUMxRSxJQUFJWCxRQUFRLElBQUksRUFBRSxJQUFJQSxRQUFRLEdBQUdNLGFBQWEsRUFBRTtNQUM5Q0MsSUFBSSxDQUFDOUUsU0FBUyxDQUFDSyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzdCeUUsSUFBSSxDQUFDOUUsU0FBUyxDQUFDSyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3JDLENBQUMsTUFBTSxJQUFJa0UsUUFBUSxJQUFJLEVBQUUsRUFBRTtNQUN6Qk8sSUFBSSxDQUFDOUUsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDLE1BQU07TUFDTDhELElBQUksQ0FBQzlFLFNBQVMsQ0FBQ2dCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbEM7SUFDQTZELGFBQWEsR0FBR04sUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdBLFFBQVE7RUFDOUMsQ0FBQztFQUVEbkcsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUV5RyxRQUFRLENBQUM7QUFDL0M7Ozs7Ozs7Ozs7Ozs7O0FDbkJPLElBQU05RCxnQkFBZ0IsR0FBRyxDQUFDLHVCQUF1QixFQUN0RCx1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3ZCLDJCQUEyQixDQUM1Qjs7Ozs7Ozs7Ozs7QUNWRDs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Nvb2tpZV9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NoZWNrLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NvbnRzdHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvZWRpdG9yLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQm9vdHN0cmFwIChpbXBvcnRpbmcgQlMgc2NyaXB0cyBpbmRpdmlkdWFsbHkpXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9idXR0b24nO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Njcm9sbHNweSc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5cbi8vIEltcG9ydHNcbmltcG9ydCB7aGFuZGxlRmFuY3lib3h9IGZyb20gXCIuL2NvbXBvbmVudHMvZmFuY3lib3hcIjtcbmltcG9ydCB7aGFuZGxlTWVudX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQge2hhbmRsZVRhYmxlc30gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZXNcIjtcbmltcG9ydCB7aGFuZGxlQ2hlY2tTY3JvbGx9IGZyb20gXCIuL3V0aWxpdGllcy9jaGVjay1zY3JvbGxcIjtcbmltcG9ydCB7aGFuZGxlRm9ybXN9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7aGFuZGxlU2VhcmNofSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHtoYW5kbGVDb29raWVCYW5uZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvY29va2llX2Jhbm5lclwiO1xuaW1wb3J0IHtoYW5kbGVTd2lwZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvc3dpcGVyXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICBoYW5kbGVGb3JtcyxcbiAgaGFuZGxlU2VhcmNoLFxuICBoYW5kbGVDb29raWVCYW5uZXIsXG4gIGhhbmRsZVN3aXBlcixcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvb2tpZUJhbm5lcigpIHtcbiAgY29uc3QgY29va2llQWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKVxuXG4gIGlmICghY29va2llQWNjZXB0QnV0dG9uKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb29raWVBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGF0IHRoZSB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgdXNlIG9mIGNvb2tpZXNcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llc19hY2NlcHRlZD10cnVlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIwOTkgMDA6MDA6MDAgVVRDOyBwYXRoPS9cIjtcbiAgfSk7XG4gIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiY29va2llc19hY2NlcHRlZD10cnVlXCIpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZhbmN5Ym94KCkge1xuICAvLyBTaW5nbGVcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcblxuICBpZiAoIXNpbmdsZUZhbmN5SXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzaW5nbGVGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICByaWdodDogW1wiY2xvc2VcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBHYWxsZXJ5XG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknXTtcblxuICBpZiAoIWdhbGxlcnlGYW5jeUl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FsbGVyeUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBncm91cEFsbDogdHJ1ZSxcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgcmlnaHQ6IFtcImNsb3NlXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybXMoKSB7XG4gIC8vIEZldGNoIGFsbCB0aGUgZm9ybXMgd2Ugd2FudCB0byBhcHBseSBjdXN0b20gQm9vdHN0cmFwIHZhbGlkYXRpb24gc3R5bGVzIHRvXG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5lZWRzLXZhbGlkYXRpb24nKVxuXG4gIC8vIExvb3Agb3ZlciB0aGVtIGFuZCBwcmV2ZW50IHN1Ym1pc3Npb25cbiAgQXJyYXkuZnJvbShmb3JtcykuZm9yRWFjaChmb3JtID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcblxuICAgICAgLy8gUmVjYXB0Y2hhXG4gICAgICBsZXQgcmVDYXB0Y2hhO1xuICAgICAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmVlZHMtdmFsaWRhdGlvbicpICYmIEZvcm1DYXB0Y2hhKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBpZiAoIGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UocmVuZGVyRm9ybSkgPT09ICcnICkge1xuICAgICAgICAgIHJlQ2FwdGNoYSA9IGZhbHNlO1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKS5jbGFzc0xpc3QuYWRkKCdjYXB0Y2hhLWVycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVDYXB0Y2hhID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSB8fCAhcmVDYXB0Y2hhKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJylcbiAgICB9LCBmYWxzZSlcbiAgfSlcblxuICAvLyBSZWNhcHRjaGEgY2FsbGJhY2tcbiAgbGV0IHJlbmRlckZvcm07XG4gIGxldCBGb3JtQ2FwdGNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpO1xuICB3aW5kb3cuQ2FwdGNoYUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCBGb3JtQ2FwdGNoYSApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgcmVuZGVyRm9ybSA9IGdyZWNhcHRjaGEucmVuZGVyKCdnLXJlY2FwdGNoYScsIHsnc2l0ZWtleScgOiBGb3JtQ2FwdGNoYS5kYXRhc2V0LnNpdGVrZXksICdjYWxsYmFjaycgOiBjb3JyZWN0Q2FwdGNoYX0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgY29ycmVjdENhcHRjaGEgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICggcmVzcG9uc2UgIT09ICcnKVxuICAgICAgRm9ybUNhcHRjaGEuY2xhc3NMaXN0LnJlbW92ZSgnY2FwdGNoYS1lcnJvcicpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtXcEN1cnJlbnRDbGFzc2VzfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRzdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XG4gIC8vIE1vYmlsZSBtZW51XG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXG4gICAgY29uc3QgYnVyZ2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItMicpXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpXG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhYnVyZ2VyMiB8fCAhbW9iaWxlTWVudSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidXJnZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBoYW5kbGVNb2JpbGVNZW51KClcblxuICAvLyBFeHBhbmRlcnNcbiAgY29uc3QgaGFuZGxlRXhwYW5kZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cGFuZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmRlcicpXG5cbiAgICBpZiAoIWV4cGFuZGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEFycmF5LmZyb20oZXhwYW5kZXJzKS5tYXAoZXhwYW5kZXIgPT4ge1xuICAgICAgbGV0IHBhcmVudCA9IGV4cGFuZGVyLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJykgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFdwQ3VycmVudENsYXNzZXMuc29tZShhaSA9PiBBcnJheS5mcm9tKHBhcmVudC5jbGFzc0xpc3QpLmluY2x1ZGVzKGFpKSkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZXhwYW5kZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChXcEN1cnJlbnRDbGFzc2VzLnNvbWUoYWkgPT4gQXJyYXkuZnJvbShwYXJlbnQuY2xhc3NMaXN0KS5pbmNsdWRlcyhhaSkpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXcEN1cnJlbnRDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShXcEN1cnJlbnRDbGFzc2VzW2ldKTtcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWl0ZW0tb3BlbicpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtLW9wZW4nKSlcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFeHBhbmRlcnMoKVxufVxuIiwiaW1wb3J0IENvbGxhcHNlIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyUHJpbWFyeScpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zZWFyY2gtZm9ybScpO1xuXG4gIGlmICghc2VhcmNoRm9ybS5sZW5ndGggfHwgIW5hdmJhclRvZ2dsZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZXJJbnN0YW5jZSA9IG5ldyBDb2xsYXBzZShuYXZiYXJUb2dnbGVyLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG5cbiAgQXJyYXkuZnJvbShzZWFyY2hGb3JtKS5tYXAoZm9ybSA9PiB7XG4gICAgbGV0IHNlYXJjaEluc3RhbmNlID0gbmV3IENvbGxhcHNlKGZvcm0sIHsgdG9nZ2xlOiBmYWxzZSB9KTtcbiAgICAvLyBIaWRlIFJXRCBtZW51IHdoZW4gY2xpY2sgc2VhcmNoLCBmb2N1cyBvbiBzZWFyY2hcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVySW5zdGFuY2UuaGlkZSgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZCcpLmZvY3VzKClcbiAgICAgIH0sIDApXG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHNlYXJjaCBvbiBib2R5IGNsaWNrXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBzZWFyY2hJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTd2lwZXIoKSB7XG4gIGNvbnN0IHN3aXBlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJylcblxuICBpZiAoIXN3aXBlcldyYXBwZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG5ldyBTd2lwZXIoc3dpcGVyV3JhcHBlciwge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAzMjA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDU0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjMsXG4gICAgICAgIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgLy8gNzY4OiB7XG4gICAgICAvLyAgIHNsaWRlc1BlclZpZXc6IDQuMyxcbiAgICAgIC8vIH0sXG4gICAgICAxMjAwOiB7XG4gICAgICAgIC8vc2xpZGVzUGVyVmlldzogc2xpZGVzUGVyVmlldyxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNC4zLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cbiIsImZ1bmN0aW9uIGNoZWNrVGFibGVXaWR0aChlbGVtcywgY2hpbGRFbGVtKSB7XHJcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgQXJyYXkuZnJvbShvdXRlckVsZW0pLm1hcChlbGVtID0+IHtcclxuICAgIGxldCBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XHJcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXdyYXAnO1xyXG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LXJpZ2h0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1yaWdodCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctbGVmdCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctbGVmdCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcclxuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tPdmVyZmxvdygpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGFibGUtd3JhcCcpKSB7XHJcbiAgICAgICAgbGV0IGVsZW1Cb2R5ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSksXHJcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgICAgIGxldCBzY3JvbGxlZCA9IChlbGVtQm9keS5vZmZzZXRXaWR0aCAtIGVsZW1QYXJlbnQub2Zmc2V0V2lkdGggLSBlbGVtLnNjcm9sbExlZnQpO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLnNjcm9sbExlZnQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhYmxlcygpIHtcclxuICAvLyBJbml0IHJ1blxyXG4gIGNvbnN0IGluaXRUYWJsZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgIGlmICghdGFibGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgaW5pdFRhYmxlcygpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrVGFibGVXaWR0aCwgaGFuZGxlVGFibGVzIH1cclxuIiwibGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrU2Nyb2xsKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vdC10b3AnKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XHJcbiAgICB9XHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsZWQgPD0gMCA/IDAgOiBzY3JvbGxlZDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBXcEN1cnJlbnRDbGFzc2VzID0gWydjdXJyZW50LXBvc3QtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LXBhZ2UtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LW1lbnUtYW5jZXN0b3InLFxyXG4gICdjdXJyZW50LW1lbnUtcGFyZW50JyxcclxuICAnY3VycmVudC1wYWdlLXBhcmVudCcsXHJcbiAgJ2N1cnJlbnRfcGFnZV9wYXJlbnQnLFxyXG4gICdjdXJyZW50LW1lbnUtaXRlbScsXHJcbiAgJ2N1cnJlbnRfcGFnZV9pdGVtJyxcclxuICAnY3VycmVudF9wYWdlX2FuY2VzdG9yJyxcclxuICAnY3VycmVudC1jYXRlZ29yeS1hbmNlc3RvcicsXHJcbl07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJoYW5kbGVGYW5jeWJveCIsImhhbmRsZU1lbnUiLCJoYW5kbGVUYWJsZXMiLCJoYW5kbGVDaGVja1Njcm9sbCIsImhhbmRsZUZvcm1zIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ29va2llQmFubmVyIiwiaGFuZGxlU3dpcGVyIiwibW91bnRlZEZucyIsIl9pIiwiX21vdW50ZWRGbnMiLCJsZW5ndGgiLCJkZW1vdW50Rm4iLCJjb29raWVBY2NlcHRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNvb2tpZSIsImluZGV4T2YiLCJGYW5jeWJveCIsInNpbmdsZUZhbmN5SXRlbXMiLCJmb3JFYWNoIiwidmFsdWUiLCJiaW5kIiwiVG9vbGJhciIsImxlZnQiLCJtaWRkbGUiLCJyaWdodCIsImdhbGxlcnlGYW5jeUl0ZW1zIiwiZ3JvdXBBbGwiLCJmb3JtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJmb3JtIiwiZXZlbnQiLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsInJlbmRlckZvcm0iLCJhZGQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJDYXB0Y2hhQ2FsbGJhY2siLCJyZW5kZXIiLCJkYXRhc2V0Iiwic2l0ZWtleSIsImNvcnJlY3RDYXB0Y2hhIiwicmVzcG9uc2UiLCJyZW1vdmUiLCJXcEN1cnJlbnRDbGFzc2VzIiwiaGFuZGxlTW9iaWxlTWVudSIsImJ1cmdlciIsImJ1cmdlcjIiLCJtb2JpbGVNZW51Iiwic2V0QXR0cmlidXRlIiwiaGFuZGxlRXhwYW5kZXJzIiwiZXhwYW5kZXJzIiwibWFwIiwiZXhwYW5kZXIiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic29tZSIsImFpIiwiaW5jbHVkZXMiLCJpIiwidG9nZ2xlIiwiQ29sbGFwc2UiLCJuYXZiYXJUb2dnbGVyIiwic2VhcmNoRm9ybSIsInRvZ2dsZXJJbnN0YW5jZSIsInNlYXJjaEluc3RhbmNlIiwiaGlkZSIsInNldFRpbWVvdXQiLCJmb2N1cyIsImUiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwic3dpcGVyV3JhcHBlciIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsImVsZW0iLCJlbGVtUGFyZW50IiwiY2xvc2VzdCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2hhZG93V3JhcHBlciIsIl9zaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwiZWxlbUJvZHkiLCJfZWxlbVBhcmVudCIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsImJvZHkiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=