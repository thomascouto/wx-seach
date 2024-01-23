type Units = 'metric' | 'imperial';

interface QueryProps {
  q: string;
  units?: Units;
  isForecast?: boolean;
}

type WeatherCondition =
  | 'Clouds'
  | 'CloudsNight'
  | 'CloudsDay'
  | 'Rain'
  | 'Snow'
  | 'ClearNight'
  | 'ClearDay'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});

interface ErrorResponse {
  cod: number;
  message: string;
}

interface WX {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface ForecastWX {
  cod: string;
  list: WX[];
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
