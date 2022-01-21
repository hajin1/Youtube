import { useState } from 'react';
import Contents from './components/Contents';
import Header from './components/Header';
import styles from './style/app.module.css';

const App = () => {
  const [searchWord, setSearchWord] = useState('');
  return (
    <div className={styles.app}>
      <Header setSearchWord={setSearchWord} />
      <Contents searchWord={searchWord} />
    </div>
  );
}

export default App;
