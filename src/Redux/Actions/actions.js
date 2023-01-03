import axios from "axios";
export const GET_INFO = "GET_INFO";

export const getinfo = () => {
  return async function (dispatch) {
    try {
      const todita = await axios.get("https://randomuser.me/api");
      //   console.log(todita.data);
      return dispatch({
        type: GET_INFO,
        payload: todita.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
