import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/form';
import { useHttp } from '../hooks/use-http';
import { add } from '../lib/qouteApi';

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status, error } = useHttp(add);

  useEffect(() => {
    if (status === 'completed' && !error) {
      navigate('..')
    }
  }, [status, error, navigate]);

  const addQuoteHandler = (data) => {
    sendRequest(data);
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote