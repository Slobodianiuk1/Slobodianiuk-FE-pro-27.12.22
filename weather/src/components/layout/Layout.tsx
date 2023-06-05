import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/layout/header";
import Meta from "@/components/seo/meta";
import {IMeta} from "@/components/seo/meta.interface";

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
  return (
    <Meta title={title} description={description}>
      <Header/>
      <div>
        {children}
      </div>
    </Meta>
  );
};

export default Layout;