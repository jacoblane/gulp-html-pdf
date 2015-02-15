'use strict';
var gutil = require('gulp-util')
    , through = require('through2')
    , pdf = require('html-pdf');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-html-pdf', 'Streaming not supported'));
			return;
		}

		pdf.create(file.contents.toString(), options)
  		.toBuffer(function (err, buffer) {
  			if (err) {
  				cb(new gutil.PluginError('gulp-html-pdf', err, {fileName: file.path}));
  				return;
  			}

  			file.contents = buffer;
  			file.path = gutil.replaceExtension(file.path, '.pdf');
  			cb(null, file);
		  });
	});
};
