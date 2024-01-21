import { Suspense } from 'react';

import { Card, TextInput } from '@/components';
import useFetch from '@/hooks/useFetch';

import styles from './App.module.scss';

function App() {
  const { getWeatherData, weather, error } = useFetch();

  return (
    <>
      <section className={styles.searchBar}>
        <h1>Weather Search</h1>

        <TextInput action={getWeatherData} />
      </section>
      <Suspense fallback={<h1>Loading...</h1>}>
        <section className={styles.weatherSection}>
          <Card />
          <Card />
          <Card />
        </section>
      </Suspense>
    </>
  );
}

export default App;
