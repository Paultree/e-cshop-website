import styles from "./App.module.scss";
import CarouselPage from "./components/CarouselPage/CarouselPage";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <h1>FAKE STORE PAGE</h1>
      <HomePage />
    </div>
  );
}

export default App;
