import * as React from "react";

import * as classNames from "classnames";

import "./main.css";

export const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export const Navigation = ({ classes, children }) => {
  return <div className={classNames("nav", classes)}>{children}</div>;
};

export const Tabs = ({ children }) => {
  return <ul className="tabs">{children}</ul>;
};

export const Tab = ({ url, openIn, children }) => {
  return (
    <li className="tab">
      <a className="navLink" href={url} target={openIn}>
        {children}
      </a>
    </li>
  );
};

export const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

// export const Columns = ({ ...type, children }) => {
//   return <div className={classNames(type)}>{children}</div>;
// };
