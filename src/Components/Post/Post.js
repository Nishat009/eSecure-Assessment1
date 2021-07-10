import React from "react";
import "./Post.css";
const Post = ({ post }) => {
  return (
    <div class="card shadow  bg-body rounded card-design border-shadow mt-3">
      <div>
        <img
          className="img-fluid "
          src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          alt=""
        />
        <div className="card-body">
          <h3 className="p-2">{post.title.slice(0, 10)}</h3>
          <p className="p-2">{post.body}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="p-4">
            <a href="#">Share</a>
          </div>
          <div className="p-4  ">
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
