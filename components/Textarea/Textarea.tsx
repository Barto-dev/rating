import React from 'react';
import cn from 'classnames';
import styles from './Textarea.module.css';
import {TextareaProps} from "./Textarea.props";

const Textarea = ({className, ...props}:TextareaProps):JSX.Element => {
  return (
    <textarea className={cn(className, styles.input)} {...props}>

    </textarea>
  );
};

export default Textarea;
