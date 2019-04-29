import authReducer from "../../reducers/auth";
import expenses from "../fixtures/expenses";


test("should set uid for login", () => {
    const action = {
      type: "LOGIN",
      uid:'123abc'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
  });

  
test("should clear uid for logout", () => {
    const action = {
      type: "LOGOUT",
    };
    const state = authReducer({uid:'444abc'}, action);
    expect(state).toEqual({});
  });
  
  