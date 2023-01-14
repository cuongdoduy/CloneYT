import classNames from "classnames/bind";
import styles from './Proper.module.scss';
const cx=classNames.bind(styles);
function Wrapper({children,setPosition,className}) {
    const classes=cx('wrapper',{setPosition},className);
    return ( 
        
        <div className={classes}>
                {children}
        </div>
     );
}

export default Wrapper;