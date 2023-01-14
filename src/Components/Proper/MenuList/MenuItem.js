import Button from "~/Components/Button";
import classNames from "classnames/bind";
import styles from "./MenuList.module.scss";
let cx=classNames.bind(styles);
function MenuItem({data,onClick}) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return   (    
        <Button className={classes} display icon={data.icon}  to={data.to} onClick={onClick} >
            {data.title}
        </Button>        
        
    );     
}

export default MenuItem;