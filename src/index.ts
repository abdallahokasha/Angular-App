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


