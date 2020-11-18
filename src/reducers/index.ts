import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from 'reducers/user';
import { postReducer } from 'reducers/post';
import { errorReducer } from 'reducers/error';
import { User, Post } from 'actions';

export interface State {
  users: User[];
  posts: Post[];
  errors: string[];
}

const reducers = combineReducers<State>({
  users: userReducer,
  posts: postReducer,
  errors: errorReducer,
});

const initialState: State = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state') as string)
  : { users: [], posts: [], errors: [] };

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, initialState, composeEnhancers);
