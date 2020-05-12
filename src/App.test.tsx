import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from './actions/products';
import productReducer, {initialState, IAction} from './reducers/products';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4);
});


describe('product reducers', () => {
  it('fetch products request', () => {
    const action = {
      type: FETCH_PRODUCTS,
    };
    expect(productReducer(initialState, action as IAction)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('fetch products success', () => {
    const action = {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: {
        result: [1, 2],
        entities: {product: {
          1: {name: 'test product', price: 300, id: '1'},
          2: {name: 'test product', price: 300, id: '2'},
        }},
      },
    };
    expect(productReducer(initialState, action)).toEqual({
      ...initialState,
      products: action.payload.entities.product,
      productList: action.payload.result as number[],
      isLoading: false,
    });
  });
});
