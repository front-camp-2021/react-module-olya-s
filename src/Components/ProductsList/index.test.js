import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProductsList from './index.js';

const initialState = {
  products: []
}

const defaultState = {
  products: [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' }
  ]
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Products', () => {
  it('render Search component', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <ProductsList />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('render catalog of products', async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <ProductsList products={[...defaultState.products]} />
      </Provider>
    );
    expect(screen.getByText('title1')).toBeInTheDocument();
    expect(screen.getAllByText(/title/i).length).toEqual(2);
  });
  it('render catalog with empty props', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <ProductsList products={[]} />
      </Provider>
    );
    expect(screen.getByText('No products found')).toBeInTheDocument();
  });
});