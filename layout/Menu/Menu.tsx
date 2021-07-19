import {useContext, useState} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";

import {firstLevelMenu} from "../../helpers/helpers";

import Link from "next/link";

import styles from './Menu.module.css';
import cn from 'classnames';
import {useRouter} from "next/router";

import {motion, useReducedMotion} from "framer-motion";


const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();

  const shouldReduceMotion = useReducedMotion();

  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };

  const variantsChildren = {
    visible: { opacity: 1 , height: 29},
    hidden: { opacity: 0, height: 0}
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        setAnnounce(m.isOpened ? 'closed' : 'opened');
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((menu) => (
          <li key={menu.route} aria-expanded={menu.id === firstCategory}>
            <Link href={`/${menu.route}`}>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id === firstCategory
                })}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id === firstCategory && buildSecondLevel(menu)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}>
                {m._id.secondCategory}
              </button>
              <motion.ul layout
                          variants={variants}
                          initial={m.isOpened ? 'visible' : 'hidden'}
                          animate={m.isOpened ? 'visible' : 'hidden'}
                          className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                          })}>
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.ul>
            </li>);
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.li key={p.alias} variants={variantsChildren}>
          <Link href={`/${route}/${p.alias}`}>
            <a className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
              [styles.thirdLevelHidden] : !isOpened
            })}
               aria-current={`/${route}/${p.alias}` === router.asPath ? 'page' : false}>
              {p.category}
            </a>
          </Link>
        </motion.li>
      ))
    );
  };
  return (
    <nav className={styles.menu}>
      {announce && <span role='log'
                         aria-live='polite'
                         className='visually-hidden'>{announce === 'opened' ? 'Развернуто' : 'Свернуто'}
      </span>}
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
