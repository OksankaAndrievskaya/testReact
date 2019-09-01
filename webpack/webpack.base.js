const webpack = require("webpack");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const { root, getConfig } = require("./webpack.js");

const isProd = process.env.NODE_ENV === "production";
const enviroments = getConfig();

const defined = {
  ...enviroments,
  "process.env.NODE_ENV": enviroments.node
};

Object.keys(defined).map(key => (defined[key] = JSON.stringify(defined[key])));

const config = {
  watch: true
};

console.log(defined);

config.stats = "none";

config.entry = [root("src/vendor.ts"), root("src/app.tsx")];

config.output = {
  path: root("dist"),
  filename: "js/[name].js",
  publicPath: "/",
  // source maps for debugger
  devtoolModuleFilenameTemplate: "[absolute-resource-path]",
  devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
};

config.resolve = {
  plugins: [new TsconfigPathsPlugin({})],
  alias: {
    img: root("src/public/img"),
    components: root("src/components"),
    pages: root("src/pages"),
    styles: root("src/styles")
  },
  modules: ["node_modules"],
  extensions: [
    ".ts",
    ".css",
    ".scss",
    ".tsx",
    ".js",
    ".json",
    ".png",
    ".svg",
    ".jpg",
    ".*"
  ]
};

config.module = {};

config.module.rules = [
  {
    test: /\.(ts|tsx)$/,
    use: ["awesome-typescript-loader"],
    include: root("src"),
    exclude: /node_modules/
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]"
        }
      },
      {
        loader: "image-webpack-loader",
        options: {
          pngquant: {
            quality: "90",
            speed: 4
          },
          mozjpeg: {
            progressive: true,
            quality: 70
          },
          svgo: {}
        }
      }
    ]
  },
  {
    test: /\.(woff|woff2|otf|eot|ico|ttf)(\?[a-z0-9=.]+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      }
    ]
  },
  {
    test: /(\.css|\.scss)/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          minimize: isProd
        }
      },
      {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[local]___[hash:base64:5]"
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  },
  {
    test: /(\.css|\.scss)/,
    include: /node_modules/,
    exclude: /src/,
    use: [
      'style-loader',
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          minimize: isProd
        }
      },
      'css-loader',
      "postcss-loader",
      "sass-loader"
    ]
  }
];

config.plugins = [
  new HtmlWebpackPlugin({
    template: root("src/public/index.html"),
    filename: "index.html",
    inject: true,
    minify: isProd && {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new webpack.DefinePlugin(defined),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new FriendlyErrorsWebpackPlugin(),
  new SimpleProgressPlugin({
    progressOptions: {
      clear: true
    }
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
];

module.exports = config;
