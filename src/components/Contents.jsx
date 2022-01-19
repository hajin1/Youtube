import axios from 'axios';
import { useEffect, useState } from 'react';
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from '../consts/consts';
import ContentVideoItem from './ContentVideoItem';
import '../style/contents.css';

const MAX_RESULT = 25;

const Contents = () => {
    const [videos, setVideos] = useState();

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
        <div className='list'>
            {videos && videos.map(video => <ContentVideoItem key={video.id} video={video} />)}
        </div>
    );
}

export default Contents;