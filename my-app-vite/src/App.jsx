import NavBarComponent from "./components/NavBarComponent/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBarComponent />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Bienvenidos a Max Informática" />
      </main>
      <footer className={styles.footerContainer}>Info</footer>
    </div>
  );
};

export default App;
