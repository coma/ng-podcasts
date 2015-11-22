import angular from 'angular';
import truncate from './truncate';

export default angular
    .module('cnn.filter', [])
    .filter('truncate', [truncate])
    .name;
