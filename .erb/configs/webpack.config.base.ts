/**
 * 다른 특정 설정에 사용되는 기본 Webpack 설정
 */

import webpack from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';
import path from 'path';

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

  /**
   * 모듈을 해석할 때 사용해야 하는 확장자의 배열을 결정
   */
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/renderer/assets'),
      '@common': path.resolve(__dirname, 'src/renderer/common'),
      '@components': path.resolve(__dirname, 'src/renderer/components'),
      '@hooks': path.resolve(__dirname, 'src/renderer/hooks'),
      '@libs': path.resolve(__dirname, 'src/renderer/libs'),
      '@pages': path.resolve(__dirname, 'src/renderer/pages'),
      '@routes': path.resolve(__dirname, 'src/renderer/routes'),
      '@stores': path.resolve(__dirname, 'src/renderer/stores'),
      '@styles': path.resolve(__dirname, 'src/renderer/styles'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    plugins: [new TsconfigPathsPlugins()],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
