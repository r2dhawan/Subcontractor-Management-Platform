// src/components/SubcontractorList.js

import React from "react";

const SubcontractorList = ({
  subcontractors,
  setSelectedSubcontractor,
  onDelete,
}) => {
  return (
    <div className="subcontractors-list">
      <h2>Subcontractors List</h2>
      {subcontractors.length === 0 ? (
        <p>No subcontractors found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subcontractors.map((subcontractor) => (
              <tr key={subcontractor.id}>
                <td>{subcontractor.name}</td>
                <td>{subcontractor.contact}</td>
                <td>{subcontractor.payment}</td>
                <td>
                  <button
                    onClick={() => setSelectedSubcontractor(subcontractor)}
                  >
                    Edit
                  </button>
                  <button onClick={() => onDelete(subcontractor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubcontractorList;
