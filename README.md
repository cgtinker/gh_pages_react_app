# react gh pages

Mainly playing around, don't rely on any of this.

### ops
- docker setup: based on mherman.org/blog/dockerizing-a-react-app/
- private goal: deploy gh pages within the docker image

### tech
- create-react-app page === outdated, used it anyways
- react / react router / three / framer and random stuff


### deploy docs: gh-pages
While this could be improved a lot and simplified, the goal has been to deploy 
everything inside a docker container.
There is a gh-pages plugin but it cannot easily be used inside docker.
Most likly it can be removed by now and just use 'npm run build' instead of 'predeploy'.

Initial worktree setup:
```
$ git worktree add build gh-pages --no-checkout
Generic: (`$ git worktree add <directory-name> <branch-name>`)
```

Start the docker container (interactive container, use npm start for the default localhost workflow)
```
$./dockerrun.sh (start container)
```

Deploy and push to git
```
# deploy gh pages - interactive shell directly copies (modfiy for custom run cmd)
$./dockercpghpgs.sh

# standart git workflow (add / commit / push)
$cd build
$git ...
```
