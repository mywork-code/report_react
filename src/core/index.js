import AppContainer from './app/AppContainer';
import PageBase from './app/PageBase';
import HttpClient from './http/HttpClient';
import Apis from './http/Apis'
import ApassHttp from './http/ApassHttp'
import LocalCache from './data/cache/LocalCache';
import SessionCache from './data/cache/SessionCache';

const AyoBase = {
  AppContainer,
  PageBase,
  LocalCache,
  SessionCache,
  HttpClient,
  Apis,
  ApassHttp,
};

module.exports = AyoBase;
