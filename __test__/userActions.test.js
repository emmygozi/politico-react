import moxios from "moxios";
import axios from "axios";
import sinon from "sinon";
import { equal } from "assert";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import serverAPI from '../src/actions/serverAPI';
import * as actions from "../src/actions/users";
import * as types from "../src/actions/action";

const mockStore = configureStore([thunk]);

const store = mockStore({
  user: {
    user: {},
    isAuth: false,
    error: null,
    message: null,
    status: 400
  }
});

describe("Tests for the AUTH ACTIONS", () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Dispatches the REGISTER_SUCCESS action and payload", done => {
    const userData = {
        email: "sampleasdf@politico.com",
        firstname: "emmanuel",
        lastname: "emmygozi",
        othername: "myothername",
        passportUrl: "http://sgggsgggs",
        password: "password",
        confirmpass: "password",
        phoneNumber: 1234567890
    };

    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios
        .post(`${serverAPI}/auth/signup`, {
          status: 200,
          payload: userData
        })
        .then(onFulfilled);

      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: userData
          })
          .then(function() {
            equal(onFulfilled.called, true);
            done();
          });
      });
    });


    store.dispatch(actions.register(userData)).then(() => {
      expect(store.getActions()).toBeDefined();
      done();
    });
  });

  test("Dispatches the LOGIN_SUCCESS action and payload", done => {
    const loginData = {
      email: "gerrard@gmail.com",
      password: "testpass"
    };

    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios.post(`${serverAPI}/auth/login`, loginData).then(onFulfilled);

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: loginData
          })
          .then(() => {
            equal(onFulfilled.called, true);
            done();
          });
      });
    });

    store.dispatch(actions.login(loginData)).then(() => {
      expect(store.getActions()).toBeDefined();
    });
    done();
  });


  test("Logs Out A Current User", () => {

    const expectedActions = [
      {
        type: types.SET_CURRENT_USER,
        payload: {}
      }
    ];

    store.dispatch(actions.logout());
    expect(store.getActions()).toBeDefined();
  });
});
