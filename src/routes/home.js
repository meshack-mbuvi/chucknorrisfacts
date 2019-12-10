import React, { Component } from "react";
import { connect } from "react-redux";
import {
  randomJokeByCategory,
  randomJoke,
  getJokeCategories,
  selectCategory,
} from "../action/jokes";
import { Joke } from "../components/joke.item";
import { Category } from "../components/category";
import Search from "./search";

/**
 * This component is responsible for displaying a random joke and also 
 * custom user searches
 */
class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(randomJoke());
    dispatch(getJokeCategories());
  }

  /**
   * handle changes to joke category selected by a user
   * Set the selected category and generate a random joke based on that category
   * @param e - An object with details of the selected category
   * 
   */
  onCategorySelect = (e) => {
    const {dispatch} = this.props;
    const {value} = e.target;

    dispatch(selectCategory(value));
    dispatch(randomJokeByCategory(value))
  }

  /**
   * Fetches a random joke based on the selected category
   */
  handleRefreshButton = (e) =>{
    e.preventDefault();
    const {dispatch, selected_category} = this.props;
    dispatch(randomJokeByCategory(selected_category));
  }

  render = () => {
    const { categories, joke } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-6 ml-4">
                Select category
                <Category
                  categories={categories}
                  onChange={this.onCategorySelect}
                />
              </div>
            </div>

            <div className="col-md-12 mt-4">
              {joke ? (
                <Joke
                  joke={joke}
                  handleRefreshButton={this.handleRefreshButton}
                />
              ) : (
                <div className="spinner-border text-info m-5" role="status">
                  <span className="sr-only mx-auto">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row border-top mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <Search />
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ jokeCategories, randomJoke, selectCategory }) => {
  const { categories } = jokeCategories;
  const { selected_category } = selectCategory;

  return {
    categories,
    joke: randomJoke.joke,
    selected_category: selected_category || (categories &&categories[0])
  };
};

export default connect(mapStateToProps)(Home);
