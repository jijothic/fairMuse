'use strict';

angular.module('fairMuseApp').service('signupService', function($http){
  this.signup= function(user) {
    return $http.post("https://fast-meadow-84804.herokuapp.com/api/signup", user);
  };
  this.artistSignup= function(user) {
    return $http.post("https://fast-meadow-84804.herokuapp.com/api/artistsignup", user);
  };
});
