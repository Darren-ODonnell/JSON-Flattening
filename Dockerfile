# Specify a base image
FROM node:alpine

WORKDIR /usr/app

#Install some dependencies

#Specifying the folder to be copied 
#ensures that NPM is not reinstalled wen src code is changed
#NPM will only reinstall if something above it in this code has been changed
COPY ./package.json ./
RUN npm install 
COPY ./ ./

# Can run commands like this for debugging within docker container 
#RUN ["pwd"] and RUN ["ls"]

#Default command
CMD ["npm", "start"]