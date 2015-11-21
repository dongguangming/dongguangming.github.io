/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('dongguangmingApp', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
    .when("/python", {templateUrl: "views/python.html", controller: "PageCtrl"})
    .when("/django", {templateUrl: "views/django.html", controller: "PageCtrl"})
    .when("/javascript", {templateUrl: "views/javascript.html", controller: "PageCtrl"})
    .when("/web", {templateUrl: "views/web.html", controller: "PageCtrl"})
    .when("/e-commerce", {templateUrl: "views/e-commerce.html", controller: "PageCtrl"})
    .when("/emotion", {templateUrl: "views/emotion.html", controller: "PageCtrl"})
    .when("/me", {templateUrl: "views/me.html", controller: "PageCtrl"})
    .otherwise({
         redirectTo: '/'
       });
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  //console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  //console.log("Page Controller reporting for duty.");

  // Activates the Carousel
 
});