import { FeedbackStatistics } from './Feedback.styled';
import { Span } from 'components/Helpers/Components.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackStatistics>
      <Span>Good: {good}</Span>
      <Span>Neutral: {neutral}</Span>
      <Span>Bad: {bad}</Span>
      <Span>Total: {total()}</Span>
      <Span>Percentage: {positivePercentage()}%</Span>
    </FeedbackStatistics>
  );
};
