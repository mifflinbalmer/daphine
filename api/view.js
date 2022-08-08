const fs = require("fs");

createView = () => {
  const filesPath = `${ process.env.VOLUME_PATH }/assets/files`;

  fs.readdir(filesPath, (err, files) => {
    if ( err ) {
      return console.error(`Unable to read directory: ${ err }`);
    }

    files.forEach(file => {
      console.log(`file: ${ file }`);
      return file;
    });
  });
}

exports.createView = createView;
