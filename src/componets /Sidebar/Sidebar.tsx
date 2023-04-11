import React, {FC} from 'react';
import  styles from './Sidebar.module.scss'
const Sidebar: FC = (): JSX.Element => {
    return (
        <aside className={styles.sidebar}>
        <nav>
            <ul>
                <a href="/">
                    Link 1
                </a>
            </ul>
            <ul>
                <a href="/">
                    Link 2
                </a>
            </ul>
            <ul>
                <a href="/">
                    Link 3
                </a>
            </ul>
            <ul>
                <a href="/">
                    Link 3
                </a>
            </ul>
            <ul>
                <a href="/">
                    Link 3
                </a>
            </ul>
        </nav>
        </aside>
    );
};

export default Sidebar;