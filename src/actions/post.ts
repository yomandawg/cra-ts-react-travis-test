import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, PostErrorAction } from './index';

const API_URL = 'https://jsonplaceholder.typicode.com/post3s/';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface GetPostsAction {
  type: ActionType.GET_POSTS;
  payload: Post[];
}
export interface PostPostAction {
  type: ActionType.POST_POST;
  payload: Post;
}
export interface DeletePostAction {
  type: ActionType.DELETE_POST;
  payload: number;
}
export type PostAction = GetPostsAction | PostPostAction | DeletePostAction;

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<Post[]>(API_URL);

      dispatch<GetPostsAction>({
        type: ActionType.GET_POSTS,
        payload: response.data,
      });
    } catch (e) {
      dispatch<PostErrorAction>({
        type: ActionType.POST_ERROR,
        payload: e.message,
      });
    }
  };
};

export const postPost = (postData: Post) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<Post>(API_URL, postData);

      dispatch<PostPostAction>({
        type: ActionType.POST_POST,
        payload: response.data,
      });
    } catch (e) {
      dispatch<PostErrorAction>({
        type: ActionType.POST_ERROR,
        payload: e.message,
      });
    }
  };
};

export const deletePost = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete<Post>(API_URL + id);

      dispatch<DeletePostAction>({
        type: ActionType.DELETE_POST,
        payload: id,
      });
    } catch (e) {
      dispatch<PostErrorAction>({
        type: ActionType.POST_ERROR,
        payload: e.message,
      });
    }
  };
};
