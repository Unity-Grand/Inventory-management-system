import React from "react";
import ToggleButton from "../../components/ToggleButton";
import "./InventryItemForm.css";

function InventryItemForm() {
  return (
    <dev>
      <h1>New Inventry Item</h1>
      <dev className="inventary_Form">
        <label>Item Name</label>
        <input type="text" />
        <label>Select Product Catogory</label>
        <input type="type" />
        <label>Item Price</label>
        <input type="text" />
        <label>Item Quantity</label>
        <input type="text" />
        <label>Item Description</label>
        <input type="text" />
        <button>Submit</button>
      </dev>
      <h2>Add Discount</h2>
      <div className="button_container">
        <ToggleButton />
      </div>
    </dev>
  );
}

export default InventryItemForm;
