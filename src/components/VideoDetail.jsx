import { memo } from 'react';
import styles from '../style/videoDetail.module.css';

const VideoDetail = memo(({ video, video: { snippet } }) => {
    return (
        <section className={styles.detail}>
            <iframe
                className={styles.video}
                width="100%"
                height="500px"
                title={snippet.title}
                id="ytplayer" type="text/html"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
        </section >
    );
});

export default VideoDetail;