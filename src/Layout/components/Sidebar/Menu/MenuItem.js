import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx=classNames.bind(styles);
function MenuItem({title,icon,to,activeicon,flex__column}) {
    return (  
        <NavLink className={(nav)=> cx('menu-item',{active:nav.isActive,flex__column})}  to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeicon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;