import HighlightedQuote from '../components/quotes/highlighted-item';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHttp } from '../hooks/use-http';
import { getById } from '../lib/qouteApi';
import LoadingSpinner from '../components/UI/loading';
import NoDataFound from '../components/UI/no-data';
import { CommentsProvider } from '../store/comments-context';

const QouteDetails = () => {
  const params = useParams();
  const { id } = params;

  const { sendRequest, status, data: item, error } = useHttp(getById, true);

  useEffect(() => {

    sendRequest(id);

  }, [sendRequest, id]);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if (error) {

    return <div className="centered focused">{error}</div>

  }

  if (!item.text) {
    return <NoDataFound href='/new-form' />
  }

  return (
    <div>
      <HighlightedQuote auther={item.auther} text={item.text} />
      <CommentsProvider>
        <Outlet />
      </CommentsProvider>
    </div>
  )
}

export default QouteDetails