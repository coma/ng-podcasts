import Link from './link';

export default function () {

	return {
	    restrict: 'A',
	    require : '^inViewContainer',
	    link    : (scope, element, attrs, inViewContainer) => new Link(scope, element, attrs, inViewContainer)
	};
}