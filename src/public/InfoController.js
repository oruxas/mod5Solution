(function () {
"use strict";

angular.module('public')
    .controller('InfoController', ['$scope', 'userService','MenuService', function($scope, userService, MenuService){

       var user = {};

       $scope.showMsg = true;
       function getUser(user, callback){
           $scope.user =  userService.getUserInfo();

        if(angular.isDefined($scope.user.short_name)){
            callback($scope.user.short_name);
            $scope.showMsg = false;
        }
           
       }
       getUser(user, callback);

        function callback(userShortName){
            MenuService.getMenuItem(userShortName).then(function(data){
                $scope.menuItem = data;
            });
        }

}])


})();