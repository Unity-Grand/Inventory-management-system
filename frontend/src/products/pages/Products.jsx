import React from "react";
import Category from "../Components/Category_view/category";

function Products() {
  const products = ["Iphone", "Samsung", "Huawei"];

  return (
    <div className="flex border-x-cyan-950">
      {products.map((product) => {
        return <Category name={product} />;
      })}
    </div>
  );
}

export default Products;
