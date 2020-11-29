const aws = require("./aws");
const album = require("./album");

const listAlbums = async () => {
  return album.collectAlbumNames(await aws.list());
};

const listAlbum = (albumName) => {
  return aws.list()
    .then((paths) => album.collectFromAlbum(paths, albumName))
    .then((paths) => paths.map(album.getPhotoName));
};

const list = async (params = {}) => {
  let list = await (params.album ? listAlbum(params.album) : listAlbums());
  console.log(`Items count: ${list.length}`);
  list.forEach((element) => {
    console.log(element);
  });
};

module.exports = { list };
