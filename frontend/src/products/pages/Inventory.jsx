import React from 'react'

function Inventory() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-1/12  flex flex-row px-4">
        <div className="w-1/2 p-3 flex justify-start items-center">
          <h3 className="font-semibold">Inventory Summery</h3>
        </div>
        <div className="w-1/2 p-3 flex justify-end">
          <button className="border-solid p-3 bg-blue-500 rounded-lg">
            <h1 className="font-medium text-white"> + Add New Product</h1>
          </button>
        </div>
      </div>
      <div className="w-full h-3/12 flex flex-row p-6">
        <div className="w-5/12 p-6 bg-white rounded-md shadow-inner mr-3">
          <div>
            <h2 className="font-medium">Product Summery</h2>
          </div>
          <div className="flex flex-row w-full justify-center">
            <div className="w-1/3 flex flex-col justify-center items-center p-2">
              <h3>All Products</h3>
              <h2 className="font-semibold pt-2">350</h2>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <h3>In Store</h3>
              <h2 className="font-semibold pt-2">210</h2>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <div className="border border-red-500 rounded-full px-3">
                <h3 className="">Low in Stock</h3>
              </div>
              <h2 className="font-semibold pt-2">12</h2>
            </div>
          </div>
        </div>
        <div className="w-7/12 p-6 bg-white rounded-md shadow-inner ml-3">
          <div className="cursor-pointer">
            <h2 className="font-medium">Category</h2>
          </div>
          <div className="flex flex-row items-center w-full h-full mx-0">
            <div className="w-1/4 flex justify-center items-center border border-blue-500 rounded-2xl p-auto h-3/4 m-1 cursor-pointer">
              <h3>iPhone</h3>
            </div>
            <div className="w-1/4 flex justify-center items-center border border-red-500 rounded-2xl p-auto h-3/4 m-1 cursor-pointer">
              <h3>Macbook</h3>
            </div>
            <div className="w-1/4 flex justify-center items-center border border-green-500 rounded-2xl p-auto h-3/4 m-1 cursor-pointer">
              <h3>iPad</h3>
            </div>
            <div className="w-1/4 flex justify-center items-center border border-yellow-500 rounded-2xl p-auto h-3/4 m-1 cursor-pointer">
              <h3>Accessories</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-8/12 flex flex-col p-6 ">
        <div className="h-full bg-white rounded-md divide-y divide-black-700">
          <div className="flex flex-row w-full p-3">
            <div className="w-8/12 flex items-center">
              <h2 className="font-medium cursor-pointer">Inventory Summery</h2>
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
              <h2>Product Name</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Category</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Unit Price</h2>
            </div>
            <div className="w-1/12 flex justify-center">
              <h2>In Stock</h2>
            </div>
            <div className="w-1/12 flex justify-center">
              <h2>Discount</h2>
            </div>
            <div className="w-2/12 flex justify-center">
              <h2>Total Value</h2>
            </div>
            <div className="w-1/12 flex justify-center">
              <h2>In Store</h2>
            </div>
          </div>
          <div className="bg-white h-full">
            <div className=" divide-y divide-black-700">
              <div className="w-full flex flex-row p-2">
                <div className="w-1/12 flex justify-center">
                  <input type="checkbox" />
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">iPhone 14</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">iPhone</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">$799</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">12</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">$10</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">$10,165</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">Unpublish</h2>
                </div>
              </div>

              <div className="w-full flex flex-row p-2">
                <div className="w-1/12 flex justify-center">
                  <input type="checkbox" />
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">iPhone 13</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">iPhone</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">$699</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">12</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">$10</h2>
                </div>
                <div className="w-2/12 flex justify-center">
                  <h2 className="font-light">$10,165</h2>
                </div>
                <div className="w-1/12 flex justify-center">
                  <h2 className="font-light">Publish</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory