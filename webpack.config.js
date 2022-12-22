const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = [
    {
        // Mode
        mode: 'production',
        // mode: 'development',

        // Entrypoint
        entry: './src/index.ts',

        // This is important how your bundle will be transpiled
        target: 'web',

        // Dev server, simple webserver
        devServer: {
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            },
            static: {
                directory: path.join(__dirname, 'build'),
            },
            compress: true,
            port: 8080,
            open: true,
        },

        // Module
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }]
                }
            ]
        },

        // Which files should be taken in account
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },

        // Output
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: `bundle.js`
        },

        // Plugins
        plugins: [
            // Copy assets and index.html to build (see output:...)
            new CopyPlugin({
                patterns: [
                    { from: "./src/Assets", to: "Assets" },
                    { from: "./src/index.html", to: "index.html" },
                ],
            }),

            // Uncomment lines below if you want to obfuscate your bundle.js, it becomes ugly and unreadable
            // But keep in mind that this will increase the output size of bundle.js
            // It also may break your game, so please use at your own risk, it also may slow down your game!
            // @read more here: https://github.com/javascript-obfuscator/javascript-obfuscator
            // new WebpackObfuscator({
            //     // rotateStringArray: true
            // })
        ],

        // Bundle optimization
        // Please note, that uncommenting lines below is unnecessary, because it's enabled by default
        // I leave it here only for clarity
        // optimization: {
        //     minimize: false,
        //     minimizer: [
        //         new TerserPlugin()
        //     ]
        // },
    }
];
