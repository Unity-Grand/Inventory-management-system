import React from "react";

function Product(prop) {
  return (
    <div className="flex gap-4">
      <div class="bg-slate-500"></div>
      <div className="flex gap-3">
        <div
          className="object-scale-down h-24 w-24 bg-cover bg-center bg-no-repeat rounded-md"
          style={{
            backgroundImage: `url(${prop.path})`,
          }}
        ></div>

        <p>{prop.Deatils}</p>
      </div>
    </div>
  );
}

export default Product;
