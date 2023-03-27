FROM node:13.12.0-alpine
WORKDIR /src
ENV PATH /src/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install gh-pages --save-dev
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install react-router-dom


COPY . ./
CMD ["npm", "start"]
