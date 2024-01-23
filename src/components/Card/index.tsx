import styles from './Card.module.scss';

interface CardProps {
  data: WX;
}

function getIcon(weatherCondition: string) {}

export default function Card({ data }: CardProps) {
  console.log(data);

  const {
    name,
    weather,
    wind,
    sys: { country },
    main: { humidity, temp },
  } = data;

  const handleForecast = () => {};

  return (
    <article className={styles.card}>
      <button className={styles.forecast} onClick={handleForecast} />
      <img src="/wx/cloudy-day.svg" alt="Weather" />
      <div>
        <span className={styles.temp}>{Math.round(temp)}</span>
        <span>
          💧{humidity}% | {weather[0].main}
        </span>
        <span>{`💨 ${wind.deg.toString().padStart(3, '0')}° at ${Math.round(wind.speed)}`}</span>
        <span>
          {name}, {country}
        </span>
      </div>
    </article>
  );
}
