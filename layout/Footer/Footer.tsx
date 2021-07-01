import React from 'react';
import {FooterProps} from "./Footer.props";
import cn from 'classnames';
import styles from './Footer.module.css';

import {format} from 'date-fns';

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
          <a target="_blank" href="#">Пользовательское соглашение</a>
          <a target="_blank" href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
