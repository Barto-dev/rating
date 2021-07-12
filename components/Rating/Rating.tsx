import React, {useState, useEffect, forwardRef, ForwardedRef} from 'react';
import {RatingProps} from "./Rating.props";
import cn from 'classnames';

import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = forwardRef(({isEditable = false, rating, setRating, error, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);


  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (

        <button
          type={'button'}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeView(i + 1)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1} >
          <StarIcon/>
        </button>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeView = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperError]: error
      })}
      ref={ref} {...props}
      onMouseLeave={() => changeView(rating)}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Rating;
