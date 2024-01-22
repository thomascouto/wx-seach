import styles from './Card.module.scss';

interface CardProps {
  data: WX;
}

export default function Card({ data }: CardProps) {
  console.log(data);

  const {
    name,
    weather,
    wind,
    sys: { country },
    main: { humidity, temp },
  } = data;

  return (
    <article className={styles.card}>
      <img src="/wx/cloudy-night.svg" />
      <div>
        <span className={styles.temp}>{Math.round(temp)}</span>
        <span>
          💧{humidity}% | {weather[0].main}
        </span>
        <span>
          {name}, {country}
        </span>
      </div>
    </article>
  );
}
