# we will use node:alpine docker image
FROM node:14-slim

# set /app as work directory
WORKDIR /app

# copy your project files to work directory
COPY . /app

# install npm dependencies
RUN npm install

# run your app
CMD ["npm", "start"]