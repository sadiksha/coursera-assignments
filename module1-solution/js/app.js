(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.displayMessage = function() {
      var message = splitTextAndPrintMessage($scope.lunch_menu);
      $scope.message = message;
    }

    function splitTextAndPrintMessage(string) {
      var split_array = string.split(",");
      if(split_array.length <= 3) {
          return "Enjoy!";
      } else {
        return "Too much!"
      }
    }
  })
})();
