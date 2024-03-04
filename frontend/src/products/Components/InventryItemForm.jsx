import React from "react";
import ItemForm from "./ItemForm";
import ImageInput from "./ImageInput";
import Button from "./Button";

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
        <h1 class="text-pretty text-center font-medium m-">New Inventry Item</h1>
        <ItemForm />
      </div>
      <div class="w-full md:w-1/5 px-3 mt-5">
        {/* <div class="m-1">
          <Button />
        </div> */}
        <form class=" border-solid rounded-lg m-2 grid place-items-center bg-gray-50 shadow-xl h-full">
          <div class="m-2 h-2">
            <ImageInput />
          </div>
        </form>
      </div>
    </div>
  );
}

export default InventryItemForm;
