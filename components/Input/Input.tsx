import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Input.module.css';
import {InputProps} from "./Input.props";
import cn from 'classnames';

const Input = forwardRef(({className, error, ...props}: InputProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper ,className)}>
    <input ref={ref}
           type="text"
           className={cn(styles.input, {
             [styles.error]: error
           })} {...props}/>
      {error && <span aria-live='polite'
                      role='status'
                      className={styles.errorMessage}>{error.message}
      </span>}
      </div>
  );
});

export default Input;
