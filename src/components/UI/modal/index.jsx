import classes from './styles.module.scss'
import Card from '../../UI/card';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion'
import AnimatedWrapper from '../animated-wrapper';

const Modal = ({ onConfirm, onClose, loading }) => {
    return (
        createPortal(
            <AnimatePresence>
                <div className={classes.overlay} onClick={(e) => { onClose() }}>

                    <div className={classes.backdrop} onClick={(e) => { e.stopPropagation() }}>
                        <AnimatedWrapper>
                            <Card>

                                <p>Are you sure to delete?</p>

                                <div className={classes.actions}>
                                    <button className='btn' onClick={(e) => { onConfirm() }}>{loading ? 'submiting...' : 'Ok'}</button>
                                    <button className={'btn danger'} onClick={onClose}>Cancel</button>
                                </div>

                            </Card>
                        </AnimatedWrapper>

                    </div>

                </div>


            </AnimatePresence>

            , document.getElementById('overlay'))

    )
}



export default Modal