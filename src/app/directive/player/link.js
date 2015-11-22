class PlayerLink {

    constructor (scope, element) {

    	var video = element.find('video');

        video.on('error', () => {

            scope.$evalAsync(() => scope.error = true);
        });

        video.on('canplay', () => {

            scope.$evalAsync(() => delete scope.loading);
        });

    	video.on('progress', () => {

            scope.$evalAsync(() => scope.progress = video[0].currentTime / video[0].duration);
        });

        scope.$watch('src', src => {

            delete scope.error, scope.progress;
            scope.loading = src;
            video.attr('src', src);
        });

        scope.$watch('pause', pause => {

            if (pause) {

                video[0].pause();

            } else {

                video[0].play();
            }
        });
    }
}

export default PlayerLink;
