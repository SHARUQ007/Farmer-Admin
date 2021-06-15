import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";
import Dropdown from './Dropdown';

const states = {
  approved: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell style={{fontWeight:'600'}}
             key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody >
        {data.map(({ id, name, mobile, address, aadhaar, date, land, status }) => (
          <TableRow key={id} >
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{mobile}</TableCell>
            <TableCell>{address}</TableCell>
            <TableCell>{aadhaar}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{land}</TableCell>
            <TableCell>
            <Dropdown statusprop={status}/>  
            </TableCell>
         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}





