import axios from 'axios';

class Youtube {
    constructor(key){
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: {key: key},
        });
    }

    async mostPopular(){
        const response = await this.youtube.get('videos',{
            params:{
                part:'snippet',
                chart:'mostPopular',
                maxResults:25,
            },
        })
        // const response = await (
        //   fetch(`search?part=snippet&maxResults=25&chart=mostPopular&key=${this.key}`, this.getRequestOptions));
        // const result = await response.json();
        return response.data.items;
    }

    async search(query){
        const response = await this.youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:25,
                type:'video',
                q:query,
            },
        })
        // const response = await (
        //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`, this.getRequestOptions));
       // const result = await response.json();
        return response.data.items; //result.items.map(item=>({...item, id: item.id.videoId}))
    }
}

export default Youtube;