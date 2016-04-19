angular.module('fairMuseApp')
.controller('ArtistAccountCtrl',function($http, flash) {
var self = this;

   self.displayBalance = function(){
           var promise = self.getBalance();
           promise.then(balanceSuccess, balanceError);
         };

     self.getBalance = function(){
       return $http.post('https://fast-meadow-84804.herokuapp.com/api/balanceinfo', {artist_id: localStorage.getItem('artist_id')})
   };

   var balanceSuccess = function(response){
     self.balance = response.data
   };

   var balanceError = function(response) {
   flash('Wrong!');
   };

  });