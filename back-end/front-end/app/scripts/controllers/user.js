'use strict';

  fairMuse.controller('UserCtrl', function ($http) {
    $http.get('https://fast-meadow-84804.herokuapp.com/users');
    var self = this;

    self.pay = function(){
      $http.post('https://fast-meadow-84804.herokuapp.com/api/payment', {user_id: localStorage.getItem('user_id')})
    }

    self.displayStreamDetails = function(){
          var promise = self.getStreamDetails();
          promise.then(success, error);
        };

    self.getStreamDetails = function(){
      return $http.post('https://fast-meadow-84804.herokuapp.com/api/streaminfo', {user_id: localStorage.getItem('user_id')})
  };

  var success = function(response){
    self.returnData = response.data
  };

  var error = function(response) {
  flash('Wrong!');
  };
});
