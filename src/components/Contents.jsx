import axios from 'axios';
import { useEffect, useState } from 'react';
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from '../consts/consts';
import ContentVideoItem from './ContentVideoItem';
import styles from '../style/contents.module.css';

const MAX_RESULT = 25;

const Contents = ({ searchWord }) => {
    const [videos, setVideos] = useState();

    useEffect(() => {
        const url = (searchWord) ?
            `${YOUTUBE_API_URL}/search?part=snippet&maxResults=${MAX_RESULT}&q=${searchWord}&key=${YOUTUBE_API_KEY}`
            : `${YOUTUBE_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=${MAX_RESULT}&key=${YOUTUBE_API_KEY}`
        const config = {
            method: 'get',
            url: url,
            headers: {}
        };

        axios(config)
            .then(({ data }) => {
                setVideos(data.items);
            })
            .catch((error) => {
                console.log(error);
            });

        return (() => {
            setVideos([]);
        });
    }, [searchWord]);

    return (
        <div className={styles.list}>
            {videos && videos.map(video => <ContentVideoItem key={video.etag} video={video} />)}
        </div>
    );
}

export default Contents;