import React from 'react'
import 'boxicons'

function Footer() {
  const linkIcon = [
    { name: 'logo-facebook-square', color: '#fff', link: '#' },
    { name: 'logo-twitter', color: '#fff', link: '#' },
    { name: 'logo-instagram-alt', color: '#fff', link: '#' },
    { name: 'logo-tiktok', color: '#fff', link: '#' },
  ]

  const FooterAhref1 = [
    { tite: 'Find an order', link: '#' },
    { tite: 'Gift cards', link: '#' },
    { tite: 'Credit and payment', link: '#' },
    { tite: 'Guarantee', link: '#' },
    { tite: 'Service contracts', link: '#' },
    { tite: 'Non-cash account', link: '#' },
    { tite: 'Payment', link: '#' },
  ]

  const FooterAhref2 = [
    { tite: 'Find an order', link: '#' },
    { tite: 'Terms of delivery', link: '#' },
    { tite: 'Exchange and return of goods', link: '#' },
    { tite: 'Guarantee', link: '#' },
    { tite: 'Frequently asked questions', link: '#' },
    { tite: 'Terms of use of the site', link: '#' },
  ]

  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <h2 className="text-lg font-bold mb-2">cyber</h2>
          <p>
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
          <div className="flex space-x-4 mt-4 text-white">
            {
              linkIcon.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    <box-icon key={index} name={item.name} className="text-2xl hover:text-gray-400 transition duration-300"></box-icon>
                  </a>
                )
              })
            }
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            {
              FooterAhref1.map((item, index) => {
                return (
                  <li key={index} className='hover:text-yellow-300 transition duration-300 hover:scale-x-90'><a href={item.link}>{item.tite}</a></li>
                )
              })
            }
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Assistance to the buyer</h3>
          <ul className="space-y-1">
            {
              FooterAhref2.map((item, index) => {
                return (
                  <li key={index} className='hover:text-yellow-300 transition duration-300 hover:scale-x-90'><a href={item.link}>{item.tite}</a></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
