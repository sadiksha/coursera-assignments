(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.displayMessage = function() {
      var message, style;
      if($scope.lunch_menu == undefined) {
        message = "Please enter data first";
        style = {color: "red"}
      } else {
        message = splitTextAndPrintMessage($scope.lunch_menu);
        style = {color: "green"}
      }
      $scope.message = message;
      $scope.style = style;
    }

    function splitTextAndPrintMessage(string) {
      var split_array = string.split(",");
      if(split_array.length <= 3) {
        return "Enjoy!";
      }else {
        return "Too much!";
      }
    }
  })
})();
