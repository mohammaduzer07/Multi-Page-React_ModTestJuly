import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="detail-page">
      <h1>Details Page For Post With ID {id}</h1>
      <img className='img' src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p><strong>User Id:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
};

export default DetailPage;
