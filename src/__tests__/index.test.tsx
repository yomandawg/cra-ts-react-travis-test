import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from 'components/App';
import { store } from 'reducers';

describe('renders the App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  describe('renders the navbar', () => {
    test('logo', () => {
      const logoText = screen.getByAltText('ts-logo');
      expect(logoText).toBeInTheDocument();
    });
  });
});
