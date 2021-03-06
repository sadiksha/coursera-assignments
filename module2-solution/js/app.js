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
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.buy = function(item) {
      ShoppingListCheckOffService.buyItem(item);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = toBuyItems;
    var alreadyBoughtItem = [];

    service.getToBuyItems = function (){
      return itemsToBuy;
    }

    service.getAlreadyBoughtItems = function() {
      return alreadyBoughtItem;
    }

    service.buyItem = function(item) {
      alreadyBoughtItem.push(item);
      var indexOfDeletedItem = itemsToBuy.indexOf(item);
      itemsToBuy.splice(indexOfDeletedItem, 1);
    }
  }
})();
