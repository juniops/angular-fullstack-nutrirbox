'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularCookies = require('angular-cookies');

var _angularCookies2 = _interopRequireDefault(_angularCookies);

var _angularResource = require('angular-resource');

var _angularResource2 = _interopRequireDefault(_angularResource);

var _angularSanitize = require('angular-sanitize');

var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

require('angular-socket-io');

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _angularUiBootstrap = require('angular-ui-bootstrap');

var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

var _app = require('./app.config');

var _auth = require('../components/auth/auth.module');

var _auth2 = _interopRequireDefault(_auth);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

var _navbar = require('../components/navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

var _main = require('./main/main.component');

var _main2 = _interopRequireDefault(_main);

var _staff = require('./staff/staff.component');

var _staff2 = _interopRequireDefault(_staff);

var _app2 = require('./app.constants');

var _app3 = _interopRequireDefault(_app2);

var _util = require('../components/util/util.module');

var _util2 = _interopRequireDefault(_util);

var _socket = require('../components/socket/socket.service');

var _socket2 = _interopRequireDefault(_socket);

require('./app.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('fullstackApp', [_angularCookies2.default, _angularResource2.default, _angularSanitize2.default, 'btford.socket-io', _angularUiRouter2.default, _angularUiBootstrap2.default, _auth2.default, _account2.default, _admin2.default, _navbar2.default, _main2.default, _app3.default, _socket2.default, _util2.default, _staff2.default]).config(_app.routeConfig).run(function ($rootScope, $location, Auth) {
  'ngInject';
  // Redirect to login if route requires auth and you're not logged in

  $rootScope.$on('$stateChangeStart', function (event, next) {
    Auth.isLoggedIn(function (loggedIn) {
      if (next.authenticate && !loggedIn) {
        $location.path('/login');
      }
    });
  });
});
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


// import ngAnimate from 'angular-animate';


_angular2.default.element(document).ready(function () {
  _angular2.default.bootstrap(document, ['fullstackApp'], {
    strictDi: true
  });
});

//# sourceMappingURL=app-compiled.js.map