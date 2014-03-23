
exports.getIP= function()
{
    var os=require('os');
    var ifaces=os.networkInterfaces();
    var ips = [];

    for (var dev in ifaces) 
    {
      var alias=0;
      ifaces[dev].forEach(function(details)
       {
        if (details.family=='IPv4' && details.address != '127.0.0.1') 
        {
          ips.push(details.address);
          ++alias;
        }
      });
    }

   return ips[0];
};

exports.generateSecureString= function()
{
    try {
        var buf = require('crypto').randomBytes(24);
        return buf.toString('hex');
    } catch (ex) {
      // handle error
      // most likely, entropy sources are drained
    }

};

exports.parseSecureString= function(url)
{
    var urlParser = require('url');
    var url_parts = urlParser.parse(url, true);
    var query = url_parts.query;
    return query.secure;
};

exports.parsePathName= function(url)
{
    var urlParser = require('url');
    var url_parts = urlParser.parse(url, true);
    return url_parts.pathname;
};


exports.sendFile= function(filePath,res)
{
        var fileSystem = require('fs');
        var stat = fileSystem.statSync(filePath);

        res.writeHead(200, {
	        'Content-Type': 'application/unknown',
	        'Content-Length': stat.size
        });

        var readStream = fileSystem.createReadStream(filePath);
        // We replaced all the event handlers with a simple call to readStream.pipe()
        readStream.pipe(res);
};