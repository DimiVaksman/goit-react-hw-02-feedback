import React from "react";
import PropTypes from 'prop-types';
import { Title } from "../title/title";
export const Section = ({ title, children}) => {
  return (
  <div>
<Title title={title} />
{children}
    </div>);
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  };