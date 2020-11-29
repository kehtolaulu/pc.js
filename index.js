#!/usr/bin/env node

const yargs = require("yargs");

const list = require("./src/list");
const upload = require("./src/upload");
const download = require("./src/download");

const argv = yargs
  .command("list", "List photos", {
    album: {
      description: "Album to list photos in (optional)",
      alias: "a",
      type: "string",
    },
  })
  .command("upload", "Upload a directory photos to S3", {
    album: {
      description: "Album to upload photos to",
      alias: "a",
      type: "string",
    },
    path: {
      description: "Path of directory to look for photos in (not recursively)",
      alias: "p",
      type: "string",
    },
  })
  .command("download", "Download an album photos from S3", {
    album: {
      description: "Album to download",
      alias: "a",
      type: "string",
    },
    path: {
      description: "Path where to download to",
      alias: "p",
      type: "string",
    },
  })
  .help()
  .alias("help", "h").argv;

if (argv._.includes("list")) {
  list.list(argv);
} else if (argv._.includes("upload")) {
  upload.upload(argv);
} else if (argv._.includes("download")) {
  download.download(argv);
} else {
  console.log("Unsupported command");
}
