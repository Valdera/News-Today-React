import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import bookmarkReducer from './bookmark/bookmark.reducer';
import newsReducer from './news/news.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookmark']
};

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
  news: newsReducer
});

export default persistReducer(persistConfig, rootReducer);
