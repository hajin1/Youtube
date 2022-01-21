import axios from "axios";
const MAX_RESULT = 25;
export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3`;
class Youtube {
    constructor(key) {
        this.key = key;

        this.getRequestOptions = {
            method: 'get',
            headers: {}
        };
    }

    async mostPopular() {
        const { data } = await axios({
            url: `${YOUTUBE_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=${MAX_RESULT}&key=${this.key}`,
            ...this.getRequestOptions
        });
        return data.items;
    };

    async search(query) {
        const { data } = await axios({
            url: `${YOUTUBE_API_URL}/search?part=snippet&maxResults=${MAX_RESULT}&q=${query}&type=video&key=${this.key}`,
            ...this.getRequestOptions
        });
        return data.items.map((item => ({ ...item, id: item.id.videoId })));
    };

}

export default Youtube;