import { useState } from 'react';

import { getWeatherService } from '@/services';

export default function useFetch<T>() {
  const [weather, setWeather] = useState<T>();
  const [error, setError] = useState<ErrorResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = ({ q, isForecast, units = 'metric' }: QueryProps) => {
    setIsLoading(true);
    getWeatherService<T>({
      q,
      units,
      isForecast,
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
