
import styles from "../styles/Home.module.css";
import { MainLayOut } from "../layouts/MainLayOut";


export default function Home() {
  return (

    <MainLayOut>

      <h1>HomePage</h1>

      <br />

      <p className={styles.description}>
        Get started By EDITING{"🏠"}
        <code className={styles.code}>pages/home</code>
      </p>
      
    </MainLayOut>
  );
}
