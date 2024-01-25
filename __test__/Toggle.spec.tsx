import { fireEvent, render, screen } from '@testing-library/react';

import Toggle from '@/components/Toggle';

describe('Toggle tests', () => {
  it('should imperial be active', () => {
    const { container } = render(<Toggle active="imperial" handleMetricSystem={jest.fn} />);

    const [metric, imperial] = screen.getAllByRole('button');

    expect(metric.classList.length).toEqual(0);
    expect(imperial.classList.item(0)).toEqual('active');

    expect(container).toMatchSnapshot();
  });

  it('should metric be active', () => {
    const { container } = render(<Toggle active="metric" handleMetricSystem={jest.fn} />);

    const [metric, imperial] = screen.getAllByRole('button');

    expect(metric.classList.item(0)).toEqual('active');
    expect(imperial.classList.length).toEqual(0);

    expect(container).toMatchSnapshot();
  });

  it('should call handleMetricSystem on click', () => {
    const click = jest.fn();
    render(<Toggle active="metric" handleMetricSystem={click} />);

    const [metric, imperial] = screen.getAllByRole('button');

    fireEvent.click(metric);
    fireEvent.click(imperial);

    expect(click).toHaveBeenCalledTimes(2);
  });
});
