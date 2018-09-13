FROM node:8-alpine

MAINTAINER Dimitri DO BAIRRO <dimitri.dobairro@fundlyup.com>

RUN mkdir -p /app

WORKDIR /app

COPY . ./
