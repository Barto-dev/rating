import React from 'react';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {ReviewFormProps} from "./ReviewForm.props";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";

import CloseIcon from './cross.svg';

const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder={'Имя'} />
        <Input placeholder={'Заголовок отзыва'} className={styles.title} />
        <div className={styles.rating}>
          <span className={styles.ratingTitle}>Оценка</span>
          <Rating rating={0} />
        </div>
        <Textarea className={styles.description} />
        <div className={styles.submit}>
          <Button appearance={'primary'}>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className="">
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <button className={styles.close}>
          <CloseIcon />
        </button>
      </div>
    </>
  );
};

export default ReviewForm;
