import Link from './link';

function key (name, code) {

	return function () {

		return {
		    restrict: 'A',
		    link    : (scope, element, attrs) => new Link(name, code, scope, element, attrs)
		};
	};
}

export const keyEnter = key('keyEnter', 13);
export const keyLeft  = key('keyLeft', 37);
export const keyUp    = key('keyUp', 38);
export const keyRight = key('keyRight', 39);
export const keyDown  = key('keyDown', 40);
