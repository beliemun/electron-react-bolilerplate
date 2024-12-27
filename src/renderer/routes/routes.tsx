import { HomePage } from '@pages';
import { PATH } from './constants';
import { Route } from './types';

export const publicRoutes: Route[] = [{ path: PATH.HOME, element: <HomePage /> }];

export const privateRoutes: Route[] = [];
