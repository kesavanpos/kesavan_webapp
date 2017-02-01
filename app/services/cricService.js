
//var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.factory("cricService", function ($q, $http) {
    return {
        getMessage: function () {
            var def = $q.defer();
            $http.get('http://cricapi.com/api/matches/', { params: { "apikey": "1sutCFxIFaQknlNZLedvC2LdumG3" } })
            .success(function (data) {
                debugger;
                alert(data.matches[0].team-1);
                def.resolve(data);
            })
            .error(function (data, status) {
                console.error('Repos error', status, data);
                def.reject(data);
            })
            .finally(function () {
                console.log("finally finished repos");
            });

            return def.promise;
        }
    }
})