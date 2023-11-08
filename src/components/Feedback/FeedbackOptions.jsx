import { FeedbackButtonsChamber } from './Feedback.styled';
import { Button } from 'components/Helpers/Components.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtonsChamber>
      <Button
        onClick={() => {
          onLeaveFeedback(options[0]);
        }}
      >
        Good
      </Button>
      <Button
        onClick={() => {
          onLeaveFeedback(options[1]);
        }}
      >
        Neutral
      </Button>
      <Button
        onClick={() => {
          onLeaveFeedback(options[2]);
        }}
      >
        Bad
      </Button>
    </FeedbackButtonsChamber>
  );
};
