import Head from "next/head";
import * as React from "react";
import { Navbar, Footer } from ".";

//======================================
export const Layout = ({
  children,
  title = "Website Starter",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  //======================================return
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
