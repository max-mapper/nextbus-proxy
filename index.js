var restbus = require('restbus');

var configPort = process.env["PORT"] || 3535

restbus.listen(configPort, function(port) {
  console.log('restbus listening on port ' + port);
});
