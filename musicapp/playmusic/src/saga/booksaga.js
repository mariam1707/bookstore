import {takeEvery, call, put, select} from 'redux-saga/effects';
import axios from "axios";

import {FETCH_BOOKS_REQUEST, fetchBooksSuccess, fetchBooksError } from '../actions/fetchBooks';
import {FETCH_TO_CART, addToCart,SAGA_REMOVE_FROM_CART,removeFromCart} from '../actions/cart';

export function* fetchBooks (){
    let options = {
     url:'https://api.myjson.com/bins/1cn7jk',
     method: 'get'
    };
    try {
        const response = yield call(axios,options);       
        yield put(fetchBooksSuccess(response.data));
    } catch (error) {
        const message = error.name + ' ' + error.message;
        yield put(fetchBooksError(message));
    }
}

export function* cartReduce({payload}){
    try {
        const {cart,cart:{price,amount,cartitem}} = yield select(state => state);        
                
        let newAmount = amount + 1;
        let newPrice = price + payload.price;
      
        const newCart = {
           ...cart,
           amount: newAmount,
           price: newPrice,           
           cartitem: [...cartitem,payload]
        }
        
        yield put(addToCart(newCart));

    } catch (error) {
        console.log(error);
    }
}
export function* removeFromCartSaga({payload}){
    try {
        const {cart,cart:{price,amount,cartitem}} = yield select(state => state);     

        let newAmount = amount - 1;
        let newPrice = price;
        newPrice -= +cartitem[payload].price;
        cartitem.splice(payload,1);

        const newCart = {
            ...cart,
            cartitem,
            price: newPrice,
            amount: newAmount
        }

         yield put(removeFromCart(newCart))

    } catch (error) {
        console.log('Alarm! Saga error: ',error);
    }
}


export default function* booksSaga() {
    yield takeEvery(FETCH_BOOKS_REQUEST,fetchBooks); 
    yield takeEvery(FETCH_TO_CART,cartReduce)   
    yield takeEvery(SAGA_REMOVE_FROM_CART,removeFromCartSaga)
}
