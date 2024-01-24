import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_SECRET;

const CommentSection = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayedComments, setDisplayedComments] = useState(3); // Set initial number of comments to display
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

  const showMoreComments = () => {
    setDisplayedComments(displayedComments + 3); // Increase the number of displayed comments by 3
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

      <div className="comment-count mb-3 text-black text-lg">
        Komentar {`(${comments.length} Comments)`}
      </div>

      {/* List of Comments */}
      <ul className="comment-list space-y-4 ml-5">
        {comments.slice().reverse().slice(0, displayedComments).map((comment) => (
          <li key={comment?.id} className="comment-item flex items-start">
            <div className="comment-user flex items-center mb-2">
              <img
                src={comment?.image_url}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-bold">
                {comment?.first_name} {comment?.last_name}
                <div className="comment-body font-medium">
                  <p className="text-gray-600">"{comment?.body}"</p>
                </div>
              </span>
            </div>
          </li>
        ))}
      </ul>

      {comments.length > displayedComments && (
        <button
          className="text-black p-2 rounded-md"
          onClick={showMoreComments}
        >
          Show More
        </button>
      )}
         <FontAwesomeIcon icon={faChevronDown} />

      <div className="comment-input mt-4 mb-10 relative">
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Kirim komentar"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className={` w-[88px] h-[50px] absolute top-2 right-2 ${isLoggedIn ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} p-2 rounded-md`}
          onClick={handlePostComment}
          disabled={!isLoggedIn}
        >
          <svg className="mt-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50042 9.5L14.7504 1.25M6.50042 9.5L9.12542 14.75C9.15832 14.8218 9.21115 14.8827 9.27763 14.9253C9.34411 14.968 9.42143 14.9907 9.50042 14.9907C9.57941 14.9907 9.65673 14.968 9.72321 14.9253C9.78968 14.8827 9.84251 14.8218 9.87542 14.75L14.7504 1.25M6.50042 9.5L1.25042 6.875C1.17861 6.84209 1.11776 6.78926 1.0751 6.72279C1.03244 6.65631 1.00977 6.57899 1.00977 6.5C1.00977 6.42101 1.03244 6.34369 1.0751 6.27721C1.11776 6.21074 1.17861 6.15791 1.25042 6.125L14.7504 1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Kirim
        </button>
      </div>

     
    </div>
  );
};

export default CommentSection;
