'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('menu', {
    url: '/menu',
    template: require('./menu.html'),
    controller: 'MenuController',
    controllerAs: 'vm',
    authenticate: 'admin'
  });

}
