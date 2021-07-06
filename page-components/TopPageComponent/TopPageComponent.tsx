import React from 'react';

import styles from './TopPageComponent.module.css';
import {TopPageComponentProps} from "./TopPageComponent.props";

const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
  return (
    <div>
      {products && products.length}
    </div>
  );
};

export default TopPageComponent;
