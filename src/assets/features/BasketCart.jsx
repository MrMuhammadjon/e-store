import React, { use, useEffect, useState } from "react";
import Header from "../Components/Header";

const BasketCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cart')) || [];
        console.log(data);
        setCart(data);
    }, []);

    const truncate = (text, maxLength) => {
        if (!text) return "";
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    const PromoCode = [
        {
            id: "1",
            code: "DISCOUNT10",
            discount: 10,
        },
        {
            id: "2",
            code: "FREESHIP",
            discount: 30,
        },
        {
            id: "3",
            code: "SUMMER20",
            discount: 20,
        },
    ]

    const increaseProduct = (id) => {
        console.log('+ is clicked');
        
        const updatedCart = cart.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      };
      
      const decreaseProduct = (id) => {
        console.log('- is clicked');
        
        const updatedCart = cart.map(item => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      };

      const removeProduct = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      };
      

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = 50;
    const shipping = 29;
    const total = subtotal + tax + shipping;

    return (
        <>
            <div className="mt-40 grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-4">
                                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                                <div>
                                    <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>
                                    <p className="text-xs text-gray-500">{truncate(item.description, 100)}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-2 text-lg" onClick={()=>decreaseProduct}>−</button>
                                <span>{item.quantity}</span>
                                <button className="px-2 text-lg" onClick={()=>increaseProduct}>+</button>
                                <p className="ml-6 font-semibold">${item.price}</p>
                                <button className="ml-4 text-gray-400 hover:text-red-500" onClick={() => removeProduct(item.id)}>✕</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border p-4 rounded-md shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Discount code / Promo code"
                            className="w-full border px-3 py-2 text-sm rounded"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter Card Number"
                                className="w-full border px-3 py-2 text-sm rounded"
                            />
                            <button className="px-4 bg-gray-800 text-white rounded">Apply</button>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimated Tax</span>
                            <span>${tax}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimated shipping & Handling</span>
                            <span>${shipping}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-base mt-2 border-t pt-2">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>

                    <button className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-gray-900 transition">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default BasketCart;
