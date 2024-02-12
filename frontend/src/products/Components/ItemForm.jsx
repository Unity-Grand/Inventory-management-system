import React from "react";
import ToggleButton from "../../components/ToggleButton";
import InputBox from "../../components/InputBox";
import Button from "./Button";

function ItemForm() {
  return (
    <form class="border-solid rounded-lg m-2 grid place-items-center bg-gray-50 border-inherit">
      <div class="flex flex-row justify-between border-solid rounded-lg">
        <div class="w-full md:w-1/2 px-3 mt-2 mr-4">
          <InputBox
            id="grid-item-name"
            type="text"
            placeholder="Item Name"
            massage=""
          />
          <InputBox
            id="grid-select-product-category"
            type="text"
            placeholder="Select Product Category"
            massage=""
          />
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-selling-price"
                type="text"
                placeholder="Selling Price"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-cost-price"
                type="text"
                placeholder="Cost Price"
              />
            </div>
          </div>
          <InputBox
            id="grid-quantity-in-stock"
            type="text"
            placeholder="Quantity in Stock"
            massage=""
          />
          <InputBox
            id="grid-order-type"
            type="text"
            placeholder="Order Type"
            massage=""
          />

          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-1/2 px-10 mb-6 md:mb-0">
              <h4 class="divide-x-2">Discount</h4>
            </div>
            <div class="w-full md:w-1/2 px-12 flex space-x-2 justify-self-end">
              <h4>Add Discount</h4>
              <ToggleButton />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-type"
                type="text"
                placeholder="Type"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-value"
                type="text"
                placeholder="Value"
              />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mt-2">
          <InputBox
            id="grid-item-description"
            type="text"
            placeholder="Item Description"
            massage=""
          />
          <InputBox
            id="grid-product"
            type="text"
            placeholder="Product Detail Description"
            massage=""
          />

          <h4 class="flex flex-wrap px-3 -mx-3 mb-3 ml-1">Return Policy</h4>
          <h4 class="flex flex-wrap px-3 mb-5">Date Added</h4>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-type"
                type="date"
                placeholder=""
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-value"
                type="time"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="m-5">
        <Button />
      </div>
    </form>
  );
}

export default ItemForm;
