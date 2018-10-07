import * as React from "react";

import * as classNames from "classnames";

import "./main.css";

export const Wrapper = ({ classes, children }) => {
  return <div className={classNames("wrapper", classes)}>{children}</div>;
};

export const Container = ({ classes, children }) => {
  return <div className={classNames("container", classes)}>{children}</div>;
};

export const Navigation = ({ classes, children }) => {
  return <div className={classNames("nav", classes)}>{children}</div>;
};

export const Tabs = ({ classes, children }) => {
  return <ul className={classNames("tabs", classes)}>{children}</ul>;
};

export const Tab = ({ linkClass, tabClass, url, openIn, children }) => {
  return (
    <li className={classNames("tab", tabClass)}>
      <a
        className={classNames("navLink", linkClass)}
        href={url}
        target={openIn}
      >
        {children}
      </a>
    </li>
  );
};

export const Row = ({ classes, children }) => {
  return <div className={classNames("row", classes)}>{children}</div>;
};

export const Column = ({ classes, children }) => {
  return <div className={classNames("column", classes)}>{children}</div>;
};

export const Header = ({
  title,
  subtitle,
  metadata,
  caption,
  label,
  classes,
  children
}) => {
  return <React.Fragment>{title && <h1>{children}</h1>}</React.Fragment>;
};
export const Footer = ({ classes, children }) => {
  return <div className={classNames("footer", ...classes)}>{children}</div>;
};
