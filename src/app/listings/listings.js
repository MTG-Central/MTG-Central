'use strict';

angular.module('mtgCentral')

.controller('ListCtrl', function (){
    this.listings = [
      { 'id' : '1', 'title' : 'Standard, Modern, and Legacy for trade', 'author' : 'Alex Soper'},
      { 'id' : '2', 'title' : 'Commander for trade (Foils, foreign, etc)', 'author' : 'Jim James'},
      { 'id' : '3', 'title' : 'Have: Fetches, shocks // Want: Jeskai Tempo', 'author' : 'Jason Murphy'},
      { 'id' : '4', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '5', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '6', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '7', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '8', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '9', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '10', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '11', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '12', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '13', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '14', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '15', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '16', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '17', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '18', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '19', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'},
      { 'id' : '20', 'title' : 'Random generic have // wants', 'author' : 'Some Guy'}
    ];

    // var ref = new Firebase("https://mtg-central.firebaseio.com/");
    //
    // ref.on("value", function(snapshot) {
    //   $scope.cards = snapshot.val();
    //   console.log(snapshot.val());
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });

});
