import { useContext, useEffect, useState } from 'react';
import { useHttp } from '../../../hooks/use-http';
import { deleteComment } from '../../../lib/commentApi';
import { CommentsContext } from '../../../store/comments-context';
import Modal from '../../UI/modal';
import CommentItem from '../item';
import classes from './styles.module.scss';
import { AnimatePresence } from "framer-motion";

const CommentsList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { sendRequest, status, error } = useHttp(deleteComment);
  const { deleteItem } = useContext(CommentsContext);

  const reset = () => {
    setModalOpen(false)
    setSelectedItem(false)
  }

  useEffect(() => {
    if (status === 'completed' && !error) {
      deleteItem(selectedItem)
      reset();
    }
  }, [status, error]);

  const openModalHandler = (id) => {
    setModalOpen(true);
  }

  const deleteHandler = () => {
    sendRequest({ quoteId: props.quoteId, commentId: selectedItem })
  }

  return (
    <>
      {modalOpen &&
        <Modal loading={status === 'pending'} onClose={() => setModalOpen(false)} onConfirm={deleteHandler} />
      }

      <AnimatePresence>
        <ul className={classes.comments}>
          {props.comments?.map((comment,indx) => (
            <CommentItem key={indx} text={comment.text} onDelete={() => { setSelectedItem(comment.id); openModalHandler() }} />
          ))}
        </ul>
      </AnimatePresence>
    </>
  );
};

export default CommentsList;
