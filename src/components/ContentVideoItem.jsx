import { memo } from 'react';
import styles from '../style/contentVideoItem.module.css';

const ContentVideoItem = memo(({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <div className={`${styles.video} ${displayType}`} onClick={() => onVideoClick(video)}>
            <img width={'100%'} alt="thumbnail" src={snippet.thumbnails.medium.url} className="thumbnail" />
            <div className={styles.title}>
                {snippet.title}
            </div>
            <div className={styles.channel}>
                {snippet.channelTitle}
            </div>
        </div >
    );
});

export default ContentVideoItem;