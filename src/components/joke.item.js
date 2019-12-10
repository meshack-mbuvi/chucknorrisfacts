import React from "react";

export const Joke = ({joke, handleRefreshButton}) => {
    const {categories,icon_url,value} = joke
  return (
    <div className="row">
      <i className="fa fa-refresh text-info btn col-md-12" onClick={(e)=>{handleRefreshButton(e)}} aria-hidden="true"> Click for a random joke</i>
      <img className="col-md-3" src={icon_url} alt="" />
      <div className="col-md-9">
        <div className="col-md-12">
          <p className="card-text">{value}</p>
        </div>

        {categories.length ? (
          <div className="col-md-12 mt-2">
            Tags:
            {categories.map((cat, index) => {
              return (
                <h6
                  className="card-subtitle m-2 ml-auto text-muted"
                  key={index}
                >
                  {cat}
                </h6>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

