import { getIcon } from '@/util';

describe('Utils tests', () => {
  beforeAll(() => {
    jest.useFakeTimers({ now: new Date('2023-12-17T11:24:00') });
  });

  it('should return icon correctly', () => {
    const icon = getIcon('Clouds');

	console.log(icon);

  });
});
