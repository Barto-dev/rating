import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance='primary' arrow='right'>Кпопка</Button>
      <Button appearance='ghost' arrow='down'>Кпопка</Button>
    </>
  );
}
