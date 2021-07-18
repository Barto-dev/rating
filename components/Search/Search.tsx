import React, { useState } from 'react';
import {SearchProps} from "./Search.props";
import styles from './Search.module.css';

import cn from 'classnames';
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchIcon from "./search.svg";
import {useRouter} from "next/router";

const Search = ({className, ...props}:SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  return (
    <form onSubmit={goToSearch} className={cn(styles.search, className)} {...props} role='search'>
      <Input className={styles.input} placeholder='Поиск...' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <Button
        aria-label='Начать поиск'
        type={'submit'}
        appearance='primary'
        className={styles.button}
        onClick={goToSearch}>
        <SearchIcon aria-hidden={true}/>
      </Button>
    </form>
  );
};

export default Search;
