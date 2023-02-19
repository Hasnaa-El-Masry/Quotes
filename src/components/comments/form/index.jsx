import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHttp } from '../../../hooks/use-http';
import { add } from '../../../lib/commentApi';

const NewCommentForm = ({ onAddedComment, id: quoteId, onClose }) => {
  const { register,watch, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = ({commentData}) => {

    sendRequest({ commentData, quoteId });

  };

  const { sendRequest, status, error, data } = useHttp(add);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment({ text: watch('commentData'), id: data.commentId })
      onClose()
    }
  }, [status, error])


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='control'>
        <label htmlFor='commentData'>Your Comment</label>
        <textarea {...register("commentData", { required: true })} id='commentData' rows='5'></textarea>
        {errors.commentData && <span className='text-error'>Please enter a comment!</span>}
  
      </div>

      {error && <div className="alert-error">
        <p>{error}</p>
      </div>}

      <div className='actions centered'>

        <button className='btn'>{status==='pending' ? 'adding...':'Add Comment'}</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
