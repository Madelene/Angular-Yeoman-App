'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
  .controller('MainCtrl', function () {

    //to show and hide the list
    this.showList = false;

    this.toggleList = function() {
      this.showList = !this.showList;
    };

    this.awesomeThings = [
      'Κυριακή',
      'Δευτέρα',
      'Τρίτη' ,
      'Τετάρτη',
      'Πέμπτη',
      'Παρασκευή',
      'Σάββατο '
    ];
  });
