import React from "react";
import FooterMenu from "components/templates/FooterMenu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      {children}
      <FooterMenu />
    </div>
  );
};

export default Layout;
