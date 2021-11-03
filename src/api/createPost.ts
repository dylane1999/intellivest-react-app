// {
//     "postTitle": "fdfdfdf",
//     "postContent": "fdsfdfsfds"
// }import axios from "axios";

import axios from "axios";
import getUserIdFromToken from "../hooks/getUserIdFromToken";
import loadingSlice from "../reducers/loadingSlice";
import { loginUserAction } from "../reducers/userSlice";
import { store } from "../store";

const createPost = async (
  token: string,
  postTitle: string,
  postContent: string
) => {
  try {
    store.dispatch(loadingSlice.actions.setLoading(true));
    const response = await axios.put(
      `https://api.intellivest-services.com/post`,
      {
        postTitle: postTitle,
        postContent: postContent,
      }, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(response);
    store.dispatch(loadingSlice.actions.setLoading(false));

    return response.data;
  } catch (error) {
    store.dispatch(loadingSlice.actions.setLoading(false));
    alert("failed to create post");
  }
};

export default createPost;
