import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/LoadingSpinner';
import UserVideo from './UserVideo';

//*child component of dashboard

const UserAddedVideo = () => {
  const [user,loading] = useAuthState(auth);
  
  //get  the user
  const {
    data: data,
    isLoading,
    error,
    refetch,
  } = useQuery(["available"], () =>
    fetch(`http://localhost:8000/api/v1/user/${user.email}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }).then((res) => res.json())
    );
  
  if (isLoading || loading) {
    return <Loading></Loading>
  }
  if (error) {
    refetch();
  }
  
  const video = data?.data?.uploadedVideo;
  console.log(video.map((link)=>console.log(link)));
  
  return (
      <div>
      {video.map((link) => <UserVideo key={link} link={link} ></UserVideo>)}
      </div>        
    );
};

export default UserAddedVideo;