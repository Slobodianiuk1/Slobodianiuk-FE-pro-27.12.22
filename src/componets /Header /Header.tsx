import React, {FC} from 'react';
import styles from './Header.module.scss'

const Header: FC = (): JSX.Element => {
    return (
        <div className="container">
            <header className={styles.header}>
                <div className={styles.logo}>Logo</div>
                <div className={styles.buttons}>
                    <button className={styles.button}>Sign in</button>
                    <button className={styles.button}>Sign up</button>
                </div>
            </header>
        </div>
    );
};

export default Header;