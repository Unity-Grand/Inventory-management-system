import React from "react";
import eye from "../../assets/carbon_view.svg";
import heart from "../../assets/mdi_heart.svg";
import iPhone from "../../assets/iphone.svg";

function Orders() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-1/12  flex flex-row px-4">
        <div className="w-1/2 p-3 flex justify-start items-center">
          <h3 className="font-semibold">iPhone 14 Pro</h3>
        </div>
        <div className="w-1/2 p-3 flex justify-end">
          <button className="w-1/3 border-solid p-3 bg-blue-500 rounded-lg mr-10">
            <h1 className="font-medium text-white">Edit Product</h1>
          </button>
          <button className="w-1/3 border-solid p-3 bg-blue-500 rounded-lg">
            <h1 className="font-medium text-white">Unpublish Product</h1>
          </button>
        </div>
      </div>
      <div className="w-full h-3/12 flex flex-row p-6 justify-between">
        <div className="w-2/12 p-6 bg-white rounded-md flex justify-center items-center">
          <img src={iPhone} alt="" />
        </div>
        <div className="w-5/12 p-6 bg-white rounded-md flex flex-col justify-center">
          <div className="flex flex-row justify-between mb-3">
            <div className="w-1/2 flex flex-row justify-between">
              <h2 className="font-medium text-gray-400">Last Order</h2>
              <h2 className="font-medium">Sep 09 2023</h2>
            </div>
            <div>
              <h2 className="text-blue-400">Published</h2>
            </div>
          </div>
          <div className="flex flex-row w-full justify-center">
            <div className="w-1/3 flex flex-col justify-center items-center p-2">
              <h3>Unit Price</h3>
              <h2 className="font-semibold pt-2">$799</h2>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <h3>In Stock</h3>
              <h2 className="font-semibold pt-2">25</h2>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center p-2">
              <h3>Order Total</h3>
              <h2 className="font-semibold pt-2">$21,795</h2>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center p-2">
              <h3>Sold</h3>
              <h2 className="font-semibold pt-2">12</h2>
            </div>
          </div>
        </div>
        <div className="w-2/12 p-6 bg-white rounded-md flex flex-col justify-center items-center">
          <img src={eye} alt="" />
          <h1 className="font-extrabold text-3xl">1200</h1>
          <h3>Views</h3>
        </div>
        <div className="w-2/12 p-6 bg-white rounded-md flex flex-col justify-center items-center">
          <img src={heart} alt="" />
          <h1 className="font-extrabold text-3xl text-red-400">50</h1>
          <h3>favourite</h3>
        </div>
      </div>
      <div className="w-full h-8/12 flex flex-col p-6 ">
        <div className="h-full bg-white rounded-md divide-y divide-black-700">
          <div className="flex flex-row w-full p-3">
            <div className="w-8/12 flex items-center">
              <h2 className="font-medium">Purchase History</h2>
            </div>
            <div className="w-2/12 flex justify-center border border-gray-500 m-1 rounded-md">
              <input type="text" placeholder="Search" className="max-w-full" />
            </div>
            <div className="w-1/12 flex justify-center border border-gray-500 m-1 rounded-md">
              <button>
                <h2 className="font-medium">Filter</h2>
              </button>
            </div>
            <div className="w-1/12 flex justify-center border border-gray-500 m-1 rounded-md">
              <button>
                <h2 className="font-medium">Sort</h2>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-row p-2">
            <div className="w-1/12 flex justify-center">
              <input type="checkbox" />
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Order Date</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Order Type</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Unit Price</h2>
            </div>
            <div className="w-1/12 flex justify-center">
              <h2>Quantity</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Order Total</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Status</h2>
            </div>
          </div>
          <div className="bg-white h-full">
            <div className=" divide-y divide-black-700">
              <div className="w-full flex flex-row p-2">
                <div className="w-1/12 flex justify-center">
                  <input type="checkbox" />
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">August 12,2023 8:00am</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">Home Dilivery</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">$799</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">12</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">$10,165</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">Complited</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
