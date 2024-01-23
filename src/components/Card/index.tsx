import { ForecastCard } from '..';
import clsx from 'clsx';

import { useState } from 'react';

import { getIcon } from '@/util';

import styles from './Card.module.scss';

interface CardProps {
  data: WX;
  metricSystem: Units;
}

export default function Card({ data, metricSystem }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    name,
    weather,
    wind,
    sys: { country },
    main: { humidity, temp },
  } = data;

  const handleForecast = () => {
    setIsExpanded((prev) => !prev);
  };

  const { main, description } = weather[0];

  return (
    <>
      <div className={styles.header}>
        {name}, {country}
        <button
          className={clsx(styles.forecast, isExpanded ? styles.hide : styles.expand)}
          onClick={handleForecast}
        />
      </div>
      <article className={styles.card}>
        <img src={'/wx/' + getIcon(main) + '.svg'} alt="Current weather" title={description} />
        <div className={styles.info}>
          <span className={styles.temp}>{Math.round(temp)}°</span>
          <span title="Humidity">
            💧{humidity}% | {weather[0].main}
          </span>
          <span title="Wind">{`💨 ${wind.deg.toString().padStart(3, '0')}° at ${Math.round(wind.speed)}`}</span>
        </div>
      </article>
      {isExpanded && <ForecastCard location={name} units={metricSystem} />}
    </>
  );
}
