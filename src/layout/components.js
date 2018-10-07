import * as React from "react";

import * as classNames from "classnames";

import "./main.css";

export const Wrapper = ({ classes, children }) => {
  return <div className={classNames("base-wrapper", classes)}>{children}</div>;
};

export const Container = ({ classes, children }) => {
  return (
    <div className={classNames("base-container", classes)}>{children}</div>
  );
};

export const Navigation = ({ classes, children }) => {
  return <div className={classNames("base-nav", classes)}>{children}</div>;
};

export const Tabs = ({ classes, children }) => {
  return <ul className={classNames("base-tabs", classes)}>{children}</ul>;
};

export const Tab = ({ linkClass, tabClass, url, openIn, children }) => {
  return (
    <li className={classNames("base-tab", tabClass)}>
      <a
        className={classNames("base-navLink", linkClass)}
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
  return (
    <div className={classNames("base-footer", ...classes)}>{children}</div>
  );
};
