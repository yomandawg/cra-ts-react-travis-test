import { ActionType, Post, PostAction } from 'actions';

export const postReducer = (state: Post[] = [], action: PostAction) => {
  switch (action.type) {
    case ActionType.GET_POSTS:
      return action.payload;
    case ActionType.POST_POST:
      return state.concat(action.payload);
    case ActionType.DELETE_POST:
      return state.filter((post: Post) => post.id !== action.payload);
    default:
      return state;
  }
};
