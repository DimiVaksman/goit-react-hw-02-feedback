import React from "react";
import { PropTypes } from 'prop-types';
import {Cntainer, Main} from './Layout.styled'

export const Layout = ({children}) => {
    return (
        <Cntainer>
          <Main>{children}</Main>
        </Cntainer>
      );
}

Layout.propTypes = {
    children: PropTypes.any.isRequired,
  };