// src/App.js

import React, { useState } from "react";
import SubcontractorList from "./components/SubcontractorList";
import AddSubcontractor from "./components/AddSubcontractor";
import Dashboard from "./components/Dashboard";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "./styles.css";

function App() {
  const [subcontractors, setSubcontractors] = useState([]);
  const [selectedSubcontractor, setSelectedSubcontractor] = useState(null);
  const [showDashboard, setShowDashboard] = useState(true);

  const addSubcontractor = (newSubcontractor) => {
    newSubcontractor.id = uuidv4(); // Generate a unique ID for the new subcontractor
    setSubcontractors([...subcontractors, newSubcontractor]);
    setSelectedSubcontractor(null);
  };

  const deleteSubcontractor = (id) => {
    const updatedSubcontractors = subcontractors.filter(
      (subcontractor) => subcontractor.id !== id
    );
    setSubcontractors(updatedSubcontractors);
  };

  const switchToDashboard = () => {
    setShowDashboard(true);
    setSelectedSubcontractor(null);
  };

  const switchToSubcontractorsList = () => {
    setShowDashboard(false);
    setSelectedSubcontractor(null);
  };

  return (
    <div className="app-container">
      <h1>Subcontractor Management Platform</h1>

      <div className="button-container">
        <button onClick={switchToDashboard}>Website Dashboard</button>
        {showDashboard ? (
          <button onClick={switchToSubcontractorsList}>
            Subcontractors List
          </button>
        ) : (
          <>
            {subcontractors.length === 0 ? (
              <div className="add-new-container">
                <p>No subcontractors found. Add a new subcontractor:</p>
                <AddSubcontractor
                  addSubcontractor={addSubcontractor}
                  setSelectedSubcontractor={setSelectedSubcontractor}
                />
              </div>
            ) : (
              <button onClick={() => setSelectedSubcontractor({})}>
                Add New Subcontractor
              </button>
            )}
          </>
        )}
      </div>

      {showDashboard ? (
        <Dashboard />
      ) : (
        <>
          {selectedSubcontractor ? (
            <AddSubcontractor
              addSubcontractor={addSubcontractor}
              selectedSubcontractor={selectedSubcontractor}
              setSelectedSubcontractor={setSelectedSubcontractor}
            />
          ) : (
            <SubcontractorList
              subcontractors={subcontractors}
              setSelectedSubcontractor={setSelectedSubcontractor}
              onDelete={deleteSubcontractor}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
