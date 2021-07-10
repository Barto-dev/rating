import React from 'react';
import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import {priceRu} from "../../helpers/helpers";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice &&
        <Tag className={styles.oldPrice} color={'green'}>{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>{priceRu(product.credit)} / <span className={styles.month}>мес</span></div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} color={'ghost'}
                                                                     key={c}>{c}</Tag>)}</div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>

      <Divider className={styles.hr} />

      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>Фичи</div>

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
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance={'primary'}>Узнать подробнее</Button>
        <Button className={styles.reviewButton} appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
      </div>

    </Card>
  );
};

export default Product;