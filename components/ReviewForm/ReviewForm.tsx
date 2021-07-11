import React from 'react';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {ReviewFormProps} from "./ReviewForm.props";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";

import CloseIcon from './cross.svg';
import {useForm, Controller} from "react-hook-form";
import {ReviewFormInterface} from "./ReviewForm.interface";

const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {

  const {register, control, handleSubmit} = useForm<ReviewFormInterface>();

  const onSubmit = (data: ReviewFormInterface) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register('name')}
               placeholder={'Имя'} />
        <Input {...register('title')}
               placeholder={'Заголовок отзыва'}
               className={styles.title} />
        <div className={styles.rating}>
          <span className={styles.ratingTitle}>Оценка</span>
          <Controller render={({field}) => (
            <Rating rating={field.value} isEditable setRating={field.onChange}/>
          )} name={'rating'} control={control} />

        </div>
        <Textarea {...register('description')} className={styles.description} />
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
    </form>
  );
};

export default ReviewForm;
