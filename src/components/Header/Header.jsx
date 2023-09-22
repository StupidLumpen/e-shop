import styles from './Header.module.css'
import Logo from './Logo/Logo'
import SearchLine from './SearchLine/SearchLine'

const Header = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <SearchLine />
        </div>
    )
}

export default Header