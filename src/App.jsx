import React, { useState, useEffect } from 'react';
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';

import appleImg from '../public/Iphone16.jpg';
import irpodsPro from './assets/Img/irpodsPro.png';
import Playstation from './assets/Img/PlayStation.png';
import MacBook from './assets/Img/MacBook .jpg';
import visionPro from './assets/Img/visionPro.png';

import AppleIpad from '../public/AppleIpad.png';
import AppleWatch from '../public/AppleWatch.png';
import AppleMac from '../public/Macbook1.png';
import SamsunZFOLD from '../public/SamsungZFold.png';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://dummyjson.com/products/category/smartphones');
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
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



  return (
    <>
      <Header />
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

        <section className='w-full bg-white py-12 px-4 '>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="">
              <h1 className='text-3xl font-semibold text-center'>
                Browse By Category
              </h1>
            </div>
            <div className="w-full flex items-center justify-center gap-4">
              {
                CategryBtn.map((item, index) => {
                  return (
                    <a href="#" key={index}>
                      <button key={index} className="bg-gray-200 text-gray-700 px-12 py-6 rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer">
                        <box-icon className="scale-125" name={item.name} type={item.type}></box-icon>
                      </button>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6">

            {products.map((item) => (
              <div key={item.id} className="w-full flex flex-col gap-3  items-center justify-center hover:scale-105 transition duration-500 bg-white rounded-3xl shadow p-4">
                <img src={item.thumbnail} alt={item.title} className="w-[200px] h-[200px] object-cover" />
                <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                <div className="flex items-center justify-center gap-3"><p className="text-gray-500 text-m">{item.brand}</p> <p className=''>{item.price}<span>$</span></p></div>
                <button className='w-[120px] h-[40px] flex items-center justify-center gap-2 cursor-pointer transition-[0.3s] bg-black rounded-2xl text-white hover:bg-gray-800'>Buy <box-icon name='basket' color="#FFF" ></box-icon></button>
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
