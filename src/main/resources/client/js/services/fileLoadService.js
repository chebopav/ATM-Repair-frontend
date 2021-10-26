ATMRepair.factory('FileLoadService', ['$http', 'RESOURCE_SOURCE', 'httpServiceResponseHandler',
    function ($http, RESOURCE_SOURCE, httpServiceResponseHandler) {
        return {
            uploadFile : function (input) {
                return $http.post(RESOURCE_SOURCE.DOMAIN + RESOURCE_SOURCE.PATHNAME + 'file', input)
                    .then(function (response) {
                        alert("Внесено в БД " + response.data + " записей");
                        return response.data;
                    }).catch(function (response) {
                        httpServiceResponseHandler.errorHandler(response.data, response.status)
                    })
            },
            deleteAll : function () {
                return $http.delete(RESOURCE_SOURCE.DOMAIN + RESOURCE_SOURCE.PATHNAME)
                    .then(function (response) {
                        alert("Удалено из базы " + response.data + " записей. База пустая")
                    }).catch(function (response) {
                        httpServiceResponseHandler.errorHandler(response.data, response.status)
                    })
            }
        }
    }]);