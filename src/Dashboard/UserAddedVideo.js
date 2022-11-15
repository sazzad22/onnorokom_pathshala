import React from 'react';
import { Link } from 'react-router-dom';

//*child component of dashboard

const userAddedVideo = ({video,refetch}) => {
    const { link,likeCount,dislikeCount,viewCount } = video;
    return (
        <div class="card w-3/4 lg:my-5 my-5 bg-base-100 shadow-md hover:drop-shadow-2xl ease-in-out duration-300 rounded-md ">
            {/* Embeded Video */}
            <iframe className="rounded shadow w-full h-auto" height={500}   src={link}></iframe>
            <div class="card-body">
              <h2 class="card-title">Video Title</h2>
              <p>
                {" "}
                <span className="font-semibold text-neutral">
                  Descripttion:
                </span>
              </p>

              {/* View,Like,Dislike Count */}
              <div>
                <p>
                  Like: <span className="text-blue-500">{likeCount}</span> |
                  dislike: <span className="text-blue-500">{dislikeCount}</span>{" "}
                  | view: <span className="text-blue-500">{viewCount}</span>{" "}
                </p>
              </div>

              <div class="card-actions justify-center  ">
                <div className="grid grid-cols-3 w-full gap-6">
                  {/* Like Button */}
                  <button className="btn btn-secondary rounded w- shadow-xl text-blue-900">
                    Like
                  </button>

                  {/* Dislike button */}
                  <Link
                    className="btn btn-secondary rounded w- shadow-xl text-blue-900"
                    to={"/"}
                  >
                    Dislike
                  </Link>

                  {/* Details button */}
                  <button className="btn btn-secondary rounded w- shadow-xl text-blue-900">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default userAddedVideo;