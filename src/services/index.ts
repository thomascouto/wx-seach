import { URL as serviceURL } from '@/util/constants';

async function getWeatherService({ q, units = 'metric' }: QueryProps) {
  const params = new URLSearchParams({
    q,
    units,
    APPID: import.meta.env.VITE_ACCESS_KEY as string,
  });

  const request = await fetch(serviceURL + params.toString(), {
    method: 'GET',
  });

  const response = (await request.json()) as unknown;

  if (request.ok) {
    return response as Promise<WX>;
  }

  throw new Error(JSON.stringify(response));
}

export { getWeatherService };
