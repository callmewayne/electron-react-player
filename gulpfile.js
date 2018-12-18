const gulp = require("gulp");
const ts = require('gulp-typescript');
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");

//1. 编译ts文件
//2. 编译html文件
//3. 编译less文件
//4. 编译js文件
//5. 编译sass文件
const result = "dist/";
const source = "src/"
gulp.task("compileTsFile", () => {
    gulp.src([`${source}**/*.ts`])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts({
            "module": "commonjs",
            "target": "ES6",
            "moduleResolution": "node",
            "removeComments": true,
            "alwaysStrict": true,
            "skipLibCheck": true
        }))
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: path.resolve(__dirname, source)
        }))
        .pipe(gulp.dest(`${result}`))
})

// gulp.task("compileHtml", () => {
//     let options = {
//         removeComments: true, //清除HTML注释
//         collapseWhitespace: true, //压缩HTML
//         collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
//         removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
//         removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//         removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//         minifyJS: false, //压缩页面里的JS
//         minifyCSS: false //压缩页面里的CSS
//     };
//     // gulp.src([`${source}browser/**/*.html`])
//     //     .pipe(plumber())
//     //     .pipe(htmlmin(options))
//     //     .pipe(gulp.dest(`${result}browser`));
// })
// gulp.task("compileLess", () => {
//     gulp.src([`${source}browser/**/*.less`])
//         .pipe(plumber())
//         .pipe(less())
//         .pipe(minifyCss())
//         .pipe(gulp.dest(`${result}browser`))
// })
// gulp.task("compileJS", () => {
//     gulp.src([`${source}browser/**/*.js`])
//         .pipe(plumber())
//         .pipe(gulp.dest(`${result}browser`))
// })
// gulp.task("compileSASS", () => {
//     gulp.src([`${source}browser/**/*.{scss,css}`])
//         .pipe(plumber())
//         .pipe(gulpif("*.scss", gulpSass()))
//         .pipe(minifyCss())
//         .pipe(gulp.dest(`${result}browser`))
// })

gulp.task("copyAppJson", () => {
        gulp.src([`${source}/app.json`])
            .pipe(gulp.dest(`${result}`))
    })
    // gulp.task("copyImage", () => {
    //         gulp.src([`${source}browser/**/*.{png,jpg,webp,svg,gif,eot,svg,ttf,woff,woff2,ico}`, `!${source}browser/{assets,commander,common,download,microapp,splash,typings,update,user,notification}/**/*.{png,jpg,webp,svg,gif,eot,svg,ttf,woff,woff2}`])
    //             .pipe(gulp.dest(`${result}browser`))
    //     })
    //复制assets 所有文件但不包含未编译的文件
    // gulp.task("copyPlugins", () => {
    //     gulp.src([`${source}browser/**/*.{ico,png,jpg,webp,gif,eot,svg,ttf,woff,woff2}`])
    //         .pipe(gulp.dest(`${result}browser/`))
    // })

gulp.task("watch", () => {
    gulp.watch([`${source}/app.json`], ["copyAppJson"])
    gulp.watch([`${source}**/*.ts`], ["compileTsFile"])
        // gulp.watch([`${source}browser/**/*.html`], ["compileHtml"])
        // gulp.watch([`${source}browser/**/*.less`], ["compileLess"])
        // gulp.watch([`${source}browser/**/*.js`], ["compileJS"])
        // gulp.watch([`${source}browser/**/*.{scss,css}`], ["compileSASS"])
        // gulp.watch([`${source}browser/**/*.{ico,png,jpg,webp,gif,eot,svg,ttf,woff,woff2}`], ["copyPlugins"])
        // gulp.watch([`${source}browser/**/*.{png,jpg,webp,svg,gif,eot,svg,ttf,woff,woff2,ico}`, `!${source}browser/{assets,commander,common,download,microapp,splash,typings,update,user,notification}/**/*.{png,jpg,webp,svg,gif,eot,svg,ttf,woff,woff2}`], ["copyImage"])
})

gulp.task("default", ["copyAppJson", "compileTsFile", "watch"])
gulp.task("nowatch", ["copyAppJson", "compileTsFile"])