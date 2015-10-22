#Notes
Create Simple Web Application using yeoman
```
$ yo aspnet
```
Change `.bowerrc` file to point to `bower_components`
```
{
  "directory": "bower_components"
}
```
Open `package.json` and add the following to `devDependencies`

* "gulp-load-plugins": "~1.0.0" - loads any gulp-* package as it is referenced
* "del" : "~2.0.2" - using this instead of rimraf package (so remove rimraf)
* "gulp-task-listing": "^1.0.0" - lists all of the defined tasks
package.json
```
{
  "name": "myweb",
  "version": "0.0.0",
  "devDependencies": {
    "del" : "~2.0.2",
    "gulp": "~3.9.0",
    "gulp-load-plugins": "~1.0.0",
    "gulp-concat": "2.5.2",
    "gulp-cssmin": "0.1.7",
    "gulp-uglify": "1.2.0",
    "gulp-task-listing": "~1.0.0"
  }
}
```

Add the `gulp-load-plugins` to gulpfile.js
```
'use strict';
var gulp = require("gulp"),
  del = require("del"),
  project = require("./project.json"),
  $ = require('gulp-load-plugins')({ lazy: true });

```