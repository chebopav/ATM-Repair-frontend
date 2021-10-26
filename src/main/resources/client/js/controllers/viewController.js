ATMRepair.controller('viewController',
    ['$scope', 'viewService',
        function ($scope, viewService) {
            $scope.grid = {};
            $scope.needFilter = false;
            $scope.selectedFilter = {};
            $scope.dataForFilter = {};
            $scope.filterName = {};
            $scope.grid.enableSorting = false;
            $scope.grid.enableHiding = false;
            $scope.grid.enableColumnMenus = false;
            $scope.grid.paginationPageSize = 20;
            $scope.grid.paginationPageSizes = [20];
            $scope.grid.enableRowSelection = true;
            $scope.grid.multiSelect = false;
            $scope.grid.rowHeight = 25;
            $scope.grid.columnDefs = [
                {field: "id", visible: false},
                {displayName: "CASE ID", field: "caseId", width: "10%"},
                {displayName: "ATM ID", field: "atmId", width: "10%"},
                {displayName: "Название управляющей причины", field: "cause", width: "20%"},
                {displayName: "Начало", field: "dateStart", width: "15%", cellFilter: 'date: "dd.MM.yyyy HH:mm"'},
                {displayName: "Окончание", field: "dateEnd", width: "15%", cellFilter: 'date: "dd.MM.yyyy HH:mm"'},
                {displayName: "Серийный номер", field: "serialNumber", width: "10%"},
                {displayName: "Bank NM", field: "bankName", width: "10%"},
                {displayName: "Канал связи", field: "channel", width: "10%"}
            ];

            $scope.initGridSize = function (size) {
                let gridHeight;
                if (size >= $scope.grid.paginationPageSize) {
                    gridHeight = $scope.grid.paginationPageSize * $scope.grid.rowHeight + 100;
                } else {
                    gridHeight = size * $scope.grid.rowHeight + 100;
                }
                angular.element(document.getElementById("grid")).css('height', gridHeight + 'px')
            }

            $scope.showAll = function () {
                $scope.needFilter = false;
                viewService.getAll().then(
                    function (data) {
                        $scope.grid.data = data
                        $scope.initGridSize($scope.grid.data.length)
                    }
                )
            }

            $scope.showTopLength = function () {
                $scope.needFilter = false;
                viewService.getTopLength().then(
                    function (data) {
                        $scope.grid.data = data;
                        $scope.initGridSize($scope.grid.data.length)
                    }
                )
            }

            $scope.showTopCases = function () {
                $scope.needFilter = true;
                $scope.filterName = 'Причины'
                $scope.grid.data = [];
                $scope.selectedFilter = {};
                $scope.dataForFilter = {};
                viewService.getTopCauses().then(
                    function (data) {
                        $scope.dataForFilter = data;
                        $scope.mainFilter = Object.keys(data);
                    }
                )
            }

            $scope.showByFilter = function () {
                $scope.grid.data = $scope.dataForFilter[$scope.selectedFilter];
                $scope.initGridSize($scope.grid.data.length);
            }


            $scope.showDuplicates = function () {
                $scope.needFilter = true;
                $scope.filterName = 'Банкоматы'
                $scope.grid.data = [];
                $scope.selectedFilter = {};
                $scope.dataForFilter = {};
                viewService.getDuplicates().then(
                    function (data) {
                        $scope.dataForFilter = data;
                        $scope.mainFilter = Object.keys(data);
                    }
                )
            }

            $scope.showByFilter = function () {
                $scope.grid.data = $scope.dataForFilter[$scope.selectedFilter];
                $scope.initGridSize($scope.grid.data.length);
            }

            $scope.showAll();

}]);