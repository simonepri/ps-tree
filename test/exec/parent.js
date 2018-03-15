var path = require('path');
var cp = require('child_process');

for (var i = 0; i < 10; i++) {
  var child = cp.fork(path.join(__dirname, 'child.js'));
}

console.log(process.pid);
setInterval(function() {
  console.log(process.pid);
}, 1000); // Does nothing, but prevents exit
