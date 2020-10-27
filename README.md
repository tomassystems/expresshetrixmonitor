# Express Hetrix Ping Application

This application aims to allow [Hetrix Tools](https://hetrixtools.com) to ping your discord bot to monitor for outages.

## How to configure

```
{
    "monitoring_port": "",
    "redirect_url": "",
    "bot_startup_file": ""
}
```

This is your `ehpData.json` file, please do not rename such file as it will cause errors. 

For the **monitoring_port** you need to provide a port that your WebServer will listen on and as to what Hetrix Tools will monitor, the **redirect_url** is what you wish for users to be redirected to if they attempt to access the WebServer. Finally **bot_startup_file** is your bots startup file, this must be an absolute path e.g, `./src/index.js`. 


Thank you for using Express Hetrix Ping.


The name "Hetrix" is property of [Hetrix Tools](https://hetrixtools.com) and all rights are reserved.

Below you can find the packages you need to install with their version numbers:

```
"chalk": "^4.1.0",
"express": "^4.17.1"
```