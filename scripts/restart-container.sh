#! /bin/bash

CONTAINER=$1
echo "Restarting the '$CONTAINER' container"

docker-compose stop $CONTAINER
docker-compose rm $CONTAINER
docker-compose build $CONTAINER
docker-compose up -d $CONTAINER