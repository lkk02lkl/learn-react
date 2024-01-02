import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditPost = ({
  posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
  )
}

export default EditPost