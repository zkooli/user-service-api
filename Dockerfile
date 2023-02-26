FROM node:latest
WORKDIR /app
#caching
ADD package*.json ./
RUN npm install
#end caching
ADD . .
CMD node index.js