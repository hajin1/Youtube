import logo from '../resources/youtubeLogo.svg';
import '../style/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className='logo-wrapper'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <div className='search-wrapper'>
                <input></input>
                <button>검색</button>
            </div>
        </div>
    )
}

export default Header;