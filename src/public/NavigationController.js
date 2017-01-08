(function () {
"use strict";

angular.module('public')
    .controller('NavigationController', ['$scope', 'userService','MenuService', function($scope, userService, MenuService){

        $scope.showMsg = false;
        $scope.showServerError = false;    
        $scope.saveInfo = function(user){
            
            userService.addUserInfo(user);
    
            MenuService.getMenuItem(user.short_name).then(function(data){
                
                $scope.showMsg = true;
                $scope.showServerError = false;
                userService.addFavDish(data);
            }).catch(function(response){
               
                $scope.showServerError = true;
            });
        }

        

    }])


})();