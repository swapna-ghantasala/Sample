FROM node:6

VOLUME /app/output
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
