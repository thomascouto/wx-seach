import { useState } from 'react';

import { getWeatherService } from '@/services';

export default function useFetch() {
  const [weather, setWeather] = useState<WX>();
  const [error, setError] = useState<ErrorResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = (q: string | WX, units: Units = 'metric') => {
    if (typeof q === 'object') {
      setWeather(q);
      return;
    }

    setIsLoading(true);
    getWeatherService({
      q,
      units,
    })
      .then(setWeather)
      .catch((err: string) => {
        const parsedError = JSON.parse(err) as ErrorResponse;
        setError(parsedError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    getWeatherData,
    weather,
    isLoading,
    error,
  };
}
