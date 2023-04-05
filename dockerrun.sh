# starts interactive docker shell
docker run \
  -it \
  --rm \
  -v ${PWD}:/src \
  -v /src/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  --name ghpg \
  gh-react-three:dev \
  sh
