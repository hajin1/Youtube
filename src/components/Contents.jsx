import ContentVideoItem from './ContentVideoItem';
import styles from '../style/contents.module.css';

const Contents = ({ videos }) => {

    return (
        <div className={styles.list}>
            {videos && videos.map(video => <ContentVideoItem key={video.etag} video={video} />)}
        </div>
    );
}

export default Contents;