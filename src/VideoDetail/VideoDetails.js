import React, { useEffect, useState } from 'react';

const VideoDetails = () => {
    const [video, setVideo] = useState({});


    //get request to get video ,filtered by id, from database
    useEffect(() => {
        let data = {
            link:'http'
        }
        setVideo(data)
    },[])


    return (
        <div className='py-10'>
            <p className='text-6xl py-10'>{video.link}</p>
            <p>Hello</p>
        </div>
    );
};

export default VideoDetails;