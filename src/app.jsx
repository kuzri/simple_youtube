import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';
import Videolist from './component/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback((query) => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (<div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>)}
        <div className={styles.list}>
          <Videolist videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  )
}

export default App;
