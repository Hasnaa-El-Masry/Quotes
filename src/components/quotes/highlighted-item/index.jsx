import classes from './styles.module.scss';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <figcaption>Hasnaa Elmasry</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
