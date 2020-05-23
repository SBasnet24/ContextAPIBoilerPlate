import { SET_LOADING } from "./type";

// dipatch the result to actions
export default (state, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
};
