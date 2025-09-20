import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subcategory }) => {

    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            // Match category exactly
            productsCopy = productsCopy.filter((item) => category === item.category)
            // Support both `subCategory` and `subcategory` keys
            productsCopy = productsCopy.filter((item) => {
                const sub = item.subCategory ?? item.subcategory
                return subcategory === sub
            })

            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subcategory])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'}/>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts