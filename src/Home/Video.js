import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Iframe from 'react-iframe-click';

const Video = ({ video, refetch }) => {
  const { _id,link, likeCount, dislikeCount, viewCount } = video;
  const navigate = useNavigate();

  //change like count on UI
  const [videoData, setVideoData] = useState({});
  useEffect(() => {
    const url = ` https://hidden-citadel-35575.herokuapp.com/inventory/$id`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVideoData(data));
  }, [video]);



  //update view count when clicked and update the video db

  

  //update count when user watches a video
  const updateCount = (count) => {
    count++;
    console.log("count");
  };

  //update like when user likes a video
  const updateLike = () => {
    console.log('Liked');
    //update video db by adding the user email in the userLiked[] array.

  }
  const updateDislike = () => {
    console.log('Disliked');
    //update video db by adding the user email in the userDisliked[] array.

  }

   

  return (
    <div  class="card w-1/2 lg:my-5 my-5 bg-base-100 shadow-md hover:drop-shadow-2xl ease-in-out duration-300 rounded-md ">
      {/* Embeded Video */}

      <Iframe
        onInferredClick={updateCount}
        className="rounded shadow"
        height={200}
        src={link}
        
      ></Iframe>
      <div class="card-body">
        <h2 class="card-title">Video Title</h2>
        <p>
          {" "}
          <span className="font-semibold text-neutral">Descripttion:</span>
        </p>

        {/* View,Like,Dislike Count */}
        <div>
          <p>
            Like: <span className="text-blue-500">{likeCount}</span> | dislike:{" "}
            <span className="text-blue-500">{dislikeCount}</span> | view:{" "}
            <span className="text-blue-500">{viewCount}</span>{" "}
          </p>
        </div>

        <div class="card-actions justify-center  ">
          <div className="grid grid-cols-3 w-full gap-6">
            {/* Like Button */}
            <button onClick={updateLike} className="btn btn-secondary rounded w- shadow-xl text-blue-900">
              Like
            </button>

            {/* Dislike button */}
            <Link
              onClick={updateDislike}
              className="btn btn-secondary rounded w- shadow-xl text-blue-900"
              
            >
              Dislike
            </Link>

            {/* Details button */}
            <Link to={'/video-detail'} className="btn btn-secondary rounded w- shadow-xl text-blue-900">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
