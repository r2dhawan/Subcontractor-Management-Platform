// src/components/AddSubcontractor.js

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddSubcontractor = ({
  addSubcontractor,
  selectedSubcontractor,
  setSelectedSubcontractor,
}) => {
  const initialFormData = {
    name: "",
    contact: "",
    payment: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Populate form fields when selectedSubcontractor changes (for edit mode)
    if (selectedSubcontractor) {
      setFormData({
        name: selectedSubcontractor.name || "",
        contact: selectedSubcontractor.contact || "",
        payment: selectedSubcontractor.payment || "",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [selectedSubcontractor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubcontractor = {
      id: selectedSubcontractor ? selectedSubcontractor.id : uuidv4(), // Use existing ID for edit mode, or generate a new ID for new subcontractor
      ...formData,
    };
    addSubcontractor(newSubcontractor);
    setSelectedSubcontractor(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Payment:</label>
        <input
          type="text"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        {selectedSubcontractor ? "Update" : "Add"} Subcontractor
      </button>
    </form>
  );
};

export default AddSubcontractor;
