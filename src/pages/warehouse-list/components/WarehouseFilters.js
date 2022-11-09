import React from "react";
import "../CSS/WarehouseFilters.css";

export default function WarehouseFilters() {
  return (
    <div className="warehouse-filters">
      <div className="warehouse-filters-headers">Filters</div>
      <div className="warehouse-filters-select">
        <div className="warehouse-filters-checkboxes">
          <label className="warehouse-filters-container">
            One
            {/* <input type="checkbox" checked="checked" /> */}
            <input type="checkbox" />
            <span className="warehouse-filters-container-checkmark"></span>
          </label>
        </div>
        <div className="warehouse-filters-checkboxes">
          <label className="warehouse-filters-container">
            Two
            <input type="checkbox" />
            <span className="warehouse-filters-container-checkmark"></span>
          </label>
        </div>
        <div className="warehouse-filters-checkboxes">
          <label className="warehouse-filters-container">
            Three
            <input type="checkbox" />
            <span className="warehouse-filters-container-checkmark"></span>
          </label>
        </div>
        <div className="warehouse-filters-checkboxes">
          <label className="warehouse-filters-container">
            Four
            <input type="checkbox" />
            <span className="warehouse-filters-container-checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
