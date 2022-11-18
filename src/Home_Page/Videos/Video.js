import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Iframe from "react-iframe-click";
import { async } from "@firebase/util";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/LoadingSpinner";

const Video = ({ video, refetch }) => {
  const [user, loading] = useAuthState(auth);

  const { _id } = video;

  //change like count on UI
  const [videoData, setVideoData] = useState({});
  useEffect(() => {
    const url = ` https://onnorokom-server-cyce.vercel.app/video-server/api/v1/video/${_id}`;
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setVideoData(data.data));
  }, []);
  // console.log(videoData);
  if (loading) {
    return <Loading></Loading>;
  }

  //update view count when clicked and update the video db

  //update count when user watches a video
  const updateViewCount = async () => {
    console.log("viewed");
    videoData.viewCount++;

    const updatedViewCount = {
      viewCount: videoData?.viewCount,
    };

    //update video db ,by increasing view count in db
    fetch(
      `https://onnorokom-server-cyce.vercel.app/video-server/api/v1/video/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedViewCount),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.result?.video);
        setVideoData(data?.result?.video);
      });
  };

  //hadle like button
  // updateLike(user,_id,videoData,setVideoData)
  const updateLike = async () => {
    //only logged in user can like a video
    if (user && !videoData.userLiked.includes(user.email)) {
      console.log("Liked");
      videoData.likeCount++;

      //update User Liked
      videoData.userLiked.push(user.email);

      const updatedLike = {
        likeCount: videoData.likeCount,
        userLiked: videoData.userLiked,
      };

      //update video db by adding the user email in the userLiked[] array.
      fetch(
        `https://onnorokom-server-cyce.vercel.app/video-server/api/v1/video/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedLike),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.result?.video);
          setVideoData(data?.result?.video);
        });
    }
  };

  //update like when user likes a video
  const updateDislike = () => {
    console.log("Disliked");
    //update video db by adding the user email in the userDisliked[] array.

    //only logged in user can like a video
    if (user && !videoData.userDisliked.includes(user.email)) {
      console.log("Liked");
      videoData.dislikeCount++;

      //update User Liked
      videoData.userLiked.push(user.email);

      const updatedLike = {
        dislikeCount: videoData.dislikeCount,
        userDisked: videoData.userDisliked,
      };

      //update video db by adding the user email in the userLiked[] array.
      fetch(
        `https://onnorokom-server-cyce.vercel.app/video-server/api/v1/video/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedLike),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.result?.video);
          setVideoData(data?.result?.video);
        });
    }
  };

  return (
    <div class="card w-1/2 lg:my-5 my-5 bg-base-100 drop-shadow-2xl shadow-xl ease-in-out duration-300 rounded-md ">
      {/* Embeded Video */}

      <Iframe
        onInferredClick={updateViewCount}
        className="rounded shadow"
        height={400}
        src={videoData?.link}
      ></Iframe>
      <div class="card-body">
        {/* <p>
          {" "}
          <span className="font-semibold text-neutral">Descripttion:</span>
        </p> */}

        {/* View,Like,Dislike Count */}
        <div>
          <p>
            Like: <span className="text-blue-500">{videoData?.likeCount}</span>{" "}
            | dislike:{" "}
            <span className="text-blue-500">{videoData?.dislikeCount}</span> |
            view: <span className="text-blue-500">{videoData?.viewCount}</span>{" "}
          </p>
        </div>

        <div class="card-actions justify-center  ">
          <div className="grid grid-cols-3 w-full gap-6">
            {/* Like Button */}
            <button
              onClick={updateLike}
              className="btn btn-secondary rounded w- shadow-xl text-blue-900"
            >
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
            <Link
              to={`/video/${_id}`}
              className="btn btn-secondary rounded w- shadow-xl text-blue-900"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
