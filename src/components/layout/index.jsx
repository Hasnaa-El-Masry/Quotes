import styles from './styles.module.scss'
import Navigation from './navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default Layout