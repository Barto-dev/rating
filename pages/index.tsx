import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from '../components/P/P';
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import {useState} from "react";

import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance='primary' arrow='right'>Кпопка</Button>
      <Button appearance='ghost' arrow='down'>Кпопка</Button>
      <P size={'s'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, incidunt.</P>
      <Tag color={'red'} href={'google.com'}>111</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);
