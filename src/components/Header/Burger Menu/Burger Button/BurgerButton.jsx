import styles from './BurgerButton.module.css'

const BurgerButton = (props) => {

    return (
        <div className={props.activated ? styles.activated : styles.container} id="burgerButton">
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
        </div>
    )
}

export default BurgerButton