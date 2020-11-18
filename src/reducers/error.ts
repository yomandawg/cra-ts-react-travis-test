import { ActionType, ErrorAction } from 'actions';

export const errorReducer = (state: string[] = [], action: ErrorAction) => {
  switch (action.type) {
    case ActionType.USER_ERROR:
      return state.concat('USER ERROR: ' + action.payload);
    case ActionType.POST_ERROR:
      return state.concat('POST ERROR: ' + action.payload);
    case ActionType.CUSTOM_ERROR:
      return state.concat('CUSTOM ERROR: ' + action.payload);
    case ActionType.RESET_ERROR:
      return state.slice(0, -1);
    default:
      return state;
  }
};
