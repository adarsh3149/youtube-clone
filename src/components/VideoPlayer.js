import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { Box } from '@mui/material';

function VideoPlayer() {
  const { videoId } = useParams();

  return (
    <div className="video-player-container">
      <Box className="video-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls={true}
        />
      </Box>
    </div>
  );
}

export default VideoPlayer;
