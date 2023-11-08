import { H2 } from 'components/Helpers/Components.styled';

export const Section = props => {
  return (
    <Section>
      <H2>{props.title}</H2>
      {props.children}
    </Section>
  );
};
