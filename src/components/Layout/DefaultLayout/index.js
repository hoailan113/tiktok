import classNames from "classnames/bind";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import React from "react";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wraper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
