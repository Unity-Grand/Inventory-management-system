import React from "react";
import "./InventryItemForm.css";
import Form from "./ItemForm";
import ImageInput from "./ImageInput";

function InventryItemForm() {
  return (
    <div class="flex flex-row justify-between">
      {/* <h1>New Inventry Item</h1>
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
      </dev> */}
      {/* <h2>Add Discount</h2>
      <div className="button_container">
        <ToggleButton />
      </div> */}

      <div class="w-full md:w-4/5 px-3">
        <h1 class="text-pretty text-center font-medium">New Inventry Item</h1>
        <Form />
      </div>
      <form class="w-full md:w-1/5 px-3 border-solid rounded-lg m-2 grid place-items-center bg-gray-50">
        <ImageInput />
      </form>
    </div>
  );
}

export default InventryItemForm;
