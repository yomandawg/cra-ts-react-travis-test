export * from 'actions/user';
export * from 'actions/error';
export * from 'actions/post';

export enum ActionType {
  /**user actions */
  GET_USERS,
  POST_USER,
  DELETE_USER,
  /**post actions */
  GET_POSTS,
  POST_POST,
  DELETE_POST,
  /**error actions */
  USER_ERROR,
  POST_ERROR,
  CUSTOM_ERROR,
  RESET_ERROR,
}
