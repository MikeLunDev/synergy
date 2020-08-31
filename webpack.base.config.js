const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {resolve} = path;

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors when the importer throws
    try {
        return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
    }
    catch (e) {
        return "";
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = path.extname(url) === ".scss" ? url : `${url}.scss`;
    const relativeUrl = path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`);

    return tryResolve_(normalizedUrl, sourceFilename) || tryResolve_(relativeUrl, sourceFilename);
}

function importer(url, prev) {
    if (url.startsWith("@material")) {
        const resolved = tryResolveScss(url, prev);
        return {file: resolved || url};
    }
    return {file: url};
}


module.exports = env => {

    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    options: {
                        compact: true,
                        presets: ["@babel/react"],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [
                                    require("autoprefixer")()
                                ]
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    includePaths: [path.styles],
                                    importer
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "images/[hash].[ext]"
                            }
                        }
                    ]

                },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                }

            ]

        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: "production",
                DEBUG: (env || {}).DEBUG || false
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        externals: {
            // Use external version of React
            "react": "React",
            "react-dom": "ReactDOM",
            "react-redux": "ReactRedux"
        },
        stats: {
            children: false
        },
        resolve: {
            alias: {
                src: path.resolve(__dirname, './src/')
            }
        }
    }
};
