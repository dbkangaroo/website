#!/usr/bin/env sh

# proxy setting
# git config --global http.proxy 'socks5://127.0.0.1:49400'
# git config --global https.proxy 'socks5://127.0.0.1:49400'
# git config --global --unset http.proxy
# git config --global --unset https.proxy

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
echo 'www.datatable.online' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:dbkangaroo/dbkangaroo.github.io.git master
git push -f https://github.com/dbkangaroo/dbkangaroo.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -