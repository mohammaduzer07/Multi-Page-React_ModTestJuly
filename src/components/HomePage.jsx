import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../postsSlice'; // Adjust the import path if needed
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="home-page">
      <h1>Social Media App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
            <p>User ID: {post.id}</p>
            <h2>Title: {post.title.length > 20 ? `${post.title.slice(0, 20)}...` : post.title}</h2>
            <p>Body: {post.body.length > 50 ? `${post.body.slice(0, 50)}...` : post.body}</p>
            <Link to={`/item/${post.id}`}>Read More...</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
