import * as angular from 'angular';

require('./lib/devise-min.js');

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

// import {main} from './app/main';
// import {header} from './app/header';
// import {title} from './app/title';
// import {footer} from './app/footer';

import './index.css';

angular
  .module('app', [techsModule, 'ui.router', 'Devise'])
  .config(routesConfig)
  .config(function(AuthInterceptProvider) {
      // Intercept 401 Unauthorized everywhere
      AuthInterceptProvider.interceptAuth(true);
  })
  //needed to send cookie with each request
  .config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    //rest of route code
})
  .controller("appController", function($scope, $state){
      $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
      // Disable interceptor on _this_ login request,
      // so that it too isn't caught by the interceptor
      // on a failed login.
      debugger
      $state.go('home');
   })
  })

  // .config(function(AuthProvider) {
  //     AuthProvider.loginPath('http://localhost:3002/users/sign_in.json');
  //     AuthProvider.loginMethod('POST');
  //     // AuthProvider.resourceName('user');
  // })

  // .component('app', main)
  // .component('fountainHeader', header)
  // .component('fountainTitle', title)
  // .component('fountainFooter', footer);

//require all ts files
require('./app/apply/apply.ts');
require('./app/assign/assign.ts');
require('./app/list_companies/list_companies.ts');
require('./app/list_employees/list_employees.ts');
require('./app/my_companies/my_companies.ts');
require('./app/my_employees/my_employees.ts');
require('./app/sign_in/sign_in.ts');
require('./app/sign_up/sign_up.ts');
require('./app/sign_out/sign_out.ts');


