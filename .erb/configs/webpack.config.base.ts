import webpack from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import path from 'path';
import { dependencies as externals } from '../../release/app/package.json';
import webpackPaths from './webpack.paths';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // 웹팩 빌드 시 타입 체크를 활성화하려면 이 줄을 제거
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext',
            },
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    plugins: [
      new TsconfigPathsPlugins({
        configFile: path.resolve(__dirname, '../../tsconfig.json'),
      }),
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
