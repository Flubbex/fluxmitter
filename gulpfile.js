var gulp        = require("gulp"),
    uglify      = require("gulp-uglify")
    rename      = require("gulp-rename");

//Uglify /dist/developer to /dist/release
gulp.task("compress", function()
{
    return gulp.src("source/index.js")
    .pipe(uglify())
    .pipe(rename("fluxmitter.min.js"))
    .pipe(gulp.dest("dist"))
});


gulp.task("default",        ["compress"]);
