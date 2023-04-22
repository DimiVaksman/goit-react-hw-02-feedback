import React from 'react';
import { PropTypes } from 'prop-types';
import { Notification } from '../Notification/Notification';
import {
  StatisticsContainer,
  Likes,
  Text,
  StatNumberLickes,
  StatNumberNeutral,
  StatNumberDislikes,
  Total,
  TotalNumber,
  PositiveFeedbackStyled,
  PostFeedbNumber
} from './Statistics.styled';
import { FcLike, FcNeutralDecision, FcDislike } from 'react-icons/fc';
import { AiFillDislike } from 'react-icons/ai';

export const Statistics = ({
  good = 0,
  bad = 0,
  neutral = 0,
  total = 0,
  positiveFeedback = 0,
}) => {
  return total ? (
    <StatisticsContainer>
      <Likes>
        <Text>
          <FcLike size="48" /> <StatNumberLickes>{good}</StatNumberLickes>
        </Text>
        <Text>
          <FcNeutralDecision size="48" />{' '}
          <StatNumberNeutral>{neutral}</StatNumberNeutral>
        </Text>
        <Text>
          <AiFillDislike size="48" />{' '}
          <StatNumberDislikes>{bad}</StatNumberDislikes>
        </Text>
      </Likes>
      <Total>
        Total: <TotalNumber>{total}</TotalNumber>
      </Total>
      <PositiveFeedbackStyled>
        Positive feedback: <PostFeedbNumber>{positiveFeedback}</PostFeedbNumber>%
      </PositiveFeedbackStyled>
    </StatisticsContainer>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
