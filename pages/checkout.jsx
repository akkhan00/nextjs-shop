import Link from 'next/link';
import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Checkout = ({ cart, clearCart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className="px-2 sm:mx-auto">
      <h1 className="text-center my-4 font-bold text-3xl">CheckOut</h1>
      <h2 className="px-2 font-semibold text-xl">1. Dilvery Details</h2>
      <div className="mx-auto flex">
        <div class="px-2 mb-4 w-1/2">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Name"
          />
        </div>
        <div class="px-2 mb-4 w-1/2">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="mx-4 mb-4">
        <label for="address" class="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          placeholder="Address"
        ></textarea>
      </div>
      <div className="mx-auto flex">
        <div class="px-2 mb-4 w-1/2">
          <label for="phone" class="leading-7 text-sm text-gray-600">
            phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Phone"
          />
        </div>
        <div class="px-2 mb-4 w-1/2">
          <label for="state" class="leading-7 text-sm text-gray-600">
            state
          </label>
          <input
            type="text"
            id="state"
            name="state"
            class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="State"
          />
        </div>
      </div>
      <div className="mx-auto flex">
        <div class="px-2 mb-4 w-1/2">
          <label for="city" class="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="City"
          />
        </div>
        <div class="px-2 mb-4 w-1/2">
          <label for="pincode" class="leading-7 text-sm text-gray-600">
            PinCode
          </label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="PinCode"
          />
        </div>
      </div>
      <h2 className="mx-2 font-semibold text-xl">2. Review Cart Items</h2>
      <section className="ChartBar bg-pink-100 py-2 px-8">
        <ol className="list-decimal font-semibold my-5">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-smeibold">Your cart is Empty</div>
          )}

          {Object.keys(cart).map((item) => {
            return (
              <li key={item}>
                <div className="md:mx-10 flex justify-start space-x-20 md:space-x-36">
                  <div className="">My Site for sell</div>
                  <div className="flex justify-center items-center space-x-2">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          item,
                          1,
                          cart[item].price,
                          cart[item].name,
                          cart[item].size,
                          cart[item].variant
                        );
                      }}
                      className="cursor-pointer text-pink-400"
                    />
                    <span>{cart[item].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          item,
                          1,
                          cart[item].price,
                          cart[item].name,
                          cart[item].size,
                          cart[item].variant
                        );
                      }}
                      className="text-pink-400 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
          <span className="font-bold">SubTotal: {subTotal}</span>
        </ol>
      </section>
      <div className="m-4">
        <Link href={'/checkout'}>
          <button className="text-white flex items-center bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">
            <BsFillBagCheckFill />
            Pay ${subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
