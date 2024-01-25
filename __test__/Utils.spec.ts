import { getIcon } from '@/util';

describe('Utils tests', () => {
  afterAll(() => {
    jest.clearAllTimers();
  });

  it('should return icon correctly if day', () => {
    jest.useFakeTimers({ now: new Date('2023-12-17T12:24:00') });
    expect(getIcon('Clouds')).toBe('cloudy-day');
  });

  it('should return icon correctly if night', () => {
    jest.useFakeTimers({ now: new Date('2023-12-17T18:24:00') });
    expect(getIcon('Clouds')).toBe('cloudy-night');
  });
});
