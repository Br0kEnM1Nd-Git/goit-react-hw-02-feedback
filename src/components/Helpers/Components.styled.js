import styled from 'styled-components';

const AppWrapper = styled.div`
  height: '100vh';
  display: 'flex';
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: '#010101';
`;

const Div = styled.div``;

const Ul = styled.ul`
  list-style-type: none;
`;

const H2 = styled.h2``;

const H3 = styled.h3``;

const Span = styled.span``;

const Button = styled.button`
  min-width: 50px;
  min-height: 20px;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #dcdcdc;
  border: 0;
  &:hover {
    background-color: rgba(30, 144, 255, 0.5);
  }

  &:active {
    background-color: rgba(50, 205, 50, 0.5);
  }
`;

export { Div, Ul, H2, H3, Span, Button, AppWrapper };
