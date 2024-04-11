import styles from "./MoveHome.module.css";
import { Link } from "react-router-dom";

function MoveHome() {
  return (
    <Link to="/" className={styles.moveBtn}>
      🏠
    </Link>
  );
}

export default MoveHome;
