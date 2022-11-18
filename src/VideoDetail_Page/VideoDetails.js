import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { id } = useParams();

  const [videoData, setVideoData] = useState({});

  //get request to get video ,filtered by id, from database
  useEffect(() => {
    const url = ` https://onnorokom-server-cyce.vercel.app/video-server/api/v1/video/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setVideoData(data.data));
  }, []);
  console.log(videoData);

  return (
    <div className="py-10 ">
      <div class="hero my-48  bg-base-200 border ">
        <div class="hero-content w-full  flex-col lg:flex-row">
          <iframe
            className="rounded shadow h-96 w-full"
            src="https://www.youtube.com/embed/kgcqAZ66aE8"
            height={500}
            width={600}
          ></iframe>
          {/* View,Like,Dislike Count */}
          <div className="w-full">
            <h2 className="text-5xl font-semibold ">Video Details</h2>
            <p>
              Uploader: <span>${videoData?.uploaderEmail}</span>
            </p>
            <p>
              Like:{" "}
              <span className="text-blue-500">{videoData?.likeCount}</span> |
              dislike:{" "}
              <span className="text-blue-500">{videoData?.dislikeCount}</span> |
              view:{" "}
              <span className="text-blue-500">{videoData?.viewCount}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
