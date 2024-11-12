import React from "react";

async function getProducts(id) {
  return fetch("https://dummyjson.com/products/" + id).then((res) =>
    res.json()
  );
}
export default async function productDetails({ params }) {
  const product = await getProducts(params.slug);

  return (
    <div class="bg-gray-100 p-16">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product.images[0] || product.thumbnail || product.image}
              alt="Product"
              className="w-full h-auto max-h-[550px] rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div class="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src={product.images[1]}
                alt="Thumbnail 1"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src={product.images[2]}
                alt="Thumbnail 2"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src={product.images[3] || product.thumbnail}
                alt="Thumbnail 3"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src={product.images[4] || product.thumbnail}
                alt="Thumbnail 4"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
            </div>
          </div>

          <div class="w-full md:w-1/2 px-4">
            <h2 class="text-3xl font-bold mb-2">{product.title}</h2>
            <p class="text-gray-600 mb-4">{product.brand}</p>
            <div class="mb-4">
              <span class="text-2xl font-bold mr-2">{product.price}</span>
            </div>
            <div class="flex items-center mb-4">
              Rating:<span class="ml-2 text-gray-600">{product.rating}</span>
            </div>
            <p class="text-gray-700 mb-6">{product.description}</p>

            <div class="mb-6">
              <label
                for="quantity"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value="1"
                class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div class="flex space-x-4 mb-6">
              <button class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Reviews:</h3>
              <ul class="style-list-none   text-gray-700 ">
                {product.reviews.map((review) => (
                  <li
                    className="mb-4 flex justify-between relative"
                    key={review.id}
                  >
                    <p>{review.comment}</p>
                    <p className="text-gray-400 text-sm absolute -bottom-4">
                      {review.date.slice(0, 10)}
                    </p>
                    <p className="inline absolute right-10">
                      {review.date.slice(11, 26)}
                    </p>
                    <p className="text-gray-600 inline bg-slate-100 ">
                      {review.rating}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
