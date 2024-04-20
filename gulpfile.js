// importando pacotes instalados
const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
const uglify = require ('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

// criando funções
function styles() {
    return gulp.src('./src/styles/*.scss')  //colentando os arquivos fontes
        .pipe(sass({ outputStyle: 'compressed' })) //comprimindo os arquivos
        .pipe(gulp.dest('./dist/css')); //criando e depositando arquivos comprimidos para pasta dist/css
    }

function images() {
    return gulp.src('./src/images/**/*')  //colentando os arquivos fontes
        .pipe(imagemin()) //minificando os arquivos
        .pipe(gulp.dest('./dist/images')); //criando e depositando arquivos minificados para pasta dist/images
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //função que atualiza mudanças feitas nos arquivos .scss
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}