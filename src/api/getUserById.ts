import axios from "axios";
import getUserIdFromToken from "../hooks/getUserIdFromToken";
import loadingSlice from "../reducers/loadingSlice";
import { loginUserAction } from "../reducers/userSlice";
import { store } from "../store";

const getUserById = async (token: string) => {
  try {
    const decoded = getUserIdFromToken(token);
    const response = await axios.get(
      `https://api.intellivest-services.com/user?userId=${decoded?.uid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user: loginUserAction = {
      id: response.data.id,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
    };
  
    return user;

  } catch (error) {
    store.dispatch(loadingSlice.actions.setLoading(false));
  }

  };

export default getUserById