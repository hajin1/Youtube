import { useCallback, useEffect, useState } from 'react';
import Contents from './components/Contents';
import Header from './components/Header';
import VideoDetail from './components/VideoDetail';
import styles from './style/app.module.css';

let nextToken = '';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [target, setTarget] = useState(null);

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
    youtube.mostPopular().then(({ videos, nextPageToken }) => {
      setVideos(videos);
      nextToken = nextPageToken;
    });
  }, [youtube]);

  const getMoreVideos = async () => {
    if (nextToken) {
      const { videos, nextPageToken } = await youtube.mostPopular(nextToken);
      setVideos((items) => [...items, ...videos]);
      nextToken = nextPageToken;
    }
  };

  useEffect(() => {
    let observer;
    if (target && nextToken) {
      observer = new IntersectionObserver(async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await getMoreVideos();
          observer.observe(entry.target);
        }
      }, {});
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, videos]);

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
      {videos && <div style={{ width: '1px', height: '1px' }} ref={setTarget} className={'targetElement'}></div>}
    </div>
  );
}

export default App;
