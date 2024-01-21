import { useState } from 'react';

import { getWeatherService } from '@/services';

export default function useFetch() {
  const [weather, setWeather] = useState<WX>();
  const [error, setError] = useState<ErrorResponse>();

  const getWeatherData = (q: string) => {
    getWeatherService({
      q,
    })
      .then(setWeather)
      .catch((err: string) => {
        const parsedError = JSON.parse(err) as ErrorResponse;
        setError(parsedError);
      });
  };

  return {
    getWeatherData,
    weather,
    error,
  };
}
