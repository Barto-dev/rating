import React from 'react';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';
import {ButtonIconProps} from "./ButtonIcon.props";
import {icons} from "./ButtonIcon.props";

const ButtonIcon = ({icon,className, appearance, ...props}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button className={cn(styles.button,className,  {
      [styles.primary]: appearance === 'primary',
      [styles.white]: appearance === 'white'
    })} {...props}>
      <IconComp />
    </button>
  );
};

export default ButtonIcon;
