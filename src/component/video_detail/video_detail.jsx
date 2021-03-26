import React from 'react';
import styles from './video_detail.module.css'


const VideoDetail = ({ video, video: { snippet } }) => (
    <section className={styles.detail}>
        <iframe
            className={styles.video}
            type="text/html"
            title="youtube video player"
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0" allowFullScreen>
        </iframe>
        <h2>{snippet.title}</h2>
        <h2>{snippet.channelTitle}</h2>
        <pre className={styles.description}>{snippet.description}</pre>

    </section>
);

export default VideoDetail;