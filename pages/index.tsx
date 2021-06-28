import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from '../components/P/P';
import Tag from "../components/Tag/Tag";

export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance='primary' arrow='right'>Кпопка</Button>
      <Button appearance='ghost' arrow='down'>Кпопка</Button>
      <P size={'s'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, incidunt.</P>
      <Tag color={'red'} href={'google.com'}>111</Tag>
    </>
  );
}
