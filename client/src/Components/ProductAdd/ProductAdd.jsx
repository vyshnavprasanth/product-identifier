import React from "react";
import "./ProductAdd.css";

function AddProduct() {
  return (
    <div className="addProduct">
      <div className="addProduct-title">
        <h3>Add your product</h3>
      </div>

      <div className="addProduct-form">
        <div className="addProduct-input-group">
          <input
            type="text"
            className="addProduct-name"
            placeholder="Name of the company"
          />
        </div>
        <div className="addProduct-input-group">
          <input
            className="addProduct-category"
            type="text"
            placeholder="Category"
            required
          />
        </div>

        <div className="addProduct-input-group">
          <input
            className="addProduct-logo-url"
            type="text"
            placeholder="Add logo url"
            required
          />
        </div>

        <div className="addProduct-input-group">
          <input
            className="addProduct-product-link"
            type="text"
            placeholder="Link of product"
            required
          />
        </div>
        <div className="addProduct-input-group">
          <input
            className="addProduct-description"
            type="text"
            placeholder="Add description"
            required
          />
        </div>
        <button
          className= "addProduct-button"
          
        >
          + Add
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
