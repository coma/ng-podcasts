class RssController {
	
	constructor (scope, http, url) {

		scope.rss = this;
		this.url  = url;
		this.http = http;
		this.fetch();
	}
	
	fetch () {

		this.index = 0;

		var params = {
            v       : '1.0',
            output  : 'json_xml',
            callback: 'JSON_CALLBACK',
            q       : this.url
        };

	    this
	    	.http
	        .jsonp('http://ajax.googleapis.com/ajax/services/feed/load', {params})
	        .then(response => this.parse(response.data.responseData));
	}
	
	parse (data) {

		var guids = (new DOMParser())
			.parseFromString(data.xmlString, 'text/xml')
			.querySelectorAll('item > guid');

		data.feed.entries.forEach((entry, index) => {

			entry.index = index;
			entry.date  = new Date(entry.publishedDate);
			entry.video = guids[index].textContent;
		});

    	this.feed = data.feed;
	}
	
	hover (delta) {

		this.index += delta;

		if (this.index < 0) {

			this.index = this.feed.entries.length - 1;

		} else if (this.index >= this.feed.entries.length) {

			this.index = 0;
		}
	}
	
	up () {

		this.hover(-1);
	}
	
	down () {

		this.hover(1);
	}
	
	play () {

		this.pause = (this.current && this.current.index === this.index) && !this.pause;
		this.current = this.feed.entries[this.index];
	}
	
	goToCurrent () {

		this.index = this.current ? this.current.index : -1;
	}
}


export default RssController;
