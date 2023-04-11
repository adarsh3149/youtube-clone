import React from 'react';
// import './VideoDetails.css';

function VideoDetails({ videoDetails }) {
  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const { snippet } = videoDetails;

  return (
    <div className="video-details-container">
      <div className="video-container">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${videoDetails.id}`}
        />
      </div>
      <div className="video-info">
        <h1>{snippet.title}</h1>
        <p>{snippet.channelTitle}</p>
        <p>{snippet.publishedAt}</p>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetails;
