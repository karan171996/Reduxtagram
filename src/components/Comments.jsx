import React from "react";

const Comments = () => {
  const renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              i
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  };
  return (
    <div className="comments">
      {this.props.postComments.map(renderComment)}
      <form ref="commentForm" className="comment-form" onSubmit={handleSubmit}>
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
