import React from 'react';

export const Category = ({categories, onChange}) => {
    return (
      <div>
        <select className="custom-select custom-select-sm" onChange={onChange}>
          {categories?
            categories.map((cat, index) => {
              return (
                <option value={cat} key={index}>
                  {cat}
                </option>
              );
            }):""}
        </select>
      </div>
    );
}

export default Category;
