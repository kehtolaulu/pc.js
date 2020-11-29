const root = "cloudphoto/albums/";

const getAlbumPath = (albumName) => {
  return `${root}${albumName}/`;
};

const getPhotoPath = (album, photo) => {
  return `${getAlbumPath(album)}${photo}`;
};

const pathToAlbumName = (path) => {
  return path.split("/")[2];
};

const collectAlbumNames = (paths) => {
  return [...new Set(paths.filter(inAlbum).map(pathToAlbumName))];
};

const getPhotoName = (path) => {
  return path.split("/")[3];
};

const collectFromAlbum = (paths, album) => {
  let albumPath = getAlbumPath(album);
  return paths.filter(
    (path) => path.startsWith(albumPath) && path != albumPath
  );
};

const inAlbum = (path) => {
  return path.startsWith(root) && path.split("/").length === 4;
};

module.exports = {
  getAlbumPath,
  pathToAlbumName,
  collectAlbumNames,
  collectFromAlbum,
  getPhotoName,
  getPhotoPath,
};
