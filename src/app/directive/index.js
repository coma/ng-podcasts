import angular from 'angular';
import player from './player';
import focusOn from './focus-on';
import inView from './in-view';
import inViewContainer from './in-view-container';
import { keyEnter, keyUp, keyDown, keyLeft, keyRight } from './key';

export default angular
    .module('cnn.directive', [])
    .directive('player', [player])
    .directive('focusOn', [focusOn])
    .directive('inView', [inView])
    .directive('inViewContainer', [inViewContainer])
    .directive('keyEnter', [keyEnter])
    .directive('keyUp', [keyUp])
    .directive('keyDown', [keyDown])
    .directive('keyLeft', [keyLeft])
    .directive('keyRight', [keyRight])
    .name;
