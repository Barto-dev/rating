import React, {useReducer, useEffect} from 'react';

import styles from './TopPageComponent.module.css';
import {TopPageComponentProps} from "./TopPageComponent.props";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import Advantages from "../../components/Advantages/Advantages";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";

import HhData from "../../components/HhData/HhData";
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortEnum} from "../../components/Sort/Sort.props";
import {sortReducer} from "./sort.reducer";
import { useReducedMotion } from 'framer-motion';

const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
  const [{products: sortedProducts, sort}, dispatchSort] =useReducer(sortReducer, {products, sort: SortEnum.Rating});

  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort});
  };

  useEffect(() => {
    dispatchSort({type: 'reset', initialState: products});
  }, [products]);


  return (
    <div className={styles.wrapper}>
      <header className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>{products.length}</Tag>}

        <Sort sort={sort} setSort={setSort} />
      </header>

      <div role='list'>
        {sortedProducts && sortedProducts.map(p => (<Product role='listitem' layout={!shouldReduceMotion} key={p._id} product={p}/>))}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag={'h2'}>Преимущества</Htag>
        <Advantages advantages={page.advantages} />
      </>
      }
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
      <Htag tag={'h2'}>Получаемые навыки</Htag>
      {page.tags.map(t => <Tag key={t} color={'primary'}>{t}</Tag>)}


    </div>
  );
};

export default TopPageComponent;
