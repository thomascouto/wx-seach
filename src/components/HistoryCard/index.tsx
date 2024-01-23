import clsx from 'clsx';

import { useState } from 'react';

import { getIcon } from '@/util';

import styles from './HistoryCard.module.scss';

interface HistoryCardProps {
  theme: WeatherCondition;
  location: string;
  handleClick(): void;
}

export default function HistoryCard({ theme, handleClick, location }: HistoryCardProps) {
  const [tooltip, setTooltip] = useState(false);

  const toggleTooltip = () => {
    setTooltip((prev) => !prev);
  };

  return (
    <button
      className={clsx(styles.historyCard)}
      onClick={handleClick}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <img src={'/historic/' + getIcon(theme) + '.png'} alt={theme} width="50px" />
      {tooltip && <span className={styles.tooltip}>{location}</span>}
    </button>
  );
}
