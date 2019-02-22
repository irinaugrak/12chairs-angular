var gulp      = require('gulp'), // Подключаем Gulp
  sass        = require('gulp-sass'), //Подключаем Sass пакет,
  browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browserSync
    server: { // Определяем параметры сервера
      baseDir: 'app' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

gulp.task('sass', function(){ // Создаем таск Sass
  return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss']) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('html', function(){ // Создаем таск Sass
  return gulp.src('app/**/*.html').pipe(browserSync.reload({stream: true}))// Обновляем CSS на странице при изменении
});

gulp.task('watch', function() {
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], gulp.series('sass')); // Наблюдение за sass файлами
  gulp.watch('app/*.html', gulp.series('html'));
  // Наблюдение за другими типами файлов
});

gulp.task('default', gulp.series('watch'));
