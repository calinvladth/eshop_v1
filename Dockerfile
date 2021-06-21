# we will use node:alpine docker image
FROM node:alpine

# set /app as work directory
WORKDIR /app

# copy package.json to work directory, so that we install npm dependencies
COPY ./app/package.json /app

# install npm dependencies
RUN npm install

# copy your project files to work directory
COPY ./app /app

# run your app
CMD ["npm", "start"]