import React from "react";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import UserAddedVideo from './UserAddedVideo';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  //current url
  const location = useLocation();

  //fetch the user data -from server

  //fetch video data - from server
    
    //fake data
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

  const handlePost = () => {
    console.log("Video Posted");
    //post api to add video link to server
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-1 justify-items-center py-20">
      <h2 className="text-5xl font-semibold text-gray-600 underline my-10">
        Post a Video
      </h2>
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
        <button
          onClick={handlePost}
          className="btn btn-secondary shadow-xl text-blue-900"
        >
          Post
        </button>
      </div>

      {/* User Information */}
      <div>
        <h2 className="text-5xl font-semibold text-gray-600 underline mb-5 mt-20 ">
          User Information
        </h2>
        <p className="text-2xl mt-10">
          Name:{" "}
          <span className="font-mono text-accent hover:underline text-2xl">
            {user.displayName}
          </span>
        </p>
        <p className="text-2xl ">
          Email:{" "}
          <span className="font-mono text-accent hover:underline text-2xl">
            {user.email}
          </span>
              </p>
              <hr className="mt-10" ></hr>
              <hr />
              <hr />
              <hr />

        {/* Videos Added By User */}
        <div>
          <h2 className="text-center mt-10 text-3xl">Videos Added By <span className="underline font-semibold">{user.displayName}</span> </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-1 justify-items-center my-10">
            {/* add refetch from react query */}
            {videos.map((video) => (
              <UserAddedVideo key={video} video={video}></UserAddedVideo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
