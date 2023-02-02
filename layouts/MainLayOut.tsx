import { FC, PropsWithChildren } from 'react';
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import styles from './MainLayOut.module.css';



export const MainLayOut: FC<PropsWithChildren> = ( {children} ) => {



    return (
        <div className={styles.container}>

          <Head>
            <title>Home Page - Mario</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>

            {children}

          </main>
        </div>
      );
    
}
