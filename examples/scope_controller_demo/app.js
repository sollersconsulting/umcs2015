angular.module('invoice', [])
  .controller('InvoiceController', ["$scope", function ($scope) {
    $scope.qty = 1;
    $scope.cost = 2;
    $scope.inCurr = 'EUR';
    $scope.currencies = ['USD', 'EUR', 'PLN'];
    $scope.usdToForeignRates = {
      USD: 1,
      EUR: 0.87,
      PLN: 3.68
    };

    $scope.total = function total(outCurr) {
      return $scope.convertCurrency($scope.qty * $scope.cost, $scope.inCurr, outCurr);
    };

    $scope.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * $scope.usdToForeignRates[outCurr] / $scope.usdToForeignRates[inCurr];
    };

    $scope.pay = function pay() {
      window.alert("Thanks!");
    };
  }]);

