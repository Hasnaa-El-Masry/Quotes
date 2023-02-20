import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import Modal from '../../UI/modal';

const QuoteItem = (props) => {

  return (

    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={'' + props.id}>
        View Fullscreen
      </Link>
    </li>

  );
};

export default QuoteItem;
