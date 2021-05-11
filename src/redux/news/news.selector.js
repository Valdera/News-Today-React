import { createSelector } from 'reselect';
import { getHeaderArticle } from '../utils/data.utils';

export const selectState = (state) => state.news;

export const selectNews = createSelector([selectState], (state) => state.news);

export const selectSelectedNews = createSelector(
  [selectState],
  (state) => state.selectedNews
);

export const selectHeaderArticle = createSelector([selectState], (state) => {
  return state.selectedNews ? getHeaderArticle(state.selectedNews) : null;
});
