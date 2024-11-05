import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Table.css";

const FormDetails = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="table-container">
      <h2>Form Details</h2>

      {loading ? (
        <div className="loader">Loading...</div> // Loading spinner
      ) : data ? (
        <table className="details-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>First Name</strong></td>
              <td>{data.firstName || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Last Name</strong></td>
              <td>{data.lastName || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Age</strong></td>
              <td>{data.age || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Gender</strong></td>
              <td>{data.gender || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Favorite Flavor</strong></td>
              <td>{data.ReactSelect?.label || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Website</strong></td>
              <td>{data.website || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default FormDetails;
