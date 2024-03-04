import React from 'react';
import CategoryName from './CategoryName';
import Product from '../product_view/Product/Product';


function Category(prop) {
    return (
        <div className="grid grid-flow-row auto-rows-max grid-cols-5 gap-3 rounded">

            <div>
                {<CategoryName name={prop.name} />}
            </div>



        </div>
    );
}

export default Category;
