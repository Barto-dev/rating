import React, {useState, useEffect} from 'react';
import {HeaderProps} from "./Header.props";
import Logo from '../logo.svg';
import {motion, useReducedMotion} from 'framer-motion';

import styles from './Header.module.css';
import cn from 'classnames';
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import Sidebar from "../Sidebar/Sidebar";

import {useRouter} from "next/router";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);


  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%'
    }
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)}/>
      <motion.div
        variants={variants}
        initial='closed'
        animate={isOpened ? 'opened' : 'closed'}
        className={styles.mobileMenu}>
        <Sidebar />
        <ButtonIcon
          onClick={() => setIsOpened(false)}
          className={styles.menuClose}
          appearance='white'
          icon='close' />
      </motion.div>
    </header>
  );
};

export default Header;
