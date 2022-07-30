import React from "react";
import Photo from "./Photo";
// import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Single = () => {
  const comments = useSelector((state) => state.comments);
  const posts = useSelector((state) => state.posts);

  let { postId } = useParams();

  const allComments = comments[postId];
  const post = posts.find((item) => item.code === postId);

  console.log("slug", allComments);
  return (
    <div className={styles.single_photo}>
      <Photo post={post} comments={comments} />
      <Comments postComments={allComments} />
    </div>
  );
};

export default Single;
