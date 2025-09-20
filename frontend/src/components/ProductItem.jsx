import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import QuickViewModal from './QuickViewModal'
import { useWishlist } from '../hooks/useWishlist'

// Backward-compatible: accepts either a full product object via `product` or legacy props
const ProductItem = ({ id, image, name, price, product }) => {

    const { currency, products } = useContext(ShopContext)
    const { isInWishlist, toggleWishlist } = useWishlist()
    const [openQuick, setOpenQuick] = useState(false)

    // Build a product object from props if not provided
    const prod = product || (() => {
        const found = (products || []).find(p => p._id === id)
        return found || { _id: id, image, name, price, sizes: [] }
    })()

    const primaryImg = (prod.image && prod.image[0]) || (image && image[0])
    const hoverImg = (prod.image && prod.image[1]) || (image && image[1]) || primaryImg
    const isOversizeOnly = Array.isArray(prod.sizes) && prod.sizes.length === 1 && String(prod.sizes[0]).toLowerCase() === 'oversize'

    return (
        <div className='text-gray-700'>
            <div className='card group border border-gray-200'>
                {/* Top-right Wishlist */}
                <div className='absolute top-2 right-2 z-10'>
                    <button
                        type='button'
                        aria-label='Wishlist'
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(prod._id); }}
                        className={`wishlist-btn ${isInWishlist(prod._id) ? 'active' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-5 h-5'>
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.462 2.25 9.348 2.25 6.708 4.317 4.5 6.867 4.5c1.54 0 2.879.593 3.78 1.64l.353.405.353-.404c.901-1.048 2.24-1.641 3.78-1.641 2.55 0 4.617 2.208 4.617 4.848 0 3.114-2.438 6.012-4.739 8.16a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.003-.003.002a.75.75 0 01-.704 0l-.003-.002z" />
                        </svg>
                    </button>
                </div>

                {/* Image link */}
                <Link to={`/product/${prod._id}`} className='block relative overflow-hidden'>
                    {isOversizeOnly && (
                        <div className='absolute left-2 top-2 z-10'>
                            <span className='badge badge-hot'>Oversize</span>
                        </div>
                    )}
                    {/* Primary image */}
                    <img
                        className='w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0'
                        src={primaryImg}
                        alt={prod.name}
                    />
                    {/* Hover image */}
                    <img
                        className='absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                        src={hoverImg}
                        alt={prod.name}
                    />
                </Link>
            </div>

            {/* Quick View below image to avoid overlap */}
            <div className='mt-2'>
                <button type='button' className='btn btn-secondary py-2 px-3 text-xs' onClick={() => setOpenQuick(true)}>
                    Quick View
                </button>
            </div>

            {/* Details */}
            <Link to={`/product/${prod._id}`} className='block cursor-pointer'>
                <p className='pt-3 pb-1 text-sm line-clamp-2'>{prod.name || name}</p>
                <p className='text-sm font-medium'>{currency}{prod.price ?? price}</p>
            </Link>

            {/* Quick View Modal */}
            <QuickViewModal open={openQuick} onClose={() => setOpenQuick(false)} product={prod} />
        </div>

    )
}

export default ProductItem