import { ActionType } from './index';

export interface UserErrorAction {
  type: ActionType.USER_ERROR;
  payload: string;
}
export interface PostErrorAction {
  type: ActionType.POST_ERROR;
  payload: string;
}
export interface CustomErrorAction {
  type: ActionType.CUSTOM_ERROR;
  payload: string;
}
export interface ResetErrorAction {
  type: ActionType.RESET_ERROR;
}
export type ErrorAction =
  | UserErrorAction
  | PostErrorAction
  | CustomErrorAction
  | ResetErrorAction;
