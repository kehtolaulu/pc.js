# pc.js

## Description

PhotoCloud - is a cloud solution for syncing photos on desktop PC.

## Installation

### System dependencies:

- node.js
- npm (usually comes with node.js distribution)

### Install pc.js

```bash
git clone https://github.com/kehtolaulu/pc.js.git
cd pc.js
npm install
```

### Preparations:

Create a bucket on AWS S3.

Provide your bucket information with environment variables.

Example:

```
S3_BUCKET=yourBucketName
AWS_REGION=us-east-1
```

## Usage

```bash
node index.js upload -a album -p /path/to/photos/dir # upload photos from provided directory

node index.js download -a album -p /path/to/photos/dir # download all photos from given album

node index.js list # list albums

node index.js list -a album # list given album photos
```
