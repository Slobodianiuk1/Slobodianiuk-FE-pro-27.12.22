import React, {FC} from 'react';
import styles from './Page.module.scss'
const Page:FC = (): JSX.Element => {
    return (
        <main className={styles.page}>
           <section>
               <div className="container">
                   Page
               </div>
           </section>
        </main>
    );
};

export default Page;