/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure */
import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import uirouter from 'angular-ui-router'

import home from './home'
import layout from './layout'

angular
  .module('app', [uirouter, layout, home])
  .config(RouteConfig)
  .run(($rootScope) => {
    $rootScope.$on('$stateChangeError', console.log.bind(console))
  })

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
}
