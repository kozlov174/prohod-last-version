# Use the official Node.js 14 image from Docker Hub
FROM node
WORKDIR /app
COPY . ./
EXPOSE 3000
RUN npm install -g serve
CMD ["npm","install", "serve"]
CMD ["serve", "-s", "build", "-l", "4000"]