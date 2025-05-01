import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
import ShopCart from './assets/features/shopCart';

import appleImg from '../public/Iphone16.jpg';
import irpodsPro from './assets/Img/irpodsPro.png';
import Playstation from './assets/Img/PlayStation.png';
import MacBook from './assets/Img/MacBook .jpg';
import visionPro from './assets/Img/VisionPro.png';

import AppleIpad from '../public/AppleIpad.png';
import AppleWatch from '../public/AppleWatch.png';
import AppleMac from '../public/Macbook1.png';
import SamsunZFOLD from '../public/SamsungZFold.png';


function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://dummyjson.com/products/category/smartphones');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }
    }

    fetchProducts();
  }, []);

  const CategryBtn = [
    { name: 'Mobile-alt', link: '#' },
    { name: 'Desktop', link: '#' },
    { name: 'Laptop', link: '#' },
    { name: 'Devices', link: '#' },
    { name: 'watch-alt', link: '#', type: 'solid' },
    { name: 'Headphone', link: '#' },
    { name: 'Camera', link: '#' },

  ];

  const productCards = [
    {
      title: "Popular Products",
      description: "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
      image: AppleWatch, // Replace with real URLs or local imports
      bg: "bg-gray-500",
    },
    {
      title: "Ipad Pro",
      description: "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
      image: AppleIpad,
      bg: "bg-gray-600",
    },
    {
      title: "Samsung Galaxy",
      description: "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
      image: SamsunZFOLD,
      bg: "bg-gray-700",
    },
    {
      title: "Macbook Pro",
      description: "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
      image: AppleMac,
      bg: "bg-gray-900 text-white",
    },
  ];

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update count
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);

    alert(`${product.title} added to cart!`);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/shop-cart' element={<ShopCart />} />
        </Routes>
      </BrowserRouter>

      {loading ? (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-50">
          <div className="flex flex-row gap-2">
            <div className="w-10 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-10 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-10 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      ) : null}

      <Header cartCount={cartCount} />
      <section className="bg-black text-white w-full h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400">Pro.Beyond.</p>
            <h1 className="text-5xl md:text-6xl font-light">
              IPhone 16 <span className="font-bold">Pro</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Created to change everything for the better. For everyone
            </p>
            <button className="w-fit mt-4 px-6 py-2 border rounded-[10px] cursor-pointer border-white hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={appleImg}
              alt="iPhone 16 Pro"
              className="w-[400px] md:w-[450px] object-contain"
            />
          </div>
        </div>
      </section>

      <main>
        <section className="w-full bg-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <a href="#" className="bg-black flex flex-col md:flex-row h-[300px] items-center gap-6 rounded-2xl">
              <img src={Playstation} alt="Playstation 5" className="w-[150px] md:w-[200px]" />
              <div className="p-3">
                <h2 className="text-2xl font-semibold">Playstation 5</h2>
                <p className="text-white mt-2 text-sm">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                </p>
              </div>
            </a>

            <a href="#" className="bg-gray-100 flex flex-col md:flex-row-reverse h-[300px] items-center gap-6 rounded-2xl">
              <img src={MacBook} alt="Macbook Air" className="w-[250px] md:w-[150px]" />
              <div className="p-3">
                <h2 className="text-2xl font-light">Macbook <span className="font-bold">Air</span></h2>
                <p className="text-gray-700 mt-2 text-sm">
                  The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                </p>
                <button className="mt-4 px-5 py-2 border border-black hover:bg-black transition-[0.3s] hover:text-white rounded-[10px]">
                  Shop Now
                </button>
              </div>
            </a>

            <a href="#" className="bg-gray-100 flex items-center h-[300px] gap-6 rounded-2xl">
              <img src={irpodsPro} alt="AirPods Max" className="w-[110px]" />
              <div className="p-3">
                <h3 className="text-xl font-medium">Apple AirPods Max</h3>
                <p className="text-sm text-gray-600">Computational audio. Listen, it’s powerful</p>
              </div>
            </a>

            <a href="#" className="bg-black text-white flex items-center h-[300px] gap-6 rounded-2xl">
              <img src={visionPro} alt="Vision Pro" className="w-[120px]" />
              <div className="p-3">
                <h3 className="text-xl font-medium">Apple Vision <span className="font-bold">Pro</span></h3>
                <p className="text-sm text-gray-300">An immersive way to experience entertainment</p>
              </div>
            </a>
          </div>
        </section>

        <section className='w-full bg-white py-12 px-4'>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div>
              <h1 className='text-3xl font-semibold text-center'>
                Browse By Category
              </h1>
            </div>

            {/* Tugmalar qatori (responsive) */}
            <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6">
              {
                CategryBtn.map((item, index) => (
                  <a href="#" key={index}>
                    <button className="bg-gray-200 text-gray-700 px-6 py-4 md:px-12 md:py-6 rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer flex items-center justify-center">
                      <box-icon className="scale-125" name={item.name} type={item.type}></box-icon>
                    </button>
                  </a>
                ))
              }
            </div>
          </div>
        </section>


        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-col items-center justify-between bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 group"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />

                <h2 className="text-lg font-bold text-center text-gray-800">{item.title}</h2>

                <div className="flex items-center justify-between w-full mt-2 text-sm text-gray-600">
                  <p className="capitalize">{item.brand}</p>
                  <p className="font-semibold text-black">${item.price}</p>
                </div>

                <button onClick={() => addToCart(item)} className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-300">
                  Buy
                  <box-icon name="basket" color="#fff"></box-icon>
                </button>
              </div>
            ))}
          </div>
        </section>


        <section className="py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {productCards.map((card, index) => (
              <div key={index} className={`flex-1 hover:flex-2 shadow-md p-6 flex flex-col items-start text-center ${card.bg}`}>
                <img src={card.image} alt={card.title} className="w-[90%] h-50 object-contain mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-white">{card.title}</h2>
                <p className="text-sm mb-4 text-start text-gray-300">{card.description}</p>
                <a href="">
                  <button className={`border px-5 py-2 rounded-md cursor-pointer text-white border-white hover:border-black ${card.bg.includes("gray-900") ? "border-white text-white hover:bg-white hover:text-black transition duration-300" : "border-black hover:bg-black hover:text-white transition duration-300"}`}>
                    Shop Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default App;
