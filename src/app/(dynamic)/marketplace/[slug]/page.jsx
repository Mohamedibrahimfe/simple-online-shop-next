import React from "react";

export default function MarketPlaceElement({ params }) {
  console.log(params);
  return <div>{params.slug}</div>;
}
