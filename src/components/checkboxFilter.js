import React from "react";
import "../styles/checkbox.css";

function checkboxFilter({ handleFilter }) {
  return (
    <div className="filterContainer">
      <div className="filterCard">

        <div className="checkBoxContainer">
          <div className="row">
            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="front"
                />
                <label
                  className="form-check-label messageSmall"         
                >
                  Front Entrance
                </label>
                  <p>12 accessiores</p>
              </div>
            </div>

            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="right"
                />
                <label
                  className="form-check-label messageSmall"                
                >
                  Right Shopping Window
                </label>
                  <p>22 accessiores</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="left"
                />
                <label
                  className="form-check-label messageSmall"
                 
                >
                  Left Shopping Window
                </label>
                  <p>20 accessiores</p>
              </div>
            </div>

            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="back"
                />
                <label
                  className="form-check-label messageSmall"
                 
                >
                  Shoe Wall
                </label>
                  <p>30 accessiores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkboxFilter;
