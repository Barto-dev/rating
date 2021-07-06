import React from 'react';

import styles from './TopPageComponent.module.css';
import {TopPageComponentProps} from "./TopPageComponent.props";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";

const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}

        <span>Сортировка</span>
      </header>

      <div className="">
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>

      <div className={styles.hh}>

      </div>
    </div>
  );
};

export default TopPageComponent;
