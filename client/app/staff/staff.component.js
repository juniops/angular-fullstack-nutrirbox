'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './staff.routes';

export class StaffComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('fullstackApp.staff', [uiRouter])
  .config(routes)
  .component('staff', {
    template: require('./staff.html'),
    controller: StaffComponent,
    controllerAs: 'staffCtrl'
  })
  .name;
