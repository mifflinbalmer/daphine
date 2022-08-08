const fs = require("fs");

createView = (req, res) => {
  const filesPath = `${ process.env.VOLUME_PATH }/assets/files`;

  fs.readdir(filesPath, (err, files) => {
    if ( err ) {
      return console.error(`Unable to read directory: ${ err }`);
    }

    files.forEach(file => {
      fs.readFile(`${ filesPath }/${ file }`, (err, data) => {
        if ( err ) {
          console.error(`Unable to read file: ${ err }`);
        }
        
        res.contentType(path.basename(file));
        res.send(data);
      });
    });

    res.end();
  });
}

exports.createView = createView;
