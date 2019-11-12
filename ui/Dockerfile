# Docker container for local development:
# Runs webpack dev server in a node.js environment

FROM mhart/alpine-node:10.14.2

WORKDIR /app

COPY  package*.json ./

RUN npm config set @pluralsight:registry https://repository.vnerd.com/artifactory/api/npm/npm-pluralsight/

RUN npm i

COPY . .

CMD [ "npm", "start" ]