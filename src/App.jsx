import { useEffect, useState } from 'react';
import Contents from './components/Contents';
import Header from './components/Header';
import styles from './style/app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState();
  const search = (value) => {
    youtube.search(value)
      .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <Contents videos={videos} />
    </div>
  );
}

export default App;
