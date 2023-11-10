import { FETCH_TAGS_SUCCESS } from '../actions/quoteActions';

const initialState = {
  tags: [],
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
