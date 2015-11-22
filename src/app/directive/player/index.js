import Link from './link';
import template from './template.html';

export default function () {

	return {
	    scope: {
	        src  : '=',
	        pause: '='
	    },
	    restrict: 'E',
	    replace : true,
	    link    : (scope, element) => new Link(scope, element),
	    template
	};
}