import { BookmarkActionTypes } from './bookmark.types';

const INITIAL_STATE = {
  bookmark: {}
};

const bookmarkReducer = (state = INITIAL_STATE, action) => {
  let temp = Object.assign({}, state.bookmark);
  switch (action.type) {
    case BookmarkActionTypes.CREATE_BOOKMARK:
      temp[action.payload.id] = action.payload;
      return {
        ...state,
        bookmark: temp
      };
    case BookmarkActionTypes.DELETE_BOOKMARK:
      delete temp[action.payload];
      return {
        ...state,
        bookmark: temp
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
