const BASE = 'https://api.openweathermap.org/data/2.5/';
export const URL_FORECAST = BASE + '/forecast?';
export const URL_CURRENT = BASE + '/weather?';

export const WEATHER_ICON: Record<WeatherCondition, string> = {
  Clouds: 'cloudy',
  CloudsNight: 'cloudy-night',
  CloudsDay: 'cloudy-day',
  Rain: 'rainy',
  Drizzle: 'drizzle',
  Snow: 'snowy',
  Mist: 'mist',
  ClearNight: 'night',
  ClearDay: 'day',
};
