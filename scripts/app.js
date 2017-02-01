var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/app/views/partial-about.html'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'app/views/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            },
            resolve: {
                name: function (testService) {
                    debugger;
                    //debugger; return testService.getMessage();
                }
            }
        });
        
});

routerApp.controller('scotchController', function ($scope, name) {
    
    $scope.message = 'test';    
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});

routerApp.factory("testService", function ($q,$http) {
    return {
        getMessage: function () {
            $http({
                url: "http://cricapi.com/api/matches/",
                method: "GET",
                params: { apikey: "1sutCFxIFaQknlNZLedvC2LdumG3" },
                success: function (data) {
                    debugger;
                    alert("success" + data);
                },
                error: function (data) {
                    debugger;
                    alert("error" + data);
                }
            });

            return $q.when("Hello World");
        }
    }
})

routerApp.factory("slowService", function ($q) {
    return {
        getSlowService : function()
        {
            var def = $q.defer();
            timeout(
                function() {
                    def.resolve('Allo');
                },
                2000
            )
            return def.promise;
        }
    }
})