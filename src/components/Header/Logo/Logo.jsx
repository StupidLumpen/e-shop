import styles from './Logo.module.css'
import snakeIcon from './../../../assets/icons/snakeIcon.svg'

const Logo = () => {
    const getHome = () => {
        document.location.replace('')
    }

    return (
        <div className={styles.container} onClick={getHome}>
            <span className={styles.text}>SlySnake</span>
            <img src={snakeIcon} alt="Something went wrong" className={styles.image}/>
        </div>
    )
}

export default Logo