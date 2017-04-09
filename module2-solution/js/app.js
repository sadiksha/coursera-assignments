(function () {
  'use strict';

  var toBuy = [{
                name: "cookies",
                quantity: 10
              },
              {
                name: "chocolates",
                quantity: 5
              },
              {
                name: "chips",
                quantity: 3
              },
              {
                name: "avocado",
                quantity: 2
              },
              {
                name: "healthy snack",
                quantity: 5
              }]

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController);

  ToBuyController.$inject = ['$scope'];
  function ToBuyController($scope) {
    $scope.toBuy = toBuy;
  }
})();
