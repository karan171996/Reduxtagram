import React from "react";
import Photo from "./Photo";
import { useSelector } from "react-redux";
import styles from "./photoGrid.module.scss";

const PhotoGrid = () => {
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  return (
    <div className={styles.photo_grid}>
      {posts.map((post, i) => (
        <Photo key={i} post={post} comments={comments} />
      ))}
    </div>
  );
};

export default PhotoGrid;
