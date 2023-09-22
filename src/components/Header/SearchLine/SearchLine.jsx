import styles from './SearchLine.module.css'

const SearchLine = () => {
    return (
        <div className={styles.container}>
            <input type="text" autoComplete="off" placeholder="I search" className={styles.input}/>
            <button className={styles.button}>Find</button>
        </div>
    )
}

export default SearchLine