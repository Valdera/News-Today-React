import { createSelector } from 'reselect';

export const selectState = (state) => state.bookmark;

export const selectBookmark = createSelector(
  [selectState],
  (state) => state.bookmark
);
