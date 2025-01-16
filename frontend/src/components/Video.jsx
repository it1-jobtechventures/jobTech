import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const Video = () => {
    const [latestVideo, setLatestVideo] = useState(null);

    const fetchLatestVideo = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/videoUrl/all');
            if (res.data.success) {
                // Sort videos by uploadDate (assuming ISO date format) and pick the latest
                const sortedVideos = res.data.data.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
                setLatestVideo(sortedVideos[0]); // Set the most recent video
            } else {
                console.error('Error fetching videos');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    useEffect(() => {
        fetchLatestVideo();
    }, []);

  return (
    <div className="flex justify-center items-center p-4 h-[36rem] ">
        {latestVideo ? (
            <ReactPlayer url={latestVideo.url} controls width="100%" height="100%" config={{file: { attributes: {controlsList: 'nodownload',},},}}/>
        ) : (
            <p>Loading the latest video...</p>
        )}
    </div>
  );
};

export default Video;
