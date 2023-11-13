import { FeedbackButtonsChamber } from './Feedback.styled';
import { Button } from 'components/Helpers/Components.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtonsChamber>
      {options.map(option => {
        return (
          <Button
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </FeedbackButtonsChamber>
  );
};
