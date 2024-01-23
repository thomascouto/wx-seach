import clsx from 'clsx';

import { lazy, useEffect, useState } from 'react';

import { HistoryCard, Spinner, TextInput, ToggleButtons } from '@/components';
import useFetch from '@/hooks/useFetch';

import styles from './App.module.scss';

const Card = lazy(() => import('@/components/Card'));

function App() {
  const { getWeatherData, weather, isLoading, error } = useFetch<WX>();
  const [searchHistory, setSearchHistory] = useState<Record<number, WX>>({});
  const [currentWeather, setCurrentWeather] = useState<WX>();
  const [metricSystem, setMetricSystem] = useState<Units>('metric');

  useEffect(() => {
    if (weather) {
      setCurrentWeather(weather);
      setSearchHistory((curr) => ({
        [weather.id]: weather,
        ...curr,
      }));
    }
  }, [weather]);

  const handleWeather = (props: QueryProps) => {
    getWeatherData({
      ...props,
      units: metricSystem,
    });
  };

  const ErrorMessage = error && <h3>Error! {error.message}</h3>;
  const FetchedData = currentWeather && <Card data={currentWeather} metricSystem={metricSystem} />;

  return (
    <>
      <nav className={styles.navigation}>
        {Object.values(searchHistory).map((q) => (
          <HistoryCard
            key={q.id}
            theme={q.weather[0].main}
            location={q.name}
            handleClick={() => {
              setCurrentWeather(q);
            }}
          />
        ))}
      </nav>

      <section className={styles.searchBar}>
        <TextInput
          action={(q) => {
            handleWeather({ q });
          }}
        >
          <ToggleButtons handleMetricSystem={setMetricSystem} active={metricSystem} />
        </TextInput>
      </section>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={clsx(!error ? styles.weatherSection : styles.error)}>
          {FetchedData ?? ErrorMessage}
        </section>
      )}
    </>
  );
}

export default App;
