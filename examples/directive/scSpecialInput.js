"use strict";

app.directive("scSpecialInput", function () {
  return {
    restrict: "AE",
    templateUrl: "scSpecialInput.html",
    scope: {
      label: "@?",
      model: "="
    }
  };
});

