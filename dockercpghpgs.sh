echo Attempting to copy pages from container

# save .git file from deletion
cp $PWD/build/.git $PWD/.git.tmp
docker cp ghpg:/src/build $PWD/build
mv $PWD/.git.tmp $PWD/build/.git

