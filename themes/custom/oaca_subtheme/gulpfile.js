const gulp = require("gulp"),
sass = require("gulp-sass"),
glob = require("gulp-sass-glob"),
watch = require("gulp-watch"),
sourcemaps = require("gulp-sourcemaps"),
autoprefixer = require("autoprefixer"),
postcss = require("gulp-postcss");

gulp.task("sassCompile", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(glob())
    .pipe(
      sass({
      	noCache: true,
      	outputStyle: "compressed",
      	lineNumbers: false,
      	loadPath: "./dist/*",
      	sourceMap: true
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist"))
});

gulp.task("watch", function() {
  gulp.watch(["scss/**/*.scss"], ["sassCompile"]);
});

gulp.task('default', ['watch']);