import React from "react";
import "./CSS/Warehouse.css";
import "./CSS/Warehousebutton.css";
import WarehouseImage from "../../assets/Warehouse/warehousepic1.JPG";
import WarehouseFilters from "./components/WarehouseFilters";
import { useNavigate } from "react-router-dom";
export default function Warehouse() {
  let dataarray = [0, 1, 2, 3, 4, 5, 6, 7];
  const navigate = useNavigate();
  function NavigateTo(urlData) {
    return navigate(urlData);
  }
  return (
    <div>
      <div className="warehouse-header">Browse Warehouse</div>
      <div className="warehouse-divider"></div>
      <section className="warehouse-main">
        <WarehouseFilters />
        <div className="warehouse-body">
          <div className="warehouse-grid-container">
            {dataarray.map((_, index) => {
              return (
                <div
                  className="warehouse-grid-items"
                  onClick={() => NavigateTo("/warehouseinfo")}
                  key={index}
                >
                  <img
                    className="warehouse-grid-items-image"
                    src={WarehouseImage}
                    alt="warehouse"
                  />
                  <div className="warehouse-grid-items-overlay">
                    <p>Text 1</p>
                    <p>Description</p>
                  </div>
                  <div className="warehouse-grid-items-info">
                    <p>transisted</p>
                    <p>transisted dasdadshsadhksad ahsdsakjjajhsjh sadasdska</p>
                    <div className="warehouse-grid-items-info-buttons">
                      <div className="warehouse-grid-items-info-buttons-1">
                        View
                      </div>
                      <div className="warehouse-grid-items-info-buttons-2">
                        Book
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
