angular.module("ionicApp", ["ionic"])

.controller('MyCtrl', function($scope) {
  $scope.title = "Ionic Workshop";
  
 $scope.data = {
   firstName: '',
   lastName: ''
 };
 $scope.name = "World";
 
 $scope.simpanData = function(){
  $scope.tmp = "Haloo, welcome to "+ $scope.title +". <br>Your first name: "+$scope.data.firstName + "<br>Your last name: "+$scope.data.lastName;
 }
 
});