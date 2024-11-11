import React from "react";
import Image from "next/image";

export default async function Getproducts() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();

  return (
    <ul className="grid grid-cols-4 gap-4 items-center mt-10">
      {products.map((product) => (
        <li
          key={product.id}
          className="border-s-2 h-[360px] p-6 mb-20 cursor-pointer"
        >
          <Image
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <h2 className="mt-2 bg-slate-100 text-yellow-700 p-2">
            {product.title.slice(0, 20)}
          </h2>
          <p className="mt-2 text-lg text-lime-50 p-2  bg-blue-700">
            {product.price}
          </p>
        </li>
      ))}
    </ul>
  );
}
