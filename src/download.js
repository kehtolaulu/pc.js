const fs = require("fs");

const aws = require("./aws");
const { collectFromAlbum, getPhotoName } = require("./album");

const logDone = (photoName) => {
  console.log(`Downloaded ${photoName}`);
};

const downloadAlbum = async ({ path, album }) => {
  let photos = await aws.list().then((paths) => collectFromAlbum(paths, album));
  photos.forEach((photo) => {
    let photoName = getPhotoName(photo);
    let file = fs.createWriteStream(path + "/" + photoName);
    aws.download({ path: photo })
      .pipe(file)
      .on("close", () => logDone(photoName));
  });
};

module.exports = { download: downloadAlbum };
