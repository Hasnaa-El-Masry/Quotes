import classes from './styles.module.scss';
import {RiDeleteBin2Fill} from 'react-icons/ri';
import { motion, usePresence } from "framer-motion";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

const CommentItem = (props) => {
  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    style: {
      position: isPresent ? "static" : "absolute"
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1, color: 'red' },
      out: { scaleY: 0, opacity: 0, zIndex: -1, color: 'red' },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  };

  return (
    <motion.li {...animations} className={classes.item}>
      <p>{props.text}</p>
      <RiDeleteBin2Fill onClick={props.onDelete} className={classes.delete_icon}/>
    </motion.li>
  );
};

export default CommentItem;
