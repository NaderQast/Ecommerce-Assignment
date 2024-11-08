import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 ">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between "
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing information
              </h3>
              {billingToggle ? (
                <FaAngleDown className="cursor-pointer" />
              ) : (
                <FaAngleUp className="cursor-pointer" />
              )}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
                <div className="block text-gray-700">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between "
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shiping information
              </h3>
              {shippingToggle ? (
                <FaAngleDown className="cursor-pointer" />
              ) : (
                <FaAngleUp className="cursor-pointer" />
              )}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                />
                <div className="block text-gray-700">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter Your City"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="">Zip Code</label>
                <input
                  type="number"
                  name="zip-code"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>
          {/* payment method */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between "
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {billingToggle ? (
                <FaAngleDown className="cursor-pointer" />
              ) : (
                <FaAngleUp className="cursor-pointer" />
              )}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  placeholder="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2" htmlFor="">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2" htmlFor="">
                  Debit Card
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img src={product.image} alt="" 
                  className="w-16 h-16 object-contain rounded" />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
