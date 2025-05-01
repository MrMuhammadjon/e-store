import React from 'react';
import Header from '../Components/Header';

const shopCart = () => {

  const products = [
    { id: 1, title: 'iPhone 14 Pro', price: 1437, image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'iPhone 11', price: 510, image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'iPhone 12', price: 899, image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'iPhone 13', price: 1099, image: 'https://via.placeholder.com/200' },
  ];

  return (
    <>
      <Header />
      <main className='w-full h-screen flex flex-col items-center bg-gray-100'>
        <section className='w-full h-[100px] flex justify-center items-center flex-col mt-[85px] p-4'>
          <div className="max-w-7xl w-full h-full flex items-center"><h1 className='text-3xl font-bold text-gray-500'>Smartphones</h1></div>
        </section>

        <div className="max-w-7xl flex flex-col lg:flex-row p-4 gap-6">
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Brand</h3>
              <input type="text" placeholder="Search" className="w-full mb-3 px-2 py-1 border rounded" />
              <ul className="space-y-1 text-sm">
                {['Apple', 'Samsung', 'Xiaomi', 'Poco', 'OPPO', 'Honor', 'Motorola', 'Nokia', 'Realme'].map((brand, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <input type="checkbox" id={`brand-${idx}`} />
                    <label htmlFor={`brand-${idx}`} className="cursor-pointer">{brand}</label>
                  </li>
                ))}
              </ul>
            </div>

            {['Battery capacity', 'Screen type', 'Screen diagonal', 'Protection class', 'Built-in memory'].map((section, i) => (
              <div key={i} className="border rounded-lg p-4">
                <h3 className="font-semibold">{section}</h3>
              </div>
            ))}
          </aside>

          <main className="w-full lg:w-3/4">
            <h2 className="text-xl font-bold mb-4">Selected Products: {products.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="border rounded-lg p-4 shadow-sm text-center">
                  <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto mb-3" />
                  <h3 className="font-medium">{product.title}</h3>
                  <p className="text-lg font-bold">${product.price}</p>
                  <button className="mt-2 bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </main>

    </>
  );
};

export default shopCart;
