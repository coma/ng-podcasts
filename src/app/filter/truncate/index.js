import angular from 'angular';

function truncateFilter (value, limit = 10, end = '...') {

	if (angular.isString(value)) {

		limit += end.length;

		return value.length > limit ? value.substring(0, limit) + end : value;
	}

	return value;
}

export default function () {
	
	return truncateFilter;
}
