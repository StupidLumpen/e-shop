import styles from './Header.module.css'
import Logo from './Logo/Logo'
import SearchLine from './SearchLine/SearchLine'
import UserButtons from './User Buttons/UserButtons'
import BurgerMenu from './Burger Menu/BurgerMenu'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Logo />
                <SearchLine />
                <UserButtons />
                <BurgerMenu />
            </div>
        </div>
    )
}

export default Header