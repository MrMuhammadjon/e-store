import React, { useState } from 'react';
import 'boxicons';

function Header({cartCount}) {

    const [menuOpen, setMenuOpen] = useState(false);

    const headAnchor = [
        { name: "home", link: "#" },
        { name: "products", link: "#" },
        { name: "about", link: "#" },
        { name: "contact", link: "#" },
    ];

        const headbxbtn = [
            { name: "heart", link: "#" },
            { name: 'user', link: '/user' },
            { name: 'box', link: '/cart' },
        ];


        return (
            <header className="h-[85px] flex items-center p-4 shadow-md bg-white w-full fixed top-0 left-0 z-10">
                <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto gap-3">
                    <div className="text-2xl font-bold">
                        <a href="#">cyber</a>
                    </div>

                    <nav className={`fixed top-[85px] left-0 w-full bg-white shadow-md lg:static lg:shadow-none transition-all duration-300 ease-in-out
                    ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className="flex flex-col lg:flex-row gap-6 p-4 lg:p-0 lg:items-center">
                            {headAnchor.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="capitalize hover:text-blue-600">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <form className="hidden lg:flex gap-2 items-center">
                        <input
                            className='border-2 w-[250px] h-[35px] p-2 outline-0 rounded-[10px]'
                            type="search"
                            placeholder="Search..."
                            name="search"
                        />
                        <button
                            type='submit'
                            className='bg-black w-[120px] h-[35px] text-white rounded-[10px] cursor-pointer hover:bg-gray-800 transition duration-300'
                        >
                            Search
                        </button>
                    </form>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-3xl focus:outline-none"
                    >
                        <box-icon name={menuOpen ? 'x' : 'menu'}></box-icon>
                    </button>

                    <div className="hidden lg:flex gap-4">
                        {headbxbtn.map((btn, index) => (
                            <a href={btn.link} key={index} className='relative flex justify-center items-center'>
                                <box-icon name={btn.name} className="hover:scale-110 transition duration-300"></box-icon>
                                {btn.name === 'box' && (
                                    <span className='absolute -top-3 -right-3 bg-green-500 w-[20px] h-[20px] text-center flex items-center justify-center rounded-full text-white text-xs'>
                                        {cartCount}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        );
    }

    export default Header;
