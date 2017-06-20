( function() {
  'use strict';

  angular.module('app')
   .config(function(AuthProvider) {
        AuthProvider.registerPath('http://localhost:3000/users.json');
        AuthProvider.registerMethod('POST');
        AuthProvider.resourceName('user');
    })
  .controller('signUpCtrl', ['Auth', '$scope', '$location',
    function(Auth, $scope, $location) {
      this.credentials = { email: '', password: '', cpassword: ''};

      this.signUp = function() {
        // code to use 'angular-devise' component
        Auth.register(this.credentials).then(function(user) {
          // $location.path("/");
          alert('Successfully registered user!')
        }, function(error) {
          console.info('Error in authenticating user!');
          alert('Error in registering user!');
        });
      }
    }
  ]);
})();
