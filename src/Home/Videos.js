import React from "react";
import Video from "./Video";
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const Videos = () => {
  //Fetching data using React Query

  //dummyLinks
  const videos = [
    {
      link: "https://www.youtube.com/embed/hZjkEf_w6go",
      likeCount: 20,
      dislikeCount: 10,
      viewCount:30
    },
    {
      link: "https://www.youtube.com/embed/kgcqAZ66aE8",
      likeCount: 12,
      dislikeCount: 4,
      viewCount:40
    },
    {
      link: "https://www.youtube.com/embed/hZjkEf_w6go",
      likeCount: 22,
      dislikeCount: 11,
      viewCount:25
    },
    
  ];

  // Authenticate User
  const [user] = useAuthState(auth);
  //use this user to find & fetch the users from database
  //there we have if user liked or disliked a video.
  //then we send that data to Video component

  //current url
  const location = useLocation();
  //Post button function
  const handlePost = () => {
    if (!user) {
      console.log('Please log in first');
      return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    //post api to add video link to server


  }
  
    

  return (
    <div>
      {/* Video post - Input box */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-1 justify-items-center my-20">
              <h2 className="text-5xl font-semibold text-gray-700 my-10">Post a Video</h2>
        <div class="form-control w-full max-w-xl ">
          
          <input
            type="text"
            placeholder="http://"
            class="input input-bordered border-primary w-full max-w-xl shadow-xl"
          />
          <label class="label">
            <span class="label-text-alt">Share your video link</span>
            
                  </label>
                  {/* post video button */}
                  <button onClick={handlePost} className="btn btn-secondary shadow-xl text-blue-900" >Post</button>

        </div>
      </div>

      {/* Video List */}
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-1 justify-items-center my-20">
        {/* add refetch from react query */}
        {videos.map((video) => (
          <Video key={video} video={video}></Video>
        ))}
      </div>
    </div>
  );
};

export default Videos;
