import React from 'react';
import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
  return (
    <div {...props}>
      {product.title}
    </div>
  );
};

export default Product;
