Content
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

Grunt and Gulp can automate tedious, human-error-prone build processes such as:

* code minification
* code-quality analysis
* image optimization
* unit-testing

Basically, if you’re doing something over and over again, there’s a huge chance that you can automate it using either Grunt or Gulp.

By integrating a task runner into our workflow, we avoid wasting time and energy on things our computer can do for us.

##Installing
```
$ npm install -g gulp-cli grunt-cli
```
Task runners for doing repeatable items.
* script minification
* javascript linting
* bundling
* integrate these tasks within CI/CD processes

##gulp vs grunt
There are two main differences between Grunt and Gulp
The way you configure your tasks.
* Grunt is configuration-based.
* Gulp is stream-based.

 The way they run your tasks.
* Grunt runs the processes you want to execute in a sequential manner.
* Gulp tries to run them with maximum concurrency, meaning it will try to execute processes in parallel if possible.


#yeoman
[yeoman.io]()
Scaffolding tool for building modern web applications.

##Installing
```
$ npm install -g yo
```

# CLI
Don't be afraid of the command line / bash etc. Everything GUI tool is being buile on top of the CLI.
