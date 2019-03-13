import React from "react";

const TableHead = props => {
  return (
    <div className="table-head">
      <table className="table">
        <thead className="thead">
          <tr>
            <td>
              <h1>Your Appointments</h1>
            </td>
          </tr>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Hairstyle</th>
            <th>Stylist</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>March 21, 2019</td>
            <td>9:30am</td>
            <td>Wrap</td>
            <td>Marcey</td>
            <td>confirmed</td>
          </tr>
          <tr>
            <td>March 21, 2019</td>
            <td>9:30am</td>
            <td>Wrap</td>
            <td>Marcey</td>
            <td>confirmed</td>
          </tr>

          <tr>
            <td>March 21, 2019</td>
            <td>9:30am</td>
            <td>Wrap</td>
            <td>Marcey</td>
            <td>confirmed</td>
          </tr>
          <tr>
            <td>March 21, 2019</td>
            <td>9:30am</td>
            <td>Wrap</td>
            <td>Marcey</td>
            <td>confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableHead;
