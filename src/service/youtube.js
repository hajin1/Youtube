const MAX_RESULT = 25;
class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular(nextToken) {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: MAX_RESULT,
                pageToken: nextToken || ''
            },
        });
        return { videos: response.data.items, nextPageToken: response.data.nextPageToken };
    };

    async search(query, nextToken) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                q: query,
                maxResults: MAX_RESULT,
                type: 'video',
                pageToken: nextToken || ''
            },
        });
        const videos = response.data.items.map((item => ({ ...item, id: item.id.videoId })));
        return { videos, nextPageToken: response.data.nextPageToken };
    };

}

export default Youtube;