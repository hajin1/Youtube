import { useCallback, useEffect, useState } from 'react';
import Contents from './components/Contents';
import Header from './components/Header';
import VideoDetail from './components/VideoDetail';
import styles from './style/app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);
  const search = useCallback((value) => {
    youtube.search(value)
      .then(videos => {
        setSelectedVideo(null);
        setVideos(videos);
      });
  }, [youtube]);

  const onLogoClick = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Header onSearch={search} onLogoClick={onLogoClick} />
      <section className={styles.content}>
        {selectedVideo && <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>}
        <div className={styles.list}>
          <Contents videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'grid' : 'list'} />
        </div>
      </section>
    </div>
  );
}

export default App;
