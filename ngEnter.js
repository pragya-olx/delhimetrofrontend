var app = angular.module('myApp', []);
app.controller('FormCtrl', function ($scope, $rootScope,$http) {
    $scope.messages = "";
    $scope.data = {
        // firstname: "default",
        // emailaddress: "default",
        // gender: "default",
        // member: false,
        // file_profile: "default",
        // file_avatar: "default"
        uid: 4,
        message: 'dsdcscu sduhljcs hldjs',
    };
    $scope.submitForm = function() {
        console.log("posting data....");
        $http({
            method : "POST",
            url : "http://localhost:3005/messages",
            data: { payload:  2 },

        }).then(function mySuccess(response) {
            $scope.posted = response.data;
        }, function myError(response) {
            $scope.posted = response.statusText;
        });
    };

    $http({
        method : "GET",
        url : "http://localhost:3005/messages",
    }).then(function mySuccess(response) {
        $rootScope.messages = response.data;
    }, function myError(response) {
        $rootScope.messages = response.statusText;
    });

});