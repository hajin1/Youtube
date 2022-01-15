import '../style/contentVideoItem.css';

const ContentVideoItem = ({ video }) => {
    const snippet = video.snippet;

    return (
        <div className="item">
            <div className="thumbnail-wrapper">
                <img alt="thumbnail" src={snippet.thumbnails.medium.url} className="thumbnail" />
            </div>
            <div className='title'>
                {snippet.title}
            </div>
            <div className='channel'>
                {snippet.channelTitle}
            </div>
        </div>
    )
}

export default ContentVideoItem;