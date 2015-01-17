{
    //应用程序的目录（即<root>）。
    appDir: './',

    //相对于appDir，代表查找文件的锚点
    baseUrl:'html/scripts',

    //这是一个输出目录，所有的应用程序文件将会被复制到该文件夹下。
    dir: 'html-build',

    //一个包含多个对象的数组。每个对象代表一个将被优化的模块（module）。
    modules:[
        {
            name:'app/main'
        }
    ],

    //如果为true，优化器（optimizer）将从输出目录中删除已合并的文件。
    removeCombined: true,

    // 任何与此规则匹配的文件或文件夹都将不会被复制到输出目录。
    // 由于我们把r.js和build.js放置在应用程序目录下，我们希望优化器（optimizer）排除这两个文件。 
    // 因此我们可以这样设置/^(r|build)\.js$/。
    //  fileExclusionRegExp: /^(r|build)\.js$/,
    fileExclusionRegExp: /(^(r|build|Gruntfile)\.js)|(^sass)|(^node_modules)|(.git)$/,

    //模块（modules）的相对目录。
    paths: {
        'zepto': 'frames/zepto.min',
        'underscore': 'frames/underscore',
        'backbone': 'frames/backbone',
        'localStorage': 'frames/backbone.localStorage-min',
        'text': 'frames/text'
    },
    map: {
        '*': {
          css: 'frames/css'
        }
    },

    // 国际化配置
    locale: "en-us",

    //为那些没有使用define()声名依赖关系及设置模块值的模块，配置依赖关系与“浏览器全局”出口的脚本。
    shim: {
        zepto: {
            exports: '$',
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['zepto','underscore'],
            exports: 'Backbone'
        }
    },

    // CSS 优化方式，目前支持以下几种：
    // none: 不压缩，仅合并
    // standard: 标准压缩，移除注释、换行，以及可能导致 IE 解析出错的代码
    // standard.keepLines: 除标准压缩外，保留换行
    // standard.keepComments: 除标准压缩外，保留注释 (r.js 1.0.8+)
    // standard.keepComments.keepLines: 除标准压缩外，保留注释和换行 (r.js 1.0.8+)
    optimizeCss: "standard"
    // 一般用于命令行，可将多个 CSS 资源文件打包成单个 CSS 文件
    // node r.js -o cssIn=css/main.css out=css/built.css optimizeCss=standard
    // cssIn: "html/style/all.css",
    // out: "html-build/style/main-min.css",

    
}
