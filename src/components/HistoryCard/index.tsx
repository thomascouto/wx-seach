import clsx from 'clsx';

import styles from './HistoryCard.module.scss';

interface HistoryCardProps {
  theme: 'sunny' | 'rainy' | 'storm' | 'windy' | 'snowing';
}

export default function HistoryCard({ theme }: HistoryCardProps) {
  return (
    <div className={clsx(styles.historyCard, styles[theme])}>
      <img src={`/historic/${theme}.png`} alt={theme} width="50px" />
    </div>
  );
}
