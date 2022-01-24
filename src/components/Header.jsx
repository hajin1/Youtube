import { useRef } from 'react';
import logo from '../resources/youtubeLogo.svg';
import styles from '../style/header.module.css';

const Header = ({ onSearch, onLogoClick }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    }
    const onKeyPress = (e) => {
        (e.key === 'Enter') && handleSearch();
    }

    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper} onClick={onLogoClick}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.searchWrapper}>
                <input onKeyPress={onKeyPress} ref={inputRef} className={styles.input} type="search" placeholder='Search...'></input>
                <button className={styles.button} onClick={onClick} type="submit">
                    <img className={styles.img} src="/images/search.png" alt="search" />
                </button>
            </div>
        </div>
    )
}

export default Header;