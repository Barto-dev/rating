import React, {useEffect} from 'react';
import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import cn from "classnames";
import {motion, useMotionValue} from 'framer-motion';

import ArrowIcon from './arrow.svg';

const Button = ({children, appearance, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1);

/*
  useEffect(() => {
    scale.onChange( s => console.log(s));
  }, []);
*/


  return (
    <motion.button whileHover={{scale: 1.05}} className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost'
    })}
                   style={{scale}}
                   {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow === 'down'
      })}><ArrowIcon /></span>}
    </motion.button>
  );
};

export default Button;
