import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { number } from 'prop-types';

const CommentSection = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserId = getCookie('refreshToken');
    if (storedUserId) {
      setUserId(storedUserId);
      setIsLoggedIn(true);
    }

    // Fetch comments when the component mounts
    fetchComments();
  }, [projectId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/comment/get/${projectId}`);
      if (response.data.status === 'success') {
        setComments(response.data.data);
      } else {
        console.error('Failed to fetch comments');
      }
    } catch (error) {
      console.error('Error fetching comments', error);
    }
  };

  const handlePostComment = async () => {
    // Check if the user is logged in before allowing them to post a comment
    if (!isLoggedIn) {
      console.error('User is not logged in. Cannot post comment.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/comment/post/${projectId}`, {
        userId,
        body: newComment,
      });

      if (response.data.status === 'success') {
        // If the comment is successfully posted, add it to the list of comments
        setComments([...comments, response.data.data]);
        setNewComment('');
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment', error);
    }
  };

  // Function to retrieve a cookie value by name
  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      {/* List of Comments */}
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment?.id} className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-md">
              <span className="font-bold">{comment?.userId}</span>
              <p className="text-black">{comment?.body}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* New Comment Form */}
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className={`mt-2 ${isLoggedIn ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} p-2 rounded-md`}
          onClick={handlePostComment}
          disabled={!isLoggedIn}
        >
          {isLoggedIn ? 'Post Comment' : 'Log in to Comment'}
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
