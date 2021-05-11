import { NewsActionTypes } from './news.types';

export const fetchNewsStart = () => ({
  type: NewsActionTypes.FETCH_NEWS_START
});

export const fetchNewsSuccess = (data) => ({
  type: NewsActionTypes.FETCH_NEWS_SUCCESS,
  payload: data
});

export const fetchNewsFailure = (err) => ({
  type: NewsActionTypes.FETCH_NEWS_FAILURE,
  payload: err
});

export const setSelectedNews = (data) => ({
  type: NewsActionTypes.SET_SELECTED_NEWS,
  payload: data
});
