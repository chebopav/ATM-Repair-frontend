ATMRepair.controller('FileLoadController',
    ['$scope', '$state', 'FileLoadService',
        function ($scope, $state, FileLoadService) {
            var result = 0;

            $scope.loadWorksheet = function(e) {
                var file = e.target.result;
                var workbook = XLSX.read(file, { type: "binary" });
                var sheetName = workbook.SheetNames[0];
                $scope.sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {raw : false});
                result = FileLoadService.uploadFile($scope.sheet);

            };

            $scope.deleteAll = function () {
                result = FileLoadService.deleteAll();

            }

}]);