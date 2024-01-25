import expandedWeather from './expanded.json';
import weather from './weather.json';

import { fireEvent, render, screen } from '@testing-library/react';

import Card from '@/components/Card';
import * as useFetch from '@/hooks/useFetch';

describe('Card tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Card data={weather} metricSystem="metric" />);

    expect(container).toMatchSnapshot();
  });

  it('should expand card', () => {
    jest.spyOn(useFetch, 'default').mockImplementation(() => ({
      getWeatherData: jest.fn(),
      weather: expandedWeather,
      isLoading: false,
      error: null,
    }));

    const { container } = render(<Card data={weather} metricSystem="metric" />);

    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    expect(btn.classList.toString()).toBe('forecast hide');
    expect(container).toMatchSnapshot();
  });
});
