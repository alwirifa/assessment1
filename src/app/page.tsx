"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import data from '@/db/data';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Page = () => {

  interface CustomRouter {
    push(href: string, undefined: undefined, arg2: { shallow: boolean; }): unknown;
    query: {
      category?: string;
      price?: string;
      availability?: string;
      sort?: string;
    };
  }

  const router = useRouter() as unknown as CustomRouter;

  // State dari URL
  let urlCategory = 'all';
  let urlPrice = 'all';
  let urlAvailability = 'all';
  let urlSort = 'name';

  if (router.query) {
    const { category, price, availability, sort } = router.query;
    if (category) urlCategory = category;
    if (price) urlPrice = price;
    if (availability) urlAvailability = availability;
    if (sort) urlSort = sort;
  }

  // State aplikasi
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedPrice, setSelectedPrice] = useState(urlPrice);
  const [selectedAvailability, setSelectedAvailability] = useState(urlAvailability);
  const [selectedSort, setSelectedSort] = useState(urlSort);

  // Update URL ketika state aplikasi berubah
  useEffect(() => {
    const queryParams = {
      category: selectedCategory,
      price: selectedPrice,
      availability: selectedAvailability,
      sort: selectedSort
    };
    const href = `/?${new URLSearchParams(queryParams).toString()}`;
    router.push(href, undefined, { shallow: true }); // Menghilangkan argumen kedua yang tidak diperlukan
  }, [selectedCategory, selectedPrice, selectedAvailability, selectedSort]);


  const categories = ['all', ...new Set(data.map(item => item.category))];
  const prices = ['all', 'under 100k', '100k - 500k', 'above 500k'];
  const availabilities = ['all', 'available', 'out of stock'];
  const sorts = ['name', 'price (lowest)', 'price (highest)', 'popularity'];

  let filteredData = data.filter(item => {
    const categoryCondition = selectedCategory === 'all' || item.category === selectedCategory;
    const priceCondition = selectedPrice === 'all' ||
      (selectedPrice === 'under 100k' && item.price < 100000) ||
      (selectedPrice === '100k - 500k' && item.price >= 100000 && item.price <= 500000) ||
      (selectedPrice === 'above 500k' && item.price > 500000);
    const availabilityCondition = selectedAvailability === 'all' ||
      (selectedAvailability === 'available' && item.availability > 0) ||
      (selectedAvailability === 'out of stock' && item.availability === 0);
    return categoryCondition && priceCondition && availabilityCondition;
  });

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const sortData = () => {
    switch (selectedSort) {
      case 'name':
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price (lowest)':
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case 'price (highest)':
        filteredData.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        filteredData.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break;
    }
  };

  sortData();

  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
          Ecommerce.id
        </h1>

        <div className='flex items-center'>
          <DropdownMenu>
            <DropdownMenuTrigger className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
              Sort
              <ChevronDown className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end'>
              <ul className='flex flex-col space-y-4 p-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 capitalize'>
                {sorts.map(sort => (
                  <span
                    key={sort}
                    style={{ color: selectedSort === sort ? 'black' : 'gray', cursor: 'pointer', marginRight: '10px' }}
                    onClick={() => setSelectedSort(sort)}
                  >
                    {sort}
                  </span>
                ))}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>

      <section className='pb-24 pt-6'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>

          {/* Catergory Filters */}
          <div className='hidden lg:block'>
            <ul className='flex flex-col space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 capitalize'>
              {categories.map(category => (
                <span
                  key={category}
                  style={{ color: selectedCategory === category ? 'black' : 'gray', cursor: 'pointer', marginRight: '10px' }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </span>
              ))}
            </ul>

            <Accordion type='multiple' className='animate-none'>

              {/* Price filters */}
              <AccordionItem value='price'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Price</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='flex flex-col space-y-4 capitalize'>
                    {prices.map(price => (
                      <span
                        key={price}
                        style={{ color: selectedPrice === price ? 'black' : 'gray', cursor: 'pointer', marginRight: '10px' }}
                        onClick={() => setSelectedPrice(price)}
                      >
                        {price}
                      </span>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Avaibility filter */}
              <AccordionItem value='avaibility'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Avaibility</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='flex flex-col space-y-4 capitalize'>
                    {availabilities.map(availability => (
                      <span
                        key={availability}
                        style={{ color: selectedAvailability === availability ? 'black' : 'gray', cursor: 'pointer', marginRight: '10px' }}
                        onClick={() => setSelectedAvailability(availability)}
                      >
                        {availability}
                      </span>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Product grid */}
          <ul className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {filteredData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => router.push(`/products/${encodeURIComponent(item.id)}`, undefined, { shallow: true })}
                className="group relative rounded-md overflow-hidden border shadow-md hover:shadow-lg">
                <div className="flex justify-center p-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover object-center max-w-[200px] group-hover:opacity-75 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 mt-6 bg-white">
                  <h3 className="text-sm font-semibold text-gray-800 text-left">{item.title}</h3>
                  <div className='flex justify-between items-end'>
                    <p className="mt-2 text-sm font-medium text-gray-900 text-left">Rp.{" "}{formatPrice(item.price)}</p>
                    <p className='text-sm text-left text-yellow-500 font-semibold'>{item.popularity}</p>
                  </div>
                </div>
              </button>
            ))}
          </ul>

        </div>
      </section>
    </main>
  );
}

export default Page;

