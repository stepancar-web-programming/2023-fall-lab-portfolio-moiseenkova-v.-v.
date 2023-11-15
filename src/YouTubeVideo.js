import React from 'react';

const YouTubeVideo = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;
