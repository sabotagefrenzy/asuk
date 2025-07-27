import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. </p>
          <p>An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. </p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'> 
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience</b>
          <p className='text-gray-600'>An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Custoner Service</b>
          <p className='text-gray-600'>An "About Us" page on a website serves as a brief introduction to a company, organization, or individual, providing key information and fostering a sense of connection with potential clients or customers. It's a valuable tool for building trust, demonstrating expertise, and conveying the brand's core values. </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About