import React from "react";
import propTypes from "prop-types";

const Table = props => {
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
            <td>{props.day}</td>
            <td>{props.time}</td>
            <td>{props.hairstyle}</td>
            <td>{props.stylist}</td>
            <td>{props.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  day: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  hairstyle: propTypes.string.isRequired,
  stylist: propTypes.string.isRequired,
  status: propTypes.string.isRequired
};
Table.defaultProps = {
  day: "Month Day, Year",
  time: "9:30am",
  hairstyle: "hairstyle name",
  stylist: "top stylist",
  status: "confirmed"
};

export default Table;
