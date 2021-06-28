import React from 'react';
import styles from './P.module.css';
import {PProps} from "./P.props";
import cn from 'classnames';

const P = ({size, children}: PProps) : JSX.Element => {
  return (
    <p className={cn(styles.paragraph, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
    })}>{children}</p>
  );
};

export default P;
