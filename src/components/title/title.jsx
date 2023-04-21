import React from 'react';
import PropTypes from 'prop-types';
import {TitleStyled,TitleContainer} from './title.styled'

export const Title = ({title}) => {
    return (
<TitleContainer>
<TitleStyled>{title}</TitleStyled>
</TitleContainer>
    )
}


Title.propTypes = {
    title: PropTypes.string.isRequired,
  };