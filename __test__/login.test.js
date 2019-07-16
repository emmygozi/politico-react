import React from 'react';
import Login from '../src/component/login';

const props = {
    user: {},
    isAuth: {},
    message: {},
    status: {},
    offices: {}
}

const store = mockStore({
    user: {
      user: {},
    },
  });

  const setup = () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Login {...props} />
      </Provider>
    );
    return wrapper;
  };

describe('<Login />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render the Login component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});