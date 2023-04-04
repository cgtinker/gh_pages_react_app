FROM node:13.12.0-alpine
WORKDIR /src
ENV PATH /src/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install react-router-dom

RUN npm install gh-pages --save-dev
RUN npm install framer-motion@7.5.2 react-anchor-link-smooth-scroll@1.0.12
RUN npm install gsap react-use-refs

RUN npm install three@0.141.0 @react-three/cannon@6.3.0 @react-three/drei@9.14.3 @react-three/fiber@8.0.27
RUN npm install glslify babel-plugin-glsl glsl-noise

COPY . ./
CMD ["npm", "start"]
