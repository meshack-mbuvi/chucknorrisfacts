import * as React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";
import Navbar from "../../routes/navbar"
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

const middleWare = [thunk];

let wrapper;
let store;

const initialState = {
  dispatch: jest.fn(),
};

const mockStore = configureStore(middleWare);
beforeAll(() => {
  store = mockStore(initialState);
  wrapper = mount(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );
});

describe("<Navbar/> ", () => {
  it("renders the navbar links ", () => {
    expect(wrapper.find(Link).length).to.be.equal(1);
  });

  it("should find the search bar",()=>{
    expect(wrapper.find('form').length).to.be.equal(1)
  })
});
