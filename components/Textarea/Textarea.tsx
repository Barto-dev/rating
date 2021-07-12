import React, {ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';
import styles from './Textarea.module.css';
import {TextareaProps} from "./Textarea.props";

const Textarea = forwardRef(({className, error, ...props}:TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea ref={ref} className={cn(styles.textarea, {
        [styles.error]: error
      })} {...props} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Textarea;
