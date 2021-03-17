import React,{ useEffect,useState } from 'react';
import './app.css';
import Videolist from './component/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyC-gvv2XuxR0_gxsPCqUXPl2uwPUYfWO3A", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  

  return <Videolist videos={videos}/>;
}

export default App;
