import Header from "~/components/Layout/DefaultLayout/Header";
import React from "react";

const HeaderOnlyLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnlyLayout;
