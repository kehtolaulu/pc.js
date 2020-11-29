const fs = require("fs");

const getPhotoPath = require("./album").getPhotoPath;
const upload = require("./aws").upload;

const logFileUploaded = (...args) => {
  console.log(args);
};

const logFileUploadFailed = (...args) => {
  console.log(args);
};

const uploadDirectory = ({ path, album }) => {
  return fs.readdirSync(path)
    .filter(isImage)
    .map((photo) => {
      let content = readFile(path + "/" + photo);
      return upload({ path: getPhotoPath(album, photo), content })
        .then(logFileUploaded)
        .catch(logFileUploadFailed);
    });
};

const readFile = (path) => {
  return fs.createReadStream(path);
};

const isImage = (path) => {
  return path && (path.endsWith(".jpeg") || path.endsWith(".jpg"));
};

module.exports = { upload: uploadDirectory };
