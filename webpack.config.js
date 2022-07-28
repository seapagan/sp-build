const path = require("path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");


module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";

  const config = {
    mode: argv.mode ? argv.mode : "development",
    entry: {
      bundle: "./src/index.js"
    },
    devtool: "inline-source-map",
    output: {
      path: __dirname + "/dist",
      filename: "[contenthash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new ESLintPlugin(),
      new StylelintPlugin({
        configFile: ".stylelintrc.json"
      })
    ].concat(
      devMode
        ? []
        : [
          new MiniCssExtractPlugin({
            filename: "[contenthash].css",
          }),
        ]
    ),
    devServer: {
      client: {
        logging: "warn",
      },
      static: {
        directory: path.join(__dirname, "dist"),
      },
      watchFiles: ["./src/*"],
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    optimization: {
      minimizer: ["...", new CssMinimizerPlugin()],
    },
  };

  console.log("Mode : ", config.mode);

  return config;
};
