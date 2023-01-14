import classNames from "classnames/bind";
import Header from "../components/Header/Header.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import styles from "./DefaultLayout.module.scss";
const cx=classNames.bind(styles);
function DefaultLayout({children}) {
    return (  
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;