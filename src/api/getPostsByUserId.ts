import axios from "axios";
import authSlice from "../reducers/authSlice";
import loadingSlice from "../reducers/loadingSlice";
import userSlice from "../reducers/userSlice";
import { store } from "../store";

export interface IPost {
  id: string;
  postContent: string;
  postTitle: string;
  posterId: string;
  timeOfPost: string;
}


export interface IUserPosts {
  posts: Array<IPost>;
}

const getPostsByUserId = async (userId: string | null, token: string) => {
  try {
    store.dispatch(loadingSlice.actions.setLoading(true));

    const response = await axios.get(
      `https://api.intellivest-services.com/post/user?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    store.dispatch(loadingSlice.actions.setLoading(false));
    const posts = response.data as Array<IPost>;
    return posts;
  } catch (error) {
    const err: Error = error as Error;
    store.dispatch(loadingSlice.actions.setLoading(false));
    console.log(error);
    alert("fetching posts failed");
    if (err.message === "ere") {
      store.dispatch(userSlice.actions.logoutUser());
      store.dispatch(authSlice.actions.deleteToken());
    }
  }
};

export default getPostsByUserId;
