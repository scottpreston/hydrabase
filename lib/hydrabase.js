module.exports = {
  run: function() {
    var fs = require('fs');
    fs.readFile(__dirname + "/hydra.txt", 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data)
    });
  }
};
