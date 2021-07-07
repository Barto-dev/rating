import React from 'react';
import {AdvantagesProps} from "./Advantages.props";

import styles from './Advantages.module.css';
import AdvantageIcon from './advantage.svg';

const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <div>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <AdvantageIcon />
          <div className={styles.title}>{a.title}</div>

          <hr className={styles.vline} />
          <div className="">{a.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
