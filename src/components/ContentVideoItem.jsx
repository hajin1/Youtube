import styles from '../style/contentVideoItem.module.css';

const ContentVideoItem = ({ video: { snippet } }) => {

    return (
        <div className={styles.video}>
            <img width={'100%'} alt="thumbnail" src={snippet.thumbnails.medium.url} className="thumbnail" />
            <div className={styles.title}>
                {snippet.title}
            </div>
            <div className={styles.channel}>
                {snippet.channelTitle}
            </div>
        </div >
    )
}

export default ContentVideoItem;