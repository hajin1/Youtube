import { useRef } from 'react';
import logo from '../resources/youtubeLogo.svg';
import styles from '../style/header.module.css';

const Header = ({ setSearchWord }) => {
    const inputRef = useRef();
    const onSubmit = () => {
        const value = inputRef.current.value;
        setSearchWord(value);
    }
    const onKeyPress = (e) => {
        (e.key === 'Enter') && onSubmit();
    }

    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.searchWrapper}>
                <input onKeyPress={onKeyPress} ref={inputRef} className={styles.input} type="search" placeholder='Search...'></input>
                <button className={styles.button} onSubmit={onSubmit} type="submit">
                    <img className={styles.img} src="/images/search.png" alt="search" />
                </button>
            </div>
        </div>
    )
}

export default Header;