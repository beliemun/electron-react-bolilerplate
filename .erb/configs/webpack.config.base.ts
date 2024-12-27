import webpack from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import path from 'path';
import { dependencies as externals } from '../../release/app/package.json';
import webpackPaths from './webpack.paths';
import dotenv from 'dotenv';

// Load environment variables
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
const env = dotenv.config({
  path: path.resolve(__dirname, '../../', envFile),
}).parsed;

const envKeys = env
  ? Object.keys(env).reduce(
      (prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      },
      {} as Record<string, string>,
    )
  : {};

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
      NODE_ENV: process.env.NODE_ENV || 'production', // 기본 NODE_ENV 전달
    }),
    new webpack.DefinePlugin(envKeys), // DefinePlugin으로 환경 변수 전달
  ],
};

export default configuration;
