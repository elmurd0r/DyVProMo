FROM node:16.6.2-alpine3.14

# set working directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

#Copy entire application except of files that are in ignore file
COPY . ./

# start app
CMD ["npm", "start"]
