import { useEffect, useState } from 'react';
import Contents from './components/Contents';
import Header from './components/Header';
import VideoDetail from './components/VideoDetail';
import styles from './style/app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search = (value) => {
    youtube.search(value)
      .then(videos => {
        setSelectedVideo(null);
        setVideos(videos);
      });
  };
  const onLogoClick = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, []);

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
