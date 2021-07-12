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

  const {register, control, handleSubmit, formState: {errors}} = useForm<ReviewFormInterface>();

  const onSubmit = (data: ReviewFormInterface) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})}
               placeholder={'Имя'}
               error={errors.name}/>
        <Input {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
               placeholder={'Заголовок отзыва'}
               error={errors.title}
               className={styles.title} />
        <div className={styles.rating}>
          <span className={styles.ratingTitle}>Оценка</span>
          <Controller render={({field}) => (
            <Rating rating={field.value}
                    ref={field.ref}
                    isEditable
                    setRating={field.onChange}/>
          )} name={'rating'} control={control} />

        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Заполните описание'}})}
          placeholder='Текст отзыва'
          error={errors.description}
          className={styles.description} />
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
