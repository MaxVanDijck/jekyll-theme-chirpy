#!/usr/bin/env node

"use strict";

const { src, dest, watch, series, parallel} = require('gulp');

const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const insert = require('gulp-insert');
const fs = require('fs');

const JS_SRC = '_javascript';
<<<<<<< HEAD
const JS_DEST = `assets/js/dist/`;
=======
const JS_DEST = `assets/js/dist`;
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580

function concatJs(files, output) {
  return src(files)
    .pipe(concat(output))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(JS_DEST));
}

function minifyJs() {
  return src(`${ JS_DEST }/*.js`)
    .pipe(insert.prepend(fs.readFileSync(`${ JS_SRC }/copyright`, 'utf8')))
    .pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
    .pipe(dest(JS_DEST));
}

<<<<<<< HEAD
const homeJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/timeago.js`
=======
const commonsJs = () => {
  return concatJs(`${JS_SRC}/commons/*.js`, 'commons');
};

const homeJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/locale-datetime.js`
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
    ],
    'home'
  );
};

const postJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
<<<<<<< HEAD
      `${JS_SRC}/utils/timeago.js`,
      `${JS_SRC}/utils/lang-badge.js`,
=======
      `${JS_SRC}/utils/img-extra.js`,
      `${JS_SRC}/utils/locale-datetime.js`,
      `${JS_SRC}/utils/checkbox.js`,
      `${JS_SRC}/utils/clipboard.js`,
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
      // 'smooth-scroll.js' must be called after ToC is ready
      `${JS_SRC}/utils/smooth-scroll.js`
    ], 'post'
  );
};

const categoriesJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/category-collapse.js`
    ], 'categories'
  );
};

const pageJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
<<<<<<< HEAD
=======
      `${JS_SRC}/utils/checkbox.js`,
      `${JS_SRC}/utils/img-extra.js`,
      `${JS_SRC}/utils/clipboard.js`,
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
      `${JS_SRC}/utils/smooth-scroll.js`
    ], 'page'
  );
};

<<<<<<< HEAD
=======
const miscJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/locale-datetime.js`
    ], 'misc'
  );
};

>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
// GA pageviews report
const pvreportJs = () => {
  return concatJs(`${JS_SRC}/utils/pageviews.js`, 'pvreport');
};

<<<<<<< HEAD
const buildJs = parallel(homeJs, postJs, categoriesJs, pageJs, pvreportJs);
=======
const buildJs = parallel(
  commonsJs, homeJs, postJs, categoriesJs, pageJs, miscJs, pvreportJs);
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580

exports.build = series(buildJs, minifyJs);

exports.liveRebuild = () => {
  buildJs();

  watch([
      `${ JS_SRC }/commons/*.js`,
<<<<<<< HEAD
      `${ JS_SRC }/utils/*.js`,
      `${ JS_SRC }/lib/*.js`
    ],
    buildJs
  )
}

=======
      `${ JS_SRC }/utils/*.js`
    ],
    buildJs
  );
};
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
