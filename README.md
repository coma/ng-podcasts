ng-podcasts
===========

[![Build Status](https://travis-ci.org/coma/ng-podcasts.png?branch=master)](https://travis-ci.org/coma/ng-podcasts)
[![Dependency Status](https://david-dm.org/coma/ng-podcasts.png)](http://david-dm.org/coma/ng-podcasts)

AngularJS app reading a podcast feed from a Google proxy service and showing it using an HTML video element. 

You can play with it [here](http://ngpc.herokuapp.com/) (keep in mind that I'm using a free [Heroku](https://www.heroku.com/) instance and
it might be sleeping the first time to reach it).

The restriction here was the fact that this is targeted to a Firefox 5 browser,
so fancy things like flexbox where avoided. In the other hand, I'm using ES6 (ES2015) thanks to [Babel](https://babeljs.io/).

**IMPORTANT:** Firefox 5 does not support almost any video format rather than OGG/OGV out of the box
and the CNN podcasts are MV4... Try reading another feed using OGG/OGV videos.

Setup
-----

You will need [Node 4.2](https://nodejs.org/en/) and install it like:

```bash
npm i
```

The configuration is inside the ```package.json``` file under the ```config``` property and looks like:

```json
"config"         : {
    "port": 5000,
    "rss" : "http://rss.cnn.com/services/podcasting/ac360/rss.xml"
}
```

Develop
-------

A tiny [express](http://expressjs.com/) server is included to ease the development process, including a [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
configuration. Just run:

```bash
gulp
```

Build
-----

For a production build just run:

```bash
npm run build
```

and you will have it under the ```dist``` directory.

Serve
-----

There is no need of serving this app from a web server, opening the index file from the ```dist``` directory will
do the trick, however if you want to have one then run:

```bash
npm start
```

Navigation
----------

Use your arrow keys in order to navigate like:

- `▲` and `▼` to move between entries.
- `◀` and `▶` to go to the current playing entry.
- `Enter` to start playing or to toggle between pause and play.
