import { NewsActionTypes } from './news.types';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchNewsFailure,
  fetchNewsSuccess,
  setSelectedNews
} from './news.actions';
import { getNews } from '../api/linetoday';
import { mapData } from '../utils/data.utils';

//* WORKERS

function* workerFetchNews() {
  try {
    const data = yield getNews();
    const mappedData = mapData(data);
    yield put(fetchNewsSuccess(mappedData));
    yield put(setSelectedNews(mappedData[Object.keys(mappedData)[0]]));
  } catch (err) {
    yield put(fetchNewsFailure(err));
  }
}

//* WATCHERS
function* watchFetchNewsStart() {
  yield takeLatest(NewsActionTypes.FETCH_NEWS_START, workerFetchNews);
}

export function* newsSagas() {
  yield all([call(watchFetchNewsStart)]);
}
