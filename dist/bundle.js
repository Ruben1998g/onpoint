/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/index.css
var css = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/toggled.js
//Модуль Toggled
var toggled = function toggled(trigger, modalWindow, modalClose) {
  var open = document.getElementById(trigger);
  var close = document.querySelector(modalClose);
  var modal = document.querySelector(modalWindow); //Cлушает Esc

  var onBeginListenEsc = function onBeginListenEsc(e) {
    var Ecode = e.keyCode;

    if (Ecode == 27) {
      modal.classList.remove('show');
      window.removeEventListener('keyup', onBeginListenEsc);
    }
  }; //Слушает Trigger


  open.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('show');
    window.addEventListener('keyup', onBeginListenEsc);
  }); //Слушает Close

  close.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('show');
    window.removeEventListener('keyup', onBeginListenEsc);
  }); //Слушает Overlay

  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
      modal.classList.remove('show');
      window.removeEventListener('keyup', onBeginListenEsc);
    }
  });
};

/* harmony default export */ var modules_toggled = (toggled);
// CONCATENATED MODULE: ./src/modules/mslider.js
var mslider = function mslider(sliders, prevTrigger, nextTrigger, poginationBlock) {
  var slideIndex = 0;
  var mass = [];
  var items = document.querySelectorAll(sliders);
  var prev = document.querySelector(prevTrigger);
  var next = document.querySelector(nextTrigger);
  var poginationList = document.querySelector(poginationBlock);
  var spaceForeReplacePagination = next.parentElement;
  poginationList.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-value')) {
      var numberButtonClick = e.target.dataset.value;
      slideIndex = numberButtonClick;
      showSlides(slideIndex);
    }
  });

  function paginations() {
    mass.forEach(function (item) {
      item.remove();
    });

    for (var i = 0; i < items.length; i++) {
      var pag = document.createElement('li');
      mass.push(pag);
      pag.setAttribute('data-value', i);

      if (slideIndex == i) {
        pag.classList.add('active');
      }

      spaceForeReplacePagination.insertAdjacentElement('beforeBegin', pag);
    }
  }

  function showSlides(n) {
    items.forEach(function (item) {
      item.style.display = "none";
    });
    items[n].style.display = 'block';
    paginations();
  }

  showSlides(slideIndex);
  prev.addEventListener('click', function () {
    if (slideIndex - 1 < 0) {
      slideIndex = items.length - 1;
      showSlides(slideIndex);
    } else {
      slideIndex = slideIndex - 1;
      showSlides(slideIndex);
    }
  });
  next.addEventListener('click', function () {
    if (slideIndex + 1 > items.length - 1) {
      slideIndex = 0;
      showSlides(slideIndex);
    } else {
      slideIndex = slideIndex + 1;
      showSlides(slideIndex);
    }
  });
};

/* harmony default export */ var modules_mslider = (mslider);
// CONCATENATED MODULE: ./src/modules/slider.js
var slider = function slider() {
  var slider = document.querySelector('.slider'),
      sliderTrack = slider.querySelector('.slider__list'),
      slides = slider.querySelectorAll('.slider__item'),
      //arrows = slider.querySelector('.slider-arrows'),
  // prev = arrows.children[0],
  // next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
      slideIndex = 0,
      posInit = 0,
      posX1 = 0,
      posX2 = 0,
      posFinal = 0,
      posThreshold = slideWidth * 0.35,
      trfRegExp = /[-0-9.]+(?=px)/;
  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

  var slide = function slide() {
    sliderTrack.style.transition = 'transform .5s';
    sliderTrack.style.transform = "translate3d(-".concat(slideIndex * slideWidth, "px, 0px, 0px)"); //  prev.classList.toggle('disabled', slideIndex === 0);
    //  next.classList.toggle('disabled', slideIndex === --slides.length);
  };

  var getEvent = function getEvent() {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
  };

  var swipeStart = function swipeStart() {
    var evt = getEvent();
    posInit = posX1 = evt.clientX;
    sliderTrack.style.transition = '';
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
  };

  var swipeAction = function swipeAction() {
    var evt = getEvent(),
        style = sliderTrack.style.transform,
        transform = +style.match(trfRegExp)[0];
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    sliderTrack.style.transform = "translate3d(".concat(transform - posX2, "px, 0px, 0px)");
  };

  var swipeEnd = function swipeEnd() {
    posFinal = posInit - posX1;
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    if (Math.abs(posFinal) > posThreshold) {
      if (posInit < posX1) {
        slideIndex--;
      } else if (posInit > posX1) {
        slideIndex++;
      }
    }

    if (posInit !== posX1) {
      slide();
    }
  };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);
  document.querySelector('.slide__onhome').addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('11');
  });
  document.querySelector('.first-slide__button').addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('22');
  });
};

/* harmony default export */ var modules_slider = (slider);
// CONCATENATED MODULE: ./src/index.js




document.addEventListener('DOMContentLoaded', function () {
  modules_toggled('third-slide__more', '.modal', '.modal__close');
  modules_mslider('.mslider__item', '.mslider__navigation-prev', '.mslider__navigation-next', '.mslider__navigation');
  modules_slider();
});

/***/ })
/******/ ]);