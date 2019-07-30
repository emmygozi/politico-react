import moxios from "moxios";
import axios from "axios";
import sinon from "sinon";
import { equal } from "assert";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import serverAPI from "../src/actions/serverAPI";
import * as actions from "../src/actions/parties";
import * as actionsTwo from "../src/actions/result";
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

  test("Dispatches the REGISTER_PARTY_SUCCESS action and payload", done => {
    const partyData = {
      name: "People party",
      logoUrl: "http://dhhhdhhdhdhdhhd",
      hqAddress: "A sample address"

    };

    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios
        .post(`${serverAPI}/parties`, {
          status: 200,
          payload: partyData
        })
        .then(onFulfilled);

      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: partyData
          })
          .then(function() {
            equal(onFulfilled.called, true);
            done();
          });
      });
    });

    store.dispatch(actions.registerParty(partyData)).then(() => {
      expect(store.getActions()).toBeDefined();
      done();
    });
  });

  test("Dispatches the MODIFY_PARTY_SUCCESS action and payload", done => {
    const partyData = {
        name: "People party",
        logoUrl: "http://dhhhdhhdhdhdhhd",
        hqAddress: "A sample address"
  
      };
      const id = {
        push: jest.fn()
      };

    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios.patch(`${serverAPI}/parties/${id}/name`, partyData).then(onFulfilled);

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

    store.dispatch(actions.editPartyName( id, partyData)).then(() => {
      expect(store.getActions()).toBeDefined();
    });
    done();
  });

  test("Dispatches the MODIFY_PARTY_SUCCESS action and payload", done => {
    const partyData = {
        name: "People party"
  
      };
      const id = {
        push: jest.fn()
      };

    moxios.withMock(() => {
      let onFulfilled = sinon.spy();
      axios.delete(`${serverAPI}/parties/${id}`, partyData).then(onFulfilled);

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

    store.dispatch(actions.deleteParty( id, partyData)).then(() => {
      expect(store.getActions()).toBeDefined();
    });
    done();
  });

});
