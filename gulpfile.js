// importando pacotes instalados
const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));

// criando uma função
function styles() {
    return gulp.src('./src/styles/*.scss')  //colentando os arquivos fontes
    .pipe(sass({ outputStyle: 'compressed' })) //comprimindo os arquivos
    .pipe(gulp.dest('./dist/css')); //criando e depositando arquivos comprimidos para pasta dist/css
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //função que atualiza mudanças feitas nos arquivos .scss
}