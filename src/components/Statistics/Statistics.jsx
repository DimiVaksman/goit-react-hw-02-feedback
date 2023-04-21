import React from 'react';
import { PropTypes } from 'prop-types';
import { Notification } from '../Notification/Notification';

export const Statistics = (
  { good = 0, bad = 0, neutral = 0, total = 0, positiveFeedback = 0 },
) => {
  return total ? (
    <div>
      <p>
        Good:<span>{good}</span>
      </p>
      <p>
        Neutral:<span>{neutral}</span>
      </p>
      <p>
        Bad:<span>{bad}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:<span>{positiveFeedback}</span>%
      </p>
    </div> 
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
