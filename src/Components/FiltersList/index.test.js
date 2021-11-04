import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FiltersList from './index.js';

const { getByRole, getAllByRole } = screen;

const initialState = {
  filters: {
    filters: {
      categories: [
        { title: 'one' },
        { title: 'two' }
      ],
      brands: [
        { title: 'three' },
        { title: 'four' }
      ]
    },
    range: {
      min: 1,
      max: 5,
      title: 'Price',
      selected: {
        from: 3,
        to: 4
      },
      reset: false
    }
  }
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Filters', () => {
  it('should be rendered correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <FiltersList />
      </Provider>)
    const heading = getByRole('heading');
    const inputs = getAllByRole('checkbox');
    const button = getByRole('button', { name: /clear all filters/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
    inputs.forEach(input => expect(input.checked).not.toEqual(true));
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});