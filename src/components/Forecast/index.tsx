import { useEffect } from 'react';

import { Spinner } from '@/components';
import useFetch from '@/hooks/useFetch';
import { getIcon } from '@/util';

import styles from './Forecast.module.scss';

interface ForecastProps {
  location?: string;
  units: Units;
}

function removeDuplicates(list: WX[]) {
  const singleDateForecast = new Map<string, WX>();
  const [currentDate] = new Date().toISOString().split('T');

  list.forEach((wx) => {
    const [date] = wx.dt_txt.split(' ');
    if (date !== currentDate && !singleDateForecast.has(date)) {
      singleDateForecast.set(date, wx);
    }
  });

  return Array.from(singleDateForecast.entries());
}

export default function Forecast({ location, units }: ForecastProps) {
  const { getWeatherData, weather } = useFetch<ForecastWX>();

  useEffect(() => {
    if (location?.length) {
      getWeatherData({ q: location, isForecast: true, units });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (weather) {
    const { list } = weather;
    const nextDayForecast = removeDuplicates(list);

    return (
      <article className={styles.forecastWeather}>
        {nextDayForecast.map(([date, wx]) => (
          <div className={styles.forecastData} key={date}>
            <span>{date}</span>
            <img
              alt={`Wind ${wx.wind.deg}° at ${wx.wind.speed}`}
              src="/arrow.png"
              style={{ rotate: `${wx.wind.deg}deg`, width: '15px' }}
            />
            <span>
              <img src="/hot-temp.png" width={20} />
              {Math.round(wx.main.temp_max)}°
            </span>
            <span>
              <img src="/low-temp.png" width={20} />
              {Math.round(wx.main.temp_min)}°
            </span>
            <span>💧{wx.main.humidity}%</span>
            <img src={'/wx/' + getIcon(wx.weather[0].main) + '.svg'} width="160px" alt="Weather" />
            <span className={styles.temperature}>{Math.round(wx.main.temp)}°</span>
          </div>
        ))}
      </article>
    );
  }

  return <Spinner />;
}
