import React from 'react';
import styles from './Review.module.css';
import cn from 'classnames';
import {ReviewProps} from "./Review.props";
import {format} from "date-fns";
import {ru} from "date-fns/locale";

import UserIcon from './user.svg';
import Rating from "../Rating/Rating";

const Review = ({review, className, ...props}: ReviewProps): JSX.Element => {
  const {name, title, description, createdAt, rating} = review;
  return (
    <div className={cn(className, styles.review)} {...props}>
      <UserIcon className={styles.user} />

      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>
        <span>{title}</span>
      </div>

      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>

      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>

      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
};

export default Review;
