import { BookmarkActionTypes } from './bookmark.types';

export const createBookmark = (data) => ({
  type: BookmarkActionTypes.CREATE_BOOKMARK,
  payload: data
});

export const deleteBookmark = (data) => ({
  type: BookmarkActionTypes.DELETE_BOOKMARK,
  payload: data
});
