const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = [
    {
        // Mode
        // mode: 'production',
        mode: 'development',

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
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: `bundle.js`
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "./src/Assets", to: "Assets" },
                    { from: "./src/index.html", to: "index.html" },
                ],
            }),
        ],
    }
];
