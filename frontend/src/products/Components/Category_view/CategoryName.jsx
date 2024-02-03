import React from 'react'
import Product from '../product_view/Product/Product'

function category_name(prop) {
  return (
    <div className='space-y-7'>
      <div class="box-content h-3 w-32 p-4 border-4 bg-white rounded  content-center">
        <p   >
          {prop.name}
        </p>



      </div>
      <div className='space-y-4'>
        <Product path='frontend\src\products\Components\product_view\images\Apple.jpeg' Deatils='jhvjvcuvcug c j' />
        <Product path='frontend\src\products\Components\product_view\images\Apple.jpeg' Deatils='jhvjvcuvcug c j' />
        <Product path='frontend\src\products\Components\product_view\images\Apple.jpeg' Deatils='jhvjvcuvcug c j' />
        <Product path='frontend\src\products\Components\product_view\images\Apple.jpeg' Deatils='jhvjvcuvcug c j' />
      </div>
    </div>

  )
}

export default category_name