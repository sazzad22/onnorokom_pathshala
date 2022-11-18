import React from "react";
import { Link } from "react-router-dom";

const UserVideo = ({ link }) => {
    
  return (
    <div class="card w-3/4 lg:my-5 my-5 bg-base-100 shadow-2xl hover:drop-shadow-2xl ease-in-out duration-300 rounded-md ">
      {/* Embeded Video */}
      <iframe
        className="rounded shadow w-full h-auto"
        height={500}
        src={link}
      ></iframe>
      <div class="card-body">
        <h2 class="card-title">Video Title</h2>
        <p>
          {" "}
          <span className="font-semibold text-neutral">Descripttion:</span>
        </p>

        {/* View,Like,Dislike Count */}
        {/* <div>
          <p>
            Like: <span className="text-blue-500">{likeCount}</span> | dislike:{" "}
            <span className="text-blue-500">{dislikeCount}</span> | view:{" "}
            <span className="text-blue-500">{viewCount}</span>{" "}
          </p>
        </div> */}

        <div class="card-actions justify-center  ">
          
        </div>
      </div>
    </div>
  );
};

export default UserVideo;
