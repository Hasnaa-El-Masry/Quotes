import { Link } from 'react-router-dom';
import classes from './styles.module.scss';

const NoQuotesFound = ({href}) => {
  return (
    <div className={classes.noquotes}>
      <p>No data found!</p>
      <Link className='btn' to={href}>
        Add
      </Link>
    </div>
  );
};

export default NoQuotesFound;
