FROM node:19.7-alpine
WORKDIR /app
#caching
# ADD package*.json ./
# RUN npm install
#end caching
COPY . .
RUN npm install
CMD node index.js