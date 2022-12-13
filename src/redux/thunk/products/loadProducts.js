import { loadProductsData } from "../../actions/productAction"

const loadProducts = () => {
    return async(dispatch, getState) => {
     const res = await fetch('http://localhost:5000/products')
     const data = await res.json()
     if(data.data.length) {
        dispatch(loadProductsData(data.data))
     }
    }
}

export default loadProducts;