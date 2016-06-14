'use strict';

/**
 * @ngdoc function
 * @name osboxesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the osboxesApp
 */
angular.module('osboxesApp')
  .controller('MainCtrl', function ($scope) {
  	   $scope.path = './images/AMO/'
  	   
       $scope.row1 = [{"image": $scope.path+ "1.jpg", "title":"Attribution", "back": "viewBiWeek", "label" : "view "+"viewBiWeek" ,"class":"analysis-icon coral-Icon coral-Icon-- coral-Icon--"+"viewBiWeek"+" coral-Icon--sizeXXL", "icon" : "viewBiWeek"},{"image": $scope.path+ "2.jpg", "title":"Product Recommendation", "back": "brackets", "label" : "view "+"brackets" ,"class":"analysis-icon coral-Icon coral-Icon-- coral-Icon--"+"brackets"+" coral-Icon--sizeXXL", "icon" : "brackets"},{"image": $scope.path+ "3.jpg", "title":"Cookie Scoring", "back": "jumpToTop", "label" : "view "+"jumpToTop" ,"class":"analysis-icon coral-Icon coral-Icon-- coral-Icon--"+"jumpToTop"+" coral-Icon--sizeXXL", "icon" : "jumpToTop"}];
       $scope.row2 = [{"image": $scope.path+ "4.jpg", "title":"Lead Scoring", "back": "graphTrend", "label" : "view " + "graphTrend" ,"class":"analysis-icon coral-Icon coral-Icon-- coral-Icon--"+"graphTrend"+" coral-Icon--sizeXXL", "icon" : "graphTrend"},{"image": $scope.path+ "5.jpg", "title":"Customer Propensity", "back": "thumbUp", "label" : "view "+"thumbUp" ,"class":"analysis-icon coral-Icon coral-Icon-- coral-Icon--"+"thumbUp"+" coral-Icon--sizeXXL", "icon" : "thumbUp"},{"image": $scope.path+ "6.jpg", "title":"MMX", "back": "devicePhone", "label" : "view "+"devicePhone" ,"class":"analysis-icon coral-Icon coral-Icon-- coral-Icon--"+"devicePhone"+" coral-Icon--sizeXXL", "icon" : "devicePhone"}];
    
  });
