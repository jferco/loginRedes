#----------------------
### STAGE 1: BUILD ###
#---------------------

# Building node from LTS version
FROM node:12.2.0 as build

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g @angular/cli 

COPY . . 