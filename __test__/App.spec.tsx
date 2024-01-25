import { render, screen } from '@testing-library/react';

import App from '@/App';
import * as useFetch from '@/hooks/useFetch';

describe('App tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    jest.spyOn(useFetch, 'default').mockImplementation(() => ({
      getWeatherData: jest.fn(),
      weather: undefined,
      isLoading: false,
      error: null,
    }));
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it('should render an error message', () => {
    jest.spyOn(useFetch, 'default').mockImplementation(() => ({
      getWeatherData: jest.fn(),
      weather: null,
      isLoading: false,
      error: { cod: 404, message: 'city not found' },
    }));

    const { container } = render(<App />);

    const h3 = screen.getByRole('heading');

    expect(h3.innerHTML).toBe('Error! city not found');
    expect(container).toMatchSnapshot();
  });

  it('should render loading', () => {
    jest.spyOn(useFetch, 'default').mockImplementation(() => ({
      getWeatherData: jest.fn(),
      weather: null,
      isLoading: true,
      error: null,
    }));

    const { container } = render(<App />);
    const loader = screen.getByTestId('loading');

    expect(container).toMatchSnapshot();
    expect(loader).toBeDefined();
  });
});
