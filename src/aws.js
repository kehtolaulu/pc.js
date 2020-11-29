const AWS = require("aws-sdk");

AWS.config.update({ region: process.env["AWS_REGION"] });

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const Bucket = process.env["S3_BUCKET"];
const promisify = require("util").promisify;

const s3Upload = promisify(s3.upload.bind(s3));
const s3ListObjects = promisify(s3.listObjectsV2.bind(s3));

const upload = ({ path, content }) => {
  return s3Upload({ Bucket, Key: path, Body: content });
};

const list = () => {
  return s3ListObjects({ Bucket }).then((response) =>
    response.Contents.map((object) => object.Key)
  );
};

const download = ({ path }) => {
  return s3.getObject({ Bucket, Key: path }).createReadStream();
};

module.exports = { upload, list, download };
