import React, { Component } from "react";
import { connect } from "react-redux";

import { TableHeader } from "../components/tableHeader";
import { TableRow } from "../components/tableRow";

export class Search extends Component {
  render() {
    const { search_results } = this.props;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-11">
              {search_results && search_results.result ? (
                <>
                  <div className="card-bodym">
                    <h5 className="card-title">
                      Search results for :{" "}
                      <span className="text-info">
                        {search_results.search_text}
                      </span>
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-condensed table-hover table-sm">
                        <TableHeader />
                        {search_results.result.map((joke, index) => {
                          return <TableRow joke={joke} key={index} />;
                        })}
                      </table>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchResults }) => {
  return {
    search_results: searchResults.results || [],
  };
};

export default connect(mapStateToProps)(Search);
