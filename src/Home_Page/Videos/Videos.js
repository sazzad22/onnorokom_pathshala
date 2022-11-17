import React from "react";
import Video from "../Videos/Video";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const Videos = () => {
  const [user] = useAuthState(auth);
  //Fetching data using React Query

  const {
    data: data,
    isLoading,
    refetch,
  } = useQuery(["available"], () =>
    fetch("http://localhost:5000/api/v1/video", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }).then((res) => res.json())
  );

  //Video data
  const videos = data?.data;

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  // Authenticate User
  //use this user to find & fetch the users from database
  //there we have if user liked or disliked a video.
  //then we send that data to Video component

  return (
    <div>
      {/* Video post - Input box */}
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-1 justify-items-center my-20"></div>

      {/* Video List */}
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-1 justify-items-center my-20">
        {/* add refetch from react query */}
        {videos.map((video) => (
          <Video key={video._id} video={video}></Video>
        ))}
      </div>
    </div>
  );
};

export default Videos;
