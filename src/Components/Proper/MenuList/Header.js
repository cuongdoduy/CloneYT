import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
const cx=classNames.bind(styles);
function Header({title,onBack}) {
    return ( 

        <div>
                <header className={cx('wrapper')}>
                    <button className={cx('btn-back')} onClick={onBack}>
                        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                    </button>
                    <h4 className={cx('title')}>{title}</h4>
                </header>
        </div>
     );
}

export default Header;