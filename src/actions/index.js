import axios from "axios";
import { FETCH_USER } from "./types";

//Before refactoring the function return
// return function(dispatch) {
//     axios
//         .get('http://localhost:5000/api/current_user')
//         .then(res => dispatch({ type: FETCH_USER, payload: res }));
// }

//Refactored code using latest syntax with async & await
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/current_user");
  
  dispatch({ type: FETCH_USER, payload: res.data }); //Just sending the data
};
