import authReducer from '../../reducers/auth';

test('should set login', () => {
  const action = {
    type: 'LOGIN', 
    uid: 'abc123'
  };
  const state = authReducer({},action);
  expect(state.uid).toBe(action.uid);
});

test('should set logout', () => {
  const state = authReducer({ uid: 1 }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
