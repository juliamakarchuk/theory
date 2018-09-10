var gulp =           require('gulp'),
    sass =           require('gulp-sass'),
    browserSync =    require('browser-sync'),
    autoprefixer =   require('gulp-autoprefixer');


gulp.task('sass', function(){
    return gulp.src('app/sass/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers:['last 5 versions'],
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
        stream:true
    }))
});

gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    });
});
gulp.task('html',function(){
   return gulp.src('app/*.html')
   .pipe(gulp.dest('build'))
});

gulp.task('img',function(){
     return gulp.src('app/img/**/*.+(png|jpg|gif|svg|jpeg)')
     .pipe(gulp.dest('build/img'))
});

gulp.task('watch',['browser-sync','sass', 'html'],function(){
    gulp.watch('app/sass/**/*.scss',[`sass`]);
    gulp.watch('app/*.html',['html']);
});

gulp.task('build', ['sass', 'html', 'img']);
