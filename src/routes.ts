export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    // .state('app', {
    //   url: '/',
    //   component: 'app'
    // })

    // home
    .state('home', {
      url:'/index',
      controller: '',
      template: require('./index.html')
      
    })
    
    //assign componet
    .state('assign', {
      url:'/assign',
      controller: 'assignController',
      template: require('./app/assign/assign.html')
      
    })
    //apply component 
    .state('apply', {
      url:'/apply',
      controller: 'applyController',
      template: require('./app/apply/apply.html')
      
    })
    //list_Companies component
    .state('list_companies', {
      url:'/list_companies',
      controller: 'list_companiesController',
      template: require('./app/list_companies/list_companies.html')
      
    })
    //list_employees component
     .state('list_employees', {
      url:'/list_employees',
      controller: 'list_employeesController',
      template: require('./app/list_employees/list_employees.html')
    })
    //my_companies component
     .state('my_companies', {
      url:'/my_companies',
      controller: 'my_companiesController',
      template: require('./app/my_companies/my_companies.html')
  
  // ,onEnter: [
  //   '$state', 'Auth',
  //   function($state, Auth) {
  //     Auth.currentUser().then(function(user) {}, function(err) {
  //       $state.go('home');// user not logged in
  //       alert('Please, sign in before accesssing this');// user not logged in
  //     });
  //   }
  // ]

  })
    //my_employees component
    .state('my_employees', {
      url:'/my_employees',
      controller: 'my_employeesController',
      template: require('./app/my_employees/my_employees.html')
    })
   //sign_in
    .state('sign_in', {
      url:'/sign_in',
      controller: 'signInCtrl',
      template: require('./app/sign_in/sign_in.html')
    })
     //sign_out
    .state('sign_out', {
      url:'/sign_out',
      controller: 'signOutCtrl',
      template: require('./app/sign_out/sign_out.html')
    })
    
   //sign_up
    .state('sign_up', {
      url:'/sign_up',
      controller: 'signUpCtrl',
      template: require('./app/sign_up/sign_up.html')
    });
}