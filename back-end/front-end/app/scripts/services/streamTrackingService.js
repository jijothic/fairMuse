angular.module('fairMuseApp').service('streamTrackingService', function($http){
  var streamTrackingService, track, params;
  this.track = function(id){
    params = {track_id: id, user_id: localStorage.getItem('user_id')};
    $http.post('https://fast-meadow-84804.herokuapp.com/streams', params);
  };
});