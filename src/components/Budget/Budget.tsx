import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [editingMode, toggleEditingMode] = useState(false);
  const [tempBudget, updateTempBudget] = useState(budget.toString());

  const handleToggle = () => {
    if (editingMode) {
      const parsedBudget = parseFloat(tempBudget);
      if (parsedBudget > 0) setBudget(parsedBudget);
    }
    toggleEditingMode(!editingMode);
  };

  const renderInputOrDisplay = () =>
    editingMode ? (
      <input
        type="number"
        className="form-control"
        value={tempBudget}
        onChange={(e) => updateTempBudget(e.target.value)}
        data-testid="budget-input"
      />
    ) : (
      <span data-testid="budget-display">Budget: ${budget}</span>
    );

  const buttonLabel = editingMode ? "Save" : "Edit";
  const buttonStyle = editingMode ? "success" : "primary";

  return (
    <div className="alert alert-secondary p-3 d-flex justify-content-between align-items-center">
      {renderInputOrDisplay()}
      <button
        onClick={handleToggle}
        className={`btn btn-${buttonStyle} ms-2`}
        aria-label={`${buttonLabel} budget`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Budget;
