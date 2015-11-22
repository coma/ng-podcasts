import Controller from './controller';

export default function () {

	return {
	    restrict    : 'A',
	    link        : (scope, element) => scope.inViewContainer.link(element),
	    controller  : () => new Controller(),
	    controllerAs: 'inViewContainer'
	};
}