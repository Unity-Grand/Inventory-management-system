import React from 'react'

function Product(prop) {

  return (
    <div className='flex gap-4'>
      <div class="bg-slate-500">
        <img class="object-scale-down h-24 w-20 " src={prop.path} />
      </div>
      <div>
        <p>
          {prop.Deatils}
        </p>
      </div>



    </div>
  )
}

export default Product
