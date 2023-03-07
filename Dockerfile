FROM node:19.7-alpine
WORKDIR /app
#caching
# ADD package*.json ./
# RUN npm install
#end caching
ADD . .
RUN npm install
CMD node index.js