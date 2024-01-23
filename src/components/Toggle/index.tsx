import clsx from 'clsx';

import styles from './Toggle.module.scss';

interface ToggleProps {
  handleMetricSystem(system: Units): void;
  active: Units;
}

export default function Toggle({ handleMetricSystem, active }: ToggleProps) {
  return (
    <div className={styles.toggleButtons}>
      <button
        className={clsx(active === 'metric' && styles.active)}
        onClick={() => {
          handleMetricSystem('metric');
        }}
      >
        °C
      </button>
      <button
        className={clsx(active === 'imperial' && styles.active)}
        onClick={() => {
          handleMetricSystem('imperial');
        }}
      >
        °F
      </button>
    </div>
  );
}
