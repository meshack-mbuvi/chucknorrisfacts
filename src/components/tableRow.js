import React from "react";

export const TableRow = props => {
  const {
    value
  } = props.joke;

  return (
    <tbody>
      <tr>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};
