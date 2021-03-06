import React, {useState, useRef, forwardRef, ForwardedRef} from 'react';
import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';

import {priceRu} from "../../helpers/helpers";
import {declOfNum} from "../../helpers/helpers";

import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";

import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

import {motion} from "framer-motion";

const Product = motion(forwardRef(({
                                     product,
                                     className,
                                     ...props
                                   }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {height: 'auto'},
    hidden: {height: 0}
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                 alt={product.title}
                 width={70}
                 height={70} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span className='visually-hidden'>Цена</span>{priceRu(product.price)}
          {product.oldPrice &&
          <Tag className={styles.oldPrice} color={'green'}>
            <span className='visually-hidden'>Скидка</span>
            {priceRu(product.price - product.oldPrice)}
          </Tag>}
        </div>
        <div className={styles.credit}>
          <span className='visually-hidden'>Кредит</span>
          {priceRu(product.credit)} / <span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <span className='visually-hidden'>Рейтинг</span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} color={'ghost'}
                                                                       key={c}>{c}</Tag>)}</div>
        <div className={styles.priceTitle} aria-hidden={true}>цена</div>
        <div className={styles.creditTitle} aria-hidden={true}>кредит</div>
        <div className={styles.rateTitle}>
          <button onClick={scrollToReview}>
            {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </button>
        </div>

        <Divider className={styles.hr} />

        <div className={styles.description}>{product.description}</div>

        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots} />
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.advBlock}>

          {product.advantages && <div className={styles.advantages}>
            <h3 className={styles.advTitle}>Преимущества</h3>
            <div className="">{product.advantages}</div>
          </div>}


          {product.disadvantages && <div className={styles.disadvantages}>
            <h3 className={styles.advTitle}>Недостатки</h3>
            <div className="">{product.disadvantages}</div>
          </div>}

        </div>
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance={'primary'}>Узнать подробнее</Button>
          <Button onClick={() => setIsReviewOpened(!isReviewOpened)}
                  className={styles.reviewButton}
                  appearance={'ghost'}
                  arrow={isReviewOpened ? 'down' : 'right'}
                  aria-expanded={isReviewOpened}>
            Читать отзывы
          </Button>
        </div>
      </Card>

      <motion.div className={cn(styles.reviewAnimation, {
        [styles.reviewFormHidden] : !isReviewOpened
      })}
                  animate={isReviewOpened ? 'visible' : 'hidden'}
                  variants={variants}
                  initial='hidden'>
        <Card ref={reviewRef} color='blue' className={cn(styles.reviews)} tabIndex={0}>
          {product.reviews.map(r => (
            <div key={r._id}>
              <Review review={r} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} />

        </Card>
      </motion.div>
    </div>
  );
}));

export default Product;
