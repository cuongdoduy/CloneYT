import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from './MenuList.module.scss';
import { Wrapper as ProperWrapper } from "~/Components/Proper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
function MenuList({children,items=[]}) {
    // console.log(data);
    const [history,setHistory]=useState([{data:items}]);
    const current = history[history.length-1];
    const renderItem=()=>{
        return current.data.map((Item,index) =>   {
          const isParent=!!Item.children;
          return (
            <MenuItem key={index} data={Item}
              onClick={()=>{
                if (isParent) {setHistory((prev)=>[...prev,Item.children])};
                // Item.onClick;
              }}
              
            ></MenuItem> 
          )
          })        
      };
    
    return ( 
        <div>
          <Tippy
            placement="bottom-end"
            // visible
            delay={[0,700]}
            offset={[12,8]}
            interactive
            // hideOnClick={hideOnClick}
            render={(attrs) => (
              <div {...attrs} className={cx("Menu_list")}>
                <ProperWrapper className={cx('menu-popper')}>
                    {(history.length>1) && <Header title="Language" onBack={()=>setHistory((prev)=>{
                      prev.pop();
                      // console.log(prev);
                      return [...prev];
                    })} ></Header>}
                    <div className={cx('Menu__body')}>{renderItem()}</div>
                </ProperWrapper>
              </div>
            )}
            onHide={()=>setHistory((prev)=>prev.slice(0,1))}
          >
                  <span className={cx('children')}>{children}</span>
            </Tippy>
        </div>
     );
}

export default MenuList;