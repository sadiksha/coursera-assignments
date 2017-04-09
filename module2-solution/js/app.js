(function () {
  'use strict';

  var toBuyItems = [{
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
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);

  ToBuyController.$inject = ['$scope'];
  function ToBuyController($scope) {
    $scope.toBuyItems = toBuyItems;
  }

  AlreadyBoughtController.$inject = ['$scope'];
  function AlreadyBoughtController($scope) {
    $scope.boughtItems = [];
  }
})();
