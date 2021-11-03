import axios from "axios";
import getUserIdFromToken from "../hooks/getUserIdFromToken";
import { loginUserAction } from "../reducers/userSlice";

const getUserById = async (token: string) => {
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
  };

export default getUserById