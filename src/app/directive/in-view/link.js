class InViewLink {

    constructor (scope, element, attrs, container) {

        scope.$watch(attrs.inView, show => {

            if (show) {

            	container.show(element);
            }
        });
    }
}

export default InViewLink;
