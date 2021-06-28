import React from 'react';
import {HtagProps} from "./Htag.props";

const Htag = ({tag, children} : HtagProps): JSX.Element => {
  return (
    <h1>{children}</h1>
  );
};

export default Htag;
