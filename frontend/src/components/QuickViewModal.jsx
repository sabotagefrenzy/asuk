import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const QuickViewModal = ({ product, open, onClose }) => {
  const { currency, addToCart, siteOutOfStock } = useContext(ShopContext);
  const [activeImg, setActiveImg] = useState(product?.image?.[0] || '');
  const [size, setSize] = useState('');

  React.useEffect(() => {
    if (product?.image?.length) setActiveImg(product.image[0]);
    setSize('');
  }, [product]);

  const price = useMemo(() => product?.price ?? 0, [product]);

  if (!open || !product) return null;

  const handleAdd = () => addToCart(product._id, size);

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal">
        <div className="modal-header">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div className="modal-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gallery */}
            <div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img src={activeImg} alt={product.name} className="w-full h-auto object-cover" />
              </div>
              <div className="mt-3 flex gap-2">
                {product.image?.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(img)}
                    className={`h-16 w-16 rounded-lg overflow-hidden border ${activeImg===img? 'border-black' : 'border-gray-200'}`}
                  >
                    <img src={img} alt={`${product.name}-${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold">{currency}{price}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description?.slice(0, 180) || 'Premium cotton. Signature print. Soft hand-feel.'}...
              </p>

              {/* Sizes */}
              <div>
                <p className="mb-2 text-sm font-medium">Select Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes?.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-3 py-2 rounded-md border text-sm ${size===s? 'border-black bg-gray-100' : 'border-gray-300'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-2">
                <button onClick={handleAdd} className="btn btn-primary" disabled={siteOutOfStock || !size}>
                  {siteOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <Link to={`/product/${product._id}`} onClick={onClose} className="btn btn-secondary">View Details</Link>
              </div>

              {/* Trust bar */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-2"><span>✓</span> Secure Payments</div>
                <div className="flex items-center gap-2"><span>✓</span> Easy Returns</div>
                <div className="flex items-center gap-2"><span>✓</span> Fast Shipping</div>
                <div className="flex items-center gap-2"><span>✓</span> Premium Cotton</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;
