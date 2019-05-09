'use strict';

const { src, task, dest, parallel, series, watch } = require('gulp')
  , uglify = require('gulp-uglify')
  , autoprefixer = require('gulp-autoprefixer')
  , plumber = require('gulp-plumber')
  , sourcemaps = require('gulp-sourcemaps')
  , babel = require('gulp-babel')
  , sass = require('gulp-sass')
  , rename = require('gulp-rename')
  , browserSync = require('browser-sync').create();

// File paths APP
const htmlPath = 'src/js/test/index.html'
  , jsAnimLP = 'src/js/animLP.js'
  , jsIndex = 'src/js/test/index.js'
  , cssAnimLP = 'src/scss/animLP.scss'
  , cssAll = 'src/scss/*.scss';

// File paths DIST
const distPath = 'dist'
  , libPath = 'lib';

const err = () => {
  plumber(function (err) {
    console.log('Html Task Error');
    console.log(err);
    this.emit('end');
  })
}

// Html
function html(done) {
  src(htmlPath)
    .pipe(plumber(err()))
    .pipe(dest(distPath))
    .pipe(browserSync.stream());
  done();
}

// Styles SCSS
function scssAll(done) {
  src(cssAll)
    .pipe(plumber(err()))
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(
      autoprefixer({
        browsers: 'last 3 version'
      })
    )
    .pipe(dest(distPath))
    .pipe(browserSync.stream());
  done();
}
function css(done) {
  src(cssAnimLP)
    .pipe(plumber(err()))
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(
      autoprefixer({
        browsers: 'last 3 version'
      })
    )
    .pipe(dest(libPath + '/css'))
    .pipe(browserSync.stream());
  done();
}
function scss(done) {
  src(cssAnimLP)
    .pipe(plumber(err()))
    .pipe(dest(libPath + '/scss'))
    .pipe(browserSync.stream());
  done();
}

// Scripts
function js(done) {
  src(jsAnimLP)
    .pipe(plumber(err()))
    .pipe(
      babel({
        presets: [ '@babel/env' ]
      })
    )
    .pipe(dest(libPath))
    .pipe(uglify())
    .pipe(dest(distPath))
    .pipe(rename('animLP.min.js'))
    .pipe(dest(libPath))
    .pipe(browserSync.stream());
  done();
}

function jsI(done) {
  src(jsIndex)
    .pipe(plumber(err()))
    .pipe(
      babel({
        presets: [ '@babel/env' ]
      })
    )
    .pipe(uglify())
    .pipe(dest(distPath))
    .pipe(browserSync.stream());
  done();
}

// Browser Sync
function browser_sync(done) {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    notify: false
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch_files() {
  watch(htmlPath, series(html, reload));
  watch(cssAnimLP, series(css, reload));
  watch(cssAnimLP, series(scss, reload));
  watch(cssAll, series(scssAll, reload));
  watch(jsAnimLP, series(js, reload));
  watch(jsIndex, series(jsI, reload));
  console.log('Starting Watch Task');
}

task('html', html);
task('css', css);
task('scss', scss);
task('scssAll', scssAll);
task('js', js);
task('jsI', jsI);
task('default', parallel(html, css, scss, scssAll, js, jsI));
task('watch', parallel(watch_files, browser_sync));
