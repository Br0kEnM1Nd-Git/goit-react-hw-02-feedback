import styled from 'styled-components';
import { Div } from 'components/Helpers/Components.styled';

const FeedbackWrapper = styled(Div)``;

const FeedbackButtonsChamber = styled(Div)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
`;

const FeedbackStatistics = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
`;

export { FeedbackWrapper, FeedbackButtonsChamber, FeedbackStatistics };
