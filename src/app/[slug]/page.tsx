import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const Singlepage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-32 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages/>
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
             <h1 className='text-4xl font-medium '>Product Name</h1>
             <p className='text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum qui blanditiis aliquam, quo doloremque quam saepe accusamus ipsam fugit nemo ullam? Natus, excepturi quam neque saepe cumque a dicta nisi.
             </p>
             <div className="h-[2px] bg-gray-100" />
              <div className="flex items-center gap-4">
                <h3 className='text-xl text-gray-500 line-through'>$59</h3>
                <h2 className='font-medium text-2xl'>$40</h2>
              </div>
              <div className='h-[2px] bg-gray-100' />
              <CustomizeProducts/>
              <Add/>
             <div className="h-[2px] bg-gray-100" />
             <div className="text-sm">
              <h4 className='font-medium mb-4'>Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, enim quibusdam et laboriosam placeat necessitatibus amet, sint explicabo dicta doloremque, tempore natus suscipit id maxime quia doloribus. Dolor, at enim.

              </p>
             </div>

             <div className="text-sm">
              <h4 className='font-medium mb-4'>Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, enim quibusdam et laboriosam placeat necessitatibus amet, sint explicabo dicta doloremque, tempore natus suscipit id maxime quia doloribus. Dolor, at enim.

              </p>
             </div>

             <div className="text-sm">
              <h4 className='font-medium mb-4'>Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, enim quibusdam et laboriosam placeat necessitatibus amet, sint explicabo dicta doloremque, tempore natus suscipit id maxime quia doloribus. Dolor, at enim.

              </p>
             </div>

             
             </div>
    </div>
  )
}

export default Singlepage