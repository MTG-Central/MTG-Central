'use strict';

angular.module('mtgCentral')

  // .factory('HavesSearch', [function(){
  //       var searchString =
  //       $.ajax({
  //         url: "http://api.mtgdb.info/cards/" + searchString,
  //         success: function(data) {
  //           deffered.resolve(data);
  //         }
  //       });
  //     }
  //     return deffered.promise;
  //   };
  //   return (SearchSvc);
  // }])


  // .factory('GetUsers', ['FirebaseUrl', '$firebase', function (FirebaseUrl, $firebase){
  //   console.log($firebase(FirebaseUrl.child('users')).$asObject());
  //   console.log(FirebaseUrl.child('users'));
  //   return $firebase(FirebaseUrl.child('users')).$asObject();
  // }])

  .controller('ListCtrl', function($firebase, FirebaseUrl){

    var users = $firebase(FirebaseUrl.child('users').child('facebook:4898695241764')).$asObject();

    // users.$loaded().then(function(){
    //   angular.forEach(users, function(value, index){
    //     var change = 'That Guy';
    //
    //     var user = FirebaseUrl.child('users').child(value.uid)
    //
    //     //Update the authdUser's information in Firebase
    //     user.update({
    //       Change: change
    //     });
    //   });
    // });

    // syncObject = sync.$asObject()

    // console.log(sync);

    var self = this;
    this.userHaves = [];


    // TODO: Add a quantity array and cards array to haves.
    // ref.orderByChild("haves").limitToLast(1)
    //
    // .on("child_added", function(snapshot) {
    //   self.userHaves = snapshot.val().haves;
    //   // console.log(self.userHaves);
    //   // console.log(self.userHaves.toString());
    //   $.ajax({
    //       url: "http://api.mtgdb.info/cards/" + self.userHaves.toString(),
    //       success: function(data) {
    //         self.userHaves = data;
    //         console.log(self.userHaves);
    //       }
    //     });
    //     console.log(self.userHaves);
    // });
    //
    // console.log(self.userHaves);

      this.listings = [
        { 'id' : '1', 'description' : 'Standard, EDH, Foreign Foil', 'author' : 'Alex Soper', 'updated' : '12/3/14'},
        { 'id' : '2', 'description' : 'Commander, Legacy, Foreign Foil', 'author' : 'Jon Manock', 'updated' : '12/1/14'},
        { 'id' : '3', 'description' : 'Standard, Modern, Legacy', 'author' : 'Ally Hinton', 'updated' : '12/2/14'}
      ];



  });
