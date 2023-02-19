import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './styles.module.css';
import NewCommentForm from './form';
import List from './list';
import NoDataFound from '../UI/no-data';
import { useHttp } from '../../hooks/use-http';
import { get } from '../../lib/commentApi';
import LoadingSpinner from '../UI/loading';
import { CommentsContext, CommentsProvider } from '../../store/comments-context';

const Comments = () => {

  const [isAddingComment, setIsAddingComment] = useState(false);
  const { id } = useParams();

  const { data: comments, fetch, add } = useContext(CommentsContext);
  const { sendRequest, status, error, data } = useHttp(get);

  useEffect(() => {
    if (!error && status === 'completed') {
      fetch(data)
    }
  }, [status, error])

  useEffect(() => {
    sendRequest(id)
  }, [id])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddedComment = useCallback((data) => {
    add(data)
    // setIsAddingComment(false);
  }, [comments])

  let content;

  if (status === 'pending') {

    content = <div className="centered">

      <LoadingSpinner />

    </div>

  }

  if (error) {

    content = <div className="centered focused">{error}</div>

  }

  if (status === 'completed' && comments?.length) {

    content = <List comments={comments} quoteId={id} />

  }

  if (status === 'completed' && (!comments || comments?.length === 0)) {

    content =
      <div className="centered m-2"><p>No comments were added yet!</p></div>

  }

  return (

    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <div className='centered'>
          <button className='btn' onClick={startAddCommentHandler}>
            Add a Comment
          </button>
        </div>

      )}
      {isAddingComment && <NewCommentForm onClose={() => { setIsAddingComment(false) }} onAddedComment={onAddedComment} id={id} />}
      {content}
    </section>

  );
};

export default Comments;
