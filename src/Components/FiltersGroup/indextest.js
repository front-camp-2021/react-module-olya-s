import React from "react";
import { render, screen } from "@testing-library/react";
import FiltersGroup from './index.js';

const defaultProps = {
  title: 'Filters list',
  filtersGroup: [{ title: 'one' }, { title: 'two' }]
}

describe('Filters Group', () => {
  it('should be rendered correctly', () => {
    render(<FiltersGroup {...defaultProps} />);
    const group = screen.getByRole('group');
    const list = screen.getByRole('list');
    expect(group).toBeInTheDocument();
    expect(group).toBeVisible();
    expect(list).toBeInTheDocument();
    expect(list).toBeVisible();
  });
  it('should rendered with empty props', () => {
    render(<FiltersGroup />);
    const list = getByRole('list');
    expect(list.firstChild).toEqual(null);
  });
});