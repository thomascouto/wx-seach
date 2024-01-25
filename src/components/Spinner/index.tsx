import styles from './Spinner.module.scss';

export default function Spinner() {
  return <div data-testid="loading" className={styles.loader} />;
}
