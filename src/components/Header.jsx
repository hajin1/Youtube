import logo from '../resources/youtubeLogo.svg';
import styles from '../style/header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.searchWrapper}>
                <input className={styles.input} type="search" placeholder='Search...'></input>
                <button className={styles.button} type="submit">
                    <img className={styles.img} src="/images/search.png" alt="search" />
                </button>
            </div>
        </div>
    )
}

export default Header;