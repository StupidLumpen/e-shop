import styles from './BurgerMenu.module.css'
import BurgerButton from './Burger Button/BurgerButton'
import { useState } from 'react'

const BurgerMenu = () => {
    const[activated, setActivated] = useState(false)

    const toggle = (event) => {
        const burgerButton = document.getElementById('burgerButton')

        if (event.target !== burgerButton && event.target.parentElement !== burgerButton) {
            return
        }

        setActivated(!activated)
    }

    return (
        <div className={activated ? styles.activated : styles.container} onClick={toggle} id="burgerMenu">
            <BurgerButton activated={activated}/>
        </div>
    )
}

export default BurgerMenu