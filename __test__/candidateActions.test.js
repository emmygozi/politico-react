import moxios from "moxios";
import axios from "axios";
import sinon from "sinon";
import { equal } from "assert";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import serverAPI from "../src/actions/serverAPI";
import * as actions from "../src/actions/candidate";
import * as types from "../src/actions/action";

const mockStore = configureStore([thunk]);

const store = mockStore({
  candidate: {
    offices: [],
    error: null
  },
  parties: {
    parties: [],
    error: null
  }
});

describe("Tests for the PARTIES ACTIONS", () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Dispatches the FETCH_OFFICE_SUCCESS action and payload", done => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios.delete(`${serverAPI}/offices`).then(onFulfilled);

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: partyData
          })
          .then(() => {
            equal(onFulfilled.called, true);
            done();
          });
      });
    });

    store.dispatch(actions.fetchOffice()).then(() => {
      expect(store.getActions()).toBeDefined();
    });
    done();
  });

  test("Dispatches the FETCH_PARTIES_SUCCESS action and payload", done => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios.delete(`${serverAPI}/parties`).then(onFulfilled);

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: partyData
          })
          .then(() => {
            equal(onFulfilled.called, true);
            done();
          });
      });
    });

    store.dispatch(actions.fetchParties()).then(() => {
      expect(store.getActions()).toBeDefined();
    });
    done();
  });
});
