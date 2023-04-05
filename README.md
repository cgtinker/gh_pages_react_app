# react gh pages

Mainly playing around, don't rely on any of this.

### ops
- docker setup: based on mherman.org/blog/dockerizing-a-react-app/
- private goal: deploy gh pages within the docker image

### tech
- create-react-app page === outdated, used it anyways
- react / react router / three / framer and random stuff


### deploy docs: gh-pages
While this could be simplified, the goal has been to deploy 
everything inside a docker container.
There is a gh-pages plugin (which I could probably remove now)
but it cannot easily be used inside docker.

Initial worktree setup:
```
$ git worktree add build gh-pages --no-checkout
Generic: (`$ git worktree add <directory-name> <branch-name>`)
```

Start the docker container (interactive container, use npm start for the default localhost workflow)
```
$./dockerrun.sh (start container )
```

Copy and push to git
```
# copies gh pages
$./dockercpghpgs.sh

# consider to exit the docker
$exit (inside container)

$cd build
# standart git workflow (add / commit / push)
```
