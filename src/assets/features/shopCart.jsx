import React from 'react';
import Header from '../Components/Header';

const shopCart = ({ productapp }) => {

  // let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const chekCategory = [
    { id: 1, title: 'Iphone' },
    { id: 2, title: 'Samsung' },
    { id: 3, title: 'Xiaomi' },
    { id: 4, title: 'Poco' },
    { id: 5, title: 'OPPO' },
    { id: 6, title: 'Honor' },
    { id: 7, title: 'Motorola' },
    { id: 8, title: 'Nokia' },
    { id: 9, title: 'Realme' },
    { id: 10, title: 'Vivo' },
    { id: 11, title: 'OnePlus' },
    { id: 12, title: 'Google' },
    { id: 13, title: 'Sony' },
    { id: 14, title: 'LG' },
    { id: 15, title: 'HTC' },
    { id: 16, title: 'Huawei' },
    { id: 17, title: 'Lenovo' },
    { id: 18, title: 'Asus' },
    { id: 19, title: 'ZTE' },
    { id: 20, title: 'TCL' },
    { id: 21, title: 'Alcatel' },
    { id: 22, title: 'Micromax' },
    { id: 23, title: 'Infinix' },
    { id: 24, title: 'Tecno' },
    { id: 25, title: 'Lava' },
    { id: 26, title: 'Karbonn' },
    { id: 27, title: 'Gionee' },
  ]
  console.log(productapp)

  return (
    <>
      <Header />
      <main className='w-full h-[1200px] flex flex-col items-center bg-white'>
        <div className="max-w-7xl w-full h-full flex flex-col items-center">
          <section className='w-full h-[100px] flex justify-center items-center flex-col mt-[85px] p-4'>
            <div className="max-w-7xl w-full h-full flex items-center"><h1 className='text-3xl font-bold text-gray-500'>Smartphones</h1></div>
          </section>

          <div className="w-full flex p-4 gap-6">
            <aside className="w-full md:w-1/1 lg:w-1/4 space-y-5">
              <div className="border rounded-lg h-[500px] hidden-scrollbar overflow-y-auto">
                <div className="w-full h-auto flex flex-col top-0  p-4 sticky bg-white shadow-md">
                  <h3 className="font-semibold mb-2">Brand</h3>
                  <input type="text" placeholder="Search" className="w-full mb-3 px-2 py-1 border rounded" />
                </div>
                <ul className="space-y-1 text-sm px-4 py-4 flex flex-col gap-2">
                  {chekCategory.map((brand, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id={`brand-${brand.title}`}
                        className="hidden peer"
                      />
                      <label
                        htmlFor={`brand-${brand.title}`}
                        className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition duration-150 ease-in-out cursor-pointer"
                      >
                        <svg
                          className="w-3 h-3 text-white hidden peer-checked:block"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </label>
                      <label htmlFor={`brand-${brand.title}`} className="cursor-pointer text-sm text-gray-800">
                        {brand.title}
                      </label>
                    </li>
                  ))}

                </ul>
              </div>

              {['Battery capacity', 'Screen type', 'Screen diagonal', 'Protection class', 'Built-in memory'].map((section, i) => (
                <div key={i} className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out">
                  <h3 className="font-semibold">{section}</h3>
                </div>
              ))}
            </aside>

            <main className="w-full h-full lg:w-3/4">
              <h2 className="text-xl font-bold mb-4">Selected Products: {productapp.length}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden-scrollbar overflow-y-auto h-[800px]">
                {productapp.map(product => (
                  <div key={product.id} className="border rounded-lg p-4 shadow-sm text-center h-[300px]">
                    <img src={product.thumbnail} alt={product.title} className="w-32 h-32 mx-auto mb-3" />
                    <div className="flex">
                      <h3 className="font-medium">{product.title}</h3>
                      <p className="text-lg font-bold">${product.price}</p>
                    </div>
                    <button className="mt-2 bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </main>

    </>
  );
};

export default shopCart;
