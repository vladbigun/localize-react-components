const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        entry: './src/entries/Signup/client.jsx',
        output: {
            filename: 'form.js',
            path: path.resolve(__dirname, 'dist-lcz-app'),
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        // Bundle all CSS into single file
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Resolve relative paths
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: 'lcz-app-form-style.css' }),
        ]
    },
    {
        entry: './src/entries/Signup/server-side.jsx',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist-lcz-app'),
        },
        mode: 'production',
        target: 'node',
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        'ignore-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },

    {
        entry: './src/entries/Signup/client.jsx',
        output: {
            filename: 'form.js',
            path: path.resolve(__dirname, 'dist-lcz-app'),
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        // Bundle all CSS into single file
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Resolve relative paths
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: 'lcz-app-form-style.css' }),
        ]
    },
    {
        entry: './src/entries/Signup/server-side.jsx',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist-lcz-app'),
        },
        mode: 'production',
        target: 'node',
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        'ignore-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },







    {
        entry: './src/entries/AboutUs/client.jsx',
        output: {
            filename: 'form.js',
            path: path.resolve(__dirname, 'dist-about-us'),
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        // Bundle all CSS into single file
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Resolve relative paths
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: 'about-us.css' }),
        ]
    },
    {
        entry: './src/entries/AboutUs/server-side.jsx',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist-about-us'),
        },
        mode: 'production',
        target: 'node',
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        'ignore-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },
];

/*
    {
        entry: './src/entries/WaitList/client.jsx',
        output: {
            filename: 'form.js',
            path: path.resolve(__dirname, 'dist-waitlist'),
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        // Bundle all CSS into single file
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Resolve relative paths
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: 'form-style.css' }),
        ]
    },
    {
        entry: './src/entries/WaitList/server-side.jsx',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist-waitlist'),
        },
        mode: 'production',
        target: 'node',
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        'ignore-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },



    {
        entry: './src/entries/Referral/client.jsx',
        output: {
            filename: 'form.js',
            path: path.resolve(__dirname, 'dist-referral'),
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        // Bundle all CSS into single file
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Resolve relative paths
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: 'form-style.css' }),
        ]
    },
    {
        entry: './src/entries/Referral/server-side.jsx',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist-referral'),
        },
        mode: 'production',
        target: 'node',
        node: {
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        'ignore-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },

 */
