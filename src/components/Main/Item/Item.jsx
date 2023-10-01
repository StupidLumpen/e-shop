import styles from './Item.module.css'

const Item = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="https://images.squarespace-cdn.com/content/v1/595e500c78d171779ffdcfef/1610623731416-4QVJQVG47YYZL3V5BFGJ/ITEM-01.jpg?format=1500w" alt=""/>
            
            <div className={styles.descriptionBlock}>
                <span className={styles.name}>Item</span>
                <span className={styles.price}>billion dollars</span>
            </div> 
        </div>
    )
}

export default Item