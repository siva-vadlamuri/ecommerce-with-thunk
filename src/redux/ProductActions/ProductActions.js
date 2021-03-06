import FakestoreApi from "../../_apis/FakestoreApi"
import { ACTIONS } from "../ActionTypes"
// import Fakestoreapi from "../../_apis/Fakestoreapi"

export const setProductsData = (products)=>{
    // console.log(products);
    return {
        type : ACTIONS.SET_PRODUCTS,
        payload : products,
    }
}

export const addToCart = (product)=>{
    return {
        type : ACTIONS.ADD_TO_CART,
        payload : product,
    }
}
export const fetchProductsWithOutThunk = async()=>{
       const response = await  FakestoreApi.get('/products');
       return {
           type : ACTIONS.FETCH_PRODUCTS,
           payload : response,
       }
}
export const fetchProducts = ()=>{
    


    return async (dispatch)=>{
        const response = await  FakestoreApi.get('/products');
       dispatch({
        type : ACTIONS.FETCH_PRODUCTS,
        payload : response.data,
    }) 
    }


}