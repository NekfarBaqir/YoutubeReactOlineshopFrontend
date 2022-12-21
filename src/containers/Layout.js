import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="keyword" content={keywords} />
        <meta name="description" content={description} />
      </head>
      <div className="flex flex-col min-h-screen">
        <header className="flex-0">
          <Header />
        </header>
        <main className="flex-1">{children}</main>
        <footer className="flex-0">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
