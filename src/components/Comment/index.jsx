import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_SECRET;

const CommentSection = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');

  useEffect(() => {
    const refreshToken = getCookie('refreshToken');
    try {
      const decoded = jwtDecode(refreshToken);
      if (decoded) {
        setUserId(decoded.id);
        setIsLoggedIn(true);
      }
      fetchComments(id);
    } catch (error) {
      console.error('Error decoding JWT', error);
    }
  }, [id]);

  const fetchComments = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/comment/get/${id}`);
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
    if (!isLoggedIn) {
      console.error('User is not logged in. Cannot post a comment.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/comment/post/${id}`, {
        userId: userId,
        body: newComment,
      });

      if (response.data.status === 'success') {
        setComments([...comments, response.data.data]);
        setNewComment('');
        fetchComments(id);
      } else {
        console.error('Failed to post a comment');
      }
    } catch (error) {
      console.error('Error posting a comment', error);
    }
  };

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
    <div className="comment-section mt-4">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      <div className="comment-input mt-4 mb-10 relative">
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          
        />
        <button
          className={`absolute top-3 right-2 ${isLoggedIn ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} p-2 rounded-md`}
          onClick={handlePostComment}
          disabled={!isLoggedIn}
        >
          📬 
        </button>
      </div>

      {/* List of Comments */}
      <ul className="comment-list space-y-4">
        {comments.slice().reverse().map((comment) => (
          <li key={comment?.id} className="comment-item flex items-start">
            <div className="comment-user flex items-center mb-2">
              <img
                src={comment?.image_url}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-bold mb-2">
                {comment?.first_name} {comment?.last_name}
                <div className="comment-body bg-gray-100 p-2 rounded-md mt-2">
                  <p className="text-black">{comment?.body}</p>
                </div>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
