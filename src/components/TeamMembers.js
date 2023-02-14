import React, { useState } from "react";
import {Navbar,NavbarBrand} from 'reactstrap'
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, email, profile } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type=""
            value={email}
            onChange={(event) => onValUpdate(index, event)}
            name="email"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={profile}
            onChange={(event) => onValUpdate(index, event)}
            name="profile"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Remove Member
          </button>
        </td>
      </tr>
    
    );
  });
}
export const TeamMembers = () => {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      name: "",
      email: "",
      profile: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
       <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
      >
        <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
          Incedo Hack-a-thon
        </NavbarBrand>
      </Navbar>
      <div style={{"margin-top":"3%"}} className="container-fluid mx-auto text-center font-monospace">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>
              <button className="btn btn-primary" onClick={addRowTable}>
                Add Member
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
      </div>
      <div className="fixed-bottom">
        <button class="btn btn-warning" >Back</button>
        <button class="btn btn-success" >Submit</button>
      </div>
    </>
  );
}
