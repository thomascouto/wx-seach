import { lazy } from 'react';

import { HistoryCard, Spinner, TextInput } from '@/components';
import useFetch from '@/hooks/useFetch';

import styles from './App.module.scss';

const Card = lazy(() => import('@/components/Card'));

function App() {
  const { getWeatherData, weather, isLoading } = useFetch();

  const handleData = (value: string, units: Units) => {
    getWeatherData(value);
  };

  return (
    <>
      <nav className={styles.navigation}>
        <HistoryCard theme="sunny" />
      </nav>
      <section className={styles.searchBar}>
        <TextInput action={handleData} />
      </section>
      <section className={styles.weatherSection}>
        {isLoading ? <Spinner /> : weather && <Card data={weather} />}
      </section>
    </>
  );
}

export default App;
