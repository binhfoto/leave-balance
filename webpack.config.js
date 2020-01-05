const path = require('path');

const cssRules = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            // minimize: isProduction
        }
    }
];

const scssRules = [
    ...cssRules,
    {
        loader: 'postcss-loader',
        options: {
            plugins: [
                require('autoprefixer')()
            ]
        }
    },
    {
        loader: 'sass-loader',
        options: {
            includePaths: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'node_modules/foundation-sites/scss')
            ]
        }
    }
];

module.exports = {
    entry: {
        app: './src/client/components/App.tsx'
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'index.js',
    },
    devtool: "source-map",
    // devtool: "cheap-module-eval-source-map",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: [
                    {
                        loader: 'babel-loader',
                        // options: babelOptions
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                include: [
                    path.join(__dirname, "src/client")
                ]
            },

            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, "src/client")
                ],
                // options: babelOptions
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    ...cssRules
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    ...scssRules
                ]
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=32768&mimetype=image/png'
            },
            {
                test: /\.gif/,
                use: 'url-loader?limit=32768&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                use: 'file-loader'
            },
            {
                test: /\.(eot|woff|ttf|svg)/,
                use: 'file-loader'
            }
        ]
    },

    resolve: {
        alias: {
            // Requirement for npm link otherwise you will load React twice
            react: path.resolve(__dirname, "node_modules/react"),
        },
        // Allow to omit extensions when requiring these files
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".json"],
        // transpile code of react-intl to work in IE11
        // https://github.com/formatjs/react-intl/issues/1433
        mainFields: ["browser", "main", "module"],
    },
};
