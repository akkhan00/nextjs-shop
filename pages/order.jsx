import React from 'react';

const Order = ({ subTotal }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              AK 07
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #83383
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order has been successfully Completed!
            </p>

            <div className="flex justify-between mb-4 ">
              <div className=" py-2 text-lg px-1">Description</div>
              <div className="py-2 text-lg px-1">Quantity</div>
              <div className="py-2 text-lg px-1">Total</div>
            </div>
            <div className="flex justify-between border-t border-gray-200 ">
              <div className="text-gray-500">Shoes red (xl)</div>
              <div>2</div>
              <div className="text-gray-900">$4000</div>
            </div>
            <div className="flex justify-between border-t border-gray-200 py-2">
              <div className="text-gray-500">Shoes red (xl)</div>
              <div>1</div>
              <div className="text-gray-900">$300</div>
            </div>
            <div className="flex justify-between border-t border-gray-200 py-2">
              <div className="text-gray-500">Shoes red (xl)</div>
              <div>4</div>
              <div className="text-gray-900">$8334</div>
            </div>

            <div className="flex flex-col mt-5">
              <div className="title-font font-medium text-2xl text-gray-900">
                subTotal: ${subTotal}
              </div>
              <div className="mt-5">
                <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
