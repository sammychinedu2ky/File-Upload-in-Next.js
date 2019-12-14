let formidable = require('formidable')
const fs = require('fs');
export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir='./uploads'
  form.parse(req, function(err, fields, files) {
      console.log(fields,files.sopi.path);
      console.log(files)
      let arr = files.sopi.path.split('\\')
      fs.rename('./'+files.uploads.path, './'+ files.sopi.path.split('\\').slice(0,arr.length-1).join('') +'/'+ files.uploads.name , (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
     res.status(200).json({fields,files})
  });
};
  export const config = {
    api: {
      bodyParser: false,
    },
  }
 