#!/usr/bin/env sh
VERSION=1.0.0
REBUILD="SKIP"

function version {
	echo "v${VERSION}"
	exit 1
}

while :; do
  case $1 in
    -B | --build )   unset REBUILD;;
    -V | --version ) version;;
    -- )             shift; break ;;
    * )              break ;;
  esac
  shift
done

# abort on errors
set -e

# build
if [ -z ${REBUILD+nil} ]; then
	npm run build
fi

# navigate into the build output directory
cd .vuepress/dist

# start http server
http-server . --ssl --port 443 --cert ../cert.pem --key ../key.pem