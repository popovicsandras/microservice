'use strict';

var express = require('express');

var Service = {

    create: function(logger, config) {
        var app = express();

        app.use(logger);

        app.get('/', function(req, res) {
            res.status(200)
                .send('Hello world');
        });

        app.use(function(req, res) {
            res.status(404)
                .send('File not found!');
        });

        app.listen(config.get('port'), function() {
            console.log('Service started on port ' + config.get('port'));
        });

        return app;
    }
};

module.exports = Service;