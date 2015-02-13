gulp-html-pdf
=============

html to pdf using [html-pdf](https://github.com/marcbachmann/node-html-pdf)

# Install
```
$ npm install --save-dev gulp-html-pdf
```

# How to
```js
var gulp = require('gulp')
    , pdf = require('gulp-html-pdf')
    ;
    gulp.task('to-pdf').src('some.html')
      .pipe(pdf())
      .pipe(gulp.dest('./'))
```

# Options
see: [html-pdf](https://github.com/marcbachmann/node-html-pdf#options)
