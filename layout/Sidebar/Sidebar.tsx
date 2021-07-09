import React from 'react';
import cn from 'classnames';

import Menu from "../Menu/Menu";
import Search from "../../components/Search/Search";
import Logo from '../logo.svg';

import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";


const Sidebar = ({className, ...props} : SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props} >
      <Logo className={styles.logo}/>
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
