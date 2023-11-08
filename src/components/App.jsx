import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { AppWrapper } from './Helpers/Components.styled';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodReview = () => {
    this.setState(currState => {
      return { good: currState.good + 1 };
    });
  };

  handleNeutralReview = () => {
    this.setState(currState => {
      return { neutral: currState.neutral + 1 };
    });
  };

  handleBadReview = () => {
    this.setState(currState => {
      return { bad: currState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <AppWrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{
              good: this.handleGoodReview,
              neutral: this.handleNeutralReview,
              bad: this.handleBadReview,
            }}
            // onLeaveFeedback={0}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </AppWrapper>
    );
  }
}
