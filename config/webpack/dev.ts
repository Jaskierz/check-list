import webpack from 'webpack';

import common from './common';

const config: webpack.Configuration = {
  ...common,

  devServer: {
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',

  mode: 'development',
};

export default config;
