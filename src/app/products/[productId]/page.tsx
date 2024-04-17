import data from '@/db/data';
import React from 'react';

interface ProductParams {
  productId: string;
}

export default function ProductDetails({ params }: { params: ProductParams }) {
  // Temukan produk berdasarkan ID dari params
  const product = data.find(item => item.id.toString() === decodeURIComponent(params.productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (


    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
          Ecommerce.id
        </h1>

      </div>

      <div className='mt-16'>
        <div className='flex justify-between'>
          <div className='flex-1 flex justify-center'>

            <img src={product.img} alt={product.title} className='h-auto w-[300px]' />
          </div>
          <div className='flex flex-1 '>
            <div className='flex flex-col gap-4 capitalize w-full'>
              <h2 className='text-3xl font-bold'>{product.title}</h2>
              <div className='flex gap-2'>
                <p className='border-r-2 border-slate-200 pr-2 '>{product.category}</p>
                <p>{product.availability > 0 ? <span className='text-green-500'>in Stock</span> : <span className='text-red-500'>out of stock</span>}</p>
              </div>
              <p>Rp. {formatPrice(product.price)}</p>
              <div className='gap-2'>
                <p className='text-lg font-semibold'>Description</p>
                <p>{product.description}</p>
              </div>
              <button className='w-full bg-zinc-950 py-2 text-sm font-semibold text-white rounded-md hover:bg-zinc-700'>Add to Cart</button>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
