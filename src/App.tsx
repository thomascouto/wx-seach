import { lazy, useEffect, useState } from 'react';

import { HistoryCard, Spinner, TextInput } from '@/components';
import useFetch from '@/hooks/useFetch';

import styles from './App.module.scss';

const Card = lazy(() => import('@/components/Card'));

function App() {
  const { getWeatherData, weather, isLoading, error } = useFetch();
  const [searchHistory, setSearchHistory] = useState<Record<number, WX>>({});

  useEffect(() => {
    if (weather) {
      setSearchHistory((curr) => ({
        [weather.id]: weather,
        ...curr,
      }));
    }
  }, [weather]);

  const handleWeather = (value: string | WX, units?: Units) => {
    getWeatherData(value, units);
  };

  const handleForecast = () => {
    console.log('hi');
  };

  const ErrorMessage = error && <h3>Error! {error.message}</h3>;
  const FetchedData = weather && <Card data={weather} getForecast={handleForecast} />;

  return (
    <>
      <nav className={styles.navigation}>
        {Object.values(searchHistory).map((wx) => (
          <HistoryCard
            key={wx.id}
            theme={wx.weather[0].main}
            location={wx.name}
            handleClick={() => {
              handleWeather(wx);
            }}
          />
        ))}
      </nav>

      <section className={styles.searchBar}>
        <TextInput action={handleWeather} />
      </section>
      <section className={styles.weatherSection}>
        {isLoading ? <Spinner /> : FetchedData ?? ErrorMessage}
      </section>
    </>
  );
}

export default App;
