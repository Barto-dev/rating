import Htag from "../components/Htag/Htag";
import {withLayout} from "../layout/Layout";


function Error500(): JSX.Element {


  return (
    <>
      <Htag tag={'h1'}>500 error</Htag>
    </>
  );
}

export default withLayout(Error500);
