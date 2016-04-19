'use strict';

fairMuse.service('TracksService', function($resource) {
	return $resource('https://fast-meadow-84804.herokuapp.com/tracks');
});