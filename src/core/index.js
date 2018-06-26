import AppContainer from './app/AppContainer';
import PageBase from './app/PageBase';
import HttpClient from './http/HttpClient';
import LocalCache from './data/cache/LocalCache';
import SessionCache from './data/cache/SessionCache';

const Ayobase = {
  AppContainer,
  PageBase,
  LocalCache,
  SessionCache,
  HttpClient,
};

module.exports = Ayobase;
