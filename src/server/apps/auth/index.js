/* @flow */
import { login, logout } from './views';

export const prefix = false;

export default {
  'POST /login': login,
  'POST /logout': logout,
};
