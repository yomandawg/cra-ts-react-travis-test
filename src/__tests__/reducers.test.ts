import { State } from 'reducers';

it('create store', () => {
  const initialState: State = {
    users: [],
    posts: [],
    errors: [],
  };

  expect(initialState.users).toEqual([]);
});
