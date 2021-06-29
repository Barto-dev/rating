import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="">
        <Sidebar />
        <div className="">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
      return (
        <Layout>
          <Component {...props}/>
        </Layout>
      );
  };
};
