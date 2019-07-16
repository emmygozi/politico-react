import React from "react";
import Signup from "../src/component/signup";

const props = {
  user: {},
  isAuth: {},
  message: {},
  status: {},
  offices: {}
};

const store = mockStore({
  user: {
    user: {}
  }
});

const setup = () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Signup {...props} />
    </Provider>
  );
  return wrapper;
};

describe("<Signup />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("should render the Login component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
