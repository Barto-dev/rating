import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from '../components/P/P';
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import Input from "../components/Input/Input";
import {useState} from "react";

import {withLayout} from "../layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {MenuItem} from "../interfaces/menu.interface";
import Textarea from "../components/Textarea/Textarea";
import {API} from "../helpers/api";


function Home({menu, firstCategory}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance='primary' arrow='right'>Кпопка</Button>
      <Button appearance='ghost' arrow='down'>Кпопка</Button>
      <P size={'s'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, incidunt.</P>
      <Tag color={'red'} href={'google.com'}>111</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Input placeholder={'Name'}/>
      <Textarea placeholder={'Name'}/>

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: 0
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number
}
