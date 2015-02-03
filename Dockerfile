############################################################
# https://github.com/Kriegslustig/Docker-Meteorbase
# Dockerfile to build a Meteor app container
# Based on gliderlabs/alpine/
############################################################
FROM gliderlabs/alpine/
MAINTAINER Kriegslustig
RUN apk-install nodejs
RUN apk-install curl
RUN curl https://install.meteor.com/ | sh
EXPOSE 7923
ADD . /var/app
WORKDIR /var/app
CMD meteor -p 7923 --production