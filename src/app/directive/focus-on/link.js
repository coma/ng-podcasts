class FocusOnLink {

    constructor (scope, element, attrs) {

        scope.$watch(attrs.focusOn, focus => {

            setTimeout(() => {

                if (focus) {

                    element[0].focus();
                }
            });
        });
    }
}

export default FocusOnLink;
