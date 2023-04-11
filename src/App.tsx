import {FC} from "react";

import Header from "./componets /Header /Header";
import Sidebar from "./componets /Sidebar/Sidebar";
import Page from "./componets /Page/Page";
const App: FC = () : JSX.Element=> {
    return (
        <div className='app'>
            <Header/>
            <div className="content">
                <Sidebar/>
                <Page/>
            </div>
        </div>
    );
};
export default App

