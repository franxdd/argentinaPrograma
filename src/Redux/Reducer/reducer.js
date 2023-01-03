import { GET_INFO } from "../Actions/actions";

const initialState = {
  info: [],
};

const rootRouter = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return { ...state, info: action.payload };

    default:
      return state;
  }
};
export default rootRouter;
