import npm from '../../package.json';
import angular from 'angular';
import sanitize from 'angular-sanitize';
import directives from './directive';
import filters from './filter';
import Controller from './controller/rss';

angular
	.module('cnn', [sanitize, directives, filters])
	.config(['$compileProvider',  compiler => compiler.debugInfoEnabled(process.env.NODE_ENV !== 'production')])
	.run(['$rootScope', '$http',  (scope, http) => new Controller(scope, http, npm.config.rss)]);