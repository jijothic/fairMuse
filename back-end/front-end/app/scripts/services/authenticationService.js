'use strict';

angular.module('fairMuseApp').service('authenticationService', function($http, $location){
  var location = $location;
  this.login= function(user) {
    return $http.post("https://fast-meadow-84804.herokuapp.com/api/login", user);
  };

  this.isLoggedIn = function(){
    return (localStorage.getItem('auth_token')) ? true : false;
  };
  this.LogOut = function(){
    return $http.delete("https://fast-meadow-84804.herokuapp.com/api/logout.json");
  };

  this.artistLogin= function(artist) {
    return $http.post("https://fast-meadow-84804.herokuapp.com/api/artistlogin", artist);
  };

  this.artistLogout = function(){
    return $http.delete("https://fast-meadow-84804.herokuapp.com/api/artistlogout.json")
  };
});