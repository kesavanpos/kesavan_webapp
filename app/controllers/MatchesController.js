routerApp.controller('MatchesController', function ($scope, matches) {
    debugger;
    var log = [];

    for (var match = 0; match < matches.matches.length ; match++)
    {
        matches.matches[match].teamone = (matches.matches[match])["team-1"];
        matches.matches[match].teamtwo = (matches.matches[match])["team-2"];
    }
    $scope.matches = matches.matches;
});