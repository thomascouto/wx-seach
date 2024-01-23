import { useState } from 'react';

import { getWeatherService } from '@/services';

export default function useFetch<T>() {
  const [weather, setWeather] = useState<T>();
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = ({ q, isForecast, units = 'metric' }: QueryProps) => {
    setIsLoading(true);
    getWeatherService<T>({
      q,
      units,
      isForecast,
    })
      .then((res) => {
        setWeather(res);
        setError(null);
      })
      .catch(({ message }: Error) => {
        const parsedError = JSON.parse(message) as ErrorResponse;
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
