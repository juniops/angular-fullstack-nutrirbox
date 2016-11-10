'use strict';

import angular from 'angular';
import routes from './menu.routes';
import MenuController from './menu.controller';
import menu from './menu';

export default angular.module('fullstackApp.menu', ['fullstackApp.auth', 'ui.router'])
  .config(routes)
  .controller('MenuController', MenuController)
  .name;
