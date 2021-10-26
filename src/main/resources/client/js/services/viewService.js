ATMRepair.factory('viewService', ['$http', 'RESOURCE_SOURCE', 'httpServiceResponseHandler',
    function ($http, RESOURCE_SOURCE, httpServiceResponseHandler) {
        return {
            getAll : function () {
                return $http.get(RESOURCE_SOURCE.DOMAIN + RESOURCE_SOURCE.PATHNAME)
                    .then(function (response) {
                        return response.data;
                    }).catch(function (response) {
                        httpServiceResponseHandler.errorHandler(response.data, response.status)
                    })
            },
            getTopCauses : function () {
                return $http.get(RESOURCE_SOURCE.DOMAIN + RESOURCE_SOURCE.PATHNAME + 'top-causes')
                    .then(function (response) {
                        return response.data;
                    }).catch(function (response) {
                        httpServiceResponseHandler.errorHandler(response.data, response.status)
                    })
            },
            getTopLength : function () {
                return $http.get(RESOURCE_SOURCE.DOMAIN + RESOURCE_SOURCE.PATHNAME + 'top-length')
                    .then(function (response) {
                        return response.data;
                    }).catch(function (response) {
                        httpServiceResponseHandler.errorHandler(response.data, response.status)
                    })
            },
            getDuplicates : function () {
                return $http.get(RESOURCE_SOURCE.DOMAIN + RESOURCE_SOURCE.PATHNAME + 'duplicates')
                    .then(function (response) {
                        return response.data;
                    }).catch(function (response) {
                        httpServiceResponseHandler.errorHandler(response.data, response.status)
                    })
            }
        }
    }]);