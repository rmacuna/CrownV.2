var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

//Tarea para unir ó concatenar archivos
gulp.task('unir-files', function() {
 return gulp.src('public/javascript/*.js') //Origen
  .pipe(concat('crown.js'))	//Concatenado los archivos 
  .pipe(gulp.dest('public/javascript/')) //Destino
  .pipe(notify("La tarea unir-files a terminado!")); //Mensaje
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
	gulp.watch('./public/**/*', ['unir-files']);
});

//Tarea por defecto
gulp.task('default',['watch', 'unir-files']);



// Comprimir JS
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

//Tarea para comprimir archivos js
gulp.task('compress-js', function (cb) {
 pump([
  gulp.src('public/javascript/*.js'), //Ruta de la carpeta apuntando a los archivos `.js`
  uglify(), //Comprime los archivos `.js`
  gulp.dest('dist')//Carpeta donde se guardara el archivo `.js` comprimido
   ],
    cb
  );
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('public/javascript/**/*', ['compress-js']);
});

//Tarea por defecto
gulp.task('default',['watch', 'compress-js']);