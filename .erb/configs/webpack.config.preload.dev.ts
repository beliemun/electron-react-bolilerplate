/**
 * 개발용 Electron 프리로드 프로세스를 위한 Webpack 설정
 */

import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import baseConfig from './webpack.config.base';
import webpackPaths from './webpack.paths';
import checkNodeEnv from '../scripts/check-node-env';

// ESLint 서버가 실행 중일 때는 NODE_ENV를 설정할 수 없으므로, 프로덕션 환경에서 dev webpack 설정이 실수로 실행되지 않도록 확인
if (process.env.NODE_ENV === 'production') {
  checkNodeEnv('development');
}

const configuration: webpack.Configuration = {
  devtool: 'inline-source-map',

  mode: 'development',

  target: 'electron-preload',

  entry: path.join(webpackPaths.srcMainPath, 'preload.ts'),

  output: {
    path: webpackPaths.dllPath,
    filename: 'preload.js',
    library: {
      type: 'umd',
    },
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE === 'true' ? 'server' : 'disabled',
    }),

    /**
     * 컴파일 시간에 구성할 수 있는 전역 상수를 생성
     * 개발 빌드와 릴리스 빌드 간의 다른 동작을 허용하는 데 유용
     * NODE_ENV는 프로덕션이어야 하므로 모듈이 특정 개발 검사를 수행하지 않도록 함
     * 기본적으로 'development'를 NODE_ENV로 사용. 이는 예를 들어 npm 스크립트의 환경 변수를 변경하여 'staging'으로 재정의할 수 있음
     */
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],

  /**
   * __dirname 및 __filename의 웹팩 처리를 비활성화
   * 번들을 node.js에서 실행하면 node.js의 해당 값으로 대체
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false,
  },

  watch: true,
};

export default merge(baseConfig, configuration);
