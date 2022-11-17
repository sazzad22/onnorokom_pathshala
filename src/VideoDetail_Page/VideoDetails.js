import React, { useEffect, useState } from "react";

const VideoDetails = () => {
  const [video, setVideo] = useState({});

  //get request to get video ,filtered by id, from database
  useEffect(() => {
    let data = {
      link: "http",
    };
    setVideo(data);
  }, []);

  return (
    <div className="py-10">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
        <iframe className="rounded shadow h-96 w-full" src='https://www.youtube.com/embed/kgcqAZ66aE8'></iframe>
          <div>
            <h1 class="text-5xl font-bold">Video Title</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
