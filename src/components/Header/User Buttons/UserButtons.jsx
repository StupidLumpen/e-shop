import styles from './UserButtons.module.css'
import userIcon from './../../../assets/icons/userIcon.svg'
import cartIcon from './../../../assets/icons/cartIcon.svg'

const UserButtons = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <img src={userIcon} alt="" />
            </button>

            <button className={styles.button}>
                <img src={cartIcon} alt="" />
            </button>
        </div>
    )
}

export default UserButtons