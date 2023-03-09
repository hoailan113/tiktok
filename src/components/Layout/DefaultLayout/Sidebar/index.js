import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return <aside className={cx("wraper")}>Sidebar</aside>;
};

export default Sidebar;
