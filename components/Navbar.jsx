import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const ref = useRef();

  const toggleChart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };

  return (
    <header className="sticky text-gray-600 body-font shadow-md sticky top-0 bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-pink-600 font-bold text-shadow">
            Best-Diapers
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href={'/tshirts'}>
            T-Shirts
          </Link>
          <Link className="mr-5 hover:text-gray-900" href={'/hoodies'}>
            Hoodies
          </Link>
          <Link className="mr-5 hover:text-gray-900" href={'/sticker'}>
            Stickers
          </Link>
          <Link className="mr-5 hover:text-gray-900" href={'/mugs'}>
            Mugs
          </Link>
        </nav>
        <AiOutlineShoppingCart
          onClick={toggleChart}
          className="text-pink-400 absolute right-0 mx-2 cursor-pointer"
          size={25}
        />
      </div>
      <section
        ref={ref}
        className="ChartBar transform transition-transform translate-x-full z-10 w-72 bg-pink-100 absolute top-0 right-0 h-[100vh] py-5 px-8"
      >
        <AiFillCloseCircle
          size={25}
          className="text-pink-400 cursor-pointer absolute top-5 right-4"
          onClick={toggleChart}
        />
        <h1 className="text-center font-bold text-lg">Cart Bar</h1>
        <ol className="list-decimal font-semibold my-5">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-smeibold">Your cart is Empty</div>
          )}

          {Object.keys(cart).map((item) => {
            return (
              <li key={item}>
                <div className="flex justify-between">
                  <div className="w-2/3">My Site for sell</div>
                  <div className="w-1/3 flex justify-center items-center space-x-2">
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
        </ol>
        <div className="font-bold my-4">subTotal: {subTotal}</div>
        <div className="flex justify-between">
          <Link href={'/checkout'}>
            <button className="text-white flex items-center bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">
              <BsFillBagCheckFill />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="text-white flex items-center bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded "
          >
            Clear Cart
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
