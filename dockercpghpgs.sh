echo Attempting to copy pages from container

# save .git file from deletion
cp $PWD/build/.git $PWD/.git.tmp
docker exec ghpg npm run predeploy

# move files if docker shell isn't -it
# docker cp ghpg:/src/build $PWD/build

mv $PWD/.git.tmp $PWD/build/.git


