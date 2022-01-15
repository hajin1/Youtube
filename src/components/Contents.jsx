import axios from 'axios';
import { useEffect, useState } from 'react';
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from '../consts/consts';
import ContentVideoItem from './ContentVideoItem';
import '../style/contents.css';

const MAX_RESULT = 25;

const Contents = () => {
    const [videoList, setVideoList] = useState();

    useEffect(() => {
        const config = {
            method: 'get',
            url: `${YOUTUBE_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=${MAX_RESULT}&key=${YOUTUBE_API_KEY}`,
            headers: {}
        };

        axios(config)
            .then(({ data }) => {
                setVideoList(data.items);
                console.log(data.items);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className='list'>
            {videoList && videoList.map(video => <ContentVideoItem video={video} />)}
        </div>
    );
}

export default Contents;