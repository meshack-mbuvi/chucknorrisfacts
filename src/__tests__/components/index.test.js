import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Index from "../../routes";

Enzyme.configure({ adapter: new Adapter() });

const middleWare = [thunk];

let wrapper;
let store;

const initialState = {
  dispatch: jest.fn(),
  jokeCategories: [],
  selectCategory: [],
  randomJoke: [],
  searchResults:[]
};

const mockStore = configureStore(middleWare);

describe("ChuckNorris tests",() => {
  beforeAll(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Index />
        </Router>
      </Provider>
    ).debug();
  });

  describe("<Index/>", () => {
    it("renders index component correctly", () => {
      // expect(wrapper.find(".index")).to.be.length(1);
      console.log(wrapper);
    });
  });
});
