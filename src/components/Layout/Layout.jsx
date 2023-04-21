import React from "react";
import { PropTypes } from 'prop-types';

export const Layout = ({children}) => {
    return (
        <div>
          <main>{children}</main>
        </div>
      );
}