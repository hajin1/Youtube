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

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                q: query,
                maxResults: MAX_RESULT
            },
        });
        return response.data.items.map((item => ({ ...item, id: item.id.videoId })));
    };

}

export default Youtube;