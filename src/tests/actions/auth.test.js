import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('should do login', () => {    
  const uid = 1;
  const action = login(uid);
  expect(action).toEqual({
      type: "LOGIN",        
      uid
  });
});

test('should do logout', () => {    
  const action = logout();
  expect(action).toEqual({
      type: "LOGOUT"
  });
});