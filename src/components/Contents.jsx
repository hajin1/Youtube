import ContentVideoItem from './ContentVideoItem';
import styles from '../style/contents.module.css';

const Contents = ({ videos, onVideoClick, display }) => {

    return (
        <div className={styles.list}>
            {videos && videos.map(video => <ContentVideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />)}
        </div>
    );
}

export default Contents;