class KeyLink {

    constructor (name, code, scope, element, attrs) {

    	element.on('keydown', event => {

            if (event.keyCode === code) {

                scope.$evalAsync(() => scope.$eval(attrs[name]));
            }
        });
    }
}

export default KeyLink;
