import AyobaseUI from './component'
import AppContainer from './core/app/AppContainer';
import PageBase from './core/app/PageBase';
import HttpClient from './core/http/HttpClient';

import LocalCache from './core/data/cache/LocalCache';
import SessionCache from './core/data/cache/SessionCache';

const Ayobase = {
	AyobaseUI,
  AppContainer,
  PageBase,
  LocalCache,
  SessionCache,
};

module.exports = Ayobase;
