import { ActionType, User, UserAction } from 'actions';

export const userReducer = (state: User[] = [], action: UserAction) => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return action.payload;
    case ActionType.POST_USER:
      return state.concat(action.payload);
    case ActionType.DELETE_USER:
      return state.filter((user: User) => user.id !== action.payload);
    default:
      return state;
  }
};
