import { orderBy } from "lodash";
import React, { useEffect } from "react";
import CommentsList, { AddCommentForm } from "../common/comments";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList,
  createNewComment,
  deleteComment
} from "../../store/comments";
import { nanoid } from "nanoid";
import { getCurrentUserId } from "../../store/users";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { userId } = useParams();
  const currentUserId = useSelector(getCurrentUserId());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCommentsList(userId));
  }, [userId]);
  const isLoading = useSelector(getCommentsLoadingStatus());
  const comments = useSelector(getComments());

  const handleSubmit = (data) => {
    const comment = {
      ...data,
      _id: nanoid(),
      pageId: userId,
      created_at: Date.now(),
      userId: currentUserId
    };
    dispatch(createNewComment(comment));
  };
  const handleRemoveComment = (id) => {
    dispatch(deleteComment(id));
  };
  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body ">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className="card mb-3">
          <div className="card-body ">
            <h2>Comments</h2>
            <hr />
            {!isLoading ? (
              <CommentsList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
