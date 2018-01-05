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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(15);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angularUiBootstrap = __webpack_require__(4);

var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

var _uibhelper = __webpack_require__(6);

var _uibhelper2 = _interopRequireDefault(_uibhelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * oguimobile.module.js
 *
 * uiOGMobile rewritten for Bellini/Blueline Architecture
 * ES6 module version
 *
 * January 2018
 *
 *
 **/

(function (window, angular) {

  /**
   * Definition of the ourglassAPI module
   */
  var ogUiMobileModule = angular.module('ogUiMobile', [_angularUiBootstrap2.default]);

  ogUiMobileModule.service('uibHelper', _uibhelper2.default);
})(window, window.angular);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);

module.exports = 'ui.bootstrap';


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.6 - 2017-10-14
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
    return {
      link: function(scope, element, attrs) {
        var expandingExpr = $parse(attrs.expanding),
          expandedExpr = $parse(attrs.expanded),
          collapsingExpr = $parse(attrs.collapsing),
          collapsedExpr = $parse(attrs.collapsed),
          horizontal = false,
          css = {},
          cssTo = {};

        init();

        function init() {
          horizontal = !!('horizontal' in attrs);
          if (horizontal) {
            css = {
              width: ''
            };
            cssTo = {width: '0'};
          } else {
            css = {
              height: ''
            };
            cssTo = {height: '0'};
          }
          if (!scope.$eval(attrs.uibCollapse)) {
            element.addClass('in')
              .addClass('collapse')
              .attr('aria-expanded', true)
              .attr('aria-hidden', false)
              .css(css);
          }
        }

        function getScrollFromElement(element) {
          if (horizontal) {
            return {width: element.scrollWidth + 'px'};
          }
          return {height: element.scrollHeight + 'px'};
        }

        function expand() {
          if (element.hasClass('collapse') && element.hasClass('in')) {
            return;
          }

          $q.resolve(expandingExpr(scope))
            .then(function() {
              element.removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', true)
                .attr('aria-hidden', false);

              if ($animateCss) {
                $animateCss(element, {
                  addClass: 'in',
                  easing: 'ease',
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).start()['finally'](expandDone);
              } else {
                $animate.addClass(element, 'in', {
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).then(expandDone);
              }
            }, angular.noop);
        }

        function expandDone() {
          element.removeClass('collapsing')
            .addClass('collapse')
            .css(css);
          expandedExpr(scope);
        }

        function collapse() {
          if (!element.hasClass('collapse') && !element.hasClass('in')) {
            return collapseDone();
          }

          $q.resolve(collapsingExpr(scope))
            .then(function() {
              element
              // IMPORTANT: The width must be set before adding "collapsing" class.
              // Otherwise, the browser attempts to animate from width 0 (in
              // collapsing class) to the given width here.
                .css(getScrollFromElement(element[0]))
                // initially all panel collapse have the collapse class, this removal
                // prevents the animation from jumping to collapsed state
                .removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', false)
                .attr('aria-hidden', true);

              if ($animateCss) {
                $animateCss(element, {
                  removeClass: 'in',
                  to: cssTo
                }).start()['finally'](collapseDone);
              } else {
                $animate.removeClass(element, 'in', {
                  to: cssTo
                }).then(collapseDone);
              }
            }, angular.noop);
        }

        function collapseDone() {
          element.css(cssTo); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing')
            .addClass('collapse');
          collapsedExpr(scope);
        }

        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.tabindex', [])

.directive('uibTabindexToggle', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      attrs.$observe('disabled', function(disabled) {
        attrs.$set('tabindex', disabled ? -1 : null);
      });
    }
  };
});

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse', 'ui.bootstrap.tabindex'])

.constant('uibAccordionConfig', {
  closeOthers: true
})

.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ?
      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if (closeOthers) {
      angular.forEach(this.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function(event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  };
}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('uibAccordion', function() {
  return {
    controller: 'UibAccordionController',
    controllerAs: 'accordion',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
    }
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('uibAccordionGroup', function() {
  return {
    require: '^uibAccordion',         // We need this directive to be inside an accordion
    transclude: true,              // It transcludes the contents of the directive into the template
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
    },
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      panelClass: '@?',           // Ditto with panelClass
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      element.addClass('panel');
      accordionCtrl.addGroup(scope);

      scope.openClass = attrs.openClass || 'panel-open';
      scope.panelClass = attrs.panelClass || 'panel-default';
      scope.$watch('isOpen', function(value) {
        element.toggleClass(scope.openClass, !!value);
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function($event) {
        if (!scope.isDisabled) {
          if (!$event || $event.which === 32) {
            scope.isOpen = !scope.isOpen;
          }
        }
      };

      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      scope.headingId = id + '-tab';
      scope.panelId = id + '-panel';
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
.directive('uibAccordionHeading', function() {
  return {
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
.directive('uibAccordionTransclude', function() {
  return {
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, controller) {
      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
        if (heading) {
          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
          elem.html('');
          elem.append(heading);
        }
      });
    }
  };

  function getHeaderSelectors() {
      return 'uib-accordion-header,' +
          'data-uib-accordion-header,' +
          'x-uib-accordion-header,' +
          'uib\\:accordion-header,' +
          '[uib-accordion-header],' +
          '[data-uib-accordion-header],' +
          '[x-uib-accordion-header]';
  }
});

angular.module('ui.bootstrap.alert', [])

.controller('UibAlertController', ['$scope', '$element', '$attrs', '$interpolate', '$timeout', function($scope, $element, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;
  $element.addClass('alert');
  $attrs.$set('role', 'alert');
  if ($scope.closeable) {
    $element.addClass('alert-dismissible');
  }

  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function() {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}])

.directive('uibAlert', function() {
  return {
    controller: 'UibAlertController',
    controllerAs: 'alert',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/alert/alert.html';
    },
    transclude: true,
    scope: {
      close: '&'
    }
  };
});

angular.module('ui.bootstrap.buttons', [])

.constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('uibBtnRadio', ['$parse', function($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({display: 'none'});

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function(uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}])

.directive('uibBtnCheckbox', function() {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      element.find('input').css({display: 'none'});

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', [])

.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    SLIDE_DIRECTION = 'uib-slideDirection',
    currentIndex = $scope.active,
    currentInterval, isPlaying;

  var destroyed = false;
  $element.addClass('carousel');

  self.addSlide = function(slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function(a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function(slide) {
    var index = findSlideIndex(slide);

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex &&
      !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function(slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function(slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function() {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function() {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $element.on('mouseenter', $scope.pause);
  $element.on('mouseleave', $scope.play);

  $scope.$on('$destroy', function() {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function(noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function(index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, {direction: direction});
    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
    if ($animate.enabled($element) && !$scope.$currentTransition &&
      slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function(element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}])

.directive('uibCarousel', function() {
  return {
    transclude: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
})

.directive('uibSlide', ['$animate', function($animate) {
  return {
    require: '^uibCarousel',
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      element.addClass('item');
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        $animate[active ? 'addClass' : 'removeClass'](element, 'active');
      });
    }
  };
}])

.animation('.item', ['$animateCss',
function($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element,
          directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.dateparser', [])

.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', 'filterFilter', function($log, $locale, dateFilter, orderByFilter, filterFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  var localeId;
  var formatCodeToRegex;

  this.init = function() {
    localeId = $locale.id;

    this.parsers = {};
    this.formatters = {};

    formatCodeToRegex = [
      {
        key: 'yyyy',
        regex: '\\d{4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yyyy');
        }
      },
      {
        key: 'yy',
        regex: '\\d{2}',
        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yy');
        }
      },
      {
        key: 'y',
        regex: '\\d{1,4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'y');
        }
      },
      {
        key: 'M!',
        regex: '0?[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) {
          var value = date.getMonth();
          if (/^[0-9]$/.test(value)) {
            return dateFilter(date, 'MM');
          }

          return dateFilter(date, 'M');
        }
      },
      {
        key: 'MMMM',
        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMMM'); }
      },
      {
        key: 'MMM',
        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMM'); }
      },
      {
        key: 'MM',
        regex: '0[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'MM'); }
      },
      {
        key: 'M',
        regex: '[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'M'); }
      },
      {
        key: 'd!',
        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) {
          var value = date.getDate();
          if (/^[1-9]$/.test(value)) {
            return dateFilter(date, 'dd');
          }

          return dateFilter(date, 'd');
        }
      },
      {
        key: 'dd',
        regex: '[0-2][0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'dd'); }
      },
      {
        key: 'd',
        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'd'); }
      },
      {
        key: 'EEEE',
        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEEE'); }
      },
      {
        key: 'EEE',
        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEE'); }
      },
      {
        key: 'HH',
        regex: '(?:0|1)[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'HH'); }
      },
      {
        key: 'hh',
        regex: '0[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'hh'); }
      },
      {
        key: 'H',
        regex: '1?[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'H'); }
      },
      {
        key: 'h',
        regex: '[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'h'); }
      },
      {
        key: 'mm',
        regex: '[0-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'mm'); }
      },
      {
        key: 'm',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'm'); }
      },
      {
        key: 'sss',
        regex: '[0-9][0-9][0-9]',
        apply: function(value) { this.milliseconds = +value; },
        formatter: function(date) { return dateFilter(date, 'sss'); }
      },
      {
        key: 'ss',
        regex: '[0-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 'ss'); }
      },
      {
        key: 's',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 's'); }
      },
      {
        key: 'a',
        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
        apply: function(value) {
          if (this.hours === 12) {
            this.hours = 0;
          }

          if (value === 'PM') {
            this.hours += 12;
          }
        },
        formatter: function(date) { return dateFilter(date, 'a'); }
      },
      {
        key: 'Z',
        regex: '[+-]\\d{4}',
        apply: function(value) {
          var matches = value.match(/([+-])(\d{2})(\d{2})/),
            sign = matches[1],
            hours = matches[2],
            minutes = matches[3];
          this.hours += toInt(sign + hours);
          this.minutes += toInt(sign + minutes);
        },
        formatter: function(date) {
          return dateFilter(date, 'Z');
        }
      },
      {
        key: 'ww',
        regex: '[0-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'ww'); }
      },
      {
        key: 'w',
        regex: '[0-9]|[1-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'w'); }
      },
      {
        key: 'GGGG',
        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
        formatter: function(date) { return dateFilter(date, 'GGGG'); }
      },
      {
        key: 'GGG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GGG'); }
      },
      {
        key: 'GG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GG'); }
      },
      {
        key: 'G',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'G'); }
      }
    ];

    if (angular.version.major >= 1 && angular.version.minor > 4) {
      formatCodeToRegex.push({
        key: 'LLLL',
        regex: $locale.DATETIME_FORMATS.STANDALONEMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.STANDALONEMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'LLLL'); }
      });
    }
  };

  this.init();

  function getFormatCodeToRegex(key) {
    return filterFilter(formatCodeToRegex, {key: key}, true)[0];
  }

  this.getParser = function (key) {
    var f = getFormatCodeToRegex(key);
    return f && f.apply || null;
  };

  this.overrideParser = function (key, parser) {
    var f = getFormatCodeToRegex(key);
    if (f && angular.isFunction(parser)) {
      this.parsers = {};
      f.apply = parser;
    }
  }.bind(this);

  function createParser(format) {
    var map = [], regex = format.split('');

    // check for literal values
    var quoteIndex = format.indexOf('\'');
    if (quoteIndex > -1) {
      var inLiteral = false;
      format = format.split('');
      for (var i = quoteIndex; i < format.length; i++) {
        if (inLiteral) {
          if (format[i] === '\'') {
            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
              format[i+1] = '$';
              regex[i+1] = '';
            } else { // end of literal
              regex[i] = '';
              inLiteral = false;
            }
          }
          format[i] = '$';
        } else {
          if (format[i] === '\'') { // start of literal
            format[i] = '$';
            regex[i] = '';
            inLiteral = true;
          }
        }
      }

      format = format.join('');
    }

    angular.forEach(formatCodeToRegex, function(data) {
      var index = format.indexOf(data.key);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({
          index: index,
          key: data.key,
          apply: data.apply,
          matcher: data.regex
        });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  function createFormatter(format) {
    var formatters = [];
    var i = 0;
    var formatter, literalIdx;
    while (i < format.length) {
      if (angular.isNumber(literalIdx)) {
        if (format.charAt(i) === '\'') {
          if (i + 1 >= format.length || format.charAt(i + 1) !== '\'') {
            formatters.push(constructLiteralFormatter(format, literalIdx, i));
            literalIdx = null;
          }
        } else if (i === format.length) {
          while (literalIdx < format.length) {
            formatter = constructFormatterFromIdx(format, literalIdx);
            formatters.push(formatter);
            literalIdx = formatter.endIdx;
          }
        }

        i++;
        continue;
      }

      if (format.charAt(i) === '\'') {
        literalIdx = i;
        i++;
        continue;
      }

      formatter = constructFormatterFromIdx(format, i);

      formatters.push(formatter.parser);
      i = formatter.endIdx;
    }

    return formatters;
  }

  function constructLiteralFormatter(format, literalIdx, endIdx) {
    return function() {
      return format.substr(literalIdx + 1, endIdx - literalIdx - 1);
    };
  }

  function constructFormatterFromIdx(format, i) {
    var currentPosStr = format.substr(i);
    for (var j = 0; j < formatCodeToRegex.length; j++) {
      if (new RegExp('^' + formatCodeToRegex[j].key).test(currentPosStr)) {
        var data = formatCodeToRegex[j];
        return {
          endIdx: i + data.key.length,
          parser: data.formatter
        };
      }
    }

    return {
      endIdx: i + 1,
      parser: function() {
        return currentPosStr.charAt(0);
      }
    };
  }

  this.filter = function(date, format) {
    if (!angular.isDate(date) || isNaN(date) || !format) {
      return '';
    }

    format = $locale.DATETIME_FORMATS[format] || format;

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.formatters[format]) {
      this.formatters[format] = createFormatter(format);
    }

    var formatters = this.formatters[format];

    return formatters.reduce(function(str, formatter) {
      return str + formatter(date);
    }, '');
  };

  this.parse = function(input, format, baseDate) {
    if (!angular.isString(input) || !format) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.parsers[format]) {
      this.parsers[format] = createParser(format, 'apply');
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex),
        tzOffset = false;
    if (results && results.length) {
      var fields, dt;
      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        if (baseDate) {
          $log.warn('dateparser:', 'baseDate is not a valid date');
        }
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for (var i = 1, n = results.length; i < n; i++) {
        var mapper = map[i - 1];
        if (mapper.matcher === 'Z') {
          tzOffset = true;
        }

        if (mapper.apply) {
          mapper.apply.call(fields, results[i]);
        }
      }

      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
        Date.prototype.setFullYear;
      var timesetter = tzOffset ? Date.prototype.setUTCHours :
        Date.prototype.setHours;

      if (isValid(fields.year, fields.month, fields.date)) {
        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
          dt = new Date(baseDate);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours, fields.minutes,
            fields.seconds, fields.milliseconds);
        } else {
          dt = new Date(0);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
            fields.seconds || 0, fields.milliseconds || 0);
        }
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if (month === 1 && date > 28) {
      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
    }

    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return date < 31;
    }

    return true;
  }

  function toInt(str) {
    return parseInt(str, 10);
  }

  this.toTimezone = toTimezone;
  this.fromTimezone = fromTimezone;
  this.timezoneToOffset = timezoneToOffset;
  this.addDateMinutes = addDateMinutes;
  this.convertTimezoneToLocal = convertTimezoneToLocal;

  function toTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
  }

  function fromTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
  }

  //https://github.com/angular/angular.js/blob/622c42169699ec07fc6daaa19fe6d224e5d2f70e/src/Angular.js#L1207
  function timezoneToOffset(timezone, fallback) {
    timezone = timezone.replace(/:/g, '');
    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }

  function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  function convertTimezoneToLocal(date, timezone, reverse) {
    reverse = reverse ? -1 : 1;
    var dateTimezoneOffset = date.getTimezoneOffset();
    var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
  }
}]);

// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
// at most one element.
angular.module('ui.bootstrap.isClass', [])
.directive('uibIsClass', [
         '$animate',
function ($animate) {
  //                    11111111          22222222
  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
  //                    11111111           22222222
  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

  var dataPerTracked = {};

  return {
    restrict: 'A',
    compile: function(tElement, tAttrs) {
      var linkedScopes = [];
      var instances = [];
      var expToData = {};
      var lastActivated = null;
      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
      var onExp = onExpMatches[2];
      var expsStr = onExpMatches[1];
      var exps = expsStr.split(',');

      return linkFn;

      function linkFn(scope, element, attrs) {
        linkedScopes.push(scope);
        instances.push({
          scope: scope,
          element: element
        });

        exps.forEach(function(exp, k) {
          addForExp(exp, scope);
        });

        scope.$on('$destroy', removeScope);
      }

      function addForExp(exp, scope) {
        var matches = exp.match(IS_REGEXP);
        var clazz = scope.$eval(matches[1]);
        var compareWithExp = matches[2];
        var data = expToData[exp];
        if (!data) {
          var watchFn = function(compareWithVal) {
            var newActivated = null;
            instances.some(function(instance) {
              var thisVal = instance.scope.$eval(onExp);
              if (thisVal === compareWithVal) {
                newActivated = instance;
                return true;
              }
            });
            if (data.lastActivated !== newActivated) {
              if (data.lastActivated) {
                $animate.removeClass(data.lastActivated.element, clazz);
              }
              if (newActivated) {
                $animate.addClass(newActivated.element, clazz);
              }
              data.lastActivated = newActivated;
            }
          };
          expToData[exp] = data = {
            lastActivated: null,
            scope: scope,
            watchFn: watchFn,
            compareWithExp: compareWithExp,
            watcher: scope.$watch(compareWithExp, watchFn)
          };
        }
        data.watchFn(scope.$eval(compareWithExp));
      }

      function removeScope(e) {
        var removedScope = e.targetScope;
        var index = linkedScopes.indexOf(removedScope);
        linkedScopes.splice(index, 1);
        instances.splice(index, 1);
        if (linkedScopes.length) {
          var newWatchScope = linkedScopes[0];
          angular.forEach(expToData, function(data) {
            if (data.scope === removedScope) {
              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
              data.scope = newWatchScope;
            }
          });
        } else {
          expToData = {};
        }
      }
    }
  };
}]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

.value('$datepickerSuppressError', false)

.value('$datepickerLiteralWarning', true)

.constant('uibDatepickerConfig', {
  datepickerMode: 'day',
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  maxDate: null,
  maxMode: 'year',
  minDate: null,
  minMode: 'day',
  monthColumns: 3,
  ngModelOptions: {},
  shortcutPropagation: false,
  showWeeks: true,
  yearColumns: 5,
  yearRows: 4
})

.controller('UibDatepickerController', ['$scope', '$element', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
  function($scope, $element, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
      ngModelOptions = {},
      watchListeners = [];

  $element.addClass('uib-datepicker');
  $attrs.$set('role', 'application');

  if (!$scope.datepickerOptions) {
    $scope.datepickerOptions = {};
  }

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  [
    'customClass',
    'dateDisabled',
    'datepickerMode',
    'formatDay',
    'formatDayHeader',
    'formatDayTitle',
    'formatMonth',
    'formatMonthTitle',
    'formatYear',
    'maxDate',
    'maxMode',
    'minDate',
    'minMode',
    'monthColumns',
    'showWeeks',
    'shortcutPropagation',
    'startingDay',
    'yearColumns',
    'yearRows'
  ].forEach(function(key) {
    switch (key) {
      case 'customClass':
      case 'dateDisabled':
        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
        break;
      case 'datepickerMode':
        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
        break;
      case 'formatDay':
      case 'formatDayHeader':
      case 'formatDayTitle':
      case 'formatMonth':
      case 'formatMonthTitle':
      case 'formatYear':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
          datepickerConfig[key];
        break;
      case 'monthColumns':
      case 'showWeeks':
      case 'shortcutPropagation':
      case 'yearColumns':
      case 'yearRows':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $scope.datepickerOptions[key] : datepickerConfig[key];
        break;
      case 'startingDay':
        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
          self.startingDay = $scope.datepickerOptions.startingDay;
        } else if (angular.isNumber(datepickerConfig.startingDay)) {
          self.startingDay = datepickerConfig.startingDay;
        } else {
          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
        }

        break;
      case 'maxDate':
      case 'minDate':
        $scope.$watch('datepickerOptions.' + key, function(value) {
          if (value) {
            if (angular.isDate(value)) {
              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.getOption('timezone'));
            } else {
              if ($datepickerLiteralWarning) {
                $log.warn('Literal date support has been deprecated, please switch to date object usage');
              }

              self[key] = new Date(dateFilter(value, 'medium'));
            }
          } else {
            self[key] = datepickerConfig[key] ?
              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.getOption('timezone')) :
              null;
          }

          self.refreshView();
        });

        break;
      case 'maxMode':
      case 'minMode':
        if ($scope.datepickerOptions[key]) {
          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
            self[key] = $scope[key] = angular.isDefined(value) ? value : $scope.datepickerOptions[key];
            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
              $scope.datepickerMode = self[key];
              $scope.datepickerOptions.datepickerMode = self[key];
            }
          });
        } else {
          self[key] = $scope[key] = datepickerConfig[key] || null;
        }

        break;
    }
  });

  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if (angular.isDefined($attrs.ngDisabled)) {
    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
      $scope.disabled = disabled;
      self.refreshView();
    }));
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelOptions = extractOptions(ngModelCtrl);

    if ($scope.datepickerOptions.initDate) {
      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.getOption('timezone')) || new Date();
      $scope.$watch('datepickerOptions.initDate', function(initDate) {
        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.getOption('timezone'));
          self.refreshView();
        }
      });
    } else {
      self.activeDate = new Date();
    }

    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
    this.activeDate = !isNaN(date) ?
      dateParser.fromTimezone(date, ngModelOptions.getOption('timezone')) :
      dateParser.fromTimezone(new Date(), ngModelOptions.getOption('timezone'));

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if (ngModelCtrl.$viewValue) {
      var date = new Date(ngModelCtrl.$viewValue),
          isValid = !isNaN(date);

      if (isValid) {
        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.getOption('timezone'));
      } else if (!$datepickerSuppressError) {
        $log.error('Datepicker directive: "ng-model" value must be a Date object');
      }
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if (this.element) {
      $scope.selectedDt = null;
      this._refreshView();
      if ($scope.activeDt) {
        $scope.activeDateId = $scope.activeDt.uid;
      }

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      date = dateParser.fromTimezone(date, ngModelOptions.getOption('timezone'));
      ngModelCtrl.$setValidity('dateDisabled', !date ||
        this.element && !this.isDisabled(date));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    model = dateParser.fromTimezone(model, ngModelOptions.getOption('timezone'));
    var today = new Date();
    today = dateParser.fromTimezone(today, ngModelOptions.getOption('timezone'));
    var time = this.compare(date, today);
    var dt = {
      date: date,
      label: dateParser.filter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      past: time < 0,
      current: time === 0,
      future: time > 0,
      customClass: this.customClass(date) || null
    };

    if (model && this.compare(date, model) === 0) {
      $scope.selectedDt = dt;
    }

    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
      $scope.activeDt = dt;
    }

    return dt;
  };

  this.isDisabled = function(date) {
    return $scope.disabled ||
      this.minDate && this.compare(date, this.minDate) < 0 ||
      this.maxDate && this.compare(date, this.maxDate) > 0 ||
      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
  };

  this.customClass = function(date) {
    return $scope.customClass({date: date, mode: $scope.datepickerMode});
  };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function(date) {
    if ($scope.datepickerMode === self.minMode) {
      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.getOption('timezone')) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      dt = dateParser.toTimezone(dt, ngModelOptions.getOption('timezone'));
      ngModelCtrl.$setViewValue(dt);
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

      $scope.$emit('uib:datepicker.mode');
    }

    $scope.$broadcast('uib:datepicker.focus');
  };

  $scope.move = function(direction) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function(direction) {
    direction = direction || 1;

    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
      $scope.datepickerMode === self.minMode && direction === -1) {
      return;
    }

    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

    $scope.$emit('uib:datepicker.mode');
  };

  // Key event mapper
  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

  var focusElement = function() {
    self.element[0].focus();
  };

  // Listen for focus requests from popup directive
  $scope.$on('uib:datepicker.focus', focusElement);

  $scope.keydown = function(evt) {
    var key = $scope.keys[evt.which];

    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
      return;
    }

    evt.preventDefault();
    if (!self.shortcutPropagation) {
      evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if (self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };

  $element.on('keydown', function(evt) {
    $scope.$apply(function() {
      $scope.keydown(evt);
    });
  });

  $scope.$on('$destroy', function() {
    //Clear all watch listeners on destroy
    while (watchListeners.length) {
      watchListeners.shift()();
    }
  });

  function setMode(mode) {
    $scope.datepickerMode = mode;
    $scope.datepickerOptions.datepickerMode = mode;
  }

  function extractOptions(ngModelCtrl) {
    var ngModelOptions;

    if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
      // guarantee a value
      ngModelOptions = ngModelCtrl.$options ||
        $scope.datepickerOptions.ngModelOptions ||
        datepickerConfig.ngModelOptions ||
        {};

      // mimic 1.6+ api
      ngModelOptions.getOption = function (key) {
        return ngModelOptions[key];
      };
    } else { // in angular >=1.6 $options is always present
      // ng-model-options defaults timezone to null; don't let its precedence squash a non-null value
      var timezone = ngModelCtrl.$options.getOption('timezone') ||
        ($scope.datepickerOptions.ngModelOptions ? $scope.datepickerOptions.ngModelOptions.timezone : null) ||
        (datepickerConfig.ngModelOptions ? datepickerConfig.ngModelOptions.timezone : null);

      // values passed to createChild override existing values
      ngModelOptions = ngModelCtrl.$options // start with a ModelOptions instance
        .createChild(datepickerConfig.ngModelOptions) // lowest precedence
        .createChild($scope.datepickerOptions.ngModelOptions)
        .createChild(ngModelCtrl.$options) // highest precedence
        .createChild({timezone: timezone}); // to keep from squashing a non-null value
    }

    return ngModelOptions;
  }
}])

.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  this.step = { months: 1 };
  this.element = $element;
  function getDaysInMonth(year, month) {
    return month === 1 && year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
  }

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    scope.showWeeks = ctrl.showWeeks;
    ctrl.refreshView();
  };

  this.getDates = function(startDate, n) {
    var dates = new Array(n), current = new Date(startDate), i = 0, date;
    while (i < n) {
      date = new Date(current);
      dates[i++] = date;
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  this._refreshView = function() {
    var year = this.activeDate.getFullYear(),
      month = this.activeDate.getMonth(),
      firstDayOfMonth = new Date(this.activeDate);

    firstDayOfMonth.setFullYear(year, month, 1);

    var difference = this.startingDay - firstDayOfMonth.getDay(),
      numDisplayedFromPreviousMonth = difference > 0 ?
        7 - difference : - difference,
      firstDate = new Date(firstDayOfMonth);

    if (numDisplayedFromPreviousMonth > 0) {
      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
    }

    // 42 is the number of days on a six-week calendar
    var days = this.getDates(firstDate, 42);
    for (var i = 0; i < 42; i ++) {
      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
        secondary: days[i].getMonth() !== month,
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.labels = new Array(7);
    for (var j = 0; j < 7; j++) {
      scope.labels[j] = {
        abbr: dateFilter(days[j].date, this.formatDayHeader),
        full: dateFilter(days[j].date, 'EEEE')
      };
    }

    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
    scope.rows = this.split(days, 7);

    if (scope.showWeeks) {
      scope.weekNumbers = [];
      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
          numWeeks = scope.rows.length;
      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
        scope.weekNumbers.push(
          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
      }
    }
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  function getISO8601WeekNumber(date) {
    var checkDate = new Date(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  }

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getDate();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - 7;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + 7;
    } else if (key === 'pageup' || key === 'pagedown') {
      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setMonth(month, 1);
      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
    } else if (key === 'home') {
      date = 1;
    } else if (key === 'end') {
      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
    }
    this.activeDate.setDate(date);
  };
}])

.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  this.step = { years: 1 };
  this.element = $element;

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    ctrl.refreshView();
  };

  this._refreshView = function() {
    var months = new Array(12),
        year = this.activeDate.getFullYear(),
        date;

    for (var i = 0; i < 12; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(year, i, 1);
      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
    scope.rows = this.split(months, this.monthColumns);
    scope.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1;
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getMonth();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - this.monthColumns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + this.monthColumns;
    } else if (key === 'pageup' || key === 'pagedown') {
      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setFullYear(year);
    } else if (key === 'home') {
      date = 0;
    } else if (key === 'end') {
      date = 11;
    }
    this.activeDate.setMonth(date);
  };
}])

.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var columns, range;
  this.element = $element;

  function getStartingYear(year) {
    return parseInt((year - 1) / range, 10) * range + 1;
  }

  this.yearpickerInit = function() {
    columns = this.yearColumns;
    range = this.yearRows * columns;
    this.step = { years: range };
  };

  this._refreshView = function() {
    var years = new Array(range), date;

    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(start + i, 0, 1);
      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = [years[0].label, years[range - 1].label].join(' - ');
    scope.rows = this.split(years, columns);
    scope.columns = columns;
  };

  this.compare = function(date1, date2) {
    return date1.getFullYear() - date2.getFullYear();
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getFullYear();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - columns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + columns;
    } else if (key === 'pageup' || key === 'pagedown') {
      date += (key === 'pageup' ? - 1 : 1) * range;
    } else if (key === 'home') {
      date = getStartingYear(this.activeDate.getFullYear());
    } else if (key === 'end') {
      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
    }
    this.activeDate.setFullYear(date);
  };
}])

.directive('uibDatepicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
    },
    scope: {
      datepickerOptions: '=?'
    },
    require: ['uibDatepicker', '^ngModel'],
    restrict: 'A',
    controller: 'UibDatepickerController',
    controllerAs: 'datepicker',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      datepickerCtrl.init(ngModelCtrl);
    }
  };
})

.directive('uibDaypicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/day.html';
    },
    require: ['^uibDatepicker', 'uibDaypicker'],
    restrict: 'A',
    controller: 'UibDaypickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        daypickerCtrl = ctrls[1];

      daypickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibMonthpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/month.html';
    },
    require: ['^uibDatepicker', 'uibMonthpicker'],
    restrict: 'A',
    controller: 'UibMonthpickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        monthpickerCtrl = ctrls[1];

      monthpickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibYearpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/year.html';
    },
    require: ['^uibDatepicker', 'uibYearpicker'],
    restrict: 'A',
    controller: 'UibYearpickerController',
    link: function(scope, element, attrs, ctrls) {
      var ctrl = ctrls[0];
      angular.extend(ctrl, ctrls[1]);
      ctrl.yearpickerInit();

      ctrl.refreshView();
    }
  };
});

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
    /**
     * Used by scrollbarWidth() function to cache scrollbar's width.
     * Do not access this variable directly, use scrollbarWidth() instead.
     */
    var SCROLLBAR_WIDTH;
    /**
     * scrollbar on body and html element in IE and Edge overlay
     * content and should be considered 0 width.
     */
    var BODY_SCROLLBAR_WIDTH;
    var OVERFLOW_REGEX = {
      normal: /(auto|scroll)/,
      hidden: /(auto|scroll|hidden)/
    };
    var PLACEMENT_REGEX = {
      auto: /\s?auto?\s?/i,
      primary: /^(top|bottom|left|right)$/,
      secondary: /^(top|bottom|left|right|center)$/,
      vertical: /^(top|bottom)$/
    };
    var BODY_REGEX = /(HTML|BODY)/;

    return {

      /**
       * Provides a raw DOM element from a jQuery/jQLite element.
       *
       * @param {element} elem - The element to convert.
       *
       * @returns {element} A HTML element.
       */
      getRawNode: function(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      },

      /**
       * Provides a parsed number for a style property.  Strips
       * units and casts invalid numbers to 0.
       *
       * @param {string} value - The style value to parse.
       *
       * @returns {number} A valid number.
       */
      parseStyle: function(value) {
        value = parseFloat(value);
        return isFinite(value) ? value : 0;
      },

      /**
       * Provides the closest positioned ancestor.
       *
       * @param {element} element - The element to get the offest parent for.
       *
       * @returns {element} The closest positioned ancestor.
       */
      offsetParent: function(elem) {
        elem = this.getRawNode(elem);

        var offsetParent = elem.offsetParent || $document[0].documentElement;

        function isStaticPositioned(el) {
          return ($window.getComputedStyle(el).position || 'static') === 'static';
        }

        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || $document[0].documentElement;
      },

      /**
       * Provides the scrollbar width, concept from TWBS measureScrollbar()
       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
       * In IE and Edge, scollbar on body and html element overlay and should
       * return a width of 0.
       *
       * @returns {number} The width of the browser scollbar.
       */
      scrollbarWidth: function(isBody) {
        if (isBody) {
          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
            var bodyElem = $document.find('body');
            bodyElem.addClass('uib-position-body-scrollbar-measure');
            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
            bodyElem.removeClass('uib-position-body-scrollbar-measure');
          }
          return BODY_SCROLLBAR_WIDTH;
        }

        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
          $document.find('body').append(scrollElem);
          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
          scrollElem.remove();
        }

        return SCROLLBAR_WIDTH;
      },

      /**
       * Provides the padding required on an element to replace the scrollbar.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
       *     <li>**widthOverflow**: whether the the width is overflowing</li>
       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
       *     <li>**heightOverflow**: whether the the height is overflowing</li>
       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
       *   </ul>
       */
      scrollbarPadding: function(elem) {
        elem = this.getRawNode(elem);

        var elemStyle = $window.getComputedStyle(elem);
        var paddingRight = this.parseStyle(elemStyle.paddingRight);
        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
        var scrollParent = this.scrollParent(elem, false, true);
        var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));

        return {
          scrollbarWidth: scrollbarWidth,
          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
          right: paddingRight + scrollbarWidth,
          originalRight: paddingRight,
          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
          bottom: paddingBottom + scrollbarWidth,
          originalBottom: paddingBottom
         };
      },

      /**
       * Checks to see if the element is scrollable.
       *
       * @param {element} elem - The element to check.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       *
       * @returns {boolean} Whether the element is scrollable.
       */
      isScrollable: function(elem, includeHidden) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var elemStyle = $window.getComputedStyle(elem);
        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
      },

      /**
       * Provides the closest scrollable ancestor.
       * A port of the jQuery UI scrollParent method:
       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
       *
       * @param {element} elem - The element to find the scroll parent of.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       * @param {boolean=} [includeSelf=false] - Should the element being passed be
       * included in the scrollable llokup.
       *
       * @returns {element} A HTML element.
       */
      scrollParent: function(elem, includeHidden, includeSelf) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var documentEl = $document[0].documentElement;
        var elemStyle = $window.getComputedStyle(elem);
        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
          return elem;
        }
        var excludeStatic = elemStyle.position === 'absolute';
        var scrollParent = elem.parentElement || documentEl;

        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
          return documentEl;
        }

        while (scrollParent.parentElement && scrollParent !== documentEl) {
          var spStyle = $window.getComputedStyle(scrollParent);
          if (excludeStatic && spStyle.position !== 'static') {
            excludeStatic = false;
          }

          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
            break;
          }
          scrollParent = scrollParent.parentElement;
        }

        return scrollParent;
      },

      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/ - distance to closest positioned
       * ancestor.  Does not account for margins by default like jQuery position.
       *
       * @param {element} elem - The element to caclulate the position on.
       * @param {boolean=} [includeMargins=false] - Should margins be accounted
       * for, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of offset parent</li>
       *     <li>**left**: distance to left edge of offset parent</li>
       *   </ul>
       */
      position: function(elem, includeMagins) {
        elem = this.getRawNode(elem);

        var elemOffset = this.offset(elem);
        if (includeMagins) {
          var elemStyle = $window.getComputedStyle(elem);
          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
        }
        var parent = this.offsetParent(elem);
        var parentOffset = {top: 0, left: 0};

        if (parent !== $document[0].documentElement) {
          parentOffset = this.offset(parent);
          parentOffset.top += parent.clientTop - parent.scrollTop;
          parentOffset.left += parent.clientLeft - parent.scrollLeft;
        }

        return {
          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
          top: Math.round(elemOffset.top - parentOffset.top),
          left: Math.round(elemOffset.left - parentOffset.left)
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/ - distance to viewport.  Does
       * not account for borders, margins, or padding on the body
       * element.
       *
       * @param {element} elem - The element to calculate the offset on.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of viewport</li>
       *     <li>**right**: distance to bottom edge of viewport</li>
       *   </ul>
       */
      offset: function(elem) {
        elem = this.getRawNode(elem);

        var elemBCR = elem.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      },

      /**
       * Provides offset distance to the closest scrollable ancestor
       * or viewport.  Accounts for border and scrollbar width.
       *
       * Right and bottom dimensions represent the distance to the
       * respective edge of the viewport element.  If the element
       * edge extends beyond the viewport, a negative value will be
       * reported.
       *
       * @param {element} elem - The element to get the viewport offset for.
       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
       * of the first scrollable element, default is false.
       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
       * be accounted for, default is true.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: distance to the top content edge of viewport element</li>
       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
       *     <li>**left**: distance to the left content edge of viewport element</li>
       *     <li>**right**: distance to the right content edge of viewport element</li>
       *   </ul>
       */
      viewportOffset: function(elem, useDocument, includePadding) {
        elem = this.getRawNode(elem);
        includePadding = includePadding !== false ? true : false;

        var elemBCR = elem.getBoundingClientRect();
        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
        var offsetParentBCR = offsetParent.getBoundingClientRect();

        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
        if (offsetParent === $document[0].documentElement) {
          offsetBCR.top += $window.pageYOffset;
          offsetBCR.left += $window.pageXOffset;
        }
        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

        if (includePadding) {
          var offsetParentStyle = $window.getComputedStyle(offsetParent);
          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
        }

        return {
          top: Math.round(elemBCR.top - offsetBCR.top),
          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
          left: Math.round(elemBCR.left - offsetBCR.left),
          right: Math.round(offsetBCR.right - elemBCR.right)
        };
      },

      /**
       * Provides an array of placement values parsed from a placement string.
       * Along with the 'auto' indicator, supported placement strings are:
       *   <ul>
       *     <li>top: element on top, horizontally centered on host element.</li>
       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
       *     <li>left: element on left, vertically centered on host element.</li>
       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
       *     <li>right: element on right, vertically centered on host element.</li>
       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
       *   </ul>
       * A placement string with an 'auto' indicator is expected to be
       * space separated from the placement, i.e: 'auto bottom-left'  If
       * the primary and secondary placement values do not match 'top,
       * bottom, left, right' then 'top' will be the primary placement and
       * 'center' will be the secondary placement.  If 'auto' is passed, true
       * will be returned as the 3rd value of the array.
       *
       * @param {string} placement - The placement string to parse.
       *
       * @returns {array} An array with the following values
       * <ul>
       *   <li>**[0]**: The primary placement.</li>
       *   <li>**[1]**: The secondary placement.</li>
       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
       * </ul>
       */
      parsePlacement: function(placement) {
        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
        if (autoPlace) {
          placement = placement.replace(PLACEMENT_REGEX.auto, '');
        }

        placement = placement.split('-');

        placement[0] = placement[0] || 'top';
        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
          placement[0] = 'top';
        }

        placement[1] = placement[1] || 'center';
        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
          placement[1] = 'center';
        }

        if (autoPlace) {
          placement[2] = true;
        } else {
          placement[2] = false;
        }

        return placement;
      },

      /**
       * Provides coordinates for an element to be positioned relative to
       * another element.  Passing 'auto' as part of the placement parameter
       * will enable smart placement - where the element fits. i.e:
       * 'auto left-top' will check to see if there is enough space to the left
       * of the hostElem to fit the targetElem, if not place right (same for secondary
       * top placement).  Available space is calculated using the viewportOffset
       * function.
       *
       * @param {element} hostElem - The element to position against.
       * @param {element} targetElem - The element to position.
       * @param {string=} [placement=top] - The placement for the targetElem,
       *   default is 'top'. 'center' is assumed as secondary placement for
       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
       *   <ul>
       *     <li>top</li>
       *     <li>top-right</li>
       *     <li>top-left</li>
       *     <li>bottom</li>
       *     <li>bottom-left</li>
       *     <li>bottom-right</li>
       *     <li>left</li>
       *     <li>left-top</li>
       *     <li>left-bottom</li>
       *     <li>right</li>
       *     <li>right-top</li>
       *     <li>right-bottom</li>
       *   </ul>
       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
       *   be calculated from the body element, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: Value for targetElem top.</li>
       *     <li>**left**: Value for targetElem left.</li>
       *     <li>**placement**: The resolved placement.</li>
       *   </ul>
       */
      positionElements: function(hostElem, targetElem, placement, appendToBody) {
        hostElem = this.getRawNode(hostElem);
        targetElem = this.getRawNode(targetElem);

        // need to read from prop to support tests.
        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        placement = this.parsePlacement(placement);

        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: ''};

        if (placement[2]) {
          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

          var targetElemStyle = $window.getComputedStyle(targetElem);
          var adjustedSize = {
            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
          };

          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
                         placement[0];

          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
                         placement[1];

          if (placement[1] === 'center') {
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                placement[1] = 'left';
              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                placement[1] = 'right';
              }
            } else {
              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                placement[1] = 'top';
              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                placement[1] = 'bottom';
              }
            }
          }
        }

        switch (placement[0]) {
          case 'top':
            targetElemPos.top = hostElemPos.top - targetHeight;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left - targetWidth;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width;
            break;
        }

        switch (placement[1]) {
          case 'top':
            targetElemPos.top = hostElemPos.top;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
            break;
          case 'center':
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
            } else {
              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
            }
            break;
        }

        targetElemPos.top = Math.round(targetElemPos.top);
        targetElemPos.left = Math.round(targetElemPos.left);
        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

        return targetElemPos;
      },

      /**
       * Provides a way to adjust the top positioning after first
       * render to correctly align element to top after content
       * rendering causes resized element height
       *
       * @param {array} placementClasses - The array of strings of classes
       * element should have.
       * @param {object} containerPosition - The object with container
       * position information
       * @param {number} initialHeight - The initial height for the elem.
       * @param {number} currentHeight - The current height for the elem.
       */
      adjustTop: function(placementClasses, containerPosition, initialHeight, currentHeight) {
        if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
          return {
            top: containerPosition.top - currentHeight + 'px'
          };
        }
      },

      /**
       * Provides a way for positioning tooltip & dropdown
       * arrows when using placement options beyond the standard
       * left, right, top, or bottom.
       *
       * @param {element} elem - The tooltip/dropdown element.
       * @param {string} placement - The placement for the elem.
       */
      positionArrow: function(elem, placement) {
        elem = this.getRawNode(elem);

        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
        if (!innerElem) {
          return;
        }

        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
        if (!arrowElem) {
          return;
        }

        var arrowCss = {
          top: '',
          bottom: '',
          left: '',
          right: ''
        };

        placement = this.parsePlacement(placement);
        if (placement[1] === 'center') {
          // no adjustment necessary - just reset styles
          angular.element(arrowElem).css(arrowCss);
          return;
        }

        var borderProp = 'border-' + placement[0] + '-width';
        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

        var borderRadiusProp = 'border-';
        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
          borderRadiusProp += placement[0] + '-' + placement[1];
        } else {
          borderRadiusProp += placement[1] + '-' + placement[0];
        }
        borderRadiusProp += '-radius';
        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

        switch (placement[0]) {
          case 'top':
            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'bottom':
            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'left':
            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'right':
            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
            break;
        }

        arrowCss[placement[1]] = borderRadius;

        angular.element(arrowElem).css(arrowCss);
      }
    };
  }]);

angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

.value('$datepickerPopupLiteralWarning', true)

.constant('uibDatepickerPopupConfig', {
  altInputFormats: [],
  appendToBody: false,
  clearText: 'Clear',
  closeOnDateSelection: true,
  closeText: 'Done',
  currentText: 'Today',
  datepickerPopup: 'yyyy-MM-dd',
  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  onOpenFocus: true,
  showButtonBar: true,
  placement: 'auto bottom-left'
})

.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
  var cache = {},
    isHtml5DateInput = false;
  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [];

  this.init = function(_ngModel_) {
    ngModel = _ngModel_;
    ngModelOptions = extractOptions(ngModel);
    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
      $scope.$parent.$eval($attrs.closeOnDateSelection) :
      datepickerPopupConfig.closeOnDateSelection;
    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
      datepickerPopupConfig.appendToBody;
    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
      $attrs.datepickerPopupTemplateUrl :
      datepickerPopupConfig.datepickerPopupTemplateUrl;
    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
      $scope.$parent.$eval($attrs.altInputFormats) :
      datepickerPopupConfig.altInputFormats;

    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
      $scope.$parent.$eval($attrs.showButtonBar) :
      datepickerPopupConfig.showButtonBar;

    if (datepickerPopupConfig.html5Types[$attrs.type]) {
      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
      isHtml5DateInput = true;
    } else {
      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
        // Invalidate the $modelValue to ensure that formatters re-run
        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
        if (newDateFormat !== dateFormat) {
          dateFormat = newDateFormat;
          ngModel.$modelValue = null;

          if (!dateFormat) {
            throw new Error('uibDatepickerPopup must have a date format specified.');
          }
        }
      });
    }

    if (!dateFormat) {
      throw new Error('uibDatepickerPopup must have a date format specified.');
    }

    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
      throw new Error('HTML5 date input types do not support custom formats.');
    }

    // popup element used to display calendar
    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');

    popupEl.attr({
      'ng-model': 'date',
      'ng-change': 'dateSelection(date)',
      'template-url': datepickerPopupTemplateUrl
    });

    // datepicker element
    datepickerEl = angular.element(popupEl.children()[0]);
    datepickerEl.attr('template-url', datepickerTemplateUrl);

    if (!$scope.datepickerOptions) {
      $scope.datepickerOptions = {};
    }

    if (isHtml5DateInput) {
      if ($attrs.type === 'month') {
        $scope.datepickerOptions.datepickerMode = 'month';
        $scope.datepickerOptions.minMode = 'month';
      }
    }

    datepickerEl.attr('datepicker-options', 'datepickerOptions');

    if (!isHtml5DateInput) {
      // Internal API to maintain the correct ng-invalid-[key] class
      ngModel.$$parserName = 'date';
      ngModel.$validators.date = validator;
      ngModel.$parsers.unshift(parseDate);
      ngModel.$formatters.push(function(value) {
        if (ngModel.$isEmpty(value)) {
          $scope.date = value;
          return value;
        }

        if (angular.isNumber(value)) {
          value = new Date(value);
        }

        $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption('timezone'));

        return dateParser.filter($scope.date, dateFormat);
      });
    } else {
      ngModel.$formatters.push(function(value) {
        $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption('timezone'));
        return value;
      });
    }

    // Detect changes in the view from the text box
    ngModel.$viewChangeListeners.push(function() {
      $scope.date = parseDateString(ngModel.$viewValue);
    });

    $element.on('keydown', inputKeydownBind);

    $popup = $compile(popupEl)($scope);
    // Prevent jQuery cache memory leak (template is now redundant after linking)
    popupEl.remove();

    if (appendToBody) {
      $document.find('body').append($popup);
    } else {
      $element.after($popup);
    }

    $scope.$on('$destroy', function() {
      if ($scope.isOpen === true) {
        if (!$rootScope.$$phase) {
          $scope.$apply(function() {
            $scope.isOpen = false;
          });
        }
      }

      $popup.remove();
      $element.off('keydown', inputKeydownBind);
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);

      //Clear all watch listeners on destroy
      while (watchListeners.length) {
        watchListeners.shift()();
      }
    });
  };

  $scope.getText = function(key) {
    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
  };

  $scope.isDisabled = function(date) {
    if (date === 'today') {
      date = dateParser.fromTimezone(new Date(), ngModelOptions.getOption('timezone'));
    }

    var dates = {};
    angular.forEach(['minDate', 'maxDate'], function(key) {
      if (!$scope.datepickerOptions[key]) {
        dates[key] = null;
      } else if (angular.isDate($scope.datepickerOptions[key])) {
        dates[key] = new Date($scope.datepickerOptions[key]);
      } else {
        if ($datepickerPopupLiteralWarning) {
          $log.warn('Literal date support has been deprecated, please switch to date object usage');
        }

        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
      }
    });

    return $scope.datepickerOptions &&
      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
  };

  $scope.compare = function(date1, date2) {
    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  };

  // Inner change
  $scope.dateSelection = function(dt) {
    $scope.date = dt;
    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
    $element.val(date);
    ngModel.$setViewValue(date);

    if (closeOnDateSelection) {
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.keydown = function(evt) {
    if (evt.which === 27) {
      evt.stopPropagation();
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.select = function(date, evt) {
    evt.stopPropagation();

    if (date === 'today') {
      var today = new Date();
      if (angular.isDate($scope.date)) {
        date = new Date($scope.date);
        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
      } else {
        date = dateParser.fromTimezone(today, ngModelOptions.getOption('timezone'));
        date.setHours(0, 0, 0, 0);
      }
    }
    $scope.dateSelection(date);
  };

  $scope.close = function(evt) {
    evt.stopPropagation();

    $scope.isOpen = false;
    $element[0].focus();
  };

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if ($attrs.ngDisabled) {
    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
      $scope.disabled = disabled;
    }));
  }

  $scope.$watch('isOpen', function(value) {
    if (value) {
      if (!$scope.disabled) {
        $timeout(function() {
          positionPopup();

          if (onOpenFocus) {
            $scope.$broadcast('uib:datepicker.focus');
          }

          $document.on('click', documentClickBind);

          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
          if (appendToBody || $position.parsePlacement(placement)[2]) {
            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
            if (scrollParentEl) {
              scrollParentEl.on('scroll', positionPopup);
            }
          } else {
            scrollParentEl = null;
          }

          angular.element($window).on('resize', positionPopup);
        }, 0, false);
      } else {
        $scope.isOpen = false;
      }
    } else {
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);
    }
  });

  function cameltoDash(string) {
    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
  }

  function parseDateString(viewValue) {
    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
    if (isNaN(date)) {
      for (var i = 0; i < altInputFormats.length; i++) {
        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
        if (!isNaN(date)) {
          return date;
        }
      }
    }
    return date;
  }

  function parseDate(viewValue) {
    if (angular.isNumber(viewValue)) {
      // presumably timestamp to date object
      viewValue = new Date(viewValue);
    }

    if (!viewValue) {
      return null;
    }

    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
      return viewValue;
    }

    if (angular.isString(viewValue)) {
      var date = parseDateString(viewValue);
      if (!isNaN(date)) {
        return dateParser.toTimezone(date, ngModelOptions.getOption('timezone'));
      }
    }

    return ngModelOptions.getOption('allowInvalid') ? viewValue : undefined;
  }

  function validator(modelValue, viewValue) {
    var value = modelValue || viewValue;

    if (!$attrs.ngRequired && !value) {
      return true;
    }

    if (angular.isNumber(value)) {
      value = new Date(value);
    }

    if (!value) {
      return true;
    }

    if (angular.isDate(value) && !isNaN(value)) {
      return true;
    }

    if (angular.isString(value)) {
      return !isNaN(parseDateString(value));
    }

    return false;
  }

  function documentClickBind(event) {
    if (!$scope.isOpen && $scope.disabled) {
      return;
    }

    var popup = $popup[0];
    var dpContainsTarget = $element[0].contains(event.target);
    // The popup node may not be an element node
    // In some browsers (IE) only element nodes have the 'contains' function
    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
    }
  }

  function inputKeydownBind(evt) {
    if (evt.which === 27 && $scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
      $element[0].focus();
    } else if (evt.which === 40 && !$scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = true;
      });
    }
  }

  function positionPopup() {
    if ($scope.isOpen) {
      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
      var position = $position.positionElements($element, dpElement, placement, appendToBody);
      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
      if (dpElement.hasClass('uib-position-measure')) {
        dpElement.removeClass('uib-position-measure');
      }
    }
  }

  function extractOptions(ngModelCtrl) {
    var ngModelOptions;

    if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
      // guarantee a value
      ngModelOptions = angular.isObject(ngModelCtrl.$options) ?
        ngModelCtrl.$options :
        {
          timezone: null
        };

      // mimic 1.6+ api
      ngModelOptions.getOption = function (key) {
        return ngModelOptions[key];
      };
    } else { // in angular >=1.6 $options is always present
      ngModelOptions = ngModelCtrl.$options;
    }

    return ngModelOptions;
  }

  $scope.$on('uib:datepicker.mode', function() {
    $timeout(positionPopup, 0, false);
  });
}])

.directive('uibDatepickerPopup', function() {
  return {
    require: ['ngModel', 'uibDatepickerPopup'],
    controller: 'UibDatepickerPopupController',
    scope: {
      datepickerOptions: '=?',
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@'
    },
    link: function(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        ctrl = ctrls[1];

      ctrl.init(ngModel);
    }
  };
})

.directive('uibDatepickerPopupWrap', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
    }
  };
});

angular.module('ui.bootstrap.debounce', [])
/**
 * A helper, internal service that debounces a function
 */
  .factory('$$debounce', ['$timeout', function($timeout) {
    return function(callback, debounceTime) {
      var timeoutPromise;

      return function() {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }

        timeoutPromise = $timeout(function() {
          callback.apply(self, args);
        }, debounceTime);
      };
    };
  }]);

angular.module('ui.bootstrap.multiMap', [])
/**
 * A helper, internal data structure that stores all references attached to key
 */
  .factory('$$multiMap', function() {
    return {
      createNew: function() {
        var map = {};

        return {
          entries: function() {
            return Object.keys(map).map(function(key) {
              return {
                key: key,
                value: map[key]
              };
            });
          },
          get: function(key) {
            return map[key];
          },
          hasKey: function(key) {
            return !!map[key];
          },
          keys: function() {
            return Object.keys(map);
          },
          put: function(key, value) {
            if (!map[key]) {
              map[key] = [];
            }

            map[key].push(value);
          },
          remove: function(key, value) {
            var values = map[key];

            if (!values) {
              return;
            }

            var idx = values.indexOf(value);

            if (idx !== -1) {
              values.splice(idx, 1);
            }

            if (!values.length) {
              delete map[key];
            }
          }
        };
      }
    };
  });

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position'])

.constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
})

.service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function($document, $rootScope, $$multiMap) {
  var openScope = null;
  var openedContainers = $$multiMap.createNew();

  this.isOnlyOpen = function(dropdownScope, appendTo) {
    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openDropdown = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (openDropdown) {
        return openedDropdowns.length === 1;
      }
    }

    return false;
  };

  this.open = function(dropdownScope, element, appendTo) {
    if (!openScope) {
      $document.on('click', closeDropdown);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openedScopes = openedDropdowns.map(function(dropdown) {
        return dropdown.scope;
      });
      if (openedScopes.indexOf(dropdownScope) === -1) {
        openedContainers.put(appendTo, {
          scope: dropdownScope
        });
      }
    } else {
      openedContainers.put(appendTo, {
        scope: dropdownScope
      });
    }
  };

  this.close = function(dropdownScope, element, appendTo) {
    if (openScope === dropdownScope) {
      $document.off('click', closeDropdown);
      $document.off('keydown', this.keybindFilter);
      openScope = null;
    }

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var dropdownToClose = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (dropdownToClose) {
        openedContainers.remove(appendTo, dropdownToClose);
      }
    }
  };

  var closeDropdown = function(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope || !openScope.isOpen) { return; }

    if (evt && openScope.getAutoClose() === 'disabled') { return; }

    if (evt && evt.which === 3) { return; }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' &&
      dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.focusToggleElement();
    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  this.keybindFilter = function(evt) {
    if (!openScope) {
      // see this.close as ESC could have been pressed which kills the scope so we can not proceed
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    var toggleElement = openScope.getToggleElement();
    var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
    var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}])

.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
    scope = $scope.$new(), // create a child scope so we are not polluting original one
    templateScope,
    appendToOpenClass = dropdownConfig.appendToOpenClass,
    openClass = dropdownConfig.openClass,
    getIsOpen,
    setIsOpen = angular.noop,
    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
    keynavEnabled = false,
    selectedOption = null,
    body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function() {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    keynavEnabled = angular.isDefined($attrs.keyboardNav);
  };

  this.toggle = function(open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return $element;
  };

  scope.isKeynavEnabled = function() {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function(keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
      angular.element(self.dropdownMenu).find('a') :
      $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = 0;
        } else {
          self.selectedOption = self.selectedOption === elems.length - 1 ?
            self.selectedOption :
            self.selectedOption + 1;
        }
        break;
      }
      case 38: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = elems.length - 1;
        } else {
          self.selectedOption = self.selectedOption === 0 ?
            0 : self.selectedOption - 1;
        }
        break;
      }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function() {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function() {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  function removeDropdownMenu() {
    $element.append(self.dropdownMenu);
  }

  scope.$watch('isOpen', function(isOpen, wasOpen) {
    var appendTo = null,
      appendToBody = false;

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    if (angular.isDefined($attrs.dropdownAppendToBody)) {
      var appendToBodyValue = $parse($attrs.dropdownAppendToBody)(scope);
      if (appendToBodyValue !== false) {
        appendToBody = true;
      }
    }

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      if (isOpen) {
        appendTo.append(self.dropdownMenu);
        $element.on('$destroy', removeDropdownMenu);
      } else {
        $element.off('$destroy', removeDropdownMenu);
        removeDropdownMenu();
      }
    }

    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
        css,
        rightalign,
        scrollbarPadding,
        scrollbarWidth = 0;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarPadding = $position.scrollbarPadding(appendTo);

        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          scrollbarWidth = scrollbarPadding.scrollbarWidth;
        }

        css.right = window.innerWidth - scrollbarWidth -
          (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth -
            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
    var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
    var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);

    if (hasOpenClass === !isOpen) {
      var toggleClass;
      if (appendTo) {
        toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
      } else {
        toggleClass = isOpen ? 'addClass' : 'removeClass';
      }
      $animate[toggleClass](openContainer, dropdownOpenClass).then(function() {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
            $document.on('keydown', uibDropdownService.keybindFilter);
          });
        });
      } else {
        $document.on('keydown', uibDropdownService.keybindFilter);
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element, appendTo);
    } else {
      uibDropdownService.close(scope, $element, appendTo);
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}])

.directive('uibDropdown', function() {
  return {
    controller: 'UibDropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
})

.directive('uibDropdownMenu', function() {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
})

.directive('uibDropdownToggle', function() {
  return {
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.on('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.off('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.stackedMap', [])
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function() {
    return {
      createNew: function() {
        var stack = [];

        return {
          add: function(key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function(key) {
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function() {
            return stack[stack.length - 1];
          },
          remove: function(key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function() {
            return stack.pop();
          },
          length: function() {
            return stack.length;
          }
        };
      }
    };
  });
angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
  .provider('$uibResolve', function() {
    var resolve = this;
    this.resolver = null;

    this.setResolver = function(resolver) {
      this.resolver = resolver;
    };

    this.$get = ['$injector', '$q', function($injector, $q) {
      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
      return {
        resolve: function(invocables, locals, parent, self) {
          if (resolver) {
            return resolver.resolve(invocables, locals, parent, self);
          }

          var promises = [];

          angular.forEach(invocables, function(value) {
            if (angular.isFunction(value) || angular.isArray(value)) {
              promises.push($q.resolve($injector.invoke(value)));
            } else if (angular.isString(value)) {
              promises.push($q.resolve($injector.get(value)));
            } else {
              promises.push($q.resolve(value));
            }
          });

          return $q.all(promises).then(function(resolves) {
            var resolveObj = {};
            var resolveIter = 0;
            angular.forEach(invocables, function(value, key) {
              resolveObj[key] = resolves[resolveIter++];
            });

            return resolveObj;
          });
        }
      };
    }];
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
  function($animate, $injector, $modalStack) {
    return {
      restrict: 'A',
      compile: function(tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      if (attrs.modalInClass) {
        $animate.addClass(element, attrs.modalInClass);

        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
          var done = setIsAsync();
          if (scope.modalOptions.animation) {
            $animate.removeClass(element, attrs.modalInClass).then(done);
          } else {
            done();
          }
        });
      }
    }
  }])

  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
  function($modalStack, $q, $animateCss, $document) {
    return {
      scope: {
        index: '@'
      },
      restrict: 'A',
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'uib/template/modal/window.html';
      },
      link: function(scope, element, attrs) {
        element.addClass(attrs.windowTopClass || '');
        scope.size = attrs.size;

        scope.close = function(evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop &&
            modal.value.backdrop !== 'static' &&
            evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // moved from template to fix issue #2280
        element.on('click', scope.close);

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is rendered.
        var modalRenderDeferObj = $q.defer();
        // Resolve render promise post-digest
        scope.$$postDigest(function() {
          modalRenderDeferObj.resolve();
        });

        modalRenderDeferObj.promise.then(function() {
          var animationPromise = null;

          if (attrs.modalInClass) {
            animationPromise = $animateCss(element, {
              addClass: attrs.modalInClass
            }).start();

            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
              var done = setIsAsync();
              $animateCss(element, {
                removeClass: attrs.modalInClass
              }).start().then(done);
            });
          }


          $q.when(animationPromise).then(function() {
            // Notify {@link $modalStack} that modal is rendered.
            var modal = $modalStack.getTop();
            if (modal) {
              $modalStack.modalRendered(modal.key);
            }

            /**
             * If something within the freshly-opened modal already has focus (perhaps via a
             * directive that causes focus) then there's no need to try to focus anything.
             */
            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
              var inputWithAutofocus = element[0].querySelector('[autofocus]');
              /**
               * Auto-focusing of a freshly-opened modal element causes any child elements
               * with the autofocus attribute to lose focus. This is an issue on touch
               * based devices which will show and then hide the onscreen keyboard.
               * Attempts to refocus the autofocus element via JavaScript will not reopen
               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
               * the modal element if the modal does not contain an autofocus element.
               */
              if (inputWithAutofocus) {
                inputWithAutofocus.focus();
              } else {
                element[0].focus();
              }
            }
          });
        });
      }
    };
  }])

  .directive('uibModalAnimationClass', function() {
    return {
      compile: function(tElement, tAttrs) {
        if (tAttrs.modalAnimation) {
          tElement.addClass(tAttrs.uibModalAnimationClass);
        }
      }
    };
  })

  .directive('uibModalTransclude', ['$animate', function($animate) {
    return {
      link: function(scope, element, attrs, controller, transclude) {
        transclude(scope.$parent, function(clone) {
          element.empty();
          $animate.enter(clone, element);
        });
      }
    };
  }])

  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var openedClasses = $$multiMap.createNew();
      var $modalStack = {
        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
      };
      var topModalIndex = 0;
      var previousTopOpenedModal = null;
      var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';

      //Modal focus behavior
      var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' +
        'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' +
        'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
      var scrollbarPadding;
      var SNAKE_CASE_REGEXP = /[A-Z]/g;

      // TODO: extract into common dependency with tooltip
      function snake_case(name) {
        var separator = '-';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }

      function isVisible(element) {
        return !!(element.offsetWidth ||
          element.offsetHeight ||
          element.getClientRects().length);
      }

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }

        // If any backdrop exist, ensure that it's index is always
        // right below the top modal
        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
          topBackdropIndex = topModalIndex;
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value;
        var appendToElement = modalWindow.appendTo;

        //clean up the stack
        openedWindows.remove(modalInstance);
        previousTopOpenedModal = openedWindows.top();
        if (previousTopOpenedModal) {
          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
        }

        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
          openedClasses.remove(modalBodyClass, modalInstance);
          var areAnyOpen = openedClasses.hasKey(modalBodyClass);
          appendToElement.toggleClass(modalBodyClass, areAnyOpen);
          if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
            if (scrollbarPadding.originalRight) {
              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
            } else {
              appendToElement.css({paddingRight: ''});
            }
            scrollbarPadding = null;
          }
          toggleTopWindowClass(true);
        }, modalWindow.closedDeferred);
        checkRemoveBackdrop();

        //move focus to specified element if available, or else to body
        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
          elementToReceiveFocus.focus();
        } else if (appendToElement.focus) {
          appendToElement.focus();
        }
      }

      // Add or remove "windowTopClass" from the top window in the stack
      function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;

        if (openedWindows.length() > 0) {
          modalWindow = openedWindows.top().value;
          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
        }
      }

      function checkRemoveBackdrop() {
        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() === -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, function() {
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }

      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        var asyncDeferred;
        var asyncPromise = null;
        var setIsAsync = function() {
          if (!asyncDeferred) {
            asyncDeferred = $q.defer();
            asyncPromise = asyncDeferred.promise;
          }

          return function asyncDone() {
            asyncDeferred.resolve();
          };
        };
        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

        // Note that it's intentional that asyncPromise might be null.
        // That's when setIsAsync has not been called during the
        // NOW_CLOSING_EVENT broadcast.
        return $q.when(asyncPromise).then(afterAnimating);

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          $animate.leave(domEl).then(function() {
            if (done) {
              done();
            }

            domEl.remove();
            if (closedDeferred) {
              closedDeferred.resolve();
            }
          });

          scope.$destroy();
        }
      }

      $document.on('keydown', keydownListener);

      $rootScope.$on('$destroy', function() {
        $document.off('keydown', keydownListener);
      });

      function keydownListener(evt) {
        if (evt.isDefaultPrevented()) {
          return evt;
        }

        var modal = openedWindows.top();
        if (modal) {
          switch (evt.which) {
            case 27: {
              if (modal.value.keyboard) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                  $modalStack.dismiss(modal.key, 'escape key press');
                });
              }
              break;
            }
            case 9: {
              var list = $modalStack.loadFocusElementList(modal);
              var focusChanged = false;
              if (evt.shiftKey) {
                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                  focusChanged = $modalStack.focusLastFocusableElement(list);
                }
              } else {
                if ($modalStack.isFocusInLastItem(evt, list)) {
                  focusChanged = $modalStack.focusFirstFocusableElement(list);
                }
              }

              if (focusChanged) {
                evt.preventDefault();
                evt.stopPropagation();
              }

              break;
            }
          }
        }
      }

      $modalStack.open = function(modalInstance, modal) {
        var modalOpener = $document[0].activeElement,
          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

        toggleTopWindowClass(false);

        // Store the current top first, to determine what index we ought to use
        // for the current top modal
        previousTopOpenedModal = openedWindows.top();

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          closedDeferred: modal.closedDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard,
          openedClass: modal.openedClass,
          windowTopClass: modal.windowTopClass,
          animation: modal.animation,
          appendTo: modal.appendTo
        });

        openedClasses.put(modalBodyClass, modalInstance);

        var appendToElement = modal.appendTo,
            currBackdropIndex = backdropIndex();

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.modalOptions = modal;
          backdropScope.index = currBackdropIndex;
          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
          backdropDomEl.attr({
            'class': 'modal-backdrop',
            'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
            'uib-modal-animation-class': 'fade',
            'modal-in-class': 'in'
          });
          if (modal.backdropClass) {
            backdropDomEl.addClass(modal.backdropClass);
          }

          if (modal.animation) {
            backdropDomEl.attr('modal-animation', 'true');
          }
          $compile(backdropDomEl)(backdropScope);
          $animate.enter(backdropDomEl, appendToElement);
          if ($uibPosition.isScrollable(appendToElement)) {
            scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
            if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
              appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
            }
          }
        }

        var content;
        if (modal.component) {
          content = document.createElement(snake_case(modal.component.name));
          content = angular.element(content);
          content.attr({
            resolve: '$resolve',
            'modal-instance': '$uibModalInstance',
            close: '$close($value)',
            dismiss: '$dismiss($value)'
          });
        } else {
          content = modal.content;
        }

        // Set the top modal index based on the index of the previous top modal
        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
          'class': 'modal',
          'template-url': modal.windowTemplateUrl,
          'window-top-class': modal.windowTopClass,
          'role': 'dialog',
          'aria-labelledby': modal.ariaLabelledBy,
          'aria-describedby': modal.ariaDescribedBy,
          'size': modal.size,
          'index': topModalIndex,
          'animate': 'animate',
          'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
          'tabindex': -1,
          'uib-modal-animation-class': 'fade',
          'modal-in-class': 'in'
        }).append(content);
        if (modal.windowClass) {
          angularDomEl.addClass(modal.windowClass);
        }

        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        appendToElement.addClass(modalBodyClass);
        if (modal.scope) {
          // we need to explicitly add the modal index to the modal scope
          // because it is needed by ngStyle to compute the zIndex property.
          modal.scope.$$topModalIndex = topModalIndex;
        }
        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

        openedWindows.top().value.modalDomEl = angularDomEl;
        openedWindows.top().value.modalOpener = modalOpener;

        applyAriaHidden(angularDomEl);

        function applyAriaHidden(el) {
          if (!el || el[0].tagName === 'BODY') {
            return;
          }

          getSiblings(el).forEach(function(sibling) {
            var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
              ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

            if (!ariaHiddenCount) {
              ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
            }

            sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
            sibling.setAttribute('aria-hidden', 'true');
          });

          return applyAriaHidden(el.parent());

          function getSiblings(el) {
            var children = el.parent() ? el.parent().children() : [];

            return Array.prototype.filter.call(children, function(child) {
              return child !== el[0];
            });
          }
        }
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      function unhideBackgroundElements() {
        Array.prototype.forEach.call(
          document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'),
          function(hiddenEl) {
            var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
              newHiddenCount = ariaHiddenCount - 1;
            hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

            if (!newHiddenCount) {
              hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
              hiddenEl.removeAttribute('aria-hidden');
            }
          }
        );
      }

      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }

        return !modalWindow;
      };

      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function() {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function(modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      $modalStack.focusFirstFocusableElement = function(list) {
        if (list.length > 0) {
          list[0].focus();
          return true;
        }
        return false;
      };

      $modalStack.focusLastFocusableElement = function(list) {
        if (list.length > 0) {
          list[list.length - 1].focus();
          return true;
        }
        return false;
      };

      $modalStack.isModalFocused = function(evt, modalWindow) {
        if (evt && modalWindow) {
          var modalDomEl = modalWindow.value.modalDomEl;
          if (modalDomEl && modalDomEl.length) {
            return (evt.target || evt.srcElement) === modalDomEl[0];
          }
        }
        return false;
      };

      $modalStack.isFocusInFirstItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[0];
        }
        return false;
      };

      $modalStack.isFocusInLastItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[list.length - 1];
        }
        return false;
      };

      $modalStack.loadFocusElementList = function(modalWindow) {
        if (modalWindow) {
          var modalDomE1 = modalWindow.value.modalDomEl;
          if (modalDomE1 && modalDomE1.length) {
            var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
            return elements ?
              Array.prototype.filter.call(elements, function(element) {
                return isVisible(element);
              }) : elements;
          }
        }
      };

      return $modalStack;
    }])

  .provider('$uibModal', function() {
    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ?
                options.templateUrl() : options.templateUrl);
          }

          var promiseChain = null;
          $modal.getPromiseChain = function() {
            return promiseChain;
          };

          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalClosedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              closed: modalClosedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

            if (!modalOptions.appendTo.length) {
              throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
            }

            //verify options
            if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of component or template or templateUrl options is required.');
            }

            var templateAndResolvePromise;
            if (modalOptions.component) {
              templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
            } else {
              templateAndResolvePromise =
                $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
            }

            function resolveWithTemplate() {
              return templateAndResolvePromise;
            }

            // Wait for the resolution of the existing promise chain.
            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
            // Then add to $modalStack and resolve opened.
            // Finally clean up the chain variable if no subsequent modal has overwritten it.
            var samePromise;
            samePromise = promiseChain = $q.all([promiseChain])
              .then(resolveWithTemplate, resolveWithTemplate)
              .then(function resolveSuccess(tplAndVars) {
                var providedScope = modalOptions.scope || $rootScope;

                var modalScope = providedScope.$new();
                modalScope.$close = modalInstance.close;
                modalScope.$dismiss = modalInstance.dismiss;

                modalScope.$on('$destroy', function() {
                  if (!modalScope.$$uibDestructionScheduled) {
                    modalScope.$dismiss('$uibUnscheduledDestruction');
                  }
                });

                var modal = {
                  scope: modalScope,
                  deferred: modalResultDeferred,
                  renderDeferred: modalRenderDeferred,
                  closedDeferred: modalClosedDeferred,
                  animation: modalOptions.animation,
                  backdrop: modalOptions.backdrop,
                  keyboard: modalOptions.keyboard,
                  backdropClass: modalOptions.backdropClass,
                  windowTopClass: modalOptions.windowTopClass,
                  windowClass: modalOptions.windowClass,
                  windowTemplateUrl: modalOptions.windowTemplateUrl,
                  ariaLabelledBy: modalOptions.ariaLabelledBy,
                  ariaDescribedBy: modalOptions.ariaDescribedBy,
                  size: modalOptions.size,
                  openedClass: modalOptions.openedClass,
                  appendTo: modalOptions.appendTo
                };

                var component = {};
                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

                if (modalOptions.component) {
                  constructLocals(component, false, true, false);
                  component.name = modalOptions.component;
                  modal.component = component;
                } else if (modalOptions.controller) {
                  constructLocals(ctrlLocals, true, false, true);

                  // the third param will make the controller instantiate later,private api
                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
                  if (modalOptions.controllerAs && modalOptions.bindToController) {
                    ctrlInstance = ctrlInstantiate.instance;
                    ctrlInstance.$close = modalScope.$close;
                    ctrlInstance.$dismiss = modalScope.$dismiss;
                    angular.extend(ctrlInstance, {
                      $resolve: ctrlLocals.$scope.$resolve
                    }, providedScope);
                  }

                  ctrlInstance = ctrlInstantiate();

                  if (angular.isFunction(ctrlInstance.$onInit)) {
                    ctrlInstance.$onInit();
                  }
                }

                if (!modalOptions.component) {
                  modal.content = tplAndVars[0];
                }

                $modalStack.open(modalInstance, modal);
                modalOpenedDeferred.resolve(true);

                function constructLocals(obj, template, instanceOnScope, injectable) {
                  obj.$scope = modalScope;
                  obj.$scope.$resolve = {};
                  if (instanceOnScope) {
                    obj.$scope.$uibModalInstance = modalInstance;
                  } else {
                    obj.$uibModalInstance = modalInstance;
                  }

                  var resolves = template ? tplAndVars[1] : tplAndVars;
                  angular.forEach(resolves, function(value, key) {
                    if (injectable) {
                      obj[key] = value;
                    }

                    obj.$scope.$resolve[key] = value;
                  });
                }
            }, function resolveError(reason) {
              modalOpenedDeferred.reject(reason);
              modalResultDeferred.reject(reason);
            })['finally'](function() {
              if (promiseChain === samePromise) {
                promiseChain = null;
              }
            });

            return modalInstance;
          };

          return $modal;
        }
      ]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.paging', [])
/**
 * Helper internal service for generating common controller code between the
 * pager and pagination components
 */
.factory('uibPaging', ['$parse', function($parse) {
  return {
    create: function(ctrl, $scope, $attrs) {
      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
      ctrl._watchers = [];

      ctrl.init = function(ngModelCtrl, config) {
        ctrl.ngModelCtrl = ngModelCtrl;
        ctrl.config = config;

        ngModelCtrl.$render = function() {
          ctrl.render();
        };

        if ($attrs.itemsPerPage) {
          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
            ctrl.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }));
        } else {
          ctrl.itemsPerPage = config.itemsPerPage;
        }

        $scope.$watch('totalItems', function(newTotal, oldTotal) {
          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }
        });
      };

      ctrl.calculateTotalPages = function() {
        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };

      ctrl.render = function() {
        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
      };

      $scope.selectPage = function(page, evt) {
        if (evt) {
          evt.preventDefault();
        }

        var clickAllowed = !$scope.ngDisabled || !evt;
        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
          if (evt && evt.target) {
            evt.target.blur();
          }
          ctrl.ngModelCtrl.$setViewValue(page);
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.getText = function(key) {
        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
      };

      $scope.noPrevious = function() {
        return $scope.page === 1;
      };

      $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
      };

      ctrl.updatePage = function() {
        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

        if ($scope.page > $scope.totalPages) {
          $scope.selectPage($scope.totalPages);
        } else {
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.$on('$destroy', function() {
        while (ctrl._watchers.length) {
          ctrl._watchers.shift()();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])

.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

  uibPaging.create(this, $scope, $attrs);
}])

.constant('uibPagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
  return {
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@',
      ngDisabled: '='
    },
    require: ['uibPager', '?ngModel'],
    restrict: 'A',
    controller: 'UibPagerController',
    controllerAs: 'pager',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pager/pager.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pager');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
        return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
    }
  };
}]);

angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])
.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
  var ctrl = this;
  // Setup configuration parameters
  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;
  $attrs.$set('role', 'menu');

  uibPaging.create(this, $scope, $attrs);

  if ($attrs.maxSize) {
    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
      maxSize = parseInt(value, 10);
      ctrl.render();
    }));
  }

  // Create page object used in template
  function makePage(number, text, isActive) {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  function getPages(currentPage, totalPages) {
    var pages = [];

    // Default page limits
    var startPage = 1, endPage = totalPages;
    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
      var page = makePage(number, pageLabel(number), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
      if (startPage > 1) {
        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
        var previousPageSet = makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }
        if (boundaryLinkNumbers) {
          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
            var secondPageLink = makePage(2, '2', false);
            pages.unshift(secondPageLink);
          }
          //add the first page
          var firstPageLink = makePage(1, '1', false);
          pages.unshift(firstPageLink);
        }
      }

      if (endPage < totalPages) {
        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
        var nextPageSet = makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
        if (boundaryLinkNumbers) {
          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
            pages.push(secondToLastPageLink);
          }
          //add the last page
          var lastPageLink = makePage(totalPages, totalPages, false);
          pages.push(lastPageLink);
        }
      }
    }
    return pages;
  }

  var originalRender = this.render;
  this.render = function() {
    originalRender();
    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
      $scope.pages = getPages($scope.page, $scope.totalPages);
    }
  };
}])

.constant('uibPaginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  boundaryLinkNumbers: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true,
  forceEllipses: false
})

.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
  return {
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@',
      ngDisabled:'='
    },
    require: ['uibPagination', '?ngModel'],
    restrict: 'A',
    controller: 'UibPaginationController',
    controllerAs: 'pagination',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pagination');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider('$uibTooltip', function() {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    placementClassPrefix: '',
    animation: true,
    popupDelay: 0,
    popupCloseDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'outsideClick': 'outsideClick',
    'focus': 'blur',
    'none': ''
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function(value) {
		angular.extend(globalOptions, value);
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };

  /**
   * This is a helper function for translating camel-case to snake_case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
    var openedTooltips = $$stackedMap.createNew();
    $document.on('keyup', keypressListener);

    $rootScope.$on('$destroy', function() {
      $document.off('keyup', keypressListener);
    });

    function keypressListener(e) {
      if (e.which === 27) {
        var last = openedTooltips.top();
        if (last) {
          last.value.close();
          last = null;
        }
      }
    }

    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
      options = angular.extend({}, defaultOptions, globalOptions, options);

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers(trigger) {
        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
        var hide = show.map(function(trigger) {
          return triggerMap[trigger] || trigger;
        });
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case(ttType);

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName + '-popup ' +
          'uib-title="' + startSym + 'title' + endSym + '" ' +
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="' + startSym + 'content' + endSym + '" ') +
          'origin-scope="origScope" ' +
          'class="uib-position-measure ' + prefix + '" ' +
          'tooltip-animation-class="fade"' +
          'uib-tooltip-classes ' +
          'ng-class="{ in: isOpen }" ' +
          '>' +
        '</div>';

      return {
        compile: function(tElem, tAttrs) {
          var tooltipLinker = $compile(template);

          return function link(scope, element, attrs, tooltipCtrl) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var showTimeout;
            var hideTimeout;
            var positionTimeout;
            var adjustmentTimeout;
            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
            var triggers = getTriggers(undefined);
            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
            var ttScope = scope.$new(true);
            var repositionScheduled = false;
            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
            var observers = [];
            var lastPlacement;

            var positionTooltip = function() {
              // check if tooltip exists and is not empty
              if (!tooltip || !tooltip.html()) { return; }

              if (!positionTimeout) {
                positionTimeout = $timeout(function() {
                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                  var initialHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                  var elementPos = appendToBody ? $position.offset(element) : $position.position(element);
                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });
                  var placementClasses = ttPosition.placement.split('-');

                  if (!tooltip.hasClass(placementClasses[0])) {
                    tooltip.removeClass(lastPlacement.split('-')[0]);
                    tooltip.addClass(placementClasses[0]);
                  }

                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
                  }

                  adjustmentTimeout = $timeout(function() {
                    var currentHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                    var adjustment = $position.adjustTop(placementClasses, elementPos, initialHeight, currentHeight);
                    if (adjustment) {
                      tooltip.css(adjustment);
                    }
                    adjustmentTimeout = null;
                  }, 0, false);

                  // first time through tt element will have the
                  // uib-position-measure class or if the placement
                  // has changed we need to position the arrow.
                  if (tooltip.hasClass('uib-position-measure')) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                    tooltip.removeClass('uib-position-measure');
                  } else if (lastPlacement !== ttPosition.placement) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                  }
                  lastPlacement = ttPosition.placement;

                  positionTimeout = null;
                }, 0, false);
              }
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind() {
              if (!ttScope.isOpen) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                return;
              }

              cancelHide();
              prepareTooltip();

              if (ttScope.popupDelay) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!showTimeout) {
                  showTimeout = $timeout(show, ttScope.popupDelay, false);
                }
              } else {
                show();
              }
            }

            function hideTooltipBind() {
              cancelShow();

              if (ttScope.popupCloseDelay) {
                if (!hideTimeout) {
                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
                }
              } else {
                hide();
              }
            }

            // Show the tooltip popup element.
            function show() {
              cancelShow();
              cancelHide();

              // Don't show empty tooltips.
              if (!ttScope.content) {
                return angular.noop;
              }

              createTooltip();

              // And show the tooltip.
              ttScope.$evalAsync(function() {
                ttScope.isOpen = true;
                assignIsOpen(true);
                positionTooltip();
              });
            }

            function cancelShow() {
              if (showTimeout) {
                $timeout.cancel(showTimeout);
                showTimeout = null;
              }

              if (positionTimeout) {
                $timeout.cancel(positionTimeout);
                positionTimeout = null;
              }
            }

            // Hide the tooltip popup element.
            function hide() {
              if (!ttScope) {
                return;
              }

              // First things first: we don't show it anymore.
              ttScope.$evalAsync(function() {
                if (ttScope) {
                  ttScope.isOpen = false;
                  assignIsOpen(false);
                  // And now we remove it from the DOM. However, if we have animation, we
                  // need to wait for it to expire beforehand.
                  // FIXME: this is a placeholder for a port of the transitions library.
                  // The fade transition in TWBS is 150ms.
                  if (ttScope.animation) {
                    if (!transitionTimeout) {
                      transitionTimeout = $timeout(removeTooltip, 150, false);
                    }
                  } else {
                    removeTooltip();
                  }
                }
              });
            }

            function cancelHide() {
              if (hideTimeout) {
                $timeout.cancel(hideTimeout);
                hideTimeout = null;
              }

              if (transitionTimeout) {
                $timeout.cancel(transitionTimeout);
                transitionTimeout = null;
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                return;
              }

              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
              });

              openedTooltips.add(ttScope, {
                close: hide
              });

              prepObservers();
            }

            function removeTooltip() {
              cancelShow();
              cancelHide();
              unregisterObservers();

              if (tooltip) {
                tooltip.remove();
                
                tooltip = null;
                if (adjustmentTimeout) {
                  $timeout.cancel(adjustmentTimeout);
                }
              }

              openedTooltips.remove(ttScope);
              
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            /**
             * Set the initial scope values. Once
             * the tooltip is created, the observers
             * will be added to keep things in sync.
             */
            function prepareTooltip() {
              ttScope.title = attrs[prefix + 'Title'];
              if (contentParse) {
                ttScope.content = contentParse(scope);
              } else {
                ttScope.content = attrs[ttType];
              }

              ttScope.popupClass = attrs[prefix + 'Class'];
              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
              var placement = $position.parsePlacement(ttScope.placement);
              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
            }

            function assignIsOpen(isOpen) {
              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
                isOpenParse.assign(scope, isOpen);
              }
            }

            ttScope.contentExp = function() {
              return ttScope.content;
            };

            /**
             * Observe the relevant attributes.
             */
            attrs.$observe('disabled', function(val) {
              if (val) {
                cancelShow();
              }

              if (val && ttScope.isOpen) {
                hide();
              }
            });

            if (isOpenParse) {
              scope.$watch(isOpenParse, function(val) {
                if (ttScope && !val === ttScope.isOpen) {
                  toggleTooltipBind();
                }
              });
            }

            function prepObservers() {
              observers.length = 0;

              if (contentParse) {
                observers.push(
                  scope.$watch(contentParse, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    }
                  })
                );

                observers.push(
                  tooltipLinkedScope.$watch(function() {
                    if (!repositionScheduled) {
                      repositionScheduled = true;
                      tooltipLinkedScope.$$postDigest(function() {
                        repositionScheduled = false;
                        if (ttScope && ttScope.isOpen) {
                          positionTooltip();
                        }
                      });
                    }
                  })
                );
              } else {
                observers.push(
                  attrs.$observe(ttType, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    } else {
                      positionTooltip();
                    }
                  })
                );
              }

              observers.push(
                attrs.$observe(prefix + 'Title', function(val) {
                  ttScope.title = val;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );

              observers.push(
                attrs.$observe(prefix + 'Placement', function(val) {
                  ttScope.placement = val ? val : options.placement;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );
            }

            function unregisterObservers() {
              if (observers.length) {
                angular.forEach(observers, function(observer) {
                  observer();
                });
                observers.length = 0;
              }
            }

            // hide tooltips/popovers for outsideClick trigger
            function bodyHideTooltipBind(e) {
              if (!ttScope || !ttScope.isOpen || !tooltip) {
                return;
              }
              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
                hideTooltipBind();
              }
            }

            // KeyboardEvent handler to hide the tooltip on Escape key press
            function hideOnEscapeKey(e) {
              if (e.which === 27) {
                hideTooltipBind();
              }
            }

            var unregisterTriggers = function() {
              triggers.show.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  element.off('click', toggleTooltipBind);
                } else {
                  element.off(trigger, showTooltipBind);
                  element.off(trigger, toggleTooltipBind);
                }
                element.off('keypress', hideOnEscapeKey);
              });
              triggers.hide.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  $document.off('click', bodyHideTooltipBind);
                } else {
                  element.off(trigger, hideTooltipBind);
                }
              });
            };

            function prepTriggers() {
              var showTriggers = [], hideTriggers = [];
              var val = scope.$eval(attrs[prefix + 'Trigger']);
              unregisterTriggers();

              if (angular.isObject(val)) {
                Object.keys(val).forEach(function(key) {
                  showTriggers.push(key);
                  hideTriggers.push(val[key]);
                });
                triggers = {
                  show: showTriggers,
                  hide: hideTriggers
                };
              } else {
                triggers = getTriggers(val);
              }

              if (triggers.show !== 'none') {
                triggers.show.forEach(function(trigger, idx) {
                  if (trigger === 'outsideClick') {
                    element.on('click', toggleTooltipBind);
                    $document.on('click', bodyHideTooltipBind);
                  } else if (trigger === triggers.hide[idx]) {
                    element.on(trigger, toggleTooltipBind);
                  } else if (trigger) {
                    element.on(trigger, showTooltipBind);
                    element.on(triggers.hide[idx], hideTooltipBind);
                  }
                  element.on('keypress', hideOnEscapeKey);
                });
              }
            }

            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal;
            var appendKey = prefix + 'AppendToBody';
            if (appendKey in attrs && attrs[appendKey] === undefined) {
              appendToBodyVal = true;
            } else {
              appendToBodyVal = scope.$eval(attrs[appendKey]);
            }

            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive('uibTooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate, $sce, $compile, $templateRequest) {
  return {
    link: function(scope, elem, attrs) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }

        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }

        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // need to set the primary position so the
      // arrow has space during position measure.
      // tooltip.positionTooltip()
      if (scope.placement) {
        // // There are no top-left etc... classes
        // // in TWBS, so we need the primary position.
        var position = $uibPosition.parsePlacement(scope.placement);
        element.addClass(position[0]);
      }

      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }

      if (scope.animation) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
}])

.directive('uibTooltipPopup', function() {
  return {
    restrict: 'A',
    scope: { content: '@' },
    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
  };
})

.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
}])

.directive('uibTooltipTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
  };
})

.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive('uibTooltipHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
  };
})

.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uibPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/popover/popover-template.html'
  };
})

.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', uibTitle: '@' },
    templateUrl: 'uib/template/popover/popover-html.html'
  };
})

.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverPopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', content: '@' },
    templateUrl: 'uib/template/popover/popover.html'
  };
})

.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopover', 'popover', 'click');
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('uibProgressConfig', {
  animate: true,
  max: 100
})

.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
  var self = this,
      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

  this.bars = [];
  $scope.max = getMaxOrDefault();

  this.addBar = function(bar, element, attrs) {
    if (!animate) {
      element.css({'transition': 'none'});
    }

    this.bars.push(bar);

    bar.max = getMaxOrDefault();
    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

    bar.$watch('value', function(value) {
      bar.recalculatePercentage();
    });

    bar.recalculatePercentage = function() {
      var totalPercentage = self.bars.reduce(function(total, bar) {
        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
        return total + bar.percent;
      }, 0);

      if (totalPercentage > 100) {
        bar.percent -= totalPercentage - 100;
      }
    };

    bar.$on('$destroy', function() {
      element = null;
      self.removeBar(bar);
    });
  };

  this.removeBar = function(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
    this.bars.forEach(function (bar) {
      bar.recalculatePercentage();
    });
  };

  //$attrs.$observe('maxParam', function(maxParam) {
  $scope.$watch('maxParam', function(maxParam) {
    self.bars.forEach(function(bar) {
      bar.max = getMaxOrDefault();
      bar.recalculatePercentage();
    });
  });

  function getMaxOrDefault () {
    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
  }
}])

.directive('uibProgress', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    require: 'uibProgress',
    scope: {
      maxParam: '=?max'
    },
    templateUrl: 'uib/template/progressbar/progress.html'
  };
})

.directive('uibBar', function() {
  return {
    replace: true,
    transclude: true,
    require: '^uibProgress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/bar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element, attrs);
    }
  };
})

.directive('uibProgressbar', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    scope: {
      value: '=',
      maxParam: '=?max',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/progressbar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
    }
  };
});

angular.module('ui.bootstrap.rating', [])

.constant('uibRatingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null,
  enableReset: true,
  titles: ['one', 'two', 'three', 'four', 'five']
})

.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl = { $setViewValue: angular.noop },
    self = this;

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }

      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    this.enableReset = angular.isDefined($attrs.enableReset) ?
      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
      tmpTitles : ratingConfig.titles;

    var ratingStates = angular.isDefined($attrs.ratingStates) ?
      $scope.$parent.$eval($attrs.ratingStates) :
      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
    }
    return states;
  };

  this.getTitle = function(index) {
    if (index >= this.titles.length) {
      return index + 1;
    }

    return this.titles[index];
  };

  $scope.rate = function(value) {
    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
      ngModelCtrl.$setViewValue(newViewValue);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if (!$scope.readonly) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.title = self.getTitle($scope.value - 1);
  };
}])

.directive('uibRating', function() {
  return {
    require: ['uibRating', 'ngModel'],
    restrict: 'A',
    scope: {
      readonly: '=?readOnly',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'UibRatingController',
    templateUrl: 'uib/template/rating/rating.html',
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init(ngModelCtrl);
    }
  };
});

angular.module('ui.bootstrap.tabs', [])

.controller('UibTabsetController', ['$scope', function ($scope) {
  var ctrl = this,
    oldIndex;
  ctrl.tabs = [];

  ctrl.select = function(index, evt) {
    if (!destroyed) {
      var previousIndex = findTabIndex(oldIndex);
      var previousSelected = ctrl.tabs[previousIndex];
      if (previousSelected) {
        previousSelected.tab.onDeselect({
          $event: evt,
          $selectedIndex: index
        });
        if (evt && evt.isDefaultPrevented()) {
          return;
        }
        previousSelected.tab.active = false;
      }

      var selected = ctrl.tabs[index];
      if (selected) {
        selected.tab.onSelect({
          $event: evt
        });
        selected.tab.active = true;
        ctrl.active = selected.index;
        oldIndex = selected.index;
      } else if (!selected && angular.isDefined(oldIndex)) {
        ctrl.active = null;
        oldIndex = null;
      }
    }
  };

  ctrl.addTab = function addTab(tab) {
    ctrl.tabs.push({
      tab: tab,
      index: tab.index
    });
    ctrl.tabs.sort(function(t1, t2) {
      if (t1.index > t2.index) {
        return 1;
      }

      if (t1.index < t2.index) {
        return -1;
      }

      return 0;
    });

    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
      var newActiveIndex = findTabIndex(tab.index);
      ctrl.select(newActiveIndex);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index;
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].tab === tab) {
        index = i;
        break;
      }
    }

    if (ctrl.tabs[index].index === ctrl.active) {
      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
        index - 1 : index + 1 % ctrl.tabs.length;
      ctrl.select(newActiveTabIndex);
    }

    ctrl.tabs.splice(index, 1);
  };

  $scope.$watch('tabset.active', function(val) {
    if (angular.isDefined(val) && val !== oldIndex) {
      ctrl.select(findTabIndex(val));
    }
  });

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });

  function findTabIndex(index) {
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].index === index) {
        return i;
      }
    }
  }
}])

.directive('uibTabset', function() {
  return {
    transclude: true,
    replace: true,
    scope: {},
    bindToController: {
      active: '=?',
      type: '@'
    },
    controller: 'UibTabsetController',
    controllerAs: 'tabset',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
    },
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ?
        scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ?
        scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

.directive('uibTab', ['$parse', function($parse) {
  return {
    require: '^uibTabset',
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tab.html';
    },
    transclude: true,
    scope: {
      heading: '@',
      index: '=?',
      classes: '@?',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    controllerAs: 'tab',
    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
      scope.disabled = false;
      if (attrs.disable) {
        scope.$parent.$watch($parse(attrs.disable), function(value) {
          scope.disabled = !! value;
        });
      }

      if (angular.isUndefined(attrs.index)) {
        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
        } else {
          scope.index = 0;
        }
      }

      if (angular.isUndefined(attrs.classes)) {
        scope.classes = '';
      }

      scope.select = function(evt) {
        if (!scope.disabled) {
          var index;
          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
            if (tabsetCtrl.tabs[i].tab === scope) {
              index = i;
              break;
            }
          }

          tabsetCtrl.select(index, evt);
        }
      };

      tabsetCtrl.addTab(scope);
      scope.$on('$destroy', function() {
        tabsetCtrl.removeTab(scope);
      });

      //We need to transclude later, once the content container is ready.
      //when this link happens, we're inside a tab heading.
      scope.$transcludeFn = transclude;
    }
  };
}])

.directive('uibTabHeadingTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTab',
    link: function(scope, elm) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
})

.directive('uibTabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };

  function isTabHeading(node) {
    return node.tagName && (
      node.hasAttribute('uib-tab-heading') ||
      node.hasAttribute('data-uib-tab-heading') ||
      node.hasAttribute('x-uib-tab-heading') ||
      node.tagName.toLowerCase() === 'uib-tab-heading' ||
      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'uib:tab-heading'
    );
  }
});

angular.module('ui.bootstrap.timepicker', [])

.constant('uibTimepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showMeridian: true,
  showSeconds: false,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true,
  showSpinners: true,
  templateUrl: 'uib/template/timepicker/timepicker.html'
})

.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
  var hoursModelCtrl, minutesModelCtrl, secondsModelCtrl;
  var selected = new Date(),
    watchers = [],
    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
  $element.removeAttr('tabindex');

  this.init = function(ngModelCtrl_, inputs) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function(modelValue) {
      return modelValue ? new Date(modelValue) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1),
        secondsInputEl = inputs.eq(2);

    hoursModelCtrl = hoursInputEl.controller('ngModel');
    minutesModelCtrl = minutesInputEl.controller('ngModel');
    secondsModelCtrl = secondsInputEl.controller('ngModel');

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

    if (mousewheel) {
      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = +value;
    }));
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = +value;
    }));
  }

  var min;
  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
    var dt = new Date(value);
    min = isNaN(dt) ? undefined : dt;
  }));

  var max;
  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
    var dt = new Date(value);
    max = isNaN(dt) ? undefined : dt;
  }));

  var disabled = false;
  if ($attrs.ngDisabled) {
    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
      disabled = value;
    }));
  }

  $scope.noIncrementHours = function() {
    var incrementedSelected = addMinutes(selected, hourStep * 60);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementHours = function() {
    var decrementedSelected = addMinutes(selected, -hourStep * 60);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementMinutes = function() {
    var incrementedSelected = addMinutes(selected, minuteStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementMinutes = function() {
    var decrementedSelected = addMinutes(selected, -minuteStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementSeconds = function() {
    var incrementedSelected = addSeconds(selected, secondStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementSeconds = function() {
    var decrementedSelected = addSeconds(selected, -secondStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noToggleMeridian = function() {
    if (selected.getHours() < 12) {
      return disabled || addMinutes(selected, 12 * 60) > max;
    }

    return disabled || addMinutes(selected, -12 * 60) < min;
  };

  var secondStep = timepickerConfig.secondStep;
  if ($attrs.secondStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
      secondStep = +value;
    }));
  }

  $scope.showSeconds = timepickerConfig.showSeconds;
  if ($attrs.showSeconds) {
    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
      $scope.showSeconds = !!value;
    }));
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if (ngModelCtrl.$error.time) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
          selected.setHours(hours);
          refresh();
        }
      } else {
        updateTemplate();
      }
    }));
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate() {
    var hours = +$scope.hours;
    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
      hours >= 0 && hours < 24;
    if (!valid || $scope.hours === '') {
      return undefined;
    }

    if ($scope.showMeridian) {
      if (hours === 12) {
        hours = 0;
      }
      if ($scope.meridian === meridians[1]) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = +$scope.minutes;
    var valid = minutes >= 0 && minutes < 60;
    if (!valid || $scope.minutes === '') {
      return undefined;
    }
    return minutes;
  }

  function getSecondsFromTemplate() {
    var seconds = +$scope.seconds;
    return seconds >= 0 && seconds < 60 ? seconds : undefined;
  }

  function pad(value, noPad) {
    if (value === null) {
      return '';
    }

    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
      '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
      return e.detail || delta > 0;
    };

    hoursInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
      }
      e.preventDefault();
    });

    minutesInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
      }
      e.preventDefault();
    });

     secondsInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
      }
      e.preventDefault();
    });
  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    hoursInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementHours();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementHours();
          $scope.$apply();
        }
      }
    });

    minutesInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementMinutes();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementMinutes();
          $scope.$apply();
        }
      }
    });

    secondsInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementSeconds();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementSeconds();
          $scope.$apply();
        }
      }
    });
  };

  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    if ($scope.readonlyInput) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      $scope.updateSeconds = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
      ngModelCtrl.$setViewValue(null);
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
        if (hoursModelCtrl) {
          hoursModelCtrl.$setValidity('hours', false);
        }
      }

      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
        if (minutesModelCtrl) {
          minutesModelCtrl.$setValidity('minutes', false);
        }
      }

      if (angular.isDefined(invalidSeconds)) {
        $scope.invalidSeconds = invalidSeconds;
        if (secondsModelCtrl) {
          secondsModelCtrl.$setValidity('seconds', false);
        }
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate(),
        minutes = getMinutesFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(true);
        } else {
          refresh('h');
        }
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.hours === null || $scope.hours === '') {
        invalidate(true);
      } else if (!$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply(function() {
          $scope.hours = pad($scope.hours, !padHours);
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(undefined, true);
        } else {
          refresh('m');
        }
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.minutes === null) {
        invalidate(undefined, true);
      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
        $scope.$apply(function() {
          $scope.minutes = pad($scope.minutes);
        });
      }
    });

    $scope.updateSeconds = function() {
      var seconds = getSecondsFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(seconds)) {
        selected.setSeconds(seconds);
        refresh('s');
      } else {
        invalidate(undefined, undefined, true);
      }
    };

    secondsInputEl.on('blur', function(e) {
      if (modelIsEmpty()) {
        makeValid();
      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
        $scope.$apply( function() {
          $scope.seconds = pad($scope.seconds);
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if (isNaN(date)) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if (date) {
        selected = date;
      }

      if (selected < min || selected > max) {
        ngModelCtrl.$setValidity('time', false);
        $scope.invalidHours = true;
        $scope.invalidMinutes = true;
      } else {
        makeValid();
      }
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh(keyboardChange) {
    makeValid();
    ngModelCtrl.$setViewValue(new Date(selected));
    updateTemplate(keyboardChange);
  }

  function makeValid() {
    if (hoursModelCtrl) {
      hoursModelCtrl.$setValidity('hours', true);
    }

    if (minutesModelCtrl) {
      minutesModelCtrl.$setValidity('minutes', true);
    }

    if (secondsModelCtrl) {
      secondsModelCtrl.$setValidity('seconds', true);
    }

    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
    $scope.invalidSeconds = false;
  }

  function updateTemplate(keyboardChange) {
    if (!ngModelCtrl.$modelValue) {
      $scope.hours = null;
      $scope.minutes = null;
      $scope.seconds = null;
      $scope.meridian = meridians[0];
    } else {
      var hours = selected.getHours(),
        minutes = selected.getMinutes(),
        seconds = selected.getSeconds();

      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
      }

      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
      if (keyboardChange !== 'm') {
        $scope.minutes = pad(minutes);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

      if (keyboardChange !== 's') {
        $scope.seconds = pad(seconds);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
  }

  function addSecondsToSelected(seconds) {
    selected = addSeconds(selected, seconds);
    refresh();
  }

  function addMinutes(selected, minutes) {
    return addSeconds(selected, minutes*60);
  }

  function addSeconds(date, seconds) {
    var dt = new Date(date.getTime() + seconds * 1000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
    return newDate;
  }

  function modelIsEmpty() {
    return ($scope.hours === null || $scope.hours === '') &&
      ($scope.minutes === null || $scope.minutes === '') &&
      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
  }

  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

  $scope.incrementHours = function() {
    if (!$scope.noIncrementHours()) {
      addSecondsToSelected(hourStep * 60 * 60);
    }
  };

  $scope.decrementHours = function() {
    if (!$scope.noDecrementHours()) {
      addSecondsToSelected(-hourStep * 60 * 60);
    }
  };

  $scope.incrementMinutes = function() {
    if (!$scope.noIncrementMinutes()) {
      addSecondsToSelected(minuteStep * 60);
    }
  };

  $scope.decrementMinutes = function() {
    if (!$scope.noDecrementMinutes()) {
      addSecondsToSelected(-minuteStep * 60);
    }
  };

  $scope.incrementSeconds = function() {
    if (!$scope.noIncrementSeconds()) {
      addSecondsToSelected(secondStep);
    }
  };

  $scope.decrementSeconds = function() {
    if (!$scope.noDecrementSeconds()) {
      addSecondsToSelected(-secondStep);
    }
  };

  $scope.toggleMeridian = function() {
    var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

    if (!$scope.noToggleMeridian()) {
      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
      } else {
        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
      }
    }
  };

  $scope.blur = function() {
    ngModelCtrl.$setTouched();
  };

  $scope.$on('$destroy', function() {
    while (watchers.length) {
      watchers.shift()();
    }
  });
}])

.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
  return {
    require: ['uibTimepicker', '?^ngModel'],
    restrict: 'A',
    controller: 'UibTimepickerController',
    controllerAs: 'timepicker',
    scope: {},
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
    },
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('uibTypeaheadParser', ['$parse', function($parse) {
    //                      000001111111100000000000002222222200000000000000003333333333333330000000000044444444000
    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error(
            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
              ' but got "' + input + '".');
        }

        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }])

  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
    var HOT_KEYS = [9, 13, 27, 38, 40];
    var eventDebounceTime = 200;
    var modelCtrl, ngModelOptions;
    //SUPPORTED ATTRIBUTES (OPTIONS)

    //minimal no of characters that needs to be entered before typeahead kicks-in
    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
    if (!minLength && minLength !== 0) {
      minLength = 1;
    }

    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
        minLength = !newVal && newVal !== 0 ? 1 : newVal;
    });

    //minimal wait time after last character typed before typeahead kicks-in
    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

    //should it restrict model values to the ones selected from the popup only?
    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
      isEditable = newVal !== false;
    });

    //binding to a variable that indicates if matches are being retrieved asynchronously
    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

    //a function to determine if an event should cause selection
    var isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function(scope, vals) {
      var evt = vals.$event;
      return evt.which === 13 || evt.which === 9;
    };

    //a callback executed when a match is selected
    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

    //should it select highlighted popup value when losing focus?
    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

    //binding to a variable that indicates if there were no results after the query is completed
    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

    var appendTo = attrs.typeaheadAppendTo ?
      originalScope.$eval(attrs.typeaheadAppendTo) : null;

    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

    //If input matches an item of the list exactly, select it automatically
    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

    //binding to a variable that indicates if dropdown is open
    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

    //INTERNAL VARIABLES

    //model setter executed upon match selection
    var parsedModel = $parse(attrs.ngModel);
    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
    var $setModelValue = function(scope, newValue) {
      if (angular.isFunction(parsedModel(originalScope)) &&
        ngModelOptions.getOption('getterSetter')) {
        return invokeModelSetter(scope, {$$$p: newValue});
      }

      return parsedModel.assign(scope, newValue);
    };

    //expressions used by typeahead
    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

    var hasFocus;

    //Used to avoid bug in iOS webview where iOS keyboard does not fire
    //mousedown & mouseup events
    //Issue #3699
    var selected;

    //create a child scope for the typeahead directive so we are not polluting original scope
    //with typeahead-specific data (matches, query etc.)
    var scope = originalScope.$new();
    var offDestroy = originalScope.$on('$destroy', function() {
      scope.$destroy();
    });
    scope.$on('$destroy', offDestroy);

    // WAI-ARIA
    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
    element.attr({
      'aria-autocomplete': 'list',
      'aria-expanded': false,
      'aria-owns': popupId
    });

    var inputsContainer, hintInputElem;
    //add read-only input to show hint
    if (showHint) {
      inputsContainer = angular.element('<div></div>');
      inputsContainer.css('position', 'relative');
      element.after(inputsContainer);
      hintInputElem = element.clone();
      hintInputElem.attr('placeholder', '');
      hintInputElem.attr('tabindex', '-1');
      hintInputElem.val('');
      hintInputElem.css({
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'border-color': 'transparent',
        'box-shadow': 'none',
        'opacity': 1,
        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
        'color': '#999'
      });
      element.css({
        'position': 'relative',
        'vertical-align': 'top',
        'background-color': 'transparent'
      });

      if (hintInputElem.attr('id')) {
        hintInputElem.removeAttr('id'); // remove duplicate id if present.
      }
      inputsContainer.append(hintInputElem);
      hintInputElem.after(element);
    }

    //pop-up element used to display matches
    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
    popUpEl.attr({
      id: popupId,
      matches: 'matches',
      active: 'activeIdx',
      select: 'select(activeIdx, evt)',
      'move-in-progress': 'moveInProgress',
      query: 'query',
      position: 'position',
      'assign-is-open': 'assignIsOpen(isOpen)',
      debounce: 'debounceUpdate'
    });
    //custom item template
    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
    }

    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
    }

    var resetHint = function() {
      if (showHint) {
        hintInputElem.val('');
      }
    };

    var resetMatches = function() {
      scope.matches = [];
      scope.activeIdx = -1;
      element.attr('aria-expanded', false);
      resetHint();
    };

    var getMatchId = function(index) {
      return popupId + '-option-' + index;
    };

    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
    // This attribute is added or removed automatically when the `activeIdx` changes.
    scope.$watch('activeIdx', function(index) {
      if (index < 0) {
        element.removeAttr('aria-activedescendant');
      } else {
        element.attr('aria-activedescendant', getMatchId(index));
      }
    });

    var inputIsExactMatch = function(inputValue, index) {
      if (scope.matches.length > index && inputValue) {
        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
      }

      return false;
    };

    var getMatchesAsync = function(inputValue, evt) {
      var locals = {$viewValue: inputValue};
      isLoadingSetter(originalScope, true);
      isNoResultsSetter(originalScope, false);
      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
        //it might happen that several async queries were in progress if a user were typing fast
        //but we are interested only in responses that correspond to the current view value
        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
        if (onCurrentRequest && hasFocus) {
          if (matches && matches.length > 0) {
            scope.activeIdx = focusFirst ? 0 : -1;
            isNoResultsSetter(originalScope, false);
            scope.matches.length = 0;

            //transform labels
            for (var i = 0; i < matches.length; i++) {
              locals[parserResult.itemName] = matches[i];
              scope.matches.push({
                id: getMatchId(i),
                label: parserResult.viewMapper(scope, locals),
                model: matches[i]
              });
            }

            scope.query = inputValue;
            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
            //due to other elements being rendered
            recalculatePosition();

            element.attr('aria-expanded', true);

            //Select the single remaining option if user input matches
            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(0, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(0, evt);
              }
            }

            if (showHint) {
              var firstLabel = scope.matches[0].label;
              if (angular.isString(inputValue) &&
                inputValue.length > 0 &&
                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
              } else {
                hintInputElem.val('');
              }
            }
          } else {
            resetMatches();
            isNoResultsSetter(originalScope, true);
          }
        }
        if (onCurrentRequest) {
          isLoadingSetter(originalScope, false);
        }
      }, function() {
        resetMatches();
        isLoadingSetter(originalScope, false);
        isNoResultsSetter(originalScope, true);
      });
    };

    // bind events only if appendToBody params exist - performance feature
    if (appendToBody) {
      angular.element($window).on('resize', fireRecalculating);
      $document.find('body').on('scroll', fireRecalculating);
    }

    // Declare the debounced function outside recalculating for
    // proper debouncing
    var debouncedRecalculate = $$debounce(function() {
      // if popup is visible
      if (scope.matches.length) {
        recalculatePosition();
      }

      scope.moveInProgress = false;
    }, eventDebounceTime);

    // Default progress type
    scope.moveInProgress = false;

    function fireRecalculating() {
      if (!scope.moveInProgress) {
        scope.moveInProgress = true;
        scope.$digest();
      }

      debouncedRecalculate();
    }

    // recalculate actual position and set new values to scope
    // after digest loop is popup in right position
    function recalculatePosition() {
      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
      scope.position.top += element.prop('offsetHeight');
    }

    //we need to propagate user's query so we can higlight matches
    scope.query = undefined;

    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
    var timeoutPromise;

    var scheduleSearchWithTimeout = function(inputValue) {
      timeoutPromise = $timeout(function() {
        getMatchesAsync(inputValue);
      }, waitTime);
    };

    var cancelPreviousTimeout = function() {
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }
    };

    resetMatches();

    scope.assignIsOpen = function (isOpen) {
      isOpenSetter(originalScope, isOpen);
    };

    scope.select = function(activeIdx, evt) {
      //called from within the $digest() cycle
      var locals = {};
      var model, item;

      selected = true;
      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
      model = parserResult.modelMapper(originalScope, locals);
      $setModelValue(originalScope, model);
      modelCtrl.$setValidity('editable', true);
      modelCtrl.$setValidity('parse', true);

      onSelectCallback(originalScope, {
        $item: item,
        $model: model,
        $label: parserResult.viewMapper(originalScope, locals),
        $event: evt
      });

      resetMatches();

      //return focus to the input element if a match was selected via a mouse click event
      // use timeout to avoid $rootScope:inprog error
      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
        $timeout(function() { element[0].focus(); }, 0, false);
      }
    };

    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
    element.on('keydown', function(evt) {
      //typeahead is open and an "interesting" key was pressed
      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
        return;
      }

      var shouldSelect = isSelectEvent(originalScope, {$event: evt});

      /**
       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
       * or
       * shift + tab is pressed to bring focus to the previous element
       * then clear the results
       */
      if (scope.activeIdx === -1 && shouldSelect || evt.which === 9 && !!evt.shiftKey) {
        resetMatches();
        scope.$digest();
        return;
      }

      evt.preventDefault();
      var target;
      switch (evt.which) {
        case 27: // escape
          evt.stopPropagation();

          resetMatches();
          originalScope.$digest();
          break;
        case 38: // up arrow
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        case 40: // down arrow
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        default:
          if (shouldSelect) {
            scope.$apply(function() {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(scope.activeIdx, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(scope.activeIdx, evt);
              }
            });
          }
      }
    });

    element.on('focus', function (evt) {
      hasFocus = true;
      if (minLength === 0 && !modelCtrl.$viewValue) {
        $timeout(function() {
          getMatchesAsync(modelCtrl.$viewValue, evt);
        }, 0);
      }
    });

    element.on('blur', function(evt) {
      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
        selected = true;
        scope.$apply(function() {
          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
            $$debounce(function() {
              scope.select(scope.activeIdx, evt);
            }, scope.debounceUpdate.blur);
          } else {
            scope.select(scope.activeIdx, evt);
          }
        });
      }
      if (!isEditable && modelCtrl.$error.editable) {
        modelCtrl.$setViewValue();
        scope.$apply(function() {
          // Reset validity as we are clearing
          modelCtrl.$setValidity('editable', true);
          modelCtrl.$setValidity('parse', true);
        });
        element.val('');
      }
      hasFocus = false;
      selected = false;
    });

    // Keep reference to click handler to unbind it.
    var dismissClickHandler = function(evt) {
      // Issue #3973
      // Firefox treats right click as a click on document
      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
        resetMatches();
        if (!$rootScope.$$phase) {
          originalScope.$digest();
        }
      }
    };

    $document.on('click', dismissClickHandler);

    originalScope.$on('$destroy', function() {
      $document.off('click', dismissClickHandler);
      if (appendToBody || appendTo) {
        $popup.remove();
      }

      if (appendToBody) {
        angular.element($window).off('resize', fireRecalculating);
        $document.find('body').off('scroll', fireRecalculating);
      }
      // Prevent jQuery cache memory leak
      popUpEl.remove();

      if (showHint) {
          inputsContainer.remove();
      }
    });

    var $popup = $compile(popUpEl)(scope);

    if (appendToBody) {
      $document.find('body').append($popup);
    } else if (appendTo) {
      angular.element(appendTo).eq(0).append($popup);
    } else {
      element.after($popup);
    }

    this.init = function(_modelCtrl) {
      modelCtrl = _modelCtrl;
      ngModelOptions = extractOptions(modelCtrl);

      scope.debounceUpdate = $parse(ngModelOptions.getOption('debounce'))(originalScope);

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function(inputValue) {
        hasFocus = true;

        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        }

        if (!inputValue) {
          // Reset in case user had typed something previously.
          modelCtrl.$setValidity('editable', true);
          return null;
        }

        modelCtrl.$setValidity('editable', false);
        return undefined;
      });

      modelCtrl.$formatters.push(function(modelValue) {
        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {
          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);
        }

        //it might happen that we don't have enough info to properly render input value
        //we need to check for this situation and simply return model value if we can't apply custom formatting
        locals[parserResult.itemName] = modelValue;
        candidateViewValue = parserResult.viewMapper(originalScope, locals);
        locals[parserResult.itemName] = undefined;
        emptyViewValue = parserResult.viewMapper(originalScope, locals);

        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
      });
    };

    function extractOptions(ngModelCtrl) {
      var ngModelOptions;

      if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
        // guarantee a value
        ngModelOptions = ngModelCtrl.$options || {};

        // mimic 1.6+ api
        ngModelOptions.getOption = function (key) {
          return ngModelOptions[key];
        };
      } else { // in angular >=1.6 $options is always present
        ngModelOptions = ngModelCtrl.$options;
      }

      return ngModelOptions;
    }
  }])

  .directive('uibTypeahead', function() {
    return {
      controller: 'UibTypeaheadController',
      require: ['ngModel', 'uibTypeahead'],
      link: function(originalScope, element, attrs, ctrls) {
        ctrls[1].init(ctrls[0]);
      }
    };
  })

  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
    return {
      scope: {
        matches: '=',
        query: '=',
        active: '=',
        position: '&',
        moveInProgress: '=',
        select: '&',
        assignIsOpen: '&',
        debounce: '&'
      },
      replace: true,
      templateUrl: function(element, attrs) {
        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
      },
      link: function(scope, element, attrs) {
        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function() {
          var isDropdownOpen = scope.matches.length > 0;
          scope.assignIsOpen({ isOpen: isDropdownOpen });
          return isDropdownOpen;
        };

        scope.isActive = function(matchIdx) {
          return scope.active === matchIdx;
        };

        scope.selectActive = function(matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function(activeIdx, evt) {
          var debounce = scope.debounce();
          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
            $$debounce(function() {
              scope.select({activeIdx: activeIdx, evt: evt});
            }, angular.isNumber(debounce) ? debounce : debounce['default']);
          } else {
            scope.select({activeIdx: activeIdx, evt: evt});
          }
        };
      }
    };
  }])

  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
    return {
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function(scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          var tplEl = angular.element(tplContent.trim());
          element.replaceWith(tplEl);
          $compile(tplEl)(scope);
        });
      }
    };
  }])

  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
    var isSanitizePresent;
    isSanitizePresent = $injector.has('$sanitize');

    function escapeRegexp(queryToEscape) {
      // Regex: capture the whole query string and replace it with the string that will be used to match
      // the results, for example if the capture is "a" the result will be \a
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    function containsHtml(matchItem) {
      return /<.*>/g.test(matchItem);
    }

    return function(matchItem, query) {
      if (!isSanitizePresent && containsHtml(matchItem)) {
        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
      }
      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
      if (!isSanitizePresent) {
        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
      }
      return matchItem;
    };
  }]);

angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/accordion/accordion-group.html",
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
    "  <h4 class=\"panel-title\">\n" +
    "    <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "  </h4>\n" +
    "</div>\n" +
    "<div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
    "  <div class=\"panel-body\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/accordion/accordion.html",
    "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
}]);

angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/alert/alert.html",
    "<button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
    "  <span aria-hidden=\"true\">&times;</span>\n" +
    "  <span class=\"sr-only\">Close</span>\n" +
    "</button>\n" +
    "<div ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/carousel/carousel.html",
    "<div class=\"carousel-inner\" ng-transclude></div>\n" +
    "<a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" +
    "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "  <span class=\"sr-only\">previous</span>\n" +
    "</a>\n" +
    "<a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" +
    "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "  <span class=\"sr-only\">next</span>\n" +
    "</a>\n" +
    "<ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "  <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
    "    <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
    "  </li>\n" +
    "</ol>\n" +
    "");
}]);

angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/carousel/slide.html",
    "<div class=\"text-center\" ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/datepicker/datepicker.html",
    "<div ng-switch=\"datepickerMode\">\n" +
    "  <div uib-daypicker ng-switch-when=\"day\" tabindex=\"0\" class=\"uib-daypicker\"></div>\n" +
    "  <div uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\" class=\"uib-monthpicker\"></div>\n" +
    "  <div uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\" class=\"uib-yearpicker\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/datepicker/day.html",
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></i><span class=\"sr-only\">previous</span></button></th>\n" +
    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i><span class=\"sr-only\">next</span></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/datepicker/month.html",
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></i><span class=\"sr-only\">previous</span></button></th>\n" +
    "      <th colspan=\"{{::yearHeaderColspan}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i><span class=\"sr-only\">next</span></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/popup.html",
    "<div>\n" +
    "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
    "    <li ng-transclude></li>\n" +
    "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
    "      <span class=\"btn-group pull-left\">\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
    "      </span>\n" +
    "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/datepicker/year.html",
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></i><span class=\"sr-only\">previous</span></button></th>\n" +
    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i><span class=\"sr-only\">next</span></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/datepickerPopup/popup.html",
    "<ul role=\"presentation\" class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
    "  <li ng-transclude></li>\n" +
    "  <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
    "    <span class=\"btn-group pull-left\">\n" +
    "      <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
    "      <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
    "    </span>\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/modal/backdrop.html",
    "<div class=\"modal-backdrop\"\n" +
    "     uib-modal-animation-class=\"fade\"\n" +
    "     modal-in-class=\"in\"\n" +
    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
    "></div>\n" +
    "");
}]);

angular.module("uib/template/modal/window.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/modal/window.html",
    "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
    "");
}]);

angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/pager/pager.html",
    "<li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>{{::getText('previous')}}</a></li>\n" +
    "<li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>{{::getText('next')}}</a></li>\n" +
    "");
}]);

angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/pagination/pagination.html",
    "<li role=\"menuitem\" ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>{{::getText('first')}}</a></li>\n" +
    "<li role=\"menuitem\" ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>{{::getText('previous')}}</a></li>\n" +
    "<li role=\"menuitem\" ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\" ng-disabled=\"ngDisabled&&!page.active\" uib-tabindex-toggle>{{page.text}}</a></li>\n" +
    "<li role=\"menuitem\" ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>{{::getText('next')}}</a></li>\n" +
    "<li role=\"menuitem\" ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>{{::getText('last')}}</a></li>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
    "<div class=\"tooltip-arrow\"></div>\n" +
    "<div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip-arrow\"></div>\n" +
    "<div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
    "<div class=\"tooltip-arrow\"></div>\n" +
    "<div class=\"tooltip-inner\"\n" +
    "  uib-tooltip-template-transclude=\"contentExp()\"\n" +
    "  tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/popover/popover-html.html",
    "<div class=\"arrow\"></div>\n" +
    "\n" +
    "<div class=\"popover-inner\">\n" +
    "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/popover/popover-template.html",
    "<div class=\"arrow\"></div>\n" +
    "\n" +
    "<div class=\"popover-inner\">\n" +
    "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"popover-content\"\n" +
    "      uib-tooltip-template-transclude=\"contentExp()\"\n" +
    "      tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/popover/popover.html",
    "<div class=\"arrow\"></div>\n" +
    "\n" +
    "<div class=\"popover-inner\">\n" +
    "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/progressbar/bar.html",
    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/progressbar/progress.html",
    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
}]);

angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/progressbar/progressbar.html",
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" +
    "</span>\n" +
    "");
}]);

angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/tabs/tab.html",
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
    "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\"\n" +
    "         ng-repeat=\"tab in tabset.tabs\"\n" +
    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
    "         uib-tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/timepicker/timepicker.html",
    "<table class=\"uib-timepicker\">\n" +
    "  <tbody>\n" +
    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td>&nbsp;</td>\n" +
    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td ng-show=\"showMeridian\"></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
    "        <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td class=\"uib-separator\">:</td>\n" +
    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
    "        <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
    "        <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
    "    </tr>\n" +
    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td>&nbsp;</td>\n" +
    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td ng-show=\"showMeridian\"></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/typeahead/typeahead-match.html",
    "<a href\n" +
    "   tabindex=\"-1\"\n" +
    "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" +
    "   ng-attr-title=\"{{match.label}}\"></a>\n" +
    "");
}]);

angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li class=\"uib-typeahead-match\" ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _confirmation = __webpack_require__(7);

var _confirmation2 = _interopRequireDefault(_confirmation);

var _headsup = __webpack_require__(9);

var _headsup2 = _interopRequireDefault(_headsup);

var _date = __webpack_require__(11);

var _date2 = _interopRequireDefault(_date);

var _selectlist = __webpack_require__(24);

var _selectlist2 = _interopRequireDefault(_selectlist);

var _stringedit = __webpack_require__(26);

var _stringedit2 = _interopRequireDefault(_stringedit);

var _inputboxes = __webpack_require__(28);

var _inputboxes2 = _interopRequireDefault(_inputboxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dryToastTemplate = __webpack_require__(30);
var _toast = void 0;

var curtainTemplate = __webpack_require__(31);
var _curtain = void 0; // an angular.element

function removeCurtain() {
    if (_curtain) {
        angular.element(document).find('body').eq(0).removeClass('curtain-open');
        _curtain.remove();
        _curtain = null;
    }
}

var UIBHelper = function () {
    function UIBHelper($log, $uibModal, $timeout, $templateCache) {
        _classCallCheck(this, UIBHelper);

        this.$log = $log;
        this.$uibModal = $uibModal;
        this.$timeout = $timeout;
        this.$templateCache = $templateCache;

        // Strap on the individual modals here and bind to `this` (critical)

        // Confirm dialog
        this.confirmModal = _confirmation2.default.bind(this);
        // Heads up dialog
        this.headsupModal = _headsup2.default.bind(this);
        // synonym for heads up
        this.headsUpModal = _headsup2.default.bind(this);
        // date modal
        this.dateModal = _date2.default.bind(this);
        // select list
        this.selectListModal = _selectlist2.default.bind(this);
        // string edit
        this.stringEditModal = _stringedit2.default.bind(this);
        // input boxes
        this.inputBoxesModal = _inputboxes2.default.bind(this);
    }

    /**
     * Throws up a toast like Android
     * @param {string} msg
     * @param {number} delay in ms
     * @returns {{dismiss: dismissT}}
     */


    _createClass(UIBHelper, [{
        key: 'dryToast',
        value: function dryToast(msg, delay) {

            // NOTE: This code is here vs a separate file since it needed a bunch of angular
            // dependencies.

            var toastHTML = this.$templateCache.get(dryToastTemplate);
            var m = msg || "Have a nice day :)";
            toastHTML = toastHTML.replace('$$message$$', m);
            _toast = angular.element(toastHTML);

            var body = angular.element(document).find('body').eq(0);

            body.append(_toast);

            var d = delay | 1000;

            function dismissT() {
                _toast.remove();
            }

            this.$timeout(dismissT, d);

            return {
                dismiss: dismissT
            };
        }
    }, {
        key: 'curtainModal',
        value: function curtainModal(title) {

            // NOTE: This code is here vs a separate file since it needed a bunch of angular
            // dependencies.

            var chtml = this.$templateCache.get(curtainTemplate);
            chtml = chtml.replace('$$message$$', title || '');
            _curtain = angular.element(chtml);

            var body = angular.element(document).find('body').eq(0);

            body.append(_curtain);
            body.addClass('curtain-open');

            return {
                dismiss: removeCurtain
            };
        }
    }, {
        key: 'dismissCurtain',
        value: function dismissCurtain() {
            removeCurtain();
        }
    }]);

    return UIBHelper;
}();

exports.default = UIBHelper;


UIBHelper.$inject = ['$log', '$uibModal', '$timeout', '$templateCache'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (title, body, confirmValue) {

    // `this` gets set up correctly by the parent class `uibhelper`
    var modalInstance = this.$uibModal.open({
        templateUrl: template,
        controller: function controller($scope, $uibModalInstance, params) {

            $scope.modalUi = { title: params.title, body: params.body };

            $scope.ok = function () {
                $uibModalInstance.close(params.confirmValue);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        },
        resolve: {
            params: function params() {
                return { title: title, body: body, confirmValue: confirmValue };
            }
        }
    });

    return modalInstance.result;
};

var template = __webpack_require__(8);

/**
 *
 * Provides a very basic UIB confirm modal with almost no options. Returns the result promise.
 *
 * Usage:  uibHelper.confirmModal("My Title", "Body Text", true)
 *            .then( function(confirmed){
 *              // do something with confirmation
 *                        });
 *
 * @param {String} title
 * @param {String} body
 * @param {*} confirmValue
 * @returns {Promise}
 */

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/confirmation/confirmmodal.template.html';
var html = "<div class=\"modal-header\">\n    <h3 class=\"modal-title\">{{ modalUi.title }}</h3>\n</div>\n<div class=\"modal-body\">\n    {{ modalUi.body }}\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\n    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (title, body) {

    var modalInstance = this.$uibModal.open({
        templateUrl: template,
        controller: function controller($scope, $uibModalInstance, params) {

            $scope.modalUi = { title: params.title, body: params.body };

            $scope.ok = function () {
                $uibModalInstance.close();
            };
        },
        resolve: {
            params: function params() {
                return { title: title, body: body };
            }
        }
    });

    return modalInstance.result;
};

var template = __webpack_require__(10);

/**
 *
 * Provides a very basic UIB heads-up modal with almost no options. Returns the result promise.
 *
 * Usage:  uibHelper.headsupModal("My Title", "Body Text")
 *          .then( function(){
 *          });
 *
 * @param {String} title
 * @param {String} body
 * @returns {Promise}
 */

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/headsup/headsupmodal.template.html';
var html = "<div class=\"modal-header\">\n    <h3 class=\"modal-title\">{{ modalUi.title }}</h3>\n</div>\n<div class=\"modal-body\">\n    {{ modalUi.body }}\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (title, body, currentDateChoice) {

    var modalInstance = this.$uibModal.open({
        templateUrl: template,
        controller: function controller($scope, $uibModalInstance, params) {

            if (!(0, _isDate3.default)(params.currentDateChoice)) {
                params.currentDateChoice ? params.currentDateChoice = new Date(params.currentDateChoice) : params.currentDateChoice = new Date();
            }

            $scope.modalUi = {
                title: params.title,
                body: params.body,
                date: params.currentDateChoice,
                datePickerOptions: {
                    minDate: new Date(),
                    showWeeks: true
                },
                time: new Date(params.currentDateChoice)

            };

            $scope.ok = function () {
                $scope.modalUi.date.setHours($scope.modalUi.time.getHours());
                $scope.modalUi.date.setMinutes($scope.modalUi.time.getMinutes());
                $uibModalInstance.close($scope.modalUi.date);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        },
        resolve: {
            params: function params() {
                return { title: title, body: body, currentDateChoice: currentDateChoice };
            }
        }
    });

    return modalInstance.result;
};

var _isDate2 = __webpack_require__(12);

var _isDate3 = _interopRequireDefault(_isDate2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = __webpack_require__(23);

/**
 *
 * Provides a very  UIB  modal to pick a date. Returns the result promise.
 *
 * Usage:  uibHelper.dateModal("My Title", "Body Text", currentDateChoice)
 *          .then( function(newDate){
 *              // do something with newDate
 *          });
 *
 * @param {String} title
 * @param {String} body
 * @param {Date|String} currentDateChoice
 * @returns {Promise}
 */

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(13),
    baseUnary = __webpack_require__(20),
    nodeUtil = __webpack_require__(21);

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

module.exports = isDate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

module.exports = baseIsDate;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0),
    getRawTag = __webpack_require__(17),
    objectToString = __webpack_require__(18);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(1);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/date/datemodal.template.html';
var html = "<div class=\"modal-header\">\n    <h3 class=\"modal-title\">{{ modalUi.title }}</h3>\n</div>\n<div class=\"modal-body\">\n    {{ modalUi.body }}\n    <!--\n    <uib-datepicker ng-model=\"modalUi.date\" class=\"well well-sm\" datepicker-options=\"options\"></uib-datepicker>\n    -->\n    <p class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" uib-datepicker-popup=\"MMMM-dd-yyyy\" ng-model=\"modalUi.date\"\n               is-open=\"modalUi.dateOpened\"\n               datepicker-options=\"modalUi.datePickerOptions\" ng-required=\"true\" close-text=\"Close\"/>\n          <span class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"modalUi.dateOpened = !modalUi.dateOpened\"><i\n                    class=\"glyphicon glyphicon-calendar\"></i></button>\n          </span>\n    </p>\n    <uib-timepicker ng-model=\"modalUi.time\" hour-step=\"1\" minute-step=\"15\"\n                    show-meridian=\"true\"></uib-timepicker>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\n    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (title, body, choiceArray, currentChoiceIdx) {

    var modalInstance = this.$uibModal.open({
        templateUrl: template,
        controller: function controller($scope, $uibModalInstance, params) {

            $scope.modalUi = {
                title: params.title, body: params.body, choices: params.choices,
                currentChoice: params.currentChoice, showChoice: !params.body
            };

            $scope.ok = function () {
                $uibModalInstance.close($scope.modalUi.currentChoice);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        },
        resolve: {
            params: function params() {
                return { title: title, body: body, choices: choiceArray, currentChoice: currentChoiceIdx };
            }
        }
    });

    return modalInstance.result;
};

var template = __webpack_require__(25);

/**
 *
 * Provides a UIB  from a list of objects. Returns the result promise.
 *
 * Usage:  uibHelper.selectListModal("My Title", "Body Text", [[ "choice 1" "beer"], ["choice 2", "wine"]],
 * 1)
 *          .then( function(newDate){
 *              // do something with newDate
 *          });
 *
 * @param {string} title
 * @param {string} body
 * @param {string[]} choiceArray [ [ field1, field2, ... ], ... ]
 * @param {number} currentChoiceIdx
 * @returns {Promise}
 */

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/selectlist/selectlistmodal.template.html';
var html = "<style>\n    .slm-pick-item {\n        color: teal;\n        padding: 10px 0 10px 5px;\n        margin-left: 0;\n    }\n\n    .slm-picked {\n        background: #696969;\n        color: white;\n        transition: all 0.5s;\n    }\n\n    .slm-no-num {\n        list-style-type: none;\n        padding: 10px;\n    }\n</style>\n\n<div class=\"modal-header\">\n    <h3 class=\"modal-title\">{{ modalUi.title }}</h3>\n</div>\n<div class=\"modal-body\" ng-show=\"showChoice\">\n    {{ modalUi.choices[modalUi.currentChoice] }}\n</div>\n<div class=\"modal-body\" ng-hide=\"showChoice\">\n    {{ modalUi.body }}\n</div>\n<ol class=\"slm-no-num\" style=\"margin: 10px; border: 1px solid #cacaca;\">\n    <li ng-repeat=\"choice in modalUi.choices\" class=\"slm-pick-item\"\n        ng-class=\"{ 'slm-picked': modalUi.currentChoice==$index}\"\n        ng-click=\"modalUi.currentChoice = $index\">{{ choice }}</li>\n</ol>\n\n\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\n    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (title, body, string2Edit, placeholder) {

    var modalInstance = this.$uibModal.open({
        templateUrl: template,
        controller: function controller($scope, $uibModalInstance, params) {

            $scope.modalUi = {
                title: params.title,
                body: params.body,
                editString: params.string2Edit,
                placeholder: params.placeholder || params.title
            };

            $scope.ok = function () {
                $uibModalInstance.close($scope.modalUi.editString);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        },
        resolve: {
            params: function params() {
                return { title: title, body: body, string2Edit: string2Edit, placeholder: placeholder };
            }
        }
    });

    return modalInstance.result;
};

var template = __webpack_require__(27);

/**
 *
 * Provides a very  UIB  modal to edit a single string. Returns the result promise.
 *
 * Usage:  uibHelper.stringEditModal("My Title", "Body Text", string2Edit)
 *          .then( function(confirmed){
 *              // do something with confirmation
 *          });
 *
 * @param {string} title
 * @param {string} body
 * @param {string} string2Edit
 * @param {string} placeholder
 * @returns {Promise}
 */

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/stringedit/stringedit.modal.js';
var html = "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (title, body, string2Edit, placeholder) {\n\n    var modalInstance = this.$uibModal.open({\n        templateUrl: template,\n        controller: function controller($scope, $uibModalInstance, params) {\n\n            $scope.modalUi = {\n                title: params.title,\n                body: params.body,\n                editString: params.string2Edit,\n                placeholder: params.placeholder || params.title\n            };\n\n            $scope.ok = function () {\n                $uibModalInstance.close($scope.modalUi.editString);\n            };\n\n            $scope.cancel = function () {\n                $uibModalInstance.dismiss('cancel');\n            };\n        },\n        resolve: {\n            params: function params() {\n                return { title: title, body: body, string2Edit: string2Edit, placeholder: placeholder };\n            }\n        }\n    });\n\n    return modalInstance.result;\n};\n\nvar template = require('ngtemplate-loader!html-loader!./stringedit.modal');\n\n/**\n *\n * Provides a very  UIB  modal to edit a single string. Returns the result promise.\n *\n * Usage:  uibHelper.stringEditModal(\"My Title\", \"Body Text\", string2Edit)\n *          .then( function(confirmed){\n *              // do something with confirmation\n *          });\n *\n * @param {string} title\n * @param {string} body\n * @param {string} string2Edit\n * @param {string} placeholder\n * @returns {Promise}\n */";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (title, body, fieldsArray) {

    var modalInstance = this.$uibModal.open({
        templateUrl: template,
        controller: function controller($scope, $uibModalInstance, params) {

            $scope.modalUi = {
                title: params.title,
                body: params.body,
                fieldsArray: params.fieldsArray
            };

            $scope.ok = function () {
                var rval = {};
                $scope.modalUi.fieldsArray.forEach(function (f) {
                    rval[f.field] = f.value;
                });
                $uibModalInstance.close(rval);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        },
        resolve: {
            params: function params() {
                return { title: title, body: body, fieldsArray: fieldsArray };
            }
        }
    });

    return modalInstance.result;
};

var template = __webpack_require__(29);

/**
 *
 * Provides a  UIB  modal to edit a series of strings. Returns the result promise.
 *
 * Usage:  uibHelper.inputBoxesModal("My Title", "Body Text", paramsArray)
 *          .then( function(confirmed){
 *              // do something with confirmation
 *          });
 *
 * @param {string} title
 * @param {string} body
 * @param { object[]} fieldsArray [ { label:"First Name", placeholder: "LaLa", type: text, field: 'firstName', value:
 *     'John' }]
 * @returns {Promise}
 *
 */

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/inputboxes/inputboxes.modal.js';
var html = "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (title, body, fieldsArray) {\n\n    var modalInstance = this.$uibModal.open({\n        templateUrl: template,\n        controller: function controller($scope, $uibModalInstance, params) {\n\n            $scope.modalUi = {\n                title: params.title,\n                body: params.body,\n                fieldsArray: params.fieldsArray\n            };\n\n            $scope.ok = function () {\n                var rval = {};\n                $scope.modalUi.fieldsArray.forEach(function (f) {\n                    rval[f.field] = f.value;\n                });\n                $uibModalInstance.close(rval);\n            };\n\n            $scope.cancel = function () {\n                $uibModalInstance.dismiss('cancel');\n            };\n        },\n        resolve: {\n            params: function params() {\n                return { title: title, body: body, fieldsArray: fieldsArray };\n            }\n        }\n    });\n\n    return modalInstance.result;\n};\n\nvar template = require('ngtemplate-loader!html-loader!./inputboxes.modal');\n\n/**\n *\n * Provides a  UIB  modal to edit a series of strings. Returns the result promise.\n *\n * Usage:  uibHelper.inputBoxesModal(\"My Title\", \"Body Text\", paramsArray)\n *          .then( function(confirmed){\n *              // do something with confirmation\n *          });\n *\n * @param {string} title\n * @param {string} body\n * @param { object[]} fieldsArray [ { label:\"First Name\", placeholder: \"LaLa\", type: text, field: 'firstName', value:\n *     'John' }]\n * @returns {Promise}\n *\n */";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/drytoast/dry-toast.template.html';
var html = "<style>\n\n    .toast-holder {\n        position: absolute;\n        bottom: 2vh;\n        color: white;\n        width: 100vw;\n    }\n\n    .toast {\n        width: 90%;\n        padding: 10px;\n        border-radius: 5px;\n        background: rgba(47, 37, 41, 0.7);\n        margin: 0 auto 0 auto;\n        font-size: 1.5rem;\n        font-weight: bold;\n        font-family: Arial, SansSerif;\n        -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);\n        -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);\n        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    }\n\n\n</style>\n\n<div class=\"toast-holder\">\n    <div class=\"toast\">\n        <p style=\"text-align: center\">$$message$$</p>\n    </div>\n</div>\n\n\n\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var path = '/Users/mkahn/Developer/Ourglass/cloud/blueline2/OgUiMobile/src/components/modals/curtain/curtain.template.html';
var html = "<style>\n\n    .curtain {\n\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        background: rgba(0, 0, 0, 0.7);\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n\n    }\n\n    .spinner-holder {\n        width: 80px;\n        height: 80px;\n        background-color: #00A000;\n        padding: 5px;\n        border-radius: 5px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .spinner {\n        width: 40px;\n        height: 40px;\n        /*position: relative;*/\n        text-align: center;\n        margin-bottom: 8px;\n\n        -webkit-animation: sk-rotate 2.0s infinite linear;\n        animation: sk-rotate 2.0s infinite linear;\n    }\n\n    .dot1, .dot2 {\n        width: 60%;\n        height: 60%;\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        background-color: #ffffff;\n        border-radius: 100%;\n\n        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n        animation: sk-bounce 2.0s infinite ease-in-out;\n    }\n\n    .dot2 {\n        top: auto;\n        bottom: 0;\n        -webkit-animation-delay: -1.0s;\n        animation-delay: -1.0s;\n    }\n\n    @-webkit-keyframes sk-rotate {\n        100% {\n            -webkit-transform: rotate(360deg)\n        }\n    }\n\n    @keyframes sk-rotate {\n        100% {\n            transform: rotate(360deg);\n            -webkit-transform: rotate(360deg)\n        }\n    }\n\n    @-webkit-keyframes sk-bounce {\n        0%, 100% {\n            -webkit-transform: scale(0.0)\n        }\n        50% {\n            -webkit-transform: scale(1.0)\n        }\n    }\n\n    @keyframes sk-bounce {\n        0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n        }\n        50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n        }\n    }\n</style>\n<div class=\"curtain\">\n    <div class=\"spinner-holder\">\n        <div class=\"spinner\">\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n        </div>\n    </div>\n    <h3>$$message$$</h3>\n\n</div>\n\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjMyMzg4OGNlZTg5NTM1YzMzOGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29ndWltb2JpbGUubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5ndWxhci11aS1ib290c3RyYXAvZGlzdC91aS1ib290c3RyYXAtdHBscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvdWliaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFscy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLm1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFscy9jb25maXJtYXRpb24vY29uZmlybW1vZGFsLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL2hlYWRzdXAvaGVhZHN1cC5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvaGVhZHN1cC9oZWFkc3VwbW9kYWwudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvZGF0ZS9kYXRlLm1vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNEYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRlL2RhdGVtb2RhbC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFscy9zZWxlY3RsaXN0L3NlbGVjdGxpc3QubW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL3NlbGVjdGxpc3Qvc2VsZWN0bGlzdG1vZGFsLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL3N0cmluZ2VkaXQvc3RyaW5nZWRpdC5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvc3RyaW5nZWRpdC9zdHJpbmdlZGl0Lm1vZGFsLmpzP2IwNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL2lucHV0Ym94ZXMvaW5wdXRib3hlcy5tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvaW5wdXRib3hlcy9pbnB1dGJveGVzLm1vZGFsLmpzPzI1OTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL2RyeXRvYXN0L2RyeS10b2FzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFscy9jdXJ0YWluL2N1cnRhaW4udGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhbmd1bGFyIiwib2dVaU1vYmlsZU1vZHVsZSIsIm1vZHVsZSIsInNlcnZpY2UiLCJkcnlUb2FzdFRlbXBsYXRlIiwicmVxdWlyZSIsIl90b2FzdCIsImN1cnRhaW5UZW1wbGF0ZSIsIl9jdXJ0YWluIiwicmVtb3ZlQ3VydGFpbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImZpbmQiLCJlcSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiVUlCSGVscGVyIiwiJGxvZyIsIiR1aWJNb2RhbCIsIiR0aW1lb3V0IiwiJHRlbXBsYXRlQ2FjaGUiLCJjb25maXJtTW9kYWwiLCJiaW5kIiwiaGVhZHN1cE1vZGFsIiwiaGVhZHNVcE1vZGFsIiwiZGF0ZU1vZGFsIiwic2VsZWN0TGlzdE1vZGFsIiwic3RyaW5nRWRpdE1vZGFsIiwiaW5wdXRCb3hlc01vZGFsIiwibXNnIiwiZGVsYXkiLCJ0b2FzdEhUTUwiLCJnZXQiLCJtIiwicmVwbGFjZSIsImJvZHkiLCJhcHBlbmQiLCJkIiwiZGlzbWlzc1QiLCJkaXNtaXNzIiwidGl0bGUiLCJjaHRtbCIsImFkZENsYXNzIiwiJGluamVjdCIsImNvbmZpcm1WYWx1ZSIsIm1vZGFsSW5zdGFuY2UiLCJvcGVuIiwidGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkdWliTW9kYWxJbnN0YW5jZSIsInBhcmFtcyIsIm1vZGFsVWkiLCJvayIsImNsb3NlIiwiY2FuY2VsIiwicmVzb2x2ZSIsInJlc3VsdCIsImN1cnJlbnREYXRlQ2hvaWNlIiwiRGF0ZSIsImRhdGUiLCJkYXRlUGlja2VyT3B0aW9ucyIsIm1pbkRhdGUiLCJzaG93V2Vla3MiLCJ0aW1lIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiY2hvaWNlQXJyYXkiLCJjdXJyZW50Q2hvaWNlSWR4IiwiY2hvaWNlcyIsImN1cnJlbnRDaG9pY2UiLCJzaG93Q2hvaWNlIiwic3RyaW5nMkVkaXQiLCJwbGFjZWhvbGRlciIsImVkaXRTdHJpbmciLCJmaWVsZHNBcnJheSIsInJ2YWwiLCJmb3JFYWNoIiwiZiIsImZpZWxkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDU0E7Ozs7QUFDQTs7Ozs7O0FBYkE7Ozs7Ozs7Ozs7OztBQWdCQSxDQUFDLFVBQVdBLE1BQVgsRUFBbUJDLE9BQW5CLEVBQTZCOztBQUUxQjs7O0FBR0EsTUFBTUMsbUJBQW1CRCxRQUFRRSxNQUFSLENBQWdCLFlBQWhCLEVBQThCLDhCQUE5QixDQUF6Qjs7QUFFQUQsbUJBQWlCRSxPQUFqQixDQUEwQixXQUExQjtBQUdILENBVkQsRUFVSUosTUFWSixFQVVZQSxPQUFPQyxPQVZuQixFOzs7Ozs7QUNoQkE7O0FBRUE7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpREFBaUQsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGdCQUFnQjs7QUFFakQ7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBLDJFQUEyRSxXQUFXO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QixpQkFBaUIsU0FBUztBQUMxQjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QixpQkFBaUIsU0FBUztBQUMxQjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUVEO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9EQUFvRCwrQkFBK0IsRUFBRTtBQUNyRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFxRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sSUFBSTtBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTs7QUFFbEQseURBQXlELFFBQVE7O0FBRWpFLGlDQUFpQyxRQUFROztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0RBQW9EO0FBQ3ZGLGFBQWE7QUFDYixtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBaUQ7QUFDM0U7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0Q0FBNEM7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBMkQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7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QUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBbUQ7QUFDL0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEVBQTBFLG1CQUFt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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvQkFBb0IsRUFBRTtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBdUQsWUFBWTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxPQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0QsYUFBYTtBQUNiLFdBQVc7QUFDWCwwQkFBMEIsK0JBQStCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQSw2SEFBNkg7QUFDN0g7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsOEJBQThCLGFBQWEscUJBQXFCLFFBQVE7QUFDeEU7QUFDQSw0RUFBNEUsUUFBUSxxQkFBcUIsV0FBVyxrTUFBa00seUJBQXlCLEtBQUssU0FBUztBQUM3VjtBQUNBO0FBQ0EsaUJBQWlCLFdBQVcsdUJBQXVCLGFBQWEsbUJBQW1CLFNBQVM7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxRkFBcUYsZUFBZTtBQUNwRyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDZGQUE2Riw2QkFBNkI7QUFDMUg7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLDZCQUE2QjtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RiwwQkFBMEI7QUFDdEgseUNBQXlDLGNBQWMsTUFBTSxpQkFBaUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhDQUE4QyxZQUFZLG1DQUFtQyxjQUFjO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUIsa0JBQWtCLFlBQVksaU9BQWlPLE9BQU87QUFDbFQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsY0FBYyxLQUFLLGNBQWM7QUFDNUk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsdUJBQXVCO0FBQ3pGO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvREFBb0QsS0FBSyxZQUFZO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWSxtQ0FBbUMsY0FBYztBQUMzRztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCLGtCQUFrQixZQUFZLGlPQUFpTyxPQUFPO0FBQ3RUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0JBQXdCLEtBQUssWUFBWTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFLQUFxSyxzQkFBc0I7QUFDM0wsbUhBQW1ILG9CQUFvQjtBQUN2STtBQUNBLHNIQUFzSCxvQkFBb0I7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWSxtQ0FBbUMsY0FBYztBQUMzRztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZSxrQkFBa0IsWUFBWSxpT0FBaU8sT0FBTztBQUNoVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QixLQUFLLFlBQVk7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUtBQW1LLHNCQUFzQjtBQUN6TCxpSEFBaUgsb0JBQW9CO0FBQ3JJO0FBQ0Esb0hBQW9ILG9CQUFvQjtBQUN4STtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQStDO0FBQ3JFO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxpQ0FBaUMsNkJBQTZCO0FBQzlEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EscUJBQXFCLG9EQUFvRCxvSEFBb0gsdUJBQXVCO0FBQ3BOLHFCQUFxQiw0Q0FBNEMsZ0hBQWdILG1CQUFtQjtBQUNwTTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlFQUFpRSxtQ0FBbUMsd0lBQXdJLG9CQUFvQjtBQUNoUSxrRUFBa0UsbUNBQW1DLDhJQUE4SSx1QkFBdUI7QUFDMVEsbUZBQW1GLHVEQUF1RCxpSkFBaUosV0FBVztBQUN0UyxrRUFBa0UsK0JBQStCLDBJQUEwSSxtQkFBbUI7QUFDOVAsaUVBQWlFLCtCQUErQiw0SUFBNEksbUJBQW1CO0FBQy9QO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxvSEFBb0gsT0FBTyx5Q0FBeUMsS0FBSyxlQUFlLDZDQUE2QyxzQkFBc0Isb0JBQW9CLHdCQUF3QixTQUFTO0FBQ2hUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsK0RBQStELFNBQVM7QUFDeEUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzSEFBc0gsT0FBTyx5Q0FBeUMsS0FBSyxlQUFlLDZDQUE2QyxzQkFBc0Isb0JBQW9CLHdCQUF3QixTQUFTO0FBQ2xUO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwySUFBMkksY0FBYyxxQkFBcUIsT0FBTyxzQkFBc0IsT0FBTztBQUNsTixtRkFBbUYsOEJBQThCO0FBQ2pILDJPQUEyTyxTQUFTO0FBQ3BQO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pELDJGQUEyRixTQUFTO0FBQ3BHO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUIsZUFBZSxvREFBb0Q7QUFDdkg7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDZCQUE2QjtBQUN2SCxxQkFBcUI7QUFDckIsOEZBQThGLCtCQUErQjtBQUM3SCw2Q0FBNkM7QUFDN0Msc0hBQXNILCtCQUErQjtBQUNySjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMEJBQTBCO0FBQ3pGLG9NQUFvTSxZQUFZO0FBQ2hOO0FBQ0E7QUFDQSxpRUFBaUUsNEJBQTRCO0FBQzdGLHdNQUF3TSxZQUFZO0FBQ3BOO0FBQ0E7QUFDQSxpRUFBaUUsNEJBQTRCO0FBQzdGLHNNQUFzTSxZQUFZO0FBQ2xOO0FBQ0EscUdBQXFHLDZCQUE2Qix1SEFBdUgsWUFBWSxLQUFLLFVBQVU7QUFDcFI7QUFDQTtBQUNBLDBGQUEwRiw2QkFBNkI7QUFDdkgscUJBQXFCO0FBQ3JCLDhGQUE4RiwrQkFBK0I7QUFDN0gsNkNBQTZDO0FBQzdDLHNIQUFzSCwrQkFBK0I7QUFDcko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EscUZBQXFGLHFEQUFxRCxvQ0FBb0MsV0FBVztBQUN6TCxzR0FBc0csMEJBQTBCLDBHQUEwRyxZQUFZO0FBQ3RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHdEQUF3RCw4S0FBOEssdUNBQXVDLCtCQUErQixXQUFXLGlDQUFpQyxFQUFFO0FBQzFWLDBEQUEwRCxtS0FBbUssWUFBWSxtREFBbUQsZ0JBQWdCLHFCQUFxQixXQUFXLFdBQVcsbUNBQW1DLEVBQUU7QUFDNVgsd0RBQXdELDRKQUE0Six5QkFBeUIsNkJBQTZCLDZCQUE2Qix1QkFBdUIseUJBQXlCLGdDQUFnQyw2QkFBNkIsdUJBQXVCLHNCQUFzQix1QkFBdUIsNEJBQTRCLHFDQUFxQyw0QkFBNEIsV0FBVyxpQ0FBaUMsRUFBRTtBQUNubUIsK0RBQStELGlMQUFpTCxjQUFjLFdBQVcsVUFBVSxnQkFBZ0Isc0JBQXNCLFdBQVcsd0NBQXdDLEVBQUU7QUFDOVcsdURBQXVELHF5RkFBcXlGLFNBQVMsWUFBWSxVQUFVLFdBQVcsVUFBVSxrR0FBa0csMEJBQTBCLFdBQVcsZ0NBQWdDLEVBQUU7QUFDempHLDBEQUEwRCx3SkFBd0osWUFBWSxXQUFXLG1DQUFtQyxFQUFFO0FBQzlRLHlEQUF5RCwyS0FBMkssZUFBZSxXQUFXLGtDQUFrQyxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7OztBQzFuUGxTOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJSSxtQkFBbUIsbUJBQUFDLENBQVMsRUFBVCxDQUF2QjtBQUNBLElBQUlDLGVBQUo7O0FBRUEsSUFBSUMsa0JBQWtCLG1CQUFBRixDQUFTLEVBQVQsQ0FBdEI7QUFDQSxJQUFJRyxpQkFBSixDLENBQWM7O0FBRWQsU0FBU0MsYUFBVCxHQUF3QjtBQUNwQixRQUFJRCxRQUFKLEVBQWE7QUFDVFIsZ0JBQVFVLE9BQVIsQ0FBaUJDLFFBQWpCLEVBQTRCQyxJQUE1QixDQUFrQyxNQUFsQyxFQUEyQ0MsRUFBM0MsQ0FBK0MsQ0FBL0MsRUFBbURDLFdBQW5ELENBQWdFLGNBQWhFO0FBQ0FOLGlCQUFTTyxNQUFUO0FBQ0FQLG1CQUFXLElBQVg7QUFDSDtBQUNKOztJQUVvQlEsUztBQUVqQix1QkFBYUMsSUFBYixFQUFtQkMsU0FBbkIsRUFBOEJDLFFBQTlCLEVBQXdDQyxjQUF4QyxFQUF5RDtBQUFBOztBQUVyRCxhQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7O0FBRUE7O0FBRUE7QUFDQSxhQUFLQyxZQUFMLEdBQW9CLHVCQUFjQyxJQUFkLENBQW9CLElBQXBCLENBQXBCO0FBQ0E7QUFDQSxhQUFLQyxZQUFMLEdBQW9CLGtCQUFjRCxJQUFkLENBQW9CLElBQXBCLENBQXBCO0FBQ0E7QUFDQSxhQUFLRSxZQUFMLEdBQW9CLGtCQUFjRixJQUFkLENBQW9CLElBQXBCLENBQXBCO0FBQ0E7QUFDQSxhQUFLRyxTQUFMLEdBQWlCLGVBQVdILElBQVgsQ0FBZ0IsSUFBaEIsQ0FBakI7QUFDQTtBQUNBLGFBQUtJLGVBQUwsR0FBdUIscUJBQWlCSixJQUFqQixDQUFzQixJQUF0QixDQUF2QjtBQUNBO0FBQ0EsYUFBS0ssZUFBTCxHQUF1QixxQkFBaUJMLElBQWpCLENBQXNCLElBQXRCLENBQXZCO0FBQ0E7QUFDQSxhQUFLTSxlQUFMLEdBQXVCLHFCQUFpQk4sSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkI7QUFFSDs7QUFFRDs7Ozs7Ozs7OztpQ0FNU08sRyxFQUFLQyxLLEVBQU07O0FBRWhCO0FBQ0E7O0FBRUEsZ0JBQUlDLFlBQVksS0FBS1gsY0FBTCxDQUFvQlksR0FBcEIsQ0FBeUI1QixnQkFBekIsQ0FBaEI7QUFDQSxnQkFBTTZCLElBQUlKLE9BQU8sb0JBQWpCO0FBQ0FFLHdCQUFZQSxVQUFVRyxPQUFWLENBQW1CLGFBQW5CLEVBQWtDRCxDQUFsQyxDQUFaO0FBQ0EzQixxQkFBU04sUUFBUVUsT0FBUixDQUFpQnFCLFNBQWpCLENBQVQ7O0FBRUEsZ0JBQU1JLE9BQU9uQyxRQUFRVSxPQUFSLENBQWlCQyxRQUFqQixFQUE0QkMsSUFBNUIsQ0FBa0MsTUFBbEMsRUFBMkNDLEVBQTNDLENBQStDLENBQS9DLENBQWI7O0FBRUFzQixpQkFBS0MsTUFBTCxDQUFhOUIsTUFBYjs7QUFFQSxnQkFBTStCLElBQUlQLFFBQVEsSUFBbEI7O0FBRUEscUJBQVNRLFFBQVQsR0FBb0I7QUFDaEJoQyx1QkFBT1MsTUFBUDtBQUNIOztBQUVELGlCQUFLSSxRQUFMLENBQWVtQixRQUFmLEVBQXlCRCxDQUF6Qjs7QUFFQSxtQkFBTztBQUNIRSx5QkFBU0Q7QUFETixhQUFQO0FBR0g7OztxQ0FFY0UsSyxFQUFROztBQUVuQjtBQUNBOztBQUVBLGdCQUFJQyxRQUFRLEtBQUtyQixjQUFMLENBQW9CWSxHQUFwQixDQUF5QnpCLGVBQXpCLENBQVo7QUFDQWtDLG9CQUFRQSxNQUFNUCxPQUFOLENBQWUsYUFBZixFQUE4Qk0sU0FBUyxFQUF2QyxDQUFSO0FBQ0FoQyx1QkFBV1IsUUFBUVUsT0FBUixDQUFpQitCLEtBQWpCLENBQVg7O0FBRUEsZ0JBQU1OLE9BQU9uQyxRQUFRVSxPQUFSLENBQWlCQyxRQUFqQixFQUE0QkMsSUFBNUIsQ0FBa0MsTUFBbEMsRUFBMkNDLEVBQTNDLENBQStDLENBQS9DLENBQWI7O0FBRUFzQixpQkFBS0MsTUFBTCxDQUFhNUIsUUFBYjtBQUNBMkIsaUJBQUtPLFFBQUwsQ0FBZSxjQUFmOztBQUVBLG1CQUFPO0FBQ0hILHlCQUFTOUI7QUFETixhQUFQO0FBSUg7Ozt5Q0FFZ0I7QUFDYkE7QUFDSDs7Ozs7O2tCQW5GZ0JPLFM7OztBQXNGckJBLFVBQVUyQixPQUFWLEdBQW9CLENBQUUsTUFBRixFQUFVLFdBQVYsRUFBdUIsVUFBdkIsRUFBbUMsZ0JBQW5DLENBQXBCLEM7Ozs7Ozs7Ozs7Ozs7a0JDMUZlLFVBQVVILEtBQVYsRUFBaUJMLElBQWpCLEVBQXVCUyxZQUF2QixFQUFzQzs7QUFFakQ7QUFDQSxRQUFNQyxnQkFBZ0IsS0FBSzNCLFNBQUwsQ0FBZTRCLElBQWYsQ0FBcUI7QUFDdkNDLHFCQUFhQyxRQUQwQjtBQUV2Q0Msb0JBQWEsb0JBQVdDLE1BQVgsRUFBbUJDLGlCQUFuQixFQUFzQ0MsTUFBdEMsRUFBK0M7O0FBRXhERixtQkFBT0csT0FBUCxHQUFpQixFQUFFYixPQUFPWSxPQUFPWixLQUFoQixFQUF1QkwsTUFBTWlCLE9BQU9qQixJQUFwQyxFQUFqQjs7QUFFQWUsbUJBQU9JLEVBQVAsR0FBWSxZQUFZO0FBQ3BCSCxrQ0FBa0JJLEtBQWxCLENBQXlCSCxPQUFPUixZQUFoQztBQUNILGFBRkQ7O0FBSUFNLG1CQUFPTSxNQUFQLEdBQWdCLFlBQVk7QUFDeEJMLGtDQUFrQlosT0FBbEIsQ0FBMkIsUUFBM0I7QUFDSCxhQUZEO0FBSUgsU0Fkc0M7QUFldkNrQixpQkFBYTtBQUNUTCxvQkFBUSxrQkFBWTtBQUNoQix1QkFBTyxFQUFFWixPQUFPQSxLQUFULEVBQWdCTCxNQUFNQSxJQUF0QixFQUE0QlMsY0FBY0EsWUFBMUMsRUFBUDtBQUNIO0FBSFE7QUFmMEIsS0FBckIsQ0FBdEI7O0FBc0JBLFdBQU9DLGNBQWNhLE1BQXJCO0FBR0gsQzs7QUE3Q0QsSUFBSVYsV0FBVyxtQkFBQTNDLENBQVMsQ0FBVCxDQUFmOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSwwRUFBMEUsaUJBQWlCLGlEQUFpRCxnQkFBZ0I7QUFDNUosZ0VBQWdFLG9CQUFvQjtBQUNwRixzQjs7Ozs7Ozs7Ozs7OztrQkNZZSxVQUFXbUMsS0FBWCxFQUFrQkwsSUFBbEIsRUFBeUI7O0FBRXBDLFFBQUlVLGdCQUFnQixLQUFLM0IsU0FBTCxDQUFlNEIsSUFBZixDQUFxQjtBQUNyQ0MscUJBQWFDLFFBRHdCO0FBRXJDQyxvQkFBYSxvQkFBV0MsTUFBWCxFQUFtQkMsaUJBQW5CLEVBQXNDQyxNQUF0QyxFQUErQzs7QUFFeERGLG1CQUFPRyxPQUFQLEdBQWlCLEVBQUViLE9BQU9ZLE9BQU9aLEtBQWhCLEVBQXVCTCxNQUFNaUIsT0FBT2pCLElBQXBDLEVBQWpCOztBQUVBZSxtQkFBT0ksRUFBUCxHQUFZLFlBQVk7QUFDcEJILGtDQUFrQkksS0FBbEI7QUFDSCxhQUZEO0FBS0gsU0FYb0M7QUFZckNFLGlCQUFhO0FBQ1RMLG9CQUFRLGtCQUFZO0FBQ2hCLHVCQUFPLEVBQUVaLE9BQU9BLEtBQVQsRUFBZ0JMLE1BQU1BLElBQXRCLEVBQVA7QUFDSDtBQUhRO0FBWndCLEtBQXJCLENBQXBCOztBQW1CQSxXQUFPVSxjQUFjYSxNQUFyQjtBQUdILEM7O0FBdkNELElBQUlWLFdBQVcsbUJBQUEzQyxDQUFTLEVBQVQsQ0FBZjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBLDBFQUEwRSxpQkFBaUIsaURBQWlELGdCQUFnQjtBQUM1SixnRUFBZ0Usb0JBQW9CO0FBQ3BGLHNCOzs7Ozs7Ozs7Ozs7O2tCQ2dCZSxVQUFXbUMsS0FBWCxFQUFrQkwsSUFBbEIsRUFBd0J3QixpQkFBeEIsRUFBNEM7O0FBRXZELFFBQUlkLGdCQUFnQixLQUFLM0IsU0FBTCxDQUFlNEIsSUFBZixDQUFxQjtBQUNyQ0MscUJBQWFDLFFBRHdCO0FBRXJDQyxvQkFBYSxvQkFBV0MsTUFBWCxFQUFtQkMsaUJBQW5CLEVBQXNDQyxNQUF0QyxFQUErQzs7QUFFeEQsZ0JBQUssQ0FBQyxzQkFBU0EsT0FBT08saUJBQWhCLENBQU4sRUFBNEM7QUFDeENQLHVCQUFPTyxpQkFBUCxHQUNJUCxPQUFPTyxpQkFBUCxHQUEyQixJQUFJQyxJQUFKLENBQVVSLE9BQU9PLGlCQUFqQixDQUQvQixHQUVJUCxPQUFPTyxpQkFBUCxHQUEyQixJQUFJQyxJQUFKLEVBRi9CO0FBR0g7O0FBRURWLG1CQUFPRyxPQUFQLEdBQWlCO0FBQ2JiLHVCQUFtQlksT0FBT1osS0FEYjtBQUViTCxzQkFBbUJpQixPQUFPakIsSUFGYjtBQUdiMEIsc0JBQW1CVCxPQUFPTyxpQkFIYjtBQUliRyxtQ0FBbUI7QUFDZkMsNkJBQVcsSUFBSUgsSUFBSixFQURJO0FBRWZJLCtCQUFXO0FBRkksaUJBSk47QUFRYkMsc0JBQW1CLElBQUlMLElBQUosQ0FBVVIsT0FBT08saUJBQWpCOztBQVJOLGFBQWpCOztBQVlBVCxtQkFBT0ksRUFBUCxHQUFZLFlBQVk7QUFDcEJKLHVCQUFPRyxPQUFQLENBQWVRLElBQWYsQ0FBb0JLLFFBQXBCLENBQThCaEIsT0FBT0csT0FBUCxDQUFlWSxJQUFmLENBQW9CRSxRQUFwQixFQUE5QjtBQUNBakIsdUJBQU9HLE9BQVAsQ0FBZVEsSUFBZixDQUFvQk8sVUFBcEIsQ0FBZ0NsQixPQUFPRyxPQUFQLENBQWVZLElBQWYsQ0FBb0JJLFVBQXBCLEVBQWhDO0FBQ0FsQixrQ0FBa0JJLEtBQWxCLENBQXlCTCxPQUFPRyxPQUFQLENBQWVRLElBQXhDO0FBQ0gsYUFKRDs7QUFNQVgsbUJBQU9NLE1BQVAsR0FBZ0IsWUFBWTtBQUN4Qkwsa0NBQWtCWixPQUFsQixDQUEyQixRQUEzQjtBQUNILGFBRkQ7QUFJSCxTQWhDb0M7QUFpQ3JDa0IsaUJBQWE7QUFDVEwsb0JBQVEsa0JBQVk7QUFDaEIsdUJBQU8sRUFBRVosT0FBT0EsS0FBVCxFQUFnQkwsTUFBTUEsSUFBdEIsRUFBNEJ3QixtQkFBbUJBLGlCQUEvQyxFQUFQO0FBQ0g7QUFIUTtBQWpDd0IsS0FBckIsQ0FBcEI7O0FBd0NBLFdBQU9kLGNBQWNhLE1BQXJCO0FBR0gsQzs7QUFoRUQ7Ozs7OztBQUVBLElBQUlWLFdBQVcsbUJBQUEzQyxDQUFTLEVBQVQsQ0FBZjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDN0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBLDBFQUEwRSxpQkFBaUIsaURBQWlELGdCQUFnQjtBQUM1SixnRUFBZ0Usb0JBQW9CO0FBQ3BGLHNCOzs7Ozs7Ozs7Ozs7O2tCQ2dCZSxVQUFXbUMsS0FBWCxFQUFrQkwsSUFBbEIsRUFBd0JtQyxXQUF4QixFQUFxQ0MsZ0JBQXJDLEVBQXdEOztBQUVuRSxRQUFNMUIsZ0JBQWdCLEtBQUszQixTQUFMLENBQWU0QixJQUFmLENBQXFCO0FBQ3ZDQyxxQkFBYUMsUUFEMEI7QUFFdkNDLG9CQUFhLG9CQUFXQyxNQUFYLEVBQW1CQyxpQkFBbkIsRUFBc0NDLE1BQXRDLEVBQStDOztBQUV4REYsbUJBQU9HLE9BQVAsR0FBaUI7QUFDYmIsdUJBQWVZLE9BQU9aLEtBRFQsRUFDZ0JMLE1BQU1pQixPQUFPakIsSUFEN0IsRUFDbUNxQyxTQUFTcEIsT0FBT29CLE9BRG5EO0FBRWJDLCtCQUFlckIsT0FBT3FCLGFBRlQsRUFFd0JDLFlBQVksQ0FBQ3RCLE9BQU9qQjtBQUY1QyxhQUFqQjs7QUFLQWUsbUJBQU9JLEVBQVAsR0FBWSxZQUFZO0FBQ3BCSCxrQ0FBa0JJLEtBQWxCLENBQXlCTCxPQUFPRyxPQUFQLENBQWVvQixhQUF4QztBQUNILGFBRkQ7O0FBSUF2QixtQkFBT00sTUFBUCxHQUFnQixZQUFZO0FBQ3hCTCxrQ0FBa0JaLE9BQWxCLENBQTJCLFFBQTNCO0FBQ0gsYUFGRDtBQUlILFNBakJzQztBQWtCdkNrQixpQkFBYTtBQUNUTCxvQkFBUSxrQkFBWTtBQUNoQix1QkFBTyxFQUFFWixPQUFPQSxLQUFULEVBQWdCTCxNQUFNQSxJQUF0QixFQUE0QnFDLFNBQVNGLFdBQXJDLEVBQWtERyxlQUFlRixnQkFBakUsRUFBUDtBQUNIO0FBSFE7QUFsQjBCLEtBQXJCLENBQXRCOztBQXlCQSxXQUFPMUIsY0FBY2EsTUFBckI7QUFHSCxDOztBQWpERCxJQUFJVixXQUFXLG1CQUFBM0MsQ0FBUyxFQUFULENBQWY7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0EseUNBQXlDLHNCQUFzQixtQ0FBbUMseUJBQXlCLE9BQU8scUJBQXFCLDhCQUE4Qix1QkFBdUIsK0JBQStCLE9BQU8scUJBQXFCLGdDQUFnQyx3QkFBd0IsT0FBTyw0RUFBNEUsaUJBQWlCLHdFQUF3RSwwQ0FBMEMsbUVBQW1FLGdCQUFnQix3REFBd0QsMkJBQTJCLGtHQUFrRyw2Q0FBNkMsMERBQTBELFVBQVU7QUFDOTRCLGdFQUFnRSxvQkFBb0I7QUFDcEYsc0I7Ozs7Ozs7Ozs7Ozs7a0JDZWUsVUFBV21DLEtBQVgsRUFBa0JMLElBQWxCLEVBQXdCd0MsV0FBeEIsRUFBcUNDLFdBQXJDLEVBQW1EOztBQUU5RCxRQUFJL0IsZ0JBQWdCLEtBQUszQixTQUFMLENBQWU0QixJQUFmLENBQXFCO0FBQ3JDQyxxQkFBYUMsUUFEd0I7QUFFckNDLG9CQUFhLG9CQUFXQyxNQUFYLEVBQW1CQyxpQkFBbkIsRUFBc0NDLE1BQXRDLEVBQStDOztBQUV4REYsbUJBQU9HLE9BQVAsR0FBaUI7QUFDYmIsdUJBQWFZLE9BQU9aLEtBRFA7QUFFYkwsc0JBQWFpQixPQUFPakIsSUFGUDtBQUdiMEMsNEJBQWF6QixPQUFPdUIsV0FIUDtBQUliQyw2QkFBYXhCLE9BQU93QixXQUFQLElBQXNCeEIsT0FBT1o7QUFKN0IsYUFBakI7O0FBT0FVLG1CQUFPSSxFQUFQLEdBQVksWUFBWTtBQUNwQkgsa0NBQWtCSSxLQUFsQixDQUF5QkwsT0FBT0csT0FBUCxDQUFld0IsVUFBeEM7QUFDSCxhQUZEOztBQUlBM0IsbUJBQU9NLE1BQVAsR0FBZ0IsWUFBWTtBQUN4Qkwsa0NBQWtCWixPQUFsQixDQUEyQixRQUEzQjtBQUNILGFBRkQ7QUFJSCxTQW5Cb0M7QUFvQnJDa0IsaUJBQWE7QUFDVEwsb0JBQVEsa0JBQVk7QUFDaEIsdUJBQU8sRUFBRVosT0FBT0EsS0FBVCxFQUFnQkwsTUFBTUEsSUFBdEIsRUFBNEJ3QyxhQUFhQSxXQUF6QyxFQUFzREMsYUFBYUEsV0FBbkUsRUFBUDtBQUNIO0FBSFE7QUFwQndCLEtBQXJCLENBQXBCOztBQTJCQSxXQUFPL0IsY0FBY2EsTUFBckI7QUFHSCxDOztBQWxERCxJQUFJVixXQUFXLG1CQUFBM0MsQ0FBUyxFQUFULENBQWY7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSx5QkFBeUIsb0RBQW9ELG9CQUFvQixFQUFFLHdFQUF3RSxpREFBaUQsOEdBQThHLGtDQUFrQyw0TUFBNE0seUNBQXlDLHFFQUFxRSxnQkFBZ0IsNkNBQTZDLHNEQUFzRCxnQkFBZ0IsV0FBVyxxQkFBcUIseUNBQXlDLDBCQUEwQixnRkFBZ0YsZUFBZSxXQUFXLE9BQU8sRUFBRSxvQ0FBb0MsSUFBSSwrRUFBK0UsNk5BQTZOLGtFQUFrRSxFQUFFLGlCQUFpQixPQUFPLG1CQUFtQixPQUFPLGtCQUFrQixPQUFPLHlCQUF5QixPQUFPLDJCQUEyQixRQUFRO0FBQ3JpRCxnRUFBZ0Usb0JBQW9CO0FBQ3BGLHNCOzs7Ozs7Ozs7Ozs7O2tCQ2dCZSxVQUFXbUMsS0FBWCxFQUFrQkwsSUFBbEIsRUFBd0IyQyxXQUF4QixFQUFzQzs7QUFFakQsUUFBTWpDLGdCQUFnQixLQUFLM0IsU0FBTCxDQUFlNEIsSUFBZixDQUFxQjtBQUN2Q0MscUJBQWFDLFFBRDBCO0FBRXZDQyxvQkFBYSxvQkFBV0MsTUFBWCxFQUFtQkMsaUJBQW5CLEVBQXNDQyxNQUF0QyxFQUErQzs7QUFFeERGLG1CQUFPRyxPQUFQLEdBQWlCO0FBQ2JiLHVCQUFhWSxPQUFPWixLQURQO0FBRWJMLHNCQUFhaUIsT0FBT2pCLElBRlA7QUFHYjJDLDZCQUFhMUIsT0FBTzBCO0FBSFAsYUFBakI7O0FBT0E1QixtQkFBT0ksRUFBUCxHQUFZLFlBQVk7QUFDcEIsb0JBQUl5QixPQUFPLEVBQVg7QUFDQTdCLHVCQUFPRyxPQUFQLENBQWV5QixXQUFmLENBQTJCRSxPQUEzQixDQUFvQyxVQUFXQyxDQUFYLEVBQWU7QUFDL0NGLHlCQUFNRSxFQUFFQyxLQUFSLElBQWtCRCxFQUFFRSxLQUFwQjtBQUNILGlCQUZEO0FBR0FoQyxrQ0FBa0JJLEtBQWxCLENBQXlCd0IsSUFBekI7QUFDSCxhQU5EOztBQVFBN0IsbUJBQU9NLE1BQVAsR0FBZ0IsWUFBWTtBQUN4Qkwsa0NBQWtCWixPQUFsQixDQUEyQixRQUEzQjtBQUNILGFBRkQ7QUFJSCxTQXZCc0M7QUF3QnZDa0IsaUJBQWE7QUFDVEwsb0JBQVEsa0JBQVk7QUFDaEIsdUJBQU8sRUFBRVosT0FBT0EsS0FBVCxFQUFnQkwsTUFBTUEsSUFBdEIsRUFBNEIyQyxhQUFhQSxXQUF6QyxFQUFQO0FBQ0g7QUFIUTtBQXhCMEIsS0FBckIsQ0FBdEI7O0FBK0JBLFdBQU9qQyxjQUFjYSxNQUFyQjtBQUVILEM7O0FBdERELElBQUlWLFdBQVcsbUJBQUEzQyxDQUFTLEVBQVQsQ0FBZjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSx5QkFBeUIsb0RBQW9ELG9CQUFvQixFQUFFLDJEQUEyRCxpREFBaUQsOEdBQThHLGtDQUFrQywySUFBMkkseUNBQXlDLGdDQUFnQyxtRUFBbUUsOENBQThDLG1CQUFtQixFQUFFLGdEQUFnRCxnQkFBZ0IsNkNBQTZDLHNEQUFzRCxnQkFBZ0IsV0FBVyxxQkFBcUIseUNBQXlDLDBCQUEwQixzREFBc0QsZUFBZSxXQUFXLE9BQU8sRUFBRSxvQ0FBb0MsSUFBSSwrRUFBK0UsNE5BQTROLGtFQUFrRSxFQUFFLGlCQUFpQixPQUFPLG1CQUFtQixPQUFPLGtCQUFrQixVQUFVLGdCQUFnQixxR0FBcUcsZ0JBQWdCLFFBQVE7QUFDMXBELGdFQUFnRSxvQkFBb0I7QUFDcEYsc0I7Ozs7OztBQ0hBO0FBQ0EsMENBQTBDLDZCQUE2QixzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLGdCQUFnQixxQkFBcUIsd0JBQXdCLDZCQUE2Qiw0Q0FBNEMsZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsd0NBQXdDLGtFQUFrRSwrREFBK0QsMERBQTBELE9BQU87QUFDMWxCLGdFQUFnRSxvQkFBb0I7QUFDcEYsc0I7Ozs7OztBQ0hBO0FBQ0EscUNBQXFDLCtCQUErQixpQkFBaUIsb0JBQW9CLGtCQUFrQixzQkFBc0IseUNBQXlDLDBCQUEwQiw4QkFBOEIsa0NBQWtDLGlDQUFpQyxTQUFTLHlCQUF5QixzQkFBc0IsdUJBQXVCLG9DQUFvQyx1QkFBdUIsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLE9BQU8sa0JBQWtCLHNCQUFzQix1QkFBdUIsK0JBQStCLCtCQUErQiw2QkFBNkIsOERBQThELG9EQUFvRCxPQUFPLHNCQUFzQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw2QkFBNkIsaUJBQWlCLG9DQUFvQyw4QkFBOEIsbUVBQW1FLHlEQUF5RCxPQUFPLGVBQWUsb0JBQW9CLG9CQUFvQix5Q0FBeUMsaUNBQWlDLE9BQU8sc0NBQXNDLGdCQUFnQiwwREFBMEQsT0FBTyw4QkFBOEIsZ0JBQWdCLHdDQUF3QywwREFBMEQsT0FBTyxzQ0FBc0Msb0JBQW9CLHNEQUFzRCxlQUFlLHNEQUFzRCxPQUFPLDhCQUE4QixvQkFBb0Isb0NBQW9DLDRDQUE0QyxXQUFXLGVBQWUsb0NBQW9DLDRDQUE0QyxXQUFXLE9BQU87QUFDbC9ELGdFQUFnRSxvQkFBb0I7QUFDcEYsc0IiLCJmaWxlIjoib2d1aW1vYmlsZS5hbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MzIzODg4Y2VlODk1MzVjMzM4ZiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKlxuICogb2d1aW1vYmlsZS5tb2R1bGUuanNcbiAqXG4gKiB1aU9HTW9iaWxlIHJld3JpdHRlbiBmb3IgQmVsbGluaS9CbHVlbGluZSBBcmNoaXRlY3R1cmVcbiAqIEVTNiBtb2R1bGUgdmVyc2lvblxuICpcbiAqIEphbnVhcnkgMjAxOFxuICpcbiAqXG4gKiovXG5cbmltcG9ydCB1aUJvb3RzdHJhcCBmcm9tICdhbmd1bGFyLXVpLWJvb3RzdHJhcCdcbmltcG9ydCBVSUJIZWxwZXIgZnJvbSAnLi9jb21wb25lbnRzL21vZGFscy91aWJoZWxwZXInXG5cblxuKGZ1bmN0aW9uICggd2luZG93LCBhbmd1bGFyICkge1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiB0aGUgb3VyZ2xhc3NBUEkgbW9kdWxlXG4gICAgICovXG4gICAgY29uc3Qgb2dVaU1vYmlsZU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnb2dVaU1vYmlsZScsIFsgdWlCb290c3RyYXAgXSApO1xuXG4gICAgb2dVaU1vYmlsZU1vZHVsZS5zZXJ2aWNlKCAndWliSGVscGVyJywgVUlCSGVscGVyICk7XG5cblxufSkoIHdpbmRvdywgd2luZG93LmFuZ3VsYXIgKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2d1aW1vYmlsZS5tb2R1bGUuanMiLCJyZXF1aXJlKCcuL2Rpc3QvdWktYm9vdHN0cmFwLXRwbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAndWkuYm9vdHN0cmFwJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItdWktYm9vdHN0cmFwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBhbmd1bGFyLXVpLWJvb3RzdHJhcFxuICogaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC9cblxuICogVmVyc2lvbjogMi41LjYgLSAyMDE3LTEwLTE0XG4gKiBMaWNlbnNlOiBNSVRcbiAqL2FuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwXCIsIFtcInVpLmJvb3RzdHJhcC50cGxzXCIsIFwidWkuYm9vdHN0cmFwLmNvbGxhcHNlXCIsXCJ1aS5ib290c3RyYXAudGFiaW5kZXhcIixcInVpLmJvb3RzdHJhcC5hY2NvcmRpb25cIixcInVpLmJvb3RzdHJhcC5hbGVydFwiLFwidWkuYm9vdHN0cmFwLmJ1dHRvbnNcIixcInVpLmJvb3RzdHJhcC5jYXJvdXNlbFwiLFwidWkuYm9vdHN0cmFwLmRhdGVwYXJzZXJcIixcInVpLmJvb3RzdHJhcC5pc0NsYXNzXCIsXCJ1aS5ib290c3RyYXAuZGF0ZXBpY2tlclwiLFwidWkuYm9vdHN0cmFwLnBvc2l0aW9uXCIsXCJ1aS5ib290c3RyYXAuZGF0ZXBpY2tlclBvcHVwXCIsXCJ1aS5ib290c3RyYXAuZGVib3VuY2VcIixcInVpLmJvb3RzdHJhcC5tdWx0aU1hcFwiLFwidWkuYm9vdHN0cmFwLmRyb3Bkb3duXCIsXCJ1aS5ib290c3RyYXAuc3RhY2tlZE1hcFwiLFwidWkuYm9vdHN0cmFwLm1vZGFsXCIsXCJ1aS5ib290c3RyYXAucGFnaW5nXCIsXCJ1aS5ib290c3RyYXAucGFnZXJcIixcInVpLmJvb3RzdHJhcC5wYWdpbmF0aW9uXCIsXCJ1aS5ib290c3RyYXAudG9vbHRpcFwiLFwidWkuYm9vdHN0cmFwLnBvcG92ZXJcIixcInVpLmJvb3RzdHJhcC5wcm9ncmVzc2JhclwiLFwidWkuYm9vdHN0cmFwLnJhdGluZ1wiLFwidWkuYm9vdHN0cmFwLnRhYnNcIixcInVpLmJvb3RzdHJhcC50aW1lcGlja2VyXCIsXCJ1aS5ib290c3RyYXAudHlwZWFoZWFkXCJdKTtcbmFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnRwbHNcIiwgW1widWliL3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLFwidWliL3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLFwidWliL3RlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWxcIixcInVpYi90ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvY2Fyb3VzZWwvc2xpZGUuaHRtbFwiLFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbFwiLFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlclBvcHVwL3BvcHVwLmh0bWxcIixcInVpYi90ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwiLFwidWliL3RlbXBsYXRlL3BhZ2VyL3BhZ2VyLmh0bWxcIixcInVpYi90ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbFwiLFwidWliL3RlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1odG1sLXBvcHVwLmh0bWxcIixcInVpYi90ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtcG9wdXAuaHRtbFwiLFwidWliL3RlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC10ZW1wbGF0ZS1wb3B1cC5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLWh0bWwuaHRtbFwiLFwidWliL3RlbXBsYXRlL3BvcG92ZXIvcG9wb3Zlci10ZW1wbGF0ZS5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLmh0bWxcIixcInVpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLFwidWliL3RlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWxcIixcInVpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsXCJ1aWIvdGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLFwidWliL3RlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWxcIixcInVpYi90ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbFwiLFwidWliL3RlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guaHRtbFwiLFwidWliL3RlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbFwiXSk7XG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmNvbGxhcHNlJywgW10pXG5cbiAgLmRpcmVjdGl2ZSgndWliQ29sbGFwc2UnLCBbJyRhbmltYXRlJywgJyRxJywgJyRwYXJzZScsICckaW5qZWN0b3InLCBmdW5jdGlvbigkYW5pbWF0ZSwgJHEsICRwYXJzZSwgJGluamVjdG9yKSB7XG4gICAgdmFyICRhbmltYXRlQ3NzID0gJGluamVjdG9yLmhhcygnJGFuaW1hdGVDc3MnKSA/ICRpbmplY3Rvci5nZXQoJyRhbmltYXRlQ3NzJykgOiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGV4cGFuZGluZ0V4cHIgPSAkcGFyc2UoYXR0cnMuZXhwYW5kaW5nKSxcbiAgICAgICAgICBleHBhbmRlZEV4cHIgPSAkcGFyc2UoYXR0cnMuZXhwYW5kZWQpLFxuICAgICAgICAgIGNvbGxhcHNpbmdFeHByID0gJHBhcnNlKGF0dHJzLmNvbGxhcHNpbmcpLFxuICAgICAgICAgIGNvbGxhcHNlZEV4cHIgPSAkcGFyc2UoYXR0cnMuY29sbGFwc2VkKSxcbiAgICAgICAgICBob3Jpem9udGFsID0gZmFsc2UsXG4gICAgICAgICAgY3NzID0ge30sXG4gICAgICAgICAgY3NzVG8gPSB7fTtcblxuICAgICAgICBpbml0KCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICBob3Jpem9udGFsID0gISEoJ2hvcml6b250YWwnIGluIGF0dHJzKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjc3NUbyA9IHt3aWR0aDogJzAnfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgICBoZWlnaHQ6ICcnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3NzVG8gPSB7aGVpZ2h0OiAnMCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXNjb3BlLiRldmFsKGF0dHJzLnVpYkNvbGxhcHNlKSkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW4nKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlJylcbiAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSlcbiAgICAgICAgICAgICAgLmNzcyhjc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFNjcm9sbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogZWxlbWVudC5zY3JvbGxXaWR0aCArICdweCd9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge2hlaWdodDogZWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2UnKSAmJiBlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHEucmVzb2x2ZShleHBhbmRpbmdFeHByKHNjb3BlKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgIGlmICgkYW5pbWF0ZUNzcykge1xuICAgICAgICAgICAgICAgICRhbmltYXRlQ3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGFkZENsYXNzOiAnaW4nLFxuICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdG86IGdldFNjcm9sbEZyb21FbGVtZW50KGVsZW1lbnRbMF0pXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVsnZmluYWxseSddKGV4cGFuZERvbmUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhbmltYXRlLmFkZENsYXNzKGVsZW1lbnQsICdpbicsIHtcbiAgICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bzogZ2V0U2Nyb2xsRnJvbUVsZW1lbnQoZWxlbWVudFswXSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKGV4cGFuZERvbmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhbmd1bGFyLm5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXhwYW5kRG9uZSgpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgICAgICAgICAgLmNzcyhjc3MpO1xuICAgICAgICAgIGV4cGFuZGVkRXhwcihzY29wZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNlJykgJiYgIWVsZW1lbnQuaGFzQ2xhc3MoJ2luJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsYXBzZURvbmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkcS5yZXNvbHZlKGNvbGxhcHNpbmdFeHByKHNjb3BlKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgIC8vIElNUE9SVEFOVDogVGhlIHdpZHRoIG11c3QgYmUgc2V0IGJlZm9yZSBhZGRpbmcgXCJjb2xsYXBzaW5nXCIgY2xhc3MuXG4gICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdGhlIGJyb3dzZXIgYXR0ZW1wdHMgdG8gYW5pbWF0ZSBmcm9tIHdpZHRoIDAgKGluXG4gICAgICAgICAgICAgIC8vIGNvbGxhcHNpbmcgY2xhc3MpIHRvIHRoZSBnaXZlbiB3aWR0aCBoZXJlLlxuICAgICAgICAgICAgICAgIC5jc3MoZ2V0U2Nyb2xsRnJvbUVsZW1lbnQoZWxlbWVudFswXSkpXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGx5IGFsbCBwYW5lbCBjb2xsYXBzZSBoYXZlIHRoZSBjb2xsYXBzZSBjbGFzcywgdGhpcyByZW1vdmFsXG4gICAgICAgICAgICAgICAgLy8gcHJldmVudHMgdGhlIGFuaW1hdGlvbiBmcm9tIGp1bXBpbmcgdG8gY29sbGFwc2VkIHN0YXRlXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmICgkYW5pbWF0ZUNzcykge1xuICAgICAgICAgICAgICAgICRhbmltYXRlQ3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiAnaW4nLFxuICAgICAgICAgICAgICAgICAgdG86IGNzc1RvXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVsnZmluYWxseSddKGNvbGxhcHNlRG9uZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ2luJywge1xuICAgICAgICAgICAgICAgICAgdG86IGNzc1RvXG4gICAgICAgICAgICAgICAgfSkudGhlbihjb2xsYXBzZURvbmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhbmd1bGFyLm5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29sbGFwc2VEb25lKCkge1xuICAgICAgICAgIGVsZW1lbnQuY3NzKGNzc1RvKTsgLy8gUmVxdWlyZWQgc28gdGhhdCBjb2xsYXBzZSB3b3JrcyB3aGVuIGFuaW1hdGlvbiBpcyBkaXNhYmxlZFxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScpO1xuICAgICAgICAgIGNvbGxhcHNlZEV4cHIoc2NvcGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnVpYkNvbGxhcHNlLCBmdW5jdGlvbihzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgY29sbGFwc2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAudGFiaW5kZXgnLCBbXSlcblxuLmRpcmVjdGl2ZSgndWliVGFiaW5kZXhUb2dnbGUnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgYXR0cnMuJG9ic2VydmUoJ2Rpc2FibGVkJywgZnVuY3Rpb24oZGlzYWJsZWQpIHtcbiAgICAgICAgYXR0cnMuJHNldCgndGFiaW5kZXgnLCBkaXNhYmxlZCA/IC0xIDogbnVsbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5hY2NvcmRpb24nLCBbJ3VpLmJvb3RzdHJhcC5jb2xsYXBzZScsICd1aS5ib290c3RyYXAudGFiaW5kZXgnXSlcblxuLmNvbnN0YW50KCd1aWJBY2NvcmRpb25Db25maWcnLCB7XG4gIGNsb3NlT3RoZXJzOiB0cnVlXG59KVxuXG4uY29udHJvbGxlcignVWliQWNjb3JkaW9uQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICd1aWJBY2NvcmRpb25Db25maWcnLCBmdW5jdGlvbigkc2NvcGUsICRhdHRycywgYWNjb3JkaW9uQ29uZmlnKSB7XG4gIC8vIFRoaXMgYXJyYXkga2VlcHMgdHJhY2sgb2YgdGhlIGFjY29yZGlvbiBncm91cHNcbiAgdGhpcy5ncm91cHMgPSBbXTtcblxuICAvLyBFbnN1cmUgdGhhdCBhbGwgdGhlIGdyb3VwcyBpbiB0aGlzIGFjY29yZGlvbiBhcmUgY2xvc2VkLCB1bmxlc3MgY2xvc2Utb3RoZXJzIGV4cGxpY2l0bHkgc2F5cyBub3QgdG9cbiAgdGhpcy5jbG9zZU90aGVycyA9IGZ1bmN0aW9uKG9wZW5Hcm91cCkge1xuICAgIHZhciBjbG9zZU90aGVycyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5jbG9zZU90aGVycykgP1xuICAgICAgJHNjb3BlLiRldmFsKCRhdHRycy5jbG9zZU90aGVycykgOiBhY2NvcmRpb25Db25maWcuY2xvc2VPdGhlcnM7XG4gICAgaWYgKGNsb3NlT3RoZXJzKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5ncm91cHMsIGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG4gICAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhY2NvcmRpb24tZ3JvdXAgZGlyZWN0aXZlIHRvIGFkZCBpdHNlbGYgdG8gdGhlIGFjY29yZGlvblxuICB0aGlzLmFkZEdyb3VwID0gZnVuY3Rpb24oZ3JvdXBTY29wZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwU2NvcGUpO1xuXG4gICAgZ3JvdXBTY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoYXQucmVtb3ZlR3JvdXAoZ3JvdXBTY29wZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWNjb3JkaW9uLWdyb3VwIGRpcmVjdGl2ZSB3aGVuIHRvIHJlbW92ZSBpdHNlbGZcbiAgdGhpcy5yZW1vdmVHcm91cCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG59XSlcblxuLy8gVGhlIGFjY29yZGlvbiBkaXJlY3RpdmUgc2ltcGx5IHNldHMgdXAgdGhlIGRpcmVjdGl2ZSBjb250cm9sbGVyXG4vLyBhbmQgYWRkcyBhbiBhY2NvcmRpb24gQ1NTIGNsYXNzIHRvIGl0c2VsZiBlbGVtZW50LlxuLmRpcmVjdGl2ZSgndWliQWNjb3JkaW9uJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogJ1VpYkFjY29yZGlvbkNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2FjY29yZGlvbicsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHJldHVybiBhdHRycy50ZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbCc7XG4gICAgfVxuICB9O1xufSlcblxuLy8gVGhlIGFjY29yZGlvbi1ncm91cCBkaXJlY3RpdmUgaW5kaWNhdGVzIGEgYmxvY2sgb2YgaHRtbCB0aGF0IHdpbGwgZXhwYW5kIGFuZCBjb2xsYXBzZSBpbiBhbiBhY2NvcmRpb25cbi5kaXJlY3RpdmUoJ3VpYkFjY29yZGlvbkdyb3VwJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogJ151aWJBY2NvcmRpb24nLCAgICAgICAgIC8vIFdlIG5lZWQgdGhpcyBkaXJlY3RpdmUgdG8gYmUgaW5zaWRlIGFuIGFjY29yZGlvblxuICAgIHRyYW5zY2x1ZGU6IHRydWUsICAgICAgICAgICAgICAvLyBJdCB0cmFuc2NsdWRlcyB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdGl2ZSBpbnRvIHRoZSB0ZW1wbGF0ZVxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJ3VpYi90ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmh0bWwnO1xuICAgIH0sXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAJywgICAgICAgICAgICAgICAvLyBJbnRlcnBvbGF0ZSB0aGUgaGVhZGluZyBhdHRyaWJ1dGUgb250byB0aGlzIHNjb3BlXG4gICAgICBwYW5lbENsYXNzOiAnQD8nLCAgICAgICAgICAgLy8gRGl0dG8gd2l0aCBwYW5lbENsYXNzXG4gICAgICBpc09wZW46ICc9PycsXG4gICAgICBpc0Rpc2FibGVkOiAnPT8nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0SGVhZGluZyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gZWxlbWVudDtcbiAgICAgIH07XG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGFjY29yZGlvbkN0cmwpIHtcbiAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ3BhbmVsJyk7XG4gICAgICBhY2NvcmRpb25DdHJsLmFkZEdyb3VwKHNjb3BlKTtcblxuICAgICAgc2NvcGUub3BlbkNsYXNzID0gYXR0cnMub3BlbkNsYXNzIHx8ICdwYW5lbC1vcGVuJztcbiAgICAgIHNjb3BlLnBhbmVsQ2xhc3MgPSBhdHRycy5wYW5lbENsYXNzIHx8ICdwYW5lbC1kZWZhdWx0JztcbiAgICAgIHNjb3BlLiR3YXRjaCgnaXNPcGVuJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhzY29wZS5vcGVuQ2xhc3MsICEhdmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBhY2NvcmRpb25DdHJsLmNsb3NlT3RoZXJzKHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLnRvZ2dsZU9wZW4gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCFzY29wZS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKCEkZXZlbnQgfHwgJGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgc2NvcGUuaXNPcGVuID0gIXNjb3BlLmlzT3BlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBpZCA9ICdhY2NvcmRpb25ncm91cC0nICsgc2NvcGUuJGlkICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuICAgICAgc2NvcGUuaGVhZGluZ0lkID0gaWQgKyAnLXRhYic7XG4gICAgICBzY29wZS5wYW5lbElkID0gaWQgKyAnLXBhbmVsJztcbiAgICB9XG4gIH07XG59KVxuXG4vLyBVc2UgYWNjb3JkaW9uLWhlYWRpbmcgYmVsb3cgYW4gYWNjb3JkaW9uLWdyb3VwIHRvIHByb3ZpZGUgYSBoZWFkaW5nIGNvbnRhaW5pbmcgSFRNTFxuLmRpcmVjdGl2ZSgndWliQWNjb3JkaW9uSGVhZGluZycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRyYW5zY2x1ZGU6IHRydWUsICAgLy8gR3JhYiB0aGUgY29udGVudHMgdG8gYmUgdXNlZCBhcyB0aGUgaGVhZGluZ1xuICAgIHRlbXBsYXRlOiAnJywgICAgICAgLy8gSW4gZWZmZWN0IHJlbW92ZSB0aGlzIGVsZW1lbnQhXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICByZXF1aXJlOiAnXnVpYkFjY29yZGlvbkdyb3VwJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGFjY29yZGlvbkdyb3VwQ3RybCwgdHJhbnNjbHVkZSkge1xuICAgICAgLy8gUGFzcyB0aGUgaGVhZGluZyB0byB0aGUgYWNjb3JkaW9uLWdyb3VwIGNvbnRyb2xsZXJcbiAgICAgIC8vIHNvIHRoYXQgaXQgY2FuIGJlIHRyYW5zY2x1ZGVkIGludG8gdGhlIHJpZ2h0IHBsYWNlIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgLy8gW1RoZSBzZWNvbmQgcGFyYW1ldGVyIHRvIHRyYW5zY2x1ZGUgY2F1c2VzIHRoZSBlbGVtZW50cyB0byBiZSBjbG9uZWQgc28gdGhhdCB0aGV5IHdvcmsgaW4gbmctcmVwZWF0XVxuICAgICAgYWNjb3JkaW9uR3JvdXBDdHJsLnNldEhlYWRpbmcodHJhbnNjbHVkZShzY29wZSwgYW5ndWxhci5ub29wKSk7XG4gICAgfVxuICB9O1xufSlcblxuLy8gVXNlIGluIHRoZSBhY2NvcmRpb24tZ3JvdXAgdGVtcGxhdGUgdG8gaW5kaWNhdGUgd2hlcmUgeW91IHdhbnQgdGhlIGhlYWRpbmcgdG8gYmUgdHJhbnNjbHVkZWRcbi8vIFlvdSBtdXN0IHByb3ZpZGUgdGhlIHByb3BlcnR5IG9uIHRoZSBhY2NvcmRpb24tZ3JvdXAgY29udHJvbGxlciB0aGF0IHdpbGwgaG9sZCB0aGUgdHJhbnNjbHVkZWQgZWxlbWVudFxuLmRpcmVjdGl2ZSgndWliQWNjb3JkaW9uVHJhbnNjbHVkZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6ICdedWliQWNjb3JkaW9uR3JvdXAnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udHJvbGxlclthdHRycy51aWJBY2NvcmRpb25UcmFuc2NsdWRlXTsgfSwgZnVuY3Rpb24oaGVhZGluZykge1xuICAgICAgICBpZiAoaGVhZGluZykge1xuICAgICAgICAgIHZhciBlbGVtID0gYW5ndWxhci5lbGVtZW50KGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcihnZXRIZWFkZXJTZWxlY3RvcnMoKSkpO1xuICAgICAgICAgIGVsZW0uaHRtbCgnJyk7XG4gICAgICAgICAgZWxlbS5hcHBlbmQoaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRIZWFkZXJTZWxlY3RvcnMoKSB7XG4gICAgICByZXR1cm4gJ3VpYi1hY2NvcmRpb24taGVhZGVyLCcgK1xuICAgICAgICAgICdkYXRhLXVpYi1hY2NvcmRpb24taGVhZGVyLCcgK1xuICAgICAgICAgICd4LXVpYi1hY2NvcmRpb24taGVhZGVyLCcgK1xuICAgICAgICAgICd1aWJcXFxcOmFjY29yZGlvbi1oZWFkZXIsJyArXG4gICAgICAgICAgJ1t1aWItYWNjb3JkaW9uLWhlYWRlcl0sJyArXG4gICAgICAgICAgJ1tkYXRhLXVpYi1hY2NvcmRpb24taGVhZGVyXSwnICtcbiAgICAgICAgICAnW3gtdWliLWFjY29yZGlvbi1oZWFkZXJdJztcbiAgfVxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuYWxlcnQnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ1VpYkFsZXJ0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckaW50ZXJwb2xhdGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRpbnRlcnBvbGF0ZSwgJHRpbWVvdXQpIHtcbiAgJHNjb3BlLmNsb3NlYWJsZSA9ICEhJGF0dHJzLmNsb3NlO1xuICAkZWxlbWVudC5hZGRDbGFzcygnYWxlcnQnKTtcbiAgJGF0dHJzLiRzZXQoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgaWYgKCRzY29wZS5jbG9zZWFibGUpIHtcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnYWxlcnQtZGlzbWlzc2libGUnKTtcbiAgfVxuXG4gIHZhciBkaXNtaXNzT25UaW1lb3V0ID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmRpc21pc3NPblRpbWVvdXQpID9cbiAgICAkaW50ZXJwb2xhdGUoJGF0dHJzLmRpc21pc3NPblRpbWVvdXQpKCRzY29wZS4kcGFyZW50KSA6IG51bGw7XG5cbiAgaWYgKGRpc21pc3NPblRpbWVvdXQpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jbG9zZSgpO1xuICAgIH0sIHBhcnNlSW50KGRpc21pc3NPblRpbWVvdXQsIDEwKSk7XG4gIH1cbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJBbGVydCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6ICdVaWJBbGVydENvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2FsZXJ0JyxcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbihlbGVtZW50LCBhdHRycykge1xuICAgICAgcmV0dXJuIGF0dHJzLnRlbXBsYXRlVXJsIHx8ICd1aWIvdGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbCc7XG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHNjb3BlOiB7XG4gICAgICBjbG9zZTogJyYnXG4gICAgfVxuICB9O1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuYnV0dG9ucycsIFtdKVxuXG4uY29uc3RhbnQoJ3VpYkJ1dHRvbkNvbmZpZycsIHtcbiAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuICB0b2dnbGVFdmVudDogJ2NsaWNrJ1xufSlcblxuLmNvbnRyb2xsZXIoJ1VpYkJ1dHRvbnNDb250cm9sbGVyJywgWyd1aWJCdXR0b25Db25maWcnLCBmdW5jdGlvbihidXR0b25Db25maWcpIHtcbiAgdGhpcy5hY3RpdmVDbGFzcyA9IGJ1dHRvbkNvbmZpZy5hY3RpdmVDbGFzcyB8fCAnYWN0aXZlJztcbiAgdGhpcy50b2dnbGVFdmVudCA9IGJ1dHRvbkNvbmZpZy50b2dnbGVFdmVudCB8fCAnY2xpY2snO1xufV0pXG5cbi5kaXJlY3RpdmUoJ3VpYkJ0blJhZGlvJywgWyckcGFyc2UnLCBmdW5jdGlvbigkcGFyc2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ3VpYkJ0blJhZGlvJywgJ25nTW9kZWwnXSxcbiAgICBjb250cm9sbGVyOiAnVWliQnV0dG9uc0NvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2J1dHRvbnMnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciBidXR0b25zQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuICAgICAgdmFyIHVuY2hlY2thYmxlRXhwciA9ICRwYXJzZShhdHRycy51aWJVbmNoZWNrYWJsZSk7XG5cbiAgICAgIGVsZW1lbnQuZmluZCgnaW5wdXQnKS5jc3Moe2Rpc3BsYXk6ICdub25lJ30pO1xuXG4gICAgICAvL21vZGVsIC0+IFVJXG4gICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoYnV0dG9uc0N0cmwuYWN0aXZlQ2xhc3MsIGFuZ3VsYXIuZXF1YWxzKG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlLCBzY29wZS4kZXZhbChhdHRycy51aWJCdG5SYWRpbykpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vdWktPm1vZGVsXG4gICAgICBlbGVtZW50Lm9uKGJ1dHRvbnNDdHJsLnRvZ2dsZUV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGF0dHJzLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzQWN0aXZlID0gZWxlbWVudC5oYXNDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgaWYgKCFpc0FjdGl2ZSB8fCBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy51bmNoZWNrYWJsZSkpIHtcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKGlzQWN0aXZlID8gbnVsbCA6IHNjb3BlLiRldmFsKGF0dHJzLnVpYkJ0blJhZGlvKSk7XG4gICAgICAgICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXR0cnMudWliVW5jaGVja2FibGUpIHtcbiAgICAgICAgc2NvcGUuJHdhdGNoKHVuY2hlY2thYmxlRXhwciwgZnVuY3Rpb24odW5jaGVja2FibGUpIHtcbiAgICAgICAgICBhdHRycy4kc2V0KCd1bmNoZWNrYWJsZScsIHVuY2hlY2thYmxlID8gJycgOiB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgndWliQnRuQ2hlY2tib3gnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ3VpYkJ0bkNoZWNrYm94JywgJ25nTW9kZWwnXSxcbiAgICBjb250cm9sbGVyOiAnVWliQnV0dG9uc0NvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2J1dHRvbicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGJ1dHRvbnNDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIGVsZW1lbnQuZmluZCgnaW5wdXQnKS5jc3Moe2Rpc3BsYXk6ICdub25lJ30pO1xuXG4gICAgICBmdW5jdGlvbiBnZXRUcnVlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGF0dHJzLmJ0bkNoZWNrYm94VHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldEZhbHNlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGF0dHJzLmJ0bkNoZWNrYm94RmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q2hlY2tib3hWYWx1ZShhdHRyaWJ1dGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYW5ndWxhci5pc0RlZmluZWQoYXR0cmlidXRlKSA/IHNjb3BlLiRldmFsKGF0dHJpYnV0ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8vbW9kZWwgLT4gVUlcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcywgYW5ndWxhci5lcXVhbHMobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUsIGdldFRydWVWYWx1ZSgpKSk7XG4gICAgICB9O1xuXG4gICAgICAvL3VpLT5tb2RlbFxuICAgICAgZWxlbWVudC5vbihidXR0b25zQ3RybC50b2dnbGVFdmVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhdHRycy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKGVsZW1lbnQuaGFzQ2xhc3MoYnV0dG9uc0N0cmwuYWN0aXZlQ2xhc3MpID8gZ2V0RmFsc2VWYWx1ZSgpIDogZ2V0VHJ1ZVZhbHVlKCkpO1xuICAgICAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5jYXJvdXNlbCcsIFtdKVxuXG4uY29udHJvbGxlcignVWliQ2Fyb3VzZWxDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRhbmltYXRlJywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGludGVydmFsLCAkdGltZW91dCwgJGFuaW1hdGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgIHNsaWRlcyA9IHNlbGYuc2xpZGVzID0gJHNjb3BlLnNsaWRlcyA9IFtdLFxuICAgIFNMSURFX0RJUkVDVElPTiA9ICd1aWItc2xpZGVEaXJlY3Rpb24nLFxuICAgIGN1cnJlbnRJbmRleCA9ICRzY29wZS5hY3RpdmUsXG4gICAgY3VycmVudEludGVydmFsLCBpc1BsYXlpbmc7XG5cbiAgdmFyIGRlc3Ryb3llZCA9IGZhbHNlO1xuICAkZWxlbWVudC5hZGRDbGFzcygnY2Fyb3VzZWwnKTtcblxuICBzZWxmLmFkZFNsaWRlID0gZnVuY3Rpb24oc2xpZGUsIGVsZW1lbnQpIHtcbiAgICBzbGlkZXMucHVzaCh7XG4gICAgICBzbGlkZTogc2xpZGUsXG4gICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgfSk7XG4gICAgc2xpZGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuICthLnNsaWRlLmluZGV4IC0gK2Iuc2xpZGUuaW5kZXg7XG4gICAgfSk7XG4gICAgLy9pZiB0aGlzIGlzIHRoZSBmaXJzdCBzbGlkZSBvciB0aGUgc2xpZGUgaXMgc2V0IHRvIGFjdGl2ZSwgc2VsZWN0IGl0XG4gICAgaWYgKHNsaWRlLmluZGV4ID09PSAkc2NvcGUuYWN0aXZlIHx8IHNsaWRlcy5sZW5ndGggPT09IDEgJiYgIWFuZ3VsYXIuaXNOdW1iZXIoJHNjb3BlLmFjdGl2ZSkpIHtcbiAgICAgIGlmICgkc2NvcGUuJGN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICRzY29wZS4kY3VycmVudFRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50SW5kZXggPSBzbGlkZS5pbmRleDtcbiAgICAgICRzY29wZS5hY3RpdmUgPSBzbGlkZS5pbmRleDtcbiAgICAgIHNldEFjdGl2ZShjdXJyZW50SW5kZXgpO1xuICAgICAgc2VsZi5zZWxlY3Qoc2xpZGVzW2ZpbmRTbGlkZUluZGV4KHNsaWRlKV0pO1xuICAgICAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgJHNjb3BlLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2VsZi5nZXRDdXJyZW50SW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNsaWRlc1tpXS5zbGlkZS5pbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZWxmLm5leHQgPSAkc2NvcGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuZXdJbmRleCA9IChzZWxmLmdldEN1cnJlbnRJbmRleCgpICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5ld0luZGV4ID09PSAwICYmICRzY29wZS5ub1dyYXAoKSkge1xuICAgICAgJHNjb3BlLnBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuc2VsZWN0KHNsaWRlc1tuZXdJbmRleF0sICduZXh0Jyk7XG4gIH07XG5cbiAgc2VsZi5wcmV2ID0gJHNjb3BlLnByZXYgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmV3SW5kZXggPSBzZWxmLmdldEN1cnJlbnRJbmRleCgpIC0gMSA8IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IHNlbGYuZ2V0Q3VycmVudEluZGV4KCkgLSAxO1xuXG4gICAgaWYgKCRzY29wZS5ub1dyYXAoKSAmJiBuZXdJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICRzY29wZS5wYXVzZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLnNlbGVjdChzbGlkZXNbbmV3SW5kZXhdLCAncHJldicpO1xuICB9O1xuXG4gIHNlbGYucmVtb3ZlU2xpZGUgPSBmdW5jdGlvbihzbGlkZSkge1xuICAgIHZhciBpbmRleCA9IGZpbmRTbGlkZUluZGV4KHNsaWRlKTtcblxuICAgIC8vZ2V0IHRoZSBpbmRleCBvZiB0aGUgc2xpZGUgaW5zaWRlIHRoZSBjYXJvdXNlbFxuICAgIHNsaWRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmIChzbGlkZXMubGVuZ3RoID4gMCAmJiBjdXJyZW50SW5kZXggPT09IGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPj0gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgJHNjb3BlLmFjdGl2ZSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgc2V0QWN0aXZlKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIHNlbGYuc2VsZWN0KHNsaWRlc1tzbGlkZXMubGVuZ3RoIC0gMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICRzY29wZS5hY3RpdmUgPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIHNldEFjdGl2ZShjdXJyZW50SW5kZXgpO1xuICAgICAgICBzZWxmLnNlbGVjdChzbGlkZXNbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA+IGluZGV4KSB7XG4gICAgICBjdXJyZW50SW5kZXgtLTtcbiAgICAgICRzY29wZS5hY3RpdmUgPSBjdXJyZW50SW5kZXg7XG4gICAgfVxuXG4gICAgLy9jbGVhbiB0aGUgYWN0aXZlIHZhbHVlIHdoZW4gbm8gbW9yZSBzbGlkZVxuICAgIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjdXJyZW50SW5kZXggPSBudWxsO1xuICAgICAgJHNjb3BlLmFjdGl2ZSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qIGRpcmVjdGlvbjogXCJwcmV2XCIgb3IgXCJuZXh0XCIgKi9cbiAgc2VsZi5zZWxlY3QgPSAkc2NvcGUuc2VsZWN0ID0gZnVuY3Rpb24obmV4dFNsaWRlLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gZmluZFNsaWRlSW5kZXgobmV4dFNsaWRlLnNsaWRlKTtcbiAgICAvL0RlY2lkZSBkaXJlY3Rpb24gaWYgaXQncyBub3QgZ2l2ZW5cbiAgICBpZiAoZGlyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpcmVjdGlvbiA9IG5leHRJbmRleCA+IHNlbGYuZ2V0Q3VycmVudEluZGV4KCkgPyAnbmV4dCcgOiAncHJldic7XG4gICAgfVxuICAgIC8vUHJldmVudCB0aGlzIHVzZXItdHJpZ2dlcmVkIHRyYW5zaXRpb24gZnJvbSBvY2N1cnJpbmcgaWYgdGhlcmUgaXMgYWxyZWFkeSBvbmUgaW4gcHJvZ3Jlc3NcbiAgICBpZiAobmV4dFNsaWRlLnNsaWRlLmluZGV4ICE9PSBjdXJyZW50SW5kZXggJiZcbiAgICAgICEkc2NvcGUuJGN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICBnb05leHQobmV4dFNsaWRlLnNsaWRlLCBuZXh0SW5kZXgsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIC8qIEFsbG93IG91dHNpZGUgcGVvcGxlIHRvIGNhbGwgaW5kZXhPZiBvbiBzbGlkZXMgYXJyYXkgKi9cbiAgJHNjb3BlLmluZGV4T2ZTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlKSB7XG4gICAgcmV0dXJuICtzbGlkZS5zbGlkZS5pbmRleDtcbiAgfTtcblxuICAkc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbihzbGlkZSkge1xuICAgIHJldHVybiAkc2NvcGUuYWN0aXZlID09PSBzbGlkZS5zbGlkZS5pbmRleDtcbiAgfTtcblxuICAkc2NvcGUuaXNQcmV2RGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJHNjb3BlLmFjdGl2ZSA9PT0gMCAmJiAkc2NvcGUubm9XcmFwKCk7XG4gIH07XG5cbiAgJHNjb3BlLmlzTmV4dERpc2FibGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRzY29wZS5hY3RpdmUgPT09IHNsaWRlcy5sZW5ndGggLSAxICYmICRzY29wZS5ub1dyYXAoKTtcbiAgfTtcblxuICAkc2NvcGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISRzY29wZS5ub1BhdXNlKSB7XG4gICAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHJlc2V0VGltZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWlzUGxheWluZykge1xuICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIHJlc3RhcnRUaW1lcigpO1xuICAgIH1cbiAgfTtcblxuICAkZWxlbWVudC5vbignbW91c2VlbnRlcicsICRzY29wZS5wYXVzZSk7XG4gICRlbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgJHNjb3BlLnBsYXkpO1xuXG4gICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXNldFRpbWVyKCk7XG4gIH0pO1xuXG4gICRzY29wZS4kd2F0Y2goJ25vVHJhbnNpdGlvbicsIGZ1bmN0aW9uKG5vVHJhbnNpdGlvbikge1xuICAgICRhbmltYXRlLmVuYWJsZWQoJGVsZW1lbnQsICFub1RyYW5zaXRpb24pO1xuICB9KTtcblxuICAkc2NvcGUuJHdhdGNoKCdpbnRlcnZhbCcsIHJlc3RhcnRUaW1lcik7XG5cbiAgJHNjb3BlLiR3YXRjaENvbGxlY3Rpb24oJ3NsaWRlcycsIHJlc2V0VHJhbnNpdGlvbik7XG5cbiAgJHNjb3BlLiR3YXRjaCgnYWN0aXZlJywgZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoYW5ndWxhci5pc051bWJlcihpbmRleCkgJiYgY3VycmVudEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXS5zbGlkZS5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHNsaWRlID0gc2xpZGVzW2luZGV4XTtcbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzZXRBY3RpdmUoaW5kZXgpO1xuICAgICAgICBzZWxmLnNlbGVjdChzbGlkZXNbaW5kZXhdKTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBnZXRTbGlkZUJ5SW5kZXgoaW5kZXgpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0uaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiBzbGlkZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlKGluZGV4KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNsaWRlc1tpXS5zbGlkZS5hY3RpdmUgPSBpID09PSBpbmRleDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb05leHQoc2xpZGUsIGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQoc2xpZGUsIHtkaXJlY3Rpb246IGRpcmVjdGlvbn0pO1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHNsaWRlc1tjdXJyZW50SW5kZXhdLnNsaWRlIHx8IHt9LCB7ZGlyZWN0aW9uOiBkaXJlY3Rpb259KTtcbiAgICBpZiAoJGFuaW1hdGUuZW5hYmxlZCgkZWxlbWVudCkgJiYgISRzY29wZS4kY3VycmVudFRyYW5zaXRpb24gJiZcbiAgICAgIHNsaWRlc1tpbmRleF0uZWxlbWVudCAmJiBzZWxmLnNsaWRlcy5sZW5ndGggPiAxKSB7XG4gICAgICBzbGlkZXNbaW5kZXhdLmVsZW1lbnQuZGF0YShTTElERV9ESVJFQ1RJT04sIHNsaWRlLmRpcmVjdGlvbik7XG4gICAgICB2YXIgY3VycmVudElkeCA9IHNlbGYuZ2V0Q3VycmVudEluZGV4KCk7XG5cbiAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKGN1cnJlbnRJZHgpICYmIHNsaWRlc1tjdXJyZW50SWR4XS5lbGVtZW50KSB7XG4gICAgICAgIHNsaWRlc1tjdXJyZW50SWR4XS5lbGVtZW50LmRhdGEoU0xJREVfRElSRUNUSU9OLCBzbGlkZS5kaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAkc2NvcGUuJGN1cnJlbnRUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICRhbmltYXRlLm9uKCdhZGRDbGFzcycsIHNsaWRlc1tpbmRleF0uZWxlbWVudCwgZnVuY3Rpb24oZWxlbWVudCwgcGhhc2UpIHtcbiAgICAgICAgaWYgKHBoYXNlID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgJHNjb3BlLiRjdXJyZW50VHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgICAgJGFuaW1hdGUub2ZmKCdhZGRDbGFzcycsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkc2NvcGUuYWN0aXZlID0gc2xpZGUuaW5kZXg7XG4gICAgY3VycmVudEluZGV4ID0gc2xpZGUuaW5kZXg7XG4gICAgc2V0QWN0aXZlKGluZGV4KTtcblxuICAgIC8vZXZlcnkgdGltZSB5b3UgY2hhbmdlIHNsaWRlcywgcmVzZXQgdGhlIHRpbWVyXG4gICAgcmVzdGFydFRpbWVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kU2xpZGVJbmRleChzbGlkZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldLnNsaWRlID09PSBzbGlkZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xuICAgIGlmIChjdXJyZW50SW50ZXJ2YWwpIHtcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwoY3VycmVudEludGVydmFsKTtcbiAgICAgIGN1cnJlbnRJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcmFuc2l0aW9uKHNsaWRlcykge1xuICAgIGlmICghc2xpZGVzLmxlbmd0aCkge1xuICAgICAgJHNjb3BlLiRjdXJyZW50VHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzdGFydFRpbWVyKCkge1xuICAgIHJlc2V0VGltZXIoKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSArJHNjb3BlLmludGVydmFsO1xuICAgIGlmICghaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCkge1xuICAgICAgY3VycmVudEludGVydmFsID0gJGludGVydmFsKHRpbWVyRm4sIGludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckZuKCkge1xuICAgIHZhciBpbnRlcnZhbCA9ICskc2NvcGUuaW50ZXJ2YWw7XG4gICAgaWYgKGlzUGxheWluZyAmJiAhaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAkc2NvcGUubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUucGF1c2UoKTtcbiAgICB9XG4gIH1cbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJDYXJvdXNlbCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgY29udHJvbGxlcjogJ1VpYkNhcm91c2VsQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnY2Fyb3VzZWwnLFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJ3VpYi90ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sJztcbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICBhY3RpdmU6ICc9JyxcbiAgICAgIGludGVydmFsOiAnPScsXG4gICAgICBub1RyYW5zaXRpb246ICc9JyxcbiAgICAgIG5vUGF1c2U6ICc9JyxcbiAgICAgIG5vV3JhcDogJyYnXG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliU2xpZGUnLCBbJyRhbmltYXRlJywgZnVuY3Rpb24oJGFuaW1hdGUpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiAnXnVpYkNhcm91c2VsJyxcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJ3VpYi90ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sJztcbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICBhY3R1YWw6ICc9PycsXG4gICAgICBpbmRleDogJz0/J1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY2Fyb3VzZWxDdHJsKSB7XG4gICAgICBlbGVtZW50LmFkZENsYXNzKCdpdGVtJyk7XG4gICAgICBjYXJvdXNlbEN0cmwuYWRkU2xpZGUoc2NvcGUsIGVsZW1lbnQpO1xuICAgICAgLy93aGVuIHRoZSBzY29wZSBpcyBkZXN0cm95ZWQgdGhlbiByZW1vdmUgdGhlIHNsaWRlIGZyb20gdGhlIGN1cnJlbnQgc2xpZGVzIGFycmF5XG4gICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhcm91c2VsQ3RybC5yZW1vdmVTbGlkZShzY29wZSk7XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCdhY3RpdmUnLCBmdW5jdGlvbihhY3RpdmUpIHtcbiAgICAgICAgJGFuaW1hdGVbYWN0aXZlID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKGVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uYW5pbWF0aW9uKCcuaXRlbScsIFsnJGFuaW1hdGVDc3MnLFxuZnVuY3Rpb24oJGFuaW1hdGVDc3MpIHtcbiAgdmFyIFNMSURFX0RJUkVDVElPTiA9ICd1aWItc2xpZGVEaXJlY3Rpb24nO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgY2FsbGJhY2spIHtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmVmb3JlQWRkQ2xhc3M6IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSwgZG9uZSkge1xuICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGVsZW1lbnQuZGF0YShTTElERV9ESVJFQ1RJT04pO1xuICAgICAgICB2YXIgZGlyZWN0aW9uQ2xhc3MgPSBkaXJlY3Rpb24gPT09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgIHZhciByZW1vdmVDbGFzc0ZuID0gcmVtb3ZlQ2xhc3MuYmluZCh0aGlzLCBlbGVtZW50LFxuICAgICAgICAgIGRpcmVjdGlvbkNsYXNzICsgJyAnICsgZGlyZWN0aW9uLCBkb25lKTtcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhkaXJlY3Rpb24pO1xuXG4gICAgICAgICRhbmltYXRlQ3NzKGVsZW1lbnQsIHthZGRDbGFzczogZGlyZWN0aW9uQ2xhc3N9KVxuICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgLmRvbmUocmVtb3ZlQ2xhc3NGbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZG9uZSgpO1xuICAgIH0sXG4gICAgYmVmb3JlUmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUsIGRvbmUpIHtcbiAgICAgIGlmIChjbGFzc05hbWUgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBlbGVtZW50LmRhdGEoU0xJREVfRElSRUNUSU9OKTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzID0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICB2YXIgcmVtb3ZlQ2xhc3NGbiA9IHJlbW92ZUNsYXNzLmJpbmQodGhpcywgZWxlbWVudCwgZGlyZWN0aW9uQ2xhc3MsIGRvbmUpO1xuXG4gICAgICAgICRhbmltYXRlQ3NzKGVsZW1lbnQsIHthZGRDbGFzczogZGlyZWN0aW9uQ2xhc3N9KVxuICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgLmRvbmUocmVtb3ZlQ2xhc3NGbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kYXRlcGFyc2VyJywgW10pXG5cbi5zZXJ2aWNlKCd1aWJEYXRlUGFyc2VyJywgWyckbG9nJywgJyRsb2NhbGUnLCAnZGF0ZUZpbHRlcicsICdvcmRlckJ5RmlsdGVyJywgJ2ZpbHRlckZpbHRlcicsIGZ1bmN0aW9uKCRsb2csICRsb2NhbGUsIGRhdGVGaWx0ZXIsIG9yZGVyQnlGaWx0ZXIsIGZpbHRlckZpbHRlcikge1xuICAvLyBQdWxsZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWJvc3RvY2svZDMvYmxvYi9tYXN0ZXIvc3JjL2Zvcm1hdC9yZXF1b3RlLmpzXG4gIHZhciBTUEVDSUFMX0NIQVJBQ1RFUlNfUkVHRVhQID0gL1tcXFxcXFxeXFwkXFwqXFwrXFw/XFx8XFxbXFxdXFwoXFwpXFwuXFx7XFx9XS9nO1xuXG4gIHZhciBsb2NhbGVJZDtcbiAgdmFyIGZvcm1hdENvZGVUb1JlZ2V4O1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGxvY2FsZUlkID0gJGxvY2FsZS5pZDtcblxuICAgIHRoaXMucGFyc2VycyA9IHt9O1xuICAgIHRoaXMuZm9ybWF0dGVycyA9IHt9O1xuXG4gICAgZm9ybWF0Q29kZVRvUmVnZXggPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3l5eXknLFxuICAgICAgICByZWdleDogJ1xcXFxkezR9JyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMueWVhciA9ICt2YWx1ZTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgdmFyIF9kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBfZGF0ZS5zZXRGdWxsWWVhcihNYXRoLmFicyhkYXRlLmdldEZ1bGxZZWFyKCkpKTtcbiAgICAgICAgICByZXR1cm4gZGF0ZUZpbHRlcihfZGF0ZSwgJ3l5eXknKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAneXknLFxuICAgICAgICByZWdleDogJ1xcXFxkezJ9JyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHZhbHVlID0gK3ZhbHVlOyB0aGlzLnllYXIgPSB2YWx1ZSA8IDY5ID8gdmFsdWUgKyAyMDAwIDogdmFsdWUgKyAxOTAwOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgICB2YXIgX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIF9kYXRlLnNldEZ1bGxZZWFyKE1hdGguYWJzKGRhdGUuZ2V0RnVsbFllYXIoKSkpO1xuICAgICAgICAgIHJldHVybiBkYXRlRmlsdGVyKF9kYXRlLCAneXknKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAneScsXG4gICAgICAgIHJlZ2V4OiAnXFxcXGR7MSw0fScsXG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLnllYXIgPSArdmFsdWU7IH0sXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgICAgIHZhciBfZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgX2RhdGUuc2V0RnVsbFllYXIoTWF0aC5hYnMoZGF0ZS5nZXRGdWxsWWVhcigpKSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGVGaWx0ZXIoX2RhdGUsICd5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ00hJyxcbiAgICAgICAgcmVnZXg6ICcwP1sxLTldfDFbMC0yXScsXG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLm1vbnRoID0gdmFsdWUgLSAxOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgaWYgKC9eWzAtOV0kLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ01NJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ00nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnTU1NTScsXG4gICAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuTU9OVEguam9pbignfCcpLFxuICAgICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5tb250aCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5NT05USC5pbmRleE9mKHZhbHVlKTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdNTU1NJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ01NTScsXG4gICAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlRNT05USC5qb2luKCd8JyksXG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLm1vbnRoID0gJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLlNIT1JUTU9OVEguaW5kZXhPZih2YWx1ZSk7IH0sXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkgeyByZXR1cm4gZGF0ZUZpbHRlcihkYXRlLCAnTU1NJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ01NJyxcbiAgICAgICAgcmVnZXg6ICcwWzEtOV18MVswLTJdJyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSB2YWx1ZSAtIDE7IH0sXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkgeyByZXR1cm4gZGF0ZUZpbHRlcihkYXRlLCAnTU0nKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnTScsXG4gICAgICAgIHJlZ2V4OiAnWzEtOV18MVswLTJdJyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSB2YWx1ZSAtIDE7IH0sXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkgeyByZXR1cm4gZGF0ZUZpbHRlcihkYXRlLCAnTScpOyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdkIScsXG4gICAgICAgIHJlZ2V4OiAnWzAtMl0/WzAtOV17MX18M1swLTFdezF9JyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuZGF0ZSA9ICt2YWx1ZTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgaWYgKC9eWzEtOV0kLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ2RkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ2QnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZGQnLFxuICAgICAgICByZWdleDogJ1swLTJdWzAtOV17MX18M1swLTFdezF9JyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuZGF0ZSA9ICt2YWx1ZTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdkZCcpOyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdkJyxcbiAgICAgICAgcmVnZXg6ICdbMS0yXT9bMC05XXsxfXwzWzAtMV17MX0nLFxuICAgICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5kYXRlID0gK3ZhbHVlOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ2QnKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnRUVFRScsXG4gICAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuREFZLmpvaW4oJ3wnKSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdFRUVFJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ0VFRScsXG4gICAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlREQVkuam9pbignfCcpLFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ0VFRScpOyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdISCcsXG4gICAgICAgIHJlZ2V4OiAnKD86MHwxKVswLTldfDJbMC0zXScsXG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLmhvdXJzID0gK3ZhbHVlOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ0hIJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2hoJyxcbiAgICAgICAgcmVnZXg6ICcwWzAtOV18MVswLTJdJyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuaG91cnMgPSArdmFsdWU7IH0sXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkgeyByZXR1cm4gZGF0ZUZpbHRlcihkYXRlLCAnaGgnKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnSCcsXG4gICAgICAgIHJlZ2V4OiAnMT9bMC05XXwyWzAtM10nLFxuICAgICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5ob3VycyA9ICt2YWx1ZTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdIJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2gnLFxuICAgICAgICByZWdleDogJ1swLTldfDFbMC0yXScsXG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLmhvdXJzID0gK3ZhbHVlOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ2gnKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbW0nLFxuICAgICAgICByZWdleDogJ1swLTVdWzAtOV0nLFxuICAgICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5taW51dGVzID0gK3ZhbHVlOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ21tJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ20nLFxuICAgICAgICByZWdleDogJ1swLTldfFsxLTVdWzAtOV0nLFxuICAgICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5taW51dGVzID0gK3ZhbHVlOyB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ20nKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnc3NzJyxcbiAgICAgICAgcmVnZXg6ICdbMC05XVswLTldWzAtOV0nLFxuICAgICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5taWxsaXNlY29uZHMgPSArdmFsdWU7IH0sXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkgeyByZXR1cm4gZGF0ZUZpbHRlcihkYXRlLCAnc3NzJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NzJyxcbiAgICAgICAgcmVnZXg6ICdbMC01XVswLTldJyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuc2Vjb25kcyA9ICt2YWx1ZTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdzcycpOyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzJyxcbiAgICAgICAgcmVnZXg6ICdbMC05XXxbMS01XVswLTldJyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuc2Vjb25kcyA9ICt2YWx1ZTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdzJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2EnLFxuICAgICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkFNUE1TLmpvaW4oJ3wnKSxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJzID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWUgPT09ICdQTScpIHtcbiAgICAgICAgICAgIHRoaXMuaG91cnMgKz0gMTI7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ2EnKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnWicsXG4gICAgICAgIHJlZ2V4OiAnWystXVxcXFxkezR9JyxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaCgvKFsrLV0pKFxcZHsyfSkoXFxkezJ9KS8pLFxuICAgICAgICAgICAgc2lnbiA9IG1hdGNoZXNbMV0sXG4gICAgICAgICAgICBob3VycyA9IG1hdGNoZXNbMl0sXG4gICAgICAgICAgICBtaW51dGVzID0gbWF0Y2hlc1szXTtcbiAgICAgICAgICB0aGlzLmhvdXJzICs9IHRvSW50KHNpZ24gKyBob3Vycyk7XG4gICAgICAgICAgdGhpcy5taW51dGVzICs9IHRvSW50KHNpZ24gKyBtaW51dGVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ1onKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnd3cnLFxuICAgICAgICByZWdleDogJ1swLTRdWzAtOV18NVswLTNdJyxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICd3dycpOyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd3JyxcbiAgICAgICAgcmVnZXg6ICdbMC05XXxbMS00XVswLTldfDVbMC0zXScsXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oZGF0ZSkgeyByZXR1cm4gZGF0ZUZpbHRlcihkYXRlLCAndycpOyB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdHR0dHJyxcbiAgICAgICAgcmVnZXg6ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5FUkFOQU1FUy5qb2luKCd8JykucmVwbGFjZSgvXFxzL2csICdcXFxccycpLFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ0dHR0cnKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnR0dHJyxcbiAgICAgICAgcmVnZXg6ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5FUkFTLmpvaW4oJ3wnKSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdHR0cnKTsgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnR0cnLFxuICAgICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkVSQVMuam9pbignfCcpLFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ0dHJyk7IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ0cnLFxuICAgICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkVSQVMuam9pbignfCcpLFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGRhdGUpIHsgcmV0dXJuIGRhdGVGaWx0ZXIoZGF0ZSwgJ0cnKTsgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoYW5ndWxhci52ZXJzaW9uLm1ham9yID49IDEgJiYgYW5ndWxhci52ZXJzaW9uLm1pbm9yID4gNCkge1xuICAgICAgZm9ybWF0Q29kZVRvUmVnZXgucHVzaCh7XG4gICAgICAgIGtleTogJ0xMTEwnLFxuICAgICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLlNUQU5EQUxPTkVNT05USC5qb2luKCd8JyksXG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLm1vbnRoID0gJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLlNUQU5EQUxPTkVNT05USC5pbmRleE9mKHZhbHVlKTsgfSxcbiAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihkYXRlKSB7IHJldHVybiBkYXRlRmlsdGVyKGRhdGUsICdMTExMJyk7IH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmluaXQoKTtcblxuICBmdW5jdGlvbiBnZXRGb3JtYXRDb2RlVG9SZWdleChrZXkpIHtcbiAgICByZXR1cm4gZmlsdGVyRmlsdGVyKGZvcm1hdENvZGVUb1JlZ2V4LCB7a2V5OiBrZXl9LCB0cnVlKVswXTtcbiAgfVxuXG4gIHRoaXMuZ2V0UGFyc2VyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBmID0gZ2V0Rm9ybWF0Q29kZVRvUmVnZXgoa2V5KTtcbiAgICByZXR1cm4gZiAmJiBmLmFwcGx5IHx8IG51bGw7XG4gIH07XG5cbiAgdGhpcy5vdmVycmlkZVBhcnNlciA9IGZ1bmN0aW9uIChrZXksIHBhcnNlcikge1xuICAgIHZhciBmID0gZ2V0Rm9ybWF0Q29kZVRvUmVnZXgoa2V5KTtcbiAgICBpZiAoZiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgdGhpcy5wYXJzZXJzID0ge307XG4gICAgICBmLmFwcGx5ID0gcGFyc2VyO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihmb3JtYXQpIHtcbiAgICB2YXIgbWFwID0gW10sIHJlZ2V4ID0gZm9ybWF0LnNwbGl0KCcnKTtcblxuICAgIC8vIGNoZWNrIGZvciBsaXRlcmFsIHZhbHVlc1xuICAgIHZhciBxdW90ZUluZGV4ID0gZm9ybWF0LmluZGV4T2YoJ1xcJycpO1xuICAgIGlmIChxdW90ZUluZGV4ID4gLTEpIHtcbiAgICAgIHZhciBpbkxpdGVyYWwgPSBmYWxzZTtcbiAgICAgIGZvcm1hdCA9IGZvcm1hdC5zcGxpdCgnJyk7XG4gICAgICBmb3IgKHZhciBpID0gcXVvdGVJbmRleDsgaSA8IGZvcm1hdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5MaXRlcmFsKSB7XG4gICAgICAgICAgaWYgKGZvcm1hdFtpXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGlmIChpICsgMSA8IGZvcm1hdC5sZW5ndGggJiYgZm9ybWF0W2krMV0gPT09ICdcXCcnKSB7IC8vIGVzY2FwZWQgc2luZ2xlIHF1b3RlXG4gICAgICAgICAgICAgIGZvcm1hdFtpKzFdID0gJyQnO1xuICAgICAgICAgICAgICByZWdleFtpKzFdID0gJyc7XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBlbmQgb2YgbGl0ZXJhbFxuICAgICAgICAgICAgICByZWdleFtpXSA9ICcnO1xuICAgICAgICAgICAgICBpbkxpdGVyYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybWF0W2ldID0gJyQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChmb3JtYXRbaV0gPT09ICdcXCcnKSB7IC8vIHN0YXJ0IG9mIGxpdGVyYWxcbiAgICAgICAgICAgIGZvcm1hdFtpXSA9ICckJztcbiAgICAgICAgICAgIHJlZ2V4W2ldID0gJyc7XG4gICAgICAgICAgICBpbkxpdGVyYWwgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3JtYXQgPSBmb3JtYXQuam9pbignJyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5mb3JFYWNoKGZvcm1hdENvZGVUb1JlZ2V4LCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgaW5kZXggPSBmb3JtYXQuaW5kZXhPZihkYXRhLmtleSk7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zcGxpdCgnJyk7XG5cbiAgICAgICAgcmVnZXhbaW5kZXhdID0gJygnICsgZGF0YS5yZWdleCArICcpJztcbiAgICAgICAgZm9ybWF0W2luZGV4XSA9ICckJzsgLy8gQ3VzdG9tIHN5bWJvbCB0byBkZWZpbmUgY29uc3VtZWQgcGFydCBvZiBmb3JtYXRcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMSwgbiA9IGluZGV4ICsgZGF0YS5rZXkubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcmVnZXhbaV0gPSAnJztcbiAgICAgICAgICBmb3JtYXRbaV0gPSAnJCc7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LmpvaW4oJycpO1xuXG4gICAgICAgIG1hcC5wdXNoKHtcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAga2V5OiBkYXRhLmtleSxcbiAgICAgICAgICBhcHBseTogZGF0YS5hcHBseSxcbiAgICAgICAgICBtYXRjaGVyOiBkYXRhLnJlZ2V4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKCdeJyArIHJlZ2V4LmpvaW4oJycpICsgJyQnKSxcbiAgICAgIG1hcDogb3JkZXJCeUZpbHRlcihtYXAsICdpbmRleCcpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUZvcm1hdHRlcihmb3JtYXQpIHtcbiAgICB2YXIgZm9ybWF0dGVycyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgZm9ybWF0dGVyLCBsaXRlcmFsSWR4O1xuICAgIHdoaWxlIChpIDwgZm9ybWF0Lmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNOdW1iZXIobGl0ZXJhbElkeCkpIHtcbiAgICAgICAgaWYgKGZvcm1hdC5jaGFyQXQoaSkgPT09ICdcXCcnKSB7XG4gICAgICAgICAgaWYgKGkgKyAxID49IGZvcm1hdC5sZW5ndGggfHwgZm9ybWF0LmNoYXJBdChpICsgMSkgIT09ICdcXCcnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZXJzLnB1c2goY29uc3RydWN0TGl0ZXJhbEZvcm1hdHRlcihmb3JtYXQsIGxpdGVyYWxJZHgsIGkpKTtcbiAgICAgICAgICAgIGxpdGVyYWxJZHggPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpID09PSBmb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgd2hpbGUgKGxpdGVyYWxJZHggPCBmb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZXIgPSBjb25zdHJ1Y3RGb3JtYXR0ZXJGcm9tSWR4KGZvcm1hdCwgbGl0ZXJhbElkeCk7XG4gICAgICAgICAgICBmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcbiAgICAgICAgICAgIGxpdGVyYWxJZHggPSBmb3JtYXR0ZXIuZW5kSWR4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXQuY2hhckF0KGkpID09PSAnXFwnJykge1xuICAgICAgICBsaXRlcmFsSWR4ID0gaTtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9ybWF0dGVyID0gY29uc3RydWN0Rm9ybWF0dGVyRnJvbUlkeChmb3JtYXQsIGkpO1xuXG4gICAgICBmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyLnBhcnNlcik7XG4gICAgICBpID0gZm9ybWF0dGVyLmVuZElkeDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVycztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdExpdGVyYWxGb3JtYXR0ZXIoZm9ybWF0LCBsaXRlcmFsSWR4LCBlbmRJZHgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm9ybWF0LnN1YnN0cihsaXRlcmFsSWR4ICsgMSwgZW5kSWR4IC0gbGl0ZXJhbElkeCAtIDEpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RGb3JtYXR0ZXJGcm9tSWR4KGZvcm1hdCwgaSkge1xuICAgIHZhciBjdXJyZW50UG9zU3RyID0gZm9ybWF0LnN1YnN0cihpKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvcm1hdENvZGVUb1JlZ2V4Lmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAobmV3IFJlZ0V4cCgnXicgKyBmb3JtYXRDb2RlVG9SZWdleFtqXS5rZXkpLnRlc3QoY3VycmVudFBvc1N0cikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBmb3JtYXRDb2RlVG9SZWdleFtqXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbmRJZHg6IGkgKyBkYXRhLmtleS5sZW5ndGgsXG4gICAgICAgICAgcGFyc2VyOiBkYXRhLmZvcm1hdHRlclxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBlbmRJZHg6IGkgKyAxLFxuICAgICAgcGFyc2VyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQb3NTdHIuY2hhckF0KDApO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB0aGlzLmZpbHRlciA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xuICAgIGlmICghYW5ndWxhci5pc0RhdGUoZGF0ZSkgfHwgaXNOYU4oZGF0ZSkgfHwgIWZvcm1hdCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZvcm1hdCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUU1tmb3JtYXRdIHx8IGZvcm1hdDtcblxuICAgIGlmICgkbG9jYWxlLmlkICE9PSBsb2NhbGVJZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmZvcm1hdHRlcnNbZm9ybWF0XSkge1xuICAgICAgdGhpcy5mb3JtYXR0ZXJzW2Zvcm1hdF0gPSBjcmVhdGVGb3JtYXR0ZXIoZm9ybWF0KTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVycyA9IHRoaXMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlcnMucmVkdWNlKGZ1bmN0aW9uKHN0ciwgZm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gc3RyICsgZm9ybWF0dGVyKGRhdGUpO1xuICAgIH0sICcnKTtcbiAgfTtcblxuICB0aGlzLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGZvcm1hdCwgYmFzZURhdGUpIHtcbiAgICBpZiAoIWFuZ3VsYXIuaXNTdHJpbmcoaW5wdXQpIHx8ICFmb3JtYXQpIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFNbZm9ybWF0XSB8fCBmb3JtYXQ7XG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoU1BFQ0lBTF9DSEFSQUNURVJTX1JFR0VYUCwgJ1xcXFwkJicpO1xuXG4gICAgaWYgKCRsb2NhbGUuaWQgIT09IGxvY2FsZUlkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucGFyc2Vyc1tmb3JtYXRdKSB7XG4gICAgICB0aGlzLnBhcnNlcnNbZm9ybWF0XSA9IGNyZWF0ZVBhcnNlcihmb3JtYXQsICdhcHBseScpO1xuICAgIH1cblxuICAgIHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcnNbZm9ybWF0XSxcbiAgICAgICAgcmVnZXggPSBwYXJzZXIucmVnZXgsXG4gICAgICAgIG1hcCA9IHBhcnNlci5tYXAsXG4gICAgICAgIHJlc3VsdHMgPSBpbnB1dC5tYXRjaChyZWdleCksXG4gICAgICAgIHR6T2Zmc2V0ID0gZmFsc2U7XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHZhciBmaWVsZHMsIGR0O1xuICAgICAgaWYgKGFuZ3VsYXIuaXNEYXRlKGJhc2VEYXRlKSAmJiAhaXNOYU4oYmFzZURhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICBmaWVsZHMgPSB7XG4gICAgICAgICAgeWVhcjogYmFzZURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBtb250aDogYmFzZURhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICBkYXRlOiBiYXNlRGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgaG91cnM6IGJhc2VEYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgbWludXRlczogYmFzZURhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgIHNlY29uZHM6IGJhc2VEYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICAgICBtaWxsaXNlY29uZHM6IGJhc2VEYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYmFzZURhdGUpIHtcbiAgICAgICAgICAkbG9nLndhcm4oJ2RhdGVwYXJzZXI6JywgJ2Jhc2VEYXRlIGlzIG5vdCBhIHZhbGlkIGRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHMgPSB7IHllYXI6IDE5MDAsIG1vbnRoOiAwLCBkYXRlOiAxLCBob3VyczogMCwgbWludXRlczogMCwgc2Vjb25kczogMCwgbWlsbGlzZWNvbmRzOiAwIH07XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAxLCBuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFyIG1hcHBlciA9IG1hcFtpIC0gMV07XG4gICAgICAgIGlmIChtYXBwZXIubWF0Y2hlciA9PT0gJ1onKSB7XG4gICAgICAgICAgdHpPZmZzZXQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcHBlci5hcHBseSkge1xuICAgICAgICAgIG1hcHBlci5hcHBseS5jYWxsKGZpZWxkcywgcmVzdWx0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGVzZXR0ZXIgPSB0ek9mZnNldCA/IERhdGUucHJvdG90eXBlLnNldFVUQ0Z1bGxZZWFyIDpcbiAgICAgICAgRGF0ZS5wcm90b3R5cGUuc2V0RnVsbFllYXI7XG4gICAgICB2YXIgdGltZXNldHRlciA9IHR6T2Zmc2V0ID8gRGF0ZS5wcm90b3R5cGUuc2V0VVRDSG91cnMgOlxuICAgICAgICBEYXRlLnByb3RvdHlwZS5zZXRIb3VycztcblxuICAgICAgaWYgKGlzVmFsaWQoZmllbGRzLnllYXIsIGZpZWxkcy5tb250aCwgZmllbGRzLmRhdGUpKSB7XG4gICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZShiYXNlRGF0ZSkgJiYgIWlzTmFOKGJhc2VEYXRlLmdldFRpbWUoKSkgJiYgIXR6T2Zmc2V0KSB7XG4gICAgICAgICAgZHQgPSBuZXcgRGF0ZShiYXNlRGF0ZSk7XG4gICAgICAgICAgZGF0ZXNldHRlci5jYWxsKGR0LCBmaWVsZHMueWVhciwgZmllbGRzLm1vbnRoLCBmaWVsZHMuZGF0ZSk7XG4gICAgICAgICAgdGltZXNldHRlci5jYWxsKGR0LCBmaWVsZHMuaG91cnMsIGZpZWxkcy5taW51dGVzLFxuICAgICAgICAgICAgZmllbGRzLnNlY29uZHMsIGZpZWxkcy5taWxsaXNlY29uZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR0ID0gbmV3IERhdGUoMCk7XG4gICAgICAgICAgZGF0ZXNldHRlci5jYWxsKGR0LCBmaWVsZHMueWVhciwgZmllbGRzLm1vbnRoLCBmaWVsZHMuZGF0ZSk7XG4gICAgICAgICAgdGltZXNldHRlci5jYWxsKGR0LCBmaWVsZHMuaG91cnMgfHwgMCwgZmllbGRzLm1pbnV0ZXMgfHwgMCxcbiAgICAgICAgICAgIGZpZWxkcy5zZWNvbmRzIHx8IDAsIGZpZWxkcy5taWxsaXNlY29uZHMgfHwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGR0O1xuICAgIH1cbiAgfTtcblxuICAvLyBDaGVjayBpZiBkYXRlIGlzIHZhbGlkIGZvciBzcGVjaWZpYyBtb250aCAoYW5kIHllYXIgZm9yIEZlYnJ1YXJ5KS5cbiAgLy8gTW9udGg6IDAgPSBKYW4sIDEgPSBGZWIsIGV0Y1xuICBmdW5jdGlvbiBpc1ZhbGlkKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gICAgaWYgKGRhdGUgPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG1vbnRoID09PSAxICYmIGRhdGUgPiAyOCkge1xuICAgICAgcmV0dXJuIGRhdGUgPT09IDI5ICYmICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xuICAgIH1cblxuICAgIGlmIChtb250aCA9PT0gMyB8fCBtb250aCA9PT0gNSB8fCBtb250aCA9PT0gOCB8fCBtb250aCA9PT0gMTApIHtcbiAgICAgIHJldHVybiBkYXRlIDwgMzE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB0b0ludChzdHIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIH1cblxuICB0aGlzLnRvVGltZXpvbmUgPSB0b1RpbWV6b25lO1xuICB0aGlzLmZyb21UaW1lem9uZSA9IGZyb21UaW1lem9uZTtcbiAgdGhpcy50aW1lem9uZVRvT2Zmc2V0ID0gdGltZXpvbmVUb09mZnNldDtcbiAgdGhpcy5hZGREYXRlTWludXRlcyA9IGFkZERhdGVNaW51dGVzO1xuICB0aGlzLmNvbnZlcnRUaW1lem9uZVRvTG9jYWwgPSBjb252ZXJ0VGltZXpvbmVUb0xvY2FsO1xuXG4gIGZ1bmN0aW9uIHRvVGltZXpvbmUoZGF0ZSwgdGltZXpvbmUpIHtcbiAgICByZXR1cm4gZGF0ZSAmJiB0aW1lem9uZSA/IGNvbnZlcnRUaW1lem9uZVRvTG9jYWwoZGF0ZSwgdGltZXpvbmUpIDogZGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21UaW1lem9uZShkYXRlLCB0aW1lem9uZSkge1xuICAgIHJldHVybiBkYXRlICYmIHRpbWV6b25lID8gY29udmVydFRpbWV6b25lVG9Mb2NhbChkYXRlLCB0aW1lem9uZSwgdHJ1ZSkgOiBkYXRlO1xuICB9XG5cbiAgLy9odHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvNjIyYzQyMTY5Njk5ZWMwN2ZjNmRhYWExOWZlNmQyMjRlNWQyZjcwZS9zcmMvQW5ndWxhci5qcyNMMTIwN1xuICBmdW5jdGlvbiB0aW1lem9uZVRvT2Zmc2V0KHRpbWV6b25lLCBmYWxsYmFjaykge1xuICAgIHRpbWV6b25lID0gdGltZXpvbmUucmVwbGFjZSgvOi9nLCAnJyk7XG4gICAgdmFyIHJlcXVlc3RlZFRpbWV6b25lT2Zmc2V0ID0gRGF0ZS5wYXJzZSgnSmFuIDAxLCAxOTcwIDAwOjAwOjAwICcgKyB0aW1lem9uZSkgLyA2MDAwMDtcbiAgICByZXR1cm4gaXNOYU4ocmVxdWVzdGVkVGltZXpvbmVPZmZzZXQpID8gZmFsbGJhY2sgOiByZXF1ZXN0ZWRUaW1lem9uZU9mZnNldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERhdGVNaW51dGVzKGRhdGUsIG1pbnV0ZXMpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIG1pbnV0ZXMpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFRpbWV6b25lVG9Mb2NhbChkYXRlLCB0aW1lem9uZSwgcmV2ZXJzZSkge1xuICAgIHJldmVyc2UgPSByZXZlcnNlID8gLTEgOiAxO1xuICAgIHZhciBkYXRlVGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVUb09mZnNldCh0aW1lem9uZSwgZGF0ZVRpbWV6b25lT2Zmc2V0KTtcbiAgICByZXR1cm4gYWRkRGF0ZU1pbnV0ZXMoZGF0ZSwgcmV2ZXJzZSAqICh0aW1lem9uZU9mZnNldCAtIGRhdGVUaW1lem9uZU9mZnNldCkpO1xuICB9XG59XSk7XG5cbi8vIEF2b2lkaW5nIHVzZSBvZiBuZy1jbGFzcyBhcyBpdCBjcmVhdGVzIGEgbG90IG9mIHdhdGNoZXJzIHdoZW4gYSBjbGFzcyBpcyB0byBiZSBhcHBsaWVkIHRvXG4vLyBhdCBtb3N0IG9uZSBlbGVtZW50LlxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5pc0NsYXNzJywgW10pXG4uZGlyZWN0aXZlKCd1aWJJc0NsYXNzJywgW1xuICAgICAgICAgJyRhbmltYXRlJyxcbmZ1bmN0aW9uICgkYW5pbWF0ZSkge1xuICAvLyAgICAgICAgICAgICAgICAgICAgMTExMTExMTEgICAgICAgICAgMjIyMjIyMjJcbiAgdmFyIE9OX1JFR0VYUCA9IC9eXFxzKihbXFxzXFxTXSs/KVxccytvblxccysoW1xcc1xcU10rPylcXHMqJC87XG4gIC8vICAgICAgICAgICAgICAgICAgICAxMTExMTExMSAgICAgICAgICAgMjIyMjIyMjJcbiAgdmFyIElTX1JFR0VYUCA9IC9eXFxzKihbXFxzXFxTXSs/KVxccytmb3JcXHMrKFtcXHNcXFNdKz8pXFxzKiQvO1xuXG4gIHZhciBkYXRhUGVyVHJhY2tlZCA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBjb21waWxlOiBmdW5jdGlvbih0RWxlbWVudCwgdEF0dHJzKSB7XG4gICAgICB2YXIgbGlua2VkU2NvcGVzID0gW107XG4gICAgICB2YXIgaW5zdGFuY2VzID0gW107XG4gICAgICB2YXIgZXhwVG9EYXRhID0ge307XG4gICAgICB2YXIgbGFzdEFjdGl2YXRlZCA9IG51bGw7XG4gICAgICB2YXIgb25FeHBNYXRjaGVzID0gdEF0dHJzLnVpYklzQ2xhc3MubWF0Y2goT05fUkVHRVhQKTtcbiAgICAgIHZhciBvbkV4cCA9IG9uRXhwTWF0Y2hlc1syXTtcbiAgICAgIHZhciBleHBzU3RyID0gb25FeHBNYXRjaGVzWzFdO1xuICAgICAgdmFyIGV4cHMgPSBleHBzU3RyLnNwbGl0KCcsJyk7XG5cbiAgICAgIHJldHVybiBsaW5rRm47XG5cbiAgICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGlua2VkU2NvcGVzLnB1c2goc2NvcGUpO1xuICAgICAgICBpbnN0YW5jZXMucHVzaCh7XG4gICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhwcy5mb3JFYWNoKGZ1bmN0aW9uKGV4cCwgaykge1xuICAgICAgICAgIGFkZEZvckV4cChleHAsIHNjb3BlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIHJlbW92ZVNjb3BlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkRm9yRXhwKGV4cCwgc2NvcGUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBleHAubWF0Y2goSVNfUkVHRVhQKTtcbiAgICAgICAgdmFyIGNsYXp6ID0gc2NvcGUuJGV2YWwobWF0Y2hlc1sxXSk7XG4gICAgICAgIHZhciBjb21wYXJlV2l0aEV4cCA9IG1hdGNoZXNbMl07XG4gICAgICAgIHZhciBkYXRhID0gZXhwVG9EYXRhW2V4cF07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIHZhciB3YXRjaEZuID0gZnVuY3Rpb24oY29tcGFyZVdpdGhWYWwpIHtcbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmF0ZWQgPSBudWxsO1xuICAgICAgICAgICAgaW5zdGFuY2VzLnNvbWUoZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgdmFyIHRoaXNWYWwgPSBpbnN0YW5jZS5zY29wZS4kZXZhbChvbkV4cCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzVmFsID09PSBjb21wYXJlV2l0aFZhbCkge1xuICAgICAgICAgICAgICAgIG5ld0FjdGl2YXRlZCA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxhc3RBY3RpdmF0ZWQgIT09IG5ld0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5sYXN0QWN0aXZhdGVkKSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUucmVtb3ZlQ2xhc3MoZGF0YS5sYXN0QWN0aXZhdGVkLmVsZW1lbnQsIGNsYXp6KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobmV3QWN0aXZhdGVkKSB7XG4gICAgICAgICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MobmV3QWN0aXZhdGVkLmVsZW1lbnQsIGNsYXp6KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLmxhc3RBY3RpdmF0ZWQgPSBuZXdBY3RpdmF0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBleHBUb0RhdGFbZXhwXSA9IGRhdGEgPSB7XG4gICAgICAgICAgICBsYXN0QWN0aXZhdGVkOiBudWxsLFxuICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgd2F0Y2hGbjogd2F0Y2hGbixcbiAgICAgICAgICAgIGNvbXBhcmVXaXRoRXhwOiBjb21wYXJlV2l0aEV4cCxcbiAgICAgICAgICAgIHdhdGNoZXI6IHNjb3BlLiR3YXRjaChjb21wYXJlV2l0aEV4cCwgd2F0Y2hGbilcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEud2F0Y2hGbihzY29wZS4kZXZhbChjb21wYXJlV2l0aEV4cCkpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVTY29wZShlKSB7XG4gICAgICAgIHZhciByZW1vdmVkU2NvcGUgPSBlLnRhcmdldFNjb3BlO1xuICAgICAgICB2YXIgaW5kZXggPSBsaW5rZWRTY29wZXMuaW5kZXhPZihyZW1vdmVkU2NvcGUpO1xuICAgICAgICBsaW5rZWRTY29wZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChsaW5rZWRTY29wZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIG5ld1dhdGNoU2NvcGUgPSBsaW5rZWRTY29wZXNbMF07XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGV4cFRvRGF0YSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuc2NvcGUgPT09IHJlbW92ZWRTY29wZSkge1xuICAgICAgICAgICAgICBkYXRhLndhdGNoZXIgPSBuZXdXYXRjaFNjb3BlLiR3YXRjaChkYXRhLmNvbXBhcmVXaXRoRXhwLCBkYXRhLndhdGNoRm4pO1xuICAgICAgICAgICAgICBkYXRhLnNjb3BlID0gbmV3V2F0Y2hTY29wZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHBUb0RhdGEgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1dKTtcbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuZGF0ZXBpY2tlcicsIFsndWkuYm9vdHN0cmFwLmRhdGVwYXJzZXInLCAndWkuYm9vdHN0cmFwLmlzQ2xhc3MnXSlcblxuLnZhbHVlKCckZGF0ZXBpY2tlclN1cHByZXNzRXJyb3InLCBmYWxzZSlcblxuLnZhbHVlKCckZGF0ZXBpY2tlckxpdGVyYWxXYXJuaW5nJywgdHJ1ZSlcblxuLmNvbnN0YW50KCd1aWJEYXRlcGlja2VyQ29uZmlnJywge1xuICBkYXRlcGlja2VyTW9kZTogJ2RheScsXG4gIGZvcm1hdERheTogJ2RkJyxcbiAgZm9ybWF0TW9udGg6ICdNTU1NJyxcbiAgZm9ybWF0WWVhcjogJ3l5eXknLFxuICBmb3JtYXREYXlIZWFkZXI6ICdFRUUnLFxuICBmb3JtYXREYXlUaXRsZTogJ01NTU0geXl5eScsXG4gIGZvcm1hdE1vbnRoVGl0bGU6ICd5eXl5JyxcbiAgbWF4RGF0ZTogbnVsbCxcbiAgbWF4TW9kZTogJ3llYXInLFxuICBtaW5EYXRlOiBudWxsLFxuICBtaW5Nb2RlOiAnZGF5JyxcbiAgbW9udGhDb2x1bW5zOiAzLFxuICBuZ01vZGVsT3B0aW9uczoge30sXG4gIHNob3J0Y3V0UHJvcGFnYXRpb246IGZhbHNlLFxuICBzaG93V2Vla3M6IHRydWUsXG4gIHllYXJDb2x1bW5zOiA1LFxuICB5ZWFyUm93czogNFxufSlcblxuLmNvbnRyb2xsZXIoJ1VpYkRhdGVwaWNrZXJDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgJyRwYXJzZScsICckaW50ZXJwb2xhdGUnLCAnJGxvY2FsZScsICckbG9nJywgJ2RhdGVGaWx0ZXInLCAndWliRGF0ZXBpY2tlckNvbmZpZycsICckZGF0ZXBpY2tlckxpdGVyYWxXYXJuaW5nJywgJyRkYXRlcGlja2VyU3VwcHJlc3NFcnJvcicsICd1aWJEYXRlUGFyc2VyJyxcbiAgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkcGFyc2UsICRpbnRlcnBvbGF0ZSwgJGxvY2FsZSwgJGxvZywgZGF0ZUZpbHRlciwgZGF0ZXBpY2tlckNvbmZpZywgJGRhdGVwaWNrZXJMaXRlcmFsV2FybmluZywgJGRhdGVwaWNrZXJTdXBwcmVzc0Vycm9yLCBkYXRlUGFyc2VyKSB7XG4gIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIG5nTW9kZWxDdHJsID0geyAkc2V0Vmlld1ZhbHVlOiBhbmd1bGFyLm5vb3AgfSwgLy8gbnVsbE1vZGVsQ3RybDtcbiAgICAgIG5nTW9kZWxPcHRpb25zID0ge30sXG4gICAgICB3YXRjaExpc3RlbmVycyA9IFtdO1xuXG4gICRlbGVtZW50LmFkZENsYXNzKCd1aWItZGF0ZXBpY2tlcicpO1xuICAkYXR0cnMuJHNldCgncm9sZScsICdhcHBsaWNhdGlvbicpO1xuXG4gIGlmICghJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zKSB7XG4gICAgJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zID0ge307XG4gIH1cblxuICAvLyBNb2RlcyBjaGFpblxuICB0aGlzLm1vZGVzID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xuXG4gIFtcbiAgICAnY3VzdG9tQ2xhc3MnLFxuICAgICdkYXRlRGlzYWJsZWQnLFxuICAgICdkYXRlcGlja2VyTW9kZScsXG4gICAgJ2Zvcm1hdERheScsXG4gICAgJ2Zvcm1hdERheUhlYWRlcicsXG4gICAgJ2Zvcm1hdERheVRpdGxlJyxcbiAgICAnZm9ybWF0TW9udGgnLFxuICAgICdmb3JtYXRNb250aFRpdGxlJyxcbiAgICAnZm9ybWF0WWVhcicsXG4gICAgJ21heERhdGUnLFxuICAgICdtYXhNb2RlJyxcbiAgICAnbWluRGF0ZScsXG4gICAgJ21pbk1vZGUnLFxuICAgICdtb250aENvbHVtbnMnLFxuICAgICdzaG93V2Vla3MnLFxuICAgICdzaG9ydGN1dFByb3BhZ2F0aW9uJyxcbiAgICAnc3RhcnRpbmdEYXknLFxuICAgICd5ZWFyQ29sdW1ucycsXG4gICAgJ3llYXJSb3dzJ1xuICBdLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2N1c3RvbUNsYXNzJzpcbiAgICAgIGNhc2UgJ2RhdGVEaXNhYmxlZCc6XG4gICAgICAgICRzY29wZVtrZXldID0gJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zW2tleV0gfHwgYW5ndWxhci5ub29wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGVwaWNrZXJNb2RlJzpcbiAgICAgICAgJHNjb3BlLmRhdGVwaWNrZXJNb2RlID0gYW5ndWxhci5pc0RlZmluZWQoJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVwaWNrZXJNb2RlKSA/XG4gICAgICAgICAgJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVwaWNrZXJNb2RlIDogZGF0ZXBpY2tlckNvbmZpZy5kYXRlcGlja2VyTW9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmb3JtYXREYXknOlxuICAgICAgY2FzZSAnZm9ybWF0RGF5SGVhZGVyJzpcbiAgICAgIGNhc2UgJ2Zvcm1hdERheVRpdGxlJzpcbiAgICAgIGNhc2UgJ2Zvcm1hdE1vbnRoJzpcbiAgICAgIGNhc2UgJ2Zvcm1hdE1vbnRoVGl0bGUnOlxuICAgICAgY2FzZSAnZm9ybWF0WWVhcic6XG4gICAgICAgIHNlbGZba2V5XSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRzY29wZS5kYXRlcGlja2VyT3B0aW9uc1trZXldKSA/XG4gICAgICAgICAgJGludGVycG9sYXRlKCRzY29wZS5kYXRlcGlja2VyT3B0aW9uc1trZXldKSgkc2NvcGUuJHBhcmVudCkgOlxuICAgICAgICAgIGRhdGVwaWNrZXJDb25maWdba2V5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb250aENvbHVtbnMnOlxuICAgICAgY2FzZSAnc2hvd1dlZWtzJzpcbiAgICAgIGNhc2UgJ3Nob3J0Y3V0UHJvcGFnYXRpb24nOlxuICAgICAgY2FzZSAneWVhckNvbHVtbnMnOlxuICAgICAgY2FzZSAneWVhclJvd3MnOlxuICAgICAgICBzZWxmW2tleV0gPSBhbmd1bGFyLmlzRGVmaW5lZCgkc2NvcGUuZGF0ZXBpY2tlck9wdGlvbnNba2V5XSkgP1xuICAgICAgICAgICRzY29wZS5kYXRlcGlja2VyT3B0aW9uc1trZXldIDogZGF0ZXBpY2tlckNvbmZpZ1trZXldO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0YXJ0aW5nRGF5JzpcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKCRzY29wZS5kYXRlcGlja2VyT3B0aW9ucy5zdGFydGluZ0RheSkpIHtcbiAgICAgICAgICBzZWxmLnN0YXJ0aW5nRGF5ID0gJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLnN0YXJ0aW5nRGF5O1xuICAgICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNOdW1iZXIoZGF0ZXBpY2tlckNvbmZpZy5zdGFydGluZ0RheSkpIHtcbiAgICAgICAgICBzZWxmLnN0YXJ0aW5nRGF5ID0gZGF0ZXBpY2tlckNvbmZpZy5zdGFydGluZ0RheTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnN0YXJ0aW5nRGF5ID0gKCRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5GSVJTVERBWU9GV0VFSyArIDgpICUgNztcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWF4RGF0ZSc6XG4gICAgICBjYXNlICdtaW5EYXRlJzpcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnZGF0ZXBpY2tlck9wdGlvbnMuJyArIGtleSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgc2VsZltrZXldID0gZGF0ZVBhcnNlci5mcm9tVGltZXpvbmUobmV3IERhdGUodmFsdWUpLCBuZ01vZGVsT3B0aW9ucy5nZXRPcHRpb24oJ3RpbWV6b25lJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCRkYXRlcGlja2VyTGl0ZXJhbFdhcm5pbmcpIHtcbiAgICAgICAgICAgICAgICAkbG9nLndhcm4oJ0xpdGVyYWwgZGF0ZSBzdXBwb3J0IGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHBsZWFzZSBzd2l0Y2ggdG8gZGF0ZSBvYmplY3QgdXNhZ2UnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbGZba2V5XSA9IG5ldyBEYXRlKGRhdGVGaWx0ZXIodmFsdWUsICdtZWRpdW0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGZba2V5XSA9IGRhdGVwaWNrZXJDb25maWdba2V5XSA/XG4gICAgICAgICAgICAgIGRhdGVQYXJzZXIuZnJvbVRpbWV6b25lKG5ldyBEYXRlKGRhdGVwaWNrZXJDb25maWdba2V5XSksIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSkgOlxuICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtYXhNb2RlJzpcbiAgICAgIGNhc2UgJ21pbk1vZGUnOlxuICAgICAgICBpZiAoJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zW2tleV07IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmW2tleV0gPSAkc2NvcGVba2V5XSA9IGFuZ3VsYXIuaXNEZWZpbmVkKHZhbHVlKSA/IHZhbHVlIDogJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnbWluTW9kZScgJiYgc2VsZi5tb2Rlcy5pbmRleE9mKCRzY29wZS5kYXRlcGlja2VyT3B0aW9ucy5kYXRlcGlja2VyTW9kZSkgPCBzZWxmLm1vZGVzLmluZGV4T2Yoc2VsZltrZXldKSB8fFxuICAgICAgICAgICAgICBrZXkgPT09ICdtYXhNb2RlJyAmJiBzZWxmLm1vZGVzLmluZGV4T2YoJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVwaWNrZXJNb2RlKSA+IHNlbGYubW9kZXMuaW5kZXhPZihzZWxmW2tleV0pKSB7XG4gICAgICAgICAgICAgICRzY29wZS5kYXRlcGlja2VyTW9kZSA9IHNlbGZba2V5XTtcbiAgICAgICAgICAgICAgJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVwaWNrZXJNb2RlID0gc2VsZltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGZba2V5XSA9ICRzY29wZVtrZXldID0gZGF0ZXBpY2tlckNvbmZpZ1trZXldIHx8IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS51bmlxdWVJZCA9ICdkYXRlcGlja2VyLScgKyAkc2NvcGUuJGlkICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuXG4gICRzY29wZS5kaXNhYmxlZCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5kaXNhYmxlZCkgfHwgZmFsc2U7XG4gIGlmIChhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubmdEaXNhYmxlZCkpIHtcbiAgICB3YXRjaExpc3RlbmVycy5wdXNoKCRzY29wZS4kcGFyZW50LiR3YXRjaCgkYXR0cnMubmdEaXNhYmxlZCwgZnVuY3Rpb24oZGlzYWJsZWQpIHtcbiAgICAgICRzY29wZS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgc2VsZi5yZWZyZXNoVmlldygpO1xuICAgIH0pKTtcbiAgfVxuXG4gICRzY29wZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKGRhdGVPYmplY3QpIHtcbiAgICBpZiAoc2VsZi5jb21wYXJlKGRhdGVPYmplY3QuZGF0ZSwgc2VsZi5hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgJHNjb3BlLmFjdGl2ZURhdGVJZCA9IGRhdGVPYmplY3QudWlkO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbihuZ01vZGVsQ3RybF8pIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcbiAgICBuZ01vZGVsT3B0aW9ucyA9IGV4dHJhY3RPcHRpb25zKG5nTW9kZWxDdHJsKTtcblxuICAgIGlmICgkc2NvcGUuZGF0ZXBpY2tlck9wdGlvbnMuaW5pdERhdGUpIHtcbiAgICAgIHNlbGYuYWN0aXZlRGF0ZSA9IGRhdGVQYXJzZXIuZnJvbVRpbWV6b25lKCRzY29wZS5kYXRlcGlja2VyT3B0aW9ucy5pbml0RGF0ZSwgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCd0aW1lem9uZScpKSB8fCBuZXcgRGF0ZSgpO1xuICAgICAgJHNjb3BlLiR3YXRjaCgnZGF0ZXBpY2tlck9wdGlvbnMuaW5pdERhdGUnLCBmdW5jdGlvbihpbml0RGF0ZSkge1xuICAgICAgICBpZiAoaW5pdERhdGUgJiYgKG5nTW9kZWxDdHJsLiRpc0VtcHR5KG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlKSB8fCBuZ01vZGVsQ3RybC4kaW52YWxpZCkpIHtcbiAgICAgICAgICBzZWxmLmFjdGl2ZURhdGUgPSBkYXRlUGFyc2VyLmZyb21UaW1lem9uZShpbml0RGF0ZSwgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCd0aW1lem9uZScpKTtcbiAgICAgICAgICBzZWxmLnJlZnJlc2hWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBkYXRlID0gbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgPyBuZXcgRGF0ZShuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9ICFpc05hTihkYXRlKSA/XG4gICAgICBkYXRlUGFyc2VyLmZyb21UaW1lem9uZShkYXRlLCBuZ01vZGVsT3B0aW9ucy5nZXRPcHRpb24oJ3RpbWV6b25lJykpIDpcbiAgICAgIGRhdGVQYXJzZXIuZnJvbVRpbWV6b25lKG5ldyBEYXRlKCksIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSk7XG5cbiAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnJlbmRlcigpO1xuICAgIH07XG4gIH07XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSkge1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShuZ01vZGVsQ3RybC4kdmlld1ZhbHVlKSxcbiAgICAgICAgICBpc1ZhbGlkID0gIWlzTmFOKGRhdGUpO1xuXG4gICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlUGFyc2VyLmZyb21UaW1lem9uZShkYXRlLCBuZ01vZGVsT3B0aW9ucy5nZXRPcHRpb24oJ3RpbWV6b25lJykpO1xuICAgICAgfSBlbHNlIGlmICghJGRhdGVwaWNrZXJTdXBwcmVzc0Vycm9yKSB7XG4gICAgICAgICRsb2cuZXJyb3IoJ0RhdGVwaWNrZXIgZGlyZWN0aXZlOiBcIm5nLW1vZGVsXCIgdmFsdWUgbXVzdCBiZSBhIERhdGUgb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfTtcblxuICB0aGlzLnJlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgJHNjb3BlLnNlbGVjdGVkRHQgPSBudWxsO1xuICAgICAgdGhpcy5fcmVmcmVzaFZpZXcoKTtcbiAgICAgIGlmICgkc2NvcGUuYWN0aXZlRHQpIHtcbiAgICAgICAgJHNjb3BlLmFjdGl2ZURhdGVJZCA9ICRzY29wZS5hY3RpdmVEdC51aWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRlID0gbmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSA/IG5ldyBEYXRlKG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUpIDogbnVsbDtcbiAgICAgIGRhdGUgPSBkYXRlUGFyc2VyLmZyb21UaW1lem9uZShkYXRlLCBuZ01vZGVsT3B0aW9ucy5nZXRPcHRpb24oJ3RpbWV6b25lJykpO1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdkYXRlRGlzYWJsZWQnLCAhZGF0ZSB8fFxuICAgICAgICB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaXNEaXNhYmxlZChkYXRlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY3JlYXRlRGF0ZU9iamVjdCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xuICAgIHZhciBtb2RlbCA9IG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUgPyBuZXcgRGF0ZShuZ01vZGVsQ3RybC4kdmlld1ZhbHVlKSA6IG51bGw7XG4gICAgbW9kZWwgPSBkYXRlUGFyc2VyLmZyb21UaW1lem9uZShtb2RlbCwgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCd0aW1lem9uZScpKTtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5ID0gZGF0ZVBhcnNlci5mcm9tVGltZXpvbmUodG9kYXksIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSk7XG4gICAgdmFyIHRpbWUgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgdG9kYXkpO1xuICAgIHZhciBkdCA9IHtcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICBsYWJlbDogZGF0ZVBhcnNlci5maWx0ZXIoZGF0ZSwgZm9ybWF0KSxcbiAgICAgIHNlbGVjdGVkOiBtb2RlbCAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgbW9kZWwpID09PSAwLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZChkYXRlKSxcbiAgICAgIHBhc3Q6IHRpbWUgPCAwLFxuICAgICAgY3VycmVudDogdGltZSA9PT0gMCxcbiAgICAgIGZ1dHVyZTogdGltZSA+IDAsXG4gICAgICBjdXN0b21DbGFzczogdGhpcy5jdXN0b21DbGFzcyhkYXRlKSB8fCBudWxsXG4gICAgfTtcblxuICAgIGlmIChtb2RlbCAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgbW9kZWwpID09PSAwKSB7XG4gICAgICAkc2NvcGUuc2VsZWN0ZWREdCA9IGR0O1xuICAgIH1cblxuICAgIGlmIChzZWxmLmFjdGl2ZURhdGUgJiYgdGhpcy5jb21wYXJlKGR0LmRhdGUsIHNlbGYuYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgICRzY29wZS5hY3RpdmVEdCA9IGR0O1xuICAgIH1cblxuICAgIHJldHVybiBkdDtcbiAgfTtcblxuICB0aGlzLmlzRGlzYWJsZWQgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuICRzY29wZS5kaXNhYmxlZCB8fFxuICAgICAgdGhpcy5taW5EYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1pbkRhdGUpIDwgMCB8fFxuICAgICAgdGhpcy5tYXhEYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1heERhdGUpID4gMCB8fFxuICAgICAgJHNjb3BlLmRhdGVEaXNhYmxlZCAmJiAkc2NvcGUuZGF0ZURpc2FibGVkKHtkYXRlOiBkYXRlLCBtb2RlOiAkc2NvcGUuZGF0ZXBpY2tlck1vZGV9KTtcbiAgfTtcblxuICB0aGlzLmN1c3RvbUNsYXNzID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiAkc2NvcGUuY3VzdG9tQ2xhc3Moe2RhdGU6IGRhdGUsIG1vZGU6ICRzY29wZS5kYXRlcGlja2VyTW9kZX0pO1xuICB9O1xuXG4gIC8vIFNwbGl0IGFycmF5IGludG8gc21hbGxlciBhcnJheXNcbiAgdGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGFyciwgc2l6ZSkge1xuICAgIHZhciBhcnJheXMgPSBbXTtcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIGFycmF5cy5wdXNoKGFyci5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlzO1xuICB9O1xuXG4gICRzY29wZS5zZWxlY3QgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgaWYgKCRzY29wZS5kYXRlcGlja2VyTW9kZSA9PT0gc2VsZi5taW5Nb2RlKSB7XG4gICAgICB2YXIgZHQgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlID8gZGF0ZVBhcnNlci5mcm9tVGltZXpvbmUobmV3IERhdGUobmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSksIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSkgOiBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgIGR0LnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICBkdCA9IGRhdGVQYXJzZXIudG9UaW1lem9uZShkdCwgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCd0aW1lem9uZScpKTtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUoZHQpO1xuICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgc2V0TW9kZShzZWxmLm1vZGVzW3NlbGYubW9kZXMuaW5kZXhPZigkc2NvcGUuZGF0ZXBpY2tlck1vZGUpIC0gMV0pO1xuXG4gICAgICAkc2NvcGUuJGVtaXQoJ3VpYjpkYXRlcGlja2VyLm1vZGUnKTtcbiAgICB9XG5cbiAgICAkc2NvcGUuJGJyb2FkY2FzdCgndWliOmRhdGVwaWNrZXIuZm9jdXMnKTtcbiAgfTtcblxuICAkc2NvcGUubW92ZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgIHZhciB5ZWFyID0gc2VsZi5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBkaXJlY3Rpb24gKiAoc2VsZi5zdGVwLnllYXJzIHx8IDApLFxuICAgICAgICBtb250aCA9IHNlbGYuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZGlyZWN0aW9uICogKHNlbGYuc3RlcC5tb250aHMgfHwgMCk7XG4gICAgc2VsZi5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcbiAgICBzZWxmLnJlZnJlc2hWaWV3KCk7XG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgMTtcblxuICAgIGlmICgkc2NvcGUuZGF0ZXBpY2tlck1vZGUgPT09IHNlbGYubWF4TW9kZSAmJiBkaXJlY3Rpb24gPT09IDEgfHxcbiAgICAgICRzY29wZS5kYXRlcGlja2VyTW9kZSA9PT0gc2VsZi5taW5Nb2RlICYmIGRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRNb2RlKHNlbGYubW9kZXNbc2VsZi5tb2Rlcy5pbmRleE9mKCRzY29wZS5kYXRlcGlja2VyTW9kZSkgKyBkaXJlY3Rpb25dKTtcblxuICAgICRzY29wZS4kZW1pdCgndWliOmRhdGVwaWNrZXIubW9kZScpO1xuICB9O1xuXG4gIC8vIEtleSBldmVudCBtYXBwZXJcbiAgJHNjb3BlLmtleXMgPSB7IDEzOiAnZW50ZXInLCAzMjogJ3NwYWNlJywgMzM6ICdwYWdldXAnLCAzNDogJ3BhZ2Vkb3duJywgMzU6ICdlbmQnLCAzNjogJ2hvbWUnLCAzNzogJ2xlZnQnLCAzODogJ3VwJywgMzk6ICdyaWdodCcsIDQwOiAnZG93bicgfTtcblxuICB2YXIgZm9jdXNFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5lbGVtZW50WzBdLmZvY3VzKCk7XG4gIH07XG5cbiAgLy8gTGlzdGVuIGZvciBmb2N1cyByZXF1ZXN0cyBmcm9tIHBvcHVwIGRpcmVjdGl2ZVxuICAkc2NvcGUuJG9uKCd1aWI6ZGF0ZXBpY2tlci5mb2N1cycsIGZvY3VzRWxlbWVudCk7XG5cbiAgJHNjb3BlLmtleWRvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgICB2YXIga2V5ID0gJHNjb3BlLmtleXNbZXZ0LndoaWNoXTtcblxuICAgIGlmICgha2V5IHx8IGV2dC5zaGlmdEtleSB8fCBldnQuYWx0S2V5IHx8ICRzY29wZS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghc2VsZi5zaG9ydGN1dFByb3BhZ2F0aW9uKSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2VudGVyJyB8fCBrZXkgPT09ICdzcGFjZScpIHtcbiAgICAgIGlmIChzZWxmLmlzRGlzYWJsZWQoc2VsZi5hY3RpdmVEYXRlKSkge1xuICAgICAgICByZXR1cm47IC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICAgICRzY29wZS5zZWxlY3Qoc2VsZi5hY3RpdmVEYXRlKTtcbiAgICB9IGVsc2UgaWYgKGV2dC5jdHJsS2V5ICYmIChrZXkgPT09ICd1cCcgfHwga2V5ID09PSAnZG93bicpKSB7XG4gICAgICAkc2NvcGUudG9nZ2xlTW9kZShrZXkgPT09ICd1cCcgPyAxIDogLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmhhbmRsZUtleURvd24oa2V5LCBldnQpO1xuICAgICAgc2VsZi5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcblxuICAkZWxlbWVudC5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUua2V5ZG93bihldnQpO1xuICAgIH0pO1xuICB9KTtcblxuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIC8vQ2xlYXIgYWxsIHdhdGNoIGxpc3RlbmVycyBvbiBkZXN0cm95XG4gICAgd2hpbGUgKHdhdGNoTGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgd2F0Y2hMaXN0ZW5lcnMuc2hpZnQoKSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2V0TW9kZShtb2RlKSB7XG4gICAgJHNjb3BlLmRhdGVwaWNrZXJNb2RlID0gbW9kZTtcbiAgICAkc2NvcGUuZGF0ZXBpY2tlck9wdGlvbnMuZGF0ZXBpY2tlck1vZGUgPSBtb2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0cmFjdE9wdGlvbnMobmdNb2RlbEN0cmwpIHtcbiAgICB2YXIgbmdNb2RlbE9wdGlvbnM7XG5cbiAgICBpZiAoYW5ndWxhci52ZXJzaW9uLm1pbm9yIDwgNikgeyAvLyBpbiBhbmd1bGFyIDwgMS42ICRvcHRpb25zIGNvdWxkIGJlIG1pc3NpbmdcbiAgICAgIC8vIGd1YXJhbnRlZSBhIHZhbHVlXG4gICAgICBuZ01vZGVsT3B0aW9ucyA9IG5nTW9kZWxDdHJsLiRvcHRpb25zIHx8XG4gICAgICAgICRzY29wZS5kYXRlcGlja2VyT3B0aW9ucy5uZ01vZGVsT3B0aW9ucyB8fFxuICAgICAgICBkYXRlcGlja2VyQ29uZmlnLm5nTW9kZWxPcHRpb25zIHx8XG4gICAgICAgIHt9O1xuXG4gICAgICAvLyBtaW1pYyAxLjYrIGFwaVxuICAgICAgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbmdNb2RlbE9wdGlvbnNba2V5XTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHsgLy8gaW4gYW5ndWxhciA+PTEuNiAkb3B0aW9ucyBpcyBhbHdheXMgcHJlc2VudFxuICAgICAgLy8gbmctbW9kZWwtb3B0aW9ucyBkZWZhdWx0cyB0aW1lem9uZSB0byBudWxsOyBkb24ndCBsZXQgaXRzIHByZWNlZGVuY2Ugc3F1YXNoIGEgbm9uLW51bGwgdmFsdWVcbiAgICAgIHZhciB0aW1lem9uZSA9IG5nTW9kZWxDdHJsLiRvcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSB8fFxuICAgICAgICAoJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLm5nTW9kZWxPcHRpb25zID8gJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zLm5nTW9kZWxPcHRpb25zLnRpbWV6b25lIDogbnVsbCkgfHxcbiAgICAgICAgKGRhdGVwaWNrZXJDb25maWcubmdNb2RlbE9wdGlvbnMgPyBkYXRlcGlja2VyQ29uZmlnLm5nTW9kZWxPcHRpb25zLnRpbWV6b25lIDogbnVsbCk7XG5cbiAgICAgIC8vIHZhbHVlcyBwYXNzZWQgdG8gY3JlYXRlQ2hpbGQgb3ZlcnJpZGUgZXhpc3RpbmcgdmFsdWVzXG4gICAgICBuZ01vZGVsT3B0aW9ucyA9IG5nTW9kZWxDdHJsLiRvcHRpb25zIC8vIHN0YXJ0IHdpdGggYSBNb2RlbE9wdGlvbnMgaW5zdGFuY2VcbiAgICAgICAgLmNyZWF0ZUNoaWxkKGRhdGVwaWNrZXJDb25maWcubmdNb2RlbE9wdGlvbnMpIC8vIGxvd2VzdCBwcmVjZWRlbmNlXG4gICAgICAgIC5jcmVhdGVDaGlsZCgkc2NvcGUuZGF0ZXBpY2tlck9wdGlvbnMubmdNb2RlbE9wdGlvbnMpXG4gICAgICAgIC5jcmVhdGVDaGlsZChuZ01vZGVsQ3RybC4kb3B0aW9ucykgLy8gaGlnaGVzdCBwcmVjZWRlbmNlXG4gICAgICAgIC5jcmVhdGVDaGlsZCh7dGltZXpvbmU6IHRpbWV6b25lfSk7IC8vIHRvIGtlZXAgZnJvbSBzcXVhc2hpbmcgYSBub24tbnVsbCB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBuZ01vZGVsT3B0aW9ucztcbiAgfVxufV0pXG5cbi5jb250cm9sbGVyKCdVaWJEYXlwaWNrZXJDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZGF0ZUZpbHRlcicsIGZ1bmN0aW9uKHNjb3BlLCAkZWxlbWVudCwgZGF0ZUZpbHRlcikge1xuICB2YXIgREFZU19JTl9NT05USCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuICB0aGlzLnN0ZXAgPSB7IG1vbnRoczogMSB9O1xuICB0aGlzLmVsZW1lbnQgPSAkZWxlbWVudDtcbiAgZnVuY3Rpb24gZ2V0RGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgICByZXR1cm4gbW9udGggPT09IDEgJiYgeWVhciAlIDQgPT09IDAgJiZcbiAgICAgICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApID8gMjkgOiBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgfVxuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKGN0cmwpIHtcbiAgICBhbmd1bGFyLmV4dGVuZChjdHJsLCB0aGlzKTtcbiAgICBzY29wZS5zaG93V2Vla3MgPSBjdHJsLnNob3dXZWVrcztcbiAgICBjdHJsLnJlZnJlc2hWaWV3KCk7XG4gIH07XG5cbiAgdGhpcy5nZXREYXRlcyA9IGZ1bmN0aW9uKHN0YXJ0RGF0ZSwgbikge1xuICAgIHZhciBkYXRlcyA9IG5ldyBBcnJheShuKSwgY3VycmVudCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSksIGkgPSAwLCBkYXRlO1xuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgZGF0ZXNbaSsrXSA9IGRhdGU7XG4gICAgICBjdXJyZW50LnNldERhdGUoY3VycmVudC5nZXREYXRlKCkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9O1xuXG4gIHRoaXMuX3JlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCksXG4gICAgICBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXG4gICAgZmlyc3REYXlPZk1vbnRoLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcblxuICAgIHZhciBkaWZmZXJlbmNlID0gdGhpcy5zdGFydGluZ0RheSAtIGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKSxcbiAgICAgIG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID0gZGlmZmVyZW5jZSA+IDAgP1xuICAgICAgICA3IC0gZGlmZmVyZW5jZSA6IC0gZGlmZmVyZW5jZSxcbiAgICAgIGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aCk7XG5cbiAgICBpZiAobnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPiAwKSB7XG4gICAgICBmaXJzdERhdGUuc2V0RGF0ZSgtbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxKTtcbiAgICB9XG5cbiAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtd2VlayBjYWxlbmRhclxuICAgIHZhciBkYXlzID0gdGhpcy5nZXREYXRlcyhmaXJzdERhdGUsIDQyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQyOyBpICsrKSB7XG4gICAgICBkYXlzW2ldID0gYW5ndWxhci5leHRlbmQodGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRheXNbaV0sIHRoaXMuZm9ybWF0RGF5KSwge1xuICAgICAgICBzZWNvbmRhcnk6IGRheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGgsXG4gICAgICAgIHVpZDogc2NvcGUudW5pcXVlSWQgKyAnLScgKyBpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzY29wZS5sYWJlbHMgPSBuZXcgQXJyYXkoNyk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgIHNjb3BlLmxhYmVsc1tqXSA9IHtcbiAgICAgICAgYWJicjogZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsIHRoaXMuZm9ybWF0RGF5SGVhZGVyKSxcbiAgICAgICAgZnVsbDogZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsICdFRUVFJylcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2NvcGUudGl0bGUgPSBkYXRlRmlsdGVyKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5mb3JtYXREYXlUaXRsZSk7XG4gICAgc2NvcGUucm93cyA9IHRoaXMuc3BsaXQoZGF5cywgNyk7XG5cbiAgICBpZiAoc2NvcGUuc2hvd1dlZWtzKSB7XG4gICAgICBzY29wZS53ZWVrTnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRodXJzZGF5SW5kZXggPSAoNCArIDcgLSB0aGlzLnN0YXJ0aW5nRGF5KSAlIDcsXG4gICAgICAgICAgbnVtV2Vla3MgPSBzY29wZS5yb3dzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGN1cldlZWsgPSAwOyBjdXJXZWVrIDwgbnVtV2Vla3M7IGN1cldlZWsrKykge1xuICAgICAgICBzY29wZS53ZWVrTnVtYmVycy5wdXNoKFxuICAgICAgICAgIGdldElTTzg2MDFXZWVrTnVtYmVyKHNjb3BlLnJvd3NbY3VyV2Vla11bdGh1cnNkYXlJbmRleF0uZGF0ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICB2YXIgX2RhdGUxID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpKTtcbiAgICB2YXIgX2RhdGUyID0gbmV3IERhdGUoZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpKTtcbiAgICBfZGF0ZTEuc2V0RnVsbFllYXIoZGF0ZTEuZ2V0RnVsbFllYXIoKSk7XG4gICAgX2RhdGUyLnNldEZ1bGxZZWFyKGRhdGUyLmdldEZ1bGxZZWFyKCkpO1xuICAgIHJldHVybiBfZGF0ZTEgLSBfZGF0ZTI7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0SVNPODYwMVdlZWtOdW1iZXIoZGF0ZSkge1xuICAgIHZhciBjaGVja0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpOyAvLyBUaHVyc2RheVxuICAgIHZhciB0aW1lID0gY2hlY2tEYXRlLmdldFRpbWUoKTtcbiAgICBjaGVja0RhdGUuc2V0TW9udGgoMCk7IC8vIENvbXBhcmUgd2l0aCBKYW4gMVxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucm91bmQoKHRpbWUgLSBjaGVja0RhdGUpIC8gODY0MDAwMDApIC8gNykgKyAxO1xuICB9XG5cbiAgdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oa2V5LCBldnQpIHtcbiAgICB2YXIgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5nZXREYXRlKCk7XG5cbiAgICBpZiAoa2V5ID09PSAnbGVmdCcpIHtcbiAgICAgIGRhdGUgPSBkYXRlIC0gMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgZGF0ZSA9IGRhdGUgLSA3O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICBkYXRlID0gZGF0ZSArIDE7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgZGF0ZSA9IGRhdGUgKyA3O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncGFnZXVwJyB8fCBrZXkgPT09ICdwYWdlZG93bicpIHtcbiAgICAgIHZhciBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgKGtleSA9PT0gJ3BhZ2V1cCcgPyAtIDEgOiAxKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCwgMSk7XG4gICAgICBkYXRlID0gTWF0aC5taW4oZ2V0RGF5c0luTW9udGgodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpKSwgZGF0ZSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgZGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdlbmQnKSB7XG4gICAgICBkYXRlID0gZ2V0RGF5c0luTW9udGgodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVEYXRlLnNldERhdGUoZGF0ZSk7XG4gIH07XG59XSlcblxuLmNvbnRyb2xsZXIoJ1VpYk1vbnRocGlja2VyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RhdGVGaWx0ZXInLCBmdW5jdGlvbihzY29wZSwgJGVsZW1lbnQsIGRhdGVGaWx0ZXIpIHtcbiAgdGhpcy5zdGVwID0geyB5ZWFyczogMSB9O1xuICB0aGlzLmVsZW1lbnQgPSAkZWxlbWVudDtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbihjdHJsKSB7XG4gICAgYW5ndWxhci5leHRlbmQoY3RybCwgdGhpcyk7XG4gICAgY3RybC5yZWZyZXNoVmlldygpO1xuICB9O1xuXG4gIHRoaXMuX3JlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1vbnRocyA9IG5ldyBBcnJheSgxMiksXG4gICAgICAgIHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIGksIDEpO1xuICAgICAgbW9udGhzW2ldID0gYW5ndWxhci5leHRlbmQodGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0TW9udGgpLCB7XG4gICAgICAgIHVpZDogc2NvcGUudW5pcXVlSWQgKyAnLScgKyBpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzY29wZS50aXRsZSA9IGRhdGVGaWx0ZXIodGhpcy5hY3RpdmVEYXRlLCB0aGlzLmZvcm1hdE1vbnRoVGl0bGUpO1xuICAgIHNjb3BlLnJvd3MgPSB0aGlzLnNwbGl0KG1vbnRocywgdGhpcy5tb250aENvbHVtbnMpO1xuICAgIHNjb3BlLnllYXJIZWFkZXJDb2xzcGFuID0gdGhpcy5tb250aENvbHVtbnMgPiAzID8gdGhpcy5tb250aENvbHVtbnMgLSAyIDogMTtcbiAgfTtcblxuICB0aGlzLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICB2YXIgX2RhdGUxID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSk7XG4gICAgdmFyIF9kYXRlMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCkpO1xuICAgIF9kYXRlMS5zZXRGdWxsWWVhcihkYXRlMS5nZXRGdWxsWWVhcigpKTtcbiAgICBfZGF0ZTIuc2V0RnVsbFllYXIoZGF0ZTIuZ2V0RnVsbFllYXIoKSk7XG4gICAgcmV0dXJuIF9kYXRlMSAtIF9kYXRlMjtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbihrZXksIGV2dCkge1xuICAgIHZhciBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XG5cbiAgICBpZiAoa2V5ID09PSAnbGVmdCcpIHtcbiAgICAgIGRhdGUgPSBkYXRlIC0gMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgZGF0ZSA9IGRhdGUgLSB0aGlzLm1vbnRoQ29sdW1ucztcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZGF0ZSA9IGRhdGUgKyAxO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZG93bicpIHtcbiAgICAgIGRhdGUgPSBkYXRlICsgdGhpcy5tb250aENvbHVtbnM7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgdmFyIHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIChrZXkgPT09ICdwYWdldXAnID8gLSAxIDogMSk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgZGF0ZSA9IDA7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdlbmQnKSB7XG4gICAgICBkYXRlID0gMTE7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChkYXRlKTtcbiAgfTtcbn1dKVxuXG4uY29udHJvbGxlcignVWliWWVhcnBpY2tlckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkYXRlRmlsdGVyJywgZnVuY3Rpb24oc2NvcGUsICRlbGVtZW50LCBkYXRlRmlsdGVyKSB7XG4gIHZhciBjb2x1bW5zLCByYW5nZTtcbiAgdGhpcy5lbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gZ2V0U3RhcnRpbmdZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoKHllYXIgLSAxKSAvIHJhbmdlLCAxMCkgKiByYW5nZSArIDE7XG4gIH1cblxuICB0aGlzLnllYXJwaWNrZXJJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29sdW1ucyA9IHRoaXMueWVhckNvbHVtbnM7XG4gICAgcmFuZ2UgPSB0aGlzLnllYXJSb3dzICogY29sdW1ucztcbiAgICB0aGlzLnN0ZXAgPSB7IHllYXJzOiByYW5nZSB9O1xuICB9O1xuXG4gIHRoaXMuX3JlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHllYXJzID0gbmV3IEFycmF5KHJhbmdlKSwgZGF0ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBzdGFydCA9IGdldFN0YXJ0aW5nWWVhcih0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7IGkgPCByYW5nZTsgaSsrKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoc3RhcnQgKyBpLCAwLCAxKTtcbiAgICAgIHllYXJzW2ldID0gYW5ndWxhci5leHRlbmQodGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0WWVhciksIHtcbiAgICAgICAgdWlkOiBzY29wZS51bmlxdWVJZCArICctJyArIGlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjb3BlLnRpdGxlID0gW3llYXJzWzBdLmxhYmVsLCB5ZWFyc1tyYW5nZSAtIDFdLmxhYmVsXS5qb2luKCcgLSAnKTtcbiAgICBzY29wZS5yb3dzID0gdGhpcy5zcGxpdCh5ZWFycywgY29sdW1ucyk7XG4gICAgc2NvcGUuY29sdW1ucyA9IGNvbHVtbnM7XG4gIH07XG5cbiAgdGhpcy5jb21wYXJlID0gZnVuY3Rpb24oZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uKGtleSwgZXZ0KSB7XG4gICAgdmFyIGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgZGF0ZSA9IGRhdGUgLSAxO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndXAnKSB7XG4gICAgICBkYXRlID0gZGF0ZSAtIGNvbHVtbnM7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdyaWdodCcpIHtcbiAgICAgIGRhdGUgPSBkYXRlICsgMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rvd24nKSB7XG4gICAgICBkYXRlID0gZGF0ZSArIGNvbHVtbnM7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgZGF0ZSArPSAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpICogcmFuZ2U7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgZGF0ZSA9IGdldFN0YXJ0aW5nWWVhcih0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdlbmQnKSB7XG4gICAgICBkYXRlID0gZ2V0U3RhcnRpbmdZZWFyKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKSArIHJhbmdlIC0gMTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGRhdGUpO1xuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3VpYkRhdGVwaWNrZXInLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHJldHVybiBhdHRycy50ZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sJztcbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICBkYXRlcGlja2VyT3B0aW9uczogJz0/J1xuICAgIH0sXG4gICAgcmVxdWlyZTogWyd1aWJEYXRlcGlja2VyJywgJ15uZ01vZGVsJ10sXG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBjb250cm9sbGVyOiAnVWliRGF0ZXBpY2tlckNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2RhdGVwaWNrZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciBkYXRlcGlja2VyQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBkYXRlcGlja2VyQ3RybC5pbml0KG5nTW9kZWxDdHJsKTtcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd1aWJEYXlwaWNrZXInLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHJldHVybiBhdHRycy50ZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWwnO1xuICAgIH0sXG4gICAgcmVxdWlyZTogWydedWliRGF0ZXBpY2tlcicsICd1aWJEYXlwaWNrZXInXSxcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGNvbnRyb2xsZXI6ICdVaWJEYXlwaWNrZXJDb250cm9sbGVyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgZGF0ZXBpY2tlckN0cmwgPSBjdHJsc1swXSxcbiAgICAgICAgZGF5cGlja2VyQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBkYXlwaWNrZXJDdHJsLmluaXQoZGF0ZXBpY2tlckN0cmwpO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3VpYk1vbnRocGlja2VyJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJ3VpYi90ZW1wbGF0ZS9kYXRlcGlja2VyL21vbnRoLmh0bWwnO1xuICAgIH0sXG4gICAgcmVxdWlyZTogWydedWliRGF0ZXBpY2tlcicsICd1aWJNb250aHBpY2tlciddLFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgY29udHJvbGxlcjogJ1VpYk1vbnRocGlja2VyQ29udHJvbGxlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGRhdGVwaWNrZXJDdHJsID0gY3RybHNbMF0sXG4gICAgICAgIG1vbnRocGlja2VyQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBtb250aHBpY2tlckN0cmwuaW5pdChkYXRlcGlja2VyQ3RybCk7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliWWVhcnBpY2tlcicsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbihlbGVtZW50LCBhdHRycykge1xuICAgICAgcmV0dXJuIGF0dHJzLnRlbXBsYXRlVXJsIHx8ICd1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWwnO1xuICAgIH0sXG4gICAgcmVxdWlyZTogWydedWliRGF0ZXBpY2tlcicsICd1aWJZZWFycGlja2VyJ10sXG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBjb250cm9sbGVyOiAnVWliWWVhcnBpY2tlckNvbnRyb2xsZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciBjdHJsID0gY3RybHNbMF07XG4gICAgICBhbmd1bGFyLmV4dGVuZChjdHJsLCBjdHJsc1sxXSk7XG4gICAgICBjdHJsLnllYXJwaWNrZXJJbml0KCk7XG5cbiAgICAgIGN0cmwucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH07XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5wb3NpdGlvbicsIFtdKVxuXG4vKipcbiAqIEEgc2V0IG9mIHV0aWxpdHkgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIHRoZSBET00uXG4gKiBJdCBpcyBtZWFudCB0byBiZSB1c2VkIHdoZXJlIHdlIG5lZWQgdG8gYWJzb2x1dGUtcG9zaXRpb24gZWxlbWVudHMgaW5cbiAqIHJlbGF0aW9uIHRvIGFub3RoZXIgZWxlbWVudCAodGhpcyBpcyB0aGUgY2FzZSBmb3IgdG9vbHRpcHMsIHBvcG92ZXJzLFxuICogdHlwZWFoZWFkIHN1Z2dlc3Rpb25zIGV0Yy4pLlxuICovXG4gIC5mYWN0b3J5KCckdWliUG9zaXRpb24nLCBbJyRkb2N1bWVudCcsICckd2luZG93JywgZnVuY3Rpb24oJGRvY3VtZW50LCAkd2luZG93KSB7XG4gICAgLyoqXG4gICAgICogVXNlZCBieSBzY3JvbGxiYXJXaWR0aCgpIGZ1bmN0aW9uIHRvIGNhY2hlIHNjcm9sbGJhcidzIHdpZHRoLlxuICAgICAqIERvIG5vdCBhY2Nlc3MgdGhpcyB2YXJpYWJsZSBkaXJlY3RseSwgdXNlIHNjcm9sbGJhcldpZHRoKCkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICB2YXIgU0NST0xMQkFSX1dJRFRIO1xuICAgIC8qKlxuICAgICAqIHNjcm9sbGJhciBvbiBib2R5IGFuZCBodG1sIGVsZW1lbnQgaW4gSUUgYW5kIEVkZ2Ugb3ZlcmxheVxuICAgICAqIGNvbnRlbnQgYW5kIHNob3VsZCBiZSBjb25zaWRlcmVkIDAgd2lkdGguXG4gICAgICovXG4gICAgdmFyIEJPRFlfU0NST0xMQkFSX1dJRFRIO1xuICAgIHZhciBPVkVSRkxPV19SRUdFWCA9IHtcbiAgICAgIG5vcm1hbDogLyhhdXRvfHNjcm9sbCkvLFxuICAgICAgaGlkZGVuOiAvKGF1dG98c2Nyb2xsfGhpZGRlbikvXG4gICAgfTtcbiAgICB2YXIgUExBQ0VNRU5UX1JFR0VYID0ge1xuICAgICAgYXV0bzogL1xccz9hdXRvP1xccz8vaSxcbiAgICAgIHByaW1hcnk6IC9eKHRvcHxib3R0b218bGVmdHxyaWdodCkkLyxcbiAgICAgIHNlY29uZGFyeTogL14odG9wfGJvdHRvbXxsZWZ0fHJpZ2h0fGNlbnRlcikkLyxcbiAgICAgIHZlcnRpY2FsOiAvXih0b3B8Ym90dG9tKSQvXG4gICAgfTtcbiAgICB2YXIgQk9EWV9SRUdFWCA9IC8oSFRNTHxCT0RZKS87XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIGEgcmF3IERPTSBlbGVtZW50IGZyb20gYSBqUXVlcnkvalFMaXRlIGVsZW1lbnQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gY29udmVydC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZWxlbWVudH0gQSBIVE1MIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGdldFJhd05vZGU6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUgPyBlbGVtIDogZWxlbVswXSB8fCBlbGVtO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyBhIHBhcnNlZCBudW1iZXIgZm9yIGEgc3R5bGUgcHJvcGVydHkuICBTdHJpcHNcbiAgICAgICAqIHVuaXRzIGFuZCBjYXN0cyBpbnZhbGlkIG51bWJlcnMgdG8gMC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgc3R5bGUgdmFsdWUgdG8gcGFyc2UuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge251bWJlcn0gQSB2YWxpZCBudW1iZXIuXG4gICAgICAgKi9cbiAgICAgIHBhcnNlU3R5bGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IDA7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIHRoZSBjbG9zZXN0IHBvc2l0aW9uZWQgYW5jZXN0b3IuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gZ2V0IHRoZSBvZmZlc3QgcGFyZW50IGZvci5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZWxlbWVudH0gVGhlIGNsb3Nlc3QgcG9zaXRpb25lZCBhbmNlc3Rvci5cbiAgICAgICAqL1xuICAgICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgIGVsZW0gPSB0aGlzLmdldFJhd05vZGUoZWxlbSk7XG5cbiAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8ICRkb2N1bWVudFswXS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgZnVuY3Rpb24gaXNTdGF0aWNQb3NpdGlvbmVkKGVsKSB7XG4gICAgICAgICAgcmV0dXJuICgkd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnBvc2l0aW9uIHx8ICdzdGF0aWMnKSA9PT0gJ3N0YXRpYyc7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gJGRvY3VtZW50WzBdLmRvY3VtZW50RWxlbWVudCAmJiBpc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8ICRkb2N1bWVudFswXS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIHRoZSBzY3JvbGxiYXIgd2lkdGgsIGNvbmNlcHQgZnJvbSBUV0JTIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgICAgICogZnVuY3Rpb24gaW4gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzXG4gICAgICAgKiBJbiBJRSBhbmQgRWRnZSwgc2NvbGxiYXIgb24gYm9keSBhbmQgaHRtbCBlbGVtZW50IG92ZXJsYXkgYW5kIHNob3VsZFxuICAgICAgICogcmV0dXJuIGEgd2lkdGggb2YgMC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIGJyb3dzZXIgc2NvbGxiYXIuXG4gICAgICAgKi9cbiAgICAgIHNjcm9sbGJhcldpZHRoOiBmdW5jdGlvbihpc0JvZHkpIHtcbiAgICAgICAgaWYgKGlzQm9keSkge1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzVW5kZWZpbmVkKEJPRFlfU0NST0xMQkFSX1dJRFRIKSkge1xuICAgICAgICAgICAgdmFyIGJvZHlFbGVtID0gJGRvY3VtZW50LmZpbmQoJ2JvZHknKTtcbiAgICAgICAgICAgIGJvZHlFbGVtLmFkZENsYXNzKCd1aWItcG9zaXRpb24tYm9keS1zY3JvbGxiYXItbWVhc3VyZScpO1xuICAgICAgICAgICAgQk9EWV9TQ1JPTExCQVJfV0lEVEggPSAkd2luZG93LmlubmVyV2lkdGggLSBib2R5RWxlbVswXS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIEJPRFlfU0NST0xMQkFSX1dJRFRIID0gaXNGaW5pdGUoQk9EWV9TQ1JPTExCQVJfV0lEVEgpID8gQk9EWV9TQ1JPTExCQVJfV0lEVEggOiAwO1xuICAgICAgICAgICAgYm9keUVsZW0ucmVtb3ZlQ2xhc3MoJ3VpYi1wb3NpdGlvbi1ib2R5LXNjcm9sbGJhci1tZWFzdXJlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBCT0RZX1NDUk9MTEJBUl9XSURUSDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmd1bGFyLmlzVW5kZWZpbmVkKFNDUk9MTEJBUl9XSURUSCkpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsRWxlbSA9IGFuZ3VsYXIuZWxlbWVudCgnPGRpdiBjbGFzcz1cInVpYi1wb3NpdGlvbi1zY3JvbGxiYXItbWVhc3VyZVwiPjwvZGl2PicpO1xuICAgICAgICAgICRkb2N1bWVudC5maW5kKCdib2R5JykuYXBwZW5kKHNjcm9sbEVsZW0pO1xuICAgICAgICAgIFNDUk9MTEJBUl9XSURUSCA9IHNjcm9sbEVsZW1bMF0ub2Zmc2V0V2lkdGggLSBzY3JvbGxFbGVtWzBdLmNsaWVudFdpZHRoO1xuICAgICAgICAgIFNDUk9MTEJBUl9XSURUSCA9IGlzRmluaXRlKFNDUk9MTEJBUl9XSURUSCkgPyBTQ1JPTExCQVJfV0lEVEggOiAwO1xuICAgICAgICAgIHNjcm9sbEVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU0NST0xMQkFSX1dJRFRIO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyB0aGUgcGFkZGluZyByZXF1aXJlZCBvbiBhbiBlbGVtZW50IHRvIHJlcGxhY2UgdGhlIHNjcm9sbGJhci5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgKiAgIDx1bD5cbiAgICAgICAqICAgICA8bGk+KipzY3JvbGxiYXJXaWR0aCoqOiB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhcjwvbGk+XG4gICAgICAgKiAgICAgPGxpPioqd2lkdGhPdmVyZmxvdyoqOiB3aGV0aGVyIHRoZSB0aGUgd2lkdGggaXMgb3ZlcmZsb3dpbmc8L2xpPlxuICAgICAgICogICAgIDxsaT4qKnJpZ2h0Kio6IHRoZSBhbW91bnQgb2YgcmlnaHQgcGFkZGluZyBvbiB0aGUgZWxlbWVudCBuZWVkZWQgdG8gcmVwbGFjZSB0aGUgc2Nyb2xsYmFyPC9saT5cbiAgICAgICAqICAgICA8bGk+KipyaWdodE9yaWdpbmFsKio6IHRoZSBhbW91bnQgb2YgcmlnaHQgcGFkZGluZyBjdXJyZW50bHkgb24gdGhlIGVsZW1lbnQ8L2xpPlxuICAgICAgICogICAgIDxsaT4qKmhlaWdodE92ZXJmbG93Kio6IHdoZXRoZXIgdGhlIHRoZSBoZWlnaHQgaXMgb3ZlcmZsb3dpbmc8L2xpPlxuICAgICAgICogICAgIDxsaT4qKmJvdHRvbSoqOiB0aGUgYW1vdW50IG9mIGJvdHRvbSBwYWRkaW5nIG9uIHRoZSBlbGVtZW50IG5lZWRlZCB0byByZXBsYWNlIHRoZSBzY3JvbGxiYXI8L2xpPlxuICAgICAgICogICAgIDxsaT4qKmJvdHRvbU9yaWdpbmFsKio6IHRoZSBhbW91bnQgb2YgYm90dG9tIHBhZGRpbmcgY3VycmVudGx5IG9uIHRoZSBlbGVtZW50PC9saT5cbiAgICAgICAqICAgPC91bD5cbiAgICAgICAqL1xuICAgICAgc2Nyb2xsYmFyUGFkZGluZzogZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICBlbGVtID0gdGhpcy5nZXRSYXdOb2RlKGVsZW0pO1xuXG4gICAgICAgIHZhciBlbGVtU3R5bGUgPSAkd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSB0aGlzLnBhcnNlU3R5bGUoZWxlbVN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gdGhpcy5wYXJzZVN0eWxlKGVsZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICAgICAgdmFyIHNjcm9sbFBhcmVudCA9IHRoaXMuc2Nyb2xsUGFyZW50KGVsZW0sIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdmFyIHNjcm9sbGJhcldpZHRoID0gdGhpcy5zY3JvbGxiYXJXaWR0aChCT0RZX1JFR0VYLnRlc3Qoc2Nyb2xsUGFyZW50LnRhZ05hbWUpKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBzY3JvbGxiYXJXaWR0aCxcbiAgICAgICAgICB3aWR0aE92ZXJmbG93OiBzY3JvbGxQYXJlbnQuc2Nyb2xsV2lkdGggPiBzY3JvbGxQYXJlbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgcmlnaHQ6IHBhZGRpbmdSaWdodCArIHNjcm9sbGJhcldpZHRoLFxuICAgICAgICAgIG9yaWdpbmFsUmlnaHQ6IHBhZGRpbmdSaWdodCxcbiAgICAgICAgICBoZWlnaHRPdmVyZmxvdzogc2Nyb2xsUGFyZW50LnNjcm9sbEhlaWdodCA+IHNjcm9sbFBhcmVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgYm90dG9tOiBwYWRkaW5nQm90dG9tICsgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICAgICAgb3JpZ2luYWxCb3R0b206IHBhZGRpbmdCb3R0b21cbiAgICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBjaGVjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IFtpbmNsdWRlSGlkZGVuPWZhbHNlXSAtIFNob3VsZCBzY3JvbGwgc3R5bGUgb2YgJ2hpZGRlbicgYmUgY29uc2lkZXJlZCxcbiAgICAgICAqICAgZGVmYXVsdCBpcyBmYWxzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCBpcyBzY3JvbGxhYmxlLlxuICAgICAgICovXG4gICAgICBpc1Njcm9sbGFibGU6IGZ1bmN0aW9uKGVsZW0sIGluY2x1ZGVIaWRkZW4pIHtcbiAgICAgICAgZWxlbSA9IHRoaXMuZ2V0UmF3Tm9kZShlbGVtKTtcblxuICAgICAgICB2YXIgb3ZlcmZsb3dSZWdleCA9IGluY2x1ZGVIaWRkZW4gPyBPVkVSRkxPV19SRUdFWC5oaWRkZW4gOiBPVkVSRkxPV19SRUdFWC5ub3JtYWw7XG4gICAgICAgIHZhciBlbGVtU3R5bGUgPSAkd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgICAgIHJldHVybiBvdmVyZmxvd1JlZ2V4LnRlc3QoZWxlbVN0eWxlLm92ZXJmbG93ICsgZWxlbVN0eWxlLm92ZXJmbG93WSArIGVsZW1TdHlsZS5vdmVyZmxvd1gpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyB0aGUgY2xvc2VzdCBzY3JvbGxhYmxlIGFuY2VzdG9yLlxuICAgICAgICogQSBwb3J0IG9mIHRoZSBqUXVlcnkgVUkgc2Nyb2xsUGFyZW50IG1ldGhvZDpcbiAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5LXVpL2Jsb2IvbWFzdGVyL3VpL3Njcm9sbC1wYXJlbnQuanNcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBmaW5kIHRoZSBzY3JvbGwgcGFyZW50IG9mLlxuICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gW2luY2x1ZGVIaWRkZW49ZmFsc2VdIC0gU2hvdWxkIHNjcm9sbCBzdHlsZSBvZiAnaGlkZGVuJyBiZSBjb25zaWRlcmVkLFxuICAgICAgICogICBkZWZhdWx0IGlzIGZhbHNlLlxuICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gW2luY2x1ZGVTZWxmPWZhbHNlXSAtIFNob3VsZCB0aGUgZWxlbWVudCBiZWluZyBwYXNzZWQgYmVcbiAgICAgICAqIGluY2x1ZGVkIGluIHRoZSBzY3JvbGxhYmxlIGxsb2t1cC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZWxlbWVudH0gQSBIVE1MIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHNjcm9sbFBhcmVudDogZnVuY3Rpb24oZWxlbSwgaW5jbHVkZUhpZGRlbiwgaW5jbHVkZVNlbGYpIHtcbiAgICAgICAgZWxlbSA9IHRoaXMuZ2V0UmF3Tm9kZShlbGVtKTtcblxuICAgICAgICB2YXIgb3ZlcmZsb3dSZWdleCA9IGluY2x1ZGVIaWRkZW4gPyBPVkVSRkxPV19SRUdFWC5oaWRkZW4gOiBPVkVSRkxPV19SRUdFWC5ub3JtYWw7XG4gICAgICAgIHZhciBkb2N1bWVudEVsID0gJGRvY3VtZW50WzBdLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIGVsZW1TdHlsZSA9ICR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICAgICAgaWYgKGluY2x1ZGVTZWxmICYmIG92ZXJmbG93UmVnZXgudGVzdChlbGVtU3R5bGUub3ZlcmZsb3cgKyBlbGVtU3R5bGUub3ZlcmZsb3dZICsgZWxlbVN0eWxlLm92ZXJmbG93WCkpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhjbHVkZVN0YXRpYyA9IGVsZW1TdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgICAgICAgdmFyIHNjcm9sbFBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudCB8fCBkb2N1bWVudEVsO1xuXG4gICAgICAgIGlmIChzY3JvbGxQYXJlbnQgPT09IGRvY3VtZW50RWwgfHwgZWxlbVN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50RWw7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoc2Nyb2xsUGFyZW50LnBhcmVudEVsZW1lbnQgJiYgc2Nyb2xsUGFyZW50ICE9PSBkb2N1bWVudEVsKSB7XG4gICAgICAgICAgdmFyIHNwU3R5bGUgPSAkd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsUGFyZW50KTtcbiAgICAgICAgICBpZiAoZXhjbHVkZVN0YXRpYyAmJiBzcFN0eWxlLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICAgICAgZXhjbHVkZVN0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXhjbHVkZVN0YXRpYyAmJiBvdmVyZmxvd1JlZ2V4LnRlc3Qoc3BTdHlsZS5vdmVyZmxvdyArIHNwU3R5bGUub3ZlcmZsb3dZICsgc3BTdHlsZS5vdmVyZmxvd1gpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2Nyb2xsUGFyZW50ID0gc2Nyb2xsUGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Nyb2xsUGFyZW50O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBwb3NpdGlvbiBmdW5jdGlvbjpcbiAgICAgICAqIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9wb3NpdGlvbi8gLSBkaXN0YW5jZSB0byBjbG9zZXN0IHBvc2l0aW9uZWRcbiAgICAgICAqIGFuY2VzdG9yLiAgRG9lcyBub3QgYWNjb3VudCBmb3IgbWFyZ2lucyBieSBkZWZhdWx0IGxpa2UgalF1ZXJ5IHBvc2l0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGNhY2x1bGF0ZSB0aGUgcG9zaXRpb24gb24uXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBbaW5jbHVkZU1hcmdpbnM9ZmFsc2VdIC0gU2hvdWxkIG1hcmdpbnMgYmUgYWNjb3VudGVkXG4gICAgICAgKiBmb3IsIGRlZmF1bHQgaXMgZmFsc2UuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH0gQW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICogICA8dWw+XG4gICAgICAgKiAgICAgPGxpPioqd2lkdGgqKjogdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50PC9saT5cbiAgICAgICAqICAgICA8bGk+KipoZWlnaHQqKjogdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudDwvbGk+XG4gICAgICAgKiAgICAgPGxpPioqdG9wKio6IGRpc3RhbmNlIHRvIHRvcCBlZGdlIG9mIG9mZnNldCBwYXJlbnQ8L2xpPlxuICAgICAgICogICAgIDxsaT4qKmxlZnQqKjogZGlzdGFuY2UgdG8gbGVmdCBlZGdlIG9mIG9mZnNldCBwYXJlbnQ8L2xpPlxuICAgICAgICogICA8L3VsPlxuICAgICAgICovXG4gICAgICBwb3NpdGlvbjogZnVuY3Rpb24oZWxlbSwgaW5jbHVkZU1hZ2lucykge1xuICAgICAgICBlbGVtID0gdGhpcy5nZXRSYXdOb2RlKGVsZW0pO1xuXG4gICAgICAgIHZhciBlbGVtT2Zmc2V0ID0gdGhpcy5vZmZzZXQoZWxlbSk7XG4gICAgICAgIGlmIChpbmNsdWRlTWFnaW5zKSB7XG4gICAgICAgICAgdmFyIGVsZW1TdHlsZSA9ICR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICAgICAgICBlbGVtT2Zmc2V0LnRvcCAtPSB0aGlzLnBhcnNlU3R5bGUoZWxlbVN0eWxlLm1hcmdpblRvcCk7XG4gICAgICAgICAgZWxlbU9mZnNldC5sZWZ0IC09IHRoaXMucGFyc2VTdHlsZShlbGVtU3R5bGUubWFyZ2luTGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KGVsZW0pO1xuICAgICAgICB2YXIgcGFyZW50T2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPT0gJGRvY3VtZW50WzBdLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgIHBhcmVudE9mZnNldCA9IHRoaXMub2Zmc2V0KHBhcmVudCk7XG4gICAgICAgICAgcGFyZW50T2Zmc2V0LnRvcCArPSBwYXJlbnQuY2xpZW50VG9wIC0gcGFyZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBwYXJlbnQuY2xpZW50TGVmdCAtIHBhcmVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChhbmd1bGFyLmlzTnVtYmVyKGVsZW1PZmZzZXQud2lkdGgpID8gZWxlbU9mZnNldC53aWR0aCA6IGVsZW0ub2Zmc2V0V2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChhbmd1bGFyLmlzTnVtYmVyKGVsZW1PZmZzZXQuaGVpZ2h0KSA/IGVsZW1PZmZzZXQuaGVpZ2h0IDogZWxlbS5vZmZzZXRIZWlnaHQpLFxuICAgICAgICAgIHRvcDogTWF0aC5yb3VuZChlbGVtT2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3ApLFxuICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoZWxlbU9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIHJlYWQtb25seSBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIG9mZnNldCBmdW5jdGlvbjpcbiAgICAgICAqIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9vZmZzZXQvIC0gZGlzdGFuY2UgdG8gdmlld3BvcnQuICBEb2VzXG4gICAgICAgKiBub3QgYWNjb3VudCBmb3IgYm9yZGVycywgbWFyZ2lucywgb3IgcGFkZGluZyBvbiB0aGUgYm9keVxuICAgICAgICogZWxlbWVudC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBjYWxjdWxhdGUgdGhlIG9mZnNldCBvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgKiAgIDx1bD5cbiAgICAgICAqICAgICA8bGk+Kip3aWR0aCoqOiB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ8L2xpPlxuICAgICAgICogICAgIDxsaT4qKmhlaWdodCoqOiB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50PC9saT5cbiAgICAgICAqICAgICA8bGk+Kip0b3AqKjogZGlzdGFuY2UgdG8gdG9wIGVkZ2Ugb2Ygdmlld3BvcnQ8L2xpPlxuICAgICAgICogICAgIDxsaT4qKnJpZ2h0Kio6IGRpc3RhbmNlIHRvIGJvdHRvbSBlZGdlIG9mIHZpZXdwb3J0PC9saT5cbiAgICAgICAqICAgPC91bD5cbiAgICAgICAqL1xuICAgICAgb2Zmc2V0OiBmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgIGVsZW0gPSB0aGlzLmdldFJhd05vZGUoZWxlbSk7XG5cbiAgICAgICAgdmFyIGVsZW1CQ1IgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGFuZ3VsYXIuaXNOdW1iZXIoZWxlbUJDUi53aWR0aCkgPyBlbGVtQkNSLndpZHRoIDogZWxlbS5vZmZzZXRXaWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKGFuZ3VsYXIuaXNOdW1iZXIoZWxlbUJDUi5oZWlnaHQpID8gZWxlbUJDUi5oZWlnaHQgOiBlbGVtLm9mZnNldEhlaWdodCksXG4gICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKGVsZW1CQ1IudG9wICsgKCR3aW5kb3cucGFnZVlPZmZzZXQgfHwgJGRvY3VtZW50WzBdLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKSxcbiAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKGVsZW1CQ1IubGVmdCArICgkd2luZG93LnBhZ2VYT2Zmc2V0IHx8ICRkb2N1bWVudFswXS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIG9mZnNldCBkaXN0YW5jZSB0byB0aGUgY2xvc2VzdCBzY3JvbGxhYmxlIGFuY2VzdG9yXG4gICAgICAgKiBvciB2aWV3cG9ydC4gIEFjY291bnRzIGZvciBib3JkZXIgYW5kIHNjcm9sbGJhciB3aWR0aC5cbiAgICAgICAqXG4gICAgICAgKiBSaWdodCBhbmQgYm90dG9tIGRpbWVuc2lvbnMgcmVwcmVzZW50IHRoZSBkaXN0YW5jZSB0byB0aGVcbiAgICAgICAqIHJlc3BlY3RpdmUgZWRnZSBvZiB0aGUgdmlld3BvcnQgZWxlbWVudC4gIElmIHRoZSBlbGVtZW50XG4gICAgICAgKiBlZGdlIGV4dGVuZHMgYmV5b25kIHRoZSB2aWV3cG9ydCwgYSBuZWdhdGl2ZSB2YWx1ZSB3aWxsIGJlXG4gICAgICAgKiByZXBvcnRlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBnZXQgdGhlIHZpZXdwb3J0IG9mZnNldCBmb3IuXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBbdXNlRG9jdW1lbnQ9ZmFsc2VdIC0gU2hvdWxkIHRoZSB2aWV3cG9ydCBiZSB0aGUgZG9jdW1lbnQgZWxlbWVudCBpbnN0ZWFkXG4gICAgICAgKiBvZiB0aGUgZmlyc3Qgc2Nyb2xsYWJsZSBlbGVtZW50LCBkZWZhdWx0IGlzIGZhbHNlLlxuICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gW2luY2x1ZGVQYWRkaW5nPXRydWVdIC0gU2hvdWxkIHRoZSBwYWRkaW5nIG9uIHRoZSBvZmZzZXQgcGFyZW50IGVsZW1lbnRcbiAgICAgICAqIGJlIGFjY291bnRlZCBmb3IsIGRlZmF1bHQgaXMgdHJ1ZS5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgKiAgIDx1bD5cbiAgICAgICAqICAgICA8bGk+Kip0b3AqKjogZGlzdGFuY2UgdG8gdGhlIHRvcCBjb250ZW50IGVkZ2Ugb2Ygdmlld3BvcnQgZWxlbWVudDwvbGk+XG4gICAgICAgKiAgICAgPGxpPioqYm90dG9tKio6IGRpc3RhbmNlIHRvIHRoZSBib3R0b20gY29udGVudCBlZGdlIG9mIHZpZXdwb3J0IGVsZW1lbnQ8L2xpPlxuICAgICAgICogICAgIDxsaT4qKmxlZnQqKjogZGlzdGFuY2UgdG8gdGhlIGxlZnQgY29udGVudCBlZGdlIG9mIHZpZXdwb3J0IGVsZW1lbnQ8L2xpPlxuICAgICAgICogICAgIDxsaT4qKnJpZ2h0Kio6IGRpc3RhbmNlIHRvIHRoZSByaWdodCBjb250ZW50IGVkZ2Ugb2Ygdmlld3BvcnQgZWxlbWVudDwvbGk+XG4gICAgICAgKiAgIDwvdWw+XG4gICAgICAgKi9cbiAgICAgIHZpZXdwb3J0T2Zmc2V0OiBmdW5jdGlvbihlbGVtLCB1c2VEb2N1bWVudCwgaW5jbHVkZVBhZGRpbmcpIHtcbiAgICAgICAgZWxlbSA9IHRoaXMuZ2V0UmF3Tm9kZShlbGVtKTtcbiAgICAgICAgaW5jbHVkZVBhZGRpbmcgPSBpbmNsdWRlUGFkZGluZyAhPT0gZmFsc2UgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIGVsZW1CQ1IgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgb2Zmc2V0QkNSID0ge3RvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMH07XG5cbiAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IHVzZURvY3VtZW50ID8gJGRvY3VtZW50WzBdLmRvY3VtZW50RWxlbWVudCA6IHRoaXMuc2Nyb2xsUGFyZW50KGVsZW0pO1xuICAgICAgICB2YXIgb2Zmc2V0UGFyZW50QkNSID0gb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIG9mZnNldEJDUi50b3AgPSBvZmZzZXRQYXJlbnRCQ1IudG9wICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICAgICAgb2Zmc2V0QkNSLmxlZnQgPSBvZmZzZXRQYXJlbnRCQ1IubGVmdCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgICBpZiAob2Zmc2V0UGFyZW50ID09PSAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgb2Zmc2V0QkNSLnRvcCArPSAkd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgIG9mZnNldEJDUi5sZWZ0ICs9ICR3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0QkNSLmJvdHRvbSA9IG9mZnNldEJDUi50b3AgKyBvZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBvZmZzZXRCQ1IucmlnaHQgPSBvZmZzZXRCQ1IubGVmdCArIG9mZnNldFBhcmVudC5jbGllbnRXaWR0aDtcblxuICAgICAgICBpZiAoaW5jbHVkZVBhZGRpbmcpIHtcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50U3R5bGUgPSAkd2luZG93LmdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KTtcbiAgICAgICAgICBvZmZzZXRCQ1IudG9wICs9IHRoaXMucGFyc2VTdHlsZShvZmZzZXRQYXJlbnRTdHlsZS5wYWRkaW5nVG9wKTtcbiAgICAgICAgICBvZmZzZXRCQ1IuYm90dG9tIC09IHRoaXMucGFyc2VTdHlsZShvZmZzZXRQYXJlbnRTdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICAgICAgICBvZmZzZXRCQ1IubGVmdCArPSB0aGlzLnBhcnNlU3R5bGUob2Zmc2V0UGFyZW50U3R5bGUucGFkZGluZ0xlZnQpO1xuICAgICAgICAgIG9mZnNldEJDUi5yaWdodCAtPSB0aGlzLnBhcnNlU3R5bGUob2Zmc2V0UGFyZW50U3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKGVsZW1CQ1IudG9wIC0gb2Zmc2V0QkNSLnRvcCksXG4gICAgICAgICAgYm90dG9tOiBNYXRoLnJvdW5kKG9mZnNldEJDUi5ib3R0b20gLSBlbGVtQkNSLmJvdHRvbSksXG4gICAgICAgICAgbGVmdDogTWF0aC5yb3VuZChlbGVtQkNSLmxlZnQgLSBvZmZzZXRCQ1IubGVmdCksXG4gICAgICAgICAgcmlnaHQ6IE1hdGgucm91bmQob2Zmc2V0QkNSLnJpZ2h0IC0gZWxlbUJDUi5yaWdodClcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdmlkZXMgYW4gYXJyYXkgb2YgcGxhY2VtZW50IHZhbHVlcyBwYXJzZWQgZnJvbSBhIHBsYWNlbWVudCBzdHJpbmcuXG4gICAgICAgKiBBbG9uZyB3aXRoIHRoZSAnYXV0bycgaW5kaWNhdG9yLCBzdXBwb3J0ZWQgcGxhY2VtZW50IHN0cmluZ3MgYXJlOlxuICAgICAgICogICA8dWw+XG4gICAgICAgKiAgICAgPGxpPnRvcDogZWxlbWVudCBvbiB0b3AsIGhvcml6b250YWxseSBjZW50ZXJlZCBvbiBob3N0IGVsZW1lbnQuPC9saT5cbiAgICAgICAqICAgICA8bGk+dG9wLWxlZnQ6IGVsZW1lbnQgb24gdG9wLCBsZWZ0IGVkZ2UgYWxpZ25lZCB3aXRoIGhvc3QgZWxlbWVudCBsZWZ0IGVkZ2UuPC9saT5cbiAgICAgICAqICAgICA8bGk+dG9wLXJpZ2h0OiBlbGVtZW50IG9uIHRvcCwgbGVyaWdodGZ0IGVkZ2UgYWxpZ25lZCB3aXRoIGhvc3QgZWxlbWVudCByaWdodCBlZGdlLjwvbGk+XG4gICAgICAgKiAgICAgPGxpPmJvdHRvbTogZWxlbWVudCBvbiBib3R0b20sIGhvcml6b250YWxseSBjZW50ZXJlZCBvbiBob3N0IGVsZW1lbnQuPC9saT5cbiAgICAgICAqICAgICA8bGk+Ym90dG9tLWxlZnQ6IGVsZW1lbnQgb24gYm90dG9tLCBsZWZ0IGVkZ2UgYWxpZ25lZCB3aXRoIGhvc3QgZWxlbWVudCBsZWZ0IGVkZ2UuPC9saT5cbiAgICAgICAqICAgICA8bGk+Ym90dG9tLXJpZ2h0OiBlbGVtZW50IG9uIGJvdHRvbSwgcmlnaHQgZWRnZSBhbGlnbmVkIHdpdGggaG9zdCBlbGVtZW50IHJpZ2h0IGVkZ2UuPC9saT5cbiAgICAgICAqICAgICA8bGk+bGVmdDogZWxlbWVudCBvbiBsZWZ0LCB2ZXJ0aWNhbGx5IGNlbnRlcmVkIG9uIGhvc3QgZWxlbWVudC48L2xpPlxuICAgICAgICogICAgIDxsaT5sZWZ0LXRvcDogZWxlbWVudCBvbiBsZWZ0LCB0b3AgZWRnZSBhbGlnbmVkIHdpdGggaG9zdCBlbGVtZW50IHRvcCBlZGdlLjwvbGk+XG4gICAgICAgKiAgICAgPGxpPmxlZnQtYm90dG9tOiBlbGVtZW50IG9uIGxlZnQsIGJvdHRvbSBlZGdlIGFsaWduZWQgd2l0aCBob3N0IGVsZW1lbnQgYm90dG9tIGVkZ2UuPC9saT5cbiAgICAgICAqICAgICA8bGk+cmlnaHQ6IGVsZW1lbnQgb24gcmlnaHQsIHZlcnRpY2FsbHkgY2VudGVyZWQgb24gaG9zdCBlbGVtZW50LjwvbGk+XG4gICAgICAgKiAgICAgPGxpPnJpZ2h0LXRvcDogZWxlbWVudCBvbiByaWdodCwgdG9wIGVkZ2UgYWxpZ25lZCB3aXRoIGhvc3QgZWxlbWVudCB0b3AgZWRnZS48L2xpPlxuICAgICAgICogICAgIDxsaT5yaWdodC1ib3R0b206IGVsZW1lbnQgb24gcmlnaHQsIGJvdHRvbSBlZGdlIGFsaWduZWQgd2l0aCBob3N0IGVsZW1lbnQgYm90dG9tIGVkZ2UuPC9saT5cbiAgICAgICAqICAgPC91bD5cbiAgICAgICAqIEEgcGxhY2VtZW50IHN0cmluZyB3aXRoIGFuICdhdXRvJyBpbmRpY2F0b3IgaXMgZXhwZWN0ZWQgdG8gYmVcbiAgICAgICAqIHNwYWNlIHNlcGFyYXRlZCBmcm9tIHRoZSBwbGFjZW1lbnQsIGkuZTogJ2F1dG8gYm90dG9tLWxlZnQnICBJZlxuICAgICAgICogdGhlIHByaW1hcnkgYW5kIHNlY29uZGFyeSBwbGFjZW1lbnQgdmFsdWVzIGRvIG5vdCBtYXRjaCAndG9wLFxuICAgICAgICogYm90dG9tLCBsZWZ0LCByaWdodCcgdGhlbiAndG9wJyB3aWxsIGJlIHRoZSBwcmltYXJ5IHBsYWNlbWVudCBhbmRcbiAgICAgICAqICdjZW50ZXInIHdpbGwgYmUgdGhlIHNlY29uZGFyeSBwbGFjZW1lbnQuICBJZiAnYXV0bycgaXMgcGFzc2VkLCB0cnVlXG4gICAgICAgKiB3aWxsIGJlIHJldHVybmVkIGFzIHRoZSAzcmQgdmFsdWUgb2YgdGhlIGFycmF5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZW1lbnQgLSBUaGUgcGxhY2VtZW50IHN0cmluZyB0byBwYXJzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7YXJyYXl9IEFuIGFycmF5IHdpdGggdGhlIGZvbGxvd2luZyB2YWx1ZXNcbiAgICAgICAqIDx1bD5cbiAgICAgICAqICAgPGxpPioqWzBdKio6IFRoZSBwcmltYXJ5IHBsYWNlbWVudC48L2xpPlxuICAgICAgICogICA8bGk+KipbMV0qKjogVGhlIHNlY29uZGFyeSBwbGFjZW1lbnQuPC9saT5cbiAgICAgICAqICAgPGxpPioqWzJdKio6IElmIGF1dG8gaXMgcGFzc2VkOiB0cnVlLCBlbHNlIHVuZGVmaW5lZC48L2xpPlxuICAgICAgICogPC91bD5cbiAgICAgICAqL1xuICAgICAgcGFyc2VQbGFjZW1lbnQ6IGZ1bmN0aW9uKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgYXV0b1BsYWNlID0gUExBQ0VNRU5UX1JFR0VYLmF1dG8udGVzdChwbGFjZW1lbnQpO1xuICAgICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnJlcGxhY2UoUExBQ0VNRU5UX1JFR0VYLmF1dG8sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpO1xuXG4gICAgICAgIHBsYWNlbWVudFswXSA9IHBsYWNlbWVudFswXSB8fCAndG9wJztcbiAgICAgICAgaWYgKCFQTEFDRU1FTlRfUkVHRVgucHJpbWFyeS50ZXN0KHBsYWNlbWVudFswXSkpIHtcbiAgICAgICAgICBwbGFjZW1lbnRbMF0gPSAndG9wJztcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlbWVudFsxXSA9IHBsYWNlbWVudFsxXSB8fCAnY2VudGVyJztcbiAgICAgICAgaWYgKCFQTEFDRU1FTlRfUkVHRVguc2Vjb25kYXJ5LnRlc3QocGxhY2VtZW50WzFdKSkge1xuICAgICAgICAgIHBsYWNlbWVudFsxXSA9ICdjZW50ZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICAgIHBsYWNlbWVudFsyXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxhY2VtZW50WzJdID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyBjb29yZGluYXRlcyBmb3IgYW4gZWxlbWVudCB0byBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvXG4gICAgICAgKiBhbm90aGVyIGVsZW1lbnQuICBQYXNzaW5nICdhdXRvJyBhcyBwYXJ0IG9mIHRoZSBwbGFjZW1lbnQgcGFyYW1ldGVyXG4gICAgICAgKiB3aWxsIGVuYWJsZSBzbWFydCBwbGFjZW1lbnQgLSB3aGVyZSB0aGUgZWxlbWVudCBmaXRzLiBpLmU6XG4gICAgICAgKiAnYXV0byBsZWZ0LXRvcCcgd2lsbCBjaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgZW5vdWdoIHNwYWNlIHRvIHRoZSBsZWZ0XG4gICAgICAgKiBvZiB0aGUgaG9zdEVsZW0gdG8gZml0IHRoZSB0YXJnZXRFbGVtLCBpZiBub3QgcGxhY2UgcmlnaHQgKHNhbWUgZm9yIHNlY29uZGFyeVxuICAgICAgICogdG9wIHBsYWNlbWVudCkuICBBdmFpbGFibGUgc3BhY2UgaXMgY2FsY3VsYXRlZCB1c2luZyB0aGUgdmlld3BvcnRPZmZzZXRcbiAgICAgICAqIGZ1bmN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gaG9zdEVsZW0gLSBUaGUgZWxlbWVudCB0byBwb3NpdGlvbiBhZ2FpbnN0LlxuICAgICAgICogQHBhcmFtIHtlbGVtZW50fSB0YXJnZXRFbGVtIC0gVGhlIGVsZW1lbnQgdG8gcG9zaXRpb24uXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZz19IFtwbGFjZW1lbnQ9dG9wXSAtIFRoZSBwbGFjZW1lbnQgZm9yIHRoZSB0YXJnZXRFbGVtLFxuICAgICAgICogICBkZWZhdWx0IGlzICd0b3AnLiAnY2VudGVyJyBpcyBhc3N1bWVkIGFzIHNlY29uZGFyeSBwbGFjZW1lbnQgZm9yXG4gICAgICAgKiAgICd0b3AnLCAnbGVmdCcsICdyaWdodCcsIGFuZCAnYm90dG9tJyBwbGFjZW1lbnRzLiAgQXZhaWxhYmxlIHBsYWNlbWVudHMgYXJlOlxuICAgICAgICogICA8dWw+XG4gICAgICAgKiAgICAgPGxpPnRvcDwvbGk+XG4gICAgICAgKiAgICAgPGxpPnRvcC1yaWdodDwvbGk+XG4gICAgICAgKiAgICAgPGxpPnRvcC1sZWZ0PC9saT5cbiAgICAgICAqICAgICA8bGk+Ym90dG9tPC9saT5cbiAgICAgICAqICAgICA8bGk+Ym90dG9tLWxlZnQ8L2xpPlxuICAgICAgICogICAgIDxsaT5ib3R0b20tcmlnaHQ8L2xpPlxuICAgICAgICogICAgIDxsaT5sZWZ0PC9saT5cbiAgICAgICAqICAgICA8bGk+bGVmdC10b3A8L2xpPlxuICAgICAgICogICAgIDxsaT5sZWZ0LWJvdHRvbTwvbGk+XG4gICAgICAgKiAgICAgPGxpPnJpZ2h0PC9saT5cbiAgICAgICAqICAgICA8bGk+cmlnaHQtdG9wPC9saT5cbiAgICAgICAqICAgICA8bGk+cmlnaHQtYm90dG9tPC9saT5cbiAgICAgICAqICAgPC91bD5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IFthcHBlbmRUb0JvZHk9ZmFsc2VdIC0gU2hvdWxkIHRoZSB0b3AgYW5kIGxlZnQgdmFsdWVzIHJldHVybmVkXG4gICAgICAgKiAgIGJlIGNhbGN1bGF0ZWQgZnJvbSB0aGUgYm9keSBlbGVtZW50LCBkZWZhdWx0IGlzIGZhbHNlLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAqICAgPHVsPlxuICAgICAgICogICAgIDxsaT4qKnRvcCoqOiBWYWx1ZSBmb3IgdGFyZ2V0RWxlbSB0b3AuPC9saT5cbiAgICAgICAqICAgICA8bGk+KipsZWZ0Kio6IFZhbHVlIGZvciB0YXJnZXRFbGVtIGxlZnQuPC9saT5cbiAgICAgICAqICAgICA8bGk+KipwbGFjZW1lbnQqKjogVGhlIHJlc29sdmVkIHBsYWNlbWVudC48L2xpPlxuICAgICAgICogICA8L3VsPlxuICAgICAgICovXG4gICAgICBwb3NpdGlvbkVsZW1lbnRzOiBmdW5jdGlvbihob3N0RWxlbSwgdGFyZ2V0RWxlbSwgcGxhY2VtZW50LCBhcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgaG9zdEVsZW0gPSB0aGlzLmdldFJhd05vZGUoaG9zdEVsZW0pO1xuICAgICAgICB0YXJnZXRFbGVtID0gdGhpcy5nZXRSYXdOb2RlKHRhcmdldEVsZW0pO1xuXG4gICAgICAgIC8vIG5lZWQgdG8gcmVhZCBmcm9tIHByb3AgdG8gc3VwcG9ydCB0ZXN0cy5cbiAgICAgICAgdmFyIHRhcmdldFdpZHRoID0gYW5ndWxhci5pc0RlZmluZWQodGFyZ2V0RWxlbS5vZmZzZXRXaWR0aCkgPyB0YXJnZXRFbGVtLm9mZnNldFdpZHRoIDogdGFyZ2V0RWxlbS5wcm9wKCdvZmZzZXRXaWR0aCcpO1xuICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gYW5ndWxhci5pc0RlZmluZWQodGFyZ2V0RWxlbS5vZmZzZXRIZWlnaHQpID8gdGFyZ2V0RWxlbS5vZmZzZXRIZWlnaHQgOiB0YXJnZXRFbGVtLnByb3AoJ29mZnNldEhlaWdodCcpO1xuXG4gICAgICAgIHBsYWNlbWVudCA9IHRoaXMucGFyc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgICAgICB2YXIgaG9zdEVsZW1Qb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWxlbSkgOiB0aGlzLnBvc2l0aW9uKGhvc3RFbGVtKTtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1Qb3MgPSB7dG9wOiAwLCBsZWZ0OiAwLCBwbGFjZW1lbnQ6ICcnfTtcblxuICAgICAgICBpZiAocGxhY2VtZW50WzJdKSB7XG4gICAgICAgICAgdmFyIHZpZXdwb3J0T2Zmc2V0ID0gdGhpcy52aWV3cG9ydE9mZnNldChob3N0RWxlbSwgYXBwZW5kVG9Cb2R5KTtcblxuICAgICAgICAgIHZhciB0YXJnZXRFbGVtU3R5bGUgPSAkd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbSk7XG4gICAgICAgICAgdmFyIGFkanVzdGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0YXJnZXRXaWR0aCArIE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5wYXJzZVN0eWxlKHRhcmdldEVsZW1TdHlsZS5tYXJnaW5MZWZ0KSArIHRoaXMucGFyc2VTdHlsZSh0YXJnZXRFbGVtU3R5bGUubWFyZ2luUmlnaHQpKSksXG4gICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodCArIE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5wYXJzZVN0eWxlKHRhcmdldEVsZW1TdHlsZS5tYXJnaW5Ub3ApICsgdGhpcy5wYXJzZVN0eWxlKHRhcmdldEVsZW1TdHlsZS5tYXJnaW5Cb3R0b20pKSlcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcGxhY2VtZW50WzBdID0gcGxhY2VtZW50WzBdID09PSAndG9wJyAmJiBhZGp1c3RlZFNpemUuaGVpZ2h0ID4gdmlld3BvcnRPZmZzZXQudG9wICYmIGFkanVzdGVkU2l6ZS5oZWlnaHQgPD0gdmlld3BvcnRPZmZzZXQuYm90dG9tID8gJ2JvdHRvbScgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudFswXSA9PT0gJ2JvdHRvbScgJiYgYWRqdXN0ZWRTaXplLmhlaWdodCA+IHZpZXdwb3J0T2Zmc2V0LmJvdHRvbSAmJiBhZGp1c3RlZFNpemUuaGVpZ2h0IDw9IHZpZXdwb3J0T2Zmc2V0LnRvcCA/ICd0b3AnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRbMF0gPT09ICdsZWZ0JyAmJiBhZGp1c3RlZFNpemUud2lkdGggPiB2aWV3cG9ydE9mZnNldC5sZWZ0ICYmIGFkanVzdGVkU2l6ZS53aWR0aCA8PSB2aWV3cG9ydE9mZnNldC5yaWdodCA/ICdyaWdodCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudFswXSA9PT0gJ3JpZ2h0JyAmJiBhZGp1c3RlZFNpemUud2lkdGggPiB2aWV3cG9ydE9mZnNldC5yaWdodCAmJiBhZGp1c3RlZFNpemUud2lkdGggPD0gdmlld3BvcnRPZmZzZXQubGVmdCA/ICdsZWZ0JyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50WzBdO1xuXG4gICAgICAgICAgcGxhY2VtZW50WzFdID0gcGxhY2VtZW50WzFdID09PSAndG9wJyAmJiBhZGp1c3RlZFNpemUuaGVpZ2h0IC0gaG9zdEVsZW1Qb3MuaGVpZ2h0ID4gdmlld3BvcnRPZmZzZXQuYm90dG9tICYmIGFkanVzdGVkU2l6ZS5oZWlnaHQgLSBob3N0RWxlbVBvcy5oZWlnaHQgPD0gdmlld3BvcnRPZmZzZXQudG9wID8gJ2JvdHRvbScgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudFsxXSA9PT0gJ2JvdHRvbScgJiYgYWRqdXN0ZWRTaXplLmhlaWdodCAtIGhvc3RFbGVtUG9zLmhlaWdodCA+IHZpZXdwb3J0T2Zmc2V0LnRvcCAmJiBhZGp1c3RlZFNpemUuaGVpZ2h0IC0gaG9zdEVsZW1Qb3MuaGVpZ2h0IDw9IHZpZXdwb3J0T2Zmc2V0LmJvdHRvbSA/ICd0b3AnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRbMV0gPT09ICdsZWZ0JyAmJiBhZGp1c3RlZFNpemUud2lkdGggLSBob3N0RWxlbVBvcy53aWR0aCA+IHZpZXdwb3J0T2Zmc2V0LnJpZ2h0ICYmIGFkanVzdGVkU2l6ZS53aWR0aCAtIGhvc3RFbGVtUG9zLndpZHRoIDw9IHZpZXdwb3J0T2Zmc2V0LmxlZnQgPyAncmlnaHQnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRbMV0gPT09ICdyaWdodCcgJiYgYWRqdXN0ZWRTaXplLndpZHRoIC0gaG9zdEVsZW1Qb3Mud2lkdGggPiB2aWV3cG9ydE9mZnNldC5sZWZ0ICYmIGFkanVzdGVkU2l6ZS53aWR0aCAtIGhvc3RFbGVtUG9zLndpZHRoIDw9IHZpZXdwb3J0T2Zmc2V0LnJpZ2h0ID8gJ2xlZnQnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRbMV07XG5cbiAgICAgICAgICBpZiAocGxhY2VtZW50WzFdID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgaWYgKFBMQUNFTUVOVF9SRUdFWC52ZXJ0aWNhbC50ZXN0KHBsYWNlbWVudFswXSkpIHtcbiAgICAgICAgICAgICAgdmFyIHhPdmVyZmxvdyA9IGhvc3RFbGVtUG9zLndpZHRoIC8gMiAtIHRhcmdldFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0T2Zmc2V0LmxlZnQgKyB4T3ZlcmZsb3cgPCAwICYmIGFkanVzdGVkU2l6ZS53aWR0aCAtIGhvc3RFbGVtUG9zLndpZHRoIDw9IHZpZXdwb3J0T2Zmc2V0LnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50WzFdID0gJ2xlZnQnO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZpZXdwb3J0T2Zmc2V0LnJpZ2h0ICsgeE92ZXJmbG93IDwgMCAmJiBhZGp1c3RlZFNpemUud2lkdGggLSBob3N0RWxlbVBvcy53aWR0aCA8PSB2aWV3cG9ydE9mZnNldC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50WzFdID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHlPdmVyZmxvdyA9IGhvc3RFbGVtUG9zLmhlaWdodCAvIDIgLSBhZGp1c3RlZFNpemUuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0T2Zmc2V0LnRvcCArIHlPdmVyZmxvdyA8IDAgJiYgYWRqdXN0ZWRTaXplLmhlaWdodCAtIGhvc3RFbGVtUG9zLmhlaWdodCA8PSB2aWV3cG9ydE9mZnNldC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRbMV0gPSAndG9wJztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2aWV3cG9ydE9mZnNldC5ib3R0b20gKyB5T3ZlcmZsb3cgPCAwICYmIGFkanVzdGVkU2l6ZS5oZWlnaHQgLSBob3N0RWxlbVBvcy5oZWlnaHQgPD0gdmlld3BvcnRPZmZzZXQudG9wKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50WzFdID0gJ2JvdHRvbSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHBsYWNlbWVudFswXSkge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0YXJnZXRFbGVtUG9zLnRvcCA9IGhvc3RFbGVtUG9zLnRvcCAtIHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0YXJnZXRFbGVtUG9zLnRvcCA9IGhvc3RFbGVtUG9zLnRvcCArIGhvc3RFbGVtUG9zLmhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbVBvcy5sZWZ0ID0gaG9zdEVsZW1Qb3MubGVmdCAtIHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbVBvcy5sZWZ0ID0gaG9zdEVsZW1Qb3MubGVmdCArIGhvc3RFbGVtUG9zLndpZHRoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHBsYWNlbWVudFsxXSkge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0YXJnZXRFbGVtUG9zLnRvcCA9IGhvc3RFbGVtUG9zLnRvcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0YXJnZXRFbGVtUG9zLnRvcCA9IGhvc3RFbGVtUG9zLnRvcCArIGhvc3RFbGVtUG9zLmhlaWdodCAtIHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbVBvcy5sZWZ0ID0gaG9zdEVsZW1Qb3MubGVmdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHRhcmdldEVsZW1Qb3MubGVmdCA9IGhvc3RFbGVtUG9zLmxlZnQgKyBob3N0RWxlbVBvcy53aWR0aCAtIHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgIGlmIChQTEFDRU1FTlRfUkVHRVgudmVydGljYWwudGVzdChwbGFjZW1lbnRbMF0pKSB7XG4gICAgICAgICAgICAgIHRhcmdldEVsZW1Qb3MubGVmdCA9IGhvc3RFbGVtUG9zLmxlZnQgKyBob3N0RWxlbVBvcy53aWR0aCAvIDIgLSB0YXJnZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRFbGVtUG9zLnRvcCA9IGhvc3RFbGVtUG9zLnRvcCArIGhvc3RFbGVtUG9zLmhlaWdodCAvIDIgLSB0YXJnZXRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRFbGVtUG9zLnRvcCA9IE1hdGgucm91bmQodGFyZ2V0RWxlbVBvcy50b3ApO1xuICAgICAgICB0YXJnZXRFbGVtUG9zLmxlZnQgPSBNYXRoLnJvdW5kKHRhcmdldEVsZW1Qb3MubGVmdCk7XG4gICAgICAgIHRhcmdldEVsZW1Qb3MucGxhY2VtZW50ID0gcGxhY2VtZW50WzFdID09PSAnY2VudGVyJyA/IHBsYWNlbWVudFswXSA6IHBsYWNlbWVudFswXSArICctJyArIHBsYWNlbWVudFsxXTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0RWxlbVBvcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdmlkZXMgYSB3YXkgdG8gYWRqdXN0IHRoZSB0b3AgcG9zaXRpb25pbmcgYWZ0ZXIgZmlyc3RcbiAgICAgICAqIHJlbmRlciB0byBjb3JyZWN0bHkgYWxpZ24gZWxlbWVudCB0byB0b3AgYWZ0ZXIgY29udGVudFxuICAgICAgICogcmVuZGVyaW5nIGNhdXNlcyByZXNpemVkIGVsZW1lbnQgaGVpZ2h0XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHthcnJheX0gcGxhY2VtZW50Q2xhc3NlcyAtIFRoZSBhcnJheSBvZiBzdHJpbmdzIG9mIGNsYXNzZXNcbiAgICAgICAqIGVsZW1lbnQgc2hvdWxkIGhhdmUuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGFpbmVyUG9zaXRpb24gLSBUaGUgb2JqZWN0IHdpdGggY29udGFpbmVyXG4gICAgICAgKiBwb3NpdGlvbiBpbmZvcm1hdGlvblxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluaXRpYWxIZWlnaHQgLSBUaGUgaW5pdGlhbCBoZWlnaHQgZm9yIHRoZSBlbGVtLlxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRIZWlnaHQgLSBUaGUgY3VycmVudCBoZWlnaHQgZm9yIHRoZSBlbGVtLlxuICAgICAgICovXG4gICAgICBhZGp1c3RUb3A6IGZ1bmN0aW9uKHBsYWNlbWVudENsYXNzZXMsIGNvbnRhaW5lclBvc2l0aW9uLCBpbml0aWFsSGVpZ2h0LCBjdXJyZW50SGVpZ2h0KSB7XG4gICAgICAgIGlmIChwbGFjZW1lbnRDbGFzc2VzLmluZGV4T2YoJ3RvcCcpICE9PSAtMSAmJiBpbml0aWFsSGVpZ2h0ICE9PSBjdXJyZW50SGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogY29udGFpbmVyUG9zaXRpb24udG9wIC0gY3VycmVudEhlaWdodCArICdweCdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIGEgd2F5IGZvciBwb3NpdGlvbmluZyB0b29sdGlwICYgZHJvcGRvd25cbiAgICAgICAqIGFycm93cyB3aGVuIHVzaW5nIHBsYWNlbWVudCBvcHRpb25zIGJleW9uZCB0aGUgc3RhbmRhcmRcbiAgICAgICAqIGxlZnQsIHJpZ2h0LCB0b3AsIG9yIGJvdHRvbS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW0gLSBUaGUgdG9vbHRpcC9kcm9wZG93biBlbGVtZW50LlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlbWVudCAtIFRoZSBwbGFjZW1lbnQgZm9yIHRoZSBlbGVtLlxuICAgICAgICovXG4gICAgICBwb3NpdGlvbkFycm93OiBmdW5jdGlvbihlbGVtLCBwbGFjZW1lbnQpIHtcbiAgICAgICAgZWxlbSA9IHRoaXMuZ2V0UmF3Tm9kZShlbGVtKTtcblxuICAgICAgICB2YXIgaW5uZXJFbGVtID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1pbm5lciwgLnBvcG92ZXItaW5uZXInKTtcbiAgICAgICAgaWYgKCFpbm5lckVsZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNUb29sdGlwID0gYW5ndWxhci5lbGVtZW50KGlubmVyRWxlbSkuaGFzQ2xhc3MoJ3Rvb2x0aXAtaW5uZXInKTtcblxuICAgICAgICB2YXIgYXJyb3dFbGVtID0gaXNUb29sdGlwID8gZWxlbS5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1hcnJvdycpIDogZWxlbS5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKTtcbiAgICAgICAgaWYgKCFhcnJvd0VsZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJyb3dDc3MgPSB7XG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBib3R0b206ICcnLFxuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHBsYWNlbWVudCA9IHRoaXMucGFyc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICAgICAgaWYgKHBsYWNlbWVudFsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAvLyBubyBhZGp1c3RtZW50IG5lY2Vzc2FyeSAtIGp1c3QgcmVzZXQgc3R5bGVzXG4gICAgICAgICAgYW5ndWxhci5lbGVtZW50KGFycm93RWxlbSkuY3NzKGFycm93Q3NzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm9yZGVyUHJvcCA9ICdib3JkZXItJyArIHBsYWNlbWVudFswXSArICctd2lkdGgnO1xuICAgICAgICB2YXIgYm9yZGVyV2lkdGggPSAkd2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJyb3dFbGVtKVtib3JkZXJQcm9wXTtcblxuICAgICAgICB2YXIgYm9yZGVyUmFkaXVzUHJvcCA9ICdib3JkZXItJztcbiAgICAgICAgaWYgKFBMQUNFTUVOVF9SRUdFWC52ZXJ0aWNhbC50ZXN0KHBsYWNlbWVudFswXSkpIHtcbiAgICAgICAgICBib3JkZXJSYWRpdXNQcm9wICs9IHBsYWNlbWVudFswXSArICctJyArIHBsYWNlbWVudFsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3JkZXJSYWRpdXNQcm9wICs9IHBsYWNlbWVudFsxXSArICctJyArIHBsYWNlbWVudFswXTtcbiAgICAgICAgfVxuICAgICAgICBib3JkZXJSYWRpdXNQcm9wICs9ICctcmFkaXVzJztcbiAgICAgICAgdmFyIGJvcmRlclJhZGl1cyA9ICR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpc1Rvb2x0aXAgPyBpbm5lckVsZW0gOiBlbGVtKVtib3JkZXJSYWRpdXNQcm9wXTtcblxuICAgICAgICBzd2l0Y2ggKHBsYWNlbWVudFswXSkge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICBhcnJvd0Nzcy5ib3R0b20gPSBpc1Rvb2x0aXAgPyAnMCcgOiAnLScgKyBib3JkZXJXaWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICBhcnJvd0Nzcy50b3AgPSBpc1Rvb2x0aXAgPyAnMCcgOiAnLScgKyBib3JkZXJXaWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgYXJyb3dDc3MucmlnaHQgPSBpc1Rvb2x0aXAgPyAnMCcgOiAnLScgKyBib3JkZXJXaWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGFycm93Q3NzLmxlZnQgPSBpc1Rvb2x0aXAgPyAnMCcgOiAnLScgKyBib3JkZXJXaWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyb3dDc3NbcGxhY2VtZW50WzFdXSA9IGJvcmRlclJhZGl1cztcblxuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoYXJyb3dFbGVtKS5jc3MoYXJyb3dDc3MpO1xuICAgICAgfVxuICAgIH07XG4gIH1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kYXRlcGlja2VyUG9wdXAnLCBbJ3VpLmJvb3RzdHJhcC5kYXRlcGlja2VyJywgJ3VpLmJvb3RzdHJhcC5wb3NpdGlvbiddKVxuXG4udmFsdWUoJyRkYXRlcGlja2VyUG9wdXBMaXRlcmFsV2FybmluZycsIHRydWUpXG5cbi5jb25zdGFudCgndWliRGF0ZXBpY2tlclBvcHVwQ29uZmlnJywge1xuICBhbHRJbnB1dEZvcm1hdHM6IFtdLFxuICBhcHBlbmRUb0JvZHk6IGZhbHNlLFxuICBjbGVhclRleHQ6ICdDbGVhcicsXG4gIGNsb3NlT25EYXRlU2VsZWN0aW9uOiB0cnVlLFxuICBjbG9zZVRleHQ6ICdEb25lJyxcbiAgY3VycmVudFRleHQ6ICdUb2RheScsXG4gIGRhdGVwaWNrZXJQb3B1cDogJ3l5eXktTU0tZGQnLFxuICBkYXRlcGlja2VyUG9wdXBUZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9kYXRlcGlja2VyUG9wdXAvcG9wdXAuaHRtbCcsXG4gIGRhdGVwaWNrZXJUZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbCcsXG4gIGh0bWw1VHlwZXM6IHtcbiAgICBkYXRlOiAneXl5eS1NTS1kZCcsXG4gICAgJ2RhdGV0aW1lLWxvY2FsJzogJ3l5eXktTU0tZGRUSEg6bW06c3Muc3NzJyxcbiAgICAnbW9udGgnOiAneXl5eS1NTSdcbiAgfSxcbiAgb25PcGVuRm9jdXM6IHRydWUsXG4gIHNob3dCdXR0b25CYXI6IHRydWUsXG4gIHBsYWNlbWVudDogJ2F1dG8gYm90dG9tLWxlZnQnXG59KVxuXG4uY29udHJvbGxlcignVWliRGF0ZXBpY2tlclBvcHVwQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckY29tcGlsZScsICckbG9nJywgJyRwYXJzZScsICckd2luZG93JywgJyRkb2N1bWVudCcsICckcm9vdFNjb3BlJywgJyR1aWJQb3NpdGlvbicsICdkYXRlRmlsdGVyJywgJ3VpYkRhdGVQYXJzZXInLCAndWliRGF0ZXBpY2tlclBvcHVwQ29uZmlnJywgJyR0aW1lb3V0JywgJ3VpYkRhdGVwaWNrZXJDb25maWcnLCAnJGRhdGVwaWNrZXJQb3B1cExpdGVyYWxXYXJuaW5nJyxcbmZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGNvbXBpbGUsICRsb2csICRwYXJzZSwgJHdpbmRvdywgJGRvY3VtZW50LCAkcm9vdFNjb3BlLCAkcG9zaXRpb24sIGRhdGVGaWx0ZXIsIGRhdGVQYXJzZXIsIGRhdGVwaWNrZXJQb3B1cENvbmZpZywgJHRpbWVvdXQsIGRhdGVwaWNrZXJDb25maWcsICRkYXRlcGlja2VyUG9wdXBMaXRlcmFsV2FybmluZykge1xuICB2YXIgY2FjaGUgPSB7fSxcbiAgICBpc0h0bWw1RGF0ZUlucHV0ID0gZmFsc2U7XG4gIHZhciBkYXRlRm9ybWF0LCBjbG9zZU9uRGF0ZVNlbGVjdGlvbiwgYXBwZW5kVG9Cb2R5LCBvbk9wZW5Gb2N1cyxcbiAgICBkYXRlcGlja2VyUG9wdXBUZW1wbGF0ZVVybCwgZGF0ZXBpY2tlclRlbXBsYXRlVXJsLCBwb3B1cEVsLCBkYXRlcGlja2VyRWwsIHNjcm9sbFBhcmVudEVsLFxuICAgIG5nTW9kZWwsIG5nTW9kZWxPcHRpb25zLCAkcG9wdXAsIGFsdElucHV0Rm9ybWF0cywgd2F0Y2hMaXN0ZW5lcnMgPSBbXTtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbihfbmdNb2RlbF8pIHtcbiAgICBuZ01vZGVsID0gX25nTW9kZWxfO1xuICAgIG5nTW9kZWxPcHRpb25zID0gZXh0cmFjdE9wdGlvbnMobmdNb2RlbCk7XG4gICAgY2xvc2VPbkRhdGVTZWxlY3Rpb24gPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuY2xvc2VPbkRhdGVTZWxlY3Rpb24pID9cbiAgICAgICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5jbG9zZU9uRGF0ZVNlbGVjdGlvbikgOlxuICAgICAgZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmNsb3NlT25EYXRlU2VsZWN0aW9uO1xuICAgIGFwcGVuZFRvQm9keSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5kYXRlcGlja2VyQXBwZW5kVG9Cb2R5KSA/XG4gICAgICAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuZGF0ZXBpY2tlckFwcGVuZFRvQm9keSkgOlxuICAgICAgZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmFwcGVuZFRvQm9keTtcbiAgICBvbk9wZW5Gb2N1cyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5vbk9wZW5Gb2N1cykgP1xuICAgICAgJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLm9uT3BlbkZvY3VzKSA6IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5vbk9wZW5Gb2N1cztcbiAgICBkYXRlcGlja2VyUG9wdXBUZW1wbGF0ZVVybCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5kYXRlcGlja2VyUG9wdXBUZW1wbGF0ZVVybCkgP1xuICAgICAgJGF0dHJzLmRhdGVwaWNrZXJQb3B1cFRlbXBsYXRlVXJsIDpcbiAgICAgIGRhdGVwaWNrZXJQb3B1cENvbmZpZy5kYXRlcGlja2VyUG9wdXBUZW1wbGF0ZVVybDtcbiAgICBkYXRlcGlja2VyVGVtcGxhdGVVcmwgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuZGF0ZXBpY2tlclRlbXBsYXRlVXJsKSA/XG4gICAgICAkYXR0cnMuZGF0ZXBpY2tlclRlbXBsYXRlVXJsIDogZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmRhdGVwaWNrZXJUZW1wbGF0ZVVybDtcbiAgICBhbHRJbnB1dEZvcm1hdHMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuYWx0SW5wdXRGb3JtYXRzKSA/XG4gICAgICAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuYWx0SW5wdXRGb3JtYXRzKSA6XG4gICAgICBkYXRlcGlja2VyUG9wdXBDb25maWcuYWx0SW5wdXRGb3JtYXRzO1xuXG4gICAgJHNjb3BlLnNob3dCdXR0b25CYXIgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuc2hvd0J1dHRvbkJhcikgP1xuICAgICAgJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLnNob3dCdXR0b25CYXIpIDpcbiAgICAgIGRhdGVwaWNrZXJQb3B1cENvbmZpZy5zaG93QnV0dG9uQmFyO1xuXG4gICAgaWYgKGRhdGVwaWNrZXJQb3B1cENvbmZpZy5odG1sNVR5cGVzWyRhdHRycy50eXBlXSkge1xuICAgICAgZGF0ZUZvcm1hdCA9IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5odG1sNVR5cGVzWyRhdHRycy50eXBlXTtcbiAgICAgIGlzSHRtbDVEYXRlSW5wdXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlRm9ybWF0ID0gJGF0dHJzLnVpYkRhdGVwaWNrZXJQb3B1cCB8fCBkYXRlcGlja2VyUG9wdXBDb25maWcuZGF0ZXBpY2tlclBvcHVwO1xuICAgICAgJGF0dHJzLiRvYnNlcnZlKCd1aWJEYXRlcGlja2VyUG9wdXAnLCBmdW5jdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld0RhdGVGb3JtYXQgPSB2YWx1ZSB8fCBkYXRlcGlja2VyUG9wdXBDb25maWcuZGF0ZXBpY2tlclBvcHVwO1xuICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSAkbW9kZWxWYWx1ZSB0byBlbnN1cmUgdGhhdCBmb3JtYXR0ZXJzIHJlLXJ1blxuICAgICAgICAvLyBGSVhNRTogUmVmYWN0b3Igd2hlbiBQUiBpcyBtZXJnZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8xMDc2NFxuICAgICAgICBpZiAobmV3RGF0ZUZvcm1hdCAhPT0gZGF0ZUZvcm1hdCkge1xuICAgICAgICAgIGRhdGVGb3JtYXQgPSBuZXdEYXRlRm9ybWF0O1xuICAgICAgICAgIG5nTW9kZWwuJG1vZGVsVmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgaWYgKCFkYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VpYkRhdGVwaWNrZXJQb3B1cCBtdXN0IGhhdmUgYSBkYXRlIGZvcm1hdCBzcGVjaWZpZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGVGb3JtYXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndWliRGF0ZXBpY2tlclBvcHVwIG11c3QgaGF2ZSBhIGRhdGUgZm9ybWF0IHNwZWNpZmllZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNIdG1sNURhdGVJbnB1dCAmJiAkYXR0cnMudWliRGF0ZXBpY2tlclBvcHVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUTUw1IGRhdGUgaW5wdXQgdHlwZXMgZG8gbm90IHN1cHBvcnQgY3VzdG9tIGZvcm1hdHMuJyk7XG4gICAgfVxuXG4gICAgLy8gcG9wdXAgZWxlbWVudCB1c2VkIHRvIGRpc3BsYXkgY2FsZW5kYXJcbiAgICBwb3B1cEVsID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IHVpYi1kYXRlcGlja2VyLXBvcHVwLXdyYXA+PGRpdiB1aWItZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj4nKTtcblxuICAgIHBvcHVwRWwuYXR0cih7XG4gICAgICAnbmctbW9kZWwnOiAnZGF0ZScsXG4gICAgICAnbmctY2hhbmdlJzogJ2RhdGVTZWxlY3Rpb24oZGF0ZSknLFxuICAgICAgJ3RlbXBsYXRlLXVybCc6IGRhdGVwaWNrZXJQb3B1cFRlbXBsYXRlVXJsXG4gICAgfSk7XG5cbiAgICAvLyBkYXRlcGlja2VyIGVsZW1lbnRcbiAgICBkYXRlcGlja2VyRWwgPSBhbmd1bGFyLmVsZW1lbnQocG9wdXBFbC5jaGlsZHJlbigpWzBdKTtcbiAgICBkYXRlcGlja2VyRWwuYXR0cigndGVtcGxhdGUtdXJsJywgZGF0ZXBpY2tlclRlbXBsYXRlVXJsKTtcblxuICAgIGlmICghJHNjb3BlLmRhdGVwaWNrZXJPcHRpb25zKSB7XG4gICAgICAkc2NvcGUuZGF0ZXBpY2tlck9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNIdG1sNURhdGVJbnB1dCkge1xuICAgICAgaWYgKCRhdHRycy50eXBlID09PSAnbW9udGgnKSB7XG4gICAgICAgICRzY29wZS5kYXRlcGlja2VyT3B0aW9ucy5kYXRlcGlja2VyTW9kZSA9ICdtb250aCc7XG4gICAgICAgICRzY29wZS5kYXRlcGlja2VyT3B0aW9ucy5taW5Nb2RlID0gJ21vbnRoJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRlcGlja2VyRWwuYXR0cignZGF0ZXBpY2tlci1vcHRpb25zJywgJ2RhdGVwaWNrZXJPcHRpb25zJyk7XG5cbiAgICBpZiAoIWlzSHRtbDVEYXRlSW5wdXQpIHtcbiAgICAgIC8vIEludGVybmFsIEFQSSB0byBtYWludGFpbiB0aGUgY29ycmVjdCBuZy1pbnZhbGlkLVtrZXldIGNsYXNzXG4gICAgICBuZ01vZGVsLiQkcGFyc2VyTmFtZSA9ICdkYXRlJztcbiAgICAgIG5nTW9kZWwuJHZhbGlkYXRvcnMuZGF0ZSA9IHZhbGlkYXRvcjtcbiAgICAgIG5nTW9kZWwuJHBhcnNlcnMudW5zaGlmdChwYXJzZURhdGUpO1xuICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChuZ01vZGVsLiRpc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICRzY29wZS5kYXRlID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUuZGF0ZSA9IGRhdGVQYXJzZXIuZnJvbVRpbWV6b25lKHZhbHVlLCBuZ01vZGVsT3B0aW9ucy5nZXRPcHRpb24oJ3RpbWV6b25lJykpO1xuXG4gICAgICAgIHJldHVybiBkYXRlUGFyc2VyLmZpbHRlcigkc2NvcGUuZGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICRzY29wZS5kYXRlID0gZGF0ZVBhcnNlci5mcm9tVGltZXpvbmUodmFsdWUsIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERldGVjdCBjaGFuZ2VzIGluIHRoZSB2aWV3IGZyb20gdGhlIHRleHQgYm94XG4gICAgbmdNb2RlbC4kdmlld0NoYW5nZUxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmRhdGUgPSBwYXJzZURhdGVTdHJpbmcobmdNb2RlbC4kdmlld1ZhbHVlKTtcbiAgICB9KTtcblxuICAgICRlbGVtZW50Lm9uKCdrZXlkb3duJywgaW5wdXRLZXlkb3duQmluZCk7XG5cbiAgICAkcG9wdXAgPSAkY29tcGlsZShwb3B1cEVsKSgkc2NvcGUpO1xuICAgIC8vIFByZXZlbnQgalF1ZXJ5IGNhY2hlIG1lbW9yeSBsZWFrICh0ZW1wbGF0ZSBpcyBub3cgcmVkdW5kYW50IGFmdGVyIGxpbmtpbmcpXG4gICAgcG9wdXBFbC5yZW1vdmUoKTtcblxuICAgIGlmIChhcHBlbmRUb0JvZHkpIHtcbiAgICAgICRkb2N1bWVudC5maW5kKCdib2R5JykuYXBwZW5kKCRwb3B1cCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50LmFmdGVyKCRwb3B1cCk7XG4gICAgfVxuXG4gICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkc2NvcGUuaXNPcGVuID09PSB0cnVlKSB7XG4gICAgICAgIGlmICghJHJvb3RTY29wZS4kJHBoYXNlKSB7XG4gICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkcG9wdXAucmVtb3ZlKCk7XG4gICAgICAkZWxlbWVudC5vZmYoJ2tleWRvd24nLCBpbnB1dEtleWRvd25CaW5kKTtcbiAgICAgICRkb2N1bWVudC5vZmYoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0JpbmQpO1xuICAgICAgaWYgKHNjcm9sbFBhcmVudEVsKSB7XG4gICAgICAgIHNjcm9sbFBhcmVudEVsLm9mZignc2Nyb2xsJywgcG9zaXRpb25Qb3B1cCk7XG4gICAgICB9XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykub2ZmKCdyZXNpemUnLCBwb3NpdGlvblBvcHVwKTtcblxuICAgICAgLy9DbGVhciBhbGwgd2F0Y2ggbGlzdGVuZXJzIG9uIGRlc3Ryb3lcbiAgICAgIHdoaWxlICh3YXRjaExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgd2F0Y2hMaXN0ZW5lcnMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5nZXRUZXh0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuICRzY29wZVtrZXkgKyAnVGV4dCddIHx8IGRhdGVwaWNrZXJQb3B1cENvbmZpZ1trZXkgKyAnVGV4dCddO1xuICB9O1xuXG4gICRzY29wZS5pc0Rpc2FibGVkID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIGlmIChkYXRlID09PSAndG9kYXknKSB7XG4gICAgICBkYXRlID0gZGF0ZVBhcnNlci5mcm9tVGltZXpvbmUobmV3IERhdGUoKSwgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCd0aW1lem9uZScpKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0ZXMgPSB7fTtcbiAgICBhbmd1bGFyLmZvckVhY2goWydtaW5EYXRlJywgJ21heERhdGUnXSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoISRzY29wZS5kYXRlcGlja2VyT3B0aW9uc1trZXldKSB7XG4gICAgICAgIGRhdGVzW2tleV0gPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChhbmd1bGFyLmlzRGF0ZSgkc2NvcGUuZGF0ZXBpY2tlck9wdGlvbnNba2V5XSkpIHtcbiAgICAgICAgZGF0ZXNba2V5XSA9IG5ldyBEYXRlKCRzY29wZS5kYXRlcGlja2VyT3B0aW9uc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkZGF0ZXBpY2tlclBvcHVwTGl0ZXJhbFdhcm5pbmcpIHtcbiAgICAgICAgICAkbG9nLndhcm4oJ0xpdGVyYWwgZGF0ZSBzdXBwb3J0IGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHBsZWFzZSBzd2l0Y2ggdG8gZGF0ZSBvYmplY3QgdXNhZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGVzW2tleV0gPSBuZXcgRGF0ZShkYXRlRmlsdGVyKCRzY29wZS5kYXRlcGlja2VyT3B0aW9uc1trZXldLCAnbWVkaXVtJykpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICRzY29wZS5kYXRlcGlja2VyT3B0aW9ucyAmJlxuICAgICAgZGF0ZXMubWluRGF0ZSAmJiAkc2NvcGUuY29tcGFyZShkYXRlLCBkYXRlcy5taW5EYXRlKSA8IDAgfHxcbiAgICAgIGRhdGVzLm1heERhdGUgJiYgJHNjb3BlLmNvbXBhcmUoZGF0ZSwgZGF0ZXMubWF4RGF0ZSkgPiAwO1xuICB9O1xuXG4gICRzY29wZS5jb21wYXJlID0gZnVuY3Rpb24oZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCksIGRhdGUxLmdldERhdGUoKSkgLSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpLCBkYXRlMi5nZXREYXRlKCkpO1xuICB9O1xuXG4gIC8vIElubmVyIGNoYW5nZVxuICAkc2NvcGUuZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKGR0KSB7XG4gICAgJHNjb3BlLmRhdGUgPSBkdDtcbiAgICB2YXIgZGF0ZSA9ICRzY29wZS5kYXRlID8gZGF0ZVBhcnNlci5maWx0ZXIoJHNjb3BlLmRhdGUsIGRhdGVGb3JtYXQpIDogbnVsbDsgLy8gU2V0dGluZyB0byBOVUxMIGlzIG5lY2Vzc2FyeSBmb3IgZm9ybSB2YWxpZGF0b3JzIHRvIGZ1bmN0aW9uXG4gICAgJGVsZW1lbnQudmFsKGRhdGUpO1xuICAgIG5nTW9kZWwuJHNldFZpZXdWYWx1ZShkYXRlKTtcblxuICAgIGlmIChjbG9zZU9uRGF0ZVNlbGVjdGlvbikge1xuICAgICAgJHNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgJGVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmtleWRvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LndoaWNoID09PSAyNykge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgJGVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKGRhdGUsIGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChkYXRlID09PSAndG9kYXknKSB7XG4gICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKGFuZ3VsYXIuaXNEYXRlKCRzY29wZS5kYXRlKSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoJHNjb3BlLmRhdGUpO1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlID0gZGF0ZVBhcnNlci5mcm9tVGltZXpvbmUodG9kYXksIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbigndGltZXpvbmUnKSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5kYXRlU2VsZWN0aW9uKGRhdGUpO1xuICB9O1xuXG4gICRzY29wZS5jbG9zZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICRzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAkZWxlbWVudFswXS5mb2N1cygpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhYmxlZCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5kaXNhYmxlZCkgfHwgZmFsc2U7XG4gIGlmICgkYXR0cnMubmdEaXNhYmxlZCkge1xuICAgIHdhdGNoTGlzdGVuZXJzLnB1c2goJHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZSgkYXR0cnMubmdEaXNhYmxlZCksIGZ1bmN0aW9uKGRpc2FibGVkKSB7XG4gICAgICAkc2NvcGUuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9KSk7XG4gIH1cblxuICAkc2NvcGUuJHdhdGNoKCdpc09wZW4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCEkc2NvcGUuZGlzYWJsZWQpIHtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcG9zaXRpb25Qb3B1cCgpO1xuXG4gICAgICAgICAgaWYgKG9uT3BlbkZvY3VzKSB7XG4gICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgndWliOmRhdGVwaWNrZXIuZm9jdXMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkZG9jdW1lbnQub24oJ2NsaWNrJywgZG9jdW1lbnRDbGlja0JpbmQpO1xuXG4gICAgICAgICAgdmFyIHBsYWNlbWVudCA9ICRhdHRycy5wb3B1cFBsYWNlbWVudCA/ICRhdHRycy5wb3B1cFBsYWNlbWVudCA6IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5wbGFjZW1lbnQ7XG4gICAgICAgICAgaWYgKGFwcGVuZFRvQm9keSB8fCAkcG9zaXRpb24ucGFyc2VQbGFjZW1lbnQocGxhY2VtZW50KVsyXSkge1xuICAgICAgICAgICAgc2Nyb2xsUGFyZW50RWwgPSBzY3JvbGxQYXJlbnRFbCB8fCBhbmd1bGFyLmVsZW1lbnQoJHBvc2l0aW9uLnNjcm9sbFBhcmVudCgkZWxlbWVudCkpO1xuICAgICAgICAgICAgaWYgKHNjcm9sbFBhcmVudEVsKSB7XG4gICAgICAgICAgICAgIHNjcm9sbFBhcmVudEVsLm9uKCdzY3JvbGwnLCBwb3NpdGlvblBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsUGFyZW50RWwgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS5vbigncmVzaXplJywgcG9zaXRpb25Qb3B1cCk7XG4gICAgICAgIH0sIDAsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJGRvY3VtZW50Lm9mZignY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50RWwpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50RWwub2ZmKCdzY3JvbGwnLCBwb3NpdGlvblBvcHVwKTtcbiAgICAgIH1cbiAgICAgIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS5vZmYoJ3Jlc2l6ZScsIHBvc2l0aW9uUG9wdXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2FtZWx0b0Rhc2goc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7IHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRGF0ZVN0cmluZyh2aWV3VmFsdWUpIHtcbiAgICB2YXIgZGF0ZSA9IGRhdGVQYXJzZXIucGFyc2Uodmlld1ZhbHVlLCBkYXRlRm9ybWF0LCAkc2NvcGUuZGF0ZSk7XG4gICAgaWYgKGlzTmFOKGRhdGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsdElucHV0Rm9ybWF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRlID0gZGF0ZVBhcnNlci5wYXJzZSh2aWV3VmFsdWUsIGFsdElucHV0Rm9ybWF0c1tpXSwgJHNjb3BlLmRhdGUpO1xuICAgICAgICBpZiAoIWlzTmFOKGRhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZURhdGUodmlld1ZhbHVlKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNOdW1iZXIodmlld1ZhbHVlKSkge1xuICAgICAgLy8gcHJlc3VtYWJseSB0aW1lc3RhbXAgdG8gZGF0ZSBvYmplY3RcbiAgICAgIHZpZXdWYWx1ZSA9IG5ldyBEYXRlKHZpZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF2aWV3VmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChhbmd1bGFyLmlzRGF0ZSh2aWV3VmFsdWUpICYmICFpc05hTih2aWV3VmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmlld1ZhbHVlO1xuICAgIH1cblxuICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKHZpZXdWYWx1ZSkpIHtcbiAgICAgIHZhciBkYXRlID0gcGFyc2VEYXRlU3RyaW5nKHZpZXdWYWx1ZSk7XG4gICAgICBpZiAoIWlzTmFOKGRhdGUpKSB7XG4gICAgICAgIHJldHVybiBkYXRlUGFyc2VyLnRvVGltZXpvbmUoZGF0ZSwgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCd0aW1lem9uZScpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCdhbGxvd0ludmFsaWQnKSA/IHZpZXdWYWx1ZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRvcihtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBtb2RlbFZhbHVlIHx8IHZpZXdWYWx1ZTtcblxuICAgIGlmICghJGF0dHJzLm5nUmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYW5ndWxhci5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhbmd1bGFyLmlzRGF0ZSh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRGF0ZVN0cmluZyh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2tCaW5kKGV2ZW50KSB7XG4gICAgaWYgKCEkc2NvcGUuaXNPcGVuICYmICRzY29wZS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3B1cCA9ICRwb3B1cFswXTtcbiAgICB2YXIgZHBDb250YWluc1RhcmdldCA9ICRlbGVtZW50WzBdLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgLy8gVGhlIHBvcHVwIG5vZGUgbWF5IG5vdCBiZSBhbiBlbGVtZW50IG5vZGVcbiAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChJRSkgb25seSBlbGVtZW50IG5vZGVzIGhhdmUgdGhlICdjb250YWlucycgZnVuY3Rpb25cbiAgICB2YXIgcG9wdXBDb250YWluc1RhcmdldCA9IHBvcHVwLmNvbnRhaW5zICE9PSB1bmRlZmluZWQgJiYgcG9wdXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoJHNjb3BlLmlzT3BlbiAmJiAhKGRwQ29udGFpbnNUYXJnZXQgfHwgcG9wdXBDb250YWluc1RhcmdldCkpIHtcbiAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlucHV0S2V5ZG93bkJpbmQoZXZ0KSB7XG4gICAgaWYgKGV2dC53aGljaCA9PT0gMjcgJiYgJHNjb3BlLmlzT3Blbikge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgICRlbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChldnQud2hpY2ggPT09IDQwICYmICEkc2NvcGUuaXNPcGVuKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5pc09wZW4gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcG9zaXRpb25Qb3B1cCgpIHtcbiAgICBpZiAoJHNjb3BlLmlzT3Blbikge1xuICAgICAgdmFyIGRwRWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudCgkcG9wdXBbMF0ucXVlcnlTZWxlY3RvcignLnVpYi1kYXRlcGlja2VyLXBvcHVwJykpO1xuICAgICAgdmFyIHBsYWNlbWVudCA9ICRhdHRycy5wb3B1cFBsYWNlbWVudCA/ICRhdHRycy5wb3B1cFBsYWNlbWVudCA6IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5wbGFjZW1lbnQ7XG4gICAgICB2YXIgcG9zaXRpb24gPSAkcG9zaXRpb24ucG9zaXRpb25FbGVtZW50cygkZWxlbWVudCwgZHBFbGVtZW50LCBwbGFjZW1lbnQsIGFwcGVuZFRvQm9keSk7XG4gICAgICBkcEVsZW1lbnQuY3NzKHt0b3A6IHBvc2l0aW9uLnRvcCArICdweCcsIGxlZnQ6IHBvc2l0aW9uLmxlZnQgKyAncHgnfSk7XG4gICAgICBpZiAoZHBFbGVtZW50Lmhhc0NsYXNzKCd1aWItcG9zaXRpb24tbWVhc3VyZScpKSB7XG4gICAgICAgIGRwRWxlbWVudC5yZW1vdmVDbGFzcygndWliLXBvc2l0aW9uLW1lYXN1cmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBleHRyYWN0T3B0aW9ucyhuZ01vZGVsQ3RybCkge1xuICAgIHZhciBuZ01vZGVsT3B0aW9ucztcblxuICAgIGlmIChhbmd1bGFyLnZlcnNpb24ubWlub3IgPCA2KSB7IC8vIGluIGFuZ3VsYXIgPCAxLjYgJG9wdGlvbnMgY291bGQgYmUgbWlzc2luZ1xuICAgICAgLy8gZ3VhcmFudGVlIGEgdmFsdWVcbiAgICAgIG5nTW9kZWxPcHRpb25zID0gYW5ndWxhci5pc09iamVjdChuZ01vZGVsQ3RybC4kb3B0aW9ucykgP1xuICAgICAgICBuZ01vZGVsQ3RybC4kb3B0aW9ucyA6XG4gICAgICAgIHtcbiAgICAgICAgICB0aW1lem9uZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAvLyBtaW1pYyAxLjYrIGFwaVxuICAgICAgbmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbmdNb2RlbE9wdGlvbnNba2V5XTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHsgLy8gaW4gYW5ndWxhciA+PTEuNiAkb3B0aW9ucyBpcyBhbHdheXMgcHJlc2VudFxuICAgICAgbmdNb2RlbE9wdGlvbnMgPSBuZ01vZGVsQ3RybC4kb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gbmdNb2RlbE9wdGlvbnM7XG4gIH1cblxuICAkc2NvcGUuJG9uKCd1aWI6ZGF0ZXBpY2tlci5tb2RlJywgZnVuY3Rpb24oKSB7XG4gICAgJHRpbWVvdXQocG9zaXRpb25Qb3B1cCwgMCwgZmFsc2UpO1xuICB9KTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJEYXRlcGlja2VyUG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ25nTW9kZWwnLCAndWliRGF0ZXBpY2tlclBvcHVwJ10sXG4gICAgY29udHJvbGxlcjogJ1VpYkRhdGVwaWNrZXJQb3B1cENvbnRyb2xsZXInLFxuICAgIHNjb3BlOiB7XG4gICAgICBkYXRlcGlja2VyT3B0aW9uczogJz0/JyxcbiAgICAgIGlzT3BlbjogJz0/JyxcbiAgICAgIGN1cnJlbnRUZXh0OiAnQCcsXG4gICAgICBjbGVhclRleHQ6ICdAJyxcbiAgICAgIGNsb3NlVGV4dDogJ0AnXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgbmdNb2RlbCA9IGN0cmxzWzBdLFxuICAgICAgICBjdHJsID0gY3RybHNbMV07XG5cbiAgICAgIGN0cmwuaW5pdChuZ01vZGVsKTtcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd1aWJEYXRlcGlja2VyUG9wdXBXcmFwJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbihlbGVtZW50LCBhdHRycykge1xuICAgICAgcmV0dXJuIGF0dHJzLnRlbXBsYXRlVXJsIHx8ICd1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlclBvcHVwL3BvcHVwLmh0bWwnO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmRlYm91bmNlJywgW10pXG4vKipcbiAqIEEgaGVscGVyLCBpbnRlcm5hbCBzZXJ2aWNlIHRoYXQgZGVib3VuY2VzIGEgZnVuY3Rpb25cbiAqL1xuICAuZmFjdG9yeSgnJCRkZWJvdW5jZScsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xuICAgIHJldHVybiBmdW5jdGlvbihjYWxsYmFjaywgZGVib3VuY2VUaW1lKSB7XG4gICAgICB2YXIgdGltZW91dFByb21pc2U7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0aW1lb3V0UHJvbWlzZSkge1xuICAgICAgICAgICR0aW1lb3V0LmNhbmNlbCh0aW1lb3V0UHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lb3V0UHJvbWlzZSA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9LCBkZWJvdW5jZVRpbWUpO1xuICAgICAgfTtcbiAgICB9O1xuICB9XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAubXVsdGlNYXAnLCBbXSlcbi8qKlxuICogQSBoZWxwZXIsIGludGVybmFsIGRhdGEgc3RydWN0dXJlIHRoYXQgc3RvcmVzIGFsbCByZWZlcmVuY2VzIGF0dGFjaGVkIHRvIGtleVxuICovXG4gIC5mYWN0b3J5KCckJG11bHRpTWFwJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZU5ldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtYXAgPSB7fTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVudHJpZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBtYXBba2V5XVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hcFtrZXldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFzS2V5OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAhIW1hcFtrZXldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1dDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFtYXBba2V5XSkge1xuICAgICAgICAgICAgICBtYXBba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXBba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IG1hcFtrZXldO1xuXG4gICAgICAgICAgICBpZiAoIXZhbHVlcykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpZHggPSB2YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBtYXBba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuZHJvcGRvd24nLCBbJ3VpLmJvb3RzdHJhcC5tdWx0aU1hcCcsICd1aS5ib290c3RyYXAucG9zaXRpb24nXSlcblxuLmNvbnN0YW50KCd1aWJEcm9wZG93bkNvbmZpZycsIHtcbiAgYXBwZW5kVG9PcGVuQ2xhc3M6ICd1aWItZHJvcGRvd24tb3BlbicsXG4gIG9wZW5DbGFzczogJ29wZW4nXG59KVxuXG4uc2VydmljZSgndWliRHJvcGRvd25TZXJ2aWNlJywgWyckZG9jdW1lbnQnLCAnJHJvb3RTY29wZScsICckJG11bHRpTWFwJywgZnVuY3Rpb24oJGRvY3VtZW50LCAkcm9vdFNjb3BlLCAkJG11bHRpTWFwKSB7XG4gIHZhciBvcGVuU2NvcGUgPSBudWxsO1xuICB2YXIgb3BlbmVkQ29udGFpbmVycyA9ICQkbXVsdGlNYXAuY3JlYXRlTmV3KCk7XG5cbiAgdGhpcy5pc09ubHlPcGVuID0gZnVuY3Rpb24oZHJvcGRvd25TY29wZSwgYXBwZW5kVG8pIHtcbiAgICB2YXIgb3BlbmVkRHJvcGRvd25zID0gb3BlbmVkQ29udGFpbmVycy5nZXQoYXBwZW5kVG8pO1xuICAgIGlmIChvcGVuZWREcm9wZG93bnMpIHtcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBvcGVuZWREcm9wZG93bnMucmVkdWNlKGZ1bmN0aW9uKHRvQ2xvc2UsIGRyb3Bkb3duKSB7XG4gICAgICAgIGlmIChkcm9wZG93bi5zY29wZSA9PT0gZHJvcGRvd25TY29wZSkge1xuICAgICAgICAgIHJldHVybiBkcm9wZG93bjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b0Nsb3NlO1xuICAgICAgfSwge30pO1xuICAgICAgaWYgKG9wZW5Ecm9wZG93bikge1xuICAgICAgICByZXR1cm4gb3BlbmVkRHJvcGRvd25zLmxlbmd0aCA9PT0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5vcGVuID0gZnVuY3Rpb24oZHJvcGRvd25TY29wZSwgZWxlbWVudCwgYXBwZW5kVG8pIHtcbiAgICBpZiAoIW9wZW5TY29wZSkge1xuICAgICAgJGRvY3VtZW50Lm9uKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgIH1cblxuICAgIGlmIChvcGVuU2NvcGUgJiYgb3BlblNjb3BlICE9PSBkcm9wZG93blNjb3BlKSB7XG4gICAgICBvcGVuU2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlblNjb3BlID0gZHJvcGRvd25TY29wZTtcblxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3BlbmVkRHJvcGRvd25zID0gb3BlbmVkQ29udGFpbmVycy5nZXQoYXBwZW5kVG8pO1xuICAgIGlmIChvcGVuZWREcm9wZG93bnMpIHtcbiAgICAgIHZhciBvcGVuZWRTY29wZXMgPSBvcGVuZWREcm9wZG93bnMubWFwKGZ1bmN0aW9uKGRyb3Bkb3duKSB7XG4gICAgICAgIHJldHVybiBkcm9wZG93bi5zY29wZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG9wZW5lZFNjb3Blcy5pbmRleE9mKGRyb3Bkb3duU2NvcGUpID09PSAtMSkge1xuICAgICAgICBvcGVuZWRDb250YWluZXJzLnB1dChhcHBlbmRUbywge1xuICAgICAgICAgIHNjb3BlOiBkcm9wZG93blNjb3BlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuZWRDb250YWluZXJzLnB1dChhcHBlbmRUbywge1xuICAgICAgICBzY29wZTogZHJvcGRvd25TY29wZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY2xvc2UgPSBmdW5jdGlvbihkcm9wZG93blNjb3BlLCBlbGVtZW50LCBhcHBlbmRUbykge1xuICAgIGlmIChvcGVuU2NvcGUgPT09IGRyb3Bkb3duU2NvcGUpIHtcbiAgICAgICRkb2N1bWVudC5vZmYoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAkZG9jdW1lbnQub2ZmKCdrZXlkb3duJywgdGhpcy5rZXliaW5kRmlsdGVyKTtcbiAgICAgIG9wZW5TY29wZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFhcHBlbmRUbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcGVuZWREcm9wZG93bnMgPSBvcGVuZWRDb250YWluZXJzLmdldChhcHBlbmRUbyk7XG4gICAgaWYgKG9wZW5lZERyb3Bkb3ducykge1xuICAgICAgdmFyIGRyb3Bkb3duVG9DbG9zZSA9IG9wZW5lZERyb3Bkb3ducy5yZWR1Y2UoZnVuY3Rpb24odG9DbG9zZSwgZHJvcGRvd24pIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duLnNjb3BlID09PSBkcm9wZG93blNjb3BlKSB7XG4gICAgICAgICAgcmV0dXJuIGRyb3Bkb3duO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvQ2xvc2U7XG4gICAgICB9LCB7fSk7XG4gICAgICBpZiAoZHJvcGRvd25Ub0Nsb3NlKSB7XG4gICAgICAgIG9wZW5lZENvbnRhaW5lcnMucmVtb3ZlKGFwcGVuZFRvLCBkcm9wZG93blRvQ2xvc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2VEcm9wZG93biA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIG1heSBzdGlsbCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBzYW1lIG1vdXNlIGV2ZW50IHRoYXRcbiAgICAvLyB1bmJvdW5kIHRoaXMgZXZlbnQgaGFuZGxlci4gU28gY2hlY2sgb3BlblNjb3BlIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgIGlmICghb3BlblNjb3BlIHx8ICFvcGVuU2NvcGUuaXNPcGVuKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGV2dCAmJiBvcGVuU2NvcGUuZ2V0QXV0b0Nsb3NlKCkgPT09ICdkaXNhYmxlZCcpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZXZ0ICYmIGV2dC53aGljaCA9PT0gMykgeyByZXR1cm47IH1cblxuICAgIHZhciB0b2dnbGVFbGVtZW50ID0gb3BlblNjb3BlLmdldFRvZ2dsZUVsZW1lbnQoKTtcbiAgICBpZiAoZXZ0ICYmIHRvZ2dsZUVsZW1lbnQgJiYgdG9nZ2xlRWxlbWVudFswXS5jb250YWlucyhldnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkcm9wZG93bkVsZW1lbnQgPSBvcGVuU2NvcGUuZ2V0RHJvcGRvd25FbGVtZW50KCk7XG4gICAgaWYgKGV2dCAmJiBvcGVuU2NvcGUuZ2V0QXV0b0Nsb3NlKCkgPT09ICdvdXRzaWRlQ2xpY2snICYmXG4gICAgICBkcm9wZG93bkVsZW1lbnQgJiYgZHJvcGRvd25FbGVtZW50WzBdLmNvbnRhaW5zKGV2dC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3BlblNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCgpO1xuICAgIG9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcblxuICAgIGlmICghJHJvb3RTY29wZS4kJHBoYXNlKSB7XG4gICAgICBvcGVuU2NvcGUuJGFwcGx5KCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMua2V5YmluZEZpbHRlciA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmICghb3BlblNjb3BlKSB7XG4gICAgICAvLyBzZWUgdGhpcy5jbG9zZSBhcyBFU0MgY291bGQgaGF2ZSBiZWVuIHByZXNzZWQgd2hpY2gga2lsbHMgdGhlIHNjb3BlIHNvIHdlIGNhbiBub3QgcHJvY2VlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkcm9wZG93bkVsZW1lbnQgPSBvcGVuU2NvcGUuZ2V0RHJvcGRvd25FbGVtZW50KCk7XG4gICAgdmFyIHRvZ2dsZUVsZW1lbnQgPSBvcGVuU2NvcGUuZ2V0VG9nZ2xlRWxlbWVudCgpO1xuICAgIHZhciBkcm9wZG93bkVsZW1lbnRUYXJnZXRlZCA9IGRyb3Bkb3duRWxlbWVudCAmJiBkcm9wZG93bkVsZW1lbnRbMF0uY29udGFpbnMoZXZ0LnRhcmdldCk7XG4gICAgdmFyIHRvZ2dsZUVsZW1lbnRUYXJnZXRlZCA9IHRvZ2dsZUVsZW1lbnQgJiYgdG9nZ2xlRWxlbWVudFswXS5jb250YWlucyhldnQudGFyZ2V0KTtcbiAgICBpZiAoZXZ0LndoaWNoID09PSAyNykge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb3BlblNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCgpO1xuICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgIH0gZWxzZSBpZiAob3BlblNjb3BlLmlzS2V5bmF2RW5hYmxlZCgpICYmIFszOCwgNDBdLmluZGV4T2YoZXZ0LndoaWNoKSAhPT0gLTEgJiYgb3BlblNjb3BlLmlzT3BlbiAmJiAoZHJvcGRvd25FbGVtZW50VGFyZ2V0ZWQgfHwgdG9nZ2xlRWxlbWVudFRhcmdldGVkKSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvcGVuU2NvcGUuZm9jdXNEcm9wZG93bkVudHJ5KGV2dC53aGljaCk7XG4gICAgfVxuICB9O1xufV0pXG5cbi5jb250cm9sbGVyKCdVaWJEcm9wZG93bkNvbnRyb2xsZXInLCBbJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCAnJHBhcnNlJywgJ3VpYkRyb3Bkb3duQ29uZmlnJywgJ3VpYkRyb3Bkb3duU2VydmljZScsICckYW5pbWF0ZScsICckdWliUG9zaXRpb24nLCAnJGRvY3VtZW50JywgJyRjb21waWxlJywgJyR0ZW1wbGF0ZVJlcXVlc3QnLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRwYXJzZSwgZHJvcGRvd25Db25maWcsIHVpYkRyb3Bkb3duU2VydmljZSwgJGFuaW1hdGUsICRwb3NpdGlvbiwgJGRvY3VtZW50LCAkY29tcGlsZSwgJHRlbXBsYXRlUmVxdWVzdCkge1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgc2NvcGUgPSAkc2NvcGUuJG5ldygpLCAvLyBjcmVhdGUgYSBjaGlsZCBzY29wZSBzbyB3ZSBhcmUgbm90IHBvbGx1dGluZyBvcmlnaW5hbCBvbmVcbiAgICB0ZW1wbGF0ZVNjb3BlLFxuICAgIGFwcGVuZFRvT3BlbkNsYXNzID0gZHJvcGRvd25Db25maWcuYXBwZW5kVG9PcGVuQ2xhc3MsXG4gICAgb3BlbkNsYXNzID0gZHJvcGRvd25Db25maWcub3BlbkNsYXNzLFxuICAgIGdldElzT3BlbixcbiAgICBzZXRJc09wZW4gPSBhbmd1bGFyLm5vb3AsXG4gICAgdG9nZ2xlSW52b2tlciA9ICRhdHRycy5vblRvZ2dsZSA/ICRwYXJzZSgkYXR0cnMub25Ub2dnbGUpIDogYW5ndWxhci5ub29wLFxuICAgIGtleW5hdkVuYWJsZWQgPSBmYWxzZSxcbiAgICBzZWxlY3RlZE9wdGlvbiA9IG51bGwsXG4gICAgYm9keSA9ICRkb2N1bWVudC5maW5kKCdib2R5Jyk7XG5cbiAgJGVsZW1lbnQuYWRkQ2xhc3MoJ2Ryb3Bkb3duJyk7XG5cbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCRhdHRycy5pc09wZW4pIHtcbiAgICAgIGdldElzT3BlbiA9ICRwYXJzZSgkYXR0cnMuaXNPcGVuKTtcbiAgICAgIHNldElzT3BlbiA9IGdldElzT3Blbi5hc3NpZ247XG5cbiAgICAgICRzY29wZS4kd2F0Y2goZ2V0SXNPcGVuLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBzY29wZS5pc09wZW4gPSAhIXZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5bmF2RW5hYmxlZCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5rZXlib2FyZE5hdik7XG4gIH07XG5cbiAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbihvcGVuKSB7XG4gICAgc2NvcGUuaXNPcGVuID0gYXJndW1lbnRzLmxlbmd0aCA/ICEhb3BlbiA6ICFzY29wZS5pc09wZW47XG4gICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihzZXRJc09wZW4pKSB7XG4gICAgICBzZXRJc09wZW4oc2NvcGUsIHNjb3BlLmlzT3Blbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjb3BlLmlzT3BlbjtcbiAgfTtcblxuICAvLyBBbGxvdyBvdGhlciBkaXJlY3RpdmVzIHRvIHdhdGNoIHN0YXR1c1xuICB0aGlzLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzY29wZS5pc09wZW47XG4gIH07XG5cbiAgc2NvcGUuZ2V0VG9nZ2xlRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZWxmLnRvZ2dsZUVsZW1lbnQ7XG4gIH07XG5cbiAgc2NvcGUuZ2V0QXV0b0Nsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRhdHRycy5hdXRvQ2xvc2UgfHwgJ2Fsd2F5cyc7IC8vb3IgJ291dHNpZGVDbGljaycgb3IgJ2Rpc2FibGVkJ1xuICB9O1xuXG4gIHNjb3BlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGVsZW1lbnQ7XG4gIH07XG5cbiAgc2NvcGUuaXNLZXluYXZFbmFibGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGtleW5hdkVuYWJsZWQ7XG4gIH07XG5cbiAgc2NvcGUuZm9jdXNEcm9wZG93bkVudHJ5ID0gZnVuY3Rpb24oa2V5Q29kZSkge1xuICAgIHZhciBlbGVtcyA9IHNlbGYuZHJvcGRvd25NZW51ID8gLy9JZiBhcHBlbmQgdG8gYm9keSBpcyB1c2VkLlxuICAgICAgYW5ndWxhci5lbGVtZW50KHNlbGYuZHJvcGRvd25NZW51KS5maW5kKCdhJykgOlxuICAgICAgJGVsZW1lbnQuZmluZCgndWwnKS5lcSgwKS5maW5kKCdhJyk7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgNDA6IHtcbiAgICAgICAgaWYgKCFhbmd1bGFyLmlzTnVtYmVyKHNlbGYuc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICAgICAgc2VsZi5zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zZWxlY3RlZE9wdGlvbiA9IHNlbGYuc2VsZWN0ZWRPcHRpb24gPT09IGVsZW1zLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZE9wdGlvbiA6XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkT3B0aW9uICsgMTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzg6IHtcbiAgICAgICAgaWYgKCFhbmd1bGFyLmlzTnVtYmVyKHNlbGYuc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICAgICAgc2VsZi5zZWxlY3RlZE9wdGlvbiA9IGVsZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zZWxlY3RlZE9wdGlvbiA9IHNlbGYuc2VsZWN0ZWRPcHRpb24gPT09IDAgP1xuICAgICAgICAgICAgMCA6IHNlbGYuc2VsZWN0ZWRPcHRpb24gLSAxO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBlbGVtc1tzZWxmLnNlbGVjdGVkT3B0aW9uXS5mb2N1cygpO1xuICB9O1xuXG4gIHNjb3BlLmdldERyb3Bkb3duRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZWxmLmRyb3Bkb3duTWVudTtcbiAgfTtcblxuICBzY29wZS5mb2N1c1RvZ2dsZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoc2VsZi50b2dnbGVFbGVtZW50KSB7XG4gICAgICBzZWxmLnRvZ2dsZUVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRHJvcGRvd25NZW51KCkge1xuICAgICRlbGVtZW50LmFwcGVuZChzZWxmLmRyb3Bkb3duTWVudSk7XG4gIH1cblxuICBzY29wZS4kd2F0Y2goJ2lzT3BlbicsIGZ1bmN0aW9uKGlzT3Blbiwgd2FzT3Blbikge1xuICAgIHZhciBhcHBlbmRUbyA9IG51bGwsXG4gICAgICBhcHBlbmRUb0JvZHkgPSBmYWxzZTtcblxuICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuZHJvcGRvd25BcHBlbmRUbykpIHtcbiAgICAgIHZhciBhcHBlbmRUb0VsID0gJHBhcnNlKCRhdHRycy5kcm9wZG93bkFwcGVuZFRvKShzY29wZSk7XG4gICAgICBpZiAoYXBwZW5kVG9FbCkge1xuICAgICAgICBhcHBlbmRUbyA9IGFuZ3VsYXIuZWxlbWVudChhcHBlbmRUb0VsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmRyb3Bkb3duQXBwZW5kVG9Cb2R5KSkge1xuICAgICAgdmFyIGFwcGVuZFRvQm9keVZhbHVlID0gJHBhcnNlKCRhdHRycy5kcm9wZG93bkFwcGVuZFRvQm9keSkoc2NvcGUpO1xuICAgICAgaWYgKGFwcGVuZFRvQm9keVZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICBhcHBlbmRUb0JvZHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcHBlbmRUb0JvZHkgJiYgIWFwcGVuZFRvKSB7XG4gICAgICBhcHBlbmRUbyA9IGJvZHk7XG4gICAgfVxuXG4gICAgaWYgKGFwcGVuZFRvICYmIHNlbGYuZHJvcGRvd25NZW51KSB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGFwcGVuZFRvLmFwcGVuZChzZWxmLmRyb3Bkb3duTWVudSk7XG4gICAgICAgICRlbGVtZW50Lm9uKCckZGVzdHJveScsIHJlbW92ZURyb3Bkb3duTWVudSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC5vZmYoJyRkZXN0cm95JywgcmVtb3ZlRHJvcGRvd25NZW51KTtcbiAgICAgICAgcmVtb3ZlRHJvcGRvd25NZW51KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFwcGVuZFRvICYmIHNlbGYuZHJvcGRvd25NZW51KSB7XG4gICAgICB2YXIgcG9zID0gJHBvc2l0aW9uLnBvc2l0aW9uRWxlbWVudHMoJGVsZW1lbnQsIHNlbGYuZHJvcGRvd25NZW51LCAnYm90dG9tLWxlZnQnLCB0cnVlKSxcbiAgICAgICAgY3NzLFxuICAgICAgICByaWdodGFsaWduLFxuICAgICAgICBzY3JvbGxiYXJQYWRkaW5nLFxuICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgICAgIGNzcyA9IHtcbiAgICAgICAgdG9wOiBwb3MudG9wICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogaXNPcGVuID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgfTtcblxuICAgICAgcmlnaHRhbGlnbiA9IHNlbGYuZHJvcGRvd25NZW51Lmhhc0NsYXNzKCdkcm9wZG93bi1tZW51LXJpZ2h0Jyk7XG4gICAgICBpZiAoIXJpZ2h0YWxpZ24pIHtcbiAgICAgICAgY3NzLmxlZnQgPSBwb3MubGVmdCArICdweCc7XG4gICAgICAgIGNzcy5yaWdodCA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcy5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICBzY3JvbGxiYXJQYWRkaW5nID0gJHBvc2l0aW9uLnNjcm9sbGJhclBhZGRpbmcoYXBwZW5kVG8pO1xuXG4gICAgICAgIGlmIChzY3JvbGxiYXJQYWRkaW5nLmhlaWdodE92ZXJmbG93ICYmIHNjcm9sbGJhclBhZGRpbmcuc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbGJhclBhZGRpbmcuc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBjc3MucmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHNjcm9sbGJhcldpZHRoIC1cbiAgICAgICAgICAocG9zLmxlZnQgKyAkZWxlbWVudC5wcm9wKCdvZmZzZXRXaWR0aCcpKSArICdweCc7XG4gICAgICB9XG5cbiAgICAgIC8vIE5lZWQgdG8gYWRqdXN0IG91ciBwb3NpdGlvbmluZyB0byBiZSByZWxhdGl2ZSB0byB0aGUgYXBwZW5kVG8gY29udGFpbmVyXG4gICAgICAvLyBpZiBpdCdzIG5vdCB0aGUgYm9keSBlbGVtZW50XG4gICAgICBpZiAoIWFwcGVuZFRvQm9keSkge1xuICAgICAgICB2YXIgYXBwZW5kT2Zmc2V0ID0gJHBvc2l0aW9uLm9mZnNldChhcHBlbmRUbyk7XG5cbiAgICAgICAgY3NzLnRvcCA9IHBvcy50b3AgLSBhcHBlbmRPZmZzZXQudG9wICsgJ3B4JztcblxuICAgICAgICBpZiAoIXJpZ2h0YWxpZ24pIHtcbiAgICAgICAgICBjc3MubGVmdCA9IHBvcy5sZWZ0IC0gYXBwZW5kT2Zmc2V0LmxlZnQgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNzcy5yaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC1cbiAgICAgICAgICAgIChwb3MubGVmdCAtIGFwcGVuZE9mZnNldC5sZWZ0ICsgJGVsZW1lbnQucHJvcCgnb2Zmc2V0V2lkdGgnKSkgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYuZHJvcGRvd25NZW51LmNzcyhjc3MpO1xuICAgIH1cblxuICAgIHZhciBvcGVuQ29udGFpbmVyID0gYXBwZW5kVG8gPyBhcHBlbmRUbyA6ICRlbGVtZW50O1xuICAgIHZhciBkcm9wZG93bk9wZW5DbGFzcyA9IGFwcGVuZFRvID8gYXBwZW5kVG9PcGVuQ2xhc3MgOiBvcGVuQ2xhc3M7XG4gICAgdmFyIGhhc09wZW5DbGFzcyA9IG9wZW5Db250YWluZXIuaGFzQ2xhc3MoZHJvcGRvd25PcGVuQ2xhc3MpO1xuICAgIHZhciBpc09ubHlPcGVuID0gdWliRHJvcGRvd25TZXJ2aWNlLmlzT25seU9wZW4oJHNjb3BlLCBhcHBlbmRUbyk7XG5cbiAgICBpZiAoaGFzT3BlbkNsYXNzID09PSAhaXNPcGVuKSB7XG4gICAgICB2YXIgdG9nZ2xlQ2xhc3M7XG4gICAgICBpZiAoYXBwZW5kVG8pIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MgPSAhaXNPbmx5T3BlbiA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MgPSBpc09wZW4gPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgIH1cbiAgICAgICRhbmltYXRlW3RvZ2dsZUNsYXNzXShvcGVuQ29udGFpbmVyLCBkcm9wZG93bk9wZW5DbGFzcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGlzT3BlbikgJiYgaXNPcGVuICE9PSB3YXNPcGVuKSB7XG4gICAgICAgICAgdG9nZ2xlSW52b2tlcigkc2NvcGUsIHsgb3BlbjogISFpc09wZW4gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGlmIChzZWxmLmRyb3Bkb3duTWVudVRlbXBsYXRlVXJsKSB7XG4gICAgICAgICR0ZW1wbGF0ZVJlcXVlc3Qoc2VsZi5kcm9wZG93bk1lbnVUZW1wbGF0ZVVybCkudGhlbihmdW5jdGlvbih0cGxDb250ZW50KSB7XG4gICAgICAgICAgdGVtcGxhdGVTY29wZSA9IHNjb3BlLiRuZXcoKTtcbiAgICAgICAgICAkY29tcGlsZSh0cGxDb250ZW50LnRyaW0oKSkodGVtcGxhdGVTY29wZSwgZnVuY3Rpb24oZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3RWwgPSBkcm9wZG93bkVsZW1lbnQ7XG4gICAgICAgICAgICBzZWxmLmRyb3Bkb3duTWVudS5yZXBsYWNlV2l0aChuZXdFbCk7XG4gICAgICAgICAgICBzZWxmLmRyb3Bkb3duTWVudSA9IG5ld0VsO1xuICAgICAgICAgICAgJGRvY3VtZW50Lm9uKCdrZXlkb3duJywgdWliRHJvcGRvd25TZXJ2aWNlLmtleWJpbmRGaWx0ZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkb2N1bWVudC5vbigna2V5ZG93bicsIHVpYkRyb3Bkb3duU2VydmljZS5rZXliaW5kRmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgc2NvcGUuZm9jdXNUb2dnbGVFbGVtZW50KCk7XG4gICAgICB1aWJEcm9wZG93blNlcnZpY2Uub3BlbihzY29wZSwgJGVsZW1lbnQsIGFwcGVuZFRvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdWliRHJvcGRvd25TZXJ2aWNlLmNsb3NlKHNjb3BlLCAkZWxlbWVudCwgYXBwZW5kVG8pO1xuICAgICAgaWYgKHNlbGYuZHJvcGRvd25NZW51VGVtcGxhdGVVcmwpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlU2NvcGUpIHtcbiAgICAgICAgICB0ZW1wbGF0ZVNjb3BlLiRkZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0VsID0gYW5ndWxhci5lbGVtZW50KCc8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+PC91bD4nKTtcbiAgICAgICAgc2VsZi5kcm9wZG93bk1lbnUucmVwbGFjZVdpdGgobmV3RWwpO1xuICAgICAgICBzZWxmLmRyb3Bkb3duTWVudSA9IG5ld0VsO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnNlbGVjdGVkT3B0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHNldElzT3BlbikpIHtcbiAgICAgIHNldElzT3Blbigkc2NvcGUsIGlzT3Blbik7XG4gICAgfVxuICB9KTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJEcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6ICdVaWJEcm9wZG93bkNvbnRyb2xsZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgZHJvcGRvd25DdHJsKSB7XG4gICAgICBkcm9wZG93bkN0cmwuaW5pdCgpO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3VpYkRyb3Bkb3duTWVudScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJz9edWliRHJvcGRvd24nLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgZHJvcGRvd25DdHJsKSB7XG4gICAgICBpZiAoIWRyb3Bkb3duQ3RybCB8fCBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5kcm9wZG93bk5lc3RlZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFkZENsYXNzKCdkcm9wZG93bi1tZW51Jyk7XG5cbiAgICAgIHZhciB0cGxVcmwgPSBhdHRycy50ZW1wbGF0ZVVybDtcbiAgICAgIGlmICh0cGxVcmwpIHtcbiAgICAgICAgZHJvcGRvd25DdHJsLmRyb3Bkb3duTWVudVRlbXBsYXRlVXJsID0gdHBsVXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRyb3Bkb3duQ3RybC5kcm9wZG93bk1lbnUpIHtcbiAgICAgICAgZHJvcGRvd25DdHJsLmRyb3Bkb3duTWVudSA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliRHJvcGRvd25Ub2dnbGUnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiAnP151aWJEcm9wZG93bicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBkcm9wZG93bkN0cmwpIHtcbiAgICAgIGlmICghZHJvcGRvd25DdHJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRDbGFzcygnZHJvcGRvd24tdG9nZ2xlJyk7XG5cbiAgICAgIGRyb3Bkb3duQ3RybC50b2dnbGVFbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdmFyIHRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgIWF0dHJzLmRpc2FibGVkKSB7XG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJvcGRvd25DdHJsLnRvZ2dsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBlbGVtZW50Lm9uKCdjbGljaycsIHRvZ2dsZURyb3Bkb3duKTtcblxuICAgICAgLy8gV0FJLUFSSUFcbiAgICAgIGVsZW1lbnQuYXR0cih7ICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSwgJ2FyaWEtZXhwYW5kZWQnOiBmYWxzZSB9KTtcbiAgICAgIHNjb3BlLiR3YXRjaChkcm9wZG93bkN0cmwuaXNPcGVuLCBmdW5jdGlvbihpc09wZW4pIHtcbiAgICAgICAgZWxlbWVudC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgISFpc09wZW4pO1xuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC5vZmYoJ2NsaWNrJywgdG9nZ2xlRHJvcGRvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuc3RhY2tlZE1hcCcsIFtdKVxuLyoqXG4gKiBBIGhlbHBlciwgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBhY3RzIGFzIGEgbWFwIGJ1dCBhbHNvIGFsbG93cyBnZXR0aW5nIC8gcmVtb3ZpbmdcbiAqIGVsZW1lbnRzIGluIHRoZSBMSUZPIG9yZGVyXG4gKi9cbiAgLmZhY3RvcnkoJyQkc3RhY2tlZE1hcCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVOZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RhY2sgPSBbXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFkZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc3RhY2tbaV0ua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YWNrW2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChzdGFja1tpXS5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc3RhY2tbaV0ua2V5KSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLnNwbGljZShpZHgsIDEpWzBdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlVG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFjay5wb3AoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAubW9kYWwnLCBbJ3VpLmJvb3RzdHJhcC5tdWx0aU1hcCcsICd1aS5ib290c3RyYXAuc3RhY2tlZE1hcCcsICd1aS5ib290c3RyYXAucG9zaXRpb24nXSlcbi8qKlxuICogUGx1Z2dhYmxlIHJlc29sdmUgbWVjaGFuaXNtIGZvciB0aGUgbW9kYWwgcmVzb2x2ZSByZXNvbHV0aW9uXG4gKiBTdXBwb3J0cyBVSSBSb3V0ZXIncyAkcmVzb2x2ZSBzZXJ2aWNlXG4gKi9cbiAgLnByb3ZpZGVyKCckdWliUmVzb2x2ZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNvbHZlID0gdGhpcztcbiAgICB0aGlzLnJlc29sdmVyID0gbnVsbDtcblxuICAgIHRoaXMuc2V0UmVzb2x2ZXIgPSBmdW5jdGlvbihyZXNvbHZlcikge1xuICAgICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICAgIH07XG5cbiAgICB0aGlzLiRnZXQgPSBbJyRpbmplY3RvcicsICckcScsIGZ1bmN0aW9uKCRpbmplY3RvciwgJHEpIHtcbiAgICAgIHZhciByZXNvbHZlciA9IHJlc29sdmUucmVzb2x2ZXIgPyAkaW5qZWN0b3IuZ2V0KHJlc29sdmUucmVzb2x2ZXIpIDogbnVsbDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc29sdmU6IGZ1bmN0aW9uKGludm9jYWJsZXMsIGxvY2FscywgcGFyZW50LCBzZWxmKSB7XG4gICAgICAgICAgaWYgKHJlc29sdmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShpbnZvY2FibGVzLCBsb2NhbHMsIHBhcmVudCwgc2VsZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goaW52b2NhYmxlcywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24odmFsdWUpIHx8IGFuZ3VsYXIuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgkcS5yZXNvbHZlKCRpbmplY3Rvci5pbnZva2UodmFsdWUpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgIHByb21pc2VzLnB1c2goJHEucmVzb2x2ZSgkaW5qZWN0b3IuZ2V0KHZhbHVlKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgkcS5yZXNvbHZlKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlc29sdmVzKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZU9iaiA9IHt9O1xuICAgICAgICAgICAgdmFyIHJlc29sdmVJdGVyID0gMDtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChpbnZvY2FibGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgIHJlc29sdmVPYmpba2V5XSA9IHJlc29sdmVzW3Jlc29sdmVJdGVyKytdO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlT2JqO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1dO1xuICB9KVxuXG4vKipcbiAqIEEgaGVscGVyIGRpcmVjdGl2ZSBmb3IgdGhlICRtb2RhbCBzZXJ2aWNlLiBJdCBjcmVhdGVzIGEgYmFja2Ryb3AgZWxlbWVudC5cbiAqL1xuICAuZGlyZWN0aXZlKCd1aWJNb2RhbEJhY2tkcm9wJywgWyckYW5pbWF0ZScsICckaW5qZWN0b3InLCAnJHVpYk1vZGFsU3RhY2snLFxuICBmdW5jdGlvbigkYW5pbWF0ZSwgJGluamVjdG9yLCAkbW9kYWxTdGFjaykge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgY29tcGlsZTogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycykge1xuICAgICAgICB0RWxlbWVudC5hZGRDbGFzcyh0QXR0cnMuYmFja2Ryb3BDbGFzcyk7XG4gICAgICAgIHJldHVybiBsaW5rRm47XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5tb2RhbEluQ2xhc3MpIHtcbiAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgYXR0cnMubW9kYWxJbkNsYXNzKTtcblxuICAgICAgICBzY29wZS4kb24oJG1vZGFsU3RhY2suTk9XX0NMT1NJTkdfRVZFTlQsIGZ1bmN0aW9uKGUsIHNldElzQXN5bmMpIHtcbiAgICAgICAgICB2YXIgZG9uZSA9IHNldElzQXN5bmMoKTtcbiAgICAgICAgICBpZiAoc2NvcGUubW9kYWxPcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgJGFuaW1hdGUucmVtb3ZlQ2xhc3MoZWxlbWVudCwgYXR0cnMubW9kYWxJbkNsYXNzKS50aGVuKGRvbmUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKVxuXG4gIC5kaXJlY3RpdmUoJ3VpYk1vZGFsV2luZG93JywgWyckdWliTW9kYWxTdGFjaycsICckcScsICckYW5pbWF0ZUNzcycsICckZG9jdW1lbnQnLFxuICBmdW5jdGlvbigkbW9kYWxTdGFjaywgJHEsICRhbmltYXRlQ3NzLCAkZG9jdW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5kZXg6ICdAJ1xuICAgICAgfSxcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIHRBdHRycy50ZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sJztcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhhdHRycy53aW5kb3dUb3BDbGFzcyB8fCAnJyk7XG4gICAgICAgIHNjb3BlLnNpemUgPSBhdHRycy5zaXplO1xuXG4gICAgICAgIHNjb3BlLmNsb3NlID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgdmFyIG1vZGFsID0gJG1vZGFsU3RhY2suZ2V0VG9wKCk7XG4gICAgICAgICAgaWYgKG1vZGFsICYmIG1vZGFsLnZhbHVlLmJhY2tkcm9wICYmXG4gICAgICAgICAgICBtb2RhbC52YWx1ZS5iYWNrZHJvcCAhPT0gJ3N0YXRpYycgJiZcbiAgICAgICAgICAgIGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRtb2RhbFN0YWNrLmRpc21pc3MobW9kYWwua2V5LCAnYmFja2Ryb3AgY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbW92ZWQgZnJvbSB0ZW1wbGF0ZSB0byBmaXggaXNzdWUgIzIyODBcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBzY29wZS5jbG9zZSk7XG5cbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IGFkZGVkIHRvIHRoZSBzY29wZSBmb3IgdGhlIHB1cnBvc2Ugb2YgZGV0ZWN0aW5nIHdoZW4gdGhpcyBkaXJlY3RpdmUgaXMgcmVuZGVyZWQuXG4gICAgICAgIC8vIFdlIGNhbiBkZXRlY3QgdGhhdCBieSB1c2luZyB0aGlzIHByb3BlcnR5IGluIHRoZSB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBkaXJlY3RpdmUgYW5kIHRoZW4gdXNlXG4gICAgICAgIC8vIHtAbGluayBBdHRyaWJ1dGUjJG9ic2VydmV9IG9uIGl0LiBGb3IgbW9yZSBkZXRhaWxzIHBsZWFzZSBzZWUge0BsaW5rIFRhYmxlQ29sdW1uUmVzaXplfS5cbiAgICAgICAgc2NvcGUuJGlzUmVuZGVyZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIERlZmVycmVkIG9iamVjdCB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiB0aGlzIG1vZGFsIGlzIHJlbmRlcmVkLlxuICAgICAgICB2YXIgbW9kYWxSZW5kZXJEZWZlck9iaiA9ICRxLmRlZmVyKCk7XG4gICAgICAgIC8vIFJlc29sdmUgcmVuZGVyIHByb21pc2UgcG9zdC1kaWdlc3RcbiAgICAgICAgc2NvcGUuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZGFsUmVuZGVyRGVmZXJPYmoucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2RhbFJlbmRlckRlZmVyT2JqLnByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgYW5pbWF0aW9uUHJvbWlzZSA9IG51bGw7XG5cbiAgICAgICAgICBpZiAoYXR0cnMubW9kYWxJbkNsYXNzKSB7XG4gICAgICAgICAgICBhbmltYXRpb25Qcm9taXNlID0gJGFuaW1hdGVDc3MoZWxlbWVudCwge1xuICAgICAgICAgICAgICBhZGRDbGFzczogYXR0cnMubW9kYWxJbkNsYXNzXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICBzY29wZS4kb24oJG1vZGFsU3RhY2suTk9XX0NMT1NJTkdfRVZFTlQsIGZ1bmN0aW9uKGUsIHNldElzQXN5bmMpIHtcbiAgICAgICAgICAgICAgdmFyIGRvbmUgPSBzZXRJc0FzeW5jKCk7XG4gICAgICAgICAgICAgICRhbmltYXRlQ3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogYXR0cnMubW9kYWxJbkNsYXNzXG4gICAgICAgICAgICAgIH0pLnN0YXJ0KCkudGhlbihkb25lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgJHEud2hlbihhbmltYXRpb25Qcm9taXNlKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gTm90aWZ5IHtAbGluayAkbW9kYWxTdGFja30gdGhhdCBtb2RhbCBpcyByZW5kZXJlZC5cbiAgICAgICAgICAgIHZhciBtb2RhbCA9ICRtb2RhbFN0YWNrLmdldFRvcCgpO1xuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICAgICRtb2RhbFN0YWNrLm1vZGFsUmVuZGVyZWQobW9kYWwua2V5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBzb21ldGhpbmcgd2l0aGluIHRoZSBmcmVzaGx5LW9wZW5lZCBtb2RhbCBhbHJlYWR5IGhhcyBmb2N1cyAocGVyaGFwcyB2aWEgYVxuICAgICAgICAgICAgICogZGlyZWN0aXZlIHRoYXQgY2F1c2VzIGZvY3VzKSB0aGVuIHRoZXJlJ3Mgbm8gbmVlZCB0byB0cnkgdG8gZm9jdXMgYW55dGhpbmcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghKCRkb2N1bWVudFswXS5hY3RpdmVFbGVtZW50ICYmIGVsZW1lbnRbMF0uY29udGFpbnMoJGRvY3VtZW50WzBdLmFjdGl2ZUVsZW1lbnQpKSkge1xuICAgICAgICAgICAgICB2YXIgaW5wdXRXaXRoQXV0b2ZvY3VzID0gZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXScpO1xuICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICogQXV0by1mb2N1c2luZyBvZiBhIGZyZXNobHktb3BlbmVkIG1vZGFsIGVsZW1lbnQgY2F1c2VzIGFueSBjaGlsZCBlbGVtZW50c1xuICAgICAgICAgICAgICAgKiB3aXRoIHRoZSBhdXRvZm9jdXMgYXR0cmlidXRlIHRvIGxvc2UgZm9jdXMuIFRoaXMgaXMgYW4gaXNzdWUgb24gdG91Y2hcbiAgICAgICAgICAgICAgICogYmFzZWQgZGV2aWNlcyB3aGljaCB3aWxsIHNob3cgYW5kIHRoZW4gaGlkZSB0aGUgb25zY3JlZW4ga2V5Ym9hcmQuXG4gICAgICAgICAgICAgICAqIEF0dGVtcHRzIHRvIHJlZm9jdXMgdGhlIGF1dG9mb2N1cyBlbGVtZW50IHZpYSBKYXZhU2NyaXB0IHdpbGwgbm90IHJlb3BlblxuICAgICAgICAgICAgICAgKiB0aGUgb25zY3JlZW4ga2V5Ym9hcmQuIEZpeGVkIGJ5IHVwZGF0ZWQgdGhlIGZvY3VzaW5nIGxvZ2ljIHRvIG9ubHkgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAqIHRoZSBtb2RhbCBlbGVtZW50IGlmIHRoZSBtb2RhbCBkb2VzIG5vdCBjb250YWluIGFuIGF1dG9mb2N1cyBlbGVtZW50LlxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgaWYgKGlucHV0V2l0aEF1dG9mb2N1cykge1xuICAgICAgICAgICAgICAgIGlucHV0V2l0aEF1dG9mb2N1cy5mb2N1cygpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSlcblxuICAuZGlyZWN0aXZlKCd1aWJNb2RhbEFuaW1hdGlvbkNsYXNzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcbiAgICAgICAgaWYgKHRBdHRycy5tb2RhbEFuaW1hdGlvbikge1xuICAgICAgICAgIHRFbGVtZW50LmFkZENsYXNzKHRBdHRycy51aWJNb2RhbEFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pXG5cbiAgLmRpcmVjdGl2ZSgndWliTW9kYWxUcmFuc2NsdWRlJywgWyckYW5pbWF0ZScsIGZ1bmN0aW9uKCRhbmltYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlciwgdHJhbnNjbHVkZSkge1xuICAgICAgICB0cmFuc2NsdWRlKHNjb3BlLiRwYXJlbnQsIGZ1bmN0aW9uKGNsb25lKSB7XG4gICAgICAgICAgZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICAgICRhbmltYXRlLmVudGVyKGNsb25lLCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG5cbiAgLmZhY3RvcnkoJyR1aWJNb2RhbFN0YWNrJywgWyckYW5pbWF0ZScsICckYW5pbWF0ZUNzcycsICckZG9jdW1lbnQnLFxuICAgICckY29tcGlsZScsICckcm9vdFNjb3BlJywgJyRxJywgJyQkbXVsdGlNYXAnLCAnJCRzdGFja2VkTWFwJywgJyR1aWJQb3NpdGlvbicsXG4gICAgZnVuY3Rpb24oJGFuaW1hdGUsICRhbmltYXRlQ3NzLCAkZG9jdW1lbnQsICRjb21waWxlLCAkcm9vdFNjb3BlLCAkcSwgJCRtdWx0aU1hcCwgJCRzdGFja2VkTWFwLCAkdWliUG9zaXRpb24pIHtcbiAgICAgIHZhciBPUEVORURfTU9EQUxfQ0xBU1MgPSAnbW9kYWwtb3Blbic7XG5cbiAgICAgIHZhciBiYWNrZHJvcERvbUVsLCBiYWNrZHJvcFNjb3BlO1xuICAgICAgdmFyIG9wZW5lZFdpbmRvd3MgPSAkJHN0YWNrZWRNYXAuY3JlYXRlTmV3KCk7XG4gICAgICB2YXIgb3BlbmVkQ2xhc3NlcyA9ICQkbXVsdGlNYXAuY3JlYXRlTmV3KCk7XG4gICAgICB2YXIgJG1vZGFsU3RhY2sgPSB7XG4gICAgICAgIE5PV19DTE9TSU5HX0VWRU5UOiAnbW9kYWwuc3RhY2subm93LWNsb3NpbmcnXG4gICAgICB9O1xuICAgICAgdmFyIHRvcE1vZGFsSW5kZXggPSAwO1xuICAgICAgdmFyIHByZXZpb3VzVG9wT3BlbmVkTW9kYWwgPSBudWxsO1xuICAgICAgdmFyIEFSSUFfSElEREVOX0FUVFJJQlVURV9OQU1FID0gJ2RhdGEtYm9vdHN0cmFwLW1vZGFsLWFyaWEtaGlkZGVuLWNvdW50JztcblxuICAgICAgLy9Nb2RhbCBmb2N1cyBiZWhhdmlvclxuICAgICAgdmFyIHRhYmJhYmxlU2VsZWN0b3IgPSAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSwgJyArXG4gICAgICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSxzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSwgJyArXG4gICAgICAgICdpZnJhbWUsIG9iamVjdCwgZW1iZWQsICpbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSwgKltjb250ZW50ZWRpdGFibGU9dHJ1ZV0nO1xuICAgICAgdmFyIHNjcm9sbGJhclBhZGRpbmc7XG4gICAgICB2YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcblxuICAgICAgLy8gVE9ETzogZXh0cmFjdCBpbnRvIGNvbW1vbiBkZXBlbmRlbmN5IHdpdGggdG9vbHRpcFxuICAgICAgZnVuY3Rpb24gc25ha2VfY2FzZShuYW1lKSB7XG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSAnLSc7XG4gICAgICAgIHJldHVybiBuYW1lLnJlcGxhY2UoU05BS0VfQ0FTRV9SRUdFWFAsIGZ1bmN0aW9uKGxldHRlciwgcG9zKSB7XG4gICAgICAgICAgcmV0dXJuIChwb3MgPyBzZXBhcmF0b3IgOiAnJykgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhIShlbGVtZW50Lm9mZnNldFdpZHRoIHx8XG4gICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQgfHxcbiAgICAgICAgICBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYmFja2Ryb3BJbmRleCgpIHtcbiAgICAgICAgdmFyIHRvcEJhY2tkcm9wSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIG9wZW5lZCA9IG9wZW5lZFdpbmRvd3Mua2V5cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wZW5lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvcGVuZWRXaW5kb3dzLmdldChvcGVuZWRbaV0pLnZhbHVlLmJhY2tkcm9wKSB7XG4gICAgICAgICAgICB0b3BCYWNrZHJvcEluZGV4ID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbnkgYmFja2Ryb3AgZXhpc3QsIGVuc3VyZSB0aGF0IGl0J3MgaW5kZXggaXMgYWx3YXlzXG4gICAgICAgIC8vIHJpZ2h0IGJlbG93IHRoZSB0b3AgbW9kYWxcbiAgICAgICAgaWYgKHRvcEJhY2tkcm9wSW5kZXggPiAtMSAmJiB0b3BCYWNrZHJvcEluZGV4IDwgdG9wTW9kYWxJbmRleCkge1xuICAgICAgICAgIHRvcEJhY2tkcm9wSW5kZXggPSB0b3BNb2RhbEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3BCYWNrZHJvcEluZGV4O1xuICAgICAgfVxuXG4gICAgICAkcm9vdFNjb3BlLiR3YXRjaChiYWNrZHJvcEluZGV4LCBmdW5jdGlvbihuZXdCYWNrZHJvcEluZGV4KSB7XG4gICAgICAgIGlmIChiYWNrZHJvcFNjb3BlKSB7XG4gICAgICAgICAgYmFja2Ryb3BTY29wZS5pbmRleCA9IG5ld0JhY2tkcm9wSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiByZW1vdmVNb2RhbFdpbmRvdyhtb2RhbEluc3RhbmNlLCBlbGVtZW50VG9SZWNlaXZlRm9jdXMpIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gb3BlbmVkV2luZG93cy5nZXQobW9kYWxJbnN0YW5jZSkudmFsdWU7XG4gICAgICAgIHZhciBhcHBlbmRUb0VsZW1lbnQgPSBtb2RhbFdpbmRvdy5hcHBlbmRUbztcblxuICAgICAgICAvL2NsZWFuIHVwIHRoZSBzdGFja1xuICAgICAgICBvcGVuZWRXaW5kb3dzLnJlbW92ZShtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgcHJldmlvdXNUb3BPcGVuZWRNb2RhbCA9IG9wZW5lZFdpbmRvd3MudG9wKCk7XG4gICAgICAgIGlmIChwcmV2aW91c1RvcE9wZW5lZE1vZGFsKSB7XG4gICAgICAgICAgdG9wTW9kYWxJbmRleCA9IHBhcnNlSW50KHByZXZpb3VzVG9wT3BlbmVkTW9kYWwudmFsdWUubW9kYWxEb21FbC5hdHRyKCdpbmRleCcpLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVBZnRlckFuaW1hdGUobW9kYWxXaW5kb3cubW9kYWxEb21FbCwgbW9kYWxXaW5kb3cubW9kYWxTY29wZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIG1vZGFsQm9keUNsYXNzID0gbW9kYWxXaW5kb3cub3BlbmVkQ2xhc3MgfHwgT1BFTkVEX01PREFMX0NMQVNTO1xuICAgICAgICAgIG9wZW5lZENsYXNzZXMucmVtb3ZlKG1vZGFsQm9keUNsYXNzLCBtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgICB2YXIgYXJlQW55T3BlbiA9IG9wZW5lZENsYXNzZXMuaGFzS2V5KG1vZGFsQm9keUNsYXNzKTtcbiAgICAgICAgICBhcHBlbmRUb0VsZW1lbnQudG9nZ2xlQ2xhc3MobW9kYWxCb2R5Q2xhc3MsIGFyZUFueU9wZW4pO1xuICAgICAgICAgIGlmICghYXJlQW55T3BlbiAmJiBzY3JvbGxiYXJQYWRkaW5nICYmIHNjcm9sbGJhclBhZGRpbmcuaGVpZ2h0T3ZlcmZsb3cgJiYgc2Nyb2xsYmFyUGFkZGluZy5zY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICAgICAgaWYgKHNjcm9sbGJhclBhZGRpbmcub3JpZ2luYWxSaWdodCkge1xuICAgICAgICAgICAgICBhcHBlbmRUb0VsZW1lbnQuY3NzKHtwYWRkaW5nUmlnaHQ6IHNjcm9sbGJhclBhZGRpbmcub3JpZ2luYWxSaWdodCArICdweCd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFwcGVuZFRvRWxlbWVudC5jc3Moe3BhZGRpbmdSaWdodDogJyd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcm9sbGJhclBhZGRpbmcgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2dnbGVUb3BXaW5kb3dDbGFzcyh0cnVlKTtcbiAgICAgICAgfSwgbW9kYWxXaW5kb3cuY2xvc2VkRGVmZXJyZWQpO1xuICAgICAgICBjaGVja1JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgICAgLy9tb3ZlIGZvY3VzIHRvIHNwZWNpZmllZCBlbGVtZW50IGlmIGF2YWlsYWJsZSwgb3IgZWxzZSB0byBib2R5XG4gICAgICAgIGlmIChlbGVtZW50VG9SZWNlaXZlRm9jdXMgJiYgZWxlbWVudFRvUmVjZWl2ZUZvY3VzLmZvY3VzKSB7XG4gICAgICAgICAgZWxlbWVudFRvUmVjZWl2ZUZvY3VzLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZW5kVG9FbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgYXBwZW5kVG9FbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkIG9yIHJlbW92ZSBcIndpbmRvd1RvcENsYXNzXCIgZnJvbSB0aGUgdG9wIHdpbmRvdyBpbiB0aGUgc3RhY2tcbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZVRvcFdpbmRvd0NsYXNzKHRvZ2dsZVN3aXRjaCkge1xuICAgICAgICB2YXIgbW9kYWxXaW5kb3c7XG5cbiAgICAgICAgaWYgKG9wZW5lZFdpbmRvd3MubGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgICAgbW9kYWxXaW5kb3cgPSBvcGVuZWRXaW5kb3dzLnRvcCgpLnZhbHVlO1xuICAgICAgICAgIG1vZGFsV2luZG93Lm1vZGFsRG9tRWwudG9nZ2xlQ2xhc3MobW9kYWxXaW5kb3cud2luZG93VG9wQ2xhc3MgfHwgJycsIHRvZ2dsZVN3aXRjaCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2hlY2tSZW1vdmVCYWNrZHJvcCgpIHtcbiAgICAgICAgLy9yZW1vdmUgYmFja2Ryb3AgaWYgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgICBpZiAoYmFja2Ryb3BEb21FbCAmJiBiYWNrZHJvcEluZGV4KCkgPT09IC0xKSB7XG4gICAgICAgICAgdmFyIGJhY2tkcm9wU2NvcGVSZWYgPSBiYWNrZHJvcFNjb3BlO1xuICAgICAgICAgIHJlbW92ZUFmdGVyQW5pbWF0ZShiYWNrZHJvcERvbUVsLCBiYWNrZHJvcFNjb3BlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGJhY2tkcm9wU2NvcGVSZWYgPSBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJhY2tkcm9wRG9tRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYmFja2Ryb3BTY29wZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVBZnRlckFuaW1hdGUoZG9tRWwsIHNjb3BlLCBkb25lLCBjbG9zZWREZWZlcnJlZCkge1xuICAgICAgICB2YXIgYXN5bmNEZWZlcnJlZDtcbiAgICAgICAgdmFyIGFzeW5jUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHZhciBzZXRJc0FzeW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFhc3luY0RlZmVycmVkKSB7XG4gICAgICAgICAgICBhc3luY0RlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIGFzeW5jUHJvbWlzZSA9IGFzeW5jRGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNEb25lKCkge1xuICAgICAgICAgICAgYXN5bmNEZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGUuJGJyb2FkY2FzdCgkbW9kYWxTdGFjay5OT1dfQ0xPU0lOR19FVkVOVCwgc2V0SXNBc3luYyk7XG5cbiAgICAgICAgLy8gTm90ZSB0aGF0IGl0J3MgaW50ZW50aW9uYWwgdGhhdCBhc3luY1Byb21pc2UgbWlnaHQgYmUgbnVsbC5cbiAgICAgICAgLy8gVGhhdCdzIHdoZW4gc2V0SXNBc3luYyBoYXMgbm90IGJlZW4gY2FsbGVkIGR1cmluZyB0aGVcbiAgICAgICAgLy8gTk9XX0NMT1NJTkdfRVZFTlQgYnJvYWRjYXN0LlxuICAgICAgICByZXR1cm4gJHEud2hlbihhc3luY1Byb21pc2UpLnRoZW4oYWZ0ZXJBbmltYXRpbmcpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyQW5pbWF0aW5nKCkge1xuICAgICAgICAgIGlmIChhZnRlckFuaW1hdGluZy5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGFmdGVyQW5pbWF0aW5nLmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgJGFuaW1hdGUubGVhdmUoZG9tRWwpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbUVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKGNsb3NlZERlZmVycmVkKSB7XG4gICAgICAgICAgICAgIGNsb3NlZERlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNjb3BlLiRkZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGRvY3VtZW50Lm9uKCdrZXlkb3duJywga2V5ZG93bkxpc3RlbmVyKTtcblxuICAgICAgJHJvb3RTY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICRkb2N1bWVudC5vZmYoJ2tleWRvd24nLCBrZXlkb3duTGlzdGVuZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGtleWRvd25MaXN0ZW5lcihldnQpIHtcbiAgICAgICAgaWYgKGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbW9kYWwgPSBvcGVuZWRXaW5kb3dzLnRvcCgpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2dC53aGljaCkge1xuICAgICAgICAgICAgY2FzZSAyNzoge1xuICAgICAgICAgICAgICBpZiAobW9kYWwudmFsdWUua2V5Ym9hcmQpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICRtb2RhbFN0YWNrLmRpc21pc3MobW9kYWwua2V5LCAnZXNjYXBlIGtleSBwcmVzcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA5OiB7XG4gICAgICAgICAgICAgIHZhciBsaXN0ID0gJG1vZGFsU3RhY2subG9hZEZvY3VzRWxlbWVudExpc3QobW9kYWwpO1xuICAgICAgICAgICAgICB2YXIgZm9jdXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChldnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJG1vZGFsU3RhY2suaXNGb2N1c0luRmlyc3RJdGVtKGV2dCwgbGlzdCkgfHwgJG1vZGFsU3RhY2suaXNNb2RhbEZvY3VzZWQoZXZ0LCBtb2RhbCkpIHtcbiAgICAgICAgICAgICAgICAgIGZvY3VzQ2hhbmdlZCA9ICRtb2RhbFN0YWNrLmZvY3VzTGFzdEZvY3VzYWJsZUVsZW1lbnQobGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkbW9kYWxTdGFjay5pc0ZvY3VzSW5MYXN0SXRlbShldnQsIGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICBmb2N1c0NoYW5nZWQgPSAkbW9kYWxTdGFjay5mb2N1c0ZpcnN0Rm9jdXNhYmxlRWxlbWVudChsaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZm9jdXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRtb2RhbFN0YWNrLm9wZW4gPSBmdW5jdGlvbihtb2RhbEluc3RhbmNlLCBtb2RhbCkge1xuICAgICAgICB2YXIgbW9kYWxPcGVuZXIgPSAkZG9jdW1lbnRbMF0uYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICBtb2RhbEJvZHlDbGFzcyA9IG1vZGFsLm9wZW5lZENsYXNzIHx8IE9QRU5FRF9NT0RBTF9DTEFTUztcblxuICAgICAgICB0b2dnbGVUb3BXaW5kb3dDbGFzcyhmYWxzZSk7XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgdG9wIGZpcnN0LCB0byBkZXRlcm1pbmUgd2hhdCBpbmRleCB3ZSBvdWdodCB0byB1c2VcbiAgICAgICAgLy8gZm9yIHRoZSBjdXJyZW50IHRvcCBtb2RhbFxuICAgICAgICBwcmV2aW91c1RvcE9wZW5lZE1vZGFsID0gb3BlbmVkV2luZG93cy50b3AoKTtcblxuICAgICAgICBvcGVuZWRXaW5kb3dzLmFkZChtb2RhbEluc3RhbmNlLCB7XG4gICAgICAgICAgZGVmZXJyZWQ6IG1vZGFsLmRlZmVycmVkLFxuICAgICAgICAgIHJlbmRlckRlZmVycmVkOiBtb2RhbC5yZW5kZXJEZWZlcnJlZCxcbiAgICAgICAgICBjbG9zZWREZWZlcnJlZDogbW9kYWwuY2xvc2VkRGVmZXJyZWQsXG4gICAgICAgICAgbW9kYWxTY29wZTogbW9kYWwuc2NvcGUsXG4gICAgICAgICAgYmFja2Ryb3A6IG1vZGFsLmJhY2tkcm9wLFxuICAgICAgICAgIGtleWJvYXJkOiBtb2RhbC5rZXlib2FyZCxcbiAgICAgICAgICBvcGVuZWRDbGFzczogbW9kYWwub3BlbmVkQ2xhc3MsXG4gICAgICAgICAgd2luZG93VG9wQ2xhc3M6IG1vZGFsLndpbmRvd1RvcENsYXNzLFxuICAgICAgICAgIGFuaW1hdGlvbjogbW9kYWwuYW5pbWF0aW9uLFxuICAgICAgICAgIGFwcGVuZFRvOiBtb2RhbC5hcHBlbmRUb1xuICAgICAgICB9KTtcblxuICAgICAgICBvcGVuZWRDbGFzc2VzLnB1dChtb2RhbEJvZHlDbGFzcywgbW9kYWxJbnN0YW5jZSk7XG5cbiAgICAgICAgdmFyIGFwcGVuZFRvRWxlbWVudCA9IG1vZGFsLmFwcGVuZFRvLFxuICAgICAgICAgICAgY3VyckJhY2tkcm9wSW5kZXggPSBiYWNrZHJvcEluZGV4KCk7XG5cbiAgICAgICAgaWYgKGN1cnJCYWNrZHJvcEluZGV4ID49IDAgJiYgIWJhY2tkcm9wRG9tRWwpIHtcbiAgICAgICAgICBiYWNrZHJvcFNjb3BlID0gJHJvb3RTY29wZS4kbmV3KHRydWUpO1xuICAgICAgICAgIGJhY2tkcm9wU2NvcGUubW9kYWxPcHRpb25zID0gbW9kYWw7XG4gICAgICAgICAgYmFja2Ryb3BTY29wZS5pbmRleCA9IGN1cnJCYWNrZHJvcEluZGV4O1xuICAgICAgICAgIGJhY2tkcm9wRG9tRWwgPSBhbmd1bGFyLmVsZW1lbnQoJzxkaXYgdWliLW1vZGFsLWJhY2tkcm9wPVwibW9kYWwtYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgICBiYWNrZHJvcERvbUVsLmF0dHIoe1xuICAgICAgICAgICAgJ2NsYXNzJzogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICAgICAgICAgICduZy1zdHlsZSc6ICd7XFwnei1pbmRleFxcJzogMTA0MCArIChpbmRleCAmJiAxIHx8IDApICsgaW5kZXgqMTB9JyxcbiAgICAgICAgICAgICd1aWItbW9kYWwtYW5pbWF0aW9uLWNsYXNzJzogJ2ZhZGUnLFxuICAgICAgICAgICAgJ21vZGFsLWluLWNsYXNzJzogJ2luJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtb2RhbC5iYWNrZHJvcENsYXNzKSB7XG4gICAgICAgICAgICBiYWNrZHJvcERvbUVsLmFkZENsYXNzKG1vZGFsLmJhY2tkcm9wQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtb2RhbC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGJhY2tkcm9wRG9tRWwuYXR0cignbW9kYWwtYW5pbWF0aW9uJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJGNvbXBpbGUoYmFja2Ryb3BEb21FbCkoYmFja2Ryb3BTY29wZSk7XG4gICAgICAgICAgJGFuaW1hdGUuZW50ZXIoYmFja2Ryb3BEb21FbCwgYXBwZW5kVG9FbGVtZW50KTtcbiAgICAgICAgICBpZiAoJHVpYlBvc2l0aW9uLmlzU2Nyb2xsYWJsZShhcHBlbmRUb0VsZW1lbnQpKSB7XG4gICAgICAgICAgICBzY3JvbGxiYXJQYWRkaW5nID0gJHVpYlBvc2l0aW9uLnNjcm9sbGJhclBhZGRpbmcoYXBwZW5kVG9FbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJQYWRkaW5nLmhlaWdodE92ZXJmbG93ICYmIHNjcm9sbGJhclBhZGRpbmcuc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICAgICAgYXBwZW5kVG9FbGVtZW50LmNzcyh7cGFkZGluZ1JpZ2h0OiBzY3JvbGxiYXJQYWRkaW5nLnJpZ2h0ICsgJ3B4J30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICBpZiAobW9kYWwuY29tcG9uZW50KSB7XG4gICAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc25ha2VfY2FzZShtb2RhbC5jb21wb25lbnQubmFtZSkpO1xuICAgICAgICAgIGNvbnRlbnQgPSBhbmd1bGFyLmVsZW1lbnQoY29udGVudCk7XG4gICAgICAgICAgY29udGVudC5hdHRyKHtcbiAgICAgICAgICAgIHJlc29sdmU6ICckcmVzb2x2ZScsXG4gICAgICAgICAgICAnbW9kYWwtaW5zdGFuY2UnOiAnJHVpYk1vZGFsSW5zdGFuY2UnLFxuICAgICAgICAgICAgY2xvc2U6ICckY2xvc2UoJHZhbHVlKScsXG4gICAgICAgICAgICBkaXNtaXNzOiAnJGRpc21pc3MoJHZhbHVlKSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZW50ID0gbW9kYWwuY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgdG9wIG1vZGFsIGluZGV4IGJhc2VkIG9uIHRoZSBpbmRleCBvZiB0aGUgcHJldmlvdXMgdG9wIG1vZGFsXG4gICAgICAgIHRvcE1vZGFsSW5kZXggPSBwcmV2aW91c1RvcE9wZW5lZE1vZGFsID8gcGFyc2VJbnQocHJldmlvdXNUb3BPcGVuZWRNb2RhbC52YWx1ZS5tb2RhbERvbUVsLmF0dHIoJ2luZGV4JyksIDEwKSArIDEgOiAwO1xuICAgICAgICB2YXIgYW5ndWxhckRvbUVsID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IHVpYi1tb2RhbC13aW5kb3c9XCJtb2RhbC13aW5kb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgYW5ndWxhckRvbUVsLmF0dHIoe1xuICAgICAgICAgICdjbGFzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgJ3RlbXBsYXRlLXVybCc6IG1vZGFsLndpbmRvd1RlbXBsYXRlVXJsLFxuICAgICAgICAgICd3aW5kb3ctdG9wLWNsYXNzJzogbW9kYWwud2luZG93VG9wQ2xhc3MsXG4gICAgICAgICAgJ3JvbGUnOiAnZGlhbG9nJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbW9kYWwuYXJpYUxhYmVsbGVkQnksXG4gICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBtb2RhbC5hcmlhRGVzY3JpYmVkQnksXG4gICAgICAgICAgJ3NpemUnOiBtb2RhbC5zaXplLFxuICAgICAgICAgICdpbmRleCc6IHRvcE1vZGFsSW5kZXgsXG4gICAgICAgICAgJ2FuaW1hdGUnOiAnYW5pbWF0ZScsXG4gICAgICAgICAgJ25nLXN0eWxlJzogJ3tcXCd6LWluZGV4XFwnOiAxMDUwICsgJCR0b3BNb2RhbEluZGV4KjEwLCBkaXNwbGF5OiBcXCdibG9ja1xcJ30nLFxuICAgICAgICAgICd0YWJpbmRleCc6IC0xLFxuICAgICAgICAgICd1aWItbW9kYWwtYW5pbWF0aW9uLWNsYXNzJzogJ2ZhZGUnLFxuICAgICAgICAgICdtb2RhbC1pbi1jbGFzcyc6ICdpbidcbiAgICAgICAgfSkuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICBpZiAobW9kYWwud2luZG93Q2xhc3MpIHtcbiAgICAgICAgICBhbmd1bGFyRG9tRWwuYWRkQ2xhc3MobW9kYWwud2luZG93Q2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGFsLmFuaW1hdGlvbikge1xuICAgICAgICAgIGFuZ3VsYXJEb21FbC5hdHRyKCdtb2RhbC1hbmltYXRpb24nLCAndHJ1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwZW5kVG9FbGVtZW50LmFkZENsYXNzKG1vZGFsQm9keUNsYXNzKTtcbiAgICAgICAgaWYgKG1vZGFsLnNjb3BlKSB7XG4gICAgICAgICAgLy8gd2UgbmVlZCB0byBleHBsaWNpdGx5IGFkZCB0aGUgbW9kYWwgaW5kZXggdG8gdGhlIG1vZGFsIHNjb3BlXG4gICAgICAgICAgLy8gYmVjYXVzZSBpdCBpcyBuZWVkZWQgYnkgbmdTdHlsZSB0byBjb21wdXRlIHRoZSB6SW5kZXggcHJvcGVydHkuXG4gICAgICAgICAgbW9kYWwuc2NvcGUuJCR0b3BNb2RhbEluZGV4ID0gdG9wTW9kYWxJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAkYW5pbWF0ZS5lbnRlcigkY29tcGlsZShhbmd1bGFyRG9tRWwpKG1vZGFsLnNjb3BlKSwgYXBwZW5kVG9FbGVtZW50KTtcblxuICAgICAgICBvcGVuZWRXaW5kb3dzLnRvcCgpLnZhbHVlLm1vZGFsRG9tRWwgPSBhbmd1bGFyRG9tRWw7XG4gICAgICAgIG9wZW5lZFdpbmRvd3MudG9wKCkudmFsdWUubW9kYWxPcGVuZXIgPSBtb2RhbE9wZW5lcjtcblxuICAgICAgICBhcHBseUFyaWFIaWRkZW4oYW5ndWxhckRvbUVsKTtcblxuICAgICAgICBmdW5jdGlvbiBhcHBseUFyaWFIaWRkZW4oZWwpIHtcbiAgICAgICAgICBpZiAoIWVsIHx8IGVsWzBdLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdldFNpYmxpbmdzKGVsKS5mb3JFYWNoKGZ1bmN0aW9uKHNpYmxpbmcpIHtcbiAgICAgICAgICAgIHZhciBlbGVtSXNBbHJlYWR5SGlkZGVuID0gc2libGluZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJyxcbiAgICAgICAgICAgICAgYXJpYUhpZGRlbkNvdW50ID0gcGFyc2VJbnQoc2libGluZy5nZXRBdHRyaWJ1dGUoQVJJQV9ISURERU5fQVRUUklCVVRFX05BTUUpLCAxMCk7XG5cbiAgICAgICAgICAgIGlmICghYXJpYUhpZGRlbkNvdW50KSB7XG4gICAgICAgICAgICAgIGFyaWFIaWRkZW5Db3VudCA9IGVsZW1Jc0FscmVhZHlIaWRkZW4gPyAxIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoQVJJQV9ISURERU5fQVRUUklCVVRFX05BTUUsIGFyaWFIaWRkZW5Db3VudCArIDEpO1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBhcHBseUFyaWFIaWRkZW4oZWwucGFyZW50KCkpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gZ2V0U2libGluZ3MoZWwpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGVsLnBhcmVudCgpID8gZWwucGFyZW50KCkuY2hpbGRyZW4oKSA6IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2hpbGQgIT09IGVsWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBicm9hZGNhc3RDbG9zaW5nKG1vZGFsV2luZG93LCByZXN1bHRPclJlYXNvbiwgY2xvc2luZykge1xuICAgICAgICByZXR1cm4gIW1vZGFsV2luZG93LnZhbHVlLm1vZGFsU2NvcGUuJGJyb2FkY2FzdCgnbW9kYWwuY2xvc2luZycsIHJlc3VsdE9yUmVhc29uLCBjbG9zaW5nKS5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1bmhpZGVCYWNrZ3JvdW5kRWxlbWVudHMoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycgKyBBUklBX0hJRERFTl9BVFRSSUJVVEVfTkFNRSArICddJyksXG4gICAgICAgICAgZnVuY3Rpb24oaGlkZGVuRWwpIHtcbiAgICAgICAgICAgIHZhciBhcmlhSGlkZGVuQ291bnQgPSBwYXJzZUludChoaWRkZW5FbC5nZXRBdHRyaWJ1dGUoQVJJQV9ISURERU5fQVRUUklCVVRFX05BTUUpLCAxMCksXG4gICAgICAgICAgICAgIG5ld0hpZGRlbkNvdW50ID0gYXJpYUhpZGRlbkNvdW50IC0gMTtcbiAgICAgICAgICAgIGhpZGRlbkVsLnNldEF0dHJpYnV0ZShBUklBX0hJRERFTl9BVFRSSUJVVEVfTkFNRSwgbmV3SGlkZGVuQ291bnQpO1xuXG4gICAgICAgICAgICBpZiAoIW5ld0hpZGRlbkNvdW50KSB7XG4gICAgICAgICAgICAgIGhpZGRlbkVsLnJlbW92ZUF0dHJpYnV0ZShBUklBX0hJRERFTl9BVFRSSUJVVEVfTkFNRSk7XG4gICAgICAgICAgICAgIGhpZGRlbkVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgICRtb2RhbFN0YWNrLmNsb3NlID0gZnVuY3Rpb24obW9kYWxJbnN0YW5jZSwgcmVzdWx0KSB7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IG9wZW5lZFdpbmRvd3MuZ2V0KG1vZGFsSW5zdGFuY2UpO1xuICAgICAgICB1bmhpZGVCYWNrZ3JvdW5kRWxlbWVudHMoKTtcbiAgICAgICAgaWYgKG1vZGFsV2luZG93ICYmIGJyb2FkY2FzdENsb3NpbmcobW9kYWxXaW5kb3csIHJlc3VsdCwgdHJ1ZSkpIHtcbiAgICAgICAgICBtb2RhbFdpbmRvdy52YWx1ZS5tb2RhbFNjb3BlLiQkdWliRGVzdHJ1Y3Rpb25TY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgIG1vZGFsV2luZG93LnZhbHVlLmRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICByZW1vdmVNb2RhbFdpbmRvdyhtb2RhbEluc3RhbmNlLCBtb2RhbFdpbmRvdy52YWx1ZS5tb2RhbE9wZW5lcik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIW1vZGFsV2luZG93O1xuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suZGlzbWlzcyA9IGZ1bmN0aW9uKG1vZGFsSW5zdGFuY2UsIHJlYXNvbikge1xuICAgICAgICB2YXIgbW9kYWxXaW5kb3cgPSBvcGVuZWRXaW5kb3dzLmdldChtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgdW5oaWRlQmFja2dyb3VuZEVsZW1lbnRzKCk7XG4gICAgICAgIGlmIChtb2RhbFdpbmRvdyAmJiBicm9hZGNhc3RDbG9zaW5nKG1vZGFsV2luZG93LCByZWFzb24sIGZhbHNlKSkge1xuICAgICAgICAgIG1vZGFsV2luZG93LnZhbHVlLm1vZGFsU2NvcGUuJCR1aWJEZXN0cnVjdGlvblNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgbW9kYWxXaW5kb3cudmFsdWUuZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgcmVtb3ZlTW9kYWxXaW5kb3cobW9kYWxJbnN0YW5jZSwgbW9kYWxXaW5kb3cudmFsdWUubW9kYWxPcGVuZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhbW9kYWxXaW5kb3c7XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5kaXNtaXNzQWxsID0gZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIHZhciB0b3BNb2RhbCA9IHRoaXMuZ2V0VG9wKCk7XG4gICAgICAgIHdoaWxlICh0b3BNb2RhbCAmJiB0aGlzLmRpc21pc3ModG9wTW9kYWwua2V5LCByZWFzb24pKSB7XG4gICAgICAgICAgdG9wTW9kYWwgPSB0aGlzLmdldFRvcCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5nZXRUb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZFdpbmRvd3MudG9wKCk7XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5tb2RhbFJlbmRlcmVkID0gZnVuY3Rpb24obW9kYWxJbnN0YW5jZSkge1xuICAgICAgICB2YXIgbW9kYWxXaW5kb3cgPSBvcGVuZWRXaW5kb3dzLmdldChtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgaWYgKG1vZGFsV2luZG93KSB7XG4gICAgICAgICAgbW9kYWxXaW5kb3cudmFsdWUucmVuZGVyRGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5mb2N1c0ZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3RbMF0uZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5mb2N1c0xhc3RGb2N1c2FibGVFbGVtZW50ID0gZnVuY3Rpb24obGlzdCkge1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suaXNNb2RhbEZvY3VzZWQgPSBmdW5jdGlvbihldnQsIG1vZGFsV2luZG93KSB7XG4gICAgICAgIGlmIChldnQgJiYgbW9kYWxXaW5kb3cpIHtcbiAgICAgICAgICB2YXIgbW9kYWxEb21FbCA9IG1vZGFsV2luZG93LnZhbHVlLm1vZGFsRG9tRWw7XG4gICAgICAgICAgaWYgKG1vZGFsRG9tRWwgJiYgbW9kYWxEb21FbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXZ0LnRhcmdldCB8fCBldnQuc3JjRWxlbWVudCkgPT09IG1vZGFsRG9tRWxbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgICRtb2RhbFN0YWNrLmlzRm9jdXNJbkZpcnN0SXRlbSA9IGZ1bmN0aW9uKGV2dCwgbGlzdCkge1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIChldnQudGFyZ2V0IHx8IGV2dC5zcmNFbGVtZW50KSA9PT0gbGlzdFswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5pc0ZvY3VzSW5MYXN0SXRlbSA9IGZ1bmN0aW9uKGV2dCwgbGlzdCkge1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIChldnQudGFyZ2V0IHx8IGV2dC5zcmNFbGVtZW50KSA9PT0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgICRtb2RhbFN0YWNrLmxvYWRGb2N1c0VsZW1lbnRMaXN0ID0gZnVuY3Rpb24obW9kYWxXaW5kb3cpIHtcbiAgICAgICAgaWYgKG1vZGFsV2luZG93KSB7XG4gICAgICAgICAgdmFyIG1vZGFsRG9tRTEgPSBtb2RhbFdpbmRvdy52YWx1ZS5tb2RhbERvbUVsO1xuICAgICAgICAgIGlmIChtb2RhbERvbUUxICYmIG1vZGFsRG9tRTEubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBtb2RhbERvbUUxWzBdLnF1ZXJ5U2VsZWN0b3JBbGwodGFiYmFibGVTZWxlY3Rvcik7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHMgP1xuICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWaXNpYmxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9KSA6IGVsZW1lbnRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuICRtb2RhbFN0YWNrO1xuICAgIH1dKVxuXG4gIC5wcm92aWRlcignJHVpYk1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyICRtb2RhbFByb3ZpZGVyID0ge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlLCAvL2NhbiBhbHNvIGJlIGZhbHNlIG9yICdzdGF0aWMnXG4gICAgICAgIGtleWJvYXJkOiB0cnVlXG4gICAgICB9LFxuICAgICAgJGdldDogWyckcm9vdFNjb3BlJywgJyRxJywgJyRkb2N1bWVudCcsICckdGVtcGxhdGVSZXF1ZXN0JywgJyRjb250cm9sbGVyJywgJyR1aWJSZXNvbHZlJywgJyR1aWJNb2RhbFN0YWNrJyxcbiAgICAgICAgZnVuY3Rpb24gKCRyb290U2NvcGUsICRxLCAkZG9jdW1lbnQsICR0ZW1wbGF0ZVJlcXVlc3QsICRjb250cm9sbGVyLCAkdWliUmVzb2x2ZSwgJG1vZGFsU3RhY2spIHtcbiAgICAgICAgICB2YXIgJG1vZGFsID0ge307XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRUZW1wbGF0ZVByb21pc2Uob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudGVtcGxhdGUgPyAkcS53aGVuKG9wdGlvbnMudGVtcGxhdGUpIDpcbiAgICAgICAgICAgICAgJHRlbXBsYXRlUmVxdWVzdChhbmd1bGFyLmlzRnVuY3Rpb24ob3B0aW9ucy50ZW1wbGF0ZVVybCkgP1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudGVtcGxhdGVVcmwoKSA6IG9wdGlvbnMudGVtcGxhdGVVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcm9taXNlQ2hhaW4gPSBudWxsO1xuICAgICAgICAgICRtb2RhbC5nZXRQcm9taXNlQ2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlQ2hhaW47XG4gICAgICAgICAgfTtcblxuICAgICAgICAgICRtb2RhbC5vcGVuID0gZnVuY3Rpb24obW9kYWxPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgbW9kYWxSZXN1bHREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxPcGVuZWREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxDbG9zZWREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxSZW5kZXJEZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgICAgIC8vcHJlcGFyZSBhbiBpbnN0YW5jZSBvZiBhIG1vZGFsIHRvIGJlIGluamVjdGVkIGludG8gY29udHJvbGxlcnMgYW5kIHJldHVybmVkIHRvIGEgY2FsbGVyXG4gICAgICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9IHtcbiAgICAgICAgICAgICAgcmVzdWx0OiBtb2RhbFJlc3VsdERlZmVycmVkLnByb21pc2UsXG4gICAgICAgICAgICAgIG9wZW5lZDogbW9kYWxPcGVuZWREZWZlcnJlZC5wcm9taXNlLFxuICAgICAgICAgICAgICBjbG9zZWQ6IG1vZGFsQ2xvc2VkRGVmZXJyZWQucHJvbWlzZSxcbiAgICAgICAgICAgICAgcmVuZGVyZWQ6IG1vZGFsUmVuZGVyRGVmZXJyZWQucHJvbWlzZSxcbiAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJG1vZGFsU3RhY2suY2xvc2UobW9kYWxJbnN0YW5jZSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGlzbWlzczogZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAkbW9kYWxTdGFjay5kaXNtaXNzKG1vZGFsSW5zdGFuY2UsIHJlYXNvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vbWVyZ2UgYW5kIGNsZWFuIHVwIG9wdGlvbnNcbiAgICAgICAgICAgIG1vZGFsT3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCAkbW9kYWxQcm92aWRlci5vcHRpb25zLCBtb2RhbE9wdGlvbnMpO1xuICAgICAgICAgICAgbW9kYWxPcHRpb25zLnJlc29sdmUgPSBtb2RhbE9wdGlvbnMucmVzb2x2ZSB8fCB7fTtcbiAgICAgICAgICAgIG1vZGFsT3B0aW9ucy5hcHBlbmRUbyA9IG1vZGFsT3B0aW9ucy5hcHBlbmRUbyB8fCAkZG9jdW1lbnQuZmluZCgnYm9keScpLmVxKDApO1xuXG4gICAgICAgICAgICBpZiAoIW1vZGFsT3B0aW9ucy5hcHBlbmRUby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcHBlbmRUbyBlbGVtZW50IG5vdCBmb3VuZC4gTWFrZSBzdXJlIHRoYXQgdGhlIGVsZW1lbnQgcGFzc2VkIGlzIGluIERPTS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy92ZXJpZnkgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKCFtb2RhbE9wdGlvbnMuY29tcG9uZW50ICYmICFtb2RhbE9wdGlvbnMudGVtcGxhdGUgJiYgIW1vZGFsT3B0aW9ucy50ZW1wbGF0ZVVybCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09uZSBvZiBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3IgdGVtcGxhdGVVcmwgb3B0aW9ucyBpcyByZXF1aXJlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlQW5kUmVzb2x2ZVByb21pc2U7XG4gICAgICAgICAgICBpZiAobW9kYWxPcHRpb25zLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZUFuZFJlc29sdmVQcm9taXNlID0gJHEud2hlbigkdWliUmVzb2x2ZS5yZXNvbHZlKG1vZGFsT3B0aW9ucy5yZXNvbHZlLCB7fSwgbnVsbCwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVBbmRSZXNvbHZlUHJvbWlzZSA9XG4gICAgICAgICAgICAgICAgJHEuYWxsKFtnZXRUZW1wbGF0ZVByb21pc2UobW9kYWxPcHRpb25zKSwgJHVpYlJlc29sdmUucmVzb2x2ZShtb2RhbE9wdGlvbnMucmVzb2x2ZSwge30sIG51bGwsIG51bGwpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc29sdmVXaXRoVGVtcGxhdGUoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUFuZFJlc29sdmVQcm9taXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgZXhpc3RpbmcgcHJvbWlzZSBjaGFpbi5cbiAgICAgICAgICAgIC8vIFRoZW4gc3dpdGNoIHRvIG91ciBvd24gY29tYmluZWQgcHJvbWlzZSBkZXBlbmRlbmN5IChyZWdhcmRsZXNzIG9mIGhvdyB0aGUgcHJldmlvdXMgbW9kYWwgZmFyZWQpLlxuICAgICAgICAgICAgLy8gVGhlbiBhZGQgdG8gJG1vZGFsU3RhY2sgYW5kIHJlc29sdmUgb3BlbmVkLlxuICAgICAgICAgICAgLy8gRmluYWxseSBjbGVhbiB1cCB0aGUgY2hhaW4gdmFyaWFibGUgaWYgbm8gc3Vic2VxdWVudCBtb2RhbCBoYXMgb3ZlcndyaXR0ZW4gaXQuXG4gICAgICAgICAgICB2YXIgc2FtZVByb21pc2U7XG4gICAgICAgICAgICBzYW1lUHJvbWlzZSA9IHByb21pc2VDaGFpbiA9ICRxLmFsbChbcHJvbWlzZUNoYWluXSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZVdpdGhUZW1wbGF0ZSwgcmVzb2x2ZVdpdGhUZW1wbGF0ZSlcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gcmVzb2x2ZVN1Y2Nlc3ModHBsQW5kVmFycykge1xuICAgICAgICAgICAgICAgIHZhciBwcm92aWRlZFNjb3BlID0gbW9kYWxPcHRpb25zLnNjb3BlIHx8ICRyb290U2NvcGU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbW9kYWxTY29wZSA9IHByb3ZpZGVkU2NvcGUuJG5ldygpO1xuICAgICAgICAgICAgICAgIG1vZGFsU2NvcGUuJGNsb3NlID0gbW9kYWxJbnN0YW5jZS5jbG9zZTtcbiAgICAgICAgICAgICAgICBtb2RhbFNjb3BlLiRkaXNtaXNzID0gbW9kYWxJbnN0YW5jZS5kaXNtaXNzO1xuXG4gICAgICAgICAgICAgICAgbW9kYWxTY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIW1vZGFsU2NvcGUuJCR1aWJEZXN0cnVjdGlvblNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbFNjb3BlLiRkaXNtaXNzKCckdWliVW5zY2hlZHVsZWREZXN0cnVjdGlvbicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1vZGFsID0ge1xuICAgICAgICAgICAgICAgICAgc2NvcGU6IG1vZGFsU2NvcGUsXG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZDogbW9kYWxSZXN1bHREZWZlcnJlZCxcbiAgICAgICAgICAgICAgICAgIHJlbmRlckRlZmVycmVkOiBtb2RhbFJlbmRlckRlZmVycmVkLFxuICAgICAgICAgICAgICAgICAgY2xvc2VkRGVmZXJyZWQ6IG1vZGFsQ2xvc2VkRGVmZXJyZWQsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IG1vZGFsT3B0aW9ucy5hbmltYXRpb24sXG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcDogbW9kYWxPcHRpb25zLmJhY2tkcm9wLFxuICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IG1vZGFsT3B0aW9ucy5rZXlib2FyZCxcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wQ2xhc3M6IG1vZGFsT3B0aW9ucy5iYWNrZHJvcENsYXNzLFxuICAgICAgICAgICAgICAgICAgd2luZG93VG9wQ2xhc3M6IG1vZGFsT3B0aW9ucy53aW5kb3dUb3BDbGFzcyxcbiAgICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiBtb2RhbE9wdGlvbnMud2luZG93Q2xhc3MsXG4gICAgICAgICAgICAgICAgICB3aW5kb3dUZW1wbGF0ZVVybDogbW9kYWxPcHRpb25zLndpbmRvd1RlbXBsYXRlVXJsLFxuICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsbGVkQnk6IG1vZGFsT3B0aW9ucy5hcmlhTGFiZWxsZWRCeSxcbiAgICAgICAgICAgICAgICAgIGFyaWFEZXNjcmliZWRCeTogbW9kYWxPcHRpb25zLmFyaWFEZXNjcmliZWRCeSxcbiAgICAgICAgICAgICAgICAgIHNpemU6IG1vZGFsT3B0aW9ucy5zaXplLFxuICAgICAgICAgICAgICAgICAgb3BlbmVkQ2xhc3M6IG1vZGFsT3B0aW9ucy5vcGVuZWRDbGFzcyxcbiAgICAgICAgICAgICAgICAgIGFwcGVuZFRvOiBtb2RhbE9wdGlvbnMuYXBwZW5kVG9cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBjdHJsSW5zdGFuY2UsIGN0cmxJbnN0YW50aWF0ZSwgY3RybExvY2FscyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsT3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdExvY2Fscyhjb21wb25lbnQsIGZhbHNlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQubmFtZSA9IG1vZGFsT3B0aW9ucy5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICBtb2RhbC5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RhbE9wdGlvbnMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgY29uc3RydWN0TG9jYWxzKGN0cmxMb2NhbHMsIHRydWUsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgLy8gdGhlIHRoaXJkIHBhcmFtIHdpbGwgbWFrZSB0aGUgY29udHJvbGxlciBpbnN0YW50aWF0ZSBsYXRlcixwcml2YXRlIGFwaVxuICAgICAgICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvbWFzdGVyL3NyYy9uZy9jb250cm9sbGVyLmpzI0wxMjZcbiAgICAgICAgICAgICAgICAgIGN0cmxJbnN0YW50aWF0ZSA9ICRjb250cm9sbGVyKG1vZGFsT3B0aW9ucy5jb250cm9sbGVyLCBjdHJsTG9jYWxzLCB0cnVlLCBtb2RhbE9wdGlvbnMuY29udHJvbGxlckFzKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtb2RhbE9wdGlvbnMuY29udHJvbGxlckFzICYmIG1vZGFsT3B0aW9ucy5iaW5kVG9Db250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmxJbnN0YW5jZSA9IGN0cmxJbnN0YW50aWF0ZS5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgY3RybEluc3RhbmNlLiRjbG9zZSA9IG1vZGFsU2NvcGUuJGNsb3NlO1xuICAgICAgICAgICAgICAgICAgICBjdHJsSW5zdGFuY2UuJGRpc21pc3MgPSBtb2RhbFNjb3BlLiRkaXNtaXNzO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZChjdHJsSW5zdGFuY2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAkcmVzb2x2ZTogY3RybExvY2Fscy4kc2NvcGUuJHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgfSwgcHJvdmlkZWRTY29wZSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGN0cmxJbnN0YW5jZSA9IGN0cmxJbnN0YW50aWF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKGN0cmxJbnN0YW5jZS4kb25Jbml0KSkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsSW5zdGFuY2UuJG9uSW5pdCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbW9kYWxPcHRpb25zLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgbW9kYWwuY29udGVudCA9IHRwbEFuZFZhcnNbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJG1vZGFsU3RhY2sub3Blbihtb2RhbEluc3RhbmNlLCBtb2RhbCk7XG4gICAgICAgICAgICAgICAgbW9kYWxPcGVuZWREZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0TG9jYWxzKG9iaiwgdGVtcGxhdGUsIGluc3RhbmNlT25TY29wZSwgaW5qZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgb2JqLiRzY29wZSA9IG1vZGFsU2NvcGU7XG4gICAgICAgICAgICAgICAgICBvYmouJHNjb3BlLiRyZXNvbHZlID0ge307XG4gICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VPblNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai4kc2NvcGUuJHVpYk1vZGFsSW5zdGFuY2UgPSBtb2RhbEluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLiR1aWJNb2RhbEluc3RhbmNlID0gbW9kYWxJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdmFyIHJlc29sdmVzID0gdGVtcGxhdGUgPyB0cGxBbmRWYXJzWzFdIDogdHBsQW5kVmFycztcbiAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNvbHZlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5qZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvYmouJHNjb3BlLiRyZXNvbHZlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIHJlc29sdmVFcnJvcihyZWFzb24pIHtcbiAgICAgICAgICAgICAgbW9kYWxPcGVuZWREZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgICAgbW9kYWxSZXN1bHREZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgIH0pWydmaW5hbGx5J10oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChwcm9taXNlQ2hhaW4gPT09IHNhbWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZUNoYWluID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb2RhbEluc3RhbmNlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gJG1vZGFsO1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIHJldHVybiAkbW9kYWxQcm92aWRlcjtcbiAgfSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAucGFnaW5nJywgW10pXG4vKipcbiAqIEhlbHBlciBpbnRlcm5hbCBzZXJ2aWNlIGZvciBnZW5lcmF0aW5nIGNvbW1vbiBjb250cm9sbGVyIGNvZGUgYmV0d2VlbiB0aGVcbiAqIHBhZ2VyIGFuZCBwYWdpbmF0aW9uIGNvbXBvbmVudHNcbiAqL1xuLmZhY3RvcnkoJ3VpYlBhZ2luZycsIFsnJHBhcnNlJywgZnVuY3Rpb24oJHBhcnNlKSB7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbihjdHJsLCAkc2NvcGUsICRhdHRycykge1xuICAgICAgY3RybC5zZXROdW1QYWdlcyA9ICRhdHRycy5udW1QYWdlcyA/ICRwYXJzZSgkYXR0cnMubnVtUGFnZXMpLmFzc2lnbiA6IGFuZ3VsYXIubm9vcDtcbiAgICAgIGN0cmwubmdNb2RlbEN0cmwgPSB7ICRzZXRWaWV3VmFsdWU6IGFuZ3VsYXIubm9vcCB9OyAvLyBudWxsTW9kZWxDdHJsXG4gICAgICBjdHJsLl93YXRjaGVycyA9IFtdO1xuXG4gICAgICBjdHJsLmluaXQgPSBmdW5jdGlvbihuZ01vZGVsQ3RybCwgY29uZmlnKSB7XG4gICAgICAgIGN0cmwubmdNb2RlbEN0cmwgPSBuZ01vZGVsQ3RybDtcbiAgICAgICAgY3RybC5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGN0cmwucmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCRhdHRycy5pdGVtc1BlclBhZ2UpIHtcbiAgICAgICAgICBjdHJsLl93YXRjaGVycy5wdXNoKCRzY29wZS4kcGFyZW50LiR3YXRjaCgkYXR0cnMuaXRlbXNQZXJQYWdlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgY3RybC5pdGVtc1BlclBhZ2UgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgJHNjb3BlLnRvdGFsUGFnZXMgPSBjdHJsLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlUGFnZSgpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHJsLml0ZW1zUGVyUGFnZSA9IGNvbmZpZy5pdGVtc1BlclBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUuJHdhdGNoKCd0b3RhbEl0ZW1zJywgZnVuY3Rpb24obmV3VG90YWwsIG9sZFRvdGFsKSB7XG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG5ld1RvdGFsKSB8fCBuZXdUb3RhbCAhPT0gb2xkVG90YWwpIHtcbiAgICAgICAgICAgICRzY29wZS50b3RhbFBhZ2VzID0gY3RybC5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgICAgICAgICBjdHJsLnVwZGF0ZVBhZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY3RybC5jYWxjdWxhdGVUb3RhbFBhZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gY3RybC5pdGVtc1BlclBhZ2UgPCAxID8gMSA6IE1hdGguY2VpbCgkc2NvcGUudG90YWxJdGVtcyAvIGN0cmwuaXRlbXNQZXJQYWdlKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUucGFnZSA9IHBhcnNlSW50KGN0cmwubmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSwgMTApIHx8IDE7XG4gICAgICB9O1xuXG4gICAgICAkc2NvcGUuc2VsZWN0UGFnZSA9IGZ1bmN0aW9uKHBhZ2UsIGV2dCkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpY2tBbGxvd2VkID0gISRzY29wZS5uZ0Rpc2FibGVkIHx8ICFldnQ7XG4gICAgICAgIGlmIChjbGlja0FsbG93ZWQgJiYgJHNjb3BlLnBhZ2UgIT09IHBhZ2UgJiYgcGFnZSA+IDAgJiYgcGFnZSA8PSAkc2NvcGUudG90YWxQYWdlcykge1xuICAgICAgICAgIGlmIChldnQgJiYgZXZ0LnRhcmdldCkge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0cmwubmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZShwYWdlKTtcbiAgICAgICAgICBjdHJsLm5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJHNjb3BlLmdldFRleHQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuICRzY29wZVtrZXkgKyAnVGV4dCddIHx8IGN0cmwuY29uZmlnW2tleSArICdUZXh0J107XG4gICAgICB9O1xuXG4gICAgICAkc2NvcGUubm9QcmV2aW91cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHNjb3BlLnBhZ2UgPT09IDE7XG4gICAgICB9O1xuXG4gICAgICAkc2NvcGUubm9OZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkc2NvcGUucGFnZSA9PT0gJHNjb3BlLnRvdGFsUGFnZXM7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLnVwZGF0ZVBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY3RybC5zZXROdW1QYWdlcygkc2NvcGUuJHBhcmVudCwgJHNjb3BlLnRvdGFsUGFnZXMpOyAvLyBSZWFkb25seSB2YXJpYWJsZVxuXG4gICAgICAgIGlmICgkc2NvcGUucGFnZSA+ICRzY29wZS50b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgJHNjb3BlLnNlbGVjdFBhZ2UoJHNjb3BlLnRvdGFsUGFnZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0cmwubmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aGlsZSAoY3RybC5fd2F0Y2hlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY3RybC5fd2F0Y2hlcnMuc2hpZnQoKSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAucGFnZXInLCBbJ3VpLmJvb3RzdHJhcC5wYWdpbmcnLCAndWkuYm9vdHN0cmFwLnRhYmluZGV4J10pXG5cbi5jb250cm9sbGVyKCdVaWJQYWdlckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAndWliUGFnaW5nJywgJ3VpYlBhZ2VyQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsIHVpYlBhZ2luZywgdWliUGFnZXJDb25maWcpIHtcbiAgJHNjb3BlLmFsaWduID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmFsaWduKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5hbGlnbikgOiB1aWJQYWdlckNvbmZpZy5hbGlnbjtcblxuICB1aWJQYWdpbmcuY3JlYXRlKHRoaXMsICRzY29wZSwgJGF0dHJzKTtcbn1dKVxuXG4uY29uc3RhbnQoJ3VpYlBhZ2VyQ29uZmlnJywge1xuICBpdGVtc1BlclBhZ2U6IDEwLFxuICBwcmV2aW91c1RleHQ6ICfCqyBQcmV2aW91cycsXG4gIG5leHRUZXh0OiAnTmV4dCDCuycsXG4gIGFsaWduOiB0cnVlXG59KVxuXG4uZGlyZWN0aXZlKCd1aWJQYWdlcicsIFsndWliUGFnZXJDb25maWcnLCBmdW5jdGlvbih1aWJQYWdlckNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7XG4gICAgICB0b3RhbEl0ZW1zOiAnPScsXG4gICAgICBwcmV2aW91c1RleHQ6ICdAJyxcbiAgICAgIG5leHRUZXh0OiAnQCcsXG4gICAgICBuZ0Rpc2FibGVkOiAnPSdcbiAgICB9LFxuICAgIHJlcXVpcmU6IFsndWliUGFnZXInLCAnP25nTW9kZWwnXSxcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGNvbnRyb2xsZXI6ICdVaWJQYWdlckNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ3BhZ2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHJldHVybiBhdHRycy50ZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL3BhZ2VyL3BhZ2VyLmh0bWwnO1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgZWxlbWVudC5hZGRDbGFzcygncGFnZXInKTtcbiAgICAgIHZhciBwYWdpbmF0aW9uQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBpZiAoIW5nTW9kZWxDdHJsKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG8gbm90aGluZyBpZiBubyBuZy1tb2RlbFxuICAgICAgfVxuXG4gICAgICBwYWdpbmF0aW9uQ3RybC5pbml0KG5nTW9kZWxDdHJsLCB1aWJQYWdlckNvbmZpZyk7XG4gICAgfVxuICB9O1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnBhZ2luYXRpb24nLCBbJ3VpLmJvb3RzdHJhcC5wYWdpbmcnLCAndWkuYm9vdHN0cmFwLnRhYmluZGV4J10pXG4uY29udHJvbGxlcignVWliUGFnaW5hdGlvbkNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJHBhcnNlJywgJ3VpYlBhZ2luZycsICd1aWJQYWdpbmF0aW9uQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsICRwYXJzZSwgdWliUGFnaW5nLCB1aWJQYWdpbmF0aW9uQ29uZmlnKSB7XG4gIHZhciBjdHJsID0gdGhpcztcbiAgLy8gU2V0dXAgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzXG4gIHZhciBtYXhTaXplID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLm1heFNpemUpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLm1heFNpemUpIDogdWliUGFnaW5hdGlvbkNvbmZpZy5tYXhTaXplLFxuICAgIHJvdGF0ZSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5yb3RhdGUpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLnJvdGF0ZSkgOiB1aWJQYWdpbmF0aW9uQ29uZmlnLnJvdGF0ZSxcbiAgICBmb3JjZUVsbGlwc2VzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmZvcmNlRWxsaXBzZXMpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLmZvcmNlRWxsaXBzZXMpIDogdWliUGFnaW5hdGlvbkNvbmZpZy5mb3JjZUVsbGlwc2VzLFxuICAgIGJvdW5kYXJ5TGlua051bWJlcnMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuYm91bmRhcnlMaW5rTnVtYmVycykgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuYm91bmRhcnlMaW5rTnVtYmVycykgOiB1aWJQYWdpbmF0aW9uQ29uZmlnLmJvdW5kYXJ5TGlua051bWJlcnMsXG4gICAgcGFnZUxhYmVsID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnBhZ2VMYWJlbCkgPyBmdW5jdGlvbihpZHgpIHsgcmV0dXJuICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5wYWdlTGFiZWwsIHskcGFnZTogaWR4fSk7IH0gOiBhbmd1bGFyLmlkZW50aXR5O1xuICAkc2NvcGUuYm91bmRhcnlMaW5rcyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5ib3VuZGFyeUxpbmtzKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5ib3VuZGFyeUxpbmtzKSA6IHVpYlBhZ2luYXRpb25Db25maWcuYm91bmRhcnlMaW5rcztcbiAgJHNjb3BlLmRpcmVjdGlvbkxpbmtzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmRpcmVjdGlvbkxpbmtzKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5kaXJlY3Rpb25MaW5rcykgOiB1aWJQYWdpbmF0aW9uQ29uZmlnLmRpcmVjdGlvbkxpbmtzO1xuICAkYXR0cnMuJHNldCgncm9sZScsICdtZW51Jyk7XG5cbiAgdWliUGFnaW5nLmNyZWF0ZSh0aGlzLCAkc2NvcGUsICRhdHRycyk7XG5cbiAgaWYgKCRhdHRycy5tYXhTaXplKSB7XG4gICAgY3RybC5fd2F0Y2hlcnMucHVzaCgkc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKCRhdHRycy5tYXhTaXplKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIG1heFNpemUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgY3RybC5yZW5kZXIoKTtcbiAgICB9KSk7XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBmdW5jdGlvbiBtYWtlUGFnZShudW1iZXIsIHRleHQsIGlzQWN0aXZlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGFjdGl2ZTogaXNBY3RpdmVcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFnZXMoY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpIHtcbiAgICB2YXIgcGFnZXMgPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICB2YXIgc3RhcnRQYWdlID0gMSwgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgdmFyIGlzTWF4U2l6ZWQgPSBhbmd1bGFyLmlzRGVmaW5lZChtYXhTaXplKSAmJiBtYXhTaXplIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIGlmIChyb3RhdGUpIHtcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKG1heFNpemUgLyAyKSwgMSk7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBtYXhTaXplIC0gMTtcblxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIG1heFNpemUgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXG4gICAgICAgIHN0YXJ0UGFnZSA9IChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyBtYXhTaXplKSAtIDEpICogbWF4U2l6ZSArIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgbWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAodmFyIG51bWJlciA9IHN0YXJ0UGFnZTsgbnVtYmVyIDw9IGVuZFBhZ2U7IG51bWJlcisrKSB7XG4gICAgICB2YXIgcGFnZSA9IG1ha2VQYWdlKG51bWJlciwgcGFnZUxhYmVsKG51bWJlciksIG51bWJlciA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xuICAgIGlmIChpc01heFNpemVkICYmIG1heFNpemUgPiAwICYmICghcm90YXRlIHx8IGZvcmNlRWxsaXBzZXMgfHwgYm91bmRhcnlMaW5rTnVtYmVycykpIHtcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICAgIGlmICghYm91bmRhcnlMaW5rTnVtYmVycyB8fCBzdGFydFBhZ2UgPiAzKSB7IC8vbmVlZCBlbGxpcHNpcyBmb3IgYWxsIG9wdGlvbnMgdW5sZXNzIHJhbmdlIGlzIHRvbyBjbG9zZSB0byBiZWdpbm5pbmdcbiAgICAgICAgdmFyIHByZXZpb3VzUGFnZVNldCA9IG1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcbiAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kYXJ5TGlua051bWJlcnMpIHtcbiAgICAgICAgICBpZiAoc3RhcnRQYWdlID09PSAzKSB7IC8vbmVlZCB0byByZXBsYWNlIGVsbGlwc2lzIHdoZW4gdGhlIGJ1dHRvbnMgd291bGQgYmUgc2VxdWVudGlhbFxuICAgICAgICAgICAgdmFyIHNlY29uZFBhZ2VMaW5rID0gbWFrZVBhZ2UoMiwgJzInLCBmYWxzZSk7XG4gICAgICAgICAgICBwYWdlcy51bnNoaWZ0KHNlY29uZFBhZ2VMaW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9hZGQgdGhlIGZpcnN0IHBhZ2VcbiAgICAgICAgICB2YXIgZmlyc3RQYWdlTGluayA9IG1ha2VQYWdlKDEsICcxJywgZmFsc2UpO1xuICAgICAgICAgIHBhZ2VzLnVuc2hpZnQoZmlyc3RQYWdlTGluayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGlmICghYm91bmRhcnlMaW5rTnVtYmVycyB8fCBlbmRQYWdlIDwgdG90YWxQYWdlcyAtIDIpIHsgLy9uZWVkIGVsbGlwc2lzIGZvciBhbGwgb3B0aW9ucyB1bmxlc3MgcmFuZ2UgaXMgdG9vIGNsb3NlIHRvIGVuZFxuICAgICAgICB2YXIgbmV4dFBhZ2VTZXQgPSBtYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XG4gICAgICB9XG4gICAgICAgIGlmIChib3VuZGFyeUxpbmtOdW1iZXJzKSB7XG4gICAgICAgICAgaWYgKGVuZFBhZ2UgPT09IHRvdGFsUGFnZXMgLSAyKSB7IC8vbmVlZCB0byByZXBsYWNlIGVsbGlwc2lzIHdoZW4gdGhlIGJ1dHRvbnMgd291bGQgYmUgc2VxdWVudGlhbFxuICAgICAgICAgICAgdmFyIHNlY29uZFRvTGFzdFBhZ2VMaW5rID0gbWFrZVBhZ2UodG90YWxQYWdlcyAtIDEsIHRvdGFsUGFnZXMgLSAxLCBmYWxzZSk7XG4gICAgICAgICAgICBwYWdlcy5wdXNoKHNlY29uZFRvTGFzdFBhZ2VMaW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9hZGQgdGhlIGxhc3QgcGFnZVxuICAgICAgICAgIHZhciBsYXN0UGFnZUxpbmsgPSBtYWtlUGFnZSh0b3RhbFBhZ2VzLCB0b3RhbFBhZ2VzLCBmYWxzZSk7XG4gICAgICAgICAgcGFnZXMucHVzaChsYXN0UGFnZUxpbmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIHZhciBvcmlnaW5hbFJlbmRlciA9IHRoaXMucmVuZGVyO1xuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIG9yaWdpbmFsUmVuZGVyKCk7XG4gICAgaWYgKCRzY29wZS5wYWdlID4gMCAmJiAkc2NvcGUucGFnZSA8PSAkc2NvcGUudG90YWxQYWdlcykge1xuICAgICAgJHNjb3BlLnBhZ2VzID0gZ2V0UGFnZXMoJHNjb3BlLnBhZ2UsICRzY29wZS50b3RhbFBhZ2VzKTtcbiAgICB9XG4gIH07XG59XSlcblxuLmNvbnN0YW50KCd1aWJQYWdpbmF0aW9uQ29uZmlnJywge1xuICBpdGVtc1BlclBhZ2U6IDEwLFxuICBib3VuZGFyeUxpbmtzOiBmYWxzZSxcbiAgYm91bmRhcnlMaW5rTnVtYmVyczogZmFsc2UsXG4gIGRpcmVjdGlvbkxpbmtzOiB0cnVlLFxuICBmaXJzdFRleHQ6ICdGaXJzdCcsXG4gIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgbmV4dFRleHQ6ICdOZXh0JyxcbiAgbGFzdFRleHQ6ICdMYXN0JyxcbiAgcm90YXRlOiB0cnVlLFxuICBmb3JjZUVsbGlwc2VzOiBmYWxzZVxufSlcblxuLmRpcmVjdGl2ZSgndWliUGFnaW5hdGlvbicsIFsnJHBhcnNlJywgJ3VpYlBhZ2luYXRpb25Db25maWcnLCBmdW5jdGlvbigkcGFyc2UsIHVpYlBhZ2luYXRpb25Db25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgdG90YWxJdGVtczogJz0nLFxuICAgICAgZmlyc3RUZXh0OiAnQCcsXG4gICAgICBwcmV2aW91c1RleHQ6ICdAJyxcbiAgICAgIG5leHRUZXh0OiAnQCcsXG4gICAgICBsYXN0VGV4dDogJ0AnLFxuICAgICAgbmdEaXNhYmxlZDonPSdcbiAgICB9LFxuICAgIHJlcXVpcmU6IFsndWliUGFnaW5hdGlvbicsICc/bmdNb2RlbCddLFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgY29udHJvbGxlcjogJ1VpYlBhZ2luYXRpb25Db250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdwYWdpbmF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHJldHVybiBhdHRycy50ZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5odG1sJztcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24nKTtcbiAgICAgIHZhciBwYWdpbmF0aW9uQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBpZiAoIW5nTW9kZWxDdHJsKSB7XG4gICAgICAgICByZXR1cm47IC8vIGRvIG5vdGhpbmcgaWYgbm8gbmctbW9kZWxcbiAgICAgIH1cblxuICAgICAgcGFnaW5hdGlvbkN0cmwuaW5pdChuZ01vZGVsQ3RybCwgdWliUGFnaW5hdGlvbkNvbmZpZyk7XG4gICAgfVxuICB9O1xufV0pO1xuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgZmVhdHVyZXMgYXJlIHN0aWxsIG91dHN0YW5kaW5nOiBhbmltYXRpb24gYXMgYVxuICogZnVuY3Rpb24sIHBsYWNlbWVudCBhcyBhIGZ1bmN0aW9uLCBpbnNpZGUsIHN1cHBvcnQgZm9yIG1vcmUgdHJpZ2dlcnMgdGhhblxuICoganVzdCBtb3VzZSBlbnRlci9sZWF2ZSwgaHRtbCB0b29sdGlwcywgYW5kIHNlbGVjdG9yIGRlbGVnYXRpb24uXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAudG9vbHRpcCcsIFsndWkuYm9vdHN0cmFwLnBvc2l0aW9uJywgJ3VpLmJvb3RzdHJhcC5zdGFja2VkTWFwJ10pXG5cbi8qKlxuICogVGhlICR0b29sdGlwIHNlcnZpY2UgY3JlYXRlcyB0b29sdGlwLSBhbmQgcG9wb3Zlci1saWtlIGRpcmVjdGl2ZXMgYXMgd2VsbCBhc1xuICogaG91c2VzIGdsb2JhbCBvcHRpb25zIGZvciB0aGVtLlxuICovXG4ucHJvdmlkZXIoJyR1aWJUb29sdGlwJywgZnVuY3Rpb24oKSB7XG4gIC8vIFRoZSBkZWZhdWx0IG9wdGlvbnMgdG9vbHRpcCBhbmQgcG9wb3Zlci5cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgcGxhY2VtZW50Q2xhc3NQcmVmaXg6ICcnLFxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBwb3B1cERlbGF5OiAwLFxuICAgIHBvcHVwQ2xvc2VEZWxheTogMCxcbiAgICB1c2VDb250ZW50RXhwOiBmYWxzZVxuICB9O1xuXG4gIC8vIERlZmF1bHQgaGlkZSB0cmlnZ2VycyBmb3IgZWFjaCBzaG93IHRyaWdnZXJcbiAgdmFyIHRyaWdnZXJNYXAgPSB7XG4gICAgJ21vdXNlZW50ZXInOiAnbW91c2VsZWF2ZScsXG4gICAgJ2NsaWNrJzogJ2NsaWNrJyxcbiAgICAnb3V0c2lkZUNsaWNrJzogJ291dHNpZGVDbGljaycsXG4gICAgJ2ZvY3VzJzogJ2JsdXInLFxuICAgICdub25lJzogJydcbiAgfTtcblxuICAvLyBUaGUgb3B0aW9ucyBzcGVjaWZpZWQgdG8gdGhlIHByb3ZpZGVyIGdsb2JhbGx5LlxuICB2YXIgZ2xvYmFsT3B0aW9ucyA9IHt9O1xuXG4gIC8qKlxuICAgKiBgb3B0aW9ucyh7fSlgIGFsbG93cyBnbG9iYWwgY29uZmlndXJhdGlvbiBvZiBhbGwgdG9vbHRpcHMgaW4gdGhlXG4gICAqIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSggJ0FwcCcsIFsndWkuYm9vdHN0cmFwLnRvb2x0aXAnXSwgZnVuY3Rpb24oICR0b29sdGlwUHJvdmlkZXIgKSB7XG4gICAqICAgICAvLyBwbGFjZSB0b29sdGlwcyBsZWZ0IGluc3RlYWQgb2YgdG9wIGJ5IGRlZmF1bHRcbiAgICogICAgICR0b29sdGlwUHJvdmlkZXIub3B0aW9ucyggeyBwbGFjZW1lbnQ6ICdsZWZ0JyB9ICk7XG4gICAqICAgfSk7XG4gICAqL1xuXHR0aGlzLm9wdGlvbnMgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGFuZ3VsYXIuZXh0ZW5kKGdsb2JhbE9wdGlvbnMsIHZhbHVlKTtcblx0fTtcblxuICAvKipcbiAgICogVGhpcyBhbGxvd3MgeW91IHRvIGV4dGVuZCB0aGUgc2V0IG9mIHRyaWdnZXIgbWFwcGluZ3MgYXZhaWxhYmxlLiBFLmcuOlxuICAgKlxuICAgKiAgICR0b29sdGlwUHJvdmlkZXIuc2V0VHJpZ2dlcnMoIHsgJ29wZW5UcmlnZ2VyJzogJ2Nsb3NlVHJpZ2dlcicgfSApO1xuICAgKi9cbiAgdGhpcy5zZXRUcmlnZ2VycyA9IGZ1bmN0aW9uIHNldFRyaWdnZXJzKHRyaWdnZXJzKSB7XG4gICAgYW5ndWxhci5leHRlbmQodHJpZ2dlck1hcCwgdHJpZ2dlcnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIGZvciB0cmFuc2xhdGluZyBjYW1lbC1jYXNlIHRvIHNuYWtlX2Nhc2UuXG4gICAqL1xuICBmdW5jdGlvbiBzbmFrZV9jYXNlKG5hbWUpIHtcbiAgICB2YXIgcmVnZXhwID0gL1tBLVpdL2c7XG4gICAgdmFyIHNlcGFyYXRvciA9ICctJztcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKHJlZ2V4cCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcbiAgICAgIHJldHVybiAocG9zID8gc2VwYXJhdG9yIDogJycpICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWN0dWFsIGluc3RhbmNlIG9mIHRoZSAkdG9vbHRpcCBzZXJ2aWNlLlxuICAgKiBUT0RPIHN1cHBvcnQgbXVsdGlwbGUgdHJpZ2dlcnNcbiAgICovXG4gIHRoaXMuJGdldCA9IFsnJHdpbmRvdycsICckY29tcGlsZScsICckdGltZW91dCcsICckZG9jdW1lbnQnLCAnJHVpYlBvc2l0aW9uJywgJyRpbnRlcnBvbGF0ZScsICckcm9vdFNjb3BlJywgJyRwYXJzZScsICckJHN0YWNrZWRNYXAnLCBmdW5jdGlvbigkd2luZG93LCAkY29tcGlsZSwgJHRpbWVvdXQsICRkb2N1bWVudCwgJHBvc2l0aW9uLCAkaW50ZXJwb2xhdGUsICRyb290U2NvcGUsICRwYXJzZSwgJCRzdGFja2VkTWFwKSB7XG4gICAgdmFyIG9wZW5lZFRvb2x0aXBzID0gJCRzdGFja2VkTWFwLmNyZWF0ZU5ldygpO1xuICAgICRkb2N1bWVudC5vbigna2V5dXAnLCBrZXlwcmVzc0xpc3RlbmVyKTtcblxuICAgICRyb290U2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgJGRvY3VtZW50Lm9mZigna2V5dXAnLCBrZXlwcmVzc0xpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGtleXByZXNzTGlzdGVuZXIoZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT09IDI3KSB7XG4gICAgICAgIHZhciBsYXN0ID0gb3BlbmVkVG9vbHRpcHMudG9wKCk7XG4gICAgICAgIGlmIChsYXN0KSB7XG4gICAgICAgICAgbGFzdC52YWx1ZS5jbG9zZSgpO1xuICAgICAgICAgIGxhc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICR0b29sdGlwKHR0VHlwZSwgcHJlZml4LCBkZWZhdWx0VHJpZ2dlclNob3csIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIGdsb2JhbE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHNob3cgYW5kIGhpZGUgdHJpZ2dlcnMuXG4gICAgICAgKlxuICAgICAgICogSWYgYSB0cmlnZ2VyIGlzIHN1cHBsaWVkLFxuICAgICAgICogaXQgaXMgdXNlZCB0byBzaG93IHRoZSB0b29sdGlwOyBvdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdHJpZ2dlcmBcbiAgICAgICAqIG9wdGlvbiBwYXNzZWQgdG8gdGhlIGAkdG9vbHRpcFByb3ZpZGVyLm9wdGlvbnNgIG1ldGhvZDsgZWxzZSBpdCB3aWxsXG4gICAgICAgKiBkZWZhdWx0IHRvIHRoZSB0cmlnZ2VyIHN1cHBsaWVkIHRvIHRoaXMgZGlyZWN0aXZlIGZhY3RvcnkuXG4gICAgICAgKlxuICAgICAgICogVGhlIGhpZGUgdHJpZ2dlciBpcyBiYXNlZCBvbiB0aGUgc2hvdyB0cmlnZ2VyLiBJZiB0aGUgYHRyaWdnZXJgIG9wdGlvblxuICAgICAgICogd2FzIHBhc3NlZCB0byB0aGUgYCR0b29sdGlwUHJvdmlkZXIub3B0aW9uc2AgbWV0aG9kLCBpdCB3aWxsIHVzZSB0aGVcbiAgICAgICAqIG1hcHBlZCB0cmlnZ2VyIGZyb20gYHRyaWdnZXJNYXBgIG9yIHRoZSBwYXNzZWQgdHJpZ2dlciBpZiB0aGUgbWFwIGlzXG4gICAgICAgKiB1bmRlZmluZWQ7IG90aGVyd2lzZSwgaXQgdXNlcyB0aGUgYHRyaWdnZXJNYXBgIHZhbHVlIG9mIHRoZSBzaG93XG4gICAgICAgKiB0cmlnZ2VyOyBlbHNlIGl0IHdpbGwganVzdCB1c2UgdGhlIHNob3cgdHJpZ2dlci5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0VHJpZ2dlcnModHJpZ2dlcikge1xuICAgICAgICB2YXIgc2hvdyA9ICh0cmlnZ2VyIHx8IG9wdGlvbnMudHJpZ2dlciB8fCBkZWZhdWx0VHJpZ2dlclNob3cpLnNwbGl0KCcgJyk7XG4gICAgICAgIHZhciBoaWRlID0gc2hvdy5tYXAoZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyTWFwW3RyaWdnZXJdIHx8IHRyaWdnZXI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNob3c6IHNob3csXG4gICAgICAgICAgaGlkZTogaGlkZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlyZWN0aXZlTmFtZSA9IHNuYWtlX2Nhc2UodHRUeXBlKTtcblxuICAgICAgdmFyIHN0YXJ0U3ltID0gJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCk7XG4gICAgICB2YXIgZW5kU3ltID0gJGludGVycG9sYXRlLmVuZFN5bWJvbCgpO1xuICAgICAgdmFyIHRlbXBsYXRlID1cbiAgICAgICAgJzxkaXYgJysgZGlyZWN0aXZlTmFtZSArICctcG9wdXAgJyArXG4gICAgICAgICAgJ3VpYi10aXRsZT1cIicgKyBzdGFydFN5bSArICd0aXRsZScgKyBlbmRTeW0gKyAnXCIgJyArXG4gICAgICAgICAgKG9wdGlvbnMudXNlQ29udGVudEV4cCA/XG4gICAgICAgICAgICAnY29udGVudC1leHA9XCJjb250ZW50RXhwKClcIiAnIDpcbiAgICAgICAgICAgICdjb250ZW50PVwiJyArIHN0YXJ0U3ltICsgJ2NvbnRlbnQnICsgZW5kU3ltICsgJ1wiICcpICtcbiAgICAgICAgICAnb3JpZ2luLXNjb3BlPVwib3JpZ1Njb3BlXCIgJyArXG4gICAgICAgICAgJ2NsYXNzPVwidWliLXBvc2l0aW9uLW1lYXN1cmUgJyArIHByZWZpeCArICdcIiAnICtcbiAgICAgICAgICAndG9vbHRpcC1hbmltYXRpb24tY2xhc3M9XCJmYWRlXCInICtcbiAgICAgICAgICAndWliLXRvb2x0aXAtY2xhc3NlcyAnICtcbiAgICAgICAgICAnbmctY2xhc3M9XCJ7IGluOiBpc09wZW4gfVwiICcgK1xuICAgICAgICAgICc+JyArXG4gICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21waWxlOiBmdW5jdGlvbih0RWxlbSwgdEF0dHJzKSB7XG4gICAgICAgICAgdmFyIHRvb2x0aXBMaW5rZXIgPSAkY29tcGlsZSh0ZW1wbGF0ZSk7XG5cbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHRvb2x0aXBDdHJsKSB7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcDtcbiAgICAgICAgICAgIHZhciB0b29sdGlwTGlua2VkU2NvcGU7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvblRpbWVvdXQ7XG4gICAgICAgICAgICB2YXIgc2hvd1RpbWVvdXQ7XG4gICAgICAgICAgICB2YXIgaGlkZVRpbWVvdXQ7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb25UaW1lb3V0O1xuICAgICAgICAgICAgdmFyIGFkanVzdG1lbnRUaW1lb3V0O1xuICAgICAgICAgICAgdmFyIGFwcGVuZFRvQm9keSA9IGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMuYXBwZW5kVG9Cb2R5KSA/IG9wdGlvbnMuYXBwZW5kVG9Cb2R5IDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgdHJpZ2dlcnMgPSBnZXRUcmlnZ2Vycyh1bmRlZmluZWQpO1xuICAgICAgICAgICAgdmFyIGhhc0VuYWJsZUV4cCA9IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzW3ByZWZpeCArICdFbmFibGUnXSk7XG4gICAgICAgICAgICB2YXIgdHRTY29wZSA9IHNjb3BlLiRuZXcodHJ1ZSk7XG4gICAgICAgICAgICB2YXIgcmVwb3NpdGlvblNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlzT3BlblBhcnNlID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnNbcHJlZml4ICsgJ0lzT3BlbiddKSA/ICRwYXJzZShhdHRyc1twcmVmaXggKyAnSXNPcGVuJ10pIDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgY29udGVudFBhcnNlID0gb3B0aW9ucy51c2VDb250ZW50RXhwID8gJHBhcnNlKGF0dHJzW3R0VHlwZV0pIDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gW107XG4gICAgICAgICAgICB2YXIgbGFzdFBsYWNlbWVudDtcblxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uVG9vbHRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0b29sdGlwIGV4aXN0cyBhbmQgaXMgbm90IGVtcHR5XG4gICAgICAgICAgICAgIGlmICghdG9vbHRpcCB8fCAhdG9vbHRpcC5odG1sKCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgaWYgKCFwb3NpdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblRpbWVvdXQgPSAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0dFBvc2l0aW9uID0gJHBvc2l0aW9uLnBvc2l0aW9uRWxlbWVudHMoZWxlbWVudCwgdG9vbHRpcCwgdHRTY29wZS5wbGFjZW1lbnQsIGFwcGVuZFRvQm9keSk7XG4gICAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbEhlaWdodCA9IGFuZ3VsYXIuaXNEZWZpbmVkKHRvb2x0aXAub2Zmc2V0SGVpZ2h0KSA/IHRvb2x0aXAub2Zmc2V0SGVpZ2h0IDogdG9vbHRpcC5wcm9wKCdvZmZzZXRIZWlnaHQnKTtcbiAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50UG9zID0gYXBwZW5kVG9Cb2R5ID8gJHBvc2l0aW9uLm9mZnNldChlbGVtZW50KSA6ICRwb3NpdGlvbi5wb3NpdGlvbihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXAuY3NzKHsgdG9wOiB0dFBvc2l0aW9uLnRvcCArICdweCcsIGxlZnQ6IHR0UG9zaXRpb24ubGVmdCArICdweCcgfSk7XG4gICAgICAgICAgICAgICAgICB2YXIgcGxhY2VtZW50Q2xhc3NlcyA9IHR0UG9zaXRpb24ucGxhY2VtZW50LnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdG9vbHRpcC5oYXNDbGFzcyhwbGFjZW1lbnRDbGFzc2VzWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLnJlbW92ZUNsYXNzKGxhc3RQbGFjZW1lbnQuc3BsaXQoJy0nKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuYWRkQ2xhc3MocGxhY2VtZW50Q2xhc3Nlc1swXSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdG9vbHRpcC5oYXNDbGFzcyhvcHRpb25zLnBsYWNlbWVudENsYXNzUHJlZml4ICsgdHRQb3NpdGlvbi5wbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAucmVtb3ZlQ2xhc3Mob3B0aW9ucy5wbGFjZW1lbnRDbGFzc1ByZWZpeCArIGxhc3RQbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLmFkZENsYXNzKG9wdGlvbnMucGxhY2VtZW50Q2xhc3NQcmVmaXggKyB0dFBvc2l0aW9uLnBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnRUaW1lb3V0ID0gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gYW5ndWxhci5pc0RlZmluZWQodG9vbHRpcC5vZmZzZXRIZWlnaHQpID8gdG9vbHRpcC5vZmZzZXRIZWlnaHQgOiB0b29sdGlwLnByb3AoJ29mZnNldEhlaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9ICRwb3NpdGlvbi5hZGp1c3RUb3AocGxhY2VtZW50Q2xhc3NlcywgZWxlbWVudFBvcywgaW5pdGlhbEhlaWdodCwgY3VycmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGp1c3RtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5jc3MoYWRqdXN0bWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgfSwgMCwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHRocm91Z2ggdHQgZWxlbWVudCB3aWxsIGhhdmUgdGhlXG4gICAgICAgICAgICAgICAgICAvLyB1aWItcG9zaXRpb24tbWVhc3VyZSBjbGFzcyBvciBpZiB0aGUgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAvLyBoYXMgY2hhbmdlZCB3ZSBuZWVkIHRvIHBvc2l0aW9uIHRoZSBhcnJvdy5cbiAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwLmhhc0NsYXNzKCd1aWItcG9zaXRpb24tbWVhc3VyZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICRwb3NpdGlvbi5wb3NpdGlvbkFycm93KHRvb2x0aXAsIHR0UG9zaXRpb24ucGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5yZW1vdmVDbGFzcygndWliLXBvc2l0aW9uLW1lYXN1cmUnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdFBsYWNlbWVudCAhPT0gdHRQb3NpdGlvbi5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHBvc2l0aW9uLnBvc2l0aW9uQXJyb3codG9vbHRpcCwgdHRQb3NpdGlvbi5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFzdFBsYWNlbWVudCA9IHR0UG9zaXRpb24ucGxhY2VtZW50O1xuXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2V0IHVwIHRoZSBjb3JyZWN0IHNjb3BlIHRvIGFsbG93IHRyYW5zY2x1c2lvbiBsYXRlclxuICAgICAgICAgICAgdHRTY29wZS5vcmlnU2NvcGUgPSBzY29wZTtcblxuICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgdGhlIHRvb2x0aXAgaXMgbm90IG9wZW4uXG4gICAgICAgICAgICAvLyBUT0RPIGFkZCBhYmlsaXR5IHRvIHN0YXJ0IHRvb2x0aXAgb3BlbmVkXG4gICAgICAgICAgICB0dFNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB0b2dnbGVUb29sdGlwQmluZCgpIHtcbiAgICAgICAgICAgICAgaWYgKCF0dFNjb3BlLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHNob3dUb29sdGlwQmluZCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpZGVUb29sdGlwQmluZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHRvb2x0aXAgd2l0aCBkZWxheSBpZiBzcGVjaWZpZWQsIG90aGVyd2lzZSBzaG93IGl0IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93VG9vbHRpcEJpbmQoKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNFbmFibGVFeHAgJiYgIXNjb3BlLiRldmFsKGF0dHJzW3ByZWZpeCArICdFbmFibGUnXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjYW5jZWxIaWRlKCk7XG4gICAgICAgICAgICAgIHByZXBhcmVUb29sdGlwKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHR0U2NvcGUucG9wdXBEZWxheSkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIHRvb2x0aXAgd2FzIGFscmVhZHkgc2NoZWR1bGVkIHRvIHBvcC11cC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgaWYgc2hvdyBpcyB0cmlnZ2VyZWQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIGFueSBoaWRlIGlzIHRyaWdnZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoIXNob3dUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICBzaG93VGltZW91dCA9ICR0aW1lb3V0KHNob3csIHR0U2NvcGUucG9wdXBEZWxheSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaG93KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGlkZVRvb2x0aXBCaW5kKCkge1xuICAgICAgICAgICAgICBjYW5jZWxTaG93KCk7XG5cbiAgICAgICAgICAgICAgaWYgKHR0U2NvcGUucG9wdXBDbG9zZURlbGF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSAkdGltZW91dChoaWRlLCB0dFNjb3BlLnBvcHVwQ2xvc2VEZWxheSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaWRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdG9vbHRpcCBwb3B1cCBlbGVtZW50LlxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgICAgICAgY2FuY2VsU2hvdygpO1xuICAgICAgICAgICAgICBjYW5jZWxIaWRlKCk7XG5cbiAgICAgICAgICAgICAgLy8gRG9uJ3Qgc2hvdyBlbXB0eSB0b29sdGlwcy5cbiAgICAgICAgICAgICAgaWYgKCF0dFNjb3BlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5ub29wO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY3JlYXRlVG9vbHRpcCgpO1xuXG4gICAgICAgICAgICAgIC8vIEFuZCBzaG93IHRoZSB0b29sdGlwLlxuICAgICAgICAgICAgICB0dFNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdHRTY29wZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFzc2lnbklzT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblRvb2x0aXAoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbFNob3coKSB7XG4gICAgICAgICAgICAgIGlmIChzaG93VGltZW91dCkge1xuICAgICAgICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChzaG93VGltZW91dCk7XG4gICAgICAgICAgICAgICAgc2hvd1RpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChwb3NpdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGlkZSB0aGUgdG9vbHRpcCBwb3B1cCBlbGVtZW50LlxuICAgICAgICAgICAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgICAgICAgaWYgKCF0dFNjb3BlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRmlyc3QgdGhpbmdzIGZpcnN0OiB3ZSBkb24ndCBzaG93IGl0IGFueW1vcmUuXG4gICAgICAgICAgICAgIHR0U2NvcGUuJGV2YWxBc3luYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodHRTY29wZSkge1xuICAgICAgICAgICAgICAgICAgdHRTY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGFzc2lnbklzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAvLyBBbmQgbm93IHdlIHJlbW92ZSBpdCBmcm9tIHRoZSBET00uIEhvd2V2ZXIsIGlmIHdlIGhhdmUgYW5pbWF0aW9uLCB3ZVxuICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byB3YWl0IGZvciBpdCB0byBleHBpcmUgYmVmb3JlaGFuZC5cbiAgICAgICAgICAgICAgICAgIC8vIEZJWE1FOiB0aGlzIGlzIGEgcGxhY2Vob2xkZXIgZm9yIGEgcG9ydCBvZiB0aGUgdHJhbnNpdGlvbnMgbGlicmFyeS5cbiAgICAgICAgICAgICAgICAgIC8vIFRoZSBmYWRlIHRyYW5zaXRpb24gaW4gVFdCUyBpcyAxNTBtcy5cbiAgICAgICAgICAgICAgICAgIGlmICh0dFNjb3BlLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zaXRpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblRpbWVvdXQgPSAkdGltZW91dChyZW1vdmVUb29sdGlwLCAxNTAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEhpZGUoKSB7XG4gICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQuY2FuY2VsKHRyYW5zaXRpb25UaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCgpIHtcbiAgICAgICAgICAgICAgLy8gVGhlcmUgY2FuIG9ubHkgYmUgb25lIHRvb2x0aXAgZWxlbWVudCBwZXIgZGlyZWN0aXZlIHNob3duIGF0IG9uY2UuXG4gICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdG9vbHRpcExpbmtlZFNjb3BlID0gdHRTY29wZS4kbmV3KCk7XG4gICAgICAgICAgICAgIHRvb2x0aXAgPSB0b29sdGlwTGlua2VyKHRvb2x0aXBMaW5rZWRTY29wZSwgZnVuY3Rpb24odG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIGlmIChhcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgICAgICAgICAgICRkb2N1bWVudC5maW5kKCdib2R5JykuYXBwZW5kKHRvb2x0aXApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmFmdGVyKHRvb2x0aXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgb3BlbmVkVG9vbHRpcHMuYWRkKHR0U2NvcGUsIHtcbiAgICAgICAgICAgICAgICBjbG9zZTogaGlkZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBwcmVwT2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXAoKSB7XG4gICAgICAgICAgICAgIGNhbmNlbFNob3coKTtcbiAgICAgICAgICAgICAgY2FuY2VsSGlkZSgpO1xuICAgICAgICAgICAgICB1bnJlZ2lzdGVyT2JzZXJ2ZXJzKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvb2x0aXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChhZGp1c3RtZW50VGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgJHRpbWVvdXQuY2FuY2VsKGFkanVzdG1lbnRUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvcGVuZWRUb29sdGlwcy5yZW1vdmUodHRTY29wZSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAodG9vbHRpcExpbmtlZFNjb3BlKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcExpbmtlZFNjb3BlLiRkZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdG9vbHRpcExpbmtlZFNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldCB0aGUgaW5pdGlhbCBzY29wZSB2YWx1ZXMuIE9uY2VcbiAgICAgICAgICAgICAqIHRoZSB0b29sdGlwIGlzIGNyZWF0ZWQsIHRoZSBvYnNlcnZlcnNcbiAgICAgICAgICAgICAqIHdpbGwgYmUgYWRkZWQgdG8ga2VlcCB0aGluZ3MgaW4gc3luYy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gcHJlcGFyZVRvb2x0aXAoKSB7XG4gICAgICAgICAgICAgIHR0U2NvcGUudGl0bGUgPSBhdHRyc1twcmVmaXggKyAnVGl0bGUnXTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnRQYXJzZSkge1xuICAgICAgICAgICAgICAgIHR0U2NvcGUuY29udGVudCA9IGNvbnRlbnRQYXJzZShzY29wZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHRTY29wZS5jb250ZW50ID0gYXR0cnNbdHRUeXBlXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHR0U2NvcGUucG9wdXBDbGFzcyA9IGF0dHJzW3ByZWZpeCArICdDbGFzcyddO1xuICAgICAgICAgICAgICB0dFNjb3BlLnBsYWNlbWVudCA9IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzW3ByZWZpeCArICdQbGFjZW1lbnQnXSkgPyBhdHRyc1twcmVmaXggKyAnUGxhY2VtZW50J10gOiBvcHRpb25zLnBsYWNlbWVudDtcbiAgICAgICAgICAgICAgdmFyIHBsYWNlbWVudCA9ICRwb3NpdGlvbi5wYXJzZVBsYWNlbWVudCh0dFNjb3BlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICAgIGxhc3RQbGFjZW1lbnQgPSBwbGFjZW1lbnRbMV0gPyBwbGFjZW1lbnRbMF0gKyAnLScgKyBwbGFjZW1lbnRbMV0gOiBwbGFjZW1lbnRbMF07XG5cbiAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gcGFyc2VJbnQoYXR0cnNbcHJlZml4ICsgJ1BvcHVwRGVsYXknXSwgMTApO1xuICAgICAgICAgICAgICB2YXIgY2xvc2VEZWxheSA9IHBhcnNlSW50KGF0dHJzW3ByZWZpeCArICdQb3B1cENsb3NlRGVsYXknXSwgMTApO1xuICAgICAgICAgICAgICB0dFNjb3BlLnBvcHVwRGVsYXkgPSAhaXNOYU4oZGVsYXkpID8gZGVsYXkgOiBvcHRpb25zLnBvcHVwRGVsYXk7XG4gICAgICAgICAgICAgIHR0U2NvcGUucG9wdXBDbG9zZURlbGF5ID0gIWlzTmFOKGNsb3NlRGVsYXkpID8gY2xvc2VEZWxheSA6IG9wdGlvbnMucG9wdXBDbG9zZURlbGF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhc3NpZ25Jc09wZW4oaXNPcGVuKSB7XG4gICAgICAgICAgICAgIGlmIChpc09wZW5QYXJzZSAmJiBhbmd1bGFyLmlzRnVuY3Rpb24oaXNPcGVuUGFyc2UuYXNzaWduKSkge1xuICAgICAgICAgICAgICAgIGlzT3BlblBhcnNlLmFzc2lnbihzY29wZSwgaXNPcGVuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0dFNjb3BlLmNvbnRlbnRFeHAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHR0U2NvcGUuY29udGVudDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT2JzZXJ2ZSB0aGUgcmVsZXZhbnQgYXR0cmlidXRlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYXR0cnMuJG9ic2VydmUoJ2Rpc2FibGVkJywgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxTaG93KCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodmFsICYmIHR0U2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGlzT3BlblBhcnNlKSB7XG4gICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChpc09wZW5QYXJzZSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR0U2NvcGUgJiYgIXZhbCA9PT0gdHRTY29wZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZVRvb2x0aXBCaW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcHJlcE9ic2VydmVycygpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnRQYXJzZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5wdXNoKFxuICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGNvbnRlbnRQYXJzZSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHR0U2NvcGUuY29udGVudCA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWwgJiYgdHRTY29wZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICBoaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG9ic2VydmVycy5wdXNoKFxuICAgICAgICAgICAgICAgICAgdG9vbHRpcExpbmtlZFNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXBvc2l0aW9uU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVwb3NpdGlvblNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcExpbmtlZFNjb3BlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9zaXRpb25TY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0dFNjb3BlICYmIHR0U2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJzLnB1c2goXG4gICAgICAgICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZSh0dFR5cGUsIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0dFNjb3BlLmNvbnRlbnQgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsICYmIHR0U2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvYnNlcnZlcnMucHVzaChcbiAgICAgICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZShwcmVmaXggKyAnVGl0bGUnLCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgIHR0U2NvcGUudGl0bGUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICBpZiAodHRTY29wZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Ub29sdGlwKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBvYnNlcnZlcnMucHVzaChcbiAgICAgICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZShwcmVmaXggKyAnUGxhY2VtZW50JywgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICB0dFNjb3BlLnBsYWNlbWVudCA9IHZhbCA/IHZhbCA6IG9wdGlvbnMucGxhY2VtZW50O1xuICAgICAgICAgICAgICAgICAgaWYgKHR0U2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVucmVnaXN0ZXJPYnNlcnZlcnMoKSB7XG4gICAgICAgICAgICAgIGlmIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG9ic2VydmVycywgZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaGlkZSB0b29sdGlwcy9wb3BvdmVycyBmb3Igb3V0c2lkZUNsaWNrIHRyaWdnZXJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJvZHlIaWRlVG9vbHRpcEJpbmQoZSkge1xuICAgICAgICAgICAgICBpZiAoIXR0U2NvcGUgfHwgIXR0U2NvcGUuaXNPcGVuIHx8ICF0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgdG9vbHRpcC9wb3BvdmVyIGxpbmsgb3IgdG9vbCB0b29sdGlwL3BvcG92ZXIgaXRzZWxmIHdlcmUgbm90IGNsaWNrZWRcbiAgICAgICAgICAgICAgaWYgKCFlbGVtZW50WzBdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhdG9vbHRpcFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBoaWRlVG9vbHRpcEJpbmQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBLZXlib2FyZEV2ZW50IGhhbmRsZXIgdG8gaGlkZSB0aGUgdG9vbHRpcCBvbiBFc2NhcGUga2V5IHByZXNzXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWRlT25Fc2NhcGVLZXkoZSkge1xuICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBoaWRlVG9vbHRpcEJpbmQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdW5yZWdpc3RlclRyaWdnZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJzLnNob3cuZm9yRWFjaChmdW5jdGlvbih0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdvdXRzaWRlQ2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50Lm9mZignY2xpY2snLCB0b2dnbGVUb29sdGlwQmluZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQub2ZmKHRyaWdnZXIsIHNob3dUb29sdGlwQmluZCk7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50Lm9mZih0cmlnZ2VyLCB0b2dnbGVUb29sdGlwQmluZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQub2ZmKCdrZXlwcmVzcycsIGhpZGVPbkVzY2FwZUtleSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0cmlnZ2Vycy5oaWRlLmZvckVhY2goZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyID09PSAnb3V0c2lkZUNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgJGRvY3VtZW50Lm9mZignY2xpY2snLCBib2R5SGlkZVRvb2x0aXBCaW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZWxlbWVudC5vZmYodHJpZ2dlciwgaGlkZVRvb2x0aXBCaW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcHJlcFRyaWdnZXJzKCkge1xuICAgICAgICAgICAgICB2YXIgc2hvd1RyaWdnZXJzID0gW10sIGhpZGVUcmlnZ2VycyA9IFtdO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gc2NvcGUuJGV2YWwoYXR0cnNbcHJlZml4ICsgJ1RyaWdnZXInXSk7XG4gICAgICAgICAgICAgIHVucmVnaXN0ZXJUcmlnZ2VycygpO1xuXG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICBzaG93VHJpZ2dlcnMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgaGlkZVRyaWdnZXJzLnB1c2godmFsW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJzID0ge1xuICAgICAgICAgICAgICAgICAgc2hvdzogc2hvd1RyaWdnZXJzLFxuICAgICAgICAgICAgICAgICAgaGlkZTogaGlkZVRyaWdnZXJzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VycyA9IGdldFRyaWdnZXJzKHZhbCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodHJpZ2dlcnMuc2hvdyAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcnMuc2hvdy5mb3JFYWNoKGZ1bmN0aW9uKHRyaWdnZXIsIGlkeCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdvdXRzaWRlQ2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgdG9nZ2xlVG9vbHRpcEJpbmQpO1xuICAgICAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oJ2NsaWNrJywgYm9keUhpZGVUb29sdGlwQmluZCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09IHRyaWdnZXJzLmhpZGVbaWR4XSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uKHRyaWdnZXIsIHRvZ2dsZVRvb2x0aXBCaW5kKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uKHRyaWdnZXIsIHNob3dUb29sdGlwQmluZCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub24odHJpZ2dlcnMuaGlkZVtpZHhdLCBoaWRlVG9vbHRpcEJpbmQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbigna2V5cHJlc3MnLCBoaWRlT25Fc2NhcGVLZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXBUcmlnZ2VycygpO1xuXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gc2NvcGUuJGV2YWwoYXR0cnNbcHJlZml4ICsgJ0FuaW1hdGlvbiddKTtcbiAgICAgICAgICAgIHR0U2NvcGUuYW5pbWF0aW9uID0gYW5ndWxhci5pc0RlZmluZWQoYW5pbWF0aW9uKSA/ICEhYW5pbWF0aW9uIDogb3B0aW9ucy5hbmltYXRpb247XG5cbiAgICAgICAgICAgIHZhciBhcHBlbmRUb0JvZHlWYWw7XG4gICAgICAgICAgICB2YXIgYXBwZW5kS2V5ID0gcHJlZml4ICsgJ0FwcGVuZFRvQm9keSc7XG4gICAgICAgICAgICBpZiAoYXBwZW5kS2V5IGluIGF0dHJzICYmIGF0dHJzW2FwcGVuZEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBhcHBlbmRUb0JvZHlWYWwgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXBwZW5kVG9Cb2R5VmFsID0gc2NvcGUuJGV2YWwoYXR0cnNbYXBwZW5kS2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcGVuZFRvQm9keSA9IGFuZ3VsYXIuaXNEZWZpbmVkKGFwcGVuZFRvQm9keVZhbCkgPyBhcHBlbmRUb0JvZHlWYWwgOiBhcHBlbmRUb0JvZHk7XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0b29sdGlwIGlzIGRlc3Ryb3llZCBhbmQgcmVtb3ZlZC5cbiAgICAgICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiBvbkRlc3Ryb3lUb29sdGlwKCkge1xuICAgICAgICAgICAgICB1bnJlZ2lzdGVyVHJpZ2dlcnMoKTtcbiAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgICAgICAgICB0dFNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfV07XG59KVxuXG4vLyBUaGlzIGlzIG1vc3RseSBuZ0luY2x1ZGUgY29kZSBidXQgd2l0aCBhIGN1c3RvbSBzY29wZVxuLmRpcmVjdGl2ZSgndWliVG9vbHRpcFRlbXBsYXRlVHJhbnNjbHVkZScsIFtcbiAgICAgICAgICckYW5pbWF0ZScsICckc2NlJywgJyRjb21waWxlJywgJyR0ZW1wbGF0ZVJlcXVlc3QnLFxuZnVuY3Rpb24gKCRhbmltYXRlLCAkc2NlLCAkY29tcGlsZSwgJHRlbXBsYXRlUmVxdWVzdCkge1xuICByZXR1cm4ge1xuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgdmFyIG9yaWdTY29wZSA9IHNjb3BlLiRldmFsKGF0dHJzLnRvb2x0aXBUZW1wbGF0ZVRyYW5zY2x1ZGVTY29wZSk7XG5cbiAgICAgIHZhciBjaGFuZ2VDb3VudGVyID0gMCxcbiAgICAgICAgY3VycmVudFNjb3BlLFxuICAgICAgICBwcmV2aW91c0VsZW1lbnQsXG4gICAgICAgIGN1cnJlbnRFbGVtZW50O1xuXG4gICAgICB2YXIgY2xlYW51cExhc3RJbmNsdWRlQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocHJldmlvdXNFbGVtZW50KSB7XG4gICAgICAgICAgcHJldmlvdXNFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgIHByZXZpb3VzRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNjb3BlKSB7XG4gICAgICAgICAgY3VycmVudFNjb3BlLiRkZXN0cm95KCk7XG4gICAgICAgICAgY3VycmVudFNjb3BlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICRhbmltYXRlLmxlYXZlKGN1cnJlbnRFbGVtZW50KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwcmV2aW91c0VsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNjb3BlLiR3YXRjaCgkc2NlLnBhcnNlQXNSZXNvdXJjZVVybChhdHRycy51aWJUb29sdGlwVGVtcGxhdGVUcmFuc2NsdWRlKSwgZnVuY3Rpb24oc3JjKSB7XG4gICAgICAgIHZhciB0aGlzQ2hhbmdlSWQgPSArK2NoYW5nZUNvdW50ZXI7XG5cbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgIC8vc2V0IHRoZSAybmQgcGFyYW0gdG8gdHJ1ZSB0byBpZ25vcmUgdGhlIHRlbXBsYXRlIHJlcXVlc3QgZXJyb3Igc28gdGhhdCB0aGUgaW5uZXJcbiAgICAgICAgICAvL2NvbnRlbnRzIGFuZCBzY29wZSBjYW4gYmUgY2xlYW5lZCB1cC5cbiAgICAgICAgICAkdGVtcGxhdGVSZXF1ZXN0KHNyYywgdHJ1ZSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHRoaXNDaGFuZ2VJZCAhPT0gY2hhbmdlQ291bnRlcikgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHZhciBuZXdTY29wZSA9IG9yaWdTY29wZS4kbmV3KCk7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSByZXNwb25zZTtcblxuICAgICAgICAgICAgdmFyIGNsb25lID0gJGNvbXBpbGUodGVtcGxhdGUpKG5ld1Njb3BlLCBmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgICAgICBjbGVhbnVwTGFzdEluY2x1ZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICRhbmltYXRlLmVudGVyKGNsb25lLCBlbGVtKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50U2NvcGUgPSBuZXdTY29wZTtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY2xvbmU7XG5cbiAgICAgICAgICAgIGN1cnJlbnRTY29wZS4kZW1pdCgnJGluY2x1ZGVDb250ZW50TG9hZGVkJywgc3JjKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzQ2hhbmdlSWQgPT09IGNoYW5nZUNvdW50ZXIpIHtcbiAgICAgICAgICAgICAgY2xlYW51cExhc3RJbmNsdWRlQ29udGVudCgpO1xuICAgICAgICAgICAgICBzY29wZS4kZW1pdCgnJGluY2x1ZGVDb250ZW50RXJyb3InLCBzcmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNjb3BlLiRlbWl0KCckaW5jbHVkZUNvbnRlbnRSZXF1ZXN0ZWQnLCBzcmMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFudXBMYXN0SW5jbHVkZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBjbGVhbnVwTGFzdEluY2x1ZGVDb250ZW50KTtcbiAgICB9XG4gIH07XG59XSlcblxuLyoqXG4gKiBOb3RlIHRoYXQgaXQncyBpbnRlbnRpb25hbCB0aGF0IHRoZXNlIGNsYXNzZXMgYXJlICpub3QqIGFwcGxpZWQgdGhyb3VnaCAkYW5pbWF0ZS5cbiAqIFRoZXkgbXVzdCBub3QgYmUgYW5pbWF0ZWQgYXMgdGhleSdyZSBleHBlY3RlZCB0byBiZSBwcmVzZW50IG9uIHRoZSB0b29sdGlwIG9uXG4gKiBpbml0aWFsaXphdGlvbi5cbiAqL1xuLmRpcmVjdGl2ZSgndWliVG9vbHRpcENsYXNzZXMnLCBbJyR1aWJQb3NpdGlvbicsIGZ1bmN0aW9uKCR1aWJQb3NpdGlvbikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAvLyBuZWVkIHRvIHNldCB0aGUgcHJpbWFyeSBwb3NpdGlvbiBzbyB0aGVcbiAgICAgIC8vIGFycm93IGhhcyBzcGFjZSBkdXJpbmcgcG9zaXRpb24gbWVhc3VyZS5cbiAgICAgIC8vIHRvb2x0aXAucG9zaXRpb25Ub29sdGlwKClcbiAgICAgIGlmIChzY29wZS5wbGFjZW1lbnQpIHtcbiAgICAgICAgLy8gLy8gVGhlcmUgYXJlIG5vIHRvcC1sZWZ0IGV0Yy4uLiBjbGFzc2VzXG4gICAgICAgIC8vIC8vIGluIFRXQlMsIHNvIHdlIG5lZWQgdGhlIHByaW1hcnkgcG9zaXRpb24uXG4gICAgICAgIHZhciBwb3NpdGlvbiA9ICR1aWJQb3NpdGlvbi5wYXJzZVBsYWNlbWVudChzY29wZS5wbGFjZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKHBvc2l0aW9uWzBdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjb3BlLnBvcHVwQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhzY29wZS5wb3B1cENsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjb3BlLmFuaW1hdGlvbikge1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKGF0dHJzLnRvb2x0aXBBbmltYXRpb25DbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3VpYlRvb2x0aXBQb3B1cCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgY29udGVudDogJ0AnIH0sXG4gICAgdGVtcGxhdGVVcmw6ICd1aWIvdGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLXBvcHVwLmh0bWwnXG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd1aWJUb29sdGlwJywgWyAnJHVpYlRvb2x0aXAnLCBmdW5jdGlvbigkdWliVG9vbHRpcCkge1xuICByZXR1cm4gJHVpYlRvb2x0aXAoJ3VpYlRvb2x0aXAnLCAndG9vbHRpcCcsICdtb3VzZWVudGVyJyk7XG59XSlcblxuLmRpcmVjdGl2ZSgndWliVG9vbHRpcFRlbXBsYXRlUG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGNvbnRlbnRFeHA6ICcmJywgb3JpZ2luU2NvcGU6ICcmJyB9LFxuICAgIHRlbXBsYXRlVXJsOiAndWliL3RlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC10ZW1wbGF0ZS1wb3B1cC5odG1sJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliVG9vbHRpcFRlbXBsYXRlJywgWyckdWliVG9vbHRpcCcsIGZ1bmN0aW9uKCR1aWJUb29sdGlwKSB7XG4gIHJldHVybiAkdWliVG9vbHRpcCgndWliVG9vbHRpcFRlbXBsYXRlJywgJ3Rvb2x0aXAnLCAnbW91c2VlbnRlcicsIHtcbiAgICB1c2VDb250ZW50RXhwOiB0cnVlXG4gIH0pO1xufV0pXG5cbi5kaXJlY3RpdmUoJ3VpYlRvb2x0aXBIdG1sUG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGNvbnRlbnRFeHA6ICcmJyB9LFxuICAgIHRlbXBsYXRlVXJsOiAndWliL3RlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1odG1sLXBvcHVwLmh0bWwnXG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd1aWJUb29sdGlwSHRtbCcsIFsnJHVpYlRvb2x0aXAnLCBmdW5jdGlvbigkdWliVG9vbHRpcCkge1xuICByZXR1cm4gJHVpYlRvb2x0aXAoJ3VpYlRvb2x0aXBIdG1sJywgJ3Rvb2x0aXAnLCAnbW91c2VlbnRlcicsIHtcbiAgICB1c2VDb250ZW50RXhwOiB0cnVlXG4gIH0pO1xufV0pO1xuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgZmVhdHVyZXMgYXJlIHN0aWxsIG91dHN0YW5kaW5nOiBwb3B1cCBkZWxheSwgYW5pbWF0aW9uIGFzIGFcbiAqIGZ1bmN0aW9uLCBwbGFjZW1lbnQgYXMgYSBmdW5jdGlvbiwgaW5zaWRlLCBzdXBwb3J0IGZvciBtb3JlIHRyaWdnZXJzIHRoYW5cbiAqIGp1c3QgbW91c2UgZW50ZXIvbGVhdmUsIGFuZCBzZWxlY3RvciBkZWxlZ2F0YXRpb24uXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAucG9wb3ZlcicsIFsndWkuYm9vdHN0cmFwLnRvb2x0aXAnXSlcblxuLmRpcmVjdGl2ZSgndWliUG9wb3ZlclRlbXBsYXRlUG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IHVpYlRpdGxlOiAnQCcsIGNvbnRlbnRFeHA6ICcmJywgb3JpZ2luU2NvcGU6ICcmJyB9LFxuICAgIHRlbXBsYXRlVXJsOiAndWliL3RlbXBsYXRlL3BvcG92ZXIvcG9wb3Zlci10ZW1wbGF0ZS5odG1sJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliUG9wb3ZlclRlbXBsYXRlJywgWyckdWliVG9vbHRpcCcsIGZ1bmN0aW9uKCR1aWJUb29sdGlwKSB7XG4gIHJldHVybiAkdWliVG9vbHRpcCgndWliUG9wb3ZlclRlbXBsYXRlJywgJ3BvcG92ZXInLCAnY2xpY2snLCB7XG4gICAgdXNlQ29udGVudEV4cDogdHJ1ZVxuICB9KTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJQb3BvdmVySHRtbFBvcHVwJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBjb250ZW50RXhwOiAnJicsIHVpYlRpdGxlOiAnQCcgfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXItaHRtbC5odG1sJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliUG9wb3Zlckh0bWwnLCBbJyR1aWJUb29sdGlwJywgZnVuY3Rpb24oJHVpYlRvb2x0aXApIHtcbiAgcmV0dXJuICR1aWJUb29sdGlwKCd1aWJQb3BvdmVySHRtbCcsICdwb3BvdmVyJywgJ2NsaWNrJywge1xuICAgIHVzZUNvbnRlbnRFeHA6IHRydWVcbiAgfSk7XG59XSlcblxuLmRpcmVjdGl2ZSgndWliUG9wb3ZlclBvcHVwJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyB1aWJUaXRsZTogJ0AnLCBjb250ZW50OiAnQCcgfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXIuaHRtbCdcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3VpYlBvcG92ZXInLCBbJyR1aWJUb29sdGlwJywgZnVuY3Rpb24oJHVpYlRvb2x0aXApIHtcbiAgcmV0dXJuICR1aWJUb29sdGlwKCd1aWJQb3BvdmVyJywgJ3BvcG92ZXInLCAnY2xpY2snKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5wcm9ncmVzc2JhcicsIFtdKVxuXG4uY29uc3RhbnQoJ3VpYlByb2dyZXNzQ29uZmlnJywge1xuICBhbmltYXRlOiB0cnVlLFxuICBtYXg6IDEwMFxufSlcblxuLmNvbnRyb2xsZXIoJ1VpYlByb2dyZXNzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICd1aWJQcm9ncmVzc0NvbmZpZycsIGZ1bmN0aW9uKCRzY29wZSwgJGF0dHJzLCBwcm9ncmVzc0NvbmZpZykge1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhbmltYXRlID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmFuaW1hdGUpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLmFuaW1hdGUpIDogcHJvZ3Jlc3NDb25maWcuYW5pbWF0ZTtcblxuICB0aGlzLmJhcnMgPSBbXTtcbiAgJHNjb3BlLm1heCA9IGdldE1heE9yRGVmYXVsdCgpO1xuXG4gIHRoaXMuYWRkQmFyID0gZnVuY3Rpb24oYmFyLCBlbGVtZW50LCBhdHRycykge1xuICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgZWxlbWVudC5jc3Moeyd0cmFuc2l0aW9uJzogJ25vbmUnfSk7XG4gICAgfVxuXG4gICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcblxuICAgIGJhci5tYXggPSBnZXRNYXhPckRlZmF1bHQoKTtcbiAgICBiYXIudGl0bGUgPSBhdHRycyAmJiBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy50aXRsZSkgPyBhdHRycy50aXRsZSA6ICdwcm9ncmVzc2Jhcic7XG5cbiAgICBiYXIuJHdhdGNoKCd2YWx1ZScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gICAgfSk7XG5cbiAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdG90YWxQZXJjZW50YWdlID0gc2VsZi5iYXJzLnJlZHVjZShmdW5jdGlvbih0b3RhbCwgYmFyKSB7XG4gICAgICAgIGJhci5wZXJjZW50ID0gKygxMDAgKiBiYXIudmFsdWUgLyBiYXIubWF4KS50b0ZpeGVkKDIpO1xuICAgICAgICByZXR1cm4gdG90YWwgKyBiYXIucGVyY2VudDtcbiAgICAgIH0sIDApO1xuXG4gICAgICBpZiAodG90YWxQZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICAgIGJhci5wZXJjZW50IC09IHRvdGFsUGVyY2VudGFnZSAtIDEwMDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYmFyLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgc2VsZi5yZW1vdmVCYXIoYmFyKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnJlbW92ZUJhciA9IGZ1bmN0aW9uKGJhcikge1xuICAgIHRoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYmFyKSwgMSk7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goZnVuY3Rpb24gKGJhcikge1xuICAgICAgYmFyLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vJGF0dHJzLiRvYnNlcnZlKCdtYXhQYXJhbScsIGZ1bmN0aW9uKG1heFBhcmFtKSB7XG4gICRzY29wZS4kd2F0Y2goJ21heFBhcmFtJywgZnVuY3Rpb24obWF4UGFyYW0pIHtcbiAgICBzZWxmLmJhcnMuZm9yRWFjaChmdW5jdGlvbihiYXIpIHtcbiAgICAgIGJhci5tYXggPSBnZXRNYXhPckRlZmF1bHQoKTtcbiAgICAgIGJhci5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0TWF4T3JEZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gYW5ndWxhci5pc0RlZmluZWQoJHNjb3BlLm1heFBhcmFtKSA/ICRzY29wZS5tYXhQYXJhbSA6IHByb2dyZXNzQ29uZmlnLm1heDtcbiAgfVxufV0pXG5cbi5kaXJlY3RpdmUoJ3VpYlByb2dyZXNzJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIGNvbnRyb2xsZXI6ICdVaWJQcm9ncmVzc0NvbnRyb2xsZXInLFxuICAgIHJlcXVpcmU6ICd1aWJQcm9ncmVzcycsXG4gICAgc2NvcGU6IHtcbiAgICAgIG1heFBhcmFtOiAnPT9tYXgnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgndWliQmFyJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHJlcXVpcmU6ICdedWliUHJvZ3Jlc3MnLFxuICAgIHNjb3BlOiB7XG4gICAgICB2YWx1ZTogJz0nLFxuICAgICAgdHlwZTogJ0AnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbCcsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBwcm9ncmVzc0N0cmwpIHtcbiAgICAgIHByb2dyZXNzQ3RybC5hZGRCYXIoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKTtcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd1aWJQcm9ncmVzc2JhcicsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICBjb250cm9sbGVyOiAnVWliUHJvZ3Jlc3NDb250cm9sbGVyJyxcbiAgICBzY29wZToge1xuICAgICAgdmFsdWU6ICc9JyxcbiAgICAgIG1heFBhcmFtOiAnPT9tYXgnLFxuICAgICAgdHlwZTogJ0AnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIHByb2dyZXNzQ3RybCkge1xuICAgICAgcHJvZ3Jlc3NDdHJsLmFkZEJhcihzY29wZSwgYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuY2hpbGRyZW4oKVswXSksIHt0aXRsZTogYXR0cnMudGl0bGV9KTtcbiAgICB9XG4gIH07XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5yYXRpbmcnLCBbXSlcblxuLmNvbnN0YW50KCd1aWJSYXRpbmdDb25maWcnLCB7XG4gIG1heDogNSxcbiAgc3RhdGVPbjogbnVsbCxcbiAgc3RhdGVPZmY6IG51bGwsXG4gIGVuYWJsZVJlc2V0OiB0cnVlLFxuICB0aXRsZXM6IFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnXVxufSlcblxuLmNvbnRyb2xsZXIoJ1VpYlJhdGluZ0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAndWliUmF0aW5nQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsIHJhdGluZ0NvbmZpZykge1xuICB2YXIgbmdNb2RlbEN0cmwgPSB7ICRzZXRWaWV3VmFsdWU6IGFuZ3VsYXIubm9vcCB9LFxuICAgIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKG5nTW9kZWxDdHJsXykge1xuICAgIG5nTW9kZWxDdHJsID0gbmdNb2RlbEN0cmxfO1xuICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIgPSB0aGlzLnJlbmRlcjtcblxuICAgIG5nTW9kZWxDdHJsLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA8PCAwICE9PSB2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXRlT24gPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuc3RhdGVPbikgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuc3RhdGVPbikgOiByYXRpbmdDb25maWcuc3RhdGVPbjtcbiAgICB0aGlzLnN0YXRlT2ZmID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnN0YXRlT2ZmKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5zdGF0ZU9mZikgOiByYXRpbmdDb25maWcuc3RhdGVPZmY7XG4gICAgdGhpcy5lbmFibGVSZXNldCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5lbmFibGVSZXNldCkgP1xuICAgICAgJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLmVuYWJsZVJlc2V0KSA6IHJhdGluZ0NvbmZpZy5lbmFibGVSZXNldDtcbiAgICB2YXIgdG1wVGl0bGVzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnRpdGxlcykgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMudGl0bGVzKSA6IHJhdGluZ0NvbmZpZy50aXRsZXM7XG4gICAgdGhpcy50aXRsZXMgPSBhbmd1bGFyLmlzQXJyYXkodG1wVGl0bGVzKSAmJiB0bXBUaXRsZXMubGVuZ3RoID4gMCA/XG4gICAgICB0bXBUaXRsZXMgOiByYXRpbmdDb25maWcudGl0bGVzO1xuXG4gICAgdmFyIHJhdGluZ1N0YXRlcyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5yYXRpbmdTdGF0ZXMpID9cbiAgICAgICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5yYXRpbmdTdGF0ZXMpIDpcbiAgICAgIG5ldyBBcnJheShhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubWF4KSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tYXgpIDogcmF0aW5nQ29uZmlnLm1heCk7XG4gICAgJHNjb3BlLnJhbmdlID0gdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyhyYXRpbmdTdGF0ZXMpO1xuICB9O1xuXG4gIHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHMgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHN0YXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHN0YXRlc1tpXSA9IGFuZ3VsYXIuZXh0ZW5kKHsgaW5kZXg6IGkgfSwgeyBzdGF0ZU9uOiB0aGlzLnN0YXRlT24sIHN0YXRlT2ZmOiB0aGlzLnN0YXRlT2ZmLCB0aXRsZTogdGhpcy5nZXRUaXRsZShpKSB9LCBzdGF0ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVzO1xuICB9O1xuXG4gIHRoaXMuZ2V0VGl0bGUgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLnRpdGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW2luZGV4XTtcbiAgfTtcblxuICAkc2NvcGUucmF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCEkc2NvcGUucmVhZG9ubHkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAkc2NvcGUucmFuZ2UubGVuZ3RoKSB7XG4gICAgICB2YXIgbmV3Vmlld1ZhbHVlID0gc2VsZi5lbmFibGVSZXNldCAmJiBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlID09PSB2YWx1ZSA/IDAgOiB2YWx1ZTtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUobmV3Vmlld1ZhbHVlKTtcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmVudGVyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoISRzY29wZS5yZWFkb25seSkge1xuICAgICAgJHNjb3BlLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgICRzY29wZS5vbkhvdmVyKHt2YWx1ZTogdmFsdWV9KTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudmFsdWUgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlO1xuICAgICRzY29wZS5vbkxlYXZlKCk7XG4gIH07XG5cbiAgJHNjb3BlLm9uS2V5ZG93biA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmICgvKDM3fDM4fDM5fDQwKS8udGVzdChldnQud2hpY2gpKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICRzY29wZS5yYXRlKCRzY29wZS52YWx1ZSArIChldnQud2hpY2ggPT09IDM4IHx8IGV2dC53aGljaCA9PT0gMzkgPyAxIDogLTEpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudmFsdWUgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlO1xuICAgICRzY29wZS50aXRsZSA9IHNlbGYuZ2V0VGl0bGUoJHNjb3BlLnZhbHVlIC0gMSk7XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgndWliUmF0aW5nJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogWyd1aWJSYXRpbmcnLCAnbmdNb2RlbCddLFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHtcbiAgICAgIHJlYWRvbmx5OiAnPT9yZWFkT25seScsXG4gICAgICBvbkhvdmVyOiAnJicsXG4gICAgICBvbkxlYXZlOiAnJidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdVaWJSYXRpbmdDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS9yYXRpbmcvcmF0aW5nLmh0bWwnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciByYXRpbmdDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG4gICAgICByYXRpbmdDdHJsLmluaXQobmdNb2RlbEN0cmwpO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRhYnMnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ1VpYlRhYnNldENvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgdmFyIGN0cmwgPSB0aGlzLFxuICAgIG9sZEluZGV4O1xuICBjdHJsLnRhYnMgPSBbXTtcblxuICBjdHJsLnNlbGVjdCA9IGZ1bmN0aW9uKGluZGV4LCBldnQpIHtcbiAgICBpZiAoIWRlc3Ryb3llZCkge1xuICAgICAgdmFyIHByZXZpb3VzSW5kZXggPSBmaW5kVGFiSW5kZXgob2xkSW5kZXgpO1xuICAgICAgdmFyIHByZXZpb3VzU2VsZWN0ZWQgPSBjdHJsLnRhYnNbcHJldmlvdXNJbmRleF07XG4gICAgICBpZiAocHJldmlvdXNTZWxlY3RlZCkge1xuICAgICAgICBwcmV2aW91c1NlbGVjdGVkLnRhYi5vbkRlc2VsZWN0KHtcbiAgICAgICAgICAkZXZlbnQ6IGV2dCxcbiAgICAgICAgICAkc2VsZWN0ZWRJbmRleDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChldnQgJiYgZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzU2VsZWN0ZWQudGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZWN0ZWQgPSBjdHJsLnRhYnNbaW5kZXhdO1xuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkLnRhYi5vblNlbGVjdCh7XG4gICAgICAgICAgJGV2ZW50OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdGVkLnRhYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjdHJsLmFjdGl2ZSA9IHNlbGVjdGVkLmluZGV4O1xuICAgICAgICBvbGRJbmRleCA9IHNlbGVjdGVkLmluZGV4O1xuICAgICAgfSBlbHNlIGlmICghc2VsZWN0ZWQgJiYgYW5ndWxhci5pc0RlZmluZWQob2xkSW5kZXgpKSB7XG4gICAgICAgIGN0cmwuYWN0aXZlID0gbnVsbDtcbiAgICAgICAgb2xkSW5kZXggPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjdHJsLmFkZFRhYiA9IGZ1bmN0aW9uIGFkZFRhYih0YWIpIHtcbiAgICBjdHJsLnRhYnMucHVzaCh7XG4gICAgICB0YWI6IHRhYixcbiAgICAgIGluZGV4OiB0YWIuaW5kZXhcbiAgICB9KTtcbiAgICBjdHJsLnRhYnMuc29ydChmdW5jdGlvbih0MSwgdDIpIHtcbiAgICAgIGlmICh0MS5pbmRleCA+IHQyLmluZGV4KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAodDEuaW5kZXggPCB0Mi5pbmRleCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgaWYgKHRhYi5pbmRleCA9PT0gY3RybC5hY3RpdmUgfHwgIWFuZ3VsYXIuaXNEZWZpbmVkKGN0cmwuYWN0aXZlKSAmJiBjdHJsLnRhYnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBmaW5kVGFiSW5kZXgodGFiLmluZGV4KTtcbiAgICAgIGN0cmwuc2VsZWN0KG5ld0FjdGl2ZUluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY3RybC5yZW1vdmVUYWIgPSBmdW5jdGlvbiByZW1vdmVUYWIodGFiKSB7XG4gICAgdmFyIGluZGV4O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3RybC50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY3RybC50YWJzW2ldLnRhYiA9PT0gdGFiKSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN0cmwudGFic1tpbmRleF0uaW5kZXggPT09IGN0cmwuYWN0aXZlKSB7XG4gICAgICB2YXIgbmV3QWN0aXZlVGFiSW5kZXggPSBpbmRleCA9PT0gY3RybC50YWJzLmxlbmd0aCAtIDEgP1xuICAgICAgICBpbmRleCAtIDEgOiBpbmRleCArIDEgJSBjdHJsLnRhYnMubGVuZ3RoO1xuICAgICAgY3RybC5zZWxlY3QobmV3QWN0aXZlVGFiSW5kZXgpO1xuICAgIH1cblxuICAgIGN0cmwudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gICRzY29wZS4kd2F0Y2goJ3RhYnNldC5hY3RpdmUnLCBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodmFsKSAmJiB2YWwgIT09IG9sZEluZGV4KSB7XG4gICAgICBjdHJsLnNlbGVjdChmaW5kVGFiSW5kZXgodmFsKSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZGVzdHJveWVkO1xuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGZpbmRUYWJJbmRleChpbmRleCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3RybC50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY3RybC50YWJzW2ldLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJUYWJzZXQnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgc2NvcGU6IHt9LFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgIGFjdGl2ZTogJz0/JyxcbiAgICAgIHR5cGU6ICdAJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ1VpYlRhYnNldENvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ3RhYnNldCcsXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJ3VpYi90ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sJztcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgc2NvcGUudmVydGljYWwgPSBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy52ZXJ0aWNhbCkgP1xuICAgICAgICBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLnZlcnRpY2FsKSA6IGZhbHNlO1xuICAgICAgc2NvcGUuanVzdGlmaWVkID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuanVzdGlmaWVkKSA/XG4gICAgICAgIHNjb3BlLiRwYXJlbnQuJGV2YWwoYXR0cnMuanVzdGlmaWVkKSA6IGZhbHNlO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3VpYlRhYicsIFsnJHBhcnNlJywgZnVuY3Rpb24oJHBhcnNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogJ151aWJUYWJzZXQnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJ3VpYi90ZW1wbGF0ZS90YWJzL3RhYi5odG1sJztcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAJyxcbiAgICAgIGluZGV4OiAnPT8nLFxuICAgICAgY2xhc3NlczogJ0A/JyxcbiAgICAgIG9uU2VsZWN0OiAnJnNlbGVjdCcsIC8vVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgaW4gY29udGVudEhlYWRpbmdUcmFuc2NsdWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25jZSBpdCBpbnNlcnRzIHRoZSB0YWIncyBjb250ZW50IGludG8gdGhlIGRvbVxuICAgICAgb25EZXNlbGVjdDogJyZkZXNlbGVjdCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgLy9FbXB0eSBjb250cm9sbGVyIHNvIG90aGVyIGRpcmVjdGl2ZXMgY2FuIHJlcXVpcmUgYmVpbmcgJ3VuZGVyJyBhIHRhYlxuICAgIH0sXG4gICAgY29udHJvbGxlckFzOiAndGFiJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycywgdGFic2V0Q3RybCwgdHJhbnNjbHVkZSkge1xuICAgICAgc2NvcGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlmIChhdHRycy5kaXNhYmxlKSB7XG4gICAgICAgIHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZShhdHRycy5kaXNhYmxlKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBzY29wZS5kaXNhYmxlZCA9ICEhIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQoYXR0cnMuaW5kZXgpKSB7XG4gICAgICAgIGlmICh0YWJzZXRDdHJsLnRhYnMgJiYgdGFic2V0Q3RybC50YWJzLmxlbmd0aCkge1xuICAgICAgICAgIHNjb3BlLmluZGV4ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgdGFic2V0Q3RybC50YWJzLm1hcChmdW5jdGlvbih0KSB7IHJldHVybiB0LmluZGV4OyB9KSkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLmluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYW5ndWxhci5pc1VuZGVmaW5lZChhdHRycy5jbGFzc2VzKSkge1xuICAgICAgICBzY29wZS5jbGFzc2VzID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBpZiAoIXNjb3BlLmRpc2FibGVkKSB7XG4gICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFic2V0Q3RybC50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFic2V0Q3RybC50YWJzW2ldLnRhYiA9PT0gc2NvcGUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YWJzZXRDdHJsLnNlbGVjdChpbmRleCwgZXZ0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGFic2V0Q3RybC5hZGRUYWIoc2NvcGUpO1xuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0YWJzZXRDdHJsLnJlbW92ZVRhYihzY29wZSk7XG4gICAgICB9KTtcblxuICAgICAgLy9XZSBuZWVkIHRvIHRyYW5zY2x1ZGUgbGF0ZXIsIG9uY2UgdGhlIGNvbnRlbnQgY29udGFpbmVyIGlzIHJlYWR5LlxuICAgICAgLy93aGVuIHRoaXMgbGluayBoYXBwZW5zLCB3ZSdyZSBpbnNpZGUgYSB0YWIgaGVhZGluZy5cbiAgICAgIHNjb3BlLiR0cmFuc2NsdWRlRm4gPSB0cmFuc2NsdWRlO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd1aWJUYWJIZWFkaW5nVHJhbnNjbHVkZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ151aWJUYWInLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbG0pIHtcbiAgICAgIHNjb3BlLiR3YXRjaCgnaGVhZGluZ0VsZW1lbnQnLCBmdW5jdGlvbiB1cGRhdGVIZWFkaW5nRWxlbWVudChoZWFkaW5nKSB7XG4gICAgICAgIGlmIChoZWFkaW5nKSB7XG4gICAgICAgICAgZWxtLmh0bWwoJycpO1xuICAgICAgICAgIGVsbS5hcHBlbmQoaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3VpYlRhYkNvbnRlbnRUcmFuc2NsdWRlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnXnVpYlRhYnNldCcsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMpIHtcbiAgICAgIHZhciB0YWIgPSBzY29wZS4kZXZhbChhdHRycy51aWJUYWJDb250ZW50VHJhbnNjbHVkZSkudGFiO1xuXG4gICAgICAvL05vdyBvdXIgdGFiIGlzIHJlYWR5IHRvIGJlIHRyYW5zY2x1ZGVkOiBib3RoIHRoZSB0YWIgaGVhZGluZyBhcmVhXG4gICAgICAvL2FuZCB0aGUgdGFiIGNvbnRlbnQgYXJlYSBhcmUgbG9hZGVkLiAgVHJhbnNjbHVkZSAnZW0gYm90aC5cbiAgICAgIHRhYi4kdHJhbnNjbHVkZUZuKHRhYi4kcGFyZW50LCBmdW5jdGlvbihjb250ZW50cykge1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goY29udGVudHMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICBpZiAoaXNUYWJIZWFkaW5nKG5vZGUpKSB7XG4gICAgICAgICAgICAvL0xldCB0YWJIZWFkaW5nVHJhbnNjbHVkZSBrbm93LlxuICAgICAgICAgICAgdGFiLmhlYWRpbmdFbGVtZW50ID0gbm9kZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmFwcGVuZChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzVGFiSGVhZGluZyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiAoXG4gICAgICBub2RlLmhhc0F0dHJpYnV0ZSgndWliLXRhYi1oZWFkaW5nJykgfHxcbiAgICAgIG5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXVpYi10YWItaGVhZGluZycpIHx8XG4gICAgICBub2RlLmhhc0F0dHJpYnV0ZSgneC11aWItdGFiLWhlYWRpbmcnKSB8fFxuICAgICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd1aWItdGFiLWhlYWRpbmcnIHx8XG4gICAgICBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RhdGEtdWliLXRhYi1oZWFkaW5nJyB8fFxuICAgICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd4LXVpYi10YWItaGVhZGluZycgfHxcbiAgICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndWliOnRhYi1oZWFkaW5nJ1xuICAgICk7XG4gIH1cbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRpbWVwaWNrZXInLCBbXSlcblxuLmNvbnN0YW50KCd1aWJUaW1lcGlja2VyQ29uZmlnJywge1xuICBob3VyU3RlcDogMSxcbiAgbWludXRlU3RlcDogMSxcbiAgc2Vjb25kU3RlcDogMSxcbiAgc2hvd01lcmlkaWFuOiB0cnVlLFxuICBzaG93U2Vjb25kczogZmFsc2UsXG4gIG1lcmlkaWFuczogbnVsbCxcbiAgcmVhZG9ubHlJbnB1dDogZmFsc2UsXG4gIG1vdXNld2hlZWw6IHRydWUsXG4gIGFycm93a2V5czogdHJ1ZSxcbiAgc2hvd1NwaW5uZXJzOiB0cnVlLFxuICB0ZW1wbGF0ZVVybDogJ3VpYi90ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbCdcbn0pXG5cbi5jb250cm9sbGVyKCdVaWJUaW1lcGlja2VyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckcGFyc2UnLCAnJGxvZycsICckbG9jYWxlJywgJ3VpYlRpbWVwaWNrZXJDb25maWcnLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRwYXJzZSwgJGxvZywgJGxvY2FsZSwgdGltZXBpY2tlckNvbmZpZykge1xuICB2YXIgaG91cnNNb2RlbEN0cmwsIG1pbnV0ZXNNb2RlbEN0cmwsIHNlY29uZHNNb2RlbEN0cmw7XG4gIHZhciBzZWxlY3RlZCA9IG5ldyBEYXRlKCksXG4gICAgd2F0Y2hlcnMgPSBbXSxcbiAgICBuZ01vZGVsQ3RybCA9IHsgJHNldFZpZXdWYWx1ZTogYW5ndWxhci5ub29wIH0sIC8vIG51bGxNb2RlbEN0cmxcbiAgICBtZXJpZGlhbnMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubWVyaWRpYW5zKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tZXJpZGlhbnMpIDogdGltZXBpY2tlckNvbmZpZy5tZXJpZGlhbnMgfHwgJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkFNUE1TLFxuICAgIHBhZEhvdXJzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnBhZEhvdXJzKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5wYWRIb3VycykgOiB0cnVlO1xuXG4gICRzY29wZS50YWJpbmRleCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy50YWJpbmRleCkgPyAkYXR0cnMudGFiaW5kZXggOiAwO1xuICAkZWxlbWVudC5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKG5nTW9kZWxDdHJsXywgaW5wdXRzKSB7XG4gICAgbmdNb2RlbEN0cmwgPSBuZ01vZGVsQ3RybF87XG4gICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IHRoaXMucmVuZGVyO1xuXG4gICAgbmdNb2RlbEN0cmwuJGZvcm1hdHRlcnMudW5zaGlmdChmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZSA/IG5ldyBEYXRlKG1vZGVsVmFsdWUpIDogbnVsbDtcbiAgICB9KTtcblxuICAgIHZhciBob3Vyc0lucHV0RWwgPSBpbnB1dHMuZXEoMCksXG4gICAgICAgIG1pbnV0ZXNJbnB1dEVsID0gaW5wdXRzLmVxKDEpLFxuICAgICAgICBzZWNvbmRzSW5wdXRFbCA9IGlucHV0cy5lcSgyKTtcblxuICAgIGhvdXJzTW9kZWxDdHJsID0gaG91cnNJbnB1dEVsLmNvbnRyb2xsZXIoJ25nTW9kZWwnKTtcbiAgICBtaW51dGVzTW9kZWxDdHJsID0gbWludXRlc0lucHV0RWwuY29udHJvbGxlcignbmdNb2RlbCcpO1xuICAgIHNlY29uZHNNb2RlbEN0cmwgPSBzZWNvbmRzSW5wdXRFbC5jb250cm9sbGVyKCduZ01vZGVsJyk7XG5cbiAgICB2YXIgbW91c2V3aGVlbCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5tb3VzZXdoZWVsKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tb3VzZXdoZWVsKSA6IHRpbWVwaWNrZXJDb25maWcubW91c2V3aGVlbDtcblxuICAgIGlmIChtb3VzZXdoZWVsKSB7XG4gICAgICB0aGlzLnNldHVwTW91c2V3aGVlbEV2ZW50cyhob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsLCBzZWNvbmRzSW5wdXRFbCk7XG4gICAgfVxuXG4gICAgdmFyIGFycm93a2V5cyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5hcnJvd2tleXMpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLmFycm93a2V5cykgOiB0aW1lcGlja2VyQ29uZmlnLmFycm93a2V5cztcbiAgICBpZiAoYXJyb3drZXlzKSB7XG4gICAgICB0aGlzLnNldHVwQXJyb3drZXlFdmVudHMoaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCwgc2Vjb25kc0lucHV0RWwpO1xuICAgIH1cblxuICAgICRzY29wZS5yZWFkb25seUlucHV0ID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnJlYWRvbmx5SW5wdXQpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLnJlYWRvbmx5SW5wdXQpIDogdGltZXBpY2tlckNvbmZpZy5yZWFkb25seUlucHV0O1xuICAgIHRoaXMuc2V0dXBJbnB1dEV2ZW50cyhob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsLCBzZWNvbmRzSW5wdXRFbCk7XG4gIH07XG5cbiAgdmFyIGhvdXJTdGVwID0gdGltZXBpY2tlckNvbmZpZy5ob3VyU3RlcDtcbiAgaWYgKCRhdHRycy5ob3VyU3RlcCkge1xuICAgIHdhdGNoZXJzLnB1c2goJHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZSgkYXR0cnMuaG91clN0ZXApLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaG91clN0ZXAgPSArdmFsdWU7XG4gICAgfSkpO1xuICB9XG5cbiAgdmFyIG1pbnV0ZVN0ZXAgPSB0aW1lcGlja2VyQ29uZmlnLm1pbnV0ZVN0ZXA7XG4gIGlmICgkYXR0cnMubWludXRlU3RlcCkge1xuICAgIHdhdGNoZXJzLnB1c2goJHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZSgkYXR0cnMubWludXRlU3RlcCksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBtaW51dGVTdGVwID0gK3ZhbHVlO1xuICAgIH0pKTtcbiAgfVxuXG4gIHZhciBtaW47XG4gIHdhdGNoZXJzLnB1c2goJHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZSgkYXR0cnMubWluKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgZHQgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgbWluID0gaXNOYU4oZHQpID8gdW5kZWZpbmVkIDogZHQ7XG4gIH0pKTtcblxuICB2YXIgbWF4O1xuICB3YXRjaGVycy5wdXNoKCRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLm1heCksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGR0ID0gbmV3IERhdGUodmFsdWUpO1xuICAgIG1heCA9IGlzTmFOKGR0KSA/IHVuZGVmaW5lZCA6IGR0O1xuICB9KSk7XG5cbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIGlmICgkYXR0cnMubmdEaXNhYmxlZCkge1xuICAgIHdhdGNoZXJzLnB1c2goJHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZSgkYXR0cnMubmdEaXNhYmxlZCksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBkaXNhYmxlZCA9IHZhbHVlO1xuICAgIH0pKTtcbiAgfVxuXG4gICRzY29wZS5ub0luY3JlbWVudEhvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluY3JlbWVudGVkU2VsZWN0ZWQgPSBhZGRNaW51dGVzKHNlbGVjdGVkLCBob3VyU3RlcCAqIDYwKTtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgaW5jcmVtZW50ZWRTZWxlY3RlZCA+IG1heCB8fFxuICAgICAgaW5jcmVtZW50ZWRTZWxlY3RlZCA8IHNlbGVjdGVkICYmIGluY3JlbWVudGVkU2VsZWN0ZWQgPCBtaW47XG4gIH07XG5cbiAgJHNjb3BlLm5vRGVjcmVtZW50SG91cnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVjcmVtZW50ZWRTZWxlY3RlZCA9IGFkZE1pbnV0ZXMoc2VsZWN0ZWQsIC1ob3VyU3RlcCAqIDYwKTtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgZGVjcmVtZW50ZWRTZWxlY3RlZCA8IG1pbiB8fFxuICAgICAgZGVjcmVtZW50ZWRTZWxlY3RlZCA+IHNlbGVjdGVkICYmIGRlY3JlbWVudGVkU2VsZWN0ZWQgPiBtYXg7XG4gIH07XG5cbiAgJHNjb3BlLm5vSW5jcmVtZW50TWludXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmNyZW1lbnRlZFNlbGVjdGVkID0gYWRkTWludXRlcyhzZWxlY3RlZCwgbWludXRlU3RlcCk7XG4gICAgcmV0dXJuIGRpc2FibGVkIHx8IGluY3JlbWVudGVkU2VsZWN0ZWQgPiBtYXggfHxcbiAgICAgIGluY3JlbWVudGVkU2VsZWN0ZWQgPCBzZWxlY3RlZCAmJiBpbmNyZW1lbnRlZFNlbGVjdGVkIDwgbWluO1xuICB9O1xuXG4gICRzY29wZS5ub0RlY3JlbWVudE1pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVjcmVtZW50ZWRTZWxlY3RlZCA9IGFkZE1pbnV0ZXMoc2VsZWN0ZWQsIC1taW51dGVTdGVwKTtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgZGVjcmVtZW50ZWRTZWxlY3RlZCA8IG1pbiB8fFxuICAgICAgZGVjcmVtZW50ZWRTZWxlY3RlZCA+IHNlbGVjdGVkICYmIGRlY3JlbWVudGVkU2VsZWN0ZWQgPiBtYXg7XG4gIH07XG5cbiAgJHNjb3BlLm5vSW5jcmVtZW50U2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmNyZW1lbnRlZFNlbGVjdGVkID0gYWRkU2Vjb25kcyhzZWxlY3RlZCwgc2Vjb25kU3RlcCk7XG4gICAgcmV0dXJuIGRpc2FibGVkIHx8IGluY3JlbWVudGVkU2VsZWN0ZWQgPiBtYXggfHxcbiAgICAgIGluY3JlbWVudGVkU2VsZWN0ZWQgPCBzZWxlY3RlZCAmJiBpbmNyZW1lbnRlZFNlbGVjdGVkIDwgbWluO1xuICB9O1xuXG4gICRzY29wZS5ub0RlY3JlbWVudFNlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVjcmVtZW50ZWRTZWxlY3RlZCA9IGFkZFNlY29uZHMoc2VsZWN0ZWQsIC1zZWNvbmRTdGVwKTtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgZGVjcmVtZW50ZWRTZWxlY3RlZCA8IG1pbiB8fFxuICAgICAgZGVjcmVtZW50ZWRTZWxlY3RlZCA+IHNlbGVjdGVkICYmIGRlY3JlbWVudGVkU2VsZWN0ZWQgPiBtYXg7XG4gIH07XG5cbiAgJHNjb3BlLm5vVG9nZ2xlTWVyaWRpYW4gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoc2VsZWN0ZWQuZ2V0SG91cnMoKSA8IDEyKSB7XG4gICAgICByZXR1cm4gZGlzYWJsZWQgfHwgYWRkTWludXRlcyhzZWxlY3RlZCwgMTIgKiA2MCkgPiBtYXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc2FibGVkIHx8IGFkZE1pbnV0ZXMoc2VsZWN0ZWQsIC0xMiAqIDYwKSA8IG1pbjtcbiAgfTtcblxuICB2YXIgc2Vjb25kU3RlcCA9IHRpbWVwaWNrZXJDb25maWcuc2Vjb25kU3RlcDtcbiAgaWYgKCRhdHRycy5zZWNvbmRTdGVwKSB7XG4gICAgd2F0Y2hlcnMucHVzaCgkc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKCRhdHRycy5zZWNvbmRTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHNlY29uZFN0ZXAgPSArdmFsdWU7XG4gICAgfSkpO1xuICB9XG5cbiAgJHNjb3BlLnNob3dTZWNvbmRzID0gdGltZXBpY2tlckNvbmZpZy5zaG93U2Vjb25kcztcbiAgaWYgKCRhdHRycy5zaG93U2Vjb25kcykge1xuICAgIHdhdGNoZXJzLnB1c2goJHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZSgkYXR0cnMuc2hvd1NlY29uZHMpLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgJHNjb3BlLnNob3dTZWNvbmRzID0gISF2YWx1ZTtcbiAgICB9KSk7XG4gIH1cblxuICAvLyAxMkggLyAyNEggbW9kZVxuICAkc2NvcGUuc2hvd01lcmlkaWFuID0gdGltZXBpY2tlckNvbmZpZy5zaG93TWVyaWRpYW47XG4gIGlmICgkYXR0cnMuc2hvd01lcmlkaWFuKSB7XG4gICAgd2F0Y2hlcnMucHVzaCgkc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKCRhdHRycy5zaG93TWVyaWRpYW4pLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgJHNjb3BlLnNob3dNZXJpZGlhbiA9ICEhdmFsdWU7XG5cbiAgICAgIGlmIChuZ01vZGVsQ3RybC4kZXJyb3IudGltZSkge1xuICAgICAgICAvLyBFdmFsdWF0ZSBmcm9tIHRlbXBsYXRlXG4gICAgICAgIHZhciBob3VycyA9IGdldEhvdXJzRnJvbVRlbXBsYXRlKCksIG1pbnV0ZXMgPSBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCk7XG4gICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChob3VycykgJiYgYW5ndWxhci5pc0RlZmluZWQobWludXRlcykpIHtcbiAgICAgICAgICBzZWxlY3RlZC5zZXRIb3Vycyhob3Vycyk7XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVUZW1wbGF0ZSgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIEdldCAkc2NvcGUuaG91cnMgaW4gMjRIIG1vZGUgaWYgdmFsaWRcbiAgZnVuY3Rpb24gZ2V0SG91cnNGcm9tVGVtcGxhdGUoKSB7XG4gICAgdmFyIGhvdXJzID0gKyRzY29wZS5ob3VycztcbiAgICB2YXIgdmFsaWQgPSAkc2NvcGUuc2hvd01lcmlkaWFuID8gaG91cnMgPiAwICYmIGhvdXJzIDwgMTMgOlxuICAgICAgaG91cnMgPj0gMCAmJiBob3VycyA8IDI0O1xuICAgIGlmICghdmFsaWQgfHwgJHNjb3BlLmhvdXJzID09PSAnJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNob3dNZXJpZGlhbikge1xuICAgICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgICBob3VycyA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoJHNjb3BlLm1lcmlkaWFuID09PSBtZXJpZGlhbnNbMV0pIHtcbiAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaG91cnM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCkge1xuICAgIHZhciBtaW51dGVzID0gKyRzY29wZS5taW51dGVzO1xuICAgIHZhciB2YWxpZCA9IG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjA7XG4gICAgaWYgKCF2YWxpZCB8fCAkc2NvcGUubWludXRlcyA9PT0gJycpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtaW51dGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Vjb25kc0Zyb21UZW1wbGF0ZSgpIHtcbiAgICB2YXIgc2Vjb25kcyA9ICskc2NvcGUuc2Vjb25kcztcbiAgICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCA/IHNlY29uZHMgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYWQodmFsdWUsIG5vUGFkKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKHZhbHVlKSAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIgJiYgIW5vUGFkID9cbiAgICAgICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8vIFJlc3BvbmQgb24gbW91c2V3aGVlbCBzcGluXG4gIHRoaXMuc2V0dXBNb3VzZXdoZWVsRXZlbnRzID0gZnVuY3Rpb24oaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCwgc2Vjb25kc0lucHV0RWwpIHtcbiAgICB2YXIgaXNTY3JvbGxpbmdVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIH1cbiAgICAgIC8vcGljayBjb3JyZWN0IGRlbHRhIHZhcmlhYmxlIGRlcGVuZGluZyBvbiBldmVudFxuICAgICAgdmFyIGRlbHRhID0gZS53aGVlbERlbHRhID8gZS53aGVlbERlbHRhIDogLWUuZGVsdGFZO1xuICAgICAgcmV0dXJuIGUuZGV0YWlsIHx8IGRlbHRhID4gMDtcbiAgICB9O1xuXG4gICAgaG91cnNJbnB1dEVsLm9uKCdtb3VzZXdoZWVsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAkc2NvcGUuJGFwcGx5KGlzU2Nyb2xsaW5nVXAoZSkgPyAkc2NvcGUuaW5jcmVtZW50SG91cnMoKSA6ICRzY29wZS5kZWNyZW1lbnRIb3VycygpKTtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIG1pbnV0ZXNJbnB1dEVsLm9uKCdtb3VzZXdoZWVsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAkc2NvcGUuJGFwcGx5KGlzU2Nyb2xsaW5nVXAoZSkgPyAkc2NvcGUuaW5jcmVtZW50TWludXRlcygpIDogJHNjb3BlLmRlY3JlbWVudE1pbnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAgc2Vjb25kc0lucHV0RWwub24oJ21vdXNld2hlZWwgd2hlZWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoaXNTY3JvbGxpbmdVcChlKSA/ICRzY29wZS5pbmNyZW1lbnRTZWNvbmRzKCkgOiAkc2NvcGUuZGVjcmVtZW50U2Vjb25kcygpKTtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXNwb25kIG9uIHVwL2Rvd24gYXJyb3drZXlzXG4gIHRoaXMuc2V0dXBBcnJvd2tleUV2ZW50cyA9IGZ1bmN0aW9uKGhvdXJzSW5wdXRFbCwgbWludXRlc0lucHV0RWwsIHNlY29uZHNJbnB1dEVsKSB7XG4gICAgaG91cnNJbnB1dEVsLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gMzgpIHsgLy8gdXBcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJHNjb3BlLmluY3JlbWVudEhvdXJzKCk7XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJHNjb3BlLmRlY3JlbWVudEhvdXJzKCk7XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtaW51dGVzSW5wdXRFbC5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDM4KSB7IC8vIHVwXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICRzY29wZS5pbmNyZW1lbnRNaW51dGVzKCk7XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJHNjb3BlLmRlY3JlbWVudE1pbnV0ZXMoKTtcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNlY29uZHNJbnB1dEVsLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gMzgpIHsgLy8gdXBcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJHNjb3BlLmluY3JlbWVudFNlY29uZHMoKTtcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA9PT0gNDApIHsgLy8gZG93blxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkc2NvcGUuZGVjcmVtZW50U2Vjb25kcygpO1xuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuc2V0dXBJbnB1dEV2ZW50cyA9IGZ1bmN0aW9uKGhvdXJzSW5wdXRFbCwgbWludXRlc0lucHV0RWwsIHNlY29uZHNJbnB1dEVsKSB7XG4gICAgaWYgKCRzY29wZS5yZWFkb25seUlucHV0KSB7XG4gICAgICAkc2NvcGUudXBkYXRlSG91cnMgPSBhbmd1bGFyLm5vb3A7XG4gICAgICAkc2NvcGUudXBkYXRlTWludXRlcyA9IGFuZ3VsYXIubm9vcDtcbiAgICAgICRzY29wZS51cGRhdGVTZWNvbmRzID0gYW5ndWxhci5ub29wO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbnZhbGlkYXRlID0gZnVuY3Rpb24oaW52YWxpZEhvdXJzLCBpbnZhbGlkTWludXRlcywgaW52YWxpZFNlY29uZHMpIHtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUobnVsbCk7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ3RpbWUnLCBmYWxzZSk7XG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoaW52YWxpZEhvdXJzKSkge1xuICAgICAgICAkc2NvcGUuaW52YWxpZEhvdXJzID0gaW52YWxpZEhvdXJzO1xuICAgICAgICBpZiAoaG91cnNNb2RlbEN0cmwpIHtcbiAgICAgICAgICBob3Vyc01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ2hvdXJzJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChpbnZhbGlkTWludXRlcykpIHtcbiAgICAgICAgJHNjb3BlLmludmFsaWRNaW51dGVzID0gaW52YWxpZE1pbnV0ZXM7XG4gICAgICAgIGlmIChtaW51dGVzTW9kZWxDdHJsKSB7XG4gICAgICAgICAgbWludXRlc01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ21pbnV0ZXMnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGludmFsaWRTZWNvbmRzKSkge1xuICAgICAgICAkc2NvcGUuaW52YWxpZFNlY29uZHMgPSBpbnZhbGlkU2Vjb25kcztcbiAgICAgICAgaWYgKHNlY29uZHNNb2RlbEN0cmwpIHtcbiAgICAgICAgICBzZWNvbmRzTW9kZWxDdHJsLiRzZXRWYWxpZGl0eSgnc2Vjb25kcycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlSG91cnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBob3VycyA9IGdldEhvdXJzRnJvbVRlbXBsYXRlKCksXG4gICAgICAgIG1pbnV0ZXMgPSBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCk7XG5cbiAgICAgIG5nTW9kZWxDdHJsLiRzZXREaXJ0eSgpO1xuXG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoaG91cnMpICYmIGFuZ3VsYXIuaXNEZWZpbmVkKG1pbnV0ZXMpKSB7XG4gICAgICAgIHNlbGVjdGVkLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgc2VsZWN0ZWQuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkIDwgbWluIHx8IHNlbGVjdGVkID4gbWF4KSB7XG4gICAgICAgICAgaW52YWxpZGF0ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZyZXNoKCdoJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFsaWRhdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGhvdXJzSW5wdXRFbC5vbignYmx1cicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRUb3VjaGVkKCk7XG4gICAgICBpZiAobW9kZWxJc0VtcHR5KCkpIHtcbiAgICAgICAgbWFrZVZhbGlkKCk7XG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5ob3VycyA9PT0gbnVsbCB8fCAkc2NvcGUuaG91cnMgPT09ICcnKSB7XG4gICAgICAgIGludmFsaWRhdGUodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuaW52YWxpZEhvdXJzICYmICRzY29wZS5ob3VycyA8IDEwKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLmhvdXJzID0gcGFkKCRzY29wZS5ob3VycywgIXBhZEhvdXJzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc2NvcGUudXBkYXRlTWludXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1pbnV0ZXMgPSBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCksXG4gICAgICAgIGhvdXJzID0gZ2V0SG91cnNGcm9tVGVtcGxhdGUoKTtcblxuICAgICAgbmdNb2RlbEN0cmwuJHNldERpcnR5KCk7XG5cbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChtaW51dGVzKSAmJiBhbmd1bGFyLmlzRGVmaW5lZChob3VycykpIHtcbiAgICAgICAgc2VsZWN0ZWQuc2V0SG91cnMoaG91cnMpO1xuICAgICAgICBzZWxlY3RlZC5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPCBtaW4gfHwgc2VsZWN0ZWQgPiBtYXgpIHtcbiAgICAgICAgICBpbnZhbGlkYXRlKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVmcmVzaCgnbScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhbGlkYXRlKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1pbnV0ZXNJbnB1dEVsLm9uKCdibHVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFRvdWNoZWQoKTtcbiAgICAgIGlmIChtb2RlbElzRW1wdHkoKSkge1xuICAgICAgICBtYWtlVmFsaWQoKTtcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLm1pbnV0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgaW52YWxpZGF0ZSh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLmludmFsaWRNaW51dGVzICYmICRzY29wZS5taW51dGVzIDwgMTApIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAkc2NvcGUubWludXRlcyA9IHBhZCgkc2NvcGUubWludXRlcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLnVwZGF0ZVNlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWNvbmRzID0gZ2V0U2Vjb25kc0Zyb21UZW1wbGF0ZSgpO1xuXG4gICAgICBuZ01vZGVsQ3RybC4kc2V0RGlydHkoKTtcblxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHNlY29uZHMpKSB7XG4gICAgICAgIHNlbGVjdGVkLnNldFNlY29uZHMoc2Vjb25kcyk7XG4gICAgICAgIHJlZnJlc2goJ3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFsaWRhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWNvbmRzSW5wdXRFbC5vbignYmx1cicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChtb2RlbElzRW1wdHkoKSkge1xuICAgICAgICBtYWtlVmFsaWQoKTtcbiAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5pbnZhbGlkU2Vjb25kcyAmJiAkc2NvcGUuc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzY29wZS5zZWNvbmRzID0gcGFkKCRzY29wZS5zZWNvbmRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfTtcblxuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRlID0gbmdNb2RlbEN0cmwuJHZpZXdWYWx1ZTtcblxuICAgIGlmIChpc05hTihkYXRlKSkge1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCd0aW1lJywgZmFsc2UpO1xuICAgICAgJGxvZy5lcnJvcignVGltZXBpY2tlciBkaXJlY3RpdmU6IFwibmctbW9kZWxcIiB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBvYmplY3QsIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS4wMS4xOTcwIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBSRkMyODIyIG9yIElTTyA4NjAxIGRhdGUuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgIHNlbGVjdGVkID0gZGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkIDwgbWluIHx8IHNlbGVjdGVkID4gbWF4KSB7XG4gICAgICAgIG5nTW9kZWxDdHJsLiRzZXRWYWxpZGl0eSgndGltZScsIGZhbHNlKTtcbiAgICAgICAgJHNjb3BlLmludmFsaWRIb3VycyA9IHRydWU7XG4gICAgICAgICRzY29wZS5pbnZhbGlkTWludXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWtlVmFsaWQoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVRlbXBsYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENhbGwgaW50ZXJuYWxseSB3aGVuIHdlIGtub3cgdGhhdCBtb2RlbCBpcyB2YWxpZC5cbiAgZnVuY3Rpb24gcmVmcmVzaChrZXlib2FyZENoYW5nZSkge1xuICAgIG1ha2VWYWxpZCgpO1xuICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUobmV3IERhdGUoc2VsZWN0ZWQpKTtcbiAgICB1cGRhdGVUZW1wbGF0ZShrZXlib2FyZENoYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlVmFsaWQoKSB7XG4gICAgaWYgKGhvdXJzTW9kZWxDdHJsKSB7XG4gICAgICBob3Vyc01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ2hvdXJzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZXNNb2RlbEN0cmwpIHtcbiAgICAgIG1pbnV0ZXNNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdtaW51dGVzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNlY29uZHNNb2RlbEN0cmwpIHtcbiAgICAgIHNlY29uZHNNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdzZWNvbmRzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCd0aW1lJywgdHJ1ZSk7XG4gICAgJHNjb3BlLmludmFsaWRIb3VycyA9IGZhbHNlO1xuICAgICRzY29wZS5pbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICAgICRzY29wZS5pbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoa2V5Ym9hcmRDaGFuZ2UpIHtcbiAgICBpZiAoIW5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlKSB7XG4gICAgICAkc2NvcGUuaG91cnMgPSBudWxsO1xuICAgICAgJHNjb3BlLm1pbnV0ZXMgPSBudWxsO1xuICAgICAgJHNjb3BlLnNlY29uZHMgPSBudWxsO1xuICAgICAgJHNjb3BlLm1lcmlkaWFuID0gbWVyaWRpYW5zWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaG91cnMgPSBzZWxlY3RlZC5nZXRIb3VycygpLFxuICAgICAgICBtaW51dGVzID0gc2VsZWN0ZWQuZ2V0TWludXRlcygpLFxuICAgICAgICBzZWNvbmRzID0gc2VsZWN0ZWQuZ2V0U2Vjb25kcygpO1xuXG4gICAgICBpZiAoJHNjb3BlLnNob3dNZXJpZGlhbikge1xuICAgICAgICBob3VycyA9IGhvdXJzID09PSAwIHx8IGhvdXJzID09PSAxMiA/IDEyIDogaG91cnMgJSAxMjsgLy8gQ29udmVydCAyNCB0byAxMiBob3VyIHN5c3RlbVxuICAgICAgfVxuXG4gICAgICAkc2NvcGUuaG91cnMgPSBrZXlib2FyZENoYW5nZSA9PT0gJ2gnID8gaG91cnMgOiBwYWQoaG91cnMsICFwYWRIb3Vycyk7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2UgIT09ICdtJykge1xuICAgICAgICAkc2NvcGUubWludXRlcyA9IHBhZChtaW51dGVzKTtcbiAgICAgIH1cbiAgICAgICRzY29wZS5tZXJpZGlhbiA9IHNlbGVjdGVkLmdldEhvdXJzKCkgPCAxMiA/IG1lcmlkaWFuc1swXSA6IG1lcmlkaWFuc1sxXTtcblxuICAgICAgaWYgKGtleWJvYXJkQ2hhbmdlICE9PSAncycpIHtcbiAgICAgICAgJHNjb3BlLnNlY29uZHMgPSBwYWQoc2Vjb25kcyk7XG4gICAgICB9XG4gICAgICAkc2NvcGUubWVyaWRpYW4gPSBzZWxlY3RlZC5nZXRIb3VycygpIDwgMTIgPyBtZXJpZGlhbnNbMF0gOiBtZXJpZGlhbnNbMV07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2Vjb25kc1RvU2VsZWN0ZWQoc2Vjb25kcykge1xuICAgIHNlbGVjdGVkID0gYWRkU2Vjb25kcyhzZWxlY3RlZCwgc2Vjb25kcyk7XG4gICAgcmVmcmVzaCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTWludXRlcyhzZWxlY3RlZCwgbWludXRlcykge1xuICAgIHJldHVybiBhZGRTZWNvbmRzKHNlbGVjdGVkLCBtaW51dGVzKjYwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNlY29uZHMoZGF0ZSwgc2Vjb25kcykge1xuICAgIHZhciBkdCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgc2Vjb25kcyAqIDEwMDApO1xuICAgIHZhciBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgbmV3RGF0ZS5zZXRIb3VycyhkdC5nZXRIb3VycygpLCBkdC5nZXRNaW51dGVzKCksIGR0LmdldFNlY29uZHMoKSk7XG4gICAgcmV0dXJuIG5ld0RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBtb2RlbElzRW1wdHkoKSB7XG4gICAgcmV0dXJuICgkc2NvcGUuaG91cnMgPT09IG51bGwgfHwgJHNjb3BlLmhvdXJzID09PSAnJykgJiZcbiAgICAgICgkc2NvcGUubWludXRlcyA9PT0gbnVsbCB8fCAkc2NvcGUubWludXRlcyA9PT0gJycpICYmXG4gICAgICAoISRzY29wZS5zaG93U2Vjb25kcyB8fCAkc2NvcGUuc2hvd1NlY29uZHMgJiYgKCRzY29wZS5zZWNvbmRzID09PSBudWxsIHx8ICRzY29wZS5zZWNvbmRzID09PSAnJykpO1xuICB9XG5cbiAgJHNjb3BlLnNob3dTcGlubmVycyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5zaG93U3Bpbm5lcnMpID9cbiAgICAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuc2hvd1NwaW5uZXJzKSA6IHRpbWVwaWNrZXJDb25maWcuc2hvd1NwaW5uZXJzO1xuXG4gICRzY29wZS5pbmNyZW1lbnRIb3VycyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghJHNjb3BlLm5vSW5jcmVtZW50SG91cnMoKSkge1xuICAgICAgYWRkU2Vjb25kc1RvU2VsZWN0ZWQoaG91clN0ZXAgKiA2MCAqIDYwKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmRlY3JlbWVudEhvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkc2NvcGUubm9EZWNyZW1lbnRIb3VycygpKSB7XG4gICAgICBhZGRTZWNvbmRzVG9TZWxlY3RlZCgtaG91clN0ZXAgKiA2MCAqIDYwKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmluY3JlbWVudE1pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISRzY29wZS5ub0luY3JlbWVudE1pbnV0ZXMoKSkge1xuICAgICAgYWRkU2Vjb25kc1RvU2VsZWN0ZWQobWludXRlU3RlcCAqIDYwKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmRlY3JlbWVudE1pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISRzY29wZS5ub0RlY3JlbWVudE1pbnV0ZXMoKSkge1xuICAgICAgYWRkU2Vjb25kc1RvU2VsZWN0ZWQoLW1pbnV0ZVN0ZXAgKiA2MCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5pbmNyZW1lbnRTZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkc2NvcGUubm9JbmNyZW1lbnRTZWNvbmRzKCkpIHtcbiAgICAgIGFkZFNlY29uZHNUb1NlbGVjdGVkKHNlY29uZFN0ZXApO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuZGVjcmVtZW50U2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghJHNjb3BlLm5vRGVjcmVtZW50U2Vjb25kcygpKSB7XG4gICAgICBhZGRTZWNvbmRzVG9TZWxlY3RlZCgtc2Vjb25kU3RlcCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS50b2dnbGVNZXJpZGlhbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtaW51dGVzID0gZ2V0TWludXRlc0Zyb21UZW1wbGF0ZSgpLFxuICAgICAgICBob3VycyA9IGdldEhvdXJzRnJvbVRlbXBsYXRlKCk7XG5cbiAgICBpZiAoISRzY29wZS5ub1RvZ2dsZU1lcmlkaWFuKCkpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChtaW51dGVzKSAmJiBhbmd1bGFyLmlzRGVmaW5lZChob3VycykpIHtcbiAgICAgICAgYWRkU2Vjb25kc1RvU2VsZWN0ZWQoMTIgKiA2MCAqIChzZWxlY3RlZC5nZXRIb3VycygpIDwgMTIgPyA2MCA6IC02MCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNjb3BlLm1lcmlkaWFuID0gJHNjb3BlLm1lcmlkaWFuID09PSBtZXJpZGlhbnNbMF0gPyBtZXJpZGlhbnNbMV0gOiBtZXJpZGlhbnNbMF07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5ibHVyID0gZnVuY3Rpb24oKSB7XG4gICAgbmdNb2RlbEN0cmwuJHNldFRvdWNoZWQoKTtcbiAgfTtcblxuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlICh3YXRjaGVycy5sZW5ndGgpIHtcbiAgICAgIHdhdGNoZXJzLnNoaWZ0KCkoKTtcbiAgICB9XG4gIH0pO1xufV0pXG5cbi5kaXJlY3RpdmUoJ3VpYlRpbWVwaWNrZXInLCBbJ3VpYlRpbWVwaWNrZXJDb25maWcnLCBmdW5jdGlvbih1aWJUaW1lcGlja2VyQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogWyd1aWJUaW1lcGlja2VyJywgJz9ebmdNb2RlbCddLFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgY29udHJvbGxlcjogJ1VpYlRpbWVwaWNrZXJDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICd0aW1lcGlja2VyJyxcbiAgICBzY29wZToge30sXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgdWliVGltZXBpY2tlckNvbmZpZy50ZW1wbGF0ZVVybDtcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciB0aW1lcGlja2VyQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBpZiAobmdNb2RlbEN0cmwpIHtcbiAgICAgICAgdGltZXBpY2tlckN0cmwuaW5pdChuZ01vZGVsQ3RybCwgZWxlbWVudC5maW5kKCdpbnB1dCcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAudHlwZWFoZWFkJywgWyd1aS5ib290c3RyYXAuZGVib3VuY2UnLCAndWkuYm9vdHN0cmFwLnBvc2l0aW9uJ10pXG5cbi8qKlxuICogQSBoZWxwZXIgc2VydmljZSB0aGF0IGNhbiBwYXJzZSB0eXBlYWhlYWQncyBzeW50YXggKHN0cmluZyBwcm92aWRlZCBieSB1c2VycylcbiAqIEV4dHJhY3RlZCB0byBhIHNlcGFyYXRlIHNlcnZpY2UgZm9yIGVhc2Ugb2YgdW5pdCB0ZXN0aW5nXG4gKi9cbiAgLmZhY3RvcnkoJ3VpYlR5cGVhaGVhZFBhcnNlcicsIFsnJHBhcnNlJywgZnVuY3Rpb24oJHBhcnNlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgMDAwMDAxMTExMTExMTAwMDAwMDAwMDAwMDAyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAzMzMzMzMzMzMzMzMzMzMwMDAwMDAwMDAwMDQ0NDQ0NDQ0MDAwXG4gICAgdmFyIFRZUEVBSEVBRF9SRUdFWFAgPSAvXlxccyooW1xcc1xcU10rPykoPzpcXHMrYXNcXHMrKFtcXHNcXFNdKz8pKT9cXHMrZm9yXFxzKyg/OihbXFwkXFx3XVtcXCRcXHdcXGRdKikpXFxzK2luXFxzKyhbXFxzXFxTXSs/KSQvO1xuICAgIHJldHVybiB7XG4gICAgICBwYXJzZTogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gaW5wdXQubWF0Y2goVFlQRUFIRUFEX1JFR0VYUCk7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnRXhwZWN0ZWQgdHlwZWFoZWFkIHNwZWNpZmljYXRpb24gaW4gZm9ybSBvZiBcIl9tb2RlbFZhbHVlXyAoYXMgX2xhYmVsXyk/IGZvciBfaXRlbV8gaW4gX2NvbGxlY3Rpb25fXCInICtcbiAgICAgICAgICAgICAgJyBidXQgZ290IFwiJyArIGlucHV0ICsgJ1wiLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtTmFtZTogbWF0Y2hbM10sXG4gICAgICAgICAgc291cmNlOiAkcGFyc2UobWF0Y2hbNF0pLFxuICAgICAgICAgIHZpZXdNYXBwZXI6ICRwYXJzZShtYXRjaFsyXSB8fCBtYXRjaFsxXSksXG4gICAgICAgICAgbW9kZWxNYXBwZXI6ICRwYXJzZShtYXRjaFsxXSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSlcblxuICAuY29udHJvbGxlcignVWliVHlwZWFoZWFkQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckY29tcGlsZScsICckcGFyc2UnLCAnJHEnLCAnJHRpbWVvdXQnLCAnJGRvY3VtZW50JywgJyR3aW5kb3cnLCAnJHJvb3RTY29wZScsICckJGRlYm91bmNlJywgJyR1aWJQb3NpdGlvbicsICd1aWJUeXBlYWhlYWRQYXJzZXInLFxuICAgIGZ1bmN0aW9uKG9yaWdpbmFsU2NvcGUsIGVsZW1lbnQsIGF0dHJzLCAkY29tcGlsZSwgJHBhcnNlLCAkcSwgJHRpbWVvdXQsICRkb2N1bWVudCwgJHdpbmRvdywgJHJvb3RTY29wZSwgJCRkZWJvdW5jZSwgJHBvc2l0aW9uLCB0eXBlYWhlYWRQYXJzZXIpIHtcbiAgICB2YXIgSE9UX0tFWVMgPSBbOSwgMTMsIDI3LCAzOCwgNDBdO1xuICAgIHZhciBldmVudERlYm91bmNlVGltZSA9IDIwMDtcbiAgICB2YXIgbW9kZWxDdHJsLCBuZ01vZGVsT3B0aW9ucztcbiAgICAvL1NVUFBPUlRFRCBBVFRSSUJVVEVTIChPUFRJT05TKVxuXG4gICAgLy9taW5pbWFsIG5vIG9mIGNoYXJhY3RlcnMgdGhhdCBuZWVkcyB0byBiZSBlbnRlcmVkIGJlZm9yZSB0eXBlYWhlYWQga2lja3MtaW5cbiAgICB2YXIgbWluTGVuZ3RoID0gb3JpZ2luYWxTY29wZS4kZXZhbChhdHRycy50eXBlYWhlYWRNaW5MZW5ndGgpO1xuICAgIGlmICghbWluTGVuZ3RoICYmIG1pbkxlbmd0aCAhPT0gMCkge1xuICAgICAgbWluTGVuZ3RoID0gMTtcbiAgICB9XG5cbiAgICBvcmlnaW5hbFNjb3BlLiR3YXRjaChhdHRycy50eXBlYWhlYWRNaW5MZW5ndGgsIGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgICAgbWluTGVuZ3RoID0gIW5ld1ZhbCAmJiBuZXdWYWwgIT09IDAgPyAxIDogbmV3VmFsO1xuICAgIH0pO1xuXG4gICAgLy9taW5pbWFsIHdhaXQgdGltZSBhZnRlciBsYXN0IGNoYXJhY3RlciB0eXBlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluXG4gICAgdmFyIHdhaXRUaW1lID0gb3JpZ2luYWxTY29wZS4kZXZhbChhdHRycy50eXBlYWhlYWRXYWl0TXMpIHx8IDA7XG5cbiAgICAvL3Nob3VsZCBpdCByZXN0cmljdCBtb2RlbCB2YWx1ZXMgdG8gdGhlIG9uZXMgc2VsZWN0ZWQgZnJvbSB0aGUgcG9wdXAgb25seT9cbiAgICB2YXIgaXNFZGl0YWJsZSA9IG9yaWdpbmFsU2NvcGUuJGV2YWwoYXR0cnMudHlwZWFoZWFkRWRpdGFibGUpICE9PSBmYWxzZTtcbiAgICBvcmlnaW5hbFNjb3BlLiR3YXRjaChhdHRycy50eXBlYWhlYWRFZGl0YWJsZSwgZnVuY3Rpb24gKG5ld1ZhbCkge1xuICAgICAgaXNFZGl0YWJsZSA9IG5ld1ZhbCAhPT0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvL2JpbmRpbmcgdG8gYSB2YXJpYWJsZSB0aGF0IGluZGljYXRlcyBpZiBtYXRjaGVzIGFyZSBiZWluZyByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgaXNMb2FkaW5nU2V0dGVyID0gJHBhcnNlKGF0dHJzLnR5cGVhaGVhZExvYWRpbmcpLmFzc2lnbiB8fCBhbmd1bGFyLm5vb3A7XG5cbiAgICAvL2EgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGFuIGV2ZW50IHNob3VsZCBjYXVzZSBzZWxlY3Rpb25cbiAgICB2YXIgaXNTZWxlY3RFdmVudCA9IGF0dHJzLnR5cGVhaGVhZFNob3VsZFNlbGVjdCA/ICRwYXJzZShhdHRycy50eXBlYWhlYWRTaG91bGRTZWxlY3QpIDogZnVuY3Rpb24oc2NvcGUsIHZhbHMpIHtcbiAgICAgIHZhciBldnQgPSB2YWxzLiRldmVudDtcbiAgICAgIHJldHVybiBldnQud2hpY2ggPT09IDEzIHx8IGV2dC53aGljaCA9PT0gOTtcbiAgICB9O1xuXG4gICAgLy9hIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gYSBtYXRjaCBpcyBzZWxlY3RlZFxuICAgIHZhciBvblNlbGVjdENhbGxiYWNrID0gJHBhcnNlKGF0dHJzLnR5cGVhaGVhZE9uU2VsZWN0KTtcblxuICAgIC8vc2hvdWxkIGl0IHNlbGVjdCBoaWdobGlnaHRlZCBwb3B1cCB2YWx1ZSB3aGVuIGxvc2luZyBmb2N1cz9cbiAgICB2YXIgaXNTZWxlY3RPbkJsdXIgPSBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy50eXBlYWhlYWRTZWxlY3RPbkJsdXIpID8gb3JpZ2luYWxTY29wZS4kZXZhbChhdHRycy50eXBlYWhlYWRTZWxlY3RPbkJsdXIpIDogZmFsc2U7XG5cbiAgICAvL2JpbmRpbmcgdG8gYSB2YXJpYWJsZSB0aGF0IGluZGljYXRlcyBpZiB0aGVyZSB3ZXJlIG5vIHJlc3VsdHMgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIGNvbXBsZXRlZFxuICAgIHZhciBpc05vUmVzdWx0c1NldHRlciA9ICRwYXJzZShhdHRycy50eXBlYWhlYWROb1Jlc3VsdHMpLmFzc2lnbiB8fCBhbmd1bGFyLm5vb3A7XG5cbiAgICB2YXIgaW5wdXRGb3JtYXR0ZXIgPSBhdHRycy50eXBlYWhlYWRJbnB1dEZvcm1hdHRlciA/ICRwYXJzZShhdHRycy50eXBlYWhlYWRJbnB1dEZvcm1hdHRlcikgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgYXBwZW5kVG9Cb2R5ID0gYXR0cnMudHlwZWFoZWFkQXBwZW5kVG9Cb2R5ID8gb3JpZ2luYWxTY29wZS4kZXZhbChhdHRycy50eXBlYWhlYWRBcHBlbmRUb0JvZHkpIDogZmFsc2U7XG5cbiAgICB2YXIgYXBwZW5kVG8gPSBhdHRycy50eXBlYWhlYWRBcHBlbmRUbyA/XG4gICAgICBvcmlnaW5hbFNjb3BlLiRldmFsKGF0dHJzLnR5cGVhaGVhZEFwcGVuZFRvKSA6IG51bGw7XG5cbiAgICB2YXIgZm9jdXNGaXJzdCA9IG9yaWdpbmFsU2NvcGUuJGV2YWwoYXR0cnMudHlwZWFoZWFkRm9jdXNGaXJzdCkgIT09IGZhbHNlO1xuXG4gICAgLy9JZiBpbnB1dCBtYXRjaGVzIGFuIGl0ZW0gb2YgdGhlIGxpc3QgZXhhY3RseSwgc2VsZWN0IGl0IGF1dG9tYXRpY2FsbHlcbiAgICB2YXIgc2VsZWN0T25FeGFjdCA9IGF0dHJzLnR5cGVhaGVhZFNlbGVjdE9uRXhhY3QgPyBvcmlnaW5hbFNjb3BlLiRldmFsKGF0dHJzLnR5cGVhaGVhZFNlbGVjdE9uRXhhY3QpIDogZmFsc2U7XG5cbiAgICAvL2JpbmRpbmcgdG8gYSB2YXJpYWJsZSB0aGF0IGluZGljYXRlcyBpZiBkcm9wZG93biBpcyBvcGVuXG4gICAgdmFyIGlzT3BlblNldHRlciA9ICRwYXJzZShhdHRycy50eXBlYWhlYWRJc09wZW4pLmFzc2lnbiB8fCBhbmd1bGFyLm5vb3A7XG5cbiAgICB2YXIgc2hvd0hpbnQgPSBvcmlnaW5hbFNjb3BlLiRldmFsKGF0dHJzLnR5cGVhaGVhZFNob3dIaW50KSB8fCBmYWxzZTtcblxuICAgIC8vSU5URVJOQUwgVkFSSUFCTEVTXG5cbiAgICAvL21vZGVsIHNldHRlciBleGVjdXRlZCB1cG9uIG1hdGNoIHNlbGVjdGlvblxuICAgIHZhciBwYXJzZWRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKTtcbiAgICB2YXIgaW52b2tlTW9kZWxTZXR0ZXIgPSAkcGFyc2UoYXR0cnMubmdNb2RlbCArICcoJCQkcCknKTtcbiAgICB2YXIgJHNldE1vZGVsVmFsdWUgPSBmdW5jdGlvbihzY29wZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24ocGFyc2VkTW9kZWwob3JpZ2luYWxTY29wZSkpICYmXG4gICAgICAgIG5nTW9kZWxPcHRpb25zLmdldE9wdGlvbignZ2V0dGVyU2V0dGVyJykpIHtcbiAgICAgICAgcmV0dXJuIGludm9rZU1vZGVsU2V0dGVyKHNjb3BlLCB7JCQkcDogbmV3VmFsdWV9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZE1vZGVsLmFzc2lnbihzY29wZSwgbmV3VmFsdWUpO1xuICAgIH07XG5cbiAgICAvL2V4cHJlc3Npb25zIHVzZWQgYnkgdHlwZWFoZWFkXG4gICAgdmFyIHBhcnNlclJlc3VsdCA9IHR5cGVhaGVhZFBhcnNlci5wYXJzZShhdHRycy51aWJUeXBlYWhlYWQpO1xuXG4gICAgdmFyIGhhc0ZvY3VzO1xuXG4gICAgLy9Vc2VkIHRvIGF2b2lkIGJ1ZyBpbiBpT1Mgd2VidmlldyB3aGVyZSBpT1Mga2V5Ym9hcmQgZG9lcyBub3QgZmlyZVxuICAgIC8vbW91c2Vkb3duICYgbW91c2V1cCBldmVudHNcbiAgICAvL0lzc3VlICMzNjk5XG4gICAgdmFyIHNlbGVjdGVkO1xuXG4gICAgLy9jcmVhdGUgYSBjaGlsZCBzY29wZSBmb3IgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgc28gd2UgYXJlIG5vdCBwb2xsdXRpbmcgb3JpZ2luYWwgc2NvcGVcbiAgICAvL3dpdGggdHlwZWFoZWFkLXNwZWNpZmljIGRhdGEgKG1hdGNoZXMsIHF1ZXJ5IGV0Yy4pXG4gICAgdmFyIHNjb3BlID0gb3JpZ2luYWxTY29wZS4kbmV3KCk7XG4gICAgdmFyIG9mZkRlc3Ryb3kgPSBvcmlnaW5hbFNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLiRkZXN0cm95KCk7XG4gICAgfSk7XG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIG9mZkRlc3Ryb3kpO1xuXG4gICAgLy8gV0FJLUFSSUFcbiAgICB2YXIgcG9wdXBJZCA9ICd0eXBlYWhlYWQtJyArIHNjb3BlLiRpZCArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgICBlbGVtZW50LmF0dHIoe1xuICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBmYWxzZSxcbiAgICAgICdhcmlhLW93bnMnOiBwb3B1cElkXG4gICAgfSk7XG5cbiAgICB2YXIgaW5wdXRzQ29udGFpbmVyLCBoaW50SW5wdXRFbGVtO1xuICAgIC8vYWRkIHJlYWQtb25seSBpbnB1dCB0byBzaG93IGhpbnRcbiAgICBpZiAoc2hvd0hpbnQpIHtcbiAgICAgIGlucHV0c0NvbnRhaW5lciA9IGFuZ3VsYXIuZWxlbWVudCgnPGRpdj48L2Rpdj4nKTtcbiAgICAgIGlucHV0c0NvbnRhaW5lci5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICBlbGVtZW50LmFmdGVyKGlucHV0c0NvbnRhaW5lcik7XG4gICAgICBoaW50SW5wdXRFbGVtID0gZWxlbWVudC5jbG9uZSgpO1xuICAgICAgaGludElucHV0RWxlbS5hdHRyKCdwbGFjZWhvbGRlcicsICcnKTtcbiAgICAgIGhpbnRJbnB1dEVsZW0uYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIGhpbnRJbnB1dEVsZW0udmFsKCcnKTtcbiAgICAgIGhpbnRJbnB1dEVsZW0uY3NzKHtcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgJ3RvcCc6ICcwcHgnLFxuICAgICAgICAnbGVmdCc6ICcwcHgnLFxuICAgICAgICAnYm9yZGVyLWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgJ2JveC1zaGFkb3cnOiAnbm9uZScsXG4gICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgJ2JhY2tncm91bmQnOiAnbm9uZSAwJSAwJSAvIGF1dG8gcmVwZWF0IHNjcm9sbCBwYWRkaW5nLWJveCBib3JkZXItYm94IHJnYigyNTUsIDI1NSwgMjU1KScsXG4gICAgICAgICdjb2xvcic6ICcjOTk5J1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICd0b3AnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGludElucHV0RWxlbS5hdHRyKCdpZCcpKSB7XG4gICAgICAgIGhpbnRJbnB1dEVsZW0ucmVtb3ZlQXR0cignaWQnKTsgLy8gcmVtb3ZlIGR1cGxpY2F0ZSBpZCBpZiBwcmVzZW50LlxuICAgICAgfVxuICAgICAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZChoaW50SW5wdXRFbGVtKTtcbiAgICAgIGhpbnRJbnB1dEVsZW0uYWZ0ZXIoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy9wb3AtdXAgZWxlbWVudCB1c2VkIHRvIGRpc3BsYXkgbWF0Y2hlc1xuICAgIHZhciBwb3BVcEVsID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IHVpYi10eXBlYWhlYWQtcG9wdXA+PC9kaXY+Jyk7XG4gICAgcG9wVXBFbC5hdHRyKHtcbiAgICAgIGlkOiBwb3B1cElkLFxuICAgICAgbWF0Y2hlczogJ21hdGNoZXMnLFxuICAgICAgYWN0aXZlOiAnYWN0aXZlSWR4JyxcbiAgICAgIHNlbGVjdDogJ3NlbGVjdChhY3RpdmVJZHgsIGV2dCknLFxuICAgICAgJ21vdmUtaW4tcHJvZ3Jlc3MnOiAnbW92ZUluUHJvZ3Jlc3MnLFxuICAgICAgcXVlcnk6ICdxdWVyeScsXG4gICAgICBwb3NpdGlvbjogJ3Bvc2l0aW9uJyxcbiAgICAgICdhc3NpZ24taXMtb3Blbic6ICdhc3NpZ25Jc09wZW4oaXNPcGVuKScsXG4gICAgICBkZWJvdW5jZTogJ2RlYm91bmNlVXBkYXRlJ1xuICAgIH0pO1xuICAgIC8vY3VzdG9tIGl0ZW0gdGVtcGxhdGVcbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMudHlwZWFoZWFkVGVtcGxhdGVVcmwpKSB7XG4gICAgICBwb3BVcEVsLmF0dHIoJ3RlbXBsYXRlLXVybCcsIGF0dHJzLnR5cGVhaGVhZFRlbXBsYXRlVXJsKTtcbiAgICB9XG5cbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMudHlwZWFoZWFkUG9wdXBUZW1wbGF0ZVVybCkpIHtcbiAgICAgIHBvcFVwRWwuYXR0cigncG9wdXAtdGVtcGxhdGUtdXJsJywgYXR0cnMudHlwZWFoZWFkUG9wdXBUZW1wbGF0ZVVybCk7XG4gICAgfVxuXG4gICAgdmFyIHJlc2V0SGludCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNob3dIaW50KSB7XG4gICAgICAgIGhpbnRJbnB1dEVsZW0udmFsKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc2V0TWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUubWF0Y2hlcyA9IFtdO1xuICAgICAgc2NvcGUuYWN0aXZlSWR4ID0gLTE7XG4gICAgICBlbGVtZW50LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICByZXNldEhpbnQoKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldE1hdGNoSWQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuIHBvcHVwSWQgKyAnLW9wdGlvbi0nICsgaW5kZXg7XG4gICAgfTtcblxuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIHNwZWNpZmllZCBtYXRjaCBpcyB0aGUgYWN0aXZlIChwcmUtc2VsZWN0ZWQpIGl0ZW0gaW4gdGhlIGxpc3Qgb3duZWQgYnkgdGhpcyB0eXBlYWhlYWQuXG4gICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgYWRkZWQgb3IgcmVtb3ZlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIGBhY3RpdmVJZHhgIGNoYW5nZXMuXG4gICAgc2NvcGUuJHdhdGNoKCdhY3RpdmVJZHgnLCBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBnZXRNYXRjaElkKGluZGV4KSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgaW5wdXRJc0V4YWN0TWF0Y2ggPSBmdW5jdGlvbihpbnB1dFZhbHVlLCBpbmRleCkge1xuICAgICAgaWYgKHNjb3BlLm1hdGNoZXMubGVuZ3RoID4gaW5kZXggJiYgaW5wdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpID09PSBzY29wZS5tYXRjaGVzW2luZGV4XS5sYWJlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRNYXRjaGVzQXN5bmMgPSBmdW5jdGlvbihpbnB1dFZhbHVlLCBldnQpIHtcbiAgICAgIHZhciBsb2NhbHMgPSB7JHZpZXdWYWx1ZTogaW5wdXRWYWx1ZX07XG4gICAgICBpc0xvYWRpbmdTZXR0ZXIob3JpZ2luYWxTY29wZSwgdHJ1ZSk7XG4gICAgICBpc05vUmVzdWx0c1NldHRlcihvcmlnaW5hbFNjb3BlLCBmYWxzZSk7XG4gICAgICAkcS53aGVuKHBhcnNlclJlc3VsdC5zb3VyY2Uob3JpZ2luYWxTY29wZSwgbG9jYWxzKSkudGhlbihmdW5jdGlvbihtYXRjaGVzKSB7XG4gICAgICAgIC8vaXQgbWlnaHQgaGFwcGVuIHRoYXQgc2V2ZXJhbCBhc3luYyBxdWVyaWVzIHdlcmUgaW4gcHJvZ3Jlc3MgaWYgYSB1c2VyIHdlcmUgdHlwaW5nIGZhc3RcbiAgICAgICAgLy9idXQgd2UgYXJlIGludGVyZXN0ZWQgb25seSBpbiByZXNwb25zZXMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBjdXJyZW50IHZpZXcgdmFsdWVcbiAgICAgICAgdmFyIG9uQ3VycmVudFJlcXVlc3QgPSBpbnB1dFZhbHVlID09PSBtb2RlbEN0cmwuJHZpZXdWYWx1ZTtcbiAgICAgICAgaWYgKG9uQ3VycmVudFJlcXVlc3QgJiYgaGFzRm9jdXMpIHtcbiAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNjb3BlLmFjdGl2ZUlkeCA9IGZvY3VzRmlyc3QgPyAwIDogLTE7XG4gICAgICAgICAgICBpc05vUmVzdWx0c1NldHRlcihvcmlnaW5hbFNjb3BlLCBmYWxzZSk7XG4gICAgICAgICAgICBzY29wZS5tYXRjaGVzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgIC8vdHJhbnNmb3JtIGxhYmVsc1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGxvY2Fsc1twYXJzZXJSZXN1bHQuaXRlbU5hbWVdID0gbWF0Y2hlc1tpXTtcbiAgICAgICAgICAgICAgc2NvcGUubWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogZ2V0TWF0Y2hJZChpKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogcGFyc2VyUmVzdWx0LnZpZXdNYXBwZXIoc2NvcGUsIGxvY2FscyksXG4gICAgICAgICAgICAgICAgbW9kZWw6IG1hdGNoZXNbaV1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLnF1ZXJ5ID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgIC8vcG9zaXRpb24gcG9wLXVwIHdpdGggbWF0Y2hlcyAtIHdlIG5lZWQgdG8gcmUtY2FsY3VsYXRlIGl0cyBwb3NpdGlvbiBlYWNoIHRpbWUgd2UgYXJlIG9wZW5pbmcgYSB3aW5kb3dcbiAgICAgICAgICAgIC8vd2l0aCBtYXRjaGVzIGFzIGEgcG9wLXVwIG1pZ2h0IGJlIGFic29sdXRlLXBvc2l0aW9uZWQgYW5kIHBvc2l0aW9uIG9mIGFuIGlucHV0IG1pZ2h0IGhhdmUgY2hhbmdlZCBvbiBhIHBhZ2VcbiAgICAgICAgICAgIC8vZHVlIHRvIG90aGVyIGVsZW1lbnRzIGJlaW5nIHJlbmRlcmVkXG4gICAgICAgICAgICByZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAvL1NlbGVjdCB0aGUgc2luZ2xlIHJlbWFpbmluZyBvcHRpb24gaWYgdXNlciBpbnB1dCBtYXRjaGVzXG4gICAgICAgICAgICBpZiAoc2VsZWN0T25FeGFjdCAmJiBzY29wZS5tYXRjaGVzLmxlbmd0aCA9PT0gMSAmJiBpbnB1dElzRXhhY3RNYXRjaChpbnB1dFZhbHVlLCAwKSkge1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc051bWJlcihzY29wZS5kZWJvdW5jZVVwZGF0ZSkgfHwgYW5ndWxhci5pc09iamVjdChzY29wZS5kZWJvdW5jZVVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAkJGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgc2NvcGUuc2VsZWN0KDAsIGV2dCk7XG4gICAgICAgICAgICAgICAgfSwgYW5ndWxhci5pc051bWJlcihzY29wZS5kZWJvdW5jZVVwZGF0ZSkgPyBzY29wZS5kZWJvdW5jZVVwZGF0ZSA6IHNjb3BlLmRlYm91bmNlVXBkYXRlWydkZWZhdWx0J10pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjb3BlLnNlbGVjdCgwLCBldnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG93SGludCkge1xuICAgICAgICAgICAgICB2YXIgZmlyc3RMYWJlbCA9IHNjb3BlLm1hdGNoZXNbMF0ubGFiZWw7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKGlucHV0VmFsdWUpICYmXG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgZmlyc3RMYWJlbC5zbGljZSgwLCBpbnB1dFZhbHVlLmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PT0gaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgaGludElucHV0RWxlbS52YWwoaW5wdXRWYWx1ZSArIGZpcnN0TGFiZWwuc2xpY2UoaW5wdXRWYWx1ZS5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaW50SW5wdXRFbGVtLnZhbCgnJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRNYXRjaGVzKCk7XG4gICAgICAgICAgICBpc05vUmVzdWx0c1NldHRlcihvcmlnaW5hbFNjb3BlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ3VycmVudFJlcXVlc3QpIHtcbiAgICAgICAgICBpc0xvYWRpbmdTZXR0ZXIob3JpZ2luYWxTY29wZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzZXRNYXRjaGVzKCk7XG4gICAgICAgIGlzTG9hZGluZ1NldHRlcihvcmlnaW5hbFNjb3BlLCBmYWxzZSk7XG4gICAgICAgIGlzTm9SZXN1bHRzU2V0dGVyKG9yaWdpbmFsU2NvcGUsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGJpbmQgZXZlbnRzIG9ubHkgaWYgYXBwZW5kVG9Cb2R5IHBhcmFtcyBleGlzdCAtIHBlcmZvcm1hbmNlIGZlYXR1cmVcbiAgICBpZiAoYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykub24oJ3Jlc2l6ZScsIGZpcmVSZWNhbGN1bGF0aW5nKTtcbiAgICAgICRkb2N1bWVudC5maW5kKCdib2R5Jykub24oJ3Njcm9sbCcsIGZpcmVSZWNhbGN1bGF0aW5nKTtcbiAgICB9XG5cbiAgICAvLyBEZWNsYXJlIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gb3V0c2lkZSByZWNhbGN1bGF0aW5nIGZvclxuICAgIC8vIHByb3BlciBkZWJvdW5jaW5nXG4gICAgdmFyIGRlYm91bmNlZFJlY2FsY3VsYXRlID0gJCRkZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIHBvcHVwIGlzIHZpc2libGVcbiAgICAgIGlmIChzY29wZS5tYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICByZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLm1vdmVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgfSwgZXZlbnREZWJvdW5jZVRpbWUpO1xuXG4gICAgLy8gRGVmYXVsdCBwcm9ncmVzcyB0eXBlXG4gICAgc2NvcGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGZpcmVSZWNhbGN1bGF0aW5nKCkge1xuICAgICAgaWYgKCFzY29wZS5tb3ZlSW5Qcm9ncmVzcykge1xuICAgICAgICBzY29wZS5tb3ZlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgIH1cblxuICAgICAgZGVib3VuY2VkUmVjYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBhY3R1YWwgcG9zaXRpb24gYW5kIHNldCBuZXcgdmFsdWVzIHRvIHNjb3BlXG4gICAgLy8gYWZ0ZXIgZGlnZXN0IGxvb3AgaXMgcG9wdXAgaW4gcmlnaHQgcG9zaXRpb25cbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgc2NvcGUucG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyAkcG9zaXRpb24ub2Zmc2V0KGVsZW1lbnQpIDogJHBvc2l0aW9uLnBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgc2NvcGUucG9zaXRpb24udG9wICs9IGVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG4gICAgfVxuXG4gICAgLy93ZSBuZWVkIHRvIHByb3BhZ2F0ZSB1c2VyJ3MgcXVlcnkgc28gd2UgY2FuIGhpZ2xpZ2h0IG1hdGNoZXNcbiAgICBzY29wZS5xdWVyeSA9IHVuZGVmaW5lZDtcblxuICAgIC8vRGVjbGFyZSB0aGUgdGltZW91dCBwcm9taXNlIHZhciBvdXRzaWRlIHRoZSBmdW5jdGlvbiBzY29wZSBzbyB0aGF0IHN0YWNrZWQgY2FsbHMgY2FuIGJlIGNhbmNlbGxlZCBsYXRlclxuICAgIHZhciB0aW1lb3V0UHJvbWlzZTtcblxuICAgIHZhciBzY2hlZHVsZVNlYXJjaFdpdGhUaW1lb3V0ID0gZnVuY3Rpb24oaW5wdXRWYWx1ZSkge1xuICAgICAgdGltZW91dFByb21pc2UgPSAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZ2V0TWF0Y2hlc0FzeW5jKGlucHV0VmFsdWUpO1xuICAgICAgfSwgd2FpdFRpbWUpO1xuICAgIH07XG5cbiAgICB2YXIgY2FuY2VsUHJldmlvdXNUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGltZW91dFByb21pc2UpIHtcbiAgICAgICAgJHRpbWVvdXQuY2FuY2VsKHRpbWVvdXRQcm9taXNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVzZXRNYXRjaGVzKCk7XG5cbiAgICBzY29wZS5hc3NpZ25Jc09wZW4gPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICBpc09wZW5TZXR0ZXIob3JpZ2luYWxTY29wZSwgaXNPcGVuKTtcbiAgICB9O1xuXG4gICAgc2NvcGUuc2VsZWN0ID0gZnVuY3Rpb24oYWN0aXZlSWR4LCBldnQpIHtcbiAgICAgIC8vY2FsbGVkIGZyb20gd2l0aGluIHRoZSAkZGlnZXN0KCkgY3ljbGVcbiAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgIHZhciBtb2RlbCwgaXRlbTtcblxuICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgbG9jYWxzW3BhcnNlclJlc3VsdC5pdGVtTmFtZV0gPSBpdGVtID0gc2NvcGUubWF0Y2hlc1thY3RpdmVJZHhdLm1vZGVsO1xuICAgICAgbW9kZWwgPSBwYXJzZXJSZXN1bHQubW9kZWxNYXBwZXIob3JpZ2luYWxTY29wZSwgbG9jYWxzKTtcbiAgICAgICRzZXRNb2RlbFZhbHVlKG9yaWdpbmFsU2NvcGUsIG1vZGVsKTtcbiAgICAgIG1vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ2VkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICBtb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdwYXJzZScsIHRydWUpO1xuXG4gICAgICBvblNlbGVjdENhbGxiYWNrKG9yaWdpbmFsU2NvcGUsIHtcbiAgICAgICAgJGl0ZW06IGl0ZW0sXG4gICAgICAgICRtb2RlbDogbW9kZWwsXG4gICAgICAgICRsYWJlbDogcGFyc2VyUmVzdWx0LnZpZXdNYXBwZXIob3JpZ2luYWxTY29wZSwgbG9jYWxzKSxcbiAgICAgICAgJGV2ZW50OiBldnRcbiAgICAgIH0pO1xuXG4gICAgICByZXNldE1hdGNoZXMoKTtcblxuICAgICAgLy9yZXR1cm4gZm9jdXMgdG8gdGhlIGlucHV0IGVsZW1lbnQgaWYgYSBtYXRjaCB3YXMgc2VsZWN0ZWQgdmlhIGEgbW91c2UgY2xpY2sgZXZlbnRcbiAgICAgIC8vIHVzZSB0aW1lb3V0IHRvIGF2b2lkICRyb290U2NvcGU6aW5wcm9nIGVycm9yXG4gICAgICBpZiAoc2NvcGUuJGV2YWwoYXR0cnMudHlwZWFoZWFkRm9jdXNPblNlbGVjdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyBlbGVtZW50WzBdLmZvY3VzKCk7IH0sIDAsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9iaW5kIGtleWJvYXJkIGV2ZW50czogYXJyb3dzIHVwKDM4KSAvIGRvd24oNDApLCBlbnRlcigxMykgYW5kIHRhYig5KSwgZXNjKDI3KVxuICAgIGVsZW1lbnQub24oJ2tleWRvd24nLCBmdW5jdGlvbihldnQpIHtcbiAgICAgIC8vdHlwZWFoZWFkIGlzIG9wZW4gYW5kIGFuIFwiaW50ZXJlc3RpbmdcIiBrZXkgd2FzIHByZXNzZWRcbiAgICAgIGlmIChzY29wZS5tYXRjaGVzLmxlbmd0aCA9PT0gMCB8fCBIT1RfS0VZUy5pbmRleE9mKGV2dC53aGljaCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3VsZFNlbGVjdCA9IGlzU2VsZWN0RXZlbnQob3JpZ2luYWxTY29wZSwgeyRldmVudDogZXZ0fSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogaWYgdGhlcmUncyBub3RoaW5nIHNlbGVjdGVkIChpLmUuIGZvY3VzRmlyc3QpIGFuZCBlbnRlciBvciB0YWIgaXMgaGl0XG4gICAgICAgKiBvclxuICAgICAgICogc2hpZnQgKyB0YWIgaXMgcHJlc3NlZCB0byBicmluZyBmb2N1cyB0byB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgICAgICogdGhlbiBjbGVhciB0aGUgcmVzdWx0c1xuICAgICAgICovXG4gICAgICBpZiAoc2NvcGUuYWN0aXZlSWR4ID09PSAtMSAmJiBzaG91bGRTZWxlY3QgfHwgZXZ0LndoaWNoID09PSA5ICYmICEhZXZ0LnNoaWZ0S2V5KSB7XG4gICAgICAgIHJlc2V0TWF0Y2hlcygpO1xuICAgICAgICBzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgc3dpdGNoIChldnQud2hpY2gpIHtcbiAgICAgICAgY2FzZSAyNzogLy8gZXNjYXBlXG4gICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgcmVzZXRNYXRjaGVzKCk7XG4gICAgICAgICAgb3JpZ2luYWxTY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIHVwIGFycm93XG4gICAgICAgICAgc2NvcGUuYWN0aXZlSWR4ID0gKHNjb3BlLmFjdGl2ZUlkeCA+IDAgPyBzY29wZS5hY3RpdmVJZHggOiBzY29wZS5tYXRjaGVzLmxlbmd0aCkgLSAxO1xuICAgICAgICAgIHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICB0YXJnZXQgPSBwb3BVcEVsWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aWItdHlwZWFoZWFkLW1hdGNoJylbc2NvcGUuYWN0aXZlSWR4XTtcbiAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5zY3JvbGxUb3AgPSB0YXJnZXQub2Zmc2V0VG9wO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBkb3duIGFycm93XG4gICAgICAgICAgc2NvcGUuYWN0aXZlSWR4ID0gKHNjb3BlLmFjdGl2ZUlkeCArIDEpICUgc2NvcGUubWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgIHRhcmdldCA9IHBvcFVwRWxbMF0ucXVlcnlTZWxlY3RvckFsbCgnLnVpYi10eXBlYWhlYWQtbWF0Y2gnKVtzY29wZS5hY3RpdmVJZHhdO1xuICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnNjcm9sbFRvcCA9IHRhcmdldC5vZmZzZXRUb3A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKHNob3VsZFNlbGVjdCkge1xuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc051bWJlcihzY29wZS5kZWJvdW5jZVVwZGF0ZSkgfHwgYW5ndWxhci5pc09iamVjdChzY29wZS5kZWJvdW5jZVVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAkJGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgc2NvcGUuc2VsZWN0KHNjb3BlLmFjdGl2ZUlkeCwgZXZ0KTtcbiAgICAgICAgICAgICAgICB9LCBhbmd1bGFyLmlzTnVtYmVyKHNjb3BlLmRlYm91bmNlVXBkYXRlKSA/IHNjb3BlLmRlYm91bmNlVXBkYXRlIDogc2NvcGUuZGVib3VuY2VVcGRhdGVbJ2RlZmF1bHQnXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2VsZWN0KHNjb3BlLmFjdGl2ZUlkeCwgZXZ0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWxlbWVudC5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBoYXNGb2N1cyA9IHRydWU7XG4gICAgICBpZiAobWluTGVuZ3RoID09PSAwICYmICFtb2RlbEN0cmwuJHZpZXdWYWx1ZSkge1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBnZXRNYXRjaGVzQXN5bmMobW9kZWxDdHJsLiR2aWV3VmFsdWUsIGV2dCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWxlbWVudC5vbignYmx1cicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgaWYgKGlzU2VsZWN0T25CbHVyICYmIHNjb3BlLm1hdGNoZXMubGVuZ3RoICYmIHNjb3BlLmFjdGl2ZUlkeCAhPT0gLTEgJiYgIXNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KHNjb3BlLmRlYm91bmNlVXBkYXRlKSAmJiBhbmd1bGFyLmlzTnVtYmVyKHNjb3BlLmRlYm91bmNlVXBkYXRlLmJsdXIpKSB7XG4gICAgICAgICAgICAkJGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzY29wZS5zZWxlY3Qoc2NvcGUuYWN0aXZlSWR4LCBldnQpO1xuICAgICAgICAgICAgfSwgc2NvcGUuZGVib3VuY2VVcGRhdGUuYmx1cik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlLnNlbGVjdChzY29wZS5hY3RpdmVJZHgsIGV2dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNFZGl0YWJsZSAmJiBtb2RlbEN0cmwuJGVycm9yLmVkaXRhYmxlKSB7XG4gICAgICAgIG1vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKCk7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBSZXNldCB2YWxpZGl0eSBhcyB3ZSBhcmUgY2xlYXJpbmdcbiAgICAgICAgICBtb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdlZGl0YWJsZScsIHRydWUpO1xuICAgICAgICAgIG1vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ3BhcnNlJywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LnZhbCgnJyk7XG4gICAgICB9XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIEtlZXAgcmVmZXJlbmNlIHRvIGNsaWNrIGhhbmRsZXIgdG8gdW5iaW5kIGl0LlxuICAgIHZhciBkaXNtaXNzQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAvLyBJc3N1ZSAjMzk3M1xuICAgICAgLy8gRmlyZWZveCB0cmVhdHMgcmlnaHQgY2xpY2sgYXMgYSBjbGljayBvbiBkb2N1bWVudFxuICAgICAgaWYgKGVsZW1lbnRbMF0gIT09IGV2dC50YXJnZXQgJiYgZXZ0LndoaWNoICE9PSAzICYmIHNjb3BlLm1hdGNoZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJlc2V0TWF0Y2hlcygpO1xuICAgICAgICBpZiAoISRyb290U2NvcGUuJCRwaGFzZSkge1xuICAgICAgICAgIG9yaWdpbmFsU2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgICRkb2N1bWVudC5vbignY2xpY2snLCBkaXNtaXNzQ2xpY2tIYW5kbGVyKTtcblxuICAgIG9yaWdpbmFsU2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgJGRvY3VtZW50Lm9mZignY2xpY2snLCBkaXNtaXNzQ2xpY2tIYW5kbGVyKTtcbiAgICAgIGlmIChhcHBlbmRUb0JvZHkgfHwgYXBwZW5kVG8pIHtcbiAgICAgICAgJHBvcHVwLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS5vZmYoJ3Jlc2l6ZScsIGZpcmVSZWNhbGN1bGF0aW5nKTtcbiAgICAgICAgJGRvY3VtZW50LmZpbmQoJ2JvZHknKS5vZmYoJ3Njcm9sbCcsIGZpcmVSZWNhbGN1bGF0aW5nKTtcbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgalF1ZXJ5IGNhY2hlIG1lbW9yeSBsZWFrXG4gICAgICBwb3BVcEVsLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoc2hvd0hpbnQpIHtcbiAgICAgICAgICBpbnB1dHNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgJHBvcHVwID0gJGNvbXBpbGUocG9wVXBFbCkoc2NvcGUpO1xuXG4gICAgaWYgKGFwcGVuZFRvQm9keSkge1xuICAgICAgJGRvY3VtZW50LmZpbmQoJ2JvZHknKS5hcHBlbmQoJHBvcHVwKTtcbiAgICB9IGVsc2UgaWYgKGFwcGVuZFRvKSB7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoYXBwZW5kVG8pLmVxKDApLmFwcGVuZCgkcG9wdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmFmdGVyKCRwb3B1cCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24oX21vZGVsQ3RybCkge1xuICAgICAgbW9kZWxDdHJsID0gX21vZGVsQ3RybDtcbiAgICAgIG5nTW9kZWxPcHRpb25zID0gZXh0cmFjdE9wdGlvbnMobW9kZWxDdHJsKTtcblxuICAgICAgc2NvcGUuZGVib3VuY2VVcGRhdGUgPSAkcGFyc2UobmdNb2RlbE9wdGlvbnMuZ2V0T3B0aW9uKCdkZWJvdW5jZScpKShvcmlnaW5hbFNjb3BlKTtcblxuICAgICAgLy9wbHVnIGludG8gJHBhcnNlcnMgcGlwZWxpbmUgdG8gb3BlbiBhIHR5cGVhaGVhZCBvbiB2aWV3IGNoYW5nZXMgaW5pdGlhdGVkIGZyb20gRE9NXG4gICAgICAvLyRwYXJzZXJzIGtpY2staW4gb24gYWxsIHRoZSBjaGFuZ2VzIGNvbWluZyBmcm9tIHRoZSB2aWV3IGFzIHdlbGwgYXMgbWFudWFsbHkgdHJpZ2dlcmVkIGJ5ICRzZXRWaWV3VmFsdWVcbiAgICAgIG1vZGVsQ3RybC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uKGlucHV0VmFsdWUpIHtcbiAgICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuXG4gICAgICAgIGlmIChtaW5MZW5ndGggPT09IDAgfHwgaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGgpIHtcbiAgICAgICAgICBpZiAod2FpdFRpbWUgPiAwKSB7XG4gICAgICAgICAgICBjYW5jZWxQcmV2aW91c1RpbWVvdXQoKTtcbiAgICAgICAgICAgIHNjaGVkdWxlU2VhcmNoV2l0aFRpbWVvdXQoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldE1hdGNoZXNBc3luYyhpbnB1dFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNMb2FkaW5nU2V0dGVyKG9yaWdpbmFsU2NvcGUsIGZhbHNlKTtcbiAgICAgICAgICBjYW5jZWxQcmV2aW91c1RpbWVvdXQoKTtcbiAgICAgICAgICByZXNldE1hdGNoZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgICAgICAvLyBSZXNldCBpbiBjYXNlIHVzZXIgaGFkIHR5cGVkIHNvbWV0aGluZyBwcmV2aW91c2x5LlxuICAgICAgICAgIG1vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ2VkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBtb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuXG4gICAgICBtb2RlbEN0cmwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG4gICAgICAgIHZhciBjYW5kaWRhdGVWaWV3VmFsdWUsIGVtcHR5Vmlld1ZhbHVlO1xuICAgICAgICB2YXIgbG9jYWxzID0ge307XG5cbiAgICAgICAgLy8gVGhlIHZhbGlkaXR5IG1heSBiZSBzZXQgdG8gZmFsc2UgdmlhICRwYXJzZXJzIChzZWUgYWJvdmUpIGlmXG4gICAgICAgIC8vIHRoZSBtb2RlbCBpcyByZXN0cmljdGVkIHRvIHNlbGVjdGVkIHZhbHVlcy4gSWYgdGhlIG1vZGVsXG4gICAgICAgIC8vIGlzIHNldCBtYW51YWxseSBpdCBpcyBjb25zaWRlcmVkIHRvIGJlIHZhbGlkLlxuICAgICAgICBpZiAoIWlzRWRpdGFibGUpIHtcbiAgICAgICAgICBtb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdlZGl0YWJsZScsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgbG9jYWxzLiRtb2RlbCA9IG1vZGVsVmFsdWU7XG4gICAgICAgICAgcmV0dXJuIGlucHV0Rm9ybWF0dGVyKG9yaWdpbmFsU2NvcGUsIGxvY2Fscyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2l0IG1pZ2h0IGhhcHBlbiB0aGF0IHdlIGRvbid0IGhhdmUgZW5vdWdoIGluZm8gdG8gcHJvcGVybHkgcmVuZGVyIGlucHV0IHZhbHVlXG4gICAgICAgIC8vd2UgbmVlZCB0byBjaGVjayBmb3IgdGhpcyBzaXR1YXRpb24gYW5kIHNpbXBseSByZXR1cm4gbW9kZWwgdmFsdWUgaWYgd2UgY2FuJ3QgYXBwbHkgY3VzdG9tIGZvcm1hdHRpbmdcbiAgICAgICAgbG9jYWxzW3BhcnNlclJlc3VsdC5pdGVtTmFtZV0gPSBtb2RlbFZhbHVlO1xuICAgICAgICBjYW5kaWRhdGVWaWV3VmFsdWUgPSBwYXJzZXJSZXN1bHQudmlld01hcHBlcihvcmlnaW5hbFNjb3BlLCBsb2NhbHMpO1xuICAgICAgICBsb2NhbHNbcGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZW1wdHlWaWV3VmFsdWUgPSBwYXJzZXJSZXN1bHQudmlld01hcHBlcihvcmlnaW5hbFNjb3BlLCBsb2NhbHMpO1xuXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVWaWV3VmFsdWUgIT09IGVtcHR5Vmlld1ZhbHVlID8gY2FuZGlkYXRlVmlld1ZhbHVlIDogbW9kZWxWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0T3B0aW9ucyhuZ01vZGVsQ3RybCkge1xuICAgICAgdmFyIG5nTW9kZWxPcHRpb25zO1xuXG4gICAgICBpZiAoYW5ndWxhci52ZXJzaW9uLm1pbm9yIDwgNikgeyAvLyBpbiBhbmd1bGFyIDwgMS42ICRvcHRpb25zIGNvdWxkIGJlIG1pc3NpbmdcbiAgICAgICAgLy8gZ3VhcmFudGVlIGEgdmFsdWVcbiAgICAgICAgbmdNb2RlbE9wdGlvbnMgPSBuZ01vZGVsQ3RybC4kb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAvLyBtaW1pYyAxLjYrIGFwaVxuICAgICAgICBuZ01vZGVsT3B0aW9ucy5nZXRPcHRpb24gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG5nTW9kZWxPcHRpb25zW2tleV07XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgeyAvLyBpbiBhbmd1bGFyID49MS42ICRvcHRpb25zIGlzIGFsd2F5cyBwcmVzZW50XG4gICAgICAgIG5nTW9kZWxPcHRpb25zID0gbmdNb2RlbEN0cmwuJG9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZ01vZGVsT3B0aW9ucztcbiAgICB9XG4gIH1dKVxuXG4gIC5kaXJlY3RpdmUoJ3VpYlR5cGVhaGVhZCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sbGVyOiAnVWliVHlwZWFoZWFkQ29udHJvbGxlcicsXG4gICAgICByZXF1aXJlOiBbJ25nTW9kZWwnLCAndWliVHlwZWFoZWFkJ10sXG4gICAgICBsaW5rOiBmdW5jdGlvbihvcmlnaW5hbFNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgICAgY3RybHNbMV0uaW5pdChjdHJsc1swXSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSlcblxuICAuZGlyZWN0aXZlKCd1aWJUeXBlYWhlYWRQb3B1cCcsIFsnJCRkZWJvdW5jZScsIGZ1bmN0aW9uKCQkZGVib3VuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGU6IHtcbiAgICAgICAgbWF0Y2hlczogJz0nLFxuICAgICAgICBxdWVyeTogJz0nLFxuICAgICAgICBhY3RpdmU6ICc9JyxcbiAgICAgICAgcG9zaXRpb246ICcmJyxcbiAgICAgICAgbW92ZUluUHJvZ3Jlc3M6ICc9JyxcbiAgICAgICAgc2VsZWN0OiAnJicsXG4gICAgICAgIGFzc2lnbklzT3BlbjogJyYnLFxuICAgICAgICBkZWJvdW5jZTogJyYnXG4gICAgICB9LFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbihlbGVtZW50LCBhdHRycykge1xuICAgICAgICByZXR1cm4gYXR0cnMucG9wdXBUZW1wbGF0ZVVybCB8fCAndWliL3RlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbCc7XG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHNjb3BlLnRlbXBsYXRlVXJsID0gYXR0cnMudGVtcGxhdGVVcmw7XG5cbiAgICAgICAgc2NvcGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGlzRHJvcGRvd25PcGVuID0gc2NvcGUubWF0Y2hlcy5sZW5ndGggPiAwO1xuICAgICAgICAgIHNjb3BlLmFzc2lnbklzT3Blbih7IGlzT3BlbjogaXNEcm9wZG93bk9wZW4gfSk7XG4gICAgICAgICAgcmV0dXJuIGlzRHJvcGRvd25PcGVuO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNjb3BlLmlzQWN0aXZlID0gZnVuY3Rpb24obWF0Y2hJZHgpIHtcbiAgICAgICAgICByZXR1cm4gc2NvcGUuYWN0aXZlID09PSBtYXRjaElkeDtcbiAgICAgICAgfTtcblxuICAgICAgICBzY29wZS5zZWxlY3RBY3RpdmUgPSBmdW5jdGlvbihtYXRjaElkeCkge1xuICAgICAgICAgIHNjb3BlLmFjdGl2ZSA9IG1hdGNoSWR4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHNjb3BlLnNlbGVjdE1hdGNoID0gZnVuY3Rpb24oYWN0aXZlSWR4LCBldnQpIHtcbiAgICAgICAgICB2YXIgZGVib3VuY2UgPSBzY29wZS5kZWJvdW5jZSgpO1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKGRlYm91bmNlKSB8fCBhbmd1bGFyLmlzT2JqZWN0KGRlYm91bmNlKSkge1xuICAgICAgICAgICAgJCRkZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2NvcGUuc2VsZWN0KHthY3RpdmVJZHg6IGFjdGl2ZUlkeCwgZXZ0OiBldnR9KTtcbiAgICAgICAgICAgIH0sIGFuZ3VsYXIuaXNOdW1iZXIoZGVib3VuY2UpID8gZGVib3VuY2UgOiBkZWJvdW5jZVsnZGVmYXVsdCddKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NvcGUuc2VsZWN0KHthY3RpdmVJZHg6IGFjdGl2ZUlkeCwgZXZ0OiBldnR9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG5cbiAgLmRpcmVjdGl2ZSgndWliVHlwZWFoZWFkTWF0Y2gnLCBbJyR0ZW1wbGF0ZVJlcXVlc3QnLCAnJGNvbXBpbGUnLCAnJHBhcnNlJywgZnVuY3Rpb24oJHRlbXBsYXRlUmVxdWVzdCwgJGNvbXBpbGUsICRwYXJzZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZToge1xuICAgICAgICBpbmRleDogJz0nLFxuICAgICAgICBtYXRjaDogJz0nLFxuICAgICAgICBxdWVyeTogJz0nXG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciB0cGxVcmwgPSAkcGFyc2UoYXR0cnMudGVtcGxhdGVVcmwpKHNjb3BlLiRwYXJlbnQpIHx8ICd1aWIvdGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5odG1sJztcbiAgICAgICAgJHRlbXBsYXRlUmVxdWVzdCh0cGxVcmwpLnRoZW4oZnVuY3Rpb24odHBsQ29udGVudCkge1xuICAgICAgICAgIHZhciB0cGxFbCA9IGFuZ3VsYXIuZWxlbWVudCh0cGxDb250ZW50LnRyaW0oKSk7XG4gICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCh0cGxFbCk7XG4gICAgICAgICAgJGNvbXBpbGUodHBsRWwpKHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG5cbiAgLmZpbHRlcigndWliVHlwZWFoZWFkSGlnaGxpZ2h0JywgWyckc2NlJywgJyRpbmplY3RvcicsICckbG9nJywgZnVuY3Rpb24oJHNjZSwgJGluamVjdG9yLCAkbG9nKSB7XG4gICAgdmFyIGlzU2FuaXRpemVQcmVzZW50O1xuICAgIGlzU2FuaXRpemVQcmVzZW50ID0gJGluamVjdG9yLmhhcygnJHNhbml0aXplJyk7XG5cbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgICAgLy8gUmVnZXg6IGNhcHR1cmUgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2hcbiAgICAgIC8vIHRoZSByZXN1bHRzLCBmb3IgZXhhbXBsZSBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zSHRtbChtYXRjaEl0ZW0pIHtcbiAgICAgIHJldHVybiAvPC4qPi9nLnRlc3QobWF0Y2hJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24obWF0Y2hJdGVtLCBxdWVyeSkge1xuICAgICAgaWYgKCFpc1Nhbml0aXplUHJlc2VudCAmJiBjb250YWluc0h0bWwobWF0Y2hJdGVtKSkge1xuICAgICAgICAkbG9nLndhcm4oJ1Vuc2FmZSB1c2Ugb2YgdHlwZWFoZWFkIHBsZWFzZSB1c2UgbmdTYW5pdGl6ZScpOyAvLyBXYXJuIHRoZSB1c2VyIGFib3V0IHRoZSBkYW5nZXJcbiAgICAgIH1cbiAgICAgIG1hdGNoSXRlbSA9IHF1ZXJ5ID8gKCcnICsgbWF0Y2hJdGVtKS5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnZXhwKHF1ZXJ5KSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaEl0ZW07IC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIGEgdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgICBpZiAoIWlzU2FuaXRpemVQcmVzZW50KSB7XG4gICAgICAgIG1hdGNoSXRlbSA9ICRzY2UudHJ1c3RBc0h0bWwobWF0Y2hJdGVtKTsgLy8gSWYgJHNhbml0aXplIGlzIG5vdCBwcmVzZW50IHdlIHBhY2sgdGhlIHN0cmluZyBpbiBhICRzY2Ugb2JqZWN0IGZvciB0aGUgbmctYmluZC1odG1sIGRpcmVjdGl2ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoSXRlbTtcbiAgICB9O1xuICB9XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5odG1sXCIsXG4gICAgXCI8ZGl2IHJvbGU9XFxcInRhYlxcXCIgaWQ9XFxcInt7OjpoZWFkaW5nSWR9fVxcXCIgYXJpYS1zZWxlY3RlZD1cXFwie3tpc09wZW59fVxcXCIgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiIG5nLWtleXByZXNzPVxcXCJ0b2dnbGVPcGVuKCRldmVudClcXFwiPlxcblwiICtcbiAgICBcIiAgPGg0IGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBocmVmIGFyaWEtZXhwYW5kZWQ9XFxcInt7aXNPcGVufX1cXFwiIGFyaWEtY29udHJvbHM9XFxcInt7OjpwYW5lbElkfX1cXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLXRvZ2dsZVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU9wZW4oKVxcXCIgdWliLWFjY29yZGlvbi10cmFuc2NsdWRlPVxcXCJoZWFkaW5nXFxcIiBuZy1kaXNhYmxlZD1cXFwiaXNEaXNhYmxlZFxcXCIgdWliLXRhYmluZGV4LXRvZ2dsZT48c3BhbiB1aWItYWNjb3JkaW9uLWhlYWRlciBuZy1jbGFzcz1cXFwieyd0ZXh0LW11dGVkJzogaXNEaXNhYmxlZH1cXFwiPnt7aGVhZGluZ319PC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgIDwvaDQ+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBpZD1cXFwie3s6OnBhbmVsSWR9fVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6aGVhZGluZ0lkfX1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ7eyFpc09wZW59fVxcXCIgcm9sZT1cXFwidGFicGFuZWxcXFwiIGNsYXNzPVxcXCJwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgdWliLWNvbGxhcHNlPVxcXCIhaXNPcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLFxuICAgIFwiPGRpdiByb2xlPVxcXCJ0YWJsaXN0XFxcIiBjbGFzcz1cXFwicGFuZWwtZ3JvdXBcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9hbGVydC9hbGVydC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9hbGVydC9hbGVydC5odG1sXCIsXG4gICAgXCI8YnV0dG9uIG5nLXNob3c9XFxcImNsb3NlYWJsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSh7JGV2ZW50OiAkZXZlbnR9KVxcXCI+XFxuXCIgK1xuICAgIFwiICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj5cXG5cIiArXG4gICAgXCI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG5cIiArXG4gICAgXCI8YSByb2xlPVxcXCJidXR0b25cXFwiIGhyZWYgY2xhc3M9XFxcImxlZnQgY2Fyb3VzZWwtY29udHJvbFxcXCIgbmctY2xpY2s9XFxcInByZXYoKVxcXCIgbmctY2xhc3M9XFxcInsgZGlzYWJsZWQ6IGlzUHJldkRpc2FibGVkKCkgfVxcXCIgbmctc2hvdz1cXFwic2xpZGVzLmxlbmd0aCA+IDFcXFwiPlxcblwiICtcbiAgICBcIiAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPnByZXZpb3VzPC9zcGFuPlxcblwiICtcbiAgICBcIjwvYT5cXG5cIiArXG4gICAgXCI8YSByb2xlPVxcXCJidXR0b25cXFwiIGhyZWYgY2xhc3M9XFxcInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcXFwiIG5nLWNsaWNrPVxcXCJuZXh0KClcXFwiIG5nLWNsYXNzPVxcXCJ7IGRpc2FibGVkOiBpc05leHREaXNhYmxlZCgpIH1cXFwiIG5nLXNob3c9XFxcInNsaWRlcy5sZW5ndGggPiAxXFxcIj5cXG5cIiArXG4gICAgXCIgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+bmV4dDwvc3Bhbj5cXG5cIiArXG4gICAgXCI8L2E+XFxuXCIgK1xuICAgIFwiPG9sIGNsYXNzPVxcXCJjYXJvdXNlbC1pbmRpY2F0b3JzXFxcIiBuZy1zaG93PVxcXCJzbGlkZXMubGVuZ3RoID4gMVxcXCI+XFxuXCIgK1xuICAgIFwiICA8bGkgbmctcmVwZWF0PVxcXCJzbGlkZSBpbiBzbGlkZXMgfCBvcmRlckJ5OmluZGV4T2ZTbGlkZSB0cmFjayBieSAkaW5kZXhcXFwiIG5nLWNsYXNzPVxcXCJ7IGFjdGl2ZTogaXNBY3RpdmUoc2xpZGUpIH1cXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3Qoc2xpZGUpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPnNsaWRlIHt7ICRpbmRleCArIDEgfX0gb2Yge3sgc2xpZGVzLmxlbmd0aCB9fTxzcGFuIG5nLWlmPVxcXCJpc0FjdGl2ZShzbGlkZSlcXFwiPiwgY3VycmVudGx5IGFjdGl2ZTwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2xpPlxcblwiICtcbiAgICBcIjwvb2w+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLFxuICAgIFwiPGRpdiBuZy1zd2l0Y2g9XFxcImRhdGVwaWNrZXJNb2RlXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgdWliLWRheXBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cXFwiZGF5XFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcInVpYi1kYXlwaWNrZXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiB1aWItbW9udGhwaWNrZXIgbmctc3dpdGNoLXdoZW49XFxcIm1vbnRoXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcInVpYi1tb250aHBpY2tlclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHVpYi15ZWFycGlja2VyIG5nLXN3aXRjaC13aGVuPVxcXCJ5ZWFyXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcInVpYi15ZWFycGlja2VyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWxcIixcbiAgICBcIjx0YWJsZSByb2xlPVxcXCJncmlkXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInt7Ojp1bmlxdWVJZH19LXRpdGxlXFxcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XFxcInt7YWN0aXZlRGF0ZUlkfX1cXFwiPlxcblwiICtcbiAgICBcIiAgPHRoZWFkPlxcblwiICtcbiAgICBcIiAgICA8dHI+XFxuXCIgK1xuICAgIFwiICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnQgdWliLWxlZnRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKC0xKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48aSBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XFxcIj48L2k+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPnByZXZpb3VzPC9zcGFuPjwvYnV0dG9uPjwvdGg+XFxuXCIgK1xuICAgIFwiICAgICAgPHRoIGNvbHNwYW49XFxcInt7Ojo1ICsgc2hvd1dlZWtzfX1cXFwiPjxidXR0b24gaWQ9XFxcInt7Ojp1bmlxdWVJZH19LXRpdGxlXFxcIiByb2xlPVxcXCJoZWFkaW5nXFxcIiBhcmlhLWxpdmU9XFxcImFzc2VydGl2ZVxcXCIgYXJpYS1hdG9taWM9XFxcInRydWVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gdWliLXRpdGxlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlTW9kZSgpXFxcIiBuZy1kaXNhYmxlZD1cXFwiZGF0ZXBpY2tlck1vZGUgPT09IG1heE1vZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcblwiICtcbiAgICBcIiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCB1aWItcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKDEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPm5leHQ8L3NwYW4+PC9idXR0b24+PC90aD5cXG5cIiArXG4gICAgXCIgICAgPC90cj5cXG5cIiArXG4gICAgXCIgICAgPHRyPlxcblwiICtcbiAgICBcIiAgICAgIDx0aCBuZy1pZj1cXFwic2hvd1dlZWtzXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjwvdGg+XFxuXCIgK1xuICAgIFwiICAgICAgPHRoIG5nLXJlcGVhdD1cXFwibGFiZWwgaW4gOjpsYWJlbHMgdHJhY2sgYnkgJGluZGV4XFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxzbWFsbCBhcmlhLWxhYmVsPVxcXCJ7ezo6bGFiZWwuZnVsbH19XFxcIj57ezo6bGFiZWwuYWJicn19PC9zbWFsbD48L3RoPlxcblwiICtcbiAgICBcIiAgICA8L3RyPlxcblwiICtcbiAgICBcIiAgPC90aGVhZD5cXG5cIiArXG4gICAgXCIgIDx0Ym9keT5cXG5cIiArXG4gICAgXCIgICAgPHRyIGNsYXNzPVxcXCJ1aWItd2Vla3NcXFwiIG5nLXJlcGVhdD1cXFwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XFxcIiByb2xlPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBuZy1pZj1cXFwic2hvd1dlZWtzXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgaDZcXFwiPjxlbT57eyB3ZWVrTnVtYmVyc1skaW5kZXhdIH19PC9lbT48L3RkPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBuZy1yZXBlYXQ9XFxcImR0IGluIHJvd1xcXCIgY2xhc3M9XFxcInVpYi1kYXkgdGV4dC1jZW50ZXJcXFwiIHJvbGU9XFxcImdyaWRjZWxsXFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgaWQ9XFxcInt7OjpkdC51aWR9fVxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgIG5nLWNsYXNzPVxcXCI6OmR0LmN1c3RvbUNsYXNzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgdWliLWlzLWNsYXNzPVxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAnYnRuLWluZm8nIGZvciBzZWxlY3RlZER0LFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICdhY3RpdmUnIGZvciBhY3RpdmVEdFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIG9uIGR0XFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgICBuZy1jbGljaz1cXFwic2VsZWN0KGR0LmRhdGUpXFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpkdC5kaXNhYmxlZFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwiOjp7J3RleHQtbXV0ZWQnOiBkdC5zZWNvbmRhcnksICd0ZXh0LWluZm8nOiBkdC5jdXJyZW50fVxcXCI+e3s6OmR0LmxhYmVsfX08L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC90ZD5cXG5cIiArXG4gICAgXCIgICAgPC90cj5cXG5cIiArXG4gICAgXCIgIDwvdGJvZHk+XFxuXCIgK1xuICAgIFwiPC90YWJsZT5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlci9tb250aC5odG1sXCIsXG4gICAgXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6dW5pcXVlSWR9fS10aXRsZVxcXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVxcXCJ7e2FjdGl2ZURhdGVJZH19XFxcIj5cXG5cIiArXG4gICAgXCIgIDx0aGVhZD5cXG5cIiArXG4gICAgXCIgICAgPHRyPlxcblwiICtcbiAgICBcIiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IHVpYi1sZWZ0XFxcIiBuZy1jbGljaz1cXFwibW92ZSgtMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5wcmV2aW91czwvc3Bhbj48L2J1dHRvbj48L3RoPlxcblwiICtcbiAgICBcIiAgICAgIDx0aCBjb2xzcGFuPVxcXCJ7ezo6eWVhckhlYWRlckNvbHNwYW59fVxcXCI+PGJ1dHRvbiBpZD1cXFwie3s6OnVuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSB1aWItdGl0bGVcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVNb2RlKClcXFwiIG5nLWRpc2FibGVkPVxcXCJkYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPjwvYnV0dG9uPjwvdGg+XFxuXCIgK1xuICAgIFwiICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0IHVpYi1yaWdodFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+bmV4dDwvc3Bhbj48L2k+PC9idXR0b24+PC90aD5cXG5cIiArXG4gICAgXCIgICAgPC90cj5cXG5cIiArXG4gICAgXCIgIDwvdGhlYWQ+XFxuXCIgK1xuICAgIFwiICA8dGJvZHk+XFxuXCIgK1xuICAgIFwiICAgIDx0ciBjbGFzcz1cXFwidWliLW1vbnRoc1xcXCIgbmctcmVwZWF0PVxcXCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcXFwiIHJvbGU9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiZHQgaW4gcm93XFxcIiBjbGFzcz1cXFwidWliLW1vbnRoIHRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgIGlkPVxcXCJ7ezo6ZHQudWlkfX1cXFwiXFxuXCIgK1xuICAgIFwiICAgICAgICBuZy1jbGFzcz1cXFwiOjpkdC5jdXN0b21DbGFzc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgdWliLWlzLWNsYXNzPVxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAnYnRuLWluZm8nIGZvciBzZWxlY3RlZER0LFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICdhY3RpdmUnIGZvciBhY3RpdmVEdFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIG9uIGR0XFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgICBuZy1jbGljaz1cXFwic2VsZWN0KGR0LmRhdGUpXFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpkdC5kaXNhYmxlZFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwiOjp7J3RleHQtaW5mbyc6IGR0LmN1cnJlbnR9XFxcIj57ezo6ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L3RkPlxcblwiICtcbiAgICBcIiAgICA8L3RyPlxcblwiICtcbiAgICBcIiAgPC90Ym9keT5cXG5cIiArXG4gICAgXCI8L3RhYmxlPlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlci9wb3B1cC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLFxuICAgIFwiPGRpdj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwidWliLWRhdGVwaWNrZXItcG9wdXAgZHJvcGRvd24tbWVudSB1aWItcG9zaXRpb24tbWVhc3VyZVxcXCIgZHJvcGRvd24tbmVzdGVkIG5nLWlmPVxcXCJpc09wZW5cXFwiIG5nLWtleWRvd249XFxcImtleWRvd24oJGV2ZW50KVxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy10cmFuc2NsdWRlPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1pZj1cXFwic2hvd0J1dHRvbkJhclxcXCIgY2xhc3M9XFxcInVpYi1idXR0b24tYmFyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiYnRuLWdyb3VwIHB1bGwtbGVmdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWluZm8gdWliLWRhdGVwaWNrZXItY3VycmVudFxcXCIgbmctY2xpY2s9XFxcInNlbGVjdCgndG9kYXknLCAkZXZlbnQpXFxcIiBuZy1kaXNhYmxlZD1cXFwiaXNEaXNhYmxlZCgndG9kYXknKVxcXCI+e3sgZ2V0VGV4dCgnY3VycmVudCcpIH19PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWRhbmdlciB1aWItY2xlYXJcXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QobnVsbCwgJGV2ZW50KVxcXCI+e3sgZ2V0VGV4dCgnY2xlYXInKSB9fTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3MgcHVsbC1yaWdodCB1aWItY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgkZXZlbnQpXFxcIj57eyBnZXRUZXh0KCdjbG9zZScpIH19PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsXG4gICAgXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6dW5pcXVlSWR9fS10aXRsZVxcXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVxcXCJ7e2FjdGl2ZURhdGVJZH19XFxcIj5cXG5cIiArXG4gICAgXCIgIDx0aGVhZD5cXG5cIiArXG4gICAgXCIgICAgPHRyPlxcblwiICtcbiAgICBcIiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IHVpYi1sZWZ0XFxcIiBuZy1jbGljaz1cXFwibW92ZSgtMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5wcmV2aW91czwvc3Bhbj48L2J1dHRvbj48L3RoPlxcblwiICtcbiAgICBcIiAgICAgIDx0aCBjb2xzcGFuPVxcXCJ7ezo6Y29sdW1ucyAtIDJ9fVxcXCI+PGJ1dHRvbiBpZD1cXFwie3s6OnVuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSB1aWItdGl0bGVcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVNb2RlKClcXFwiIG5nLWRpc2FibGVkPVxcXCJkYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPjwvYnV0dG9uPjwvdGg+XFxuXCIgK1xuICAgIFwiICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0IHVpYi1yaWdodFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+bmV4dDwvc3Bhbj48L2J1dHRvbj48L3RoPlxcblwiICtcbiAgICBcIiAgICA8L3RyPlxcblwiICtcbiAgICBcIiAgPC90aGVhZD5cXG5cIiArXG4gICAgXCIgIDx0Ym9keT5cXG5cIiArXG4gICAgXCIgICAgPHRyIGNsYXNzPVxcXCJ1aWIteWVhcnNcXFwiIG5nLXJlcGVhdD1cXFwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XFxcIiByb2xlPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBuZy1yZXBlYXQ9XFxcImR0IGluIHJvd1xcXCIgY2xhc3M9XFxcInVpYi15ZWFyIHRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgIGlkPVxcXCJ7ezo6ZHQudWlkfX1cXFwiXFxuXCIgK1xuICAgIFwiICAgICAgICBuZy1jbGFzcz1cXFwiOjpkdC5jdXN0b21DbGFzc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgdWliLWlzLWNsYXNzPVxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAnYnRuLWluZm8nIGZvciBzZWxlY3RlZER0LFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICdhY3RpdmUnIGZvciBhY3RpdmVEdFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIG9uIGR0XFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgICBuZy1jbGljaz1cXFwic2VsZWN0KGR0LmRhdGUpXFxcIlxcblwiICtcbiAgICBcIiAgICAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpkdC5kaXNhYmxlZFxcXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwiOjp7J3RleHQtaW5mbyc6IGR0LmN1cnJlbnR9XFxcIj57ezo6ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L3RkPlxcblwiICtcbiAgICBcIiAgICA8L3RyPlxcblwiICtcbiAgICBcIiAgPC90Ym9keT5cXG5cIiArXG4gICAgXCI8L3RhYmxlPlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvZGF0ZXBpY2tlclBvcHVwL3BvcHVwLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL2RhdGVwaWNrZXJQb3B1cC9wb3B1cC5odG1sXCIsXG4gICAgXCI8dWwgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiBjbGFzcz1cXFwidWliLWRhdGVwaWNrZXItcG9wdXAgZHJvcGRvd24tbWVudSB1aWItcG9zaXRpb24tbWVhc3VyZVxcXCIgZHJvcGRvd24tbmVzdGVkIG5nLWlmPVxcXCJpc09wZW5cXFwiIG5nLWtleWRvd249XFxcImtleWRvd24oJGV2ZW50KVxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+XFxuXCIgK1xuICAgIFwiICA8bGkgbmctdHJhbnNjbHVkZT48L2xpPlxcblwiICtcbiAgICBcIiAgPGxpIG5nLWlmPVxcXCJzaG93QnV0dG9uQmFyXFxcIiBjbGFzcz1cXFwidWliLWJ1dHRvbi1iYXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiYnRuLWdyb3VwIHB1bGwtbGVmdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1pbmZvIHVpYi1kYXRlcGlja2VyLWN1cnJlbnRcXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QoJ3RvZGF5JywgJGV2ZW50KVxcXCIgbmctZGlzYWJsZWQ9XFxcImlzRGlzYWJsZWQoJ3RvZGF5JylcXFwiPnt7IGdldFRleHQoJ2N1cnJlbnQnKSB9fTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyIHVpYi1jbGVhclxcXCIgbmctY2xpY2s9XFxcInNlbGVjdChudWxsLCAkZXZlbnQpXFxcIj57eyBnZXRUZXh0KCdjbGVhcicpIH19PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHQgdWliLWNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoJGV2ZW50KVxcXCI+e3sgZ2V0VGV4dCgnY2xvc2UnKSB9fTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPC9saT5cXG5cIiArXG4gICAgXCI8L3VsPlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9tb2RhbC9iYWNrZHJvcC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZHJvcFxcXCJcXG5cIiArXG4gICAgXCIgICAgIHVpYi1tb2RhbC1hbmltYXRpb24tY2xhc3M9XFxcImZhZGVcXFwiXFxuXCIgK1xuICAgIFwiICAgICBtb2RhbC1pbi1jbGFzcz1cXFwiaW5cXFwiXFxuXCIgK1xuICAgIFwiICAgICBuZy1zdHlsZT1cXFwieyd6LWluZGV4JzogMTA0MCArIChpbmRleCAmJiAxIHx8IDApICsgaW5kZXgqMTB9XFxcIlxcblwiICtcbiAgICBcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIHt7c2l6ZSA/ICdtb2RhbC0nICsgc2l6ZSA6ICcnfX1cXFwiPjxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiIHVpYi1tb2RhbC10cmFuc2NsdWRlPjwvZGl2PjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvcGFnZXIvcGFnZXIuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvcGFnZXIvcGFnZXIuaHRtbFwiLFxuICAgIFwiPGxpIG5nLWNsYXNzPVxcXCJ7ZGlzYWJsZWQ6IG5vUHJldmlvdXMoKXx8bmdEaXNhYmxlZCwgcHJldmlvdXM6IGFsaWdufVxcXCI+PGEgaHJlZiBuZy1jbGljaz1cXFwic2VsZWN0UGFnZShwYWdlIC0gMSwgJGV2ZW50KVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5vUHJldmlvdXMoKXx8bmdEaXNhYmxlZFxcXCIgdWliLXRhYmluZGV4LXRvZ2dsZT57ezo6Z2V0VGV4dCgncHJldmlvdXMnKX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiPGxpIG5nLWNsYXNzPVxcXCJ7ZGlzYWJsZWQ6IG5vTmV4dCgpfHxuZ0Rpc2FibGVkLCBuZXh0OiBhbGlnbn1cXFwiPjxhIGhyZWYgbmctY2xpY2s9XFxcInNlbGVjdFBhZ2UocGFnZSArIDEsICRldmVudClcXFwiIG5nLWRpc2FibGVkPVxcXCJub05leHQoKXx8bmdEaXNhYmxlZFxcXCIgdWliLXRhYmluZGV4LXRvZ2dsZT57ezo6Z2V0VGV4dCgnbmV4dCcpfX08L2E+PC9saT5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbFwiLFxuICAgIFwiPGxpIHJvbGU9XFxcIm1lbnVpdGVtXFxcIiBuZy1pZj1cXFwiOjpib3VuZGFyeUxpbmtzXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub1ByZXZpb3VzKCl8fG5nRGlzYWJsZWR9XFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1maXJzdFxcXCI+PGEgaHJlZiBuZy1jbGljaz1cXFwic2VsZWN0UGFnZSgxLCAkZXZlbnQpXFxcIiBuZy1kaXNhYmxlZD1cXFwibm9QcmV2aW91cygpfHxuZ0Rpc2FibGVkXFxcIiB1aWItdGFiaW5kZXgtdG9nZ2xlPnt7OjpnZXRUZXh0KCdmaXJzdCcpfX08L2E+PC9saT5cXG5cIiArXG4gICAgXCI8bGkgcm9sZT1cXFwibWVudWl0ZW1cXFwiIG5nLWlmPVxcXCI6OmRpcmVjdGlvbkxpbmtzXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub1ByZXZpb3VzKCl8fG5nRGlzYWJsZWR9XFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2XFxcIj48YSBocmVmIG5nLWNsaWNrPVxcXCJzZWxlY3RQYWdlKHBhZ2UgLSAxLCAkZXZlbnQpXFxcIiBuZy1kaXNhYmxlZD1cXFwibm9QcmV2aW91cygpfHxuZ0Rpc2FibGVkXFxcIiB1aWItdGFiaW5kZXgtdG9nZ2xlPnt7OjpnZXRUZXh0KCdwcmV2aW91cycpfX08L2E+PC9saT5cXG5cIiArXG4gICAgXCI8bGkgcm9sZT1cXFwibWVudWl0ZW1cXFwiIG5nLXJlcGVhdD1cXFwicGFnZSBpbiBwYWdlcyB0cmFjayBieSAkaW5kZXhcXFwiIG5nLWNsYXNzPVxcXCJ7YWN0aXZlOiBwYWdlLmFjdGl2ZSxkaXNhYmxlZDogbmdEaXNhYmxlZCYmIXBhZ2UuYWN0aXZlfVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tcGFnZVxcXCI+PGEgaHJlZiBuZy1jbGljaz1cXFwic2VsZWN0UGFnZShwYWdlLm51bWJlciwgJGV2ZW50KVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5nRGlzYWJsZWQmJiFwYWdlLmFjdGl2ZVxcXCIgdWliLXRhYmluZGV4LXRvZ2dsZT57e3BhZ2UudGV4dH19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiPGxpIHJvbGU9XFxcIm1lbnVpdGVtXFxcIiBuZy1pZj1cXFwiOjpkaXJlY3Rpb25MaW5rc1xcXCIgbmctY2xhc3M9XFxcIntkaXNhYmxlZDogbm9OZXh0KCl8fG5nRGlzYWJsZWR9XFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIj48YSBocmVmIG5nLWNsaWNrPVxcXCJzZWxlY3RQYWdlKHBhZ2UgKyAxLCAkZXZlbnQpXFxcIiBuZy1kaXNhYmxlZD1cXFwibm9OZXh0KCl8fG5nRGlzYWJsZWRcXFwiIHVpYi10YWJpbmRleC10b2dnbGU+e3s6OmdldFRleHQoJ25leHQnKX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiPGxpIHJvbGU9XFxcIm1lbnVpdGVtXFxcIiBuZy1pZj1cXFwiOjpib3VuZGFyeUxpbmtzXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub05leHQoKXx8bmdEaXNhYmxlZH1cXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxhc3RcXFwiPjxhIGhyZWYgbmctY2xpY2s9XFxcInNlbGVjdFBhZ2UodG90YWxQYWdlcywgJGV2ZW50KVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5vTmV4dCgpfHxuZ0Rpc2FibGVkXFxcIiB1aWItdGFiaW5kZXgtdG9nZ2xlPnt7OjpnZXRUZXh0KCdsYXN0Jyl9fTwvYT48L2xpPlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLWh0bWwtcG9wdXAuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLWh0bWwtcG9wdXAuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1hcnJvd1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1pbm5lclxcXCIgbmctYmluZC1odG1sPVxcXCJjb250ZW50RXhwKClcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLXBvcHVwLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1wb3B1cC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWFycm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWlubmVyXFxcIiBuZy1iaW5kPVxcXCJjb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC10ZW1wbGF0ZS1wb3B1cC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtdGVtcGxhdGUtcG9wdXAuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1hcnJvd1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1pbm5lclxcXCJcXG5cIiArXG4gICAgXCIgIHVpYi10b29sdGlwLXRlbXBsYXRlLXRyYW5zY2x1ZGU9XFxcImNvbnRlbnRFeHAoKVxcXCJcXG5cIiArXG4gICAgXCIgIHRvb2x0aXAtdGVtcGxhdGUtdHJhbnNjbHVkZS1zY29wZT1cXFwib3JpZ2luU2NvcGUoKVxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXItaHRtbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXItaHRtbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhcnJvd1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicG9wb3Zlci1pbm5lclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwicG9wb3Zlci10aXRsZVxcXCIgbmctYmluZD1cXFwidWliVGl0bGVcXFwiIG5nLWlmPVxcXCJ1aWJUaXRsZVxcXCI+PC9oMz5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicG9wb3Zlci1jb250ZW50XFxcIiBuZy1iaW5kLWh0bWw9XFxcImNvbnRlbnRFeHAoKVxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXItdGVtcGxhdGUuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLXRlbXBsYXRlLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFycm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwb3BvdmVyLWlubmVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJwb3BvdmVyLXRpdGxlXFxcIiBuZy1iaW5kPVxcXCJ1aWJUaXRsZVxcXCIgbmctaWY9XFxcInVpYlRpdGxlXFxcIj48L2gzPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJwb3BvdmVyLWNvbnRlbnRcXFwiXFxuXCIgK1xuICAgIFwiICAgICAgdWliLXRvb2x0aXAtdGVtcGxhdGUtdHJhbnNjbHVkZT1cXFwiY29udGVudEV4cCgpXFxcIlxcblwiICtcbiAgICBcIiAgICAgIHRvb2x0aXAtdGVtcGxhdGUtdHJhbnNjbHVkZS1zY29wZT1cXFwib3JpZ2luU2NvcGUoKVxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXIuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFycm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwb3BvdmVyLWlubmVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJwb3BvdmVyLXRpdGxlXFxcIiBuZy1iaW5kPVxcXCJ1aWJUaXRsZVxcXCIgbmctaWY9XFxcInVpYlRpdGxlXFxcIj48L2gzPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJwb3BvdmVyLWNvbnRlbnRcXFwiIG5nLWJpbmQ9XFxcImNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL3Byb2dyZXNzYmFyL2Jhci5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1iYXJcXFwiIG5nLWNsYXNzPVxcXCJ0eXBlICYmICdwcm9ncmVzcy1iYXItJyArIHR5cGVcXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBhcmlhLXZhbHVlbm93PVxcXCJ7e3ZhbHVlfX1cXFwiIGFyaWEtdmFsdWVtaW49XFxcIjBcXFwiIGFyaWEtdmFsdWVtYXg9XFxcInt7bWF4fX1cXFwiIG5nLXN0eWxlPVxcXCJ7d2lkdGg6IChwZXJjZW50IDwgMTAwID8gcGVyY2VudCA6IDEwMCkgKyAnJSd9XFxcIiBhcmlhLXZhbHVldGV4dD1cXFwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwie3s6OnRpdGxlfX1cXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCIgbmctdHJhbnNjbHVkZSBhcmlhLWxhYmVsbGVkYnk9XFxcInt7Ojp0aXRsZX19XFxcIj48L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwidWliL3RlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhclxcXCIgbmctY2xhc3M9XFxcInR5cGUgJiYgJ3Byb2dyZXNzLWJhci0nICsgdHlwZVxcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIGFyaWEtdmFsdWVub3c9XFxcInt7dmFsdWV9fVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3ttYXh9fVxcXCIgbmctc3R5bGU9XFxcInt3aWR0aDogKHBlcmNlbnQgPCAxMDAgPyBwZXJjZW50IDogMTAwKSArICclJ31cXFwiIGFyaWEtdmFsdWV0ZXh0PVxcXCJ7e3BlcmNlbnQgfCBudW1iZXI6MH19JVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6dGl0bGV9fVxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsXG4gICAgXCI8c3BhbiBuZy1tb3VzZWxlYXZlPVxcXCJyZXNldCgpXFxcIiBuZy1rZXlkb3duPVxcXCJvbktleWRvd24oJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIHJvbGU9XFxcInNsaWRlclxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3tyYW5nZS5sZW5ndGh9fVxcXCIgYXJpYS12YWx1ZW5vdz1cXFwie3t2YWx1ZX19XFxcIiBhcmlhLXZhbHVldGV4dD1cXFwie3t0aXRsZX19XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gbmctcmVwZWF0LXN0YXJ0PVxcXCJyIGluIHJhbmdlIHRyYWNrIGJ5ICRpbmRleFxcXCIgY2xhc3M9XFxcInNyLW9ubHlcXFwiPih7eyAkaW5kZXggPCB2YWx1ZSA/ICcqJyA6ICcgJyB9fSk8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDxpIG5nLXJlcGVhdC1lbmQgbmctbW91c2VlbnRlcj1cXFwiZW50ZXIoJGluZGV4ICsgMSlcXFwiIG5nLWNsaWNrPVxcXCJyYXRlKCRpbmRleCArIDEpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiBuZy1jbGFzcz1cXFwiJGluZGV4IDwgdmFsdWUgJiYgKHIuc3RhdGVPbiB8fCAnZ2x5cGhpY29uLXN0YXInKSB8fCAoci5zdGF0ZU9mZiB8fCAnZ2x5cGhpY29uLXN0YXItZW1wdHknKVxcXCIgbmctYXR0ci10aXRsZT1cXFwie3tyLnRpdGxlfX1cXFwiPjwvaT5cXG5cIiArXG4gICAgXCI8L3NwYW4+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS90YWJzL3RhYi5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS90YWJzL3RhYi5odG1sXCIsXG4gICAgXCI8bGkgbmctY2xhc3M9XFxcIlt7YWN0aXZlOiBhY3RpdmUsIGRpc2FibGVkOiBkaXNhYmxlZH0sIGNsYXNzZXNdXFxcIiBjbGFzcz1cXFwidWliLXRhYiBuYXYtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBocmVmIG5nLWNsaWNrPVxcXCJzZWxlY3QoJGV2ZW50KVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiB1aWItdGFiLWhlYWRpbmctdHJhbnNjbHVkZT57e2hlYWRpbmd9fTwvYT5cXG5cIiArXG4gICAgXCI8L2xpPlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLFxuICAgIFwiPGRpdj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi17e3RhYnNldC50eXBlIHx8ICd0YWJzJ319XFxcIiBuZy1jbGFzcz1cXFwieyduYXYtc3RhY2tlZCc6IHZlcnRpY2FsLCAnbmF2LWp1c3RpZmllZCc6IGp1c3RpZmllZH1cXFwiIG5nLXRyYW5zY2x1ZGU+PC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250ZW50XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidGFiLXBhbmVcXFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgbmctcmVwZWF0PVxcXCJ0YWIgaW4gdGFic2V0LnRhYnNcXFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgbmctY2xhc3M9XFxcInthY3RpdmU6IHRhYnNldC5hY3RpdmUgPT09IHRhYi5pbmRleH1cXFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgdWliLXRhYi1jb250ZW50LXRyYW5zY2x1ZGU9XFxcInRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcInVpYi90ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixcbiAgICBcIjx0YWJsZSBjbGFzcz1cXFwidWliLXRpbWVwaWNrZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPHRib2R5PlxcblwiICtcbiAgICBcIiAgICA8dHIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBuZy1zaG93PVxcXCI6OnNob3dTcGlubmVyc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIGNsYXNzPVxcXCJ1aWItaW5jcmVtZW50IGhvdXJzXFxcIj48YSBuZy1jbGljaz1cXFwiaW5jcmVtZW50SG91cnMoKVxcXCIgbmctY2xhc3M9XFxcIntkaXNhYmxlZDogbm9JbmNyZW1lbnRIb3VycygpfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCIgbmctZGlzYWJsZWQ9XFxcIm5vSW5jcmVtZW50SG91cnMoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkPiZuYnNwOzwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIGNsYXNzPVxcXCJ1aWItaW5jcmVtZW50IG1pbnV0ZXNcXFwiPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRNaW51dGVzKClcXFwiIG5nLWNsYXNzPVxcXCJ7ZGlzYWJsZWQ6IG5vSW5jcmVtZW50TWludXRlcygpfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCIgbmctZGlzYWJsZWQ9XFxcIm5vSW5jcmVtZW50TWludXRlcygpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcXFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cIiArXG4gICAgXCIgICAgICA8dGQgbmctc2hvdz1cXFwic2hvd1NlY29uZHNcXFwiPiZuYnNwOzwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dTZWNvbmRzXFxcIiBjbGFzcz1cXFwidWliLWluY3JlbWVudCBzZWNvbmRzXFxcIj48YSBuZy1jbGljaz1cXFwiaW5jcmVtZW50U2Vjb25kcygpXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub0luY3JlbWVudFNlY29uZHMoKX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiIG5nLWRpc2FibGVkPVxcXCJub0luY3JlbWVudFNlY29uZHMoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dNZXJpZGlhblxcXCI+PC90ZD5cXG5cIiArXG4gICAgXCIgICAgPC90cj5cXG5cIiArXG4gICAgXCIgICAgPHRyPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBjbGFzcz1cXFwiZm9ybS1ncm91cCB1aWItdGltZSBob3Vyc1xcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaW52YWxpZEhvdXJzfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkhIXFxcIiBuZy1tb2RlbD1cXFwiaG91cnNcXFwiIG5nLWNoYW5nZT1cXFwidXBkYXRlSG91cnMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctcmVhZG9ubHk9XFxcIjo6cmVhZG9ubHlJbnB1dFxcXCIgbWF4bGVuZ3RoPVxcXCIyXFxcIiB0YWJpbmRleD1cXFwie3s6OnRhYmluZGV4fX1cXFwiIG5nLWRpc2FibGVkPVxcXCJub0luY3JlbWVudEhvdXJzKClcXFwiIG5nLWJsdXI9XFxcImJsdXIoKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPC90ZD5cXG5cIiArXG4gICAgXCIgICAgICA8dGQgY2xhc3M9XFxcInVpYi1zZXBhcmF0b3JcXFwiPjo8L3RkPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBjbGFzcz1cXFwiZm9ybS1ncm91cCB1aWItdGltZSBtaW51dGVzXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBpbnZhbGlkTWludXRlc31cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJNTVxcXCIgbmctbW9kZWw9XFxcIm1pbnV0ZXNcXFwiIG5nLWNoYW5nZT1cXFwidXBkYXRlTWludXRlcygpXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXFxcIiBuZy1yZWFkb25seT1cXFwiOjpyZWFkb25seUlucHV0XFxcIiBtYXhsZW5ndGg9XFxcIjJcXFwiIHRhYmluZGV4PVxcXCJ7ezo6dGFiaW5kZXh9fVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5vSW5jcmVtZW50TWludXRlcygpXFxcIiBuZy1ibHVyPVxcXCJibHVyKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dTZWNvbmRzXFxcIiBjbGFzcz1cXFwidWliLXNlcGFyYXRvclxcXCI+OjwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIGNsYXNzPVxcXCJmb3JtLWdyb3VwIHVpYi10aW1lIHNlY29uZHNcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGludmFsaWRTZWNvbmRzfVxcXCIgbmctc2hvdz1cXFwic2hvd1NlY29uZHNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTU1xcXCIgbmctbW9kZWw9XFxcInNlY29uZHNcXFwiIG5nLWNoYW5nZT1cXFwidXBkYXRlU2Vjb25kcygpXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXFxcIiBuZy1yZWFkb25seT1cXFwicmVhZG9ubHlJbnB1dFxcXCIgbWF4bGVuZ3RoPVxcXCIyXFxcIiB0YWJpbmRleD1cXFwie3s6OnRhYmluZGV4fX1cXFwiIG5nLWRpc2FibGVkPVxcXCJub0luY3JlbWVudFNlY29uZHMoKVxcXCIgbmctYmx1cj1cXFwiYmx1cigpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L3RkPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBuZy1zaG93PVxcXCJzaG93TWVyaWRpYW5cXFwiIGNsYXNzPVxcXCJ1aWItdGltZSBhbS1wbVxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsYXNzPVxcXCJ7ZGlzYWJsZWQ6IG5vVG9nZ2xlTWVyaWRpYW4oKX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgdGV4dC1jZW50ZXJcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVNZXJpZGlhbigpXFxcIiBuZy1kaXNhYmxlZD1cXFwibm9Ub2dnbGVNZXJpZGlhbigpXFxcIiB0YWJpbmRleD1cXFwie3s6OnRhYmluZGV4fX1cXFwiPnt7bWVyaWRpYW59fTwvYnV0dG9uPjwvdGQ+XFxuXCIgK1xuICAgIFwiICAgIDwvdHI+XFxuXCIgK1xuICAgIFwiICAgIDx0ciBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIG5nLXNob3c9XFxcIjo6c2hvd1NwaW5uZXJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dGQgY2xhc3M9XFxcInVpYi1kZWNyZW1lbnQgaG91cnNcXFwiPjxhIG5nLWNsaWNrPVxcXCJkZWNyZW1lbnRIb3VycygpXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub0RlY3JlbWVudEhvdXJzKCl9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIiBuZy1kaXNhYmxlZD1cXFwibm9EZWNyZW1lbnRIb3VycygpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blxcXCI+PC9zcGFuPjwvYT48L3RkPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZD4mbmJzcDs8L3RkPlxcblwiICtcbiAgICBcIiAgICAgIDx0ZCBjbGFzcz1cXFwidWliLWRlY3JlbWVudCBtaW51dGVzXFxcIj48YSBuZy1jbGljaz1cXFwiZGVjcmVtZW50TWludXRlcygpXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub0RlY3JlbWVudE1pbnV0ZXMoKX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiIG5nLWRpc2FibGVkPVxcXCJub0RlY3JlbWVudE1pbnV0ZXMoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cXFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cIiArXG4gICAgXCIgICAgICA8dGQgbmctc2hvdz1cXFwic2hvd1NlY29uZHNcXFwiPiZuYnNwOzwvdGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dTZWNvbmRzXFxcIiBjbGFzcz1cXFwidWliLWRlY3JlbWVudCBzZWNvbmRzXFxcIj48YSBuZy1jbGljaz1cXFwiZGVjcmVtZW50U2Vjb25kcygpXFxcIiBuZy1jbGFzcz1cXFwie2Rpc2FibGVkOiBub0RlY3JlbWVudFNlY29uZHMoKX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiIG5nLWRpc2FibGVkPVxcXCJub0RlY3JlbWVudFNlY29uZHMoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cXFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cIiArXG4gICAgXCIgICAgICA8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48L3RkPlxcblwiICtcbiAgICBcIiAgICA8L3RyPlxcblwiICtcbiAgICBcIiAgPC90Ym9keT5cXG5cIiArXG4gICAgXCI8L3RhYmxlPlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJ1aWIvdGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcInVpYi90ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLW1hdGNoLmh0bWxcIixcbiAgICBcIjxhIGhyZWZcXG5cIiArXG4gICAgXCIgICB0YWJpbmRleD1cXFwiLTFcXFwiXFxuXCIgK1xuICAgIFwiICAgbmctYmluZC1odG1sPVxcXCJtYXRjaC5sYWJlbCB8IHVpYlR5cGVhaGVhZEhpZ2hsaWdodDpxdWVyeVxcXCJcXG5cIiArXG4gICAgXCIgICBuZy1hdHRyLXRpdGxlPVxcXCJ7e21hdGNoLmxhYmVsfX1cXFwiPjwvYT5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwidWliL3RlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJ1aWIvdGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1wb3B1cC5odG1sXCIsXG4gICAgXCI8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nLXNob3c9XFxcImlzT3BlbigpICYmICFtb3ZlSW5Qcm9ncmVzc1xcXCIgbmctc3R5bGU9XFxcInt0b3A6IHBvc2l0aW9uKCkudG9wKydweCcsIGxlZnQ6IHBvc2l0aW9uKCkubGVmdCsncHgnfVxcXCIgcm9sZT1cXFwibGlzdGJveFxcXCIgYXJpYS1oaWRkZW49XFxcInt7IWlzT3BlbigpfX1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcInVpYi10eXBlYWhlYWQtbWF0Y2hcXFwiIG5nLXJlcGVhdD1cXFwibWF0Y2ggaW4gbWF0Y2hlcyB0cmFjayBieSAkaW5kZXhcXFwiIG5nLWNsYXNzPVxcXCJ7YWN0aXZlOiBpc0FjdGl2ZSgkaW5kZXgpIH1cXFwiIG5nLW1vdXNlZW50ZXI9XFxcInNlbGVjdEFjdGl2ZSgkaW5kZXgpXFxcIiBuZy1jbGljaz1cXFwic2VsZWN0TWF0Y2goJGluZGV4LCAkZXZlbnQpXFxcIiByb2xlPVxcXCJvcHRpb25cXFwiIGlkPVxcXCJ7ezo6bWF0Y2guaWR9fVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IHVpYi10eXBlYWhlYWQtbWF0Y2ggaW5kZXg9XFxcIiRpbmRleFxcXCIgbWF0Y2g9XFxcIm1hdGNoXFxcIiBxdWVyeT1cXFwicXVlcnlcXFwiIHRlbXBsYXRlLXVybD1cXFwidGVtcGxhdGVVcmxcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIjwvdWw+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5jYXJvdXNlbCcpLnJ1bihmdW5jdGlvbigpIHshYW5ndWxhci4kJGNzcCgpLm5vSW5saW5lU3R5bGUgJiYgIWFuZ3VsYXIuJCR1aWJDYXJvdXNlbENzcyAmJiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+Lm5nLWFuaW1hdGUuaXRlbTpub3QoLmxlZnQpOm5vdCgucmlnaHQpey13ZWJraXQtdHJhbnNpdGlvbjowcyBlYXNlLWluLW91dCBsZWZ0O3RyYW5zaXRpb246MHMgZWFzZS1pbi1vdXQgbGVmdH08L3N0eWxlPicpOyBhbmd1bGFyLiQkdWliQ2Fyb3VzZWxDc3MgPSB0cnVlOyB9KTtcbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuZGF0ZXBpY2tlcicpLnJ1bihmdW5jdGlvbigpIHshYW5ndWxhci4kJGNzcCgpLm5vSW5saW5lU3R5bGUgJiYgIWFuZ3VsYXIuJCR1aWJEYXRlcGlja2VyQ3NzICYmIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkuZmluZCgnaGVhZCcpLnByZXBlbmQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4udWliLWRhdGVwaWNrZXIgLnVpYi10aXRsZXt3aWR0aDoxMDAlO30udWliLWRheSBidXR0b24sLnVpYi1tb250aCBidXR0b24sLnVpYi15ZWFyIGJ1dHRvbnttaW4td2lkdGg6MTAwJTt9LnVpYi1sZWZ0LC51aWItcmlnaHR7d2lkdGg6MTAwJX08L3N0eWxlPicpOyBhbmd1bGFyLiQkdWliRGF0ZXBpY2tlckNzcyA9IHRydWU7IH0pO1xuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5wb3NpdGlvbicpLnJ1bihmdW5jdGlvbigpIHshYW5ndWxhci4kJGNzcCgpLm5vSW5saW5lU3R5bGUgJiYgIWFuZ3VsYXIuJCR1aWJQb3NpdGlvbkNzcyAmJiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnVpYi1wb3NpdGlvbi1tZWFzdXJle2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudDt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7dG9wOi05OTk5cHggIWltcG9ydGFudDtsZWZ0Oi05OTk5cHggIWltcG9ydGFudDt9LnVpYi1wb3NpdGlvbi1zY3JvbGxiYXItbWVhc3VyZXtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O3RvcDotOTk5OXB4ICFpbXBvcnRhbnQ7d2lkdGg6NTBweCAhaW1wb3J0YW50O2hlaWdodDo1MHB4ICFpbXBvcnRhbnQ7b3ZlcmZsb3c6c2Nyb2xsICFpbXBvcnRhbnQ7fS51aWItcG9zaXRpb24tYm9keS1zY3JvbGxiYXItbWVhc3VyZXtvdmVyZmxvdzpzY3JvbGwgIWltcG9ydGFudDt9PC9zdHlsZT4nKTsgYW5ndWxhci4kJHVpYlBvc2l0aW9uQ3NzID0gdHJ1ZTsgfSk7XG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmRhdGVwaWNrZXJQb3B1cCcpLnJ1bihmdW5jdGlvbigpIHshYW5ndWxhci4kJGNzcCgpLm5vSW5saW5lU3R5bGUgJiYgIWFuZ3VsYXIuJCR1aWJEYXRlcGlja2VycG9wdXBDc3MgJiYgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5maW5kKCdoZWFkJykucHJlcGVuZCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPi51aWItZGF0ZXBpY2tlci1wb3B1cC5kcm9wZG93bi1tZW51e2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZTttYXJnaW46MDt9LnVpYi1idXR0b24tYmFye3BhZGRpbmc6MTBweCA5cHggMnB4O308L3N0eWxlPicpOyBhbmd1bGFyLiQkdWliRGF0ZXBpY2tlcnBvcHVwQ3NzID0gdHJ1ZTsgfSk7XG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRvb2x0aXAnKS5ydW4oZnVuY3Rpb24oKSB7IWFuZ3VsYXIuJCRjc3AoKS5ub0lubGluZVN0eWxlICYmICFhbmd1bGFyLiQkdWliVG9vbHRpcENzcyAmJiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+W3VpYi10b29sdGlwLXBvcHVwXS50b29sdGlwLnRvcC1sZWZ0ID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLXBvcHVwXS50b29sdGlwLnRvcC1yaWdodCA+IC50b29sdGlwLWFycm93LFt1aWItdG9vbHRpcC1wb3B1cF0udG9vbHRpcC5ib3R0b20tbGVmdCA+IC50b29sdGlwLWFycm93LFt1aWItdG9vbHRpcC1wb3B1cF0udG9vbHRpcC5ib3R0b20tcmlnaHQgPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtcG9wdXBdLnRvb2x0aXAubGVmdC10b3AgPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtcG9wdXBdLnRvb2x0aXAubGVmdC1ib3R0b20gPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtcG9wdXBdLnRvb2x0aXAucmlnaHQtdG9wID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLXBvcHVwXS50b29sdGlwLnJpZ2h0LWJvdHRvbSA+IC50b29sdGlwLWFycm93LFt1aWItdG9vbHRpcC1odG1sLXBvcHVwXS50b29sdGlwLnRvcC1sZWZ0ID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLWh0bWwtcG9wdXBdLnRvb2x0aXAudG9wLXJpZ2h0ID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLWh0bWwtcG9wdXBdLnRvb2x0aXAuYm90dG9tLWxlZnQgPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtaHRtbC1wb3B1cF0udG9vbHRpcC5ib3R0b20tcmlnaHQgPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtaHRtbC1wb3B1cF0udG9vbHRpcC5sZWZ0LXRvcCA+IC50b29sdGlwLWFycm93LFt1aWItdG9vbHRpcC1odG1sLXBvcHVwXS50b29sdGlwLmxlZnQtYm90dG9tID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLWh0bWwtcG9wdXBdLnRvb2x0aXAucmlnaHQtdG9wID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLWh0bWwtcG9wdXBdLnRvb2x0aXAucmlnaHQtYm90dG9tID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLXRlbXBsYXRlLXBvcHVwXS50b29sdGlwLnRvcC1sZWZ0ID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLXRlbXBsYXRlLXBvcHVwXS50b29sdGlwLnRvcC1yaWdodCA+IC50b29sdGlwLWFycm93LFt1aWItdG9vbHRpcC10ZW1wbGF0ZS1wb3B1cF0udG9vbHRpcC5ib3R0b20tbGVmdCA+IC50b29sdGlwLWFycm93LFt1aWItdG9vbHRpcC10ZW1wbGF0ZS1wb3B1cF0udG9vbHRpcC5ib3R0b20tcmlnaHQgPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtdGVtcGxhdGUtcG9wdXBdLnRvb2x0aXAubGVmdC10b3AgPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtdGVtcGxhdGUtcG9wdXBdLnRvb2x0aXAubGVmdC1ib3R0b20gPiAudG9vbHRpcC1hcnJvdyxbdWliLXRvb2x0aXAtdGVtcGxhdGUtcG9wdXBdLnRvb2x0aXAucmlnaHQtdG9wID4gLnRvb2x0aXAtYXJyb3csW3VpYi10b29sdGlwLXRlbXBsYXRlLXBvcHVwXS50b29sdGlwLnJpZ2h0LWJvdHRvbSA+IC50b29sdGlwLWFycm93LFt1aWItcG9wb3Zlci1wb3B1cF0ucG9wb3Zlci50b3AtbGVmdCA+IC5hcnJvdyxbdWliLXBvcG92ZXItcG9wdXBdLnBvcG92ZXIudG9wLXJpZ2h0ID4gLmFycm93LFt1aWItcG9wb3Zlci1wb3B1cF0ucG9wb3Zlci5ib3R0b20tbGVmdCA+IC5hcnJvdyxbdWliLXBvcG92ZXItcG9wdXBdLnBvcG92ZXIuYm90dG9tLXJpZ2h0ID4gLmFycm93LFt1aWItcG9wb3Zlci1wb3B1cF0ucG9wb3Zlci5sZWZ0LXRvcCA+IC5hcnJvdyxbdWliLXBvcG92ZXItcG9wdXBdLnBvcG92ZXIubGVmdC1ib3R0b20gPiAuYXJyb3csW3VpYi1wb3BvdmVyLXBvcHVwXS5wb3BvdmVyLnJpZ2h0LXRvcCA+IC5hcnJvdyxbdWliLXBvcG92ZXItcG9wdXBdLnBvcG92ZXIucmlnaHQtYm90dG9tID4gLmFycm93LFt1aWItcG9wb3Zlci1odG1sLXBvcHVwXS5wb3BvdmVyLnRvcC1sZWZ0ID4gLmFycm93LFt1aWItcG9wb3Zlci1odG1sLXBvcHVwXS5wb3BvdmVyLnRvcC1yaWdodCA+IC5hcnJvdyxbdWliLXBvcG92ZXItaHRtbC1wb3B1cF0ucG9wb3Zlci5ib3R0b20tbGVmdCA+IC5hcnJvdyxbdWliLXBvcG92ZXItaHRtbC1wb3B1cF0ucG9wb3Zlci5ib3R0b20tcmlnaHQgPiAuYXJyb3csW3VpYi1wb3BvdmVyLWh0bWwtcG9wdXBdLnBvcG92ZXIubGVmdC10b3AgPiAuYXJyb3csW3VpYi1wb3BvdmVyLWh0bWwtcG9wdXBdLnBvcG92ZXIubGVmdC1ib3R0b20gPiAuYXJyb3csW3VpYi1wb3BvdmVyLWh0bWwtcG9wdXBdLnBvcG92ZXIucmlnaHQtdG9wID4gLmFycm93LFt1aWItcG9wb3Zlci1odG1sLXBvcHVwXS5wb3BvdmVyLnJpZ2h0LWJvdHRvbSA+IC5hcnJvdyxbdWliLXBvcG92ZXItdGVtcGxhdGUtcG9wdXBdLnBvcG92ZXIudG9wLWxlZnQgPiAuYXJyb3csW3VpYi1wb3BvdmVyLXRlbXBsYXRlLXBvcHVwXS5wb3BvdmVyLnRvcC1yaWdodCA+IC5hcnJvdyxbdWliLXBvcG92ZXItdGVtcGxhdGUtcG9wdXBdLnBvcG92ZXIuYm90dG9tLWxlZnQgPiAuYXJyb3csW3VpYi1wb3BvdmVyLXRlbXBsYXRlLXBvcHVwXS5wb3BvdmVyLmJvdHRvbS1yaWdodCA+IC5hcnJvdyxbdWliLXBvcG92ZXItdGVtcGxhdGUtcG9wdXBdLnBvcG92ZXIubGVmdC10b3AgPiAuYXJyb3csW3VpYi1wb3BvdmVyLXRlbXBsYXRlLXBvcHVwXS5wb3BvdmVyLmxlZnQtYm90dG9tID4gLmFycm93LFt1aWItcG9wb3Zlci10ZW1wbGF0ZS1wb3B1cF0ucG9wb3Zlci5yaWdodC10b3AgPiAuYXJyb3csW3VpYi1wb3BvdmVyLXRlbXBsYXRlLXBvcHVwXS5wb3BvdmVyLnJpZ2h0LWJvdHRvbSA+IC5hcnJvd3t0b3A6YXV0bztib3R0b206YXV0bztsZWZ0OmF1dG87cmlnaHQ6YXV0bzttYXJnaW46MDt9W3VpYi1wb3BvdmVyLXBvcHVwXS5wb3BvdmVyLFt1aWItcG9wb3Zlci1odG1sLXBvcHVwXS5wb3BvdmVyLFt1aWItcG9wb3Zlci10ZW1wbGF0ZS1wb3B1cF0ucG9wb3ZlcntkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7fTwvc3R5bGU+Jyk7IGFuZ3VsYXIuJCR1aWJUb29sdGlwQ3NzID0gdHJ1ZTsgfSk7XG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRpbWVwaWNrZXInKS5ydW4oZnVuY3Rpb24oKSB7IWFuZ3VsYXIuJCRjc3AoKS5ub0lubGluZVN0eWxlICYmICFhbmd1bGFyLiQkdWliVGltZXBpY2tlckNzcyAmJiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnVpYi10aW1lIGlucHV0e3dpZHRoOjUwcHg7fTwvc3R5bGU+Jyk7IGFuZ3VsYXIuJCR1aWJUaW1lcGlja2VyQ3NzID0gdHJ1ZTsgfSk7XG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnR5cGVhaGVhZCcpLnJ1bihmdW5jdGlvbigpIHshYW5ndWxhci4kJGNzcCgpLm5vSW5saW5lU3R5bGUgJiYgIWFuZ3VsYXIuJCR1aWJUeXBlYWhlYWRDc3MgJiYgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5maW5kKCdoZWFkJykucHJlcGVuZCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlt1aWItdHlwZWFoZWFkLXBvcHVwXS5kcm9wZG93bi1tZW51e2Rpc3BsYXk6YmxvY2s7fTwvc3R5bGU+Jyk7IGFuZ3VsYXIuJCR1aWJUeXBlYWhlYWRDc3MgPSB0cnVlOyB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9kaXN0L3VpLWJvb3RzdHJhcC10cGxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maXJtTW9kYWxGIGZyb20gJy4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5tb2RhbCdcbmltcG9ydCBoZWFkc1VwTW9kYWxGIGZyb20gJy4vaGVhZHN1cC9oZWFkc3VwLm1vZGFsJ1xuaW1wb3J0IGRhdGVNb2RhbEYgZnJvbSAnLi9kYXRlL2RhdGUubW9kYWwnXG5pbXBvcnQgc2VsZWN0TGlzdE1vZGFsRiBmcm9tICcuL3NlbGVjdGxpc3Qvc2VsZWN0bGlzdC5tb2RhbCdcbmltcG9ydCBzdHJpbmdFZGl0TW9kYWxGIGZyb20gJy4vc3RyaW5nZWRpdC9zdHJpbmdlZGl0Lm1vZGFsJ1xuaW1wb3J0IGlucHV0Qm94ZXNNb2RhbEYgZnJvbSAnLi9pbnB1dGJveGVzL2lucHV0Ym94ZXMubW9kYWwnXG5cbmxldCBkcnlUb2FzdFRlbXBsYXRlID0gcmVxdWlyZSggJ25ndGVtcGxhdGUtbG9hZGVyIWh0bWwtbG9hZGVyIS4vZHJ5dG9hc3QvZHJ5LXRvYXN0LnRlbXBsYXRlLmh0bWwnICk7XG5sZXQgX3RvYXN0O1xuXG5sZXQgY3VydGFpblRlbXBsYXRlID0gcmVxdWlyZSggJ25ndGVtcGxhdGUtbG9hZGVyIWh0bWwtbG9hZGVyIS4vY3VydGFpbi9jdXJ0YWluLnRlbXBsYXRlLmh0bWwnICk7XG5sZXQgX2N1cnRhaW47IC8vIGFuIGFuZ3VsYXIuZWxlbWVudFxuXG5mdW5jdGlvbiByZW1vdmVDdXJ0YWluKCl7XG4gICAgaWYgKF9jdXJ0YWluKXtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCBkb2N1bWVudCApLmZpbmQoICdib2R5JyApLmVxKCAwICkucmVtb3ZlQ2xhc3MoICdjdXJ0YWluLW9wZW4nICk7XG4gICAgICAgIF9jdXJ0YWluLnJlbW92ZSgpO1xuICAgICAgICBfY3VydGFpbiA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUJIZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IoICRsb2csICR1aWJNb2RhbCwgJHRpbWVvdXQsICR0ZW1wbGF0ZUNhY2hlICkge1xuXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHVpYk1vZGFsID0gJHVpYk1vZGFsO1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUgPSAkdGVtcGxhdGVDYWNoZTtcblxuICAgICAgICAvLyBTdHJhcCBvbiB0aGUgaW5kaXZpZHVhbCBtb2RhbHMgaGVyZSBhbmQgYmluZCB0byBgdGhpc2AgKGNyaXRpY2FsKVxuXG4gICAgICAgIC8vIENvbmZpcm0gZGlhbG9nXG4gICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gY29uZmlybU1vZGFsRi5iaW5kKCB0aGlzICk7XG4gICAgICAgIC8vIEhlYWRzIHVwIGRpYWxvZ1xuICAgICAgICB0aGlzLmhlYWRzdXBNb2RhbCA9IGhlYWRzVXBNb2RhbEYuYmluZCggdGhpcyApO1xuICAgICAgICAvLyBzeW5vbnltIGZvciBoZWFkcyB1cFxuICAgICAgICB0aGlzLmhlYWRzVXBNb2RhbCA9IGhlYWRzVXBNb2RhbEYuYmluZCggdGhpcyApO1xuICAgICAgICAvLyBkYXRlIG1vZGFsXG4gICAgICAgIHRoaXMuZGF0ZU1vZGFsID0gZGF0ZU1vZGFsRi5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBzZWxlY3QgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdExpc3RNb2RhbCA9IHNlbGVjdExpc3RNb2RhbEYuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gc3RyaW5nIGVkaXRcbiAgICAgICAgdGhpcy5zdHJpbmdFZGl0TW9kYWwgPSBzdHJpbmdFZGl0TW9kYWxGLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIGlucHV0IGJveGVzXG4gICAgICAgIHRoaXMuaW5wdXRCb3hlc01vZGFsID0gaW5wdXRCb3hlc01vZGFsRi5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhyb3dzIHVwIGEgdG9hc3QgbGlrZSBBbmRyb2lkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1zZ1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBpbiBtc1xuICAgICAqIEByZXR1cm5zIHt7ZGlzbWlzczogZGlzbWlzc1R9fVxuICAgICAqL1xuICAgIGRyeVRvYXN0KG1zZywgZGVsYXkpe1xuXG4gICAgICAgIC8vIE5PVEU6IFRoaXMgY29kZSBpcyBoZXJlIHZzIGEgc2VwYXJhdGUgZmlsZSBzaW5jZSBpdCBuZWVkZWQgYSBidW5jaCBvZiBhbmd1bGFyXG4gICAgICAgIC8vIGRlcGVuZGVuY2llcy5cblxuICAgICAgICBsZXQgdG9hc3RIVE1MID0gdGhpcy4kdGVtcGxhdGVDYWNoZS5nZXQoIGRyeVRvYXN0VGVtcGxhdGUgKTtcbiAgICAgICAgY29uc3QgbSA9IG1zZyB8fCBcIkhhdmUgYSBuaWNlIGRheSA6KVwiO1xuICAgICAgICB0b2FzdEhUTUwgPSB0b2FzdEhUTUwucmVwbGFjZSggJyQkbWVzc2FnZSQkJywgbSApO1xuICAgICAgICBfdG9hc3QgPSBhbmd1bGFyLmVsZW1lbnQoIHRvYXN0SFRNTCApO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoIGRvY3VtZW50ICkuZmluZCggJ2JvZHknICkuZXEoIDAgKTtcblxuICAgICAgICBib2R5LmFwcGVuZCggX3RvYXN0ICk7XG5cbiAgICAgICAgY29uc3QgZCA9IGRlbGF5IHwgMTAwMDtcblxuICAgICAgICBmdW5jdGlvbiBkaXNtaXNzVCgpIHtcbiAgICAgICAgICAgIF90b2FzdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRpbWVvdXQoIGRpc21pc3NULCBkICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc21pc3M6IGRpc21pc3NUXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJ0YWluTW9kYWwgKCB0aXRsZSApIHtcblxuICAgICAgICAvLyBOT1RFOiBUaGlzIGNvZGUgaXMgaGVyZSB2cyBhIHNlcGFyYXRlIGZpbGUgc2luY2UgaXQgbmVlZGVkIGEgYnVuY2ggb2YgYW5ndWxhclxuICAgICAgICAvLyBkZXBlbmRlbmNpZXMuXG5cbiAgICAgICAgbGV0IGNodG1sID0gdGhpcy4kdGVtcGxhdGVDYWNoZS5nZXQoIGN1cnRhaW5UZW1wbGF0ZSApO1xuICAgICAgICBjaHRtbCA9IGNodG1sLnJlcGxhY2UoICckJG1lc3NhZ2UkJCcsIHRpdGxlIHx8ICcnICk7XG4gICAgICAgIF9jdXJ0YWluID0gYW5ndWxhci5lbGVtZW50KCBjaHRtbCApO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoIGRvY3VtZW50ICkuZmluZCggJ2JvZHknICkuZXEoIDAgKTtcblxuICAgICAgICBib2R5LmFwcGVuZCggX2N1cnRhaW4gKTtcbiAgICAgICAgYm9keS5hZGRDbGFzcyggJ2N1cnRhaW4tb3BlbicgKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlzbWlzczogcmVtb3ZlQ3VydGFpblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBkaXNtaXNzQ3VydGFpbigpIHtcbiAgICAgICAgcmVtb3ZlQ3VydGFpbigpO1xuICAgIH1cbn1cblxuVUlCSGVscGVyLiRpbmplY3QgPSBbICckbG9nJywgJyR1aWJNb2RhbCcsICckdGltZW91dCcsICckdGVtcGxhdGVDYWNoZScgXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL21vZGFscy91aWJoZWxwZXIuanMiLCJsZXQgdGVtcGxhdGUgPSByZXF1aXJlKCAnbmd0ZW1wbGF0ZS1sb2FkZXIhaHRtbC1sb2FkZXIhLi9jb25maXJtbW9kYWwudGVtcGxhdGUuaHRtbCcgKTtcblxuXG4vKipcbiAqXG4gKiBQcm92aWRlcyBhIHZlcnkgYmFzaWMgVUlCIGNvbmZpcm0gbW9kYWwgd2l0aCBhbG1vc3Qgbm8gb3B0aW9ucy4gUmV0dXJucyB0aGUgcmVzdWx0IHByb21pc2UuXG4gKlxuICogVXNhZ2U6ICB1aWJIZWxwZXIuY29uZmlybU1vZGFsKFwiTXkgVGl0bGVcIiwgXCJCb2R5IFRleHRcIiwgdHJ1ZSlcbiAqICAgICAgICAgICAgLnRoZW4oIGZ1bmN0aW9uKGNvbmZpcm1lZCl7XG4gKiAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggY29uZmlybWF0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZVxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHlcbiAqIEBwYXJhbSB7Kn0gY29uZmlybVZhbHVlXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oIHRpdGxlLCBib2R5LCBjb25maXJtVmFsdWUgKSB7XG5cbiAgICAvLyBgdGhpc2AgZ2V0cyBzZXQgdXAgY29ycmVjdGx5IGJ5IHRoZSBwYXJlbnQgY2xhc3MgYHVpYmhlbHBlcmBcbiAgICBjb25zdCBtb2RhbEluc3RhbmNlID0gdGhpcy4kdWliTW9kYWwub3Blbigge1xuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICBmdW5jdGlvbiAoICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsIHBhcmFtcyApIHtcblxuICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkgPSB7IHRpdGxlOiBwYXJhbXMudGl0bGUsIGJvZHk6IHBhcmFtcy5ib2R5IH07XG5cbiAgICAgICAgICAgICRzY29wZS5vayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSggcGFyYW1zLmNvbmZpcm1WYWx1ZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoICdjYW5jZWwnICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgYm9keTogYm9keSwgY29uZmlybVZhbHVlOiBjb25maXJtVmFsdWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgIHJldHVybiBtb2RhbEluc3RhbmNlLnJlc3VsdDtcblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5tb2RhbC5qcyIsInZhciBwYXRoID0gJy9Vc2Vycy9ta2Fobi9EZXZlbG9wZXIvT3VyZ2xhc3MvY2xvdWQvYmx1ZWxpbmUyL09nVWlNb2JpbGUvc3JjL2NvbXBvbmVudHMvbW9kYWxzL2NvbmZpcm1hdGlvbi9jb25maXJtbW9kYWwudGVtcGxhdGUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+e3sgbW9kYWxVaS50aXRsZSB9fTwvaDM+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgIHt7IG1vZGFsVWkuYm9keSB9fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwib2soKVxcXCI+T0s8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZ3RlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21vZGFscy9jb25maXJtYXRpb24vY29uZmlybW1vZGFsLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IHRlbXBsYXRlID0gcmVxdWlyZSggJ25ndGVtcGxhdGUtbG9hZGVyIWh0bWwtbG9hZGVyIS4vaGVhZHN1cG1vZGFsLnRlbXBsYXRlLmh0bWwnICk7XG5cblxuLyoqXG4gKlxuICogUHJvdmlkZXMgYSB2ZXJ5IGJhc2ljIFVJQiBoZWFkcy11cCBtb2RhbCB3aXRoIGFsbW9zdCBubyBvcHRpb25zLiBSZXR1cm5zIHRoZSByZXN1bHQgcHJvbWlzZS5cbiAqXG4gKiBVc2FnZTogIHVpYkhlbHBlci5oZWFkc3VwTW9kYWwoXCJNeSBUaXRsZVwiLCBcIkJvZHkgVGV4dFwiKVxuICogICAgICAgICAgLnRoZW4oIGZ1bmN0aW9uKCl7XG4gKiAgICAgICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5XG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCB0aXRsZSwgYm9keSApIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gdGhpcy4kdWliTW9kYWwub3Blbigge1xuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICBmdW5jdGlvbiAoICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsIHBhcmFtcyApIHtcblxuICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkgPSB7IHRpdGxlOiBwYXJhbXMudGl0bGUsIGJvZHk6IHBhcmFtcy5ib2R5IH07XG5cbiAgICAgICAgICAgICRzY29wZS5vayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgYm9keTogYm9keSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgcmV0dXJuIG1vZGFsSW5zdGFuY2UucmVzdWx0O1xuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvaGVhZHN1cC9oZWFkc3VwLm1vZGFsLmpzIiwidmFyIHBhdGggPSAnL1VzZXJzL21rYWhuL0RldmVsb3Blci9PdXJnbGFzcy9jbG91ZC9ibHVlbGluZTIvT2dVaU1vYmlsZS9zcmMvY29tcG9uZW50cy9tb2RhbHMvaGVhZHN1cC9oZWFkc3VwbW9kYWwudGVtcGxhdGUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+e3sgbW9kYWxVaS50aXRsZSB9fTwvaDM+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgIHt7IG1vZGFsVWkuYm9keSB9fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwib2soKVxcXCI+T0s8L2J1dHRvbj5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25ndGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL2hlYWRzdXAvaGVhZHN1cG1vZGFsLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfaXNEYXRlIGZyb20gJ2xvZGFzaC9pc0RhdGUnXG5cbmxldCB0ZW1wbGF0ZSA9IHJlcXVpcmUoICduZ3RlbXBsYXRlLWxvYWRlciFodG1sLWxvYWRlciEuL2RhdGVtb2RhbC50ZW1wbGF0ZS5odG1sJyApO1xuXG5cbi8qKlxuICpcbiAqIFByb3ZpZGVzIGEgdmVyeSAgVUlCICBtb2RhbCB0byBwaWNrIGEgZGF0ZS4gUmV0dXJucyB0aGUgcmVzdWx0IHByb21pc2UuXG4gKlxuICogVXNhZ2U6ICB1aWJIZWxwZXIuZGF0ZU1vZGFsKFwiTXkgVGl0bGVcIiwgXCJCb2R5IFRleHRcIiwgY3VycmVudERhdGVDaG9pY2UpXG4gKiAgICAgICAgICAudGhlbiggZnVuY3Rpb24obmV3RGF0ZSl7XG4gKiAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggbmV3RGF0ZVxuICogICAgICAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ30gY3VycmVudERhdGVDaG9pY2VcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHRpdGxlLCBib2R5LCBjdXJyZW50RGF0ZUNob2ljZSApIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gdGhpcy4kdWliTW9kYWwub3Blbigge1xuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICBmdW5jdGlvbiAoICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsIHBhcmFtcyApIHtcblxuICAgICAgICAgICAgaWYgKCAhX2lzRGF0ZSggcGFyYW1zLmN1cnJlbnREYXRlQ2hvaWNlICkgKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmN1cnJlbnREYXRlQ2hvaWNlID9cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmN1cnJlbnREYXRlQ2hvaWNlID0gbmV3IERhdGUoIHBhcmFtcy5jdXJyZW50RGF0ZUNob2ljZSApIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmN1cnJlbnREYXRlQ2hvaWNlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICAgICAgICAgIHBhcmFtcy50aXRsZSxcbiAgICAgICAgICAgICAgICBib2R5OiAgICAgICAgICAgICAgcGFyYW1zLmJvZHksXG4gICAgICAgICAgICAgICAgZGF0ZTogICAgICAgICAgICAgIHBhcmFtcy5jdXJyZW50RGF0ZUNob2ljZSxcbiAgICAgICAgICAgICAgICBkYXRlUGlja2VyT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiAgIG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIHNob3dXZWVrczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGltZTogICAgICAgICAgICAgIG5ldyBEYXRlKCBwYXJhbXMuY3VycmVudERhdGVDaG9pY2UgKVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUub2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkuZGF0ZS5zZXRIb3VycyggJHNjb3BlLm1vZGFsVWkudGltZS5nZXRIb3VycygpICk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkuZGF0ZS5zZXRNaW51dGVzKCAkc2NvcGUubW9kYWxVaS50aW1lLmdldE1pbnV0ZXMoKSApO1xuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCAkc2NvcGUubW9kYWxVaS5kYXRlICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyggJ2NhbmNlbCcgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRpdGxlLCBib2R5OiBib2R5LCBjdXJyZW50RGF0ZUNob2ljZTogY3VycmVudERhdGVDaG9pY2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgIHJldHVybiBtb2RhbEluc3RhbmNlLnJlc3VsdDtcblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvZGF0ZS9kYXRlLm1vZGFsLmpzIiwidmFyIGJhc2VJc0RhdGUgPSByZXF1aXJlKCcuL19iYXNlSXNEYXRlJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc0RhdGUgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc0RhdGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBEYXRlYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBkYXRlIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRGF0ZShuZXcgRGF0ZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0RhdGUoJ01vbiBBcHJpbCAyMyAyMDEyJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNEYXRlID0gbm9kZUlzRGF0ZSA/IGJhc2VVbmFyeShub2RlSXNEYXRlKSA6IGJhc2VJc0RhdGU7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNEYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNEYXRlYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGRhdGUgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gZGF0ZVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNEYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNEYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGF0aCA9ICcvVXNlcnMvbWthaG4vRGV2ZWxvcGVyL091cmdsYXNzL2Nsb3VkL2JsdWVsaW5lMi9PZ1VpTW9iaWxlL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRlL2RhdGVtb2RhbC50ZW1wbGF0ZS5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj57eyBtb2RhbFVpLnRpdGxlIH19PC9oMz5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG4gICAge3sgbW9kYWxVaS5ib2R5IH19XFxuICAgIDwhLS1cXG4gICAgPHVpYi1kYXRlcGlja2VyIG5nLW1vZGVsPVxcXCJtb2RhbFVpLmRhdGVcXFwiIGNsYXNzPVxcXCJ3ZWxsIHdlbGwtc21cXFwiIGRhdGVwaWNrZXItb3B0aW9ucz1cXFwib3B0aW9uc1xcXCI+PC91aWItZGF0ZXBpY2tlcj5cXG4gICAgLS0+XFxuICAgIDxwIGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdWliLWRhdGVwaWNrZXItcG9wdXA9XFxcIk1NTU0tZGQteXl5eVxcXCIgbmctbW9kZWw9XFxcIm1vZGFsVWkuZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICBpcy1vcGVuPVxcXCJtb2RhbFVpLmRhdGVPcGVuZWRcXFwiXFxuICAgICAgICAgICAgICAgZGF0ZXBpY2tlci1vcHRpb25zPVxcXCJtb2RhbFVpLmRhdGVQaWNrZXJPcHRpb25zXFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgY2xvc2UtdGV4dD1cXFwiQ2xvc2VcXFwiLz5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJtb2RhbFVpLmRhdGVPcGVuZWQgPSAhbW9kYWxVaS5kYXRlT3BlbmVkXFxcIj48aVxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L2J1dHRvbj5cXG4gICAgICAgICAgPC9zcGFuPlxcbiAgICA8L3A+XFxuICAgIDx1aWItdGltZXBpY2tlciBuZy1tb2RlbD1cXFwibW9kYWxVaS50aW1lXFxcIiBob3VyLXN0ZXA9XFxcIjFcXFwiIG1pbnV0ZS1zdGVwPVxcXCIxNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHNob3ctbWVyaWRpYW49XFxcInRydWVcXFwiPjwvdWliLXRpbWVwaWNrZXI+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJvaygpXFxcIj5PSzwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25ndGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL2RhdGUvZGF0ZW1vZGFsLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCB0ZW1wbGF0ZSA9IHJlcXVpcmUoICduZ3RlbXBsYXRlLWxvYWRlciFodG1sLWxvYWRlciEuL3NlbGVjdGxpc3Rtb2RhbC50ZW1wbGF0ZS5odG1sJyApO1xuXG5cbi8qKlxuICpcbiAqIFByb3ZpZGVzIGEgVUlCICBmcm9tIGEgbGlzdCBvZiBvYmplY3RzLiBSZXR1cm5zIHRoZSByZXN1bHQgcHJvbWlzZS5cbiAqXG4gKiBVc2FnZTogIHVpYkhlbHBlci5zZWxlY3RMaXN0TW9kYWwoXCJNeSBUaXRsZVwiLCBcIkJvZHkgVGV4dFwiLCBbWyBcImNob2ljZSAxXCIgXCJiZWVyXCJdLCBbXCJjaG9pY2UgMlwiLCBcIndpbmVcIl1dLFxuICogMSlcbiAqICAgICAgICAgIC50aGVuKCBmdW5jdGlvbihuZXdEYXRlKXtcbiAqICAgICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCBuZXdEYXRlXG4gKiAgICAgICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjaG9pY2VBcnJheSBbIFsgZmllbGQxLCBmaWVsZDIsIC4uLiBdLCAuLi4gXVxuICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRDaG9pY2VJZHhcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHRpdGxlLCBib2R5LCBjaG9pY2VBcnJheSwgY3VycmVudENob2ljZUlkeCApIHtcblxuICAgIGNvbnN0IG1vZGFsSW5zdGFuY2UgPSB0aGlzLiR1aWJNb2RhbC5vcGVuKCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogIGZ1bmN0aW9uICggJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgcGFyYW1zICkge1xuXG4gICAgICAgICAgICAkc2NvcGUubW9kYWxVaSA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogICAgICAgICBwYXJhbXMudGl0bGUsIGJvZHk6IHBhcmFtcy5ib2R5LCBjaG9pY2VzOiBwYXJhbXMuY2hvaWNlcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hvaWNlOiBwYXJhbXMuY3VycmVudENob2ljZSwgc2hvd0Nob2ljZTogIXBhcmFtcy5ib2R5XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUub2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoICRzY29wZS5tb2RhbFVpLmN1cnJlbnRDaG9pY2UgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCAnY2FuY2VsJyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6ICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0aXRsZTogdGl0bGUsIGJvZHk6IGJvZHksIGNob2ljZXM6IGNob2ljZUFycmF5LCBjdXJyZW50Q2hvaWNlOiBjdXJyZW50Q2hvaWNlSWR4IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICByZXR1cm4gbW9kYWxJbnN0YW5jZS5yZXN1bHQ7XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL21vZGFscy9zZWxlY3RsaXN0L3NlbGVjdGxpc3QubW9kYWwuanMiLCJ2YXIgcGF0aCA9ICcvVXNlcnMvbWthaG4vRGV2ZWxvcGVyL091cmdsYXNzL2Nsb3VkL2JsdWVsaW5lMi9PZ1VpTW9iaWxlL3NyYy9jb21wb25lbnRzL21vZGFscy9zZWxlY3RsaXN0L3NlbGVjdGxpc3Rtb2RhbC50ZW1wbGF0ZS5odG1sJztcbnZhciBodG1sID0gXCI8c3R5bGU+XFxuICAgIC5zbG0tcGljay1pdGVtIHtcXG4gICAgICAgIGNvbG9yOiB0ZWFsO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggNXB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLnNsbS1waWNrZWQge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzY5Njk2OTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICB9XFxuXFxuICAgIC5zbG0tbm8tbnVtIHtcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPnt7IG1vZGFsVWkudGl0bGUgfX08L2gzPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiIG5nLXNob3c9XFxcInNob3dDaG9pY2VcXFwiPlxcbiAgICB7eyBtb2RhbFVpLmNob2ljZXNbbW9kYWxVaS5jdXJyZW50Q2hvaWNlXSB9fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiIG5nLWhpZGU9XFxcInNob3dDaG9pY2VcXFwiPlxcbiAgICB7eyBtb2RhbFVpLmJvZHkgfX1cXG48L2Rpdj5cXG48b2wgY2xhc3M9XFxcInNsbS1uby1udW1cXFwiIHN0eWxlPVxcXCJtYXJnaW46IDEwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XFxcIj5cXG4gICAgPGxpIG5nLXJlcGVhdD1cXFwiY2hvaWNlIGluIG1vZGFsVWkuY2hvaWNlc1xcXCIgY2xhc3M9XFxcInNsbS1waWNrLWl0ZW1cXFwiXFxuICAgICAgICBuZy1jbGFzcz1cXFwieyAnc2xtLXBpY2tlZCc6IG1vZGFsVWkuY3VycmVudENob2ljZT09JGluZGV4fVxcXCJcXG4gICAgICAgIG5nLWNsaWNrPVxcXCJtb2RhbFVpLmN1cnJlbnRDaG9pY2UgPSAkaW5kZXhcXFwiPnt7IGNob2ljZSB9fTwvbGk+XFxuPC9vbD5cXG5cXG5cXG48ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIm9rKClcXFwiPk9LPC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmd0ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvc2VsZWN0bGlzdC9zZWxlY3RsaXN0bW9kYWwudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IHRlbXBsYXRlID0gcmVxdWlyZSggJ25ndGVtcGxhdGUtbG9hZGVyIWh0bWwtbG9hZGVyIS4vc3RyaW5nZWRpdC5tb2RhbCcgKTtcblxuXG4vKipcbiAqXG4gKiBQcm92aWRlcyBhIHZlcnkgIFVJQiAgbW9kYWwgdG8gZWRpdCBhIHNpbmdsZSBzdHJpbmcuIFJldHVybnMgdGhlIHJlc3VsdCBwcm9taXNlLlxuICpcbiAqIFVzYWdlOiAgdWliSGVscGVyLnN0cmluZ0VkaXRNb2RhbChcIk15IFRpdGxlXCIsIFwiQm9keSBUZXh0XCIsIHN0cmluZzJFZGl0KVxuICogICAgICAgICAgLnRoZW4oIGZ1bmN0aW9uKGNvbmZpcm1lZCl7XG4gKiAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggY29uZmlybWF0aW9uXG4gKiAgICAgICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5XG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nMkVkaXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlclxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggdGl0bGUsIGJvZHksIHN0cmluZzJFZGl0LCBwbGFjZWhvbGRlciApIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gdGhpcy4kdWliTW9kYWwub3Blbigge1xuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICBmdW5jdGlvbiAoICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsIHBhcmFtcyApIHtcblxuICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICAgIHBhcmFtcy50aXRsZSxcbiAgICAgICAgICAgICAgICBib2R5OiAgICAgICAgcGFyYW1zLmJvZHksXG4gICAgICAgICAgICAgICAgZWRpdFN0cmluZzogIHBhcmFtcy5zdHJpbmcyRWRpdCxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogcGFyYW1zLnBsYWNlaG9sZGVyIHx8IHBhcmFtcy50aXRsZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLm9rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCAkc2NvcGUubW9kYWxVaS5lZGl0U3RyaW5nICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyggJ2NhbmNlbCcgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRpdGxlLCBib2R5OiBib2R5LCBzdHJpbmcyRWRpdDogc3RyaW5nMkVkaXQsIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgcmV0dXJuIG1vZGFsSW5zdGFuY2UucmVzdWx0O1xuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL21vZGFscy9zdHJpbmdlZGl0L3N0cmluZ2VkaXQubW9kYWwuanMiLCJ2YXIgcGF0aCA9ICcvVXNlcnMvbWthaG4vRGV2ZWxvcGVyL091cmdsYXNzL2Nsb3VkL2JsdWVsaW5lMi9PZ1VpTW9iaWxlL3NyYy9jb21wb25lbnRzL21vZGFscy9zdHJpbmdlZGl0L3N0cmluZ2VkaXQubW9kYWwuanMnO1xudmFyIGh0bWwgPSBcIid1c2Ugc3RyaWN0JztcXG5cXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCB7XFxuICAgIHZhbHVlOiB0cnVlXFxufSk7XFxuXFxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBzdHJpbmcyRWRpdCwgcGxhY2Vob2xkZXIpIHtcXG5cXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSB0aGlzLiR1aWJNb2RhbC5vcGVuKHtcXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZSxcXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgcGFyYW1zKSB7XFxuXFxuICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkgPSB7XFxuICAgICAgICAgICAgICAgIHRpdGxlOiBwYXJhbXMudGl0bGUsXFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5ib2R5LFxcbiAgICAgICAgICAgICAgICBlZGl0U3RyaW5nOiBwYXJhbXMuc3RyaW5nMkVkaXQsXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwYXJhbXMucGxhY2Vob2xkZXIgfHwgcGFyYW1zLnRpdGxlXFxuICAgICAgICAgICAgfTtcXG5cXG4gICAgICAgICAgICAkc2NvcGUub2sgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCRzY29wZS5tb2RhbFVpLmVkaXRTdHJpbmcpO1xcbiAgICAgICAgICAgIH07XFxuXFxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNvbHZlOiB7XFxuICAgICAgICAgICAgcGFyYW1zOiBmdW5jdGlvbiBwYXJhbXMoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgYm9keTogYm9keSwgc3RyaW5nMkVkaXQ6IHN0cmluZzJFZGl0LCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIgfTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0pO1xcblxcbiAgICByZXR1cm4gbW9kYWxJbnN0YW5jZS5yZXN1bHQ7XFxufTtcXG5cXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKCduZ3RlbXBsYXRlLWxvYWRlciFodG1sLWxvYWRlciEuL3N0cmluZ2VkaXQubW9kYWwnKTtcXG5cXG4vKipcXG4gKlxcbiAqIFByb3ZpZGVzIGEgdmVyeSAgVUlCICBtb2RhbCB0byBlZGl0IGEgc2luZ2xlIHN0cmluZy4gUmV0dXJucyB0aGUgcmVzdWx0IHByb21pc2UuXFxuICpcXG4gKiBVc2FnZTogIHVpYkhlbHBlci5zdHJpbmdFZGl0TW9kYWwoXFxcIk15IFRpdGxlXFxcIiwgXFxcIkJvZHkgVGV4dFxcXCIsIHN0cmluZzJFZGl0KVxcbiAqICAgICAgICAgIC50aGVuKCBmdW5jdGlvbihjb25maXJtZWQpe1xcbiAqICAgICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCBjb25maXJtYXRpb25cXG4gKiAgICAgICAgICB9KTtcXG4gKlxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxcbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5XFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZzJFZGl0XFxuICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyXFxuICogQHJldHVybnMge1Byb21pc2V9XFxuICovXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZ3RlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21vZGFscy9zdHJpbmdlZGl0L3N0cmluZ2VkaXQubW9kYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCB0ZW1wbGF0ZSA9IHJlcXVpcmUoICduZ3RlbXBsYXRlLWxvYWRlciFodG1sLWxvYWRlciEuL2lucHV0Ym94ZXMubW9kYWwnICk7XG5cblxuLyoqXG4gKlxuICogUHJvdmlkZXMgYSAgVUlCICBtb2RhbCB0byBlZGl0IGEgc2VyaWVzIG9mIHN0cmluZ3MuIFJldHVybnMgdGhlIHJlc3VsdCBwcm9taXNlLlxuICpcbiAqIFVzYWdlOiAgdWliSGVscGVyLmlucHV0Qm94ZXNNb2RhbChcIk15IFRpdGxlXCIsIFwiQm9keSBUZXh0XCIsIHBhcmFtc0FycmF5KVxuICogICAgICAgICAgLnRoZW4oIGZ1bmN0aW9uKGNvbmZpcm1lZCl7XG4gKiAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggY29uZmlybWF0aW9uXG4gKiAgICAgICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5XG4gKiBAcGFyYW0geyBvYmplY3RbXX0gZmllbGRzQXJyYXkgWyB7IGxhYmVsOlwiRmlyc3QgTmFtZVwiLCBwbGFjZWhvbGRlcjogXCJMYUxhXCIsIHR5cGU6IHRleHQsIGZpZWxkOiAnZmlyc3ROYW1lJywgdmFsdWU6XG4gKiAgICAgJ0pvaG4nIH1dXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggdGl0bGUsIGJvZHksIGZpZWxkc0FycmF5ICkge1xuXG4gICAgY29uc3QgbW9kYWxJbnN0YW5jZSA9IHRoaXMuJHVpYk1vZGFsLm9wZW4oIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAgZnVuY3Rpb24gKCAkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCBwYXJhbXMgKSB7XG5cbiAgICAgICAgICAgICRzY29wZS5tb2RhbFVpID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgICBwYXJhbXMudGl0bGUsXG4gICAgICAgICAgICAgICAgYm9keTogICAgICAgIHBhcmFtcy5ib2R5LFxuICAgICAgICAgICAgICAgIGZpZWxkc0FycmF5OiBwYXJhbXMuZmllbGRzQXJyYXlcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgJHNjb3BlLm9rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBydmFsID0ge307XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkuZmllbGRzQXJyYXkuZm9yRWFjaCggZnVuY3Rpb24gKCBmICkge1xuICAgICAgICAgICAgICAgICAgICBydmFsWyBmLmZpZWxkIF0gPSBmLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCBydmFsICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyggJ2NhbmNlbCcgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRpdGxlLCBib2R5OiBib2R5LCBmaWVsZHNBcnJheTogZmllbGRzQXJyYXkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgIHJldHVybiBtb2RhbEluc3RhbmNlLnJlc3VsdDtcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL21vZGFscy9pbnB1dGJveGVzL2lucHV0Ym94ZXMubW9kYWwuanMiLCJ2YXIgcGF0aCA9ICcvVXNlcnMvbWthaG4vRGV2ZWxvcGVyL091cmdsYXNzL2Nsb3VkL2JsdWVsaW5lMi9PZ1VpTW9iaWxlL3NyYy9jb21wb25lbnRzL21vZGFscy9pbnB1dGJveGVzL2lucHV0Ym94ZXMubW9kYWwuanMnO1xudmFyIGh0bWwgPSBcIid1c2Ugc3RyaWN0JztcXG5cXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCB7XFxuICAgIHZhbHVlOiB0cnVlXFxufSk7XFxuXFxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBmaWVsZHNBcnJheSkge1xcblxcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9IHRoaXMuJHVpYk1vZGFsLm9wZW4oe1xcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlLFxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gY29udHJvbGxlcigkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCBwYXJhbXMpIHtcXG5cXG4gICAgICAgICAgICAkc2NvcGUubW9kYWxVaSA9IHtcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHBhcmFtcy50aXRsZSxcXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLmJvZHksXFxuICAgICAgICAgICAgICAgIGZpZWxkc0FycmF5OiBwYXJhbXMuZmllbGRzQXJyYXlcXG4gICAgICAgICAgICB9O1xcblxcbiAgICAgICAgICAgICRzY29wZS5vayA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdmFyIHJ2YWwgPSB7fTtcXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1vZGFsVWkuZmllbGRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xcbiAgICAgICAgICAgICAgICAgICAgcnZhbFtmLmZpZWxkXSA9IGYudmFsdWU7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZShydmFsKTtcXG4gICAgICAgICAgICB9O1xcblxcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICAgICAgcmVzb2x2ZToge1xcbiAgICAgICAgICAgIHBhcmFtczogZnVuY3Rpb24gcGFyYW1zKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0aXRsZTogdGl0bGUsIGJvZHk6IGJvZHksIGZpZWxkc0FycmF5OiBmaWVsZHNBcnJheSB9O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSk7XFxuXFxuICAgIHJldHVybiBtb2RhbEluc3RhbmNlLnJlc3VsdDtcXG59O1xcblxcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJ25ndGVtcGxhdGUtbG9hZGVyIWh0bWwtbG9hZGVyIS4vaW5wdXRib3hlcy5tb2RhbCcpO1xcblxcbi8qKlxcbiAqXFxuICogUHJvdmlkZXMgYSAgVUlCICBtb2RhbCB0byBlZGl0IGEgc2VyaWVzIG9mIHN0cmluZ3MuIFJldHVybnMgdGhlIHJlc3VsdCBwcm9taXNlLlxcbiAqXFxuICogVXNhZ2U6ICB1aWJIZWxwZXIuaW5wdXRCb3hlc01vZGFsKFxcXCJNeSBUaXRsZVxcXCIsIFxcXCJCb2R5IFRleHRcXFwiLCBwYXJhbXNBcnJheSlcXG4gKiAgICAgICAgICAudGhlbiggZnVuY3Rpb24oY29uZmlybWVkKXtcXG4gKiAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggY29uZmlybWF0aW9uXFxuICogICAgICAgICAgfSk7XFxuICpcXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keVxcbiAqIEBwYXJhbSB7IG9iamVjdFtdfSBmaWVsZHNBcnJheSBbIHsgbGFiZWw6XFxcIkZpcnN0IE5hbWVcXFwiLCBwbGFjZWhvbGRlcjogXFxcIkxhTGFcXFwiLCB0eXBlOiB0ZXh0LCBmaWVsZDogJ2ZpcnN0TmFtZScsIHZhbHVlOlxcbiAqICAgICAnSm9obicgfV1cXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cXG4gKlxcbiAqL1wiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmd0ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvaW5wdXRib3hlcy9pbnB1dGJveGVzLm1vZGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGF0aCA9ICcvVXNlcnMvbWthaG4vRGV2ZWxvcGVyL091cmdsYXNzL2Nsb3VkL2JsdWVsaW5lMi9PZ1VpTW9iaWxlL3NyYy9jb21wb25lbnRzL21vZGFscy9kcnl0b2FzdC9kcnktdG9hc3QudGVtcGxhdGUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHN0eWxlPlxcblxcbiAgICAudG9hc3QtaG9sZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMnZoO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgIC50b2FzdCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsIDM3LCA0MSwgMC43KTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIFNhbnNTZXJpZjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIH1cXG5cXG5cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcInRvYXN0LWhvbGRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRvYXN0XFxcIj5cXG4gICAgICAgIDxwIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXJcXFwiPiQkbWVzc2FnZSQkPC9wPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG5cXG5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25ndGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL2RyeXRvYXN0L2RyeS10b2FzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGF0aCA9ICcvVXNlcnMvbWthaG4vRGV2ZWxvcGVyL091cmdsYXNzL2Nsb3VkL2JsdWVsaW5lMi9PZ1VpTW9iaWxlL3NyYy9jb21wb25lbnRzL21vZGFscy9jdXJ0YWluL2N1cnRhaW4udGVtcGxhdGUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHN0eWxlPlxcblxcbiAgICAuY3VydGFpbiB7XFxuXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgfVxcblxcbiAgICAuc3Bpbm5lci1ob2xkZXIge1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBMDAwO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc3Bpbm5lciB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuXFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlIDIuMHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgLmRvdDEsIC5kb3QyIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBoZWlnaHQ6IDYwJTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAuZG90MiB7XFxuICAgICAgICB0b3A6IGF1dG87XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XFxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xcbiAgICB9XFxuXFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUge1xcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBzay1yb3RhdGUge1xcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcXG4gICAgICAgIDAlLCAxMDAlIHtcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxcbiAgICAgICAgfVxcbiAgICAgICAgNTAlIHtcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcXG4gICAgICAgIDAlLCAxMDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XFxuICAgICAgICB9XFxuICAgICAgICA1MCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc3R5bGU+XFxuPGRpdiBjbGFzcz1cXFwiY3VydGFpblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXItaG9sZGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRvdDFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRvdDJcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aDM+JCRtZXNzYWdlJCQ8L2gzPlxcblxcbjwvZGl2PlxcblxcblwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmd0ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvY3VydGFpbi9jdXJ0YWluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=