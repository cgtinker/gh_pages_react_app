docker run \
  -it \
  --rm \
  -v ${PWD}:/src \
  -v /src/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  gh-react-three:dev

