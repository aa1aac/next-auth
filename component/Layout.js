import Head from "next/head";

import Nav from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>

      <Nav />

      {children}
    </>
  );
};

export default Layout;
