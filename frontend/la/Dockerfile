# Use the official Node.js 14 image from Docker Hub
FROM node
WORKDIR /app
COPY . ./
EXPOSE 4000
RUN npm install
CMD ["npm","start"]