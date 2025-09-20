import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      {/* Trust & Payment Bar */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 items-center bg-white border border-gray-200 rounded-xl p-5 shadow-sm'>
        <div className='flex items-center gap-3 justify-center sm:justify-start'>
          <span className='badge badge-new'>Secure Payments</span>
          <span className='text-sm text-gray-600'>SSL Encrypted Checkout</span>
        </div>
        <div className='flex items-center gap-3 justify-center'>
          <span className='badge badge-hot'>Easy Returns</span>
          <span className='text-sm text-gray-600'>7-day Return Policy</span>
        </div>
        <div className='flex items-center gap-3 justify-center sm:justify-end'>
          <img src={assets.razorpay_logo} className='h-6 object-contain' alt='Razorpay' />
          <img src={assets.stripe_logo} className='h-6 object-contain' alt='Stripe' />
        </div>
      </div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <img src={assets.asuk_logo} className='mb-5 w-32' alt="Asuk Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Pop culture energy meets timeless spirituality. Crafted graphics, premium cotton, everyday comfort.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>
              <Link to="/" className='hover:text-black transition-colors'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='hover:text-black transition-colors'>About Us</Link>
            </li>
            <li>
              <Link to="/delivery-info" className='hover:text-black transition-colors'>Delivery</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className='hover:text-black transition-colors'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/careers" className='hover:text-black transition-colors'>Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 9924294924</li>
            <li>support@asuk.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ asuk.com — All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer