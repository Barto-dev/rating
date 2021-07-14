import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import up from './up.svg';
import close from './cross.svg';
import menu from './burger.svg';

export const icons = {
  up,
  close,
  menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  appearance: 'primary' | 'white';
  icon: IconName;
}
