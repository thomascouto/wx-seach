import { URL_CURRENT, URL_FORECAST } from '@/util/constants';

async function getWeatherService<T>({ q, units = 'metric', isForecast }: QueryProps) {
  const params = new URLSearchParams({
    q,
    units,
    APPID: import.meta.env.VITE_ACCESS_KEY as string,
  });

  const url = isForecast ? URL_FORECAST : URL_CURRENT;

  const request = await fetch(url + params.toString(), {
    method: 'GET',
  });

  const response = (await request.json()) as unknown;

  if (request.ok) {
    return response as Promise<T>;
  }

  throw new Error(JSON.stringify(response));
}

export { getWeatherService };
