import Contents from './components/Contents';
import Header from './components/Header';
import styles from './style/app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Contents />
    </div>
  );
}

export default App;
