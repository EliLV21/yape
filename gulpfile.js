const gulp = require("gulp");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const sass = require("gulp-sass");

const rutas = {
	rutaCSS: 'src/assets/scss/*.css',
	rutasJS: 'src/assets/js/*.js',
	rutaImg: 'src/assets/img/*',
	rutaViews: 'views/*.html',
	rutaAssets: 'public/src/assets',
	rutaNodeModules: 'node_modules/'
};
gulp.task("estilos", function(){
	gulp.src(rutas.rutaNodeModules)
	.pipe(gulp.dest("public"))
});
gulp.task("assets", function(){
	gulp.src('index.html')
	.pipe(gulp.dest("public"))
});
gulp.task("views", function(){
	gulp.src(rutas.rutaViews)
	.pipe(gulp.dest("public/views"))
});
gulp.task("imgs", function(){
	gulp.src(rutas.rutaImg)
	.pipe(gulp.dest(rutas.rutaAssets + "/img"))
});
gulp.task("prepararSCSS", function(){
	gulp.src(rutas.rutaCSS)
	.pipe(sass({
		outputstyle: 'compressed',
		precision: 3})
	.on('error', sass.logError)
	.pipe( gulp.dest(rutas.rutaAssets + "/css"))
)
});
gulp.task('prepararJS', function(){
	gulp.src(rutas.rutasJS)
	.pipe(uglify())
	.pipe(obfuscate())
	.pipe( gulp.dest(rutas.rutaAssets + "/js"))
});
gulp.task("observar", function(){
	gulp.watch('index.html',['assets']);
	gulp.watch(rutas.rutaCSS,['prepararSCSS']);
	gulp.watch(rutas.rutasJS,['prepararJS']);
	gulp.watch(rutas.rutaViews,['views']);
});
