"use client";
import Getproducts from "@/app/components/Getproducts";
import React, { useEffect, useState } from "react";
// import Getproducts from "@/app/components/Getproducts";
export default function MarketPlace({ params }) {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    setProducts(data);
  }
  async function getSpecificProduct(id) {
    fetch("https://dummyjson.com/products/search?q=" + id).then((res) =>
      res.json()
    );
    return res;
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="p-4">
      <Getproducts />
    </div>
  );
}
