import React, {useState} from 'react';
import {RatingProps} from "./Rating.props";
import cn from 'classnames';

import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon />
      );
    });
  };

  return (
    <div {...props}>

    </div>
  );
};

export default Rating;
