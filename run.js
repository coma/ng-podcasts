var path    = require('path'),
    express = require('express'),
    npm     = require('./package.json'),
    app     = express();

app.use(express.static(path.join(__dirname, '/dist'), {
    index: 'index.html'
}));

app.listen(process.env.PORT || npm.config.port);
