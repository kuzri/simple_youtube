class YoutubeFetch {
    constructor(key){
        this.key = key;

        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){
        const response = await (
          fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&key=${this.key}`, this.getRequestOptions));
          const result = await response.json();
          return result.items;
    }

    async search(query){
        const response = await (
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`, this.getRequestOptions));
        const result = await response.json();
        return result.items; //result.items.map(item=>({...item, id: item.id.videoId}))
    }
}

export default YoutubeFetch;