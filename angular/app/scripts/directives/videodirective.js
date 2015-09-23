'use strict';

/**
 * @ngdoc directive
 * @name videostoreApp.directive:videoDirective
 * @description
 * # videoDirective
 */
angular.module('videostoreApp')
  .directive('videoDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the videoDirective directive');
      }
    };
  });
