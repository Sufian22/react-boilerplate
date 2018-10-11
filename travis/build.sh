#!/bin/bash
set -e

S3_BUCKET=""
NODE_ENV=""

if [[ -z "$TRAVIS_BRANCH" ]]
then
   echo "TRAVIS_BRANCH is not defined"
   exit 1
fi

if [ "$TRAVIS_BRANCH" = "master" ]
then
    #S3_BUCKET="s3://cloudfront-console-master.pubgui.com"
    #HOTJAR=$TRAVIS_BRANCH
elif [ "$TRAVIS_BRANCH" = "develop" ]
then
    #S3_BUCKET="s3://cloudfront-console-develop.pubgui.com"
    #HOTJAR=$TRAVIS_BRANCH
fi

cp .env.$TRAVIS_BRANCH .env
echo PKIHUB_VERSION=$(date --rfc-3339 seconds) >> .env
echo PKIHUBGUI_COMMIT=$TRAVIS_COMMIT >> .env

docker-compose up --exit-code-from codecept
if [ "$?" -ne "0" ] 
then
    exit 1
fi 

if [ "$TRAVIS_PULL_REQUEST" = "false" ]
then
    echo "Copying files"
    filepath=$(docker volume inspect -f {{.Mountpoint}} gui_html)
    sudo cp -R $filepath release

    echo "Removing build container"
    docker-compose down -v --rmi all

    # echo "Uploading to s3"
    # aws s3 sync release "$S3_BUCKET/production" --delete
fi
