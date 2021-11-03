import React from 'react';
import Search from './index.js';
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('<Search /> tests', () => {
  const { getByRole } = screen;
  it('should be rendered correctly', () => {
    render(<Provider store={store} ><Search /></Provider>);
    const search = getByRole('textbox', { name: '' });
    expect(search).toBeInTheDocument();
    expect(search.value).toEqual('');
  })
});