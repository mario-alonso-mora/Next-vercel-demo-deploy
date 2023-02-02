
import { DarkLayOut } from "../../layouts/DarkLayOut";
import { MainLayOut } from "../../layouts/MainLayOut";
import styles from "../../layouts/MainLayOut.module.css";

export default function About() {
  return (

    <>

    

    <h1>AboutPage</h1>

    <br />

    <p>
    Get started By EDITING{"🎮"}
    <code className={styles.code}>pages/about</code>
    </p>



    </>

  );
}


About.getLayout = function getLayout(page: JSX.Element){

  return(

  <MainLayOut>

  <DarkLayOut>
    
    {page}

  </DarkLayOut>

  </MainLayOut>


  )


} 
