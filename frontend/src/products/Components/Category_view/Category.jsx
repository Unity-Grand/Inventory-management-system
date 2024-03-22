import React from 'react';
import CategoryName from './CategoryName';



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
