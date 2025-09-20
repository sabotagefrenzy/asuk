import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { useWishlist } from '../hooks/useWishlist'

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart, siteOutOfStock } = useContext(ShopContext)
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const { isInWishlist, toggleWishlist } = useWishlist()

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  const breadcrumb = useMemo(() => {
    if (!productData) return null;
    const cat = productData.category || 'All';
    const sub = productData.subCategory || productData.subcategory || null;
    return (
      <nav className='breadcrumb mb-4'>
        <Link to='/'>Home</Link>
        <span>/</span>
        <Link to='/collection'>{cat}</Link>
        {sub && (<><span>/</span><Link to='/collection'>{sub}</Link></>)}
        <span>/</span>
        <span className='text-gray-800'>{productData.name}</span>
      </nav>
    )
  }, [productData])

  return productData ? (
    <div className='border-t-2 pt-6 md:pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='px-1 sm:px-0'>
        {breadcrumb}
      </div>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* -----Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p >Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button onClick={()=>addToCart(productData._id,size)} className='btn btn-primary' disabled={siteOutOfStock || !size}>
              {siteOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <button
              type='button'
              aria-label='Wishlist'
              onClick={() => toggleWishlist(productData._id)}
              className={`wishlist-btn ${isInWishlist(productData._id) ? 'active' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-5 h-5'>
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.462 2.25 9.348 2.25 6.708 4.317 4.5 6.867 4.5c1.54 0 2.879.593 3.78 1.64l.353.405.353-.404c.901-1.048 2.24-1.641 3.78-1.641 2.55 0 4.617 2.208 4.617 4.848 0 3.114-2.438 6.012-4.739 8.16a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.003-.003.002a.75.75 0 01-.704 0l-.003-.002z" />
              </svg>
            </button>
          </div>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <p>100% Original Product</p>
            <p>Cash On Delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
            <p>Secure Payments via Stripe/Razorpay</p>
          </div>
        </div>
      </div>
      {/* Description & Review */}
      <div className='mt-16'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Design Story</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='grid md:grid-cols-2 gap-6 border px-6 py-6 text-sm text-gray-700'>
          <div className='space-y-3'>
            <p className='text-gray-600'>{productData.description}</p>
            <ul className='list-disc pl-5 text-gray-600'>
              <li>Premium cotton, soft hand-feel</li>
              <li>Durable print, everyday comfort</li>
              <li>Care: Gentle machine wash, dry in shade</li>
            </ul>
          </div>
          <div className='space-y-3'>
            <p><b>Symbol:</b> Inspired motif from our themes</p>
            <p><b>Origin:</b> Crafted by in-house artists</p>
            <p><b>Meaning for You:</b> Wear your story with confidence</p>
          </div>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts category={productData.category} subcategory={(productData.subCategory || productData.subcategory)} />

    </div>
  ) : <div className='opacity-0'></div>

}

export default Product