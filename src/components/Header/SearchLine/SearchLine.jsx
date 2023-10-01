import styles from './SearchLine.module.css'
import searchIcon from './../../../assets/icons/searchIcon.svg'
import crossIcon from './../../../assets/icons/crossIcon.svg'

const SearchLine = () => {
    const cleanLine = () => {
        const searchLine = document.getElementById('searchLine')
        searchLine.value = ''
    }

    return (
        <div className={styles.container}>
            <input type="text" autoComplete="off" placeholder="I search" className={styles.input} id="searchLine"/>

            <button className={styles.clean} onClick={cleanLine}>
                <img src={crossIcon} alt="" />
            </button>

            <button className={styles.submit}>
                <img src={searchIcon} alt="" />
            </button>
        </div>
    )
}

export default SearchLine