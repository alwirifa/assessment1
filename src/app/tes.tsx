// "use client"

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion'
// import { useState } from "react";
// import products from "@/db/data"


// const categoryFilter = [
//   { name: 'T-Shirts', selected: false, href: '#' },
//   { name: 'Perfume', selected: true, href: '#' },
//   { name: 'Shoes', selected: false, href: '#' },
// ]




// const avaibilityFilters = {
//   id: 'avaibility',
//   name: 'Avaibility',
//   options: [
//     { value: 'S', label: 'S' },
//     { value: 'M', label: 'M' },
//     { value: 'L', label: 'L' },
//   ],
// } as const

// export default function Home() {

//   return (
//     <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//       <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
//         <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
//           Ecommerce.id
//         </h1>
// {/* 
//         <div className='flex items-center'>
//           <div></div>

//           <button className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'>
//             <Filter className='h-5 w-5' /> filter
//           </button>
//         </div> */}
//       </div>

//       <section className='pb-24 pt-6'>
//         <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>

//           {/* Catergory Filters */}
//           <div className='hidden lg:block'>
//             <ul className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'>
//               {categoryFilter.map((category) => (
//                 <li key={category.name}>
//                   <button
//                     disabled={!category.selected}
//                     className='disabled:cursor-not-allowed disabled:opacity-60'>
//                     {category.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <Accordion type='multiple' className='animate-none'>

//               {/* Price filters */}
//               <AccordionItem value='price'>
//                 <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
//                   <span className='font-medium text-gray-900'>Price</span>
//                 </AccordionTrigger>

//                 <AccordionContent className='pt-6 animate-none'>
//                   <ul className='space-y-4'>
                  
//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>

//               {/* Avaibility filter */}
//               <AccordionItem value='avaibility'>
//                 <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
//                   <span className='font-medium text-gray-900'>Avaibility</span>
//                 </AccordionTrigger>

//                 <AccordionContent className='pt-6 animate-none'>
//                   <ul className='space-y-4'>

//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>

//           </div>

//           {/* Product grid */}
//           <ul className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />
//             <Products name={""} size={""} price={0} imageUrl={""} />

//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }
