
(function () {
 "use strict";

angular
    .module('public')
    .service('userService', [ function(){
    
        var userInfo = {};
        var favDish = [];

        var addUserInfo = function(user){
            //alert(user);
            userInfo = user;
        }
        var getUserInfo = function(){
            
            return userInfo;
        }

        var addFavDish = function(data){
            favDish.push(data);
        }
        var getFavDish = function(){
            return favDish;
        }

    return {
        addUserInfo : addUserInfo,
        getUserInfo : getUserInfo,
        addFavDish : addFavDish,
        getFavDish : getFavDish
    }    

}]);

})();
