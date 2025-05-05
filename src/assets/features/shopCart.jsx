import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';

const ShopCart = ({ productapp }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productapp);
  console.log(productapp);


  const brandList = [
    { id: 1, title: 'Apple', }, { id: 2, title: 'Samsung' }, { id: 3, title: 'Xiaomi' },
    { id: 4, title: 'Poco' }, { id: 5, title: 'OPPO' }, { id: 6, title: 'Honor' },
    { id: 7, title: 'Motorola' }, { id: 8, title: 'Nokia' }, { id: 9, title: 'Realme' },
    { id: 10, title: 'Vivo' }, { id: 11, title: 'OnePlus' }, { id: 12, title: 'Google' },
    { id: 13, title: 'Sony' }, { id: 14, title: 'LG' }, { id: 15, title: 'HTC' },
    { id: 16, title: 'Huawei' }, { id: 17, title: 'Lenovo' }, { id: 18, title: 'Asus' },
    { id: 19, title: 'ZTE' }, { id: 20, title: 'TCL' }, { id: 21, title: 'Alcatel' },
    { id: 22, title: 'Micromax' }, { id: 23, title: 'Infinix' }, { id: 24, title: 'Tecno' },
    { id: 25, title: 'Lava' }, { id: 26, title: 'Karbonn' }, { id: 27, title: 'Gionee' },
  ];

  useEffect(() => {
    let filtered = productapp;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedBrands, productapp]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

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

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);

    alert(`${product.title} added to cart!`);
  };

  return (
    <>
      <Header />
      <main className='w-full h-[1200px] flex flex-col items-center bg-white'>
        <div className="max-w-7xl w-full h-full flex flex-col items-center">
          <section className='w-full h-[100px] flex justify-center items-center mt-[85px] p-4'>
            <div className="max-w-7xl w-full h-full flex items-center">
              <h1 className='text-3xl font-bold text-gray-500'>Smartphones</h1>
            </div>
            <h2 className="w-fu ll flex items-center justify-end text-xl font-bold mb-4">
              Selected Products: {filteredProducts.length}
            </h2>
          </section>

          <div className="w-full flex p-4 gap-6">
            <aside className="w-full md:w-1/1 lg:w-1/4 space-y-5">
              <div className="border rounded-lg h-[500px] hidden-scrollbar overflow-y-auto">
                <div className="w-full h-auto flex flex-col top-0 p-4 sticky bg-white shadow-md">
                  <h3 className="font-semibold mb-2">Brand</h3>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search"
                    className="w-full mb-3 px-2 py-1 border rounded"
                  />
                </div>
                <ul className="space-y-1 text-sm px-4 py-4 flex flex-col gap-2">
                  {brandList.map((brand, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id={`brand-${brand.title}`}
                        className="hidden peer"
                        checked={selectedBrands.includes(brand.title)}
                        onChange={() => handleCheckboxChange(brand.title)}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden-scrollbar overflow-y-auto h-[900px] shadow-2xs">
                {filteredProducts.map((item) => (
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
            </main>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopCart;
