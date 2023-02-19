import classes from './styles.module.scss';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
