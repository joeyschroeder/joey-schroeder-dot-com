import PurifyCSSPlugin from 'purifycss-webpack';
import glob from 'glob';

export default path => {

    return {
        plugins: [
            new PurifyCSSPlugin({
                // `paths` is used to point PurifyCSS to files not
                // visible to Webpack. This expects glob patterns so
                // we adapt here.
                paths: glob.sync(`${path}/**/*.js`, { nodir: true }),
                // Walk through only html files within node_modules. It
                // picks up .js files by default, so we add .html and .ts
                purifyOptions: {
                    minify: true,
                    info: true,
                    rejected: true,
                    // Array of selectors to always leave in. Ex. ['button-active', '*modal*']
                    whitelist: [
                        '*app--sidebar-active*',
                        '*app-ready*',
                        '*pre-bootstrap-container*'
                    ]
                }
            })
        ]
    };
};
