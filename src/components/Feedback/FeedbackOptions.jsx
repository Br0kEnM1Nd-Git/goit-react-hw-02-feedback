import { FeedbackButtonsChamber } from './Feedback.styled';
import { Button } from 'components/Helpers/Components.styled';

export const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback,
}) => {
  return (
    <FeedbackButtonsChamber>
      <Button onClick={good}>Good</Button>
      <Button onClick={neutral}>Neutral</Button>
      <Button onClick={bad}>Bad</Button>
      {/* {onLeaveFeedback} */}
    </FeedbackButtonsChamber>
  );
};
