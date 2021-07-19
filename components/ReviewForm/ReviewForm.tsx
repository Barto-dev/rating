import React, {useState} from 'react';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {ReviewFormProps} from "./ReviewForm.props";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";

import CloseIcon from './cross.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewSentResponse, ReviewFormInterface} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api";

const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();

  const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<ReviewFormInterface>();

  const onSubmit = async (formData: ReviewFormInterface) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так');
      }
    } catch (e) {
      setIsError(e.message);
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})}
               placeholder={'Имя'}
               error={errors.name}
               aria-invalid={!!errors.name}/>
        <Input {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
               placeholder={'Заголовок отзыва'}
               error={errors.title}
               className={styles.title}
               aria-invalid={!!errors.title}/>
        <div className={styles.rating}>
          <span className={styles.ratingTitle}>Оценка</span>
          <Controller render={({field}) => (
            <Rating rating={field.value}
                    ref={field.ref}
                    isEditable
                    error={errors.rating}
                    setRating={field.onChange} />
          )} rules={{required: {value: true, message: 'Выберите оценку'}}}
                      name={'rating'}
                      control={control}
          />

        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Заполните описание'}})}
          placeholder='Текст отзыва'
          error={errors.description}
          className={styles.description} aria-label='Текст отзыва'
          aria-invalid={!!errors.description}/>
        <div className={styles.submit}>
          <Button appearance={'primary'} onClick={() => {clearErrors();}}>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && <div className={cn(styles.success, styles.panel)} aria-live='polite' role='status'>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <button type='button'
                className={styles.close}
                onClick={() => setIsSuccess(false)}
                aria-label='Закрыть оповещение'>
          <CloseIcon />
        </button>
      </div>}

      {isError && <div className={cn(styles.error, styles.panel)} aria-live='polite' role='status'>
        <div>
          Что-то пошло не так, попробуйте обновить страницу
        </div>
        <button className={styles.close}
                onClick={() => setIsError(undefined)}
                aria-label='Закрыть оповещение'>
          <CloseIcon />
        </button>
      </div>}

    </form>
  );
};

export default ReviewForm;
