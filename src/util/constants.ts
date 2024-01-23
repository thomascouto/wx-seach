const BASE = 'https://api.openweathermap.org/data/2.5/';
export const URL_FORECAST = BASE + '/forecast';
export const URL = BASE + '/weather?';

//?q=fortaleza&units=metric&APPID=99adcb0d8d1c94dc2e7f5457a36cf251

export const WEATHER_ICON: Record<WeatherCondition, string> = {
  Clouds: 'cloudy',
  CloudsNight: 'cloudy-night',
  CloudsDay: 'cloudy-day',
  Rain: 'rainy',
  Snow: 'snowy',
  Mist: 'snowy',
  ClearNight: 'night',
  ClearDay: 'day',
};
