'use strict';
var ATMRepair = angular.module('ATMRepair', ['ui.router', 'ngRoute', 'ngResource', 'ui.grid', 'ui.grid.pagination', 'ui.grid.autoResize']);

ATMRepair.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('main', {
            templateUrl: "partials/main.html",
            controller: 'FileLoadController'
        })
        .state('view', {
            templateUrl: "partials/view.html",
            controller: 'viewController'
        })
}]);

ATMRepair.constant('RESOURCE_SOURCE', {
    DOMAIN: window.location.protocol + '//' + window.location.hostname + ":" + window.location.port + "/",
    PATHNAME: "rest/"
});

ATMRepair.controller('AppController', ['$scope', '$state', function ($scope, $state) {
        $scope.clickFileOptions = function () {
            $state.go('main');
        };

        $scope.clickViewOptions = function () {
            $state.go('view')
        };
    }]
);

ATMRepair.directive("importSheetJs", function($parse) {
    return {
        link: function($scope, $elm, $attrs) {
            var expressionHandler = $parse($attrs.onSheetLoad);
            $elm.on("change", function(changeEvent) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    expressionHandler($scope, { e: e });
                };
                reader.readAsBinaryString(changeEvent.target.files[0]);
            });
        }
    };
});

ATMRepair.factory('httpServiceResponseHandler',
    ['$rootScope',
        function ($rootScope) {
            return {
                errorHandler: function (data, status) {
                    var serverError;
                    if (!status) {
                        alert("Отсутствует соединение с сервером");
                        return console.log("Connection to server refused!");
                    } else {
                        serverError = data.message !== null ? data.message : 'Неизвестная ошибка';
                        alert(data.message)
                        return console.log('Server error: ' + serverError);
                    }
                }
            };
        }
    ]
);

