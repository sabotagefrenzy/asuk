import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At ASUK, we’re a design-led tee studio where pop culture energy meets timeless spirituality. Every graphic is drawn in‑house, crafted to spark conversation and carry meaning you can wear. We obsess over fit, fabric, and print so each piece feels like your favorite from day one.</p>
          <p>We source premium, breathable cotton and use durable print techniques that keep colors vivid after countless washes. Limited drops keep the collection fresh and collectible, while our community helps shape what we create next. It’s comfort-first apparel—built to last and built to be you.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To empower self-expression through thoughtfully crafted essentials that tell your story—bridging modern fandoms with classic symbolism. With mindful production partners and rigorous quality checks, we prioritize craft over mass so you can wear confidence every day.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'> 
        <div className='border  md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='text-2xl py-4'>Quality Assurance</b>
          <p className='text-gray-600'>100% premium cotton with a soft hand‑feel, durable prints, and double‑checked stitching. Each batch passes a strict quality review before it leaves our studio.</p>
        </div>
        <div className='border  md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='text-2xl py-4'>Convenience</b>
          <p className='text-gray-600'>Fast dispatch and tracked shipping, secure encrypted checkout, and easy 7‑day returns and exchanges for a worry‑free experience.</p>
        </div>
        <div className='border  md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='text-2xl py-4'>Exceptional Customer Service</b>
          <p className='text-gray-600'>Human support that responds within 24 hours—size & fit guidance, order help, and hassle‑free resolutions when you need them.</p>
        </div>
      </div>
    </div>
  )
}

export default About