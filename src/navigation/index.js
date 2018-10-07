import * as React from "react";
import "./index.css";

import * as Layout from "../layout/components";

const navigation = [
  { label: "Home", url: "#" },
  { label: "Work", url: "#" },
  { label: "Project", url: "#" },
  { label: "Skills", url: "#" },
  { label: "About", url: "#" },
  { label: "Contact", url: "#" }
];

const Navigation = () => {
  return (
    <Layout.Navigation classes="nav">
      <Layout.Tabs>
        {navigation.map(({ label, url }) => (
          <Layout.Tab linkClass="link" tabClass="tab" url={url}>
            {label}
          </Layout.Tab>
        ))}
      </Layout.Tabs>
    </Layout.Navigation>
  );
};

export default Navigation;
