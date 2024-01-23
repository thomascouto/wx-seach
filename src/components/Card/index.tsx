import { getIcon } from '@/util';

import styles from './Card.module.scss';

interface CardProps {
  data: WX;
  getForecast(): void;
}

export default function Card({ data, getForecast }: CardProps) {
  const {
    name,
    weather,
    wind,
    sys: { country },
    main: { humidity, temp },
  } = data;

  const { main, description } = weather[0];

  return (
    <article className={styles.card}>
      <button className={styles.forecast} onClick={getForecast} />
      <img src={'/wx/' + getIcon(main) + '.svg'} alt="Current weather" title={description} />
      <div>
        <span className={styles.temp}>{Math.round(temp)}</span>
        <span title="Humidity">
          💧{humidity}% | {weather[0].main}
        </span>
        <span title="Wind">{`💨 ${wind.deg.toString().padStart(3, '0')}° at ${Math.round(wind.speed)}`}</span>
        <span>
          {name}, {country}
        </span>
      </div>
    </article>
  );
}
