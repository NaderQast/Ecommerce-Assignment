import { configureStore} from '@reduxjs/toolkit' ;
import CartSlice from './CartSlice';
import ProductSlice from './ProductSlice.jsx';

const store = configureStore({
    reducer:{
        cart : CartSlice ,
        products : ProductSlice,
    }

})

export default store ; 

