file-to-phone
=============

Very simple node webkit application that starts a static file server and
creates a QRcode with an url to download the file

## Quick Start

Compress all files in the repository into a zip archive rename it so it has the extension `.nw`:

```bash
$ zip app.nw *
```

Download the [latest node-webkit](https://github.com/rogerwang/node-webkit) for your platform and use it to open the
`app.nw` file:

```bash
$ ./nw app.nw
```
 or
```bash
$ ./nw app.nw /path/to/file
```

##Tips
* In windows you can add a shortcut to the [SendTo folder](http://www.howtogeek.com/howto/windows-vista/customize-the-windows-vista-send-to-menu/) and start the application from the right click menu of a file
