FROM node:3.16-alpine
WORKDIR /app
#caching
ADD package*.json ./
RUN npm install
#end caching
ADD . .
CMD node index.js