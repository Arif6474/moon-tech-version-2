import {
  ADD_NEW_PRODUCT,
  ADD_PRODUCT,
  ADD_TO_CART,
  DELETE_PRODUCT,
  LOAD_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
} from "../actionTypes/actionTypes";

export const addProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const deleteProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const addNewProduct = (product) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: product,
  };
};

export const loadProductsData = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  }
}
export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
