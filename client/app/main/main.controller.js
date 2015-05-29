'use strict';

angular.module('youtubePlaylistServiceApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.awesomeThings = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.addingPlaylist = false; 

    $scope.playlists = [
  {

   "kind": "youtube#playlist",
   "etag": "\"NO6QTeg0-3ShswIeqLchQ_mzWJs/Uf5xrhHNL77NYU5j8Um_sv0VJTA\"",
   "id": "PLLqlS2c3MDsRchdhxRmdX8vwk1wqOB1Hs",
   "snippet": {
    "publishedAt": "2015-05-23T23:07:44.000Z",
    "channelId": "UCKq9dAoy84uOTUZyfzPEkLQ",
    "title": "rap",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/LaCy18gMTnA/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/LaCy18gMTnA/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/LaCy18gMTnA/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/LaCy18gMTnA/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/LaCy18gMTnA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Allen Gao",
    "localized": {
     "title": "rap",
     "description": ""
    }
   }
  },
  {

   "kind": "youtube#playlist",
   "etag": "\"NO6QTeg0-3ShswIeqLchQ_mzWJs/TXTAZ03oASlP4_7_gttgIjCkJQM\"",
   "id": "PLLqlS2c3MDsSebJdlUuV4_d0gHL2upwkw",
   "snippet": {
    "publishedAt": "2015-03-02T14:32:23.000Z",
    "channelId": "UCKq9dAoy84uOTUZyfzPEkLQ",
    "title": "102",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/kr_7BZVwTWw/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/kr_7BZVwTWw/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/kr_7BZVwTWw/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/kr_7BZVwTWw/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/kr_7BZVwTWw/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Allen Gao",
    "localized": {
     "title": "102",
     "description": ""
    }
   }
  }
 ];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.addPlaylists = function() {
      console.log('gfdgdf');
      //$http.get('api/getPlaylist').success(function(data) {
      $scope.addingPlaylist = true;
        //console.log(data);
      //});
    };

    $scope.addSelectedPlaylist = function(playlist) {
      console.log(playlist);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
