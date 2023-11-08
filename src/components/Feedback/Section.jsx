import { H2 } from 'components/Helpers/Components.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <H2>{title}</H2>
      {children}
    </section>
  );
};
