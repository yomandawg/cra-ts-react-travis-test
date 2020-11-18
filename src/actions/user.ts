import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, UserErrorAction } from 'actions/index';

const API_URL = 'https://jsonplaceholder.typicode.com/users/';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface GetUsersAction {
  type: ActionType.GET_USERS;
  payload: User[];
}
export interface PostUserAction {
  type: ActionType.POST_USER;
  payload: User;
}
export interface DeleteUserAction {
  type: ActionType.DELETE_USER;
  payload: number;
}
export type UserAction = GetUsersAction | PostUserAction | DeleteUserAction;

export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<User[]>(API_URL);

      dispatch<GetUsersAction>({
        type: ActionType.GET_USERS,
        payload: response.data,
      });
    } catch (e) {
      dispatch<UserErrorAction>({
        type: ActionType.USER_ERROR,
        payload: e.message,
      });
    }
  };
};

export const postUser = (userData: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<User>(API_URL, userData);

      dispatch<PostUserAction>({
        type: ActionType.POST_USER,
        payload: response.data,
      });
    } catch (e) {
      dispatch<UserErrorAction>({
        type: ActionType.USER_ERROR,
        payload: e.message,
      });
    }
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete<User>(API_URL + id);

      dispatch<DeleteUserAction>({
        type: ActionType.DELETE_USER,
        payload: id,
      });
    } catch (e) {
      dispatch<UserErrorAction>({
        type: ActionType.USER_ERROR,
        payload: e.message,
      });
    }
  };
};
