import React, { createContext} from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContaxt = createContext(null);



const ShopCantaxtProvider = (props) =>{

    

    

    
    
    
    
    const contaxtValue = { all_product}
    

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;