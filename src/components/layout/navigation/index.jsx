import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { AuthContext } from '../../../store/use-context';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {

    const { token, logout } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const toggle = (e) => {
        setShow(prev => !prev);
        e?.stopPropagation()
    }

    useEffect(() => {
        window.addEventListener('click', (event) => {
            setShow(false)
        });
    },[]);

    return (
        <nav className={styles.nav}>

            <div className={styles.logo}>
                Great Quotes
            </div>

            <div className={styles.toggle} onClick={toggle}>
                <GiHamburgerMenu />
            </div>

            <ul className={show ? styles.show : ''}>
                <li>
                    <NavLink onClick={toggle} className={({ isActive }) => isActive ? styles.active : ''} to='/' end >Quotes</NavLink>
                </li>
                {token &&
                    <>
                        <li>
                            <NavLink onClick={toggle} className={({ isActive }) => isActive ? styles.active : ''} to='/new-qoute'>New Quote</NavLink>
                        </li>
                        <li>
                            <button className='btn--header' onClick={logout}>
                                Logout
                            </button>
                        </li>

                    </>
                }

                {!token && <li>
                    <button className='btn--header'>
                        <NavLink onClick={toggle} className={({ isActive }) => isActive ? styles.active : ''} to='/login'>login</NavLink>
                    </button>
                </li>}
            </ul>

        </nav>
    )
}

export default Navigation