
const path = require('path');

module.exports = {
    mode: "development",
    entry: './tscFiles/main.js',
    resolve: {
        extensions: [".tsx" , ".js", ".ts"],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            }
        ]
    },
};