import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import IToken from "../types/tokenType";

const getUserIdFromToken = (token: any) => {
  if (token) {
    const decoded: IToken = jwtDecode(token) as IToken;
    return decoded;
  }
  return null;
};

export default getUserIdFromToken;
