import React from 'react'
import 'boxicons'

function Header() {
    const headAnchor = [
        { name: "home", link: "#" },
        { name: "products", link: "#" },
        { name: "about", link: "#" },
        { name: "contact", link: "#" },
    ]

    const headbxbtn = [
        { name: "heart", link: "#" },
        { name: "box", link: "#" },
        { name: "user", link: "#" },
    ]

    return (
        <header className="h-[85px] flex justify-center items-center p-4 shadow-md bg-white w-full fixed top-0 left-0 z-10">
            <div className="flex justify-between items-center w-[90%] gap-3">
                <div className="text-2xl font-bold">
                    <a href="#">cyber</a>
                </div>

                <form className="flex gap-2 items-center">
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

                <nav>
                    <ul className="flex gap-6">
                        {headAnchor.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} id='head-a-line' className="capitalize hover:text-blue-600">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex gap-4">
                    {headbxbtn.map((btn, index) => (
                        <a href={btn.link} key={index} className='relative flex justify-center items-center'>
                            <box-icon name={btn.name} className="hover:scale-110 transition duration-300"></box-icon>
                            {btn.name === 'box' &&(
                                <span className='absolute -top-3 -right-3 bg-green-500 w-[20px] h-[20px] text-center flex items-center justify-center rounded-full text-white text-xs'>
                                    2
                                </span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
