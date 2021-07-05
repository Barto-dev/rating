import React from 'react';
import cn from 'classnames';

import Menu from "../Menu/Menu";
import Logo from '../logo.svg';

import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";

const Sidebar = ({className, ...props} : SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props} >
      <Logo className={styles.logo}/>
      <div className="">Поиск</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
