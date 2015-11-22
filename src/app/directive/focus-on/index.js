import Link from './link';

export default function () {

	return {
	    restrict: 'A',
	    link    : (scope, element, attrs) => new Link(scope, element, attrs)
	};
}