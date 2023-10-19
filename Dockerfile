FROM node:alpine
WORKDIR /src
ADD package.json ./
ADD package-lock.json ./
ADD ./ ./
RUN npm i
EXPOSE 5177
CMD ["npm", "run", "dev"]
