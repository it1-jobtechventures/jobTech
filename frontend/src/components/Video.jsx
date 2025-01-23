    // import React, { useEffect, useState } from 'react';
    // import axios from 'axios';
    // import ReactPlayer from 'react-player';

    // const Video = () => {
    //     const [latestVideo, setLatestVideo] = useState(null);

    //     const fetchLatestVideo = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:4000/api/videoUrl/all');
    //             console.log(res.data)
    //             if (res.data.success) {
    //                 // Sort videos by uploadDate (assuming ISO date format) and pick the latest
    //                 const sortedVideos = res.data.data.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    //                 setLatestVideo(sortedVideos[0]); // Set the most recent video
    //             } else {
    //                 console.error('Error fetching videos');
    //             }
    //         } catch (error) {
    //             console.error('Error:', error.message);
    //         }
    //     };

    //     useEffect(() => {
    //         fetchLatestVideo();
    //     }, []);

    // return (
    //     <div className="flex justify-center items-center p-4 h-[36rem] ">
    //         {latestVideo ? (
    //             <ReactPlayer url={latestVideo.url} controls width="100%" height="100%" config={{file: { attributes: {controlsList: 'nodownload',},},}}/>
    //         ) : (
    //             <p>Loading the latest video...</p>
    //         )}
    //     </div>
    // );
    // };

    // export default Video;
    
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import ReactPlayer from 'react-player';
    
    const Video = ({url}) => {
        const [latestVideo, setLatestVideo] = useState(null);
    
        const convertToEmbedUrl = (url) => {
            if (url.includes('youtu.be')) {
                const videoId = url.split('/').pop().split('?')[0];
                return `https://www.youtube.com/embed/${videoId}`;
            } else if (url.includes('youtube.com/watch')) {
                const videoId = new URL(url).searchParams.get('v');
                return `https://www.youtube.com/embed/${videoId}`;
            }
            return url;
        };
    
        const fetchLatestVideo = async () => {
            try {
                const res = await axios.get(`${url}/api/videoUrl/all`);
                if (res.data.success) {
                    // Sort videos by createdAt and pick the latest
                    const sortedVideos = res.data.data.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                    const latest = sortedVideos[0];
                    // Convert URL to embeddable format if necessary
                    latest.url = convertToEmbedUrl(latest.url);
                    setLatestVideo(latest);
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
            <div className="flex justify-center items-center p-4 ">
                {latestVideo ? (
                    <ReactPlayer
                        url={latestVideo.url}
                        controls
                        width="100%"
                        height="100%"
                        config={{
                            file: {
                                attributes: {
                                    controlsList: 'nodownload',
                                },
                            },
                        }}
                    />
                ) : (
                    <p>Loading the latest video...</p>
                )}
            </div>
        );
    };
    
    export default Video;
    