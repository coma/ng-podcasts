class InViewContainerController {

    link (element) {

    	this.container = element[0];
    }

    show (element) {

    	var item      = element[0].getBoundingClientRect(),
    		container = this.container.getBoundingClientRect(),
    		top       = Math.max(container.top - item.top, 0),
    		bottom    = Math.max(item.bottom - container.bottom, 0);

		this.container.scrollTop += bottom - top;
    }
}

export default InViewContainerController;
