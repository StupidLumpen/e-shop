import Item from './Item/Item'
import styles from './MainFrame.module.css'

const MainFrame = () => {
    return (
        <div className={styles.container}>
            <Item/>
        </div>
    )
}

export default MainFrame