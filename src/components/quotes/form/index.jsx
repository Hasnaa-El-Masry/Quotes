import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Card from '../../UI/card';
import LoadingSpinner from '../../UI/loading';

const QuoteForm = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    props.onAddQuote(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        {props.isLoading && (
          <div className='loading'>
            <LoadingSpinner />
          </div>
        )}

        <div className='control'>

          <label htmlFor="auther">Author</label>
          <input  {...register("author", { required: true })} />
          {errors.author && <span className='text-error'>Please enter author name!</span>}

        </div>

        <div className='control'>

          <label htmlFor="text">Text</label>
          <textarea rows='5'  {...register("text", { required: true })} />
          {errors.text && <span className='text-error'>Please enter a text!</span>}

        </div>
        <div className='actions'>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
