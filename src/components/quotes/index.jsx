import { Fragment, useState } from 'react';
import Sort from '../UI/sort';
import QuoteItem from './item';

const QuoteList = ({ quotes }) => {
  let [sortedQuotes, setSortedQuotes] = useState(quotes);
  
const sortHand = (data) => {
    setSortedQuotes([...data])
  }

  return (
    <Fragment>

      <Sort data={quotes} onSort={sortHand} />
      <ul>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>

    </Fragment >
  );
};

export default QuoteList;
