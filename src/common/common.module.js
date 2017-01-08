(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://oruxas-mod5solution.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
