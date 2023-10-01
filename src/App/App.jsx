import styles from './App.module.css'
import Header from '../components/Header/Header'
import MainFrame from '../components/Main/MainFrame'


function App() {
  return (
    <div className={styles.container}>
        <Header />
        <MainFrame />
    </div>
  )
}

export default App;
