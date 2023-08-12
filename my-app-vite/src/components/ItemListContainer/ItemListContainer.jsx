import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({ greeting }) => {
  return <div className={styles.greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;