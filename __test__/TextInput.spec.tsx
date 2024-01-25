import { fireEvent, render, screen } from '@testing-library/react';

import TextInput from '@/components/TextInput';
import ToggleButtons from '@/components/Toggle';

const RenderInput = (action = jest.fn) =>
  render(
    <TextInput action={action}>
      <ToggleButtons handleMetricSystem={jest.fn} active="imperial" />
    </TextInput>,
  );

describe('TextInput tests', () => {
  it('should render correctly ', () => {
    const { container } = RenderInput();

    expect(container).toMatchSnapshot();
  });

  it('should call action on enter', () => {
    const action = jest.fn();
    RenderInput(action);

    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(action).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: 'chicago' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(action).toHaveBeenCalledTimes(1);
  });
});
