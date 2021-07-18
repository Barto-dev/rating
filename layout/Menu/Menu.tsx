import {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";

import {firstLevelMenu} from "../../helpers/helpers";

import Link from "next/link";

import styles from './Menu.module.css';
import cn from 'classnames';
import {useRouter} from "next/router";

import {motion} from "framer-motion";


const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
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
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
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
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</button>
              <motion.div layout
                          variants={variants}
                          initial={m.isOpened ? 'visible' : 'hidden'}
                          animate={m.isOpened ? 'visible' : 'hidden'}
                          className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                          })}>
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>);
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.div key={p.alias} variants={variantsChildren}>
          <Link href={`/${route}/${p.alias}`}>
            <a className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
              [styles.thirdLevelHidden] : !isOpened
            })}>{p.category}</a>
          </Link>
        </motion.div>
      ))
    );
  };
  return (
    <nav className={styles.menu}>
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
