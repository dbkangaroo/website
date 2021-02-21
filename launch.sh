#!/usr/bin/env sh
VERSION=1.0.0

function version {
	echo "v${VERSION}"
	exit 1
}

while :; do
  case $1 in
    -S | --skip )    BUILD_WEB="SKIP";;
    -V | --version ) version;;
    -- )             shift; break ;;
    * )              break ;;
  esac
  shift
done

# abort on errors
set -e

# build
if [ -z ${BUILD_WEB+nil} ]; then
	npm run build
fi

# navigate into the build output directory
cd .vuepress/dist

# start http server
http-server . --ssl --cert ../cert.pem --key ../key.pem