import Htag from "../components/Htag/Htag";
import {withLayout} from "../layout/Layout";


export function Error404(): JSX.Element {


  return (
    <>
      <Htag tag={'h1'}>404 error</Htag>
    </>
  );
}

export default withLayout(Error404);

