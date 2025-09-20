import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>ASUK Apparel Pvt. Ltd.<br />
                  123 Fashion Street, Bandra West<br />
                  Mumbai, Maharashtra 400050<br />
                  India </p>
          <p className='text-gray-500'>Tel: + 91 902488492 <br />support@asuk.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500 mb-4'>Learn more about our team and job openings</p>
          <Link 
            to="/careers" 
            className='inline-block border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 text-center'
          >
            Explore Jobs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact