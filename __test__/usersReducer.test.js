import * as types from "../src/actions/action";
import authReducer from "../src/reducers/users";

describe("Tests for the AUTH REDUCER", () => {
  test("INITIAL STATE", () => {
    const action = { type: "no_action" };
    const initialState = {
      user: {},
      isAuth: false,
      error: null,
      message: null,
      status: 400
    };

    expect(authReducer(undefined, action)).toEqual(initialState);
  });

  test("Test for REGISTER_SUCCESS", () => {
    const message = jest.fn();

    const action = {
      payload: message,
      type: types.REGISTER_SUCCESS
    };

    const state = authReducer(undefined, action);

    expect(state).toBeDefined();
  });

  //   test("Test for LOGIN_USER_SUCCESS", () => {
  //     const mock = {
  //       isAuthenticated: false,
  //       loading: true,
  //       user: {}
  //     };

  //     const action = {
  //       isAuthenticated: false,
  //       type: types.LOGIN_USER_SUCCESS
  //     };

  //     const state = authReducer(undefined, action);

  //     expect(state).toEqual({
  //       ...mock
  //     });
  //   });
});
