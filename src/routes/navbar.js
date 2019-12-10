import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { searchJoke } from "../action/jokes";

export class Navbar extends Component {
  state = {
    search_text: "",
  };

  handleOnInputChange = e => {
    const { value } = e.target;
    this.setState({
      search_text: value,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { search_text } = this.state;
    if (!search_text) {
      alert("Please enter text on the search bar");
      return;
    }
    
    const { dispatch } = this.props;
    dispatch(searchJoke(search_text));
  };

  render() {
    return (
      <nav className="navbar navbar-default-lg bg-light">
        <a className="navbar-brand ml-4" href="/"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavBar"
          aria-controls="mainNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="nav navbar-nav">
          <li className="nav-item nav-link">
            <Link to="/">HOME</Link>
          </li>
        </ul>

        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={e => this.handleSearch(e)}
          action="/search"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search jokes"
            aria-label="Search"
            onChange={e => this.handleOnInputChange(e)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default connect()(Navbar);
