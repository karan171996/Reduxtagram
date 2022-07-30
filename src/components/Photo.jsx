import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group"; // ES6
import styles from "./photo.module.scss";
import { useDispatch } from "react-redux";
import { incrementLikes } from "../reducers/posts";

const Photo = (props) => {
  const { post, comments } = props;
  const [likes, setLikes] = useState("");
  const [likeClicked, setLikedClicked] = useState(false);

  useEffect(() => {
    if (likes === "" && post.likes) {
      setLikes(post.likes);
    }
    if (likes !== "" && likes !== post.likes) {
      setLikedClicked(false);
      setLikes(post.likes);
    }
  }, [post.likes]);

  const dispatch = useDispatch();

  const likeHandler = (postId) => {
    setLikedClicked(true);
    dispatch(incrementLikes(postId));
  };

  return (
    <figure className={styles.grid_figure}>
      <div className={styles.grid_photo_wrap}>
        <Link to={`/view/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            className={styles.grid_photo}
          />
        </Link>
        <CSSTransition
          in={likeClicked}
          timeout={500}
          classNames="likes"
          unmountOnExit
        >
          <span key={post.likes} className={styles.likes_heart}>
            {post.likes}
          </span>
        </CSSTransition>
      </div>

      <figcaption>
        <p>{post.caption}</p>
        <div className={styles.control_buttons}>
          <button onClick={() => likeHandler(post.id)} className={styles.likes}>
            &hearts; {post.likes}
          </button>
          <Link className={styles.button} to={`/view/${post.code}`}>
            <span className={styles.comment_count}>
              <span className={styles.speech_bubble}></span>
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
