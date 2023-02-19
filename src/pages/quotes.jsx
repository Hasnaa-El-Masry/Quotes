import { useEffect } from 'react'
import Quotes from '../components/quotes'
import NoQuotesFound from '../components/UI/no-data'
import LoadingSpinner from '../components/UI/loading';
import { useHttp } from '../hooks/use-http';
import { get } from '../lib/qouteApi';

const Qoutes = () => {
  const { sendRequest, status, data: quotes, error } = useHttp(get, true);

  useEffect(() => {

    sendRequest();

  }, [sendRequest]);

  if (status === 'pending') {

    return <div className="centered">
    
      <LoadingSpinner />

    </div>

  }

  if (error) {

    return <div className="centered focused">{error}</div>

  }

  if (status === 'completed' && (!quotes || quotes.length === 0)) {

    return <NoQuotesFound href='/new-qoute'/>

  }

  return <Quotes quotes={quotes} isLoading={status === 'pending'} error={error} />

}

export default Qoutes