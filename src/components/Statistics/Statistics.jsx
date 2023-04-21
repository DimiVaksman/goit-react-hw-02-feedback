import React from 'react';
import { PropTypes } from 'prop-types';
import { Notification } from '../Notification/Notification';
import { StatisticsContainer,Likes,StatNumber,Text } from "./Statistics.styled";
import { FcLike, FcNeutralDecision, FcDislike, } from "react-icons/fc";

export const Statistics = (
  { good = 0, bad = 0, neutral = 0, total = 0, positiveFeedback = 0 },
) => {
  return total ? (
    <StatisticsContainer>
<Likes>
<Text>
       <FcLike size="48"/> <StatNumber>{good}</StatNumber>
      </Text>
      <Text>
        <FcNeutralDecision size="48"/> <StatNumber>{neutral}</StatNumber>
      </Text>
      <Text>
        <FcDislike size="48" /> <StatNumber>{bad}</StatNumber>
      </Text>
</Likes>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positiveFeedback}</span>%
      </p>
    </StatisticsContainer> 
  ) : (
    <Notification message="There is no feedback" />
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
