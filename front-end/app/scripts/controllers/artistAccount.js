angular.module('fairMuseApp')
.controller('ArtistAccountCtrl',function($http, flash) {
var self = this;

    this.artistId = localStorage.getItem('artist_id')
    this.artistName = localStorage.getItem('name')

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

   self.getArtist = function(){
    return localStorage[artist_id]
   };

  });