#outline
* node / npm
* bower
* gulp / grunt
* yeoman
* cli

# node.js / npm
npm - [npmjs.com]()
npm is the package manager /ecosystem for node and is bundled with node.js / io.js.

## Installing

###OS X
```
$ brew install node
```

###Windows
Install via [chocolatey](https://chocolatey.org/)
```
> choco install nodejs
```

Suggest installing `n` for OS X or `nvm` for Windows to allow you to run multiple versions of node.js.
```
$ npm install -g n
```
or
```
$ npm install -g nvm
```

#Bower
[bower.io]()

Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json. How you use packages is up to you. Bower provides hooks to facilitate using packages in your tools and workflows.

Bower is optimized for the front-end. Bower uses a flat dependency tree, requiring only one version for each package, reducing page load to a minimum.

```
$ npm install -g bower
```
_Bower requires node, npm and git._

## Installing a package
First init your `bower.json` aka configuration file
```
$ bower init
```

Install *angular* for example
```
$ bower install angular --save
```

## Searching for packages
```
$ bower search <arg>
```

## Listing the packages in your application
```
$ bower list
```

# gulp / grunt
##Installing
```
$ npm install -g gulp-cli grunt-cli
```
Task runners for doing repeatable items.
* script minification
* javascript linting
* bundling
* integrate these tasks within CI/CD processes



