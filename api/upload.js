const fileUpload = require('express-fileUpload');

const createUpload = (req, res) => {
  if ( !req.files || Object.keys(req.files).length === 0 ) {
    return res.status(400).send('No files were uploaded.');
  }

  for ( const file in req.files ) {
    let uploadPath = `${ process.env.VOLUME_PATH }/assets/files/${ file.name }`;

    file.mv(uploadPath, (err) => {
      if ( err ) {
        return res.status(500).send(err);
      }

      res.send('File uploaded.');
    });
  };
};

exports.createUpload = createUpload;
