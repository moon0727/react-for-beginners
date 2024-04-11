import styles from "./Header.module.css";

function Header({ headername }) {
  return <h1 className={styles.header}>{headername}</h1>;
}

export default Header;
