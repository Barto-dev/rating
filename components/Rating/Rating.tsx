import React, {useState, useEffect} from 'react';
import {RatingProps} from "./Rating.props";
import cn from 'classnames';

import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
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
    <div {...props} onMouseLeave={() => changeView(rating)}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};

export default Rating;
