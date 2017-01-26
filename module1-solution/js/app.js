(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.displayMessage = function() {
      var message, style, inputStyle;
      if($scope.lunch_menu == undefined) {
        message = "Please enter data first";
        style = {color: "red"};
        inputStyle = {border: "1px solid red"};
      } else {
        message = splitTextAndPrintMessage($scope.lunch_menu);
        style = {color: "green"};
        inputStyle = {border: "1px solid green"};
      }
      $scope.message = message;
      $scope.style = style;
      $scope.inputStyle = inputStyle;
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
