import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import {
  loadAllPostsActionCreator,
  loadOnePostActionCreator,
} from "../../redux/features/postSlice/postSlice";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { PostStructure } from "../../types/postsTypes";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;

  const loadAllPosts = useCallback(async () => {
    try {
      const response = await axios.post(`${url}/posts`);

      const apiResponse: PostStructure[] = response.data;
      dispatch(loadAllPostsActionCreator(apiResponse));
    } catch (error: unknown) {
      if ((error as AxiosError).isAxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      }
    }
  }, [dispatch, url]);

  const loadOnePost = useCallback(
    async (day: string) => {
      const response = await axios.post(`${url}/posts/post/${day}`);
      const apiResponse = await response.data;

      dispatch(loadOnePostActionCreator(apiResponse));
    },
    [dispatch, url]
  );

  return { loadAllPosts, loadOnePost };
};

export default useApi;
