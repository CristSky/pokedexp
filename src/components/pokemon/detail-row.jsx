import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const DetailRow = props => {
  const { keyName, items = [], label } = props;

  return items.length ? (
    <TableRow>
      <TableCell component="th" variant="head">
        {label}:
      </TableCell>
      <TableCell>
        {items.map(item => item[keyName].name.toUpperCase()).join(", ")}
      </TableCell>
    </TableRow>
  ) : null;
};
