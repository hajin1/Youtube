import logo from '../resources/youtubeLogo.svg';
import styles from '../style/header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.searchWrapper}>
                <input></input>
                <button>검색</button>
            </div>
        </div>
    )
}

export default Header;