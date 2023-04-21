import React from 'react';
import PropTypes from 'prop-types';
import { Buttons, ButtonItem, ButtonStyled } from "./Feedbacloptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(option => {
        return (
          <ButtonItem key={option}>
            <ButtonStyled
              key={option}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </ButtonStyled>
          </ButtonItem>
        );
      })}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};