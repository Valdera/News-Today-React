import { NewsActionTypes } from './news.types';

const INITIAL_STATE = {
  news: null,
  selectedNews: null,
  isFetching: false,
  error: null
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS_START:
      return {
        ...state,
        isFetching: true
      };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isFetching: false
      };
    case NewsActionTypes.FETCH_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case NewsActionTypes.SET_SELECTED_NEWS:
      return {
        ...state,
        selectedNews: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
