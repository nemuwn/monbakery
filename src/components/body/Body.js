import React, { useState } from 'react';
import Menus from './Menus'
import Product from './Product'

function Body() {
    const [pro_type, setPro_type] = useState("bread");
    function settt (name){
        setPro_type(name)
    }
    return (
        <div>
            <Menus ss={settt} name={pro_type} />
            <Product name={pro_type} />
        </div>
    )
}

export default Body
