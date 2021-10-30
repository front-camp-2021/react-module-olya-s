import { render, screen } from '@testing-library/react';
import App from './App';
import FiltersList from './Components/FiltersList';
import { Provider } from 'react-redux'
import { store } from './app/store';

describe('With React Testing Library', () => {
  it('should be rendered correctly', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByRole('heading', { name: /online store/i })).toBeInTheDocument();
  });
});