import { useEffect, useState } from 'react';
import axios from 'axios';
import Contents from './components/Contents';
import Header from './components/Header';
import styles from './style/app.module.css';
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from './consts/consts';
const MAX_RESULT = 25;

const App = () => {
  const [videos, setVideos] = useState();
  const search = (value) => {
    const config = {
      method: 'get',
      url: `${YOUTUBE_API_URL}/search?part=snippet&maxResults=${MAX_RESULT}&q=${value}&type=video&key=${YOUTUBE_API_KEY}`,
      headers: {}
    };
    axios(config)
      .then(({ data }) =>
        data.items.map((item => ({ ...item, id: item.id.videoId })))
      )
      .then((result) => {
        setVideos(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const config = {
      method: 'get',
      url: `${YOUTUBE_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=${MAX_RESULT}&key=${YOUTUBE_API_KEY}`,
      headers: {}
    };
    axios(config)
      .then(({ data }) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <Contents videos={videos} />
    </div>
  );
}

export default App;
