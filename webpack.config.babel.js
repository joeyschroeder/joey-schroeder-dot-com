import clean from './webpack/clean';
import copyPDFs from './webpack/copy-pdfs';
import devServer from './webpack/dev-server';
import extractSCSS from './webpack/extract-scss';
import generateFavicons from './webpack/generate-favicons';
import generateHTML from './webpack/generate-html';
import generateSourcemaps from './webpack/generate-sourcemaps';
import lintJavascript from './webpack/lint-javascript';
import lintStyles from './webpack/lint-styles';
import loadFonts from './webpack/load-fonts';
import loadImages from './webpack/load-images';
import loadJavascript from './webpack/load-javascript';
import minifyJavascript from './webpack/minify-javascript';
import purifyCSS from './webpack/purify-css';
import setFreeVariable from './webpack/set-free-variable';
import setupSCSS from './webpack/setup-scss';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const ROOT_PATHS = {
    src: path.join(__dirname, 'src'),
    public: path.join(__dirname, 'public')
};

const PATHS = {
    fonts: path.join(ROOT_PATHS.src, 'assets/fonts'),
    images: path.join(ROOT_PATHS.src, 'assets/images'),
    pdfs: path.join(__dirname, 'pdfs'),
    styles: [
        path.join(ROOT_PATHS.src, 'assets/styles', 'critical.scss'),
        path.join(ROOT_PATHS.src, 'assets/styles', 'index.scss')
    ]
};

const common = merge([
    {
        entry: {
            app: path.join(ROOT_PATHS.src, 'index.js'),
            style: PATHS.styles
        },
        output: {
            path: ROOT_PATHS.public,
            filename: '[name].[hash].js'
        },
        plugins: [ new webpack.optimize.CommonsChunkPlugin({ name: ['app'] }) ]
    },
    generateHTML({
        title: 'Joey Schroeder | Developer & Designer',
        template: path.join(ROOT_PATHS.src, 'index.html')
    }),
    generateFavicons({ sourcePath: path.join(PATHS.images, 'favicon.png') }),
    loadFonts({
        options: {
            limit: 5000,
            name: 'fonts/[name].[hash].[ext]'
        }
    }),
    loadJavascript({ include: ROOT_PATHS.src }),
    loadImages({
        options: {
            limit: 15000,
            name: 'images/[name].[hash].[ext]'
        }
    })
]);

export default function(env) {
    if (env === 'production') {

        return merge([
            common,
            {
                performance: {
                    hints: 'warning',
                    maxAssetSize: 50000, // in bytes
                    maxEntrypointSize: 100000 // in bytes
                },
                output: {
                    chunkFilename: '[chunkhash].js',
                    filename: '[name].[chunkhash].js',
                    path: PATHS.public
                },
                plugins: [ new webpack.optimize.OccurrenceOrderPlugin() ]
            },
            setFreeVariable(
                'process.env.NODE_ENV',
                'production'
            ),
            clean(ROOT_PATHS.public),
            minifyJavascript({ useSourceMap: false }),
            extractSCSS(PATHS.style),
            // purifyCSS([ROOT_PATHS.src]),
            copyPDFs({
                sourcePath: PATHS.pdfs,
                destPath: ROOT_PATHS.public
            })
        ]);
    }

    return merge([
        common,
        {
            output: { devtoolModuleFilenameTemplate: 'file://[absolute-resource-path]' },
            performance: { hints: false },
            plugins: [ new webpack.NamedModulesPlugin() ]
        },
        generateSourcemaps({ type: 'cheap-module-eval-source-map' }),
        setupSCSS(PATHS.style),
        devServer({
            host: process.env.HOST,
            port: process.env.PORT
        }),
        lintStyles(PATHS.style),
        lintJavascript({
            include: PATHS.src,
            exclude: /node_modules/,
            options: {
                failOnWarning: false,
                failOnError: true,
                fix: false,
                emitWarning: true
            }
        })
    ]);
}
