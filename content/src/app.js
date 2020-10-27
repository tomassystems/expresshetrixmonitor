const express = require('express');
const app = express();
const { redirect_url, monitoring_port } = require('../../ehpData.json');
const chalk = require('chalk');

app.get('/', function(req, res) {
    res.redirect(redirect_url);
});

app.listen(monitoring_port, console.log(`Webserver is now active and listening on port ${chalk.red(monitoring_port)}, you need to use such port to configure your Hetrix Tools monitor.`))
