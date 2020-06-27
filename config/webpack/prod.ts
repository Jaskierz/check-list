import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

import common from './common';

const config: webpack.Configuration = {
  ...common,

  devtool: 'source-map',

  mode: 'production',

  optimization: {
    ...common.optimization,

    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    occurrenceOrder: true,
  },

  plugins: [
    ...(common.plugins || []),

    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
  ],
};

export default config;
