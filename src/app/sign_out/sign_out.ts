angular.module('app')
   .config(function(AuthProvider) {
        AuthProvider.logoutPath('http://localhost:3000/users/sign_out.json');
        AuthProvider.logoutMethod('GET');
    })
    .controller('signOutCtrl', function(Auth, $scope) {
        var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
 //this.signOut = function() {
        // Log in user...
        // ...
        Auth.logout(config).then(function(oldUser) {
            // alert(oldUser.name + "you're signed out now.");
            alert("sign out successfully");
        }, function(error) {
            // An error occurred logging out.
            alert("error occured while signing out");
        });
        
//}
        $scope.$on('devise:logout', function(event, oldCurrentUser) {
            // ...
        });
    });